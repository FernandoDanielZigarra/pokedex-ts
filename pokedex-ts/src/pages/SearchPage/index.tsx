import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonList } from "../../components/PokemonList";
import { usePagination } from "../../hooks/usePagination";
import { HomeHeader } from "../../components/HomeHeader";




export const SearchPage = () => {
  const { page } = usePagination();
  const { resultSearch } = useContext(PokemonContext);
  const maxItemsInPage = 99;

  return (
    <>
      <HomeHeader />
      <PokemonList
        pokemonsUrls={resultSearch}
        page={page}
        maxItemsInPage={maxItemsInPage}
      />
    </>
  );
};
