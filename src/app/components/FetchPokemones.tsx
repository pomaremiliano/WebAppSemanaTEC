"use client";

import {useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Pokemones } from "../types/index";

const getRandomId = () => {
  return Math.floor(Math.random() * 898) + 1;
};

export default function FetchPokemones() {
  const [pokemones, setPokemones] = useState<Pokemones | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);

  const fetchPokemones = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Pokemones>(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemones(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error fetching data");
    }
  };

  const onClick = () => {
    const randomId = getRandomId();
    setId(id);
    fetchPokemones(randomId);
  };

  return (
    <div className="pokemon-card-container">
      <div><p className="mi-elemento">¿Quieres un Pokémon al azar? da click aquí</p></div>
        <button onClick={onClick}>Random</button>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {pokemones && <Card pokemon={pokemones} />}
    </div>
  );
}
