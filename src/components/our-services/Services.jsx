import React from "react";
import { favServices } from "../../utils/utilities";
import { createEvent } from "../../utils/ga4";

const Services = () => {
  return (
    <div className="py-16 sm:py-11">
      <div className="mx-auto lg:px-8 ">
        <header className="text-center mb-5">
          <h2 className="intro__heading">Discover our top rated services</h2>
          <p className=" mx-auto mt-4 max-w-md text-gray-500">
            Find expert freelancers where skilled professional awat to tackle
            your assignments
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {favServices?.map((service, key) => {
            return (
              <div key={key} className="bg-white rounded-lg shadow-lg p-8">
                {service.onOffer && <div className="on-offer">OFFER</div>}
                <div className="relative overflow-hidden">
                  <img
                    className="object-cover w-full  h-[350px]"
                    src={service.img}
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                      <a
                        onClick={() =>
                          createEvent("Gigitise Open", "Click", "View Service")
                        }
                        target="_blank"
                        href="https://clients.gigitise.com"
                      >
                        View service
                      </a>
                    </button>
                  </div>
                </div>
                <h3 className="text-xl  text-gray-600 text-center mt-4 font-inter font-bold">
                  {service.title}
                </h3>
                <p className="text-center text-gray-500 text-sm mt-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-center mt-4">
                  <a
                    target="_blank"
                    href="https://clients.gigitise.com"
                    className="text-sky-600 py-2 px-4 border view-more"
                    onClick={() =>
                      createEvent(
                        "Gigitise Open",
                        "Click",
                        "View Service - More"
                      )
                    }
                  >
                    View more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
