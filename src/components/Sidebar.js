import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import CallIcon from "@material-ui/icons/Call";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import {Avatar} from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import {useSelector} from 'react-redux';
import {selectUser} from "../features/userSlice";
import {auth} from "../firebase/firebase";
import db from "../firebase/firebase";




function Sidebar() {

    const user = useSelector(selectUser);
    const[channels,setChannels] = useState([]);

    useEffect(()=>{
        db.collection("Channels").onSnapshot(snapshot =>{
            setChannels(snapshot.doc.map((doc)=>({
                id : doc.id,
                channel : doc.data(),
            })))
        });
    },[])

    const handleChange = ()=>{
        const chhannelName = prompt("Enter the Channel Name")

        if(channeName){
            db.collection("Channels").add({
                channelName : channelName,
            })
        }
    }
    return (
        <div className = " sidebar">
            <div className="sidebar__top">
                <h3>{user.disdplayName} Programmer</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Chaneel</h4>
                    </div>
                    <AddIcon className={handleChange} className="sidebar__addChannel" />
                </div>
                <div clasaName="sidebae__channelsList">
                    {channels.map(({id,channel})=>(
                        <SidebarChannel key={id} id={id} Title={channel.channelName} />
                    ))}
                </div> 
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon 
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar src={user.photo} onClick={()=> auth.signOut()} />
                <div className="sidebar__profileInfo">
                    <h3>{user.disdplayName}</h3>
                    <p>{user.uid.substring(0,5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
