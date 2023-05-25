/* import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext"; */

import { useParams } from 'react-router-dom';
import styles from './styles.module.scss'

interface Props {
  msj: string;
}

export const NotResult = ({msj}:Props) => {
  const {query} = useParams()
  return (
    <div className={styles.container}>
      <img src="https://i.gifer.com/8fCz.gif" alt="charmander-chill" />
      <span>{msj}{query}</span>
    </div>
  );
};
