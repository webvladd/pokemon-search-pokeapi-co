import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../hooks';
import { getPokemon } from '../store/reducers/getPokemon';

import Header from '../components/Header';
import PokemonInfo from '../components/PokemonInfo';

const Pokemon: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current && id) {
      isInitialMount.current = false;
      dispatch(getPokemon(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <PokemonInfo />
    </>
  );
};

export default Pokemon;
