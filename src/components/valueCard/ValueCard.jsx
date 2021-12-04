import React, { useState } from "react";
import './_valuecard.scss';

export default function ValueCard() {
    const [isSelected, setIsSelected] = useState([false, false, true, false]);

    const handleClick = (index) => {
        const newIsSelected = [false, false, false, false];
        newIsSelected[index] = true;
        setIsSelected(newIsSelected);
    }

    return (
        <div className="value-card">
            <ul className="value-card__nav-bar">
                <li
                    className={`value-card__nav-bar-item ${isSelected[0] ? 'selected' : ''}`}
                    onClick={() => handleClick(0)}
                >
                    Day
                </li>

                <li
                    className={`value-card__nav-bar-item ${isSelected[1] ? 'selected' : ''}`}
                    onClick={() => handleClick(1)}
                >
                    Week
                </li>

                <li
                    className={`value-card__nav-bar-item ${isSelected[2] ? 'selected' : ''}`}
                    onClick={() => handleClick(2)}
                >
                    Month
                </li>

                <li
                    className={`value-card__nav-bar-item ${isSelected[3] ? 'selected' : ''}`}
                    onClick={() => handleClick(3)}
                >
                    Year
                </li>
            </ul>

            <div className="value-card__img">
                <div className="value-card__price">
                    <span className="value-card__price-sing">$</span>
                    <span className="value-card__price-value">13,543</span>
                </div>

                <div className="value-card__img-container">
                    <div className="value-card__img-dot"></div>
                    <div className="value-card__img-line"></div>
                </div>
            </div>

            <ul className="value-card__month-container">
                <li className="value-card__month">Jun</li>

                <li className="value-card__month">Jul</li>

                <li className="value-card__month">Aug</li>

                <li className="value-card__month">Sep</li>

                <li className="value-card__month selected">Oct</li>

                <li className="value-card__month">Nov</li>
            </ul>
        </div>
    )
}