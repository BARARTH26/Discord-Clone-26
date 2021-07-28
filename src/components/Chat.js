import React,{useState,useEffect} from 'react';
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftCardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import {useSelector} from "react-redux";
import {selectChannelId,selectChannelName} from "../features/appSlice";
import {selectUser} from "../features/userSlice";
import SelectInput from '@material-ui/core/Select/SelectInput';
import db from "../firebase/firebase";
import firebase from "firebase";

function Chat() {

    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const[input,setInput] = useState();
    const[messages,setMessages] = useState();
    
    useEffect(()=>{
        db.collection("Channels").doc(channeId).collection("Messages").orderBy('timestamp','desc').onSnapshot(snapshot => {
            setMessages(snaphot.docs.map((doc)=>({
                message : doc.data(),
            })))
        })
    },[channelId])

    const sendMessage = (e)=>{
        e.preventDefault();

        db.collection("Channels").doc(channelId).collection("Messages").add({
            message : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user : user,
        })

        setInput("");
    }
    
    return (
        <div className="chat">
           <ChatHeader channelName= {channelName} /> 
           <div className="chat__message">
                {messages.map((message)=>(
                    <Message timestamp={message.timestamp} message={message.message} user={message.user} />
                ))}
           </div>
           <div className="chat__input">
               <AddCircleIcon fontSize='large' />
               <form>
                   <input type="text" value={input} disabled={!channelId}  onChange={(e)=> SelectInput(e.target.value)} placeholder={`send to ${channelName}`} />
                   <button type="submit" onClick={sendMessage} className="chat__inputButton ">SEND</button>
               </form>
               <div className="chat__inputIcons">
                   <CardGiftCardIcon fontSize="large" />
                   <GifIcon fontSize="large" />
                   <EmojiEmotionsIcon fontSize="large" />
               </div>
           </div>
        </div>
    )
}

export default Chat
