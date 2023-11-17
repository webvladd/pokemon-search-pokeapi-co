import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

import s from './PokemonListType.module.scss';

const PokemonListType: React.FC = () => {
  const { searchByType } = useAppSelector((state) => state.PokemonReducer);

  return (
    <section className={s.pokemon_list_type}>
      <div className={s.pokemon_list_type_wrap}>
        {searchByType?.map(({ pokemon }) => {
          const match = pokemon.url.match(/\/(\d+)\/$/);
          const pokemonId = match ? match[1] : null;
          const linkTo = pokemonId ? `pokemon/${pokemonId}` : '';

          return (
            <Link
              to={linkTo}
              key={pokemonId ?? undefined}
              className={s.pokemon_card}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              />
              <p>{pokemon.name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PokemonListType;
