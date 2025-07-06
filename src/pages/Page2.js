import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import Navbar from '../Components/Header/navbar';
import AboutUs from '../Components/AboutUs/Aboutus';
import iimage from './truckimg.png';
import mainimg from './logistictopimg.png';
import Card from '../Components/Card1/cards.jsx'
import MovieReel from '../Components/MovieReel/MovieReel.jsx';
import Footer from '../Components/Footer/Footer';
import water from './Waterfreight.png';
import land from './Landfreight.png';
import air from './Airfreight.png';
import stars from './Starphotos.png';
import aboutusimg from './aboutuspage2.png'
import '../App.css';
import b2bimg from './b2bimg.png'
const Page2 = () => {
  return (
    <div>
      <Navbar />

      <img className='image' src={mainimg} alt="Main" />

      <AboutUs
      heading="ABOUT US"
      descript={"At The Indus Group Co., we take the stress out of your logistics & supply chain. As a leading logistics provider specializing in integrated global logistics solutions, we offer a comprehensive suite of solutions designed to streamline your operations and ensure your goods reach their destination efficiently and reliably. Our team is dedicated to exceeding your expectations. We go beyond simple cargo transportation, offering warehousing solutions and end-to-end logistics expertise to cater to both domestic and international markets. Our focus is on providing you with a seamless experience. Whether you require domestic or international shipping, short-term storage, or a comprehensive logistics strategy, The Indus Group Co. is your one-stop shop, ensuring your needs are met with efficiency and unwavering reliability."}
      photo={aboutusimg}
      />

      <div className='immage-container'>
      {/* <img className='immage' src={iimage} alt="Secondary" /> */}
      </div>

      <br/>
      <br/>

      <div style={{padding:"20px",}}> 
        <div style={{height:"300px",width:"300px",float:"right",justifySelf:"center",marginRight:"30px",marginLeft:"30px"}}> 
          <img src={b2bimg} alt=""></img>
        </div>
        <p
        style={{textAlign:"left",fontSize:"24px"}}
        > <b>Features:</b><br/><br/>
<br/><b>·   Ensures On-Time Delivery:</b> We understand the critical nature of timely arrivals. That's why we prioritize efficient logistics and clear communication to guarantee your cargo reaches its destination precisely when you need it.<br/>
<br/><b>·   Expert Packing and Secure Shipping:</b> Your cargo is in safe hands. Our team utilizes professional packing techniques and high-quality materials to ensure your goods arrive at their designated port undamaged and secure.<br/>
<br/><b>· Transparency Throughout the Journey:</b> <br/><br/>
We believe in clear communication.
 Every step of the shipping process is
 meticulously documented, keeping you 
informed and ensuring your complete
 satisfaction.<br/><br/>
<b>·  Global Reach with Unwavering Quality:</b><br/><br/>
 We utilize top-tier international shipping
 containers renowned for their durability
 and security. Your cargo travels in the
 best possible environment, guaranteeing 
its safe arrival.<br/><br/>
<b>·  Door-to-Door Delivery with Efficiency:</b>.<br/><br/>
 Convenience is key. We handle the entire
 delivery process, ensuring your goods
 arrive directly at your client's doorstep,
 streamlining the logistics and saving you valuable time.<br/><br/>
<b>Consultative Expertise for Industry Leaders:</b>·   Our knowledge extends beyond transportation. We offer expert consulting services, providing valuable guidance on import/export procedures and effective logistics management, empowering you to make informed decisions.<br/>
<br/><b>Streamlined Global Logistics with Team Indus:</b>·  Offers a comprehensive suite of international freight forwarding services, ensuring seamless transportation of your cargo across the globe. We leverage our expertise in air, sea, and road freight to deliver efficient and cost-effective solutions, tailored to your specific needs.<br/>
<br/><b>·  Compliance & Peace of Mind</b><br/><br/>
Our team of certified customs brokers ensures meticulous documentation and adherence to Indian customs regulations, guaranteeing a smooth and compliant import/export process.<br/>
<b>· Quality You Can Trust</b><br/><br/>
The Indus Group operates under the rigorous ISO 9001:2015 quality management standards. This commitment to excellence extends to our personnel, services, and every aspect of your shipment.<br/>
<b>· Expertise that Saves</b><br/><br/>
Our extensive experience and industry knowledge allow us to optimize your logistics strategy, minimizing costs and maximizing efficiency.<br/>
<b>·  Global Reach & Scalability</b><br/><br/>
Strong partnerships with all the stakeholder i.e. leading airlines and shipping, ports-terminal operators & Govt. Agencies assuring you to provide unparalleled global reach and scalability for your cargo. We have the resources and capacity to manage cargo movements of any size ODC/OOG/DG-HAZMAT etc.<br/>
 </p>
      </div>
    <div className='iimmage-container'>
      <img className='iimmage' src={stars} alt="Secondary" />
      </div>

      <MovieReel/>
      <br/>
      <br/>
      <br/>
    <Footer/>
    </div>
  );
}

export default Page2;
