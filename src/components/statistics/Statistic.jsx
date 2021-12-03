import React from "react";
import download from "../../../assets/download.svg";
import clock from "../../../assets/clock.svg";
import flash from "../../../assets/flash.svg";
import menu from "../../../assets/menu.svg";
import view from "../../../assets/view.svg";
import checked from "../../../assets/checked.svg";

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

                <div className="statistic__elements">
                    <div className="statistic__item 1">
                        <img src={menu} alt="menu" className="statistic__item-img" />

                        <div className="statistic__item-description">
                            <p className="statistic__item-number"></p>

                            <p className="statistic__item-txt"></p>
                        </div>
                    </div>

                    <div className="statistic__item 2">
                        <img src={checked} alt="checked" className="statistic__item-img" />

                        <div className="statistic__item-description">
                            <p className="statistic__item-number"></p>

                            <p className="statistic__item-txt"></p>
                        </div>
                    </div>

                    <div className="statistic__item 3">
                        <img src={flash} alt="flash" className="statistic__item-img" />

                        <div className="statistic__item-description">
                            <p className="statistic__item-number"></p>

                            <p className="statistic__item-txt"></p>
                        </div>
                    </div>

                    <div className="statistic__item 4">
                        <img src={clock} alt="clock" className="statistic__item-img" />

                        <div className="statistic__item-description">
                            <p className="statistic__item-number"></p>

                            <p className="statistic__item-txt"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}