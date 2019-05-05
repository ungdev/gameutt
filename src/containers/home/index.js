import React from 'react';
import {Link} from 'react-router-dom'
import './home.css';

const Home = () => (
    <div id='home'>
        <div id="baneer">
            <h1>Game UTT</h1>
            <Link to ='/events'>Voir les prochains événements</Link>
        </div>
        
        <div id='new'>
        </div>
    </div>
)

export default Home;