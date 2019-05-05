import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import controller from '../../assets/manette.png'
import name from '../../assets/gameutt.png'

const Header = () => (
    <div id='header'>
        <ul>
            <Link to="/"><li><img src={controller} alt="manette"/><img src={name} alt="nom"/></li></Link>
            <Link to="/"><li>ACCUEIL</li></Link>
            <Link to="/events"><li>EVENTS</li></Link>
            <Link to="/hof"><li>HALL OF FAME</li></Link>
            <Link to ="/form"><li>INSCRIPTION</li></Link>
        </ul>
        <div id="hr"/>
    </div>
)

export default Header;  