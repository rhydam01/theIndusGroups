import React from 'react';
import './careers.css';
import pic from '../../../src/Components/careers/Group 76.png';
import row1 from '../../../src/Components/careers/Rectangle 6.png'
import row2 from '../../../src/Components/careers/Rectangle 6 (1).png'
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

const Careeers =()=>{
    return(
        < div>
    <Header/>
    <div className='main-img'>
     
      <img src={pic} alt="about us" className='image'/>
      
    </div>
    <div style={{height:"100px"}}></div>
    <div className='row1'>
      <div className='who'>
      <div style={{height:"10px"}}></div>
        <p className='whoHead'>
        Our Team
        </p>
        <p className='whoBody'>
        At Indus, we are united and supportive of each other. Our diverse team serves as a source of inspiration, while our shared culture strengthens our bond. We strive to give our all in every aspect of our work - for our clients, our company, and most importantly, for each other. The values that drive the Ekart way:<br/>
        <br/><br/>
<b>AUDACITY</b> : We think big and take bold bets.<br/>
<b>BIAS FOR ACTION</b>  : Strong sense of urgency to solve problems.<br/>
<b>CUSTOMER FIRST</b> : Always thinking customer and their needs.<br/>
<b>INTEGRITY</b> : We strive to do what is right.<br/>
<b>INCLUSION</b> : We value the uniqueness and respect differences.<br/>
        </p>
      </div>
      <div className='whoImage'>
        <img src={row1} alt="hello" style={{height:"55vh",alignSelf:"center"}} />
      </div>
    </div>
    <div style={{height:"100px"}}></div>
    <div className='row2'>
    <div className='vision'>
        <img src={row2} alt="hello" style={{height:"55vh",alignSelf:"center"}} />
      </div>
      <div className='visionColumn'>
      <div style={{height:"10px"}}></div>
        <p className='visionText'>
        Careers at Indus Group
        </p>
        <p className='whoBody'>
        Are you looking to leave a lasting impact on the organization that leads the way in supply chain thought and practice in India? At Indus Group, we are proud to be the largest supply chain company in the country, but our ambitions go far beyond that. Our mission extends beyond assisting our customers in sourcing, manufacturing, distributing, and selling their goods; we aim to empower them to participate in a more sustainable and responsible supply chain.
        To bring this vision to life, we are building a top-tier team with a diverse range of talents and skills, all united by a shared drive and passion for achieving our common goal. Join us in shaping the future of supply chain management, where innovation meets sustainability, and where every contribution leaves a meaningful impact.</p>
      </div>
      
    </div>
    <div style={{height:"100px"}}></div>
    <div style={{width:"100vw"}}>
        <p className='keen'>
            Keen to work with you!!
        </p>
        <p style={{fontWeight:"500",fontSize:"36px"}}> Explore all open roles in the link below</p>
        <a href="" style={{textDecoration:"none"}}><p style={{fontWeight:"500",fontSize:"36px",textDecorationLine:"none",}}> Roles at Indus Group</p></a>
    </div>
    <div style={{height:"100px"}}></div>
   
    <MovieReel/>
    <Footer/>
    </div>
    );
}

export default Careeers;
