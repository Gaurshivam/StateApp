import React from 'react';
import './StateCard.css'
import { useState } from 'react';

const StateCard = () => {
    const [color, setColor] = useState({
          bgColor:"black",
          color:"white",
    })

    const ToggleColor = () =>{
        if(color.bgColor === "black" && color.color === "white"){
            setColor({
            backgroundColor:"white",
            color:"black"
        })
        }else{
            setColor({
            bgColor:"black",
            color:"white"
        })
        }
    }
  return (
    <div className='Container' style={{color:color.color, backgroundColor:color.bgColor}} >
      <div className='Top'>
        <h1>Overreacted</h1>
        <button onClick={ToggleColor}>Toggle</button>
      </div>
      <div className='Main'>
        <h2>The WET cadbase</h2>
        <p>Sunday 4th, 2020, read 10 min. </p>
        <p>Come waste your time with me.</p>

        <h2>GoodBye, Clean code</h2>
        <p>Friday 4th, 2021, read 11 min. </p>
        <p>Let clean code guide you.Then let it go</p>

        <h2>By decade In Review</h2>
        <p>Monday 4th, 2022, read 14 min. </p>
        <p>A personal reflection.</p>

        <h2>What are the React Team Principle</h2>
        <p>Sunday 4th, 2023, read 13 min. </p>
        <p>Come waste your time with me.</p>
      </div>
    </div>
  );
}

export default StateCard;
