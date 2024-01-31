import PostList from "../components/Postlist";
import ProfileBar from "../components/profilebar/Profilebar";
import "./Mainpage.css";

function MyPostPage(props) {
  return (
    <div className="mainbody">
      <ProfileBar
        isLogin={props.isLogin}
        nowLogin={props.nowLogin}
        Logout={props.Logout}
      />
    </div>
  );
}

export default MyPostPage;
