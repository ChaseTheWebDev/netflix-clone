import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import '../styles/Dropdown.css';
import { RiArrowDropDownFill } from "react-icons/ri";

export default function Dropdown({ options, defaultOption }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const filteredOptions = options.filter(option => option !== selectedOption);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-header" onClick={handleToggleDropdown}>
                {selectedOption}
                <RiArrowDropDownFill size={24} />
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    {filteredOptions.map((option, index) => (
                        <div 
                            key={index} 
                            className="dropdown-item" 
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultOption: PropTypes.string.isRequired,
};
