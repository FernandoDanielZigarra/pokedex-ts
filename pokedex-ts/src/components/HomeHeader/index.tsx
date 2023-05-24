import { useContext, useRef } from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const HomeHeader = () => {
  const {
    setSearch,
    searchForAbility,
    setResultSearchAbility,
    searchForName,
    setResultSearchNames,
    search,
    allPokemons,
    allAbilities,
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
    try {
      const responseAbility = searchForAbility(allAbilities, search);
      const resultAbility = responseAbility.map((ability: any) => ability.url);

      const responseName = searchForName(allPokemons, search);
      const resultName = responseName.map((pokemon: any) => pokemon.url);

      setResultSearchAbility(responseName);
      setResultSearchNames(resultName);
      navigate("/search");
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <header className={styles.container}>
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
