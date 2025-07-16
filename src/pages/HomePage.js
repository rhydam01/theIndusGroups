import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../Components/Header/navbar";
// import QueryForm from '../Components/QueryForm/QueryForm';
import Carousel from "../Components/Carousel/Carousel";
// import Blogs from '../Components/Blogs/blogs'
import MovieReel from "../Components/MovieReel/MovieReel";
import Footer from "../Components/Footer/Footer";
import Card from "../Components/Card/Card";
import Aboutus from "./AboutUs";
import AboutUs from "../Components/AboutUs/Aboutus";
// import topimage from './Landingpage.png'
import enterprisecard from "./ENTERPRISE.jpg";
import logisticscard from "./logistics.jpg";
import myskillcard from "./MySkillsAcademy.png";
import aboutusimg from "./Aboutus.png";
import Cookie from "../Components/cookie/cookie";

const HomePage = () => {
  return (
    <div className="bg">
      <Header />
      {/* <img src={topimage}/> */}
      <Carousel />
      <div>
        {/* <Aboutus
      heading="ABOUT US"
      descript="Indus Group was established in 2011 with the mission to support businesses, especially MSMEs & Trade Support Organisations (TSOs), to evolve in the context of today’s continuously changing demand in global marketplace. Our business is unique in its ability to reach globally, service locally and provide cross-jurisdictional services. With our clients at the heart of everything we do, our hard-working team has successfully delivered on an unprecedented growth and transformation journey. These services are tailored to each client and delivered at both a Group level and via our specialist subsidiary brands"
      photo={aboutusimg}
      /> */}
        <AboutUs
          heading="ABOUT US"
          descript="Established in 2011, Indus Group supports businesses, especially MSMEs and Trade Support Organisations (TSOs), to adapt to the evolving global marketplace. Indus Group products accelerates business growth by addressing three key challenges in global trade: bridging international trade knowledge gaps, simplifying complex supply chain solutions, and providing Enterprise Solutions for SMEs.
"
          photo={aboutusimg}
        />
        <div className="card-wrapper">
          <Card
            photo={logisticscard}
            heading={"Integrated Logistics Solutions"}
            description={
              "The Indus Group Co. offers comprehensive global logistics solutions, including cargo transportation, warehousing, and end-to-end logistics expertise, ensuring seamless, efficient, and reliable service for domestic and international markets."
            }
            link="/Indusb2b"
          />
          <Card
            photo={enterprisecard}
            heading={"Enterprise Solutions"}
            description={
              "The Indus Group Co. has emerged as a major player in the global market, providing cross-border services transnationally and domestically. This Indian multinational is involved in infrastructure development, energy, trade, and manufacturing across diverse sectors."
            }
            link="/Indusenterprises"
          />
          <Card
            photo={myskillcard}
            heading={"Skill Development Solutions"}
            description={
              "My Skills Academy, part of the Indus Group, offers expert-designed online courses in analytics, business management, IT, and more. Our curriculum blends theory with practical insights, ensuring students excel globally."
            }
            link="/MySkillsAcademy"
          />
        </div>
        <MovieReel />
        {/* <Blogs/> */}
        {/* <IndusB2BSolutions/> */}
        <br />
        <br />
        <br />
        {/* <QueryForm/> */}
        <Footer />
        <a
          href={`https://wa.me/9873478788`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "60px",
            right: "60px",
            zIndex: 1000,
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <FaWhatsapp size={50} color="#25D366" />
        </a>
        <Cookie />
      </div>
    </div>
  );
};

export default HomePage;
