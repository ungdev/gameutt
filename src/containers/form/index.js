import React from 'react';
import './form.css';


class Form extends React.Component {
    constructor() {
        super();

        this.state = { value : ''};
        this.isClosed = true ; //bool qui permet de savoir si une inscription est disponble ou non

    }

    handleSubmit = (event) => {
        alert('Le formulaire a été soumis');
        event.preventDefault(); //empeche l'evenement de se produire
    }
    
    render() {
        

        let titre;

        if (this.isClosed){
            titre = <h1>Aucun événement n'est actuellement prévu</h1>;
        } else {
            titre = <h1>Inscrivez-vous pour le prochain événement Game UTT</h1>;
        }

        return(
            
            <div id='form'>
                <form onSubmit={this.handleSubmit}>
                    {titre}
                    Nom / Pseudo :
                    <input minlength="3" maxlength="16" disabled = {(this.isClosed) ? "disabled" : ""} required/>
                    N°étudiant :
                    <input maxlength="6" pattern="[0-9]{5,6}" disabled = {(this.isClosed) ? "disabled" : ""} required/>

                    <input type="submit" value="Soumettre" disabled = {(this.isClosed) ? "disabled" : ""}/>
                    <h1>{this.state.value}</h1>
                </form>
           </div>
           
        )
    }
    
}

export default Form;


//FORM SUBMIT : A RECUPERER SUR UN SHEET