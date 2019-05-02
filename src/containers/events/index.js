import React from 'react';
import './events.css';

const Events = () => {

    let after = {
        date : "29 mai" ,
        time : "18h - 22h",
        place : "Foyer",

    }

    let net = {
        date : "25 mai" ,
        time : "18h - 22h",
        place : "M105",
    }

    return(
    <div id='events'>
        <div id='table'>
            <h1>AFTER GAMING</h1>
            <div id='content'>   
                <div id='cell'>Date : {after.date}  </div>
                <div id='cell'>Horaire : {after.time}  </div>
                <div id='cell'>Lieu : {after.place}   </div>
            </div>
        </div>
        
        <div id='table'>
            <h1>NETGAME</h1>
            <div id='content'>   
                <div id='cell'>Date : {net.date}  </div>
                <div id='cell'>Horaire : {net.time} </div>
                <div id='cell'>Lieu : {net.place} </div>
            </div>
        </div>


        
    </div>
)}

export default Events;