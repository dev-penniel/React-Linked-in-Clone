import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Widgets() {

    const courses = (course, instructor) => (
        <div className="course">
            <h4>{course}</h4>
            <p>By {instructor}</p>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets-items">
                <div className="header">
                    <h2>Today's top courses</h2>
                    <InfoIcon className="info-icon" />
                </div>
                {courses("1. Understanding react hooks and thier use...", "Dev Penniel")}
                {courses("2. Be a manager people wont leave", "Luie Rittmanen")}
                {courses("3. Become a javascript guru complete guide", "David Wang")}
                {courses("4. How to use linked in to land your first...", "Sarah Loe")}
                <div className="footer">
                    <h2>Show more linked in learning</h2>
                    <ArrowForwardIcon className="arrow" />
                </div>
            </div>
            <div className="widgets-items in-img">
                <a href="#">
                    <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Widgets;
