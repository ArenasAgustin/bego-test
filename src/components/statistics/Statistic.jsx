import React from "react";
import download from "../../assets/download.svg";
import clock from "../../assets/clock.svg";
import flash from "../../assets/flash.svg";
import menu from "../../assets/menu.svg";
import view from "../../assets/view.svg";
import checked from "../../assets/checked.svg";
import './_statistic.scss';

export default function Statistic() {
    return (
        <div className="statistic__container">
            <div className="statistic__title">
                <span className="statistic__title-txt">Statistics</span>

                <div className="statistic__title-btn">
                    <div className="statistic__title-download">
                        <img src={download} alt="download" />
                    </div>

                    <div className="statistic__title-viewmore">
                        <img src={view} alt="view more" />
                    </div>
                </div>
            </div>

            <div className="statistic__element-container">
                <div className="statistic__elements">
                    <div className="statistic__item one">
                        <img src={menu} alt="menu" className="statistic__item-img" />

                        <div className="statistic__item-description">
                            <p className="statistic__item-number">50</p>

                            <p className="statistic__item-txt">Total projects</p>
                        </div>
                    </div>

                    <div className="statistic__item two">
                        <img src={checked} alt="checked" className="statistic__item-img" />

                        <div className="statistic__item-description">
                            <p className="statistic__item-number">15</p>

                            <p className="statistic__item-txt">Completed</p>
                        </div>
                    </div>

                    <div className="statistic__item three">
                        <img src={flash} alt="flash" className="statistic__item-img" />

                        <div className="statistic__item-description">
                            <p className="statistic__item-number">10</p>

                            <p className="statistic__item-txt">In Progress</p>
                        </div>
                    </div>

                    <div className="statistic__item four">
                        <img src={clock} alt="clock" className="statistic__item-img" />

                        <div className="statistic__item-description">
                            <p className="statistic__item-number">2</p>

                            <p className="statistic__item-txt">Delayed</p>
                        </div>
                    </div>

                    <div className="horizontal-line"></div>
                    <div className="vertical-line"></div>
                </div>
            </div>
        </div>
    );
}