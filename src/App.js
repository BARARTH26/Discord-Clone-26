import React,{useState,useEffect} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {auth} from "./firebase/firebase";
import {useDispatch} from "react-redux";
import {login,logout} from "./features/userSlice";



function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid : authUser.uid,
          photo : authUser.photoURL,
          email : authUser.email,
          dispalyName : authUser.dispalyName,
        }))
      }else{
        dispatch(logout());
      }
    })
  },[dispatch])
  
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
