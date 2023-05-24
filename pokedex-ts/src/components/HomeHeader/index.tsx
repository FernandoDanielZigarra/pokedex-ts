import { useContext, useRef } from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const HomeHeader = () => {
  const {
    setSearch,
    searchPokemon,
    search,
    allPokemons,
    setResultSearch,
    edit,
    setEdit,
  } = useContext(PokemonContext);
  const { backToHome } = usePagination();
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    
    const response = searchPokemon(allPokemons, search);
    const result = response.map((pokemon: any) => pokemon.url);
    setResultSearch(result);
    navigate("/search");
  };
  return (
    <header>
      <div onClick={backToHome}>
        <PokeballIconSmall />
        <span>Pokédex</span>
      </div>
      <input
        className={styles.inpSearch}
        type="text"
        ref={inputRef}
        onChange={onChangeSearch}
      />
      <button onClick={handleSearch}>Buscar</button>
      {edit ? (
        <button onClick={() => setEdit(!edit)}>Finish edit</button>
      ) : (
        <button onClick={() => setEdit(!edit)}>Edit</button>
      )}
    </header>
  );
};
