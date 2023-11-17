import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getPokemonsData } from '../store/reducers/getPokemonsData';

import Header from '../components/Header';
import Search from '../components/Search';
import PokemonList from '../components/PokemonList';
import FilterByType from '../components/FilterByType';
import PokemonListType from '../components/PokemonListType';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { allPokemon, searchByType } = useAppSelector(
    (state) => state.PokemonReducer
  );
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (allPokemon?.length === 0 && isInitialMount.current) {
      isInitialMount.current = false;
      dispatch(getPokemonsData(''));
    }
  }, [allPokemon, dispatch]);

  return (
    <>
      <Header />
      <Search />
      <FilterByType />
      {searchByType ? <PokemonListType /> : <PokemonList />}
    </>
  );
};

export default Home;
