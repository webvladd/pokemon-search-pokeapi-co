import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPokemonsData } from '../../store/reducers/getPokemonsData';
import PokemonLoader from '../PokemonLoader';

import s from './PokemonList.module.scss';

const PokemonList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { allPokemon, count, isLoading } = useAppSelector(
    (state) => state.PokemonReducer
  );
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = debounce(() => {
    if (
      loadMoreRef.current &&
      window.innerHeight + window.scrollY >= loadMoreRef.current.offsetTop
    ) {
      if (!isLoading && allPokemon && allPokemon.length < count) {
        dispatch(getPokemonsData(''));
      }
    }
  }, 500);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className={s.pokemon_list}>
      <div className={s.pokemon_list_wrap}>
        {allPokemon?.map(({ name, url }) => {
          const match = url.match(/\/(\d+)\/$/);
          const pokemonId: string | null = match ? match[1] : null;
          const linkTo: string = pokemonId ? `pokemon/${pokemonId}` : '';

          return (
            <Link to={linkTo} key={pokemonId} className={s.pokemon_card}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              />

              <p>{name}</p>
            </Link>
          );
        })}
      </div>

      <div className={s.pokemon_list_loader} ref={loadMoreRef}>
        {!isLoading && <p>Load more</p>}

        {isLoading && (
          <div className={s.loader_wrap}>
            <PokemonLoader />
          </div>
        )}
      </div>
    </section>
  );
};

export default PokemonList;
