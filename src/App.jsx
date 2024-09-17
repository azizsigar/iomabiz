
import React, { useState } from "react";
import "./Accordion.css"; 
import Works from "./pages/Works";
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

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem
        title="about me"
        content=" I worked as a teacher in Turkey and Ghana. When I moved to the Netherlands, I explored my skills through voluntary work in graphic design and video editing. Later, I discovered my talent for programming. I volunteered with the Mano and Freedomcombination organizations and am currently continuing my volunteer work with Mano. At the same time, I design beautiful websites and am looking for a business partner."
      />
      <Works />
      {/* Daha fazla AccordionItem ekleyebilirsiniz */}
    </div>
  );
};

export default Accordion;
