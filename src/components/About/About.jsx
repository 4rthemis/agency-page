import React from "react";
import AboutImage from "../../assets/about/about-section.png";
import Decoration from "../../assets/about/elipses-horizontal.png";
import "aos/dist/aos.css";
import "../About/About.css";

const AboutComponent = () => {
  return (
    <section className="py-10" id="About">
      <div className="about-section container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="md:w-1/2 md:ml-0 ml-4">
          <div className="relative max-w-full overflow-hidden">
            <img
              data-aos="fade-down"
              data-aos-duration="800"
              src={Decoration}
              alt="Decoration"
              className="absolute right-0 top-0 w-80 hidden md:block"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={AboutImage}
              alt="About Us"
              className="w-full h-auto max-w-full rounded-lg pt-24"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl font-semibold mb-10 sm:justify-items-center"
          >
            About Us
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="800"
            className="text-gray-700 justify-content-center "
          >
            Zara Creative Agency is a digital agency from Jakarta. We believe in
            pushing boundaries, thinking beyond the ordinary, and transforming
            ideas into reality. Let us be your trusted partner on your digital
            journey.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-duration="1000"
            className=" hover:bg-blue-900 text-white py-2 px-4 rounded mt-10 capitalize"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
