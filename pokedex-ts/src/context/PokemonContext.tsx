/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { IPokemons } from "../interfaces/interfaces";

/* import { getPokemonsDeleted } from "../utils/localStorage"; */

interface MyComponentProps {
  children: React.ReactNode;
}

interface ContextProps {
  /* searchPokemon: (pokemons: IPokemons, value: string) => void; */
  allPokemons: any[];
  edit: boolean;
  setEdit: any;
  allAbilities:any[];
  searchForName:any[];
  searchForAbility:any[];
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: MyComponentProps) => {
  const allPokemonsUrl =
    "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

  const AllAbilitiesUrl = "https://pokeapi.co/api/v2/ability?limit=1000&offset=0"

  const [allPokemons, setAllPokemons] = useState([]);
  const [allAbilities, setAllAbilities] = useState([])
  
  const [search, setSearch] = useState("");
  
  const [resultSearchNames, setResultSearchNames] = useState();
  const [resultSearchAbility, setResultSearchAbility] = useState();

  const [edit, setEdit] = useState(false);

  const searchForName = (pokemons: any, search: string) => {
    const result = pokemons?.filter((pokemon: any) =>
      pokemon.name.includes(search)
    );
    return result;
  };

   const searchForAbility = (abilities: any, search: string) => {
    const result = abilities?.filter((ability: any) =>
    ability.name.includes(search)
    );
    return result;
  };

  const getAllPokemonsFull = async () => {
    const { data } = await axios.get(allPokemonsUrl);
    const pokemons = data.results.map((pokemon: any) => pokemon);
    setAllPokemons(pokemons);
  };

  const getAllAbilitiesFull = async () => {
    const { data } = await axios.get(AllAbilitiesUrl);
    const abilities = data.results.map((pokemon: any) => pokemon);
    setAllAbilities(abilities);
  };

  useEffect(() => {
    getAllPokemonsFull();
    getAllAbilitiesFull()
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        allAbilities,
        edit,
        setEdit,
        searchForAbility,
        searchForName
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
