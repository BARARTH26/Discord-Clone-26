import React from 'react';
import "./SidebarChannel.css";
import {useDispatch} from "react-redux";
import {setChannelInfo} from "../features/appSlice";

function SidebarChannel({id,Title}) {

    const dispatch = useDispatch();
    
    return (
        <div className="sidebarChannel" onClick={()=> dispatch(setChannelInfo({
            channeId : id,
            channelName : Title,
        })) } >
            <h4><span className="sidebarChannel__hash" >#</span>{Title}</h4>
        </div>
    )
}

export default SidebarChannel
