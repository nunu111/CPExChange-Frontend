import ProfileBar from "../components/profilebar/Profilebar";
import CreatePost from "../components/postsection/CreatePost";
import "./Mainpage.css";

function CreatePostpage(props) {
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
      <div>
      <CreatePost />
      </div>
    </div>
  );
}

export default CreatePostpage;
