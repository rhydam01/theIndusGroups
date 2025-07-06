import React, { useState , useEffect } from 'react';
import './Aboutus.css';
import pic from '../../../src/Components/About us/rectangle.png';
import row1 from '../../../src/Components/About us/row1.jpg'
import row2 from '../../../src/Components/About us/Rectangle 4.png'
import row3 from '../../../src/Components/About us/Rectangle 5.png'
import acc0 from '../../../src/Components/About us/Product Info Card.png'
import acc1 from '../../../src/Components/About us/Product Info Card-1.png'
import acc2 from '../../../src/Components/About us/Product Info Card-2.png'
import acc3 from '../../../src/Components/About us/Product Info Card-3.png'
import acc4 from '../../../src/Components/About us/Product Info Card-4.png'
import acc5 from '../../../src/Components/About us/Product Info Card-5.png'
import acc6 from '../../../src/Components/About us/Product Info Card-6.png'
import Header from '../../Components/Header/navbar.jsx'
import MovieReel from '../MovieReel/MovieReel.jsx';
import Footer from '../Footer/Footer.jsx';
const AboutUs = ({ heading, descript, photo }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  return (
 
      <div >
      {!matches && (
         < div>
         <Header/>
         <div className='main-img'>
          
           <img src={pic} alt="about us" className='image'/>
           <p className='title'></p>
         </div>
         <div style={{height:"100px"}}></div>
         <div className='row1'>
           <div className='who'>
           <div style={{height:"10px"}}></div>
             <p className='whoHead'>
             Who We Are
             </p>
             <p className='whoBody'>
            Established in 2011, Indus Group supports businesses, especially MSMEs and Trade Support Organisations (TSOs), to adapt to the evolving global marketplace. Indus Group products accelerates business growth by addressing three key challenges in global trade: bridging international trade knowledge gaps, simplifying complex supply chain solutions, and providing Enterprise Solutions for SMEs. Our proprietary platform, “Global Trade Navigator” combined with personalized customer service, ensures cash flow for cargo release. By consolidating all shipment services on TheIndusGroup.com, we reduce costs and time.

             </p>
           </div>
           <div className='whoImage'>
             <img src={row1} alt="hello" style={{height:"55vh",alignSelf:"center"}} />
           </div>
         </div>
         <div style={{height:"100px"}}></div>
         <div className='row1'>
         <div className='vision'>
             <img src={row2} alt="hello" style={{height:"55vh",alignSelf:"center"}} />
           </div>
           <div className='visionColumn'>
           <div style={{height:"10px"}}></div>
             <p className='visionText'>
             Our Vision
             </p>
             <p className='whoBody'>
             We ensure an efficient and effective Supply Chain solution tailored for your requirements. With state-of-the-art Warehouses spread across 20 locations, more than 7000+ trucks running daily across the length and breadth of the country, 70+ fulfilment centres, 80+ sortation facilities and 3500 delivery hubs to ensure timely delivery across 14,000 pin codes. Ekart is here to power the nation and power you</p>
           </div>
           
         </div>
         <div style={{height:"100px"}}></div>
         <div className='row1'>
           <div className='who'>
           <div style={{height:"10px"}}></div>
             <p className='whoHead'>
             Sustainable Growth
             </p>
             <p className='whoBody'>
             We ensure an efficient and effective Supply Chain solution tailored for your requirements. With state-of-the-art Warehouses spread across 20 locations, more than 7000+ trucks running daily across the length and breadth of the country, 70+ fulfilment centres, 80+ sortation facilities and 3500 delivery hubs to ensure timely delivery across 14,000 pin codes. Ekart is here to power the nation and power you
             </p>
           </div>
           <div className='whoImage'>
             <img src={row3} alt="hello" style={{height:"55vh",alignSelf:"center"}} />
           </div>
         </div>
         <div style={{height:"100px"}}></div>
         <p className='whoHead' style={{marginLeft:"5vw"}}>Awards & Recognition </p>
         <div style={{alignContent:"center"}}>
         <img src={acc0} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
           <img src={acc1} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
           <img src={acc2} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
           <img src={acc3} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
           <img src={acc4} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
           <img src={acc5} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
           <img src={acc6} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
         </div>
         <MovieReel/>
         <Footer/>
         </div>)}
      {matches && (
        <div>
        <Header/>
        <div className='main-img'>
         
          <img src={pic} alt="about us" className='image' style={{ marginTop: "8.5vh"}}/>
         
        </div>
        <p className='title'  style={{fontSize:"24px", marginRight: "15vw"}}>Know more about <br/>Indus Group</p>
        <div style={{height:"2px"}}></div>
        <div className='row1' style={{marginTop:"500px", height:"50vh"}}>
          <div className='who' style={{width:"75vw",marginLeft:"25px",marginRight:"20px"}}>
          <div style={{height:"10px"}}></div>
            <p className='whoHead' style={{fontSize:"22px"}}>
            Who We Are
            </p>
            <p className='whoBody' style={{fontSize:"16px"}}>
            Indus Group was established in 2011 with the mission to support businesses, especially MSMEs & Trade Support Organisations (TSOs), to evolve in the context of today’s continuously changing demand in global marketplace. Our business is unique in its ability to reach globally, service locally and provide cross-jurisdictional services. With our clients at the heart of everything we do, our hard-working team has successfully delivered on an unprecedented growth and transformation journey. These services are tailored to each client and delivered at both a Group level and via our specialist subsidiary brands
            </p>
          </div>
          <div className='whoImage'style={{height: "50vh",width:"45vh",marginLeft:"10px",marginRight:"25px"}}>
            <img src={row1} alt="hello" style={{height:"45vh",alignSelf:"center",justifySelf:"center",marginTop:"5vw"}} />
          </div>
        </div>
        <div style={{height:"50px"}}></div>
        <div className='row1'>
        <div className='vision' style={{height: "50vh",width:"45vh",marginLeft:"10px",marginRight:"25px"}}>
            <img src={row2} alt="hello" style={{height:"45vh",alignSelf:"center",justifySelf:"center",marginTop:"5vw"}}/>
          </div>
          <div className='visionColumn' style={{width:"75vw",marginLeft:"25px",marginRight:"20px"}}>
          <div style={{height:"10px"}}></div>
            <p className='visionText'  style={{fontSize:"22px"}}>
            Our Vision
            </p>
            <p className='whoBody' style={{fontSize:"16px"}}>
            We ensure an efficient and effective Supply Chain solution tailored for your requirements. With state-of-the-art Warehouses spread across 20 locations, more than 7000+ trucks running daily across the length and breadth of the country, 70+ fulfilment centres, 80+ sortation facilities and 3500 delivery hubs to ensure timely delivery across 14,000 pin codes. Ekart is here to power the nation and power you</p>
          </div>
          
        </div>
        <div style={{height:"50px"}}></div>
        <div className='row1'>
          <div className='who' style={{width:"75vw",marginLeft:"25px",marginRight:"20px"}}>
          <div style={{height:"10px"}}></div>
            <p className='whoHead'  style={{fontSize:"22px"}}>
            Sustainable Growth
            </p>
            <p className='whoBody'  style={{fontSize:"016px"}}>
            We ensure an efficient and effective Supply Chain solution tailored for your requirements. With state-of-the-art Warehouses spread across 20 locations, more than 7000+ trucks running daily across the length and breadth of the country, 70+ fulfilment centres, 80+ sortation facilities and 3500 delivery hubs to ensure timely delivery across 14,000 pin codes. Ekart is here to power the nation and power you
            </p>
          </div>
          <div className='whoImage' style={{height: "50vh",width:"45vh",marginLeft:"10px",marginRight:"25px"}}>
            <img src={row3} alt="hello" style={{height:"45vh",alignSelf:"center",justifySelf:"center",marginTop:"5vw"}}  />
          </div>
        </div>
        <div style={{height:"100px"}}></div>
        <p className='whoHead' style={{marginLeft:"5vw"}}>Awards & Recognition </p>
        <div style={{alignContent:"center"}}>
        <img src={acc0} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
          <img src={acc1} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
          <img src={acc2} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
          <img src={acc3} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
          <img src={acc4} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
          <img src={acc5} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
          <img src={acc6} alt="hello" style={{height:"300px",width:"300px",margin:"40px"}}/>
        </div>
        <MovieReel/>
        <Footer/>
        </div>)}
    </div>
  );
};

export default AboutUs;
