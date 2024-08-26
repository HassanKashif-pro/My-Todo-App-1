import React, { useState } from "react";

export type MenuOption = {
  value: string;
  label: string;
};

type MenuProps = {
  value: MenuOption;
  onChange: (value: string) => void;
  options: MenuOption[];
};

export function Menu({ value, onChange, options }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: MenuOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="menu-container">
      <div className="menu-trigger" onClick={() => setIsOpen((prev) => !prev)}>
        {value.label} <span className="menu-icon">▼</span>
      </div>
      {isOpen && (
        <div className="menu-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="menu-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
