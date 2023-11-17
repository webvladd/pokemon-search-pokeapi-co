import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector, useDebounce } from '../../hooks';
import { getPokemonName } from '../../store/reducers/getPokemonName';

import PokemonLoader from '../PokemonLoader';

import s from './Search.module.scss';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { searchByName, isLoadingSearchByName } = useAppSelector(
    (state) => state.PokemonReducer
  );
  const [searchText, setSearchText] = useState<string>(
    searchByName?.name || ''
  );
  const debouncedValue: string = useDebounce(searchText.toLowerCase(), 500);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchByName) {
      navigate(`/pokemon/${searchByName.id}`);
    }
  };

  useEffect(() => {
    if (debouncedValue.length > 0) dispatch(getPokemonName(debouncedValue));
  }, [dispatch, debouncedValue]);

  return (
    <section className={s.search}>
      <div className={s.search_wrap}>
        {isLoadingSearchByName && (
          <div className={s.pokemon_loader}>
            <PokemonLoader />
          </div>
        )}

        <input
          type='text'
          className={s.search_input}
          placeholder='Search Pokemon'
          onChange={({ target: { value } }) => {
            setSearchText(value);
          }}
          value={searchText}
          onKeyDown={handleKeyPress}
        />

        {!isLoadingSearchByName && searchText.length > 0 && !searchByName && (
          <div className={s.negative_msg}>
            <p>Pokemon not found.</p>
          </div>
        )}

        {!isLoadingSearchByName && searchText.length > 0 && searchByName && (
          <div className={s.success_msg}>
            <p>Pokemon found:</p>
            <Link
              to={`/pokemon/${searchByName.id}`}
              title={`More about ${
                searchByName.name[0].toUpperCase() + searchByName.name.slice(1)
              }`}
            >
              {searchByName.name}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
