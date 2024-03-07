import { useEffect, useState } from "react";
import PostList from "../components/postlistsection/Postlist";
import Bookmark from "../components/postsection/Bookmark";
import ProfileBar from "../components/profilebar/Profilebar";
import "./Mainpage.css";
import axios from "axios";
import { IPconfig } from "../components/function/IPconfig";
import { useNavigate} from "react-router-dom";
function BookmarkPage(props) {
  const [isNoMorePost, setIsNoMorePost] = useState(false);
  const [time,setTime] = useState(0)
  const getPageAPI = async (serverIP,page,PostList,setPostList) => {
    console.log(time,"Time")
    if (PostList.pop()===undefined) ;
    else setTime(PostList.pop().create_at)
    console.log("Check Postlist1", PostList);
    await axios
      .get(serverIP + `/pages?timeStamp=${time}` ,{headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }})
      .then((res) => {
        console.log("res", res.data);
        setPostList(PostList.concat(res.data));
        if(res.data.length <10) setIsNoMorePost(true)
        console.log("Check Postlist2", PostList);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
      
  };

  const navigate = useNavigate();
  const { getIP } = IPconfig();
  const CheckAuthAPI = async () => {
    const serverIP = getIP();
    await axios
      .get(serverIP + "/v1/guests/isAuth",
      {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }})
      .then((res) => {
        
      })
      .catch((err) => {
        console.log("Error Auth:", err);
        if(err.response.status === 401) {
          navigate("/unAuth");
        }
      });
      console.log("pass");
  }

  useEffect(() => {
    CheckAuthAPI();
  }, []);


  
  return (
    <div className="mainbody">
      <div>
      <ProfileBar
        isLogin={props.isLogin}
        nowLogin={props.nowLogin}
        Logout={props.Logout}
        getName={props.getName}
      />
      </div>
      <div className="Mainbox">
        <Bookmark/>
      <PostList isLogin={props.isLogin} getPageAPI={getPageAPI} isNoMorePost={isNoMorePost} />
      </div>
    </div>
  );
}

export default BookmarkPage;

// import React, { useEffect, useState } from "react";
// import "../components/postlistsection/Postlist.css";
// import Postbox from "../components/postlistsection/Postbox.jsx";
// import editIcon from "../components/Icon/edit.svg";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import { IPconfig } from "../components/function/IPconfig.js";
// const BookmarkPage = (props) => {
//   const [PostList, setPostList] = useState([]);

//   const [isFetching, setIsFetching] = useState(false);
//   const [page, setPage] = useState(1);
//   const { getIP } = IPconfig();
//   const location = useLocation();

//   useEffect(() => {
//     props.getPageAPI(serverIP, page, PostList, setPostList);
//     // getPageAPI();
//     console.log(PostList);
//   }, []);

//   const serverIP = getIP();

//   useEffect(() => {
//     if (!props.isNoMorePost) {
//       const handleScroll = () => {
//         // Calculate the distance from the bottom
//         const distanceFromBottom =
//           document.documentElement.scrollHeight -
//           (window.innerHeight + document.documentElement.scrollTop);
//         // Define a threshold for triggering the fetch (adjust as needed)
//         const threshold = 1000;
//         // Check if the user has reached the bottom of the page
//         if (distanceFromBottom < threshold && !isFetching) {
//           setIsFetching(true);
//           console.log(page);
//           setPage(page + 1);
//           props.getPageAPI(serverIP, page + 1, PostList, setPostList);
//           // getPageAPI();
//           // Simulate fetching more data (replace with your actual fetching logic)
//           // For demonstration purposes, we're using a setTimeout here
//           setTimeout(() => {
//             // Your data fetching logic goes here

//             // Set isFetching back to false after fetching is complete
//             setIsFetching(false);
//           }, 1000); // Adjust the delay as needed
//         }
//       };

//       // Attach the scroll event listener
//       window.addEventListener("scroll", handleScroll);

//       // Clean up the event listener when the component unmounts
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, [isFetching]);

//   return (
//     <div className="Mainbox">
//       {props.isLogin() && location.pathname === "/" && (
//         <div>
//           <Link to="/Create-Post" className="CreatePostButton">
//             <img src={editIcon} className="icon" alt="edit" />
//             <span className="text">เขียนโพสต์...</span>
//           </Link>
//         </div>
//       )}
//       {location.pathname === "/" && (
//         <div className="Topicbox">
//           <span className="Text">โพสต์ยอดฮิต</span>
//           <span> / </span>
//           <span className="Text"> โพสต์ล่าสุด</span>
//         </div>
//       )}
//       {PostList.map((Post, i) => {
//         const taglist = Array.isArray(Post.taglist) ? Post.taglist : [];
//         return (
//           <Postbox
//             title={Post.topic}
//             taglist={taglist}
//             detail={Post.detail}
//             date={Post.create_at}
//             isVerify={Post.has_verify}
//             comment={Post.commentCount}
//             like={Post.like_count}
//             displayname={Post.profile_name}
//             PID={Post.id}
//             history={location.pathname}
//             is_like={Post.is_like}
//             key={i}
//           />
//         );
//       })}

//       {!props.isNoMorePost && isFetching && <div className="loader"></div>}
//     </div>
//   );
// };

// export default BookmarkPage;
