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
        title="error" // eslint-disable-line
        content="Açıklama 1. Bu alan, başlığa tıklandığında açılır." // eslint-disable-line
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
