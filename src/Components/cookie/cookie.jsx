import './cookie.css'
import { IoClose } from "react-icons/io5";
import React, { useState, useEffect } from 'react';


function Cookie(){
    const [isCookiePermissionOpen, setIsCookiePermissionOpen] = useState(true);

  const toggleCookie = () => {
    setIsCookiePermissionOpen(!isCookiePermissionOpen);
  };


    return(
        <div className={`cookie_card ${!isCookiePermissionOpen ? 'open' : ''}`}>

<button className="close" onClick={toggleCookie}><IoClose style={{alignSelf:"start"}}/> </button>
            
        <div className='cookie_box'>

                <p className='note'>
                We use cookie to improve your experience on our site. By using our site you consent cookies. <br/><a className='learn' href='/cookiepolicy'>Learn more</a>
                </p>
        </div>
        <div className='buttons'>
            <button style={{height:"42px" , backgroundColor :"#000000" , color:"#ffffff" , fontWeight:"bold" , borderRadius:"20px", cursor: "pointer",width:"20vw",marginLeft:"135px"}} onClick={toggleCookie}>Allow cookies</button>
            <button style = {{height:"42px" , backgroundColor :"#ffffff" , color:"#000000" , fontWeight:"bold" , borderRadius:"20px", cursor: "pointer",width:"20vw",marginLeft:"135px"}} onClick={toggleCookie}>Decline</button>
        </div>
        </div>
        
    )





};

export default Cookie;