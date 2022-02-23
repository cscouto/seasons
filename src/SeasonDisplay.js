import './SeasonDisplay.css';
import React from "react";

const getSeason = (lat, month) => {
    let summer = new Season('summer', 'Lets hit the beach', 'sun');
    let winter = new Season('winter', 'Burr, it is  chilly', 'snowflake');

    if (month > 2 && month < 9) {
        return lat > 0 ? summer : winter
    } else {
        return lat < 0 ? winter : summer
    }
};

function Season(title, text, icon) {
    this.title = title;
    this.text = text;
    this.icon = icon;
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth);
    return (
        <div className={`season-display ${season.title}`}>
            <i className={`icon-left massive ${season.icon} icon`} />
            <h1>
                {season.text}
            </h1>
            <i className={`icon-right massive ${season.icon} icon`} />
        </div>
    );
};

export default SeasonDisplay;