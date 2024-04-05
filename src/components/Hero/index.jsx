import React from "react";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import image from "../../assets/btn-cv.svg";
import icon1 from "../../assets/iconOne.svg";
function Hero() {
  return (
    <div className="HeroWrapper">
      <div className="FirstWrapper">
        <h3 className="greentText">Hello, I’m Alif Reza</h3>
        <h1 className="mainTitle">Product Designer</h1>
        <p className="textStyle">
          I’m from Singapore and I have been working as a Product Designer for
          more than 7 years. I’ve worked for a Hanziree company Pabloo as a
          Product Designer and Front-end Developer for 3 years.
        </p>
        <div className="btnWrapperHero">
          <button className="GreenFullBtn">Email Me</button>
          <button className="imgBtn">
            <img src={image} alt="" />
          </button>
        </div>
      </div>
      <div className="SecondWrapper">
        <h3 className="bigtitle">7+ years experience working</h3>
        <div className="ServiceWrapper">
          <p className="green">Services</p>
          <p className="white">
            Discover the best services I offer, designed to ensure the success
            of your project.
          </p>
        </div>
      </div>
      <div className="ThirdWrapper">
        <div className="itemInThisHero">
          <img width={64} src={icon1} alt="" />
          <h4 className="productTite">Product design</h4>
          <p className="textStyleTwo" style={{ width: "310px" }}>
            I offer innovative and attention-grabbing product design services.
            From initial ideation to implementation.
          </p>
        </div>
        <div className="itemInThisHero">
          <img width={64} src={icon1} alt="" />
          <h4 className="productTite">Product design</h4>
          <p className="textStyleTwo" style={{ width: "310px" }}>
            I offer innovative and attention-grabbing product design services.
            From initial ideation to implementation.
          </p>
        </div>
        <div className="itemInThisHero">
          <img width={64} src={icon1} alt="" />
          <h4 className="productTite">Product design</h4>
          <p className="textStyleTwo" style={{ width: "310px" }}>
            I offer innovative and attention-grabbing product design services.
            From initial ideation to implementation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
