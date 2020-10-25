import React from 'react';
import './App.css';
import "./profile/Profile"
import Profile from "./profile/Profile"
import sung from "./sung.png"

function App() {
  const styleObject={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"30px 300px",padding:"10px"}
const HandleName = (FullName) =>{
  return(alert(FullName))

}
  
  return (
        <>
          <div style={styleObject}>
            <Profile FullName="Youssef Hammi" Job="Web and Game Dev" Bio="17 Yo highschool student who plays a lot of games" HandleName={HandleName}>{sung}</Profile>
          </div>
        </>
      );
    }


    export default App;

