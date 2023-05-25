import { useContext, useState } from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const HomeHeader = () => {
  const { edit, setEdit } = useContext(PokemonContext);
  const [search, setSearch] = useState("");
  const { backToHome } = usePagination();
  const navigate = useNavigate();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${search}`);
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
