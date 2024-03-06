import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Postpage from "./pages/Postpage";
import { Login } from "./components/function/Login";
import CreatePostpage from "./pages/CreatePostpage";
import MyPostPage from "./pages/MyPostPage";
import BookmarkPage from "./pages/BookmarkPage";
import { useEffect } from "react";
import axios from "axios";
import { IPconfig } from "./components/function/IPconfig";
import { render } from "react-dom";
function App() {
  const { nowLogin, isLogin, logout ,getName } = Login();
  const { getIP } = IPconfig();
  // * Check if token exists in localStorage
  useEffect(() => {
    // Check if localStorage is available
    if (typeof localStorage === 'undefined') {
      console.error('localStorage is not supported in this browser');
      return;
    }
    // Check if a specific item exists in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // Perform your action if the item doesn't exist
      // For example, you can set a default value or initialize the item
      localStorage.setItem('token', '');
    }else{
      CheckAuthAPI(token);
    }
    // The dependency array is empty to run this effect only once when the component mounts
  }, []);

  const CheckAuthAPI = async (token) => {
    const serverIP = getIP();
    await axios
      .get(serverIP + "/v1/guests/isAuth",
      {headers: { Authorization: `Bearer ${token}` }})
      .then((res) => {
        console.log("res", res.data.profileName);
        nowLogin(res.data.profileName);
      })
      .catch((err) => {
        console.log("Error Auth:", err);
      });
      console.log("pass");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-post" element={<MyPostPage 
              isLogin={isLogin}
              nowLogin={nowLogin}
              Logout={logout}
              getName={getName}/>}/>
        <Route path="/bookmark" element={<BookmarkPage 
              isLogin={isLogin}
              nowLogin={nowLogin}
              Logout={logout}
              getName={getName}/>}/>
        <Route
          path="/Create-Post"
          element={
            <CreatePostpage
              isLogin={isLogin}
              nowLogin={nowLogin}
              Logout={logout}
              getName={getName}
            />
          }
        />
        <Route
          path="/Post/:PID"
          element={
            <Postpage isLogin={isLogin} nowLogin={nowLogin} Logout={logout} getName={getName} />
          }
        />

        <Route
          path="/"
          element={
            <Homepage isLogin={isLogin} nowLogin={nowLogin} Logout={logout}  getName={getName}/>
          }
        >
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
