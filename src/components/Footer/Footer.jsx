import React from "react";
import  "../Footer/Footer.css";
import FooterLogo from "../../assets/footer/footer-logo.png";

const FooterComponent = () => {
  return (
    <section className="footer mt-24">
      <div className="footer-section container mx-auto lg:flex sm:block justify-between p-20">
        <div className="inline-block ">
          <img src={FooterLogo} alt="" className="w-20 pb-6" />
          <p className="text-white text-lg tracking-wider pb-3">
            Zara Creative Agency is a digital agency from Jakarta.
          </p>
          <p className="text-white text-lg tracking-wider pb-3">
            zaracreativeagency@gmail.com
          </p>
          <p className="text-white text-lg tracking-wider">08323344814</p>
        </div>

        <div className="block text-white xl:-mr-96 pt-10 xl:pt-0 md:pt-10">
          <h2 className="font-bold text-3xl mb-12 md:mb-8">Product</h2>
          <a href="#">
            <p className="text-lg mb-2">Mobile Apps</p>
          </a>
          <a href="#">
            <p className="text-lg mb-2">Web Apps</p>
          </a>
          <a href="#">
            <p className="text-lg mb-2">UI/UI Design</p>
          </a>
          <a href="#">
            <p className="text-lg">Design Logo</p>
          </a>
        </div>

        <div className="block text-white pt-10 xl:pt-0 md:pt-10">
          <h2 className="font-bold text-3xl mb-12 md:mb-8">Follow Us</h2>
          <a href="#">
            <p className="text-lg mb-2">Instagram</p>
          </a>
          <a href="#">
            <p className="text-lg mb-2">Linkedin</p>
          </a>
          <a href="#">
            <p className="text-lg mb-2">Dribble</p>
          </a>
          <a href="#">
            <p className="text-lg">Behance</p>
          </a>
        </div>
      </div>
      <div className="text-center pb-5 px-5">
        <p className="text-white">
          Copy Right © 2023 Zara Creative Agency. All Rights Reserved{" "}
        </p>
      </div>
    </section>
  );
};

export default FooterComponent;
