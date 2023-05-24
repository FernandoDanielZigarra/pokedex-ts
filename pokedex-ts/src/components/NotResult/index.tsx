import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";

import styles from './styles.module.scss'

export const NotResult = () => {
  const { search } = useContext(PokemonContext);
  return (
    <div className={styles.container}>
      <img src="https://i.gifer.com/8fCz.gif" alt="charmander-chill" />
      <span>No se han encontrado resultados de la busqueda: {search}</span>
    </div>
  );
};
