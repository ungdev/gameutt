import React from 'react';
import './hof.css';



const Fame = (props) => (
    <div id="fame">
        <i class="fas fa-user-alt"></i>

        <div>{props.name}</div>

        <div>{props.place} du {props.date}</div>
        
        <div>Vainqueur {props.game}</div>

    </div>
)

export default Fame;