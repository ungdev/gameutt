import React from 'react';
import './hof.css';
import Fame from './fame.js';



class HOF extends React.Component {
    constructor() {
        super();

    }

    Fame = (name) => {
        return(<h1>dquzdqz</h1>)

    }
    
    render() {
        

        return(
            <div id='hof'>
        
                <div id="frame">{this.Fame}
                    <h1>Vainqueurs des précédents événements {this.Fame}</h1>
                    <div id="wall">
                        <Fame 
                        name={'Jeanmich'}
                        date={'25/06'}
                        game={'SSBU'}
                        place={'After Gaming'}
                        />
                        <Fame/>
                        <Fame/>
                        <Fame/>
                        
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default HOF;
