import React from 'react';
import "./Message.css";
import {Avatar} from "@material-ui/core";




function Message({message,timestamp,user}) {
    return (
        <div className='message'>
            <Avatar src={user.photo} />
            <div className='message__info'>
                <h4>
                    Barath
                    <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;