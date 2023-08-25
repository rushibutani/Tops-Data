import React, { useState } from "react";

const Accordion = () => {
  // Step 2: Define state to track which accordion is currently open
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Sample accordion data with titles and content
  const accordionData = [
    {
      title: "What is your return policy?",
      content: "This is the content for Accordion 1. ",
    },
    {
      title: "How do i track my order?",
      content: "This is the content for Accordion 2.",
    },
    // Add more accordions here if needed
  ];

  // Step 3: Function to toggle the accordion content visibility
  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div>
      {/* Step 1: Display each accordion title and content */}
      {accordionData.map((accordion, index) => (
        <div key={index}>
          <div
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
            onClick={() => toggleAccordion(index)}
          >
            {accordion.title}
          </div>
          {/* Step 2: Conditional rendering to show/hide accordion content */}
          {activeAccordion === index && <div>{accordion.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
