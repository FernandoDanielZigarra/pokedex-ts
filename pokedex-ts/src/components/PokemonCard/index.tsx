import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/BackgroundsByType";
import { Link } from "react-router-dom";
import { Loader } from "../Loader";

import styles from "./styles.module.scss";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);
  const { edit } = useContext(PokemonContext);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  return (  
      <div className={styles.pokeCard}>
        <div style={{ borderColor: backgroundSelected }} className={styles.top}>
          <input type="checkbox" className={styles.checkDelete} style={{display: edit ? "block" : "none"}}/>
          <span style={{ color: backgroundSelected }}>#{pokemon?.id}</span>
          {pokemon?.sprites?.other?.dream_world?.front_default ||
          pokemon?.sprites?.front_default ? (
            <Link to={`/${pokemon?.id}`}>
              <img
                src={
                  pokemon?.sprites?.other?.dream_world?.front_default ||
                  pokemon?.sprites?.front_default
                }
                alt={pokemon?.name}
              />
            </Link>
          ) : (
            <div className={styles.loadingContainer}>
              <Loader color={backgroundSelected} />
            </div>
          )}
        </div>
        <div
          style={{ background: backgroundSelected }}
          className={styles.bottom}
        >
          {pokemon?.name}
        </div>
      </div>
  );
};
