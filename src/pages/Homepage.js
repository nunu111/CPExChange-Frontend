import PostList from '../components/Postlist';
import ProfileBar from '../components/profilebar/Profilebar';
import './Mainpage.css';

function Homepage() {
  return (
    <div className="mainbody">
      <ProfileBar />
      <PostList />  
    </div>
  );
}

export default Homepage;
