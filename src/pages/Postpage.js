import PostList from "../components/Postlist";
import Post from "../components/postsection/Post";
import ProfileBar from "../components/profilebar/Profilebar";
import "./Mainpage.css";
export default function post() {
  return (
    <div className="mainbody">
      <ProfileBar />
      <Post />
    </div>
  );
}
