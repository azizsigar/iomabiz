// src/Accordion.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import "./Accordion.css"; // Ensure this path is correct

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggleAccordion}>
        {title}
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem
        title="wellcome" // eslint-disable-line
        content=" I spent a year teaching Turkish in Turkey and another in Ghana. Following this, I decided to pursue a career change and became a video editor. As I continued to discover my talents, I embarked on a journey to learn programming. During this time, I explored three continents and met hundreds of people. I had the opportunity to work with Mano and Freedomcombination in the Netherlands while developing my web design skills through further education. My ultimate goal is to continue growing and making a positive impact on others." // eslint-disable-line
      />
      <AccordionItem
        title="error" // eslint-disable-line
        content="Açıklama 2. Bu alan da başlığa tıklandığında açılır." // eslint-disable-line
      />
      {/* Daha fazla AccordionItem ekleyebilirsiniz */} // eslint-disable-line
    </div>
  );
};

export default Accordion;
