/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { IPokemons } from "../interfaces/interfaces";

/* import { getPokemonsDeleted } from "../utils/localStorage"; */

interface MyComponentProps {
  children: React.ReactNode;
}

interface ContextProps {
  searchPokemon: (pokemons: IPokemons, value: string) => void;
  setSearch: any;
  search: string;
  allPokemons: any[];
  setResultSearch: any[];
  resultSearch: any[];
  edit: boolean;
  setEdit: any;
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: MyComponentProps) => {
  const allPokemonsUrl =
    "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

  const [allPokemons, setAllPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState();

  const [edit, setEdit] = useState(false);

  /* const searchForName = async (pokemons: any, search: string) => {
    const result = pokemons?.filter((pokemon: any) =>
      pokemon.name.includes(search)
    );
    return result;
  }; */

  /*  const searchForAbility = async (search: string) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const result = await axios.get(
        `https://pokeapi.co/api/v2/ability/${search.toLowerCase()}`,
        config
      );
      if (result.status !== 200) {
        return null;
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }; */

  const searchPokemon = (pokemons: any, search: string) => {
    try {
      const result = pokemons?.filter((pokemon: any) =>
        pokemon.name.includes(search)
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPokemonsFull = async () => {
    const { data } = await axios.get(allPokemonsUrl);
    const pokemons = data.results.map((pokemon: any) => pokemon);
    setAllPokemons(pokemons);
  };
  useEffect(() => {
    getAllPokemonsFull();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        searchPokemon,
        setSearch,
        search,
        allPokemons,
        setResultSearch,
        resultSearch,
        edit,
        setEdit,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
