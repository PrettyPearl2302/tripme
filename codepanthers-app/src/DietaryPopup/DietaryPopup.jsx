import React, { useState } from 'react';
import './DietaryPopup.css';

const DietaryPopup = ({ onClose }) => {
    const [selected, setSelected] = useState('');

    const handleCheckboxChange = (optionName) => {
        setSelected(current => {
            // If the currently selected is clicked again, unselect it, otherwise select the new one
            return current === optionName ? '' : optionName;
        });
    };

    const dietaryOptions = [
        { name: 'Vegetarian', details: 'Does not contain meat, fish, fowl, eggs, dairy products or derivatives' },
        { name: 'Vegan', details: 'Does not contain meat, fish, or fowl' },
        { name: 'Diabetic', details: 'Suitable for reduced sugar, hyperglycemic, hypoglycemic and carbohydrate controlled meal requests' },
        { name: 'Gluten Intolerant', details: 'This meal eliminates all foods prepared with wheat, rye, barley and oats' },
        { name: 'Asian Vegetarian', details: 'Spicy vegetarian meals with limited use of dairy products' },
    ];

    return (
        <div className="dietary-popup">
            <div className="dietary-popup-content">
                <h2 className='dietary'>Dietary Options</h2>
                <ul className="dietary-options">
                    {dietaryOptions.map((option, index) => (
                        <li className="checkbox-container" key={index}>
                            <label htmlFor={`checkbox-${index}`} className="checkbox-label">
                                <input
                                    id={`checkbox-${index}`}
                                    type="checkbox"
                                    name={option.name}
                                    checked={selected === option.name}
                                    onChange={() => handleCheckboxChange(option.name)}
                                    className="styled-checkbox"
                                />
                                <div className="option-text">
                                    <span className="option-name">{option.name}</span>
                                    <span className="option-details">{option.details}</span>
                                </div>
                            </label>
                        </li>
                    ))}
                </ul>
                <button onClick={onClose} className="done-button">Done</button>
            </div>
        </div>
    );
};

export default DietaryPopup;
