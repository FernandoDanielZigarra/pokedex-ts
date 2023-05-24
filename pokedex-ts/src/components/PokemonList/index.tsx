import { PokemonCard } from "../PokemonCard";

import styles from "./styles.module.scss";

interface Props {
  pokemonsUrls?: string[] | null;
  page: number;
  maxItemsInPage: number;
}

export const PokemonList = ({ pokemonsUrls, page, maxItemsInPage }: Props) => {
  return (
    <div className={styles.pokemons}>
      {pokemonsUrls
        ?.slice((page - 1) * maxItemsInPage, (page - 1) * maxItemsInPage + maxItemsInPage)
        .map((pokemonUrl) => (
          <PokemonCard key={pokemonUrl} url={pokemonUrl} />
        ))}
    </div>
  );
};
