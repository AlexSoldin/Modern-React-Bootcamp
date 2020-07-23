import React, {Component} from 'react'; // imrc shortcut
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends React.Component {
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        }
        else{
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }

        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) => (
                            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;