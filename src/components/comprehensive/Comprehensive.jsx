import React, { useState, useEffect } from 'react';
import './Comprehensive.css';

const Comprehensive = () => {
  const [activeTab, setActiveTab] = useState('paper');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  const tabContents = {
    paper: (
      <div className="offer__wrap">
        <div className="offer__text--more w-richtext">
          <ul>
            <li>Literature review</li>
            <li>Business plan</li>
            <li>Research proposal</li>
            <li>Book / movie review</li>
            <li>Editing and proofreading</li>
            <li>Reflective writing</li>
            <li>Thesis / dissertation</li>
          </ul>
        </div>
      </div>
    ),
    academic: (
      <div className="offer__wrap">
        <div className="offer__text--more w-richtext">
          <p>Content for academic tab goes here...</p>
        </div>
      </div>
    ),
    other: (
      <div className="offer__wrap">
        <div className="offer__text--more w-richtext">
          <p>Content for other assignments tab goes here...</p>
        </div>
      </div>
    ),
    homework: (
      <div className="offer__wrap">
        <div className="offer__text--more w-richtext">
          <p>Content for homework tab goes here...</p>
        </div>
      </div>
    ),
  };

  return (
    <div>
      <div className="intro">
        <h2 className="intro__heading">Comprehensive services</h2>
        <p className="intro__subheading">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="offer">
        <div className="offer__tabs--big">
          <div className="offer__menu w-tab-menu">
            {!isMobile && (
              <>
                <a
                  className={`offer__link w-inline-block w-tab-link ${activeTab === 'paper' && 'w--current'}`}
                  onClick={() => handleTabChange('paper')}
                >
                  <div>service 4</div>
                </a>
                <a
                  className={`offer__link w-inline-block w-tab-link ${activeTab === 'academic' && 'w--current'}`}
                  onClick={() => handleTabChange('academic')}
                >
                  <div>service 5</div>
                </a>
                <a
                  className={`offer__link w-inline-block w-tab-link ${activeTab === 'other' && 'w--current'}`}
                  onClick={() => handleTabChange('other')}
                >
                  <div>service 6</div>
                </a>
                <a
                  className={`offer__link w-inline-block w-tab-link ${activeTab === 'homework' && 'w--current'}`}
                  onClick={() => handleTabChange('homework')}
                >
                  <div>service 7</div>
                </a>
              </>
            )}
            {isMobile && (
              <div className="dropdown-toggle" onClick={toggleDropdown}>
                {activeTab} 
                <div className='flex justify-end pb-5 pr-1'>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <div className="offer__content w-tab-content">
            {isMobile && dropdownOpen ? (
              <>
                <a
                  className={`offer__link w-inline-block w-tab-link ${activeTab === 'paper' && 'w--current'}`}
                  onClick={() => handleTabChange('paper')}
                >
                  <div>service 4</div>
                </a>
                <a
                  className={`offer__link w-inline-block w-tab-link ${activeTab === 'academic' && 'w--current'}`}
                  onClick={() => handleTabChange('academic')}
                >
                  <div>service 5</div>
                </a>
                <a
                  className={`offer__link w-inline-block w-tab-link ${activeTab === 'other' && 'w--current'}`}
                  onClick={() => handleTabChange('other')}
                >
                  <div>service 6</div>
                </a>
                <a
                  className={`offer__link w-inline-block w-tab-link ${activeTab === 'homework' && 'w--current'}`}
                  onClick={() => handleTabChange('homework')}
                >
                  <div>service 7</div>
                </a>
              </>
            ) : (
              tabContents[activeTab]
            )}
          </div>
        </div>
      </div>
      <div className="btn-container">
        <a href="" className="btn--blue_220 w-button">
          Find freelancers
        </a>
      </div>
    </div>
  );
};

export default Comprehensive;
