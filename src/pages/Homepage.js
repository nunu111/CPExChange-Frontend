import PostList from '../components/Postlist';
import ProfileBar from '../components/profilebar/Profilebar';
import './Mainpage.css';

function Homepage(props) {
  return (
    <div className="mainbody">
      <ProfileBar isLogin={props.isLogin} nowLogin={props.nowLogin} Logout={props.Logout}/>
      <PostList /> 
    </div>
  );
}

export default Homepage;
