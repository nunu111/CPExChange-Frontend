import Post from "../components/postsection/Post";
import ProfileBar from "../components/profilebar/Profilebar";
import './Mainpage.css'
export default function post(props) {
  return (
    <div className="mainbody">
      <ProfileBar isLogin={props.isLogin} nowLogin={props.nowLogin} Logout={props.Logout} getName={props.getName}/>
      <Post isLogin={props.isLogin} getName={props.getName}/>
    </div>
  );
}
