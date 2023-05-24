/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/interfaces";

export const usePokemon = (url?: string, id?: string) => {
  const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

  const fetchPokemon = async () => {
    if (url) {
      const { data }: any = await axios.get(url);
      setPokemon(data);
    } else if (id) {
      const { data }: any = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(data);
    }
  };

  useEffect(() => {
    fetchPokemon();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { pokemon };
};
