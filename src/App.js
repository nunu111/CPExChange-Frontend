import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Postpage from './pages/Postpage';
import { Login } from "./components/function/Login";
function App() {
  const {nowLogin,isLogin,logout} = Login();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Post" element={<Postpage isLogin={isLogin} nowLogin={nowLogin} Logout={logout}/>} />
        <Route index element={<Homepage isLogin={isLogin} nowLogin={nowLogin} Logout={logout}/>}>
        
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
