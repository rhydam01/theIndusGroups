import React from 'react';
import './blogs.css';
import image1 from './images/business.jpg'; 
import image2 from './images/finance.jpg'; 
import image3 from './images/analytics.jpg'; 
import image4 from './images/meeting.jpg'; 
import Navbar from '../Header/navbar';
import Moviereel from './counter';
import MovieReel from '../MovieReel/MovieReel';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const IndusB2BSolutions = () => {
  return (
   <div>
  <div style={{height:"80px", backgroundColor:'aqua'}}>
    <Navbar/>
  </div>
  
  <div className='blogs' >
    <div className='red_block'><p>Blogs</p></div>
    <div className='text_blog'>
      <p className='text_1'>Global Integrated Logistics Solutions by, The Indus Group Co.</p>
      <p className='text_2'>At The Indus Group Co., we take the stress out of your logistics & supply chain. As a leading logistics provider specializing in integrated ............</p>
      <p className='text_3'>11 April 2024</p>
     <a href='/blogs/blog-01'>
      <button className='read_more' >Read More</button>
      </a>
    </div>
  </div>
  <div className='meeting'>
    <img src={image4}></img>
  </div>

<div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
<div className='containerB'>
  <img src={image1} />
  <p className='containerTitleB'>The Future of Business Intelligence: Leveraging Big Data and Analytics for Growth</p>
  <p className='containerBodyB'>In the dynamic world of enterprise, if you aren’t growing, you’re falling behind. We differentiate with our ability to extract maximum value through our pillars of innovation, optimization and adaptability. Here is how we are leading the charge on business and industry transformations around the globe.</p>
  <a href='/blogs/blog-01'><p className='containerTitleB'>Read More -</p></a>
  <p className='containerTitleB'>11 April,2024</p>
</div>

<div className='containerB'>
  <img src={image2} style={{height:"250px"}}/>
  <p className='containerTitleB'>Global Integrated Logistics Solutions by, The Indus Group Co.</p>
  <p className='containerBodyB'>At The Indus Group Co., we take the stress out of your logistics & supply chain. As a leading logistics provider specializing in integrated global logistics solutions, we offer a comprehensive suite of solutions designed to streamline your operations and ensure your goods reach their destination efficiently and reliably.</p>
  <a href={"/blogs/blog-02"}><p className='containerTitleB'>Read More -</p></a>
  <p className='containerTitleB'>11 April,2024</p>
</div>


</div>

<div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
<div className='containerB'>
  <img src={image3} style={{height:"250px"}}/>
  <p className='containerTitleB'>Future-Proofing Your Career: Essential Skills for the Digital Age</p>
  <p className='containerBodyB'>In today's fast-paced and ever-changing world, staying at the top of your game means being a lifelong learner and constantly upgrading your skills. My Skills Academy, a unit of The Indus Group Co. and an ISO 9001: 2015 certified platform, is dedicated to empowering individuals and organizations to navigate the modern landscape independently.</p>
  <a href={"/blogs/blog-03"}><p className='containerTitleB'>Read More -</p></a>
  <p className='containerTitleB'>11 April,2024</p>
</div>

<div className='containerB'>
  <img src={image4} style={{height:"250px"}}/>
  <p className='containerTitleB'>Unlocking Success: The Power of an End-to-End Supply Chain Partner</p>
  <p className='containerBodyB'>Companies face constant pressure to boost efficiency, costs, and stay ahead in today's fast-changing industrial world. Indus Co. gets these challenges. The Indus Group Co. offers integrated global logistics solutions to drive excellence and spark growth</p>
  <a href={"/blogs/blog-04"}><p className='containerTitleB'>Read More -</p></a>
  <p className='containerTitleB'>11 April,2024</p>
</div>
</div>
<MovieReel/>
<Footer/>

</div>
  
  );
};

export default IndusB2BSolutions;
