import React from 'react';
import Navbar from '../Components/Header/navbar';
import Mainimg from './msamainimg.png'
import aboutusimg from './msaaboutus.png'
import AboutUs from '../Components/About us/Aboutus'
import Card from '../Components/Card1/cards';
import MovieReel from '../Components/MovieReel/MovieReel'
import Footer from '../Components/Footer/Footer';
import IndusB2BSolutions from '../Components/Blogs/blogs';
import aircourse from './aircourse.png'
import startupcourse from './startupcourse.png'
import digitalmarket from './digitalmarket.png'
import fcard from './fcard.png'
import basiclog from './basiclog.png'
import ecomlog from './ecomlog.png'
import airfrecourse from './aircourse.png'
import incoterms from './incoterms.png'
import exim from './exim.png'
import salestraining from './salestraining.png'
import eximproc from './eximproc.png'
import demandfore from './demandforce.png'
import inventory from './inventory.png'
import Aboutus from './AboutUs';
import skills from './skills.jpeg'
import skillssbg from './skillssbg.png'

const Page3 = () => {
  return (
    <div>
      <Navbar/>
      <img className='image' src={Mainimg} alt="Main" />
      <Aboutus
      photo={aboutusimg}
      heading={'ABOUT US'}
      descript={'My Skills Academy, part of the Indus Group, offers meticulously crafted online courses and workshops in fields like analytics, business management, IT, and more. Designed by industry experts, our curriculum combines theoretical knowledge with practical insights, preparing students for real-world challenges through interactive workshops, case studies, and simulations. Our emphasis on experiential learning and career support services ensures students excel in competitive job markets globally. Join My Skills Academy to embark on a transformative educational journey and unlock your professional potential.'}
      />
      <h3 style={{textAlign:"center",fontSize:"30px",padding:"2 0px"}} >Transform Your Future with My Skills Academy: Where Innovation Meets Expertise in Global Business Leadership</h3>
      <img src={skillssbg} alt='hello' style={{height:"700px",padding:"10px"}}/>
      <p
       style={{textAlign:"left",fontSize:"24px",padding:"15px "}}>
      My Skills Academy is a unit of The Indus Group Co. an ISO certified company, where knowledge meets innovation and transforms futures. At My Skills Academy, we are dedicated to nurturing the next generation of leaders in diverse fields such as Logistics & Supply Chain Management, Analytics, Business Management, International Business (EXIM) and various other streams through our meticulously crafted hybrid (online/offline) courses, Training &  Workshops, we empower young minds with the skills and expertise needed to thrive in today's dynamic professional landscape.
      <br/><br/>
Our commitment to excellence is reflected in our comprehensive curriculum, designed by industry related subject matter experts and thought leaders. Each course is meticulously crafted to impart both theoretical knowledge and practical insights, ensuring that our students are not only well-versed in fundamental concepts but also equipped to tackle real-world challenges. Whether you aspire to delve into the intricacies of data analytics, lead multinational corporations through effective business management strategies, or navigate the complexities of international trade and logistics, My Skills Academy provides the ideal platform for your academic and professional growth and a boost for your candidature to help you stand out.
<br/><br/>
What sets us apart is our emphasis on experiential learning and practical application. Through interactive workshops, case studies, and simulations, students gain hands-on experience that prepares them to hit the ground running from day one. Our faculty comprises seasoned professionals and academics who bring a wealth of industry experience into the virtual classroom, ensuring that every lesson is relevant, insightful, and tailored to meet current industry demands.
The impact of our courses is not just theoretical; it is tangible. Many of our alumni have achieved remarkable success in their careers, securing coveted placements and making substantial contributions to their respective fields. The skills and knowledge acquired through My Skills Academy have proven instrumental in propelling their careers forward, equipping them with the confidence and competence to excel in competitive job markets globally.


 
      </p>
      <div style={{padding:"20px",}}> 
        <div style={{height:"500px",width:"500px",float:"right",justifySelf:"center",marginRight:"30px",marginLeft:"30px"}}> 
          <img src={skills} alt=""></img>
        </div>
        <p
        style={{textAlign:"left",fontSize:"24px"}}
        > 

        Moreover, our commitment to 
        student success extends 
        beyond a certified course and 
        extends to practicality, we offer 
        career counselling services, 
        resume workshops, and 
        networking opportunities to 
        empower our students with the 
        tools they need to achieve their
        professional aspirations. 
        Our alumni network is a 
        testament to the enduring
         relationships fostered at 
        My Skills Academy, where
        mentorship and support 
        continue long after the
         completion of courses.
        <br/>
        <br/>
        Joining My Skills Academy isn't just about earning a certificate; it's about embarking on a transformative educational journey that prepares you for leadership roles in the ever-evolving landscape of global business. Whether you're a recent graduate looking to specialize or a seasoned professional aiming to upskill, our flexible online courses are designed to accommodate your schedule and accelerate your career trajectory.
        Discover the My Skills Academy advantage today and unlock your potential in analytics, business management, international business, logistics and supply chain management, human resources, information technology, hospitality, customs, warehousing, e-commerce, insurance, and product management. Enrol now and become part of a vibrant community dedicated to shaping the future of industries worldwide.
         </p>
      </div>
      <h1>CERTIFICATE COURSES OFFERED</h1>

      <div className="card-wrap">
      <Card 
      bgImage={aircourse}
      text= "INTERNATIONAL FREIGHT FORWARDING" />
      <Card 
      bgImage={startupcourse}
      text= "START-UP $ SCALE-UP IN INTERNATIONAL TRADE "/>
      <Card 
      bgImage={digitalmarket}
      text= "DIGITAL MARKETING "/>
    </div>
    <div className="card-wrap">
      <Card 
      bgImage={fcard}
      text= "F-CARD CUSTOMS EXAM PREPARATIONS" />
      <Card 
      bgImage={basiclog}
      text= "BASIC LOGISTICS & FREIGHT FORWARDING"/>
      <Card 
      bgImage={ecomlog}
      text= "E-COMMERCE LOGISTICS CERTIFIED PROFESSIONAL "/>
    </div>
<div className="card-wrap">
      <Card 
      bgImage={airfrecourse}
      text= "AIR FREIGHT BASICS " />
      <Card 
      bgImage={incoterms}
      text= "MASTERCLASS ON INCOTERMS "/>
      <Card 
      bgImage={exim}
      text= "EXIM DOCUMENTATION & PROCEDURES "/>
    </div>

     <div className="card-wrap">
      <Card 
      bgImage={salestraining}
      text= "SALES TRAINING" />
      <Card 
      bgImage={eximproc}
      text= "EXIM PROCEDURES & GLOBAL TRADE SUPPLY CHAIN"/>
      <Card 
      bgImage={demandfore}
      text= "DEMAND FORECASTING IN SUPPLY CHAIN MANAGEMENT"/>
    </div>

    <div className="card-wrap">
      <Card 
      bgImage={inventory}
      text= "INVENTORY MANAGEMENT" />

      </div>
     
    
      <MovieReel/>

      {/* <IndusB2BSolutions/> */}

      <Footer/>
    </div>
  );
}

export default Page3;
