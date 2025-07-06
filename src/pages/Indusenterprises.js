import React from 'react';
import Header from '../Components/Header/navbar'
import Carousel from '../Components/Carousel/Carousel'
import AboutUs from '../Components/About us/Aboutus'
import MovieReel from '../Components/MovieReel/MovieReel'
import IndusB2BSolutions from '../Components/Blogs/blogs';
import Footer from '../Components/Footer/Footer';
import Card from '../Components/Card1/cards';
import Mainimg from './enterprisemainimg.png'
import aboutus from './enterprisesaboutus.png'
import inclorporation from './incorploration.png'
import compliances from './compliance.png'
import itsupport from './itsupport.png'
import legalassistance from './legalassistance.png'
import gsttaxation from './gsttaxation.png'
import fundraising from './fundraising.png'
import Aboutus from './AboutUs';
import ent1 from './ent1.png';
import ent2 from './ent2.png';
import ent3 from './ent3.png';
import ent4 from './ent4.png';
import ent5 from './ent5.png';
import ent6 from './ent6.png';

const Page1 = () => {
  return (
    <div>
       
       <Header/>
       
       {/* <Carousel/> */}
       
       <img className='image' src={Mainimg} alt="Main" />
      
      
      <Aboutus 
      heading={'ABOUT US'}
      photo={aboutus}
      descript={'Established in 2011, Indus Enterprises is a prominent Indian multinational company specializing in infrastructural development, energy, trade, and manufacturing. With a reputation for flexibility and innovation, Indus has successfully implemented high-profile projects across India, significantly contributing to the countrys economic growth. Indus offers a comprehensive range of services, including startup consulting, legal assistance, digital marketing, trade finance, and HR solutions. The company is committed to excellence and strategic expansion, enhancing infrastructure, energy profiles, trade relations, and manufacturing capabilities both locally and globally.'}
      />

    <img src={ent1} style={{width:"80vw",paddingLeft:"10vw"}}/>
    <div style={{height:"5vh"}}></div>
    <img src={ent2} style={{width:"90vw",paddingLeft:"5vw"}}/>
    <h3 style={{fontSize:"30px",paddingLeft:"5vw"}}><u>OUR PRODUCTS AND SERVICES</u></h3>
    <img src={ent3} style={{width:"80vw",paddingLeft:"10vw"}}/>
    <div style={{height:"5vh"}}></div>
    <h3 style={{fontSize:"30px",paddingLeft:"5vw"}}><u>OUR COMPETETIVE ADVANTAGES</u></h3>
    <div style={{height:"5vh"}}></div>
    <img src={ent4} style={{width:"88vw",paddingLeft:"6vw"}}/>
    <div style={{height:"5vh"}}></div>
    <h3 style={{fontSize:"30px",paddingLeft:"5vw"}}><u>OUR TARGET AUDIENCE</u></h3>
    <div style={{height:"5vh"}}></div>
    <img src={ent5} style={{width:"88vw",paddingLeft:"6vw"}}/>
    <div style={{height:"5vh"}}></div>
    <img src={ent6} style={{width:"88vw",paddingLeft:"6vw"}}/>
      <h1>OUR SERVICES</h1>


      <div className="card-wrap">
      <Card text= "INCORPLORATION OF STARTUP" 
      bgImage={inclorporation}
      />
      <Card text= "CORPORATE COMPLIANCES" 
      bgImage={compliances}
      />
        <Card text= "IT-SUPPORT AND VAS" 
        bgImage={itsupport}
        />
    </div>

     <div className="card-wrap">
      <Card text= "LEGAL ASSISTANCE AND CONSULTING" 
      bgImage={legalassistance}
      />
      <Card text= "GST/ACCOUNTING AND TAXATION CONSULTING" 
      bgImage={gsttaxation}
      />
      <Card text= "FUND RAISING ASSISTANCE" 
      bgImage={fundraising}
      />
    </div>
     
      <MovieReel/>
      {/* <IndusB2BSolutions/> */}
      <Footer/>
    </div>
  );
}

export default Page1;
