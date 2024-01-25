import Post from '../components/Postlist';
import ProfileBar from '../components/profilebar/Profilebar';
import './Mainpage.css';

function Homepage() {
  return (
    <div className="mainbody">
      <ProfileBar />
      <Post />
    </div>
  );
}

export default Homepage;
