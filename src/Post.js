import { Avatar } from '@material-ui/core';
import React from 'react'
import PostOptioins from './PostOptioins';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import './Post.css'

function Post({names, description, message, photoUrl}) {
    return (
       <div className="post-output-section">
                <div className="post-output-container">
                    <div className="post-output-header">
                        <Avatar className="post-avatar" />
                        <div className="profile-details">
                            <h2 className="profile-names">{names}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="post-output-body">
                        <p>{message}</p>
                    </div>
                    <div className="output-buttons">
                           <PostOptioins Icon={ThumbUpOutlinedIcon} title="Like" /> 
                           <PostOptioins Icon={ChatOutlinedIcon} title="Comment" /> 
                           <PostOptioins Icon={ShareOutlinedIcon} title="Share" /> 
                           <PostOptioins Icon={SendOutlinedIcon} title="Send" /> 
                    </div>
                </div>
                
            </div>
    )
}

export default Post;
