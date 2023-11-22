import React from "react";
import  "../Footer/Footer.css";
import FooterLogo from "../../assets/footer/logo-footer.png";

const FooterComponent = () => {
  return (
    <section className="footer mt-24">
      <div className="footer-section container mx-auto lg:flex sm:block justify-between p-20">
        <div className="inline-block ">
          <img src={FooterLogo} alt="" className="w-20 pb-6" />
          <p className="text-white text-lg tracking-wider pb-3">
            Zara Craft Agency is a digital agency from Jakarta.
          </p>
          <p className="text-white text-lg tracking-wider pb-3">
            zaracraftagency@gmail.com
          </p>
          <p className="text-white text-lg tracking-wider">08323344814</p>
        </div>

        <div className="block text-white xl:-mr-96 pt-10 xl:pt-0 md:pt-10">
          <h2 className="font-bold text-3xl mb-12 md:mb-8">Product</h2>
          <to href="#">
            <p className="text-lg mb-2">Mobile Apps</p>
          </to>
          <to href="#">
            <p className="text-lg mb-2">Web Apps</p>
          </to>
          <to href="#">
            <p className="text-lg mb-2">UI/UI Design</p>
          </to>
          <to href="#">
            <p className="text-lg">Design Logo</p>
          </to>
        </div>

        <div className="block text-white pt-10 xl:pt-0 md:pt-10">
          <h2 className="font-bold text-3xl mb-12 md:mb-8">Follow Us</h2>
          <to href="#">
            <p className="text-lg mb-2">Instagram</p>
          </to>
          <to href="#">
            <p className="text-lg mb-2">Linkedin</p>
          </to>
          <to href="#">
            <p className="text-lg mb-2">Dribble</p>
          </to>
          <to href="#">
            <p className="text-lg">Behance</p>
          </to>
        </div>
      </div>
      <div className="text-center pb-5 px-5">
        <p className="text-white">
          Copy Right © 2023 Zara Craft Agency. All Rights Reserved{" "}
        </p>
      </div>
    </section>
  );
};

export default FooterComponent;
