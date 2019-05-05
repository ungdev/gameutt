import React from 'react';
import './hof.css';
import Fame from './fame.js';



const HOF = () => {

    return(
        <div id='hof'>
    
            <div id="frame">
                <h1>VAINQUEURS DES PRECEDENTS EVENEMENTS</h1>
                <h2>Parcourir les frames pour plus d'infos</h2>
                <div id="pole"></div>
                <div id="wall">
                    <div><h4>choose your fighter</h4></div>
                    <div id="famewall">
                        <Fame 
                        id={1}
                        name={'Lionel'}
                        date={'08/04'}
                        game={'SSBU'}
                        place={'After Gaming'}
                        />
                        <Fame
                        id = {2}
                        name={'---'}
                        date={'---'}
                        game={'---'}
                        place={'--- '}/>
                        <Fame/><Fame/><Fame/><Fame/><Fame/><Fame/>
                        <Fame/><Fame/><Fame/><Fame/><Fame/><Fame/>
                        <Fame/><Fame/><Fame/><Fame/><Fame/><Fame/>
                    </div>                    
                </div>
                <div id="pole"></div>
                <h2>Pour avoir la chance d'avoir ton nom dans le Hall of fame vient participer aux événements Game UTT !</h2>
            </div>
        </div>
    )

}

export default HOF;
