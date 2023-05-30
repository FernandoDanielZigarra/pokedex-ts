import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/BackgroundsByType";
import { Link } from "react-router-dom";
import { Loader } from "../Loader";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { setPokemonsDeleted } from "../../utils/localStorage";
import styles from "./styles.module.scss";

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const [checked, setChecked] = useState(false);

  const { pokemon } = usePokemon(url);
  const { edit, deleteds, setDeleteds } = useContext(PokemonContext);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];
  useEffect(() => {
    setPokemonsDeleted("PokemonsDeleted", deleteds);
  }, [checked]);

  const handleCheckboxChange = (e: any) => {
    setChecked(e.target.checked);
    if (!e.target.checked) {
      const newDeleteds = deleteds.filter((n: any) => n !== pokemon?.id);
      return setDeleteds(newDeleteds);
    }
    setDeleteds([...deleteds, pokemon?.name]);
  };

  return (
    <div className={styles.pokeCard}>
      <div style={{ borderColor: backgroundSelected }} className={styles.top}>
        <input
          type="checkbox"
          className={styles.checkDelete}
          style={{ display: edit ? "block" : "none" }}
          checked={checked}
          onChange={handleCheckboxChange}
        />
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
      <div style={{ background: backgroundSelected }} className={styles.bottom}>
        {pokemon?.name}
      </div>
    </div>
  );
};
