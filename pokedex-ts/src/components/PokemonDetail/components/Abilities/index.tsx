import { IPokemon } from "../../../../interfaces/interfaces";

import styles from './styles.module.scss'

interface Props {
  pokemon: IPokemon | null;
  backgroundSelected: string;
}

export const Abilities = ({ pokemon,backgroundSelected }: Props) => {
  return (
    <div className={styles.abilities} style={{border: `2px solid ${backgroundSelected}`}}>
      <h3 style={{color: backgroundSelected}}>Abilities</h3>
      {pokemon?.abilities.map((ability) => {
        return (
            <span key={ability.ability.url}>{ability.ability.name}</span>
        )
      })}
    </div>
  );
};
