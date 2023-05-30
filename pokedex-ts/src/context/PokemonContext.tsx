/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { IPokemons } from "../interfaces/interfaces";
import { getPokemonsDeleted } from "../utils/localStorage";

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
  searchForName:(pokemons:IPokemons,value: string) => void;
  searchForAbility:any;
  deleteds: string[];
  setDeleteds: any
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: MyComponentProps) => {
  const allPokemonsUrl =
    "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

  const AllAbilitiesUrl = "https://pokeapi.co/api/v2/ability?limit=1000&offset=0"

  const [allPokemons, setAllPokemons] = useState([]);
  const [allAbilities, setAllAbilities] = useState([])
  const [deleteds, setDeleteds] = useState(()=>{
    const deleteds = getPokemonsDeleted("PokemonsDeleted")
    return deleteds.length !== 0 ? deleteds : []
  })
  
  /* const [search, setSearch] = useState(""); */
  
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
    if(deleteds?.length !== 0){
      const pokemons = data.results.filter((pokemon:any) => !deleteds.includes(pokemon?.name))
      return setAllPokemons(pokemons)
    }
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

  useEffect(()=> {
    getAllPokemonsFull()
  },[deleteds])

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        allAbilities,
        edit,
        setEdit,
        searchForAbility,
        searchForName,
        deleteds,
        setDeleteds
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
