import React, { useState } from "react";
import back from "../../assets/back.svg";
import notification from "../../assets/notification.svg";
import './_navbar.scss';

export default function NavBar() {
    const [isSelected, setIsSelected] = useState([true, false, false, false]);

    const handleClick = (index) => {
        const newIsSelected = [false, false, false, false];
        newIsSelected[index] = true;
        setIsSelected(newIsSelected);
    }

    return (
        <nav className="nav__container">
            <div className="nav__icons">
                <div className="nav__icons-item">
                    <img src={back} alt="back" />
                </div>

                <p className="nav__icons-title">Tasks</p>

                <div className="nav__icons-item">
                    <img src={notification} alt="clock" />
                </div>
            </div>

            <div className="nav__create">
                <p className="nav__create-txt">CREATE +</p>
            </div>

            <ul className="nav__list">
                <li
                    className={`nav__list-item ${isSelected[0] ? 'selected' : ''}`}
                    onClick={() => handleClick(0)}
                >
                    All
                </li>

                <li
                    className={`nav__list-item ${isSelected[1] ? 'selected' : ''}`}
                    onClick={() => handleClick(1)}
                >
                    In Progress
                </li>

                <li
                    className={`nav__list-item ${isSelected[2] ? 'selected' : ''}`}
                    onClick={() => handleClick(2)}
                >
                    Started
                </li>

                <li
                    className={`nav__list-item ${isSelected[3] ? 'selected' : ''}`}
                    onClick={() => handleClick(3)}
                >
                    Completed
                </li>
            </ul>
        </nav>
    );
}