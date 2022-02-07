import { Avatar } from '@material-ui/core'
import React from 'react'

function HeaderOptions({Icon, DropdownIcon, avatar, title}) {
    return (
        <div className="header-option">
            {Icon && <Icon className="icons>" />}
            {avatar && <Avatar className="header-icon" src={avatar} />}
            <div className="header-dropdown">
                <p className="header-option-title">{title}</p>
                {DropdownIcon && <DropdownIcon className="dropdown-icon" />}
            </div>
        </div>
    )
}

export default HeaderOptions
