import React from 'react';
import './footer.css';
import img from '../../assets/logo.png'

const Footer = () => (
    <div id='footer'>
        <div id="hr"/>

        <ul>
            <li><a href="https://www.facebook.com/uttgameutt">
            <i class="fab fa-facebook-square"></i>FACEBOOK</a>
            </li>
            <li><a href="https://ung.utt.fr/">
            <img src={img} alt="logo"/>SITE UNG</a>
            </li>
        </ul>
        <h2>Game UTT © 2019</h2>
    </div>
)

export default Footer;