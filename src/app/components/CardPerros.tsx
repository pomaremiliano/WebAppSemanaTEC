import { Perros } from "../types/index";

interface CardPerrosProps {
  perros: Perros;
}

const CardPerros: React.FC<CardPerrosProps> = ({ perros }) => {
    return (
        <div className="pokemon-card">
        <h2 className="text-wrap">Perros Random</h2>
        <div className="card-image">
            <img src={perros.message} alt="Perro" />
        </div>
        </div>
    );
    };

export default CardPerros;

