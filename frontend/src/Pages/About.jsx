import React from "react";
import Title from "../Components/Title";
import Newsletter from "../Components/Newsletter";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={" ABOUT"} text2={"US"}></Title>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src="/about.jpg"></img>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-400">
          <p className="text-gray-400">
            At Echelon, we believe that time is more than just a measure—it’s a
            statement. As purveyors of luxury timepieces, we curate an exclusive
            collection of the world’s finest watches, designed for those who
            appreciate craftsmanship, heritage, and prestige. Our journey began
            with a passion for horology and a commitment to excellence. Every
            timepiece we offer is meticulously sourced, ensuring authenticity,
            quality, and timeless appeal. Whether you're a seasoned collector or
            seeking your first luxury watch, Echelon provides an unparalleled
            selection and a seamless shopping experience. Luxury is not just
            about possession—it’s about the experience. At Echelon, we go beyond
            selling watches; we deliver prestige, elegance, and legacy, one
            timepiece at a time. Welcome to the Echelon standard—where time
            meets exclusivity.
          </p>
          <hr className="w-16"></hr>
          <p className="text-purple-600">
            'Echelon' is a Full-Stack Project by Ankur Raj made on MERN stack
            for education purpose only.
            <br />
            <i className="text-purple-600"> Email: Rajguptaankur@gmail.com</i>
          </p>
          <div className="flex flex-row ">
            <a href="https://www.instagram.com/ankurrajsahu/?hl=en" target="_blank">
              <img
                className="w-10"
                src="/insta.webp"
                alt="Ankur Raj INSTAGRAM"
              ></img>
            </a>
            <a href="https://github.com/ankurraj2003" target="_blank">
              <img
                className="w-10 ml-4"
                src="/github.png"
                alt="Ankur Raj GITHUB"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
