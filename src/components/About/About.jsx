import React from "react";
import AboutImage from "../../assets/about/about-section.png";
import Decoration from "../../assets/about/elipses-horizontal.png";
import "aos/dist/aos.css";
import "../About/About.css";

const AboutComponent = () => {
  return (
    <section className="py-10" id="About">
      <div className="about-section container mx-auto flex flex-col items-center justify-center px-4">
        <div className="mb-8">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={AboutImage}
            alt="About Us"
            className="w-full h-auto max-w-full rounded-lg"
          />
        </div>
        <div className="text-center">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl font-semibold mb-4"
          >
            About Us
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="800"
            className="text-gray-700 mb-4"
          >
            Zara Creative Agency is a digital agency from Jakarta. We believe in
            pushing boundaries, thinking beyond the ordinary, and transforming
            ideas into reality. Let us be your trusted partner on your digital
            journey.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="hover:bg-blue-900 text-white py-2 px-4 rounded capitalize"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
