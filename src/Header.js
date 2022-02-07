import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import logo from './logo.png';
import './Header.css';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-left">
                    <img src={logo} alt="" className="logo" />

                    <div className="header-search">
                        <SearchIcon className="search-icon" />

                        <input type="text" placeholder="Search..." />
                    </div>
                </div>

                <div className="header-options">
                    <div className="header-options-left">
                        <HeaderOptions Icon={HomeIcon} title="Home" />
                        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                        <HeaderOptions Icon={TextsmsIcon} title="Massaging" />
                        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                        <HeaderOptions DropdownIcon={ArrowDropDownIcon}  avatar title="me" />
                    </div>
                    <div className="header-options-right">
                        <HeaderOptions DropdownIcon={ArrowDropDownIcon} Icon={AppsIcon} title="Work" />

                        <HeaderOptions title="Try premium for free" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
