import {Pokemones} from '../types/index';

interface CardProps {
    pokemon: Pokemones;
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card-content">
                <h2>{pokemon.name}</h2>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Abilities: {pokemon.abilities.join(', ')}</p>
                <p>Types: {pokemon.types.join(', ')}</p>
            </div>
        </div>
    );
}

export default Card;