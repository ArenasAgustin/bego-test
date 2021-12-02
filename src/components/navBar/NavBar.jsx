import React from "react";
import back from "../../assets/back.svg";
import notification from "../../assets/notification.svg";
import './_navbar.scss';

export default function NavBar() {
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
                <li className="nav__list-item">All</li>
                <li className="nav__list-item">In Progress</li>
                <li className="nav__list-item">Started</li>
                <li className="nav__list-item">Completed</li>
            </ul>
        </nav>
    );
}