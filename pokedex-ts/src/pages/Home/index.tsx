import { useContext, useRef, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonList } from "../../components/PokemonList";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { HomeHeader } from "../../components/HomeHeader";

import styles from "./styles.module.scss";

export const Home = () => {
  const { allPokemons } = useContext(PokemonContext);
  const { page, nextPage, previusPage } = usePagination();
  const [edit, setEdit] = useState(false);
  const urls = allPokemons?.map((pokemon: any) => pokemon?.url);
  const maxItemsInPage = 12;
  return (
    <div className={styles.home}>
      <HomeHeader edit={edit} setEdit={setEdit} />
      <PokemonList
        pokemonsUrls={urls}
        page={page}
        maxItemsInPage={maxItemsInPage}
        edit={edit}
      />
      <Pagination
        page={page}
        maxItemsInPage={maxItemsInPage}
        nextPage={nextPage}
        previusPage={previusPage}
        maxItems={allPokemons !== null ? allPokemons.length : 20}
      />
    </div>
  );
};
