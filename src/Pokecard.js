import React, {Component} from 'react';
import './Pokecard.css';

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let pad = (id) => (id <= 999 ? `00${id}`.slice(-3) : id)

class Pokecard extends Component {
    render() {
        const {id, name, type, exp} = this.props;
        const url = `${POKE_API}${pad(id)}.png`;

        return (
            <div className="Pokecard">
                <h3 className="Pokecard-name">{name}</h3>
                <div className="Pokecard-img">
                    <img src={url} alt={name}/>
                </div>
                
                <div className="Pokecard-data">Type: {type} </div>
                <div className="Pokecard-data">EXP: {exp} </div>
            </div>
        );
    }
}

export default Pokecard;