import PostList from "../components/Postlist";
import ProfileBar from "../components/profilebar/Profilebar";
import "./Mainpage.css";

function BookmarkPage(props) {
  return (
    <div className="mainbody">
      <ProfileBar
        isLogin={props.isLogin}
        nowLogin={props.nowLogin}
        Logout={props.Logout}
        getName={props.getName}
      />
    </div>
  );
}

export default BookmarkPage;
