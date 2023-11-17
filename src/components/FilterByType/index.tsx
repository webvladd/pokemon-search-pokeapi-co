import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPokemonByType } from '../../store/reducers/getPokemonByType';

import { PokemonElementType } from '../../types';

import PokemonLoader from '../PokemonLoader';

import s from './FilterByType.module.scss';

const typeValues: PokemonElementType[] = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water'
];

const FilterByType: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoadingSearchByType, activeType } = useAppSelector(
    (state) => state.PokemonReducer
  );

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as PokemonElementType;
    dispatch(getPokemonByType(selectedValue));
  };

  return (
    <div className={s.filter_by_type}>
      <div className={s.filter_by_type_wrap}>
        <label htmlFor='pokemonType' className={s.filter_by_type_select}>
          <select
            id='pokemonType'
            name='options'
            onChange={handleTypeChange}
            value={activeType || ''}
          >
            <option value=''>Select a type</option>
            {typeValues.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        {isLoadingSearchByType && (
          <div className={s.pokemon_loader}>
            <PokemonLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterByType;
