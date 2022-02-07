import React from 'react'

function PostOptioins({Icon, color, title}) {
    return (
        <div className="post-options">
            {Icon && <Icon style={{color: color}} className="post-option-icon" />}
            <p>{title}</p>
        </div>
    )
}

export default PostOptioins;
