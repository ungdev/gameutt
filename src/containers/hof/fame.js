import React from 'react';
import './hof.css';



const Fame = (props) => {

    let icone;
    let info;

    if( props.name ){
        icone = <i class="fas fa-trophy"></i>
        info = <div id="info">
            <h3>Vainqueur {props.game}</h3>
            <h3>{props.place}</h3>
            <h3>le {props.date}</h3>

        </div>
    } else {
        icone = <i class="fas fa-user-alt"></i>
    }

    return(
        <div id="fame">
            <h5>P1</h5>
            {icone}           
            <div id="name">{props.name}</div>
            {info}
        </div>
    )
}

export default Fame;