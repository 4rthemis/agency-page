import "../Services/Service.css";
import {
  faLaptop,
  faMobileAndroid,
  faPaintBrush,
  faDesktop,
  faPen,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import services from "../../data/services.json";

function ServiceComponent() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const iconMapping = {
    faLaptop,
    faMobileAndroid,
    faPaintBrush,
    faDesktop,
    faPen,
    faBriefcase,
  };

  return (
    <div>
      <section
        className="service-section px-4 md:px-20 py-4 md:py-20"
        id="Services"
      >
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="service-section text-center md:text-6xl"
        >
          Services
        </h1>
        <div
          className="w-full py-4 md:py-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-10">
                <div className="icon w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-md">
                  <FontAwesomeIcon icon={iconMapping[service.icon]} />
                </div>
                <h3 className="text-lg md:text-2xl font-semibold my-3 md:my-5 text-blue-900">
                  {service.service}
                </h3>
                <p>{service.serviceDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceComponent;
