import PostList from "../components/Postlist";
import ProfileBar from "../components/profilebar/Profilebar";
import CreatePost from "../components/postsection/CreatePost";
import "./Mainpage.css";

function CreatePostpage(props) {
  return (
    <div className="mainbody">
      <ProfileBar
        isLogin={props.isLogin}
        nowLogin={props.nowLogin}
        Logout={props.Logout}
      />
      <CreatePost />
    </div>
  );
}

export default CreatePostpage;