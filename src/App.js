import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Postpage from './pages/Postpage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Post" element={<Postpage />} />
        <Route index element={<Homepage />}>
        
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
