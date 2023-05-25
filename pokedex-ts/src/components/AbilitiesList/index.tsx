/* import { PokemonList } from '../PokemonList'; */
import { usePokemon } from "../../hooks/usePokemon";
import styles from "./styles.module.scss";

interface Props {
  resultAbility: any;
}

export const AbilitiesList = ({ resultAbility }: Props) => {
  const names = resultAbility.map((ability: any) => ability.name);
  const urls = resultAbility.map((ability: any) => ability.url);
  const result = usePokemon(urls)
  const urlsPokemons = result?.pokemon?.pokemon.map((pokemon:any) => pokemon.pokemon)
  /* const urlsFinalPokemons = urlsPokemons?.pokemon.map((pokemon:any)=> pokemon.url) */
  console.log(urlsPokemons)
  /* const urls = resultAbility.map((ability:any)=> ability.url) */
  return (
    <div className={styles.abilities}>
      {/* {names.map((result: string) => (
        <span className={styles.ability} key={result}>
          {result}
        </span>
      ))} */}
    </div>
  );
};
