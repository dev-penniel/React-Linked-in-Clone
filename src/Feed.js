import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import { Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import PostOptioins from './PostOptioins';
import Subscriptions from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import Post from './Post';
import { db } from './Firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function Feed() {

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect
    (() => {
        db.collection('posts').onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc)  => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        )

    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: "Penniel Mothae",
            description: "Web developer Intern at zeecom technologies",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimeStamp()
        });

        setInput("");
    }

    return (
        <div className="feed">
            <div className="post-input-container">
                <div className="input-container">
                    <Avatar className="post-input-avatar" />
                    <div className="post-input">
                        <CreateIcon className="input-create-icon" />
                        <form onSubmit={sendPost}>
                            <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder="Start a post" />
                            <button onClick={sendPost} type="submit">But</button>
                        </form>
                    </div>
                </div>
                <div className="input-options">
                        <PostOptioins Icon={ImageIcon} color="#70B5F9" title="Photo" />
                        <PostOptioins  Icon={Subscriptions} color="#7FC15E" title="Video" />
                        <PostOptioins Icon={EventNoteIcon} color="#E7A33E" title="Event" />
                        <PostOptioins Icon={ViewDayIcon} color="#FC9295" title="Write Article" />
                </div>
            </div>

            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post
                    key={id}
                    names={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed;
