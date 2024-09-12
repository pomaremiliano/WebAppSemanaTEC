export interface Pokemones {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: { 
        front_default: string;
    };
}

export interface Perros {
    message: string;
    status: string;
}

export interface Weather {
    main : {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    name: string;
}