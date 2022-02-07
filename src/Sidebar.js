import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import cover from './cover.jpg';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="recent-items">
            <span className="tag">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <div className="profile">
                    <img className="profile-cover" src={cover} alt="" />
                    <Avatar className="avatar" />
                    <h2>Penniel Mothae</h2>
                    <p>pennielmothae@gmail.com</p>
                </div>
                <hr />
                <div className="profile-stats">
                    <p>Who viewed you</p>
                    <p className="stat">2,901</p>
                </div>
                <div className="profile-stats">
                    <p>Connections</p>
                    <p className="stat">5,001</p>
                </div>
            </div>
            <div className="sidebar-item recents">
                <div className="sidebar-recents">
                    <h3>Recent</h3>
                    {recentItem("reactjs")}
                    {recentItem("Software Engeneering")}
                    {recentItem("Computer Science")}
                    {recentItem("Hackathon")}
                    {recentItem("Google Devfest")}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
