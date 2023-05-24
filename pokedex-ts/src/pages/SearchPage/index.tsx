import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonList } from "../../components/PokemonList";
import { usePagination } from "../../hooks/usePagination";
import { HomeHeader } from "../../components/HomeHeader";
import { NotResult } from "../../components/NotResult";




export const SearchPage = () => {
  const { page } = usePagination();
  const { resultSearch } = useContext(PokemonContext);
  const maxItemsInPage = 99;

  console.log(resultSearch.length)

  return (
    <>
      <HomeHeader />
      {
        resultSearch?.length !== 0 ? <PokemonList
        pokemonsUrls={resultSearch}
        page={page}
        maxItemsInPage={maxItemsInPage}
      /> : <NotResult />
      }
    </>
  );
};
