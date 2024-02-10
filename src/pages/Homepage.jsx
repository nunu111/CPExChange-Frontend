import PostList from "../components/postlistsection/Postlist";
import ProfileBar from "../components/profilebar/Profilebar";
import "./Mainpage.css";

function Homepage(props) {
  return (
    <div className="mainbody">
      <ProfileBar
        isLogin={props.isLogin}
        nowLogin={props.nowLogin}
        Logout={props.Logout}
        getName={props.getName}
      />
      <PostList isLogin={props.isLogin} />
    </div>
  );
}

export default Homepage;
