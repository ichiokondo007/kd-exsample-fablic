import React, { useState, useEffect, useRef } from "react";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  buttonLabel: string; // ボタン名を指定するプロパティ
  options: DropdownOption[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonLabel, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)    ;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="header__navitem px-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
        >
          <img src="./automerge.png" alt="automerge" className="w-6 h-6 mr-1" />
          {buttonLabel} {/* ボタン名を動的に表示 */}
          <svg
            className={`-mr-1 size-5 text-gray-400 ml-2 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute text-base bg-white border rounded shadow-md mt-2  z-9999">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
