"use client";

import {useState } from "react";
import axios from "axios";
import { Perros } from "../types/index";
import CardPerros from "./CardPerros";

export default function FetchPerros() {
    const [perros, setPerros] = useState<Perros | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPerros = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<Perros>(
                `https://dog.ceo/api/breeds/image/random`
            );
            setPerros(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError("Error fetching data");
        }
    };

    const onClick = () => {
        fetchPerros();
    };

    return (
        <div className="pokemon-card-container">
            <div><p className="mi-elemento">¿Quieres un perrito al azar? da click aquí</p></div>
            <button onClick={onClick}>Random</button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {perros && <CardPerros perros={perros} />}
        </div>
    );

}

