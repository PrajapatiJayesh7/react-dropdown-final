import React, { useState } from "react";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="dropdown">
      <button className="dropdown-button" onMouseEnter={handleButtonClick}>
        List of Countries
      </button>
      {isOpen && (
        <ul className="docs-icon" onMouseLeave={handleItemClick}>
          {items.map((item) => (
            <li key={item.id} onClick={handleItemClick} className="item-li">
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
