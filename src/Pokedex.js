import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        const pokemon = this.props.pokemon;
        const player = <h1>{this.props.player}</h1>;
        let result = 
            this.props.isWinner ? 
            <h1 className="Pokedex-winner">Winning Hand!</h1> : 
            <h1 className="Pokedex-loser">Losing Hand!</h1>
        
        return (
            <div className="Pokedex">
                {player}
                {result}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {pokemon.map(poke => (
                        <Pokecard id={poke.id} name={poke.name} type={poke.type} exp={poke.base_experience}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;