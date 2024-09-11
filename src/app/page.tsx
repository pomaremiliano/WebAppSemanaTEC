'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { Pokemones } from "./types/index";


export default function HomePage() {
  const [pokemones, setPokemones] = useState<Pokemones | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPokemones = async () => {
      try {
        const response = await axios.get<Pokemones>(
          "https://pokeapi.co/api/v2/pokemon/1"
        );
        setPokemones(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Error fetching data");
      }
    };

    getPokemones();
  }
  , []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1> Info de los Pokemones </h1>
      {pokemones && <Card pokemon={pokemones} />}
    </div>
  );
}


