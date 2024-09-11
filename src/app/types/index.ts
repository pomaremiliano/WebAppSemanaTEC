export interface Pokemones {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: string[];
    types: string[];
    sprites: { 
        front_default: string;
    };
}

