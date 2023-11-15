import React, { useEffect } from "react";
import "../../components/Hero/Hero.css";
import HeroImage from "../../assets/hero/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroComponent = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="hero-section grid grid-cols-12 items-center justify-center w-full mt-10" id="Home">
      <div className="col-start-2 col-end-12 md:col-end-6">
        <h5
          data-aos="fade-up"
          data-aos-duration="1000"
          className="block capitalize"
        >
          Welcome!{" "}
        </h5>
        <span className="font-bold text-5xl capitalize">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="content"
          >
            <span className="uppercase font-bold text-5xl text-yellow-300">
              {" "}
              Zara
            </span>{" "}
            Agency creative digital from Indonesia
          </h1>
        </span>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-5 md:mt-10"
        >
          We are redefining the digital landscape through innovative solutions
          and transformative technologies.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="bg-primary hover:bg-blue-900 text-white py-2 px-4 rounded mt-5 md:mt-10 capitalize"
        >
          See Portfolio
        </button>
      </div>
      <div className="col-start-2 col-end-12 md:col-start-9 md:col-end-12">
        <div data-aos="fade-left" className="flex mt-10">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            src={HeroImage}
            className="w-full md:max-w-full rounded-md"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
