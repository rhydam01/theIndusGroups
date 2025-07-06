import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure Routes is imported
import HomePage from './pages/HomePage';
import Indusenterprises from './pages/Indusenterprises';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import AboutUs from './Components/About us/Aboutus';
import img from '../src/pages/Aboutus.png';
import IndusB2BSolutions from './Components/Blogs/blogs';
import { FaWhatsapp } from 'react-icons/fa';
import Blog from './Components/Blogs/blogPage1';
import Blog2 from './Components/Blogs/blogPage2';
import Blog3 from './Components/Blogs/blogPage3';
import Blog4 from './Components/Blogs/blogPage4';
import Leadership from './Components/leadership/leadership';
import Page404 from './pages/404/404';
import Login from './Components/Sign in/signIn';
import Careeers from './Components/careers/careers';
import FAQ from './Components/faq/faq';
import Events from './Components/events/events';
import CookiePolicy from './Components/cookie/CookiePolicy';

function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
        
        <Route path="/signIn" element={<Login />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
           <Route path="/company/leadership" element={<Page404 />} />
           <Route path="/careers" element={<Careeers />} />
        <Route path="/knowledge-centre/News-and-Updates" element={<Page404 />} />
        <Route path="/knowledge-centre/Events" element={<Events />} />
        <Route path="/knowledge-centre/Notification-Centre" element={<Page404 />} />
        <Route path="/tools/Rate-discovery" element={<Page404 />} />
        <Route path="/tools/Tracking" element={<Page404 />} />
        <Route path="/tools/HS-code" element={<Page404 />} />
        <Route path="/tools/Finder" element={<Page404 />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/company/equal-opportunity" element={<Careeers />} />
          <Route path="/blogs/blog-01" element={<Blog />} />
          <Route path="/blogs/blog-02" element={<Blog2 />} />
          <Route path="/blogs/blog-03" element={<Blog3 />} />
          <Route path="/blogs/blog-04" element={<Blog4 />} />
        <Route path="/knowledge-centre/Blogs" element={<IndusB2BSolutions />} />
        <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Indusenterprises" element={<Indusenterprises />} />
          <Route path="/Indusb2b" element={<Page2 />} />
          <Route path="/MySkillsAcademy" element={<Page3 />} />
          
        </Routes>
      </div>
    </Router>
    <a 
    href={`https://wa.me/7011332238`} 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ position: 'fixed', bottom: '60px', right: '60px', zIndex: 1000, backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}
>
    <FaWhatsapp size={50} color="#25D366" />
</a>
</>
  );
}

export default App;
