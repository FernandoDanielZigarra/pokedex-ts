import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonList } from "../../components/PokemonList";
import { usePagination } from "../../hooks/usePagination";
import { HomeHeader } from "../../components/HomeHeader";
import { NotResult } from "../../components/NotResult";




export const SearchPage = () => {
  const { page } = usePagination();
  const { resultSearchNames } = useContext(PokemonContext);
  const maxItemsInPage = 99;

  return (
    <>
      <HomeHeader />
      {
        resultSearchNames?.length !== 0 ? <PokemonList
        pokemonsUrls={resultSearchNames}
        page={page}
        maxItemsInPage={maxItemsInPage}
      /> : <NotResult />
      }
    </>
  );
};
