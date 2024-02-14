import React, { useState, useEffect } from "react";
import "./Comprehensive.css";
import { services } from "../../utils/utilities";

const Comprehensive = () => {
  const [activeTab, setActiveTab] = useState("Writing");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };




  return (
    <div>
      <div className="intro">
        <h2 className="intro__heading mt-4">Unlock new talent freelancers</h2>
        <p className="intro__subheading   mx-auto mt-4 max-w-md text-gray-500">
          Empower your gigs with our elite freelancers. Tap into a network of
          seasoned professionals to elevate your work
        </p>
      </div>
      <div className="offer">
        <div className="offer__tabs--big">
          <div className="offer__menu w-tab-menu">
            {!isMobile && (
              <>
                {services.map((service, index) => (
                  <a
                    key={index}
                    className={`offer__link w-inline-block w-tab-link ${
                      activeTab === service.category && "w--current"
                    }`}
                    onClick={() => handleTabChange(service.category)}
                  >
                    <div>{service.category}</div>
                  </a>
                ))}
              </>
            )}
            {isMobile && (
              <div
                className="flex items-center justify-between space-x-5 bg-white px-4"
                onClick={toggleDropdown}
              >
                {activeTab}
                <div className="flex justify-end pb-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <div className="offer__content w-tab-content">
            {isMobile && dropdownOpen ? (
              <>
                {services.map((service, index) => (
                  <a
                    key={index}
                    className={`offer__link w-inline-block w-tab-link ${
                      activeTab === service.category && "w--current"
                    }`}
                    onClick={() => handleTabChange(service.category)}
                  >
                    <div>{service.category}</div>
                  </a>
                ))}
              </>
            ) : (
              <div className="offer__wrap">
                <div className="offer__text--more w-richtext">
                  <ul className="check-list">
                    {services
                      .find((service) => service.category === activeTab)
                      ?.subCategory.map((subCategory, index) => (
                        <li key={index}>{subCategory}</li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="btn-container">
        <a href="https://freelancers.gigitise.com" className="btn--blue_220 w-button">
          Find freelancers
        </a>
      </div>
    </div>
  );
};

export default Comprehensive;
