import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonList } from "../../components/PokemonList";
import { usePagination } from "../../hooks/usePagination";
import { HomeHeader } from "../../components/HomeHeader";
import { NotResult } from "../../components/NotResult";
import { useParams } from "react-router-dom";
import { AbilitiesList } from "../../components/AbilitiesList";


export const SearchPage = () => {
  const { allPokemons, allAbilities, searchForAbility, searchForName } =
    useContext(PokemonContext);
  const [resultName, setResultName] = useState([]);
  const [resultAbility, setResultAbility] = useState([]);

  const { query } = useParams();
  const { page } = usePagination();

  const maxItemsInPage = 99;

  const handleSearch = () => {
    const resultAbility = searchForAbility(allAbilities, query);
    console.log(resultAbility)
    const resultName = searchForName(allPokemons, query);
    const nameResultUrls = resultName.map((pokemon: any) => pokemon.url);
    setResultName(nameResultUrls);
    setResultAbility(resultAbility);
  };

  useEffect(() => {
    if (query) {
      handleSearch()
    }
  }, [query]);

  return (
    <>
      <HomeHeader />
      {resultName.length !== 0 ? (
        <>
        <h2 style={{textAlign:"center"}}>Pokemons Results:</h2>
        <PokemonList
          pokemonsUrls={resultName}
          page={page}
          maxItemsInPage={maxItemsInPage}
        />
        </>
      ) : (
        <NotResult msj='No se ha encontrado resultado del pokemon ' />
      )}
      {
        resultAbility.length !== 0 ? (
          <>
          <h2 style={{textAlign:"center"}}>Abilities Result</h2>
          {
            resultAbility.map((ability:any) => (
              <AbilitiesList resultAbility={resultAbility} />
            ))
          }
          </>
        
        ) : (<NotResult msj='No se ha encontrado resultado de la habilidad ' />)
      }
      
    </>
  );
};
