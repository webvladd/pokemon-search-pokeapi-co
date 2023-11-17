import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPokemonByType } from '../../store/reducers/getPokemonByType';

import s from './PokemonInfo.module.scss';

const PokemonInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentPokemon } = useAppSelector((state) => state.PokemonReducer);
  const navigate = useNavigate();

  const handlerTypeBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedValue = (event.target as HTMLButtonElement).value;
    dispatch(getPokemonByType(selectedValue));
    navigate('/');
  };

  if (!currentPokemon) return <></>;
  return (
    <section className={s.pokemon_info}>
      <div className={s.pokemon_info_wrap}>
        <div className={s.pokemon_info_img}>
          <img
            src={currentPokemon.sprites.other['official-artwork'].front_default}
            alt={`${currentPokemon.name} image`}
          />
        </div>

        <div className={s.pokemon_info_properties}>
          <div className={s.property_name}>
            <span>Name:</span>
            <p>{currentPokemon.name}</p>
          </div>

          <div className={s.property_moves}>
            <span>Moves:</span>
            <ul>
              {currentPokemon.moves.map(({ move }) => {
                return <li key={move.name}>{move.name}</li>;
              })}
            </ul>
          </div>

          <div className={s.property_types}>
            <span>Types:</span>
            <ul>
              {currentPokemon.types.map(({ slot, type }) => {
                return (
                  <li key={slot}>
                    <button
                      className={s.type_btn}
                      value={type.name}
                      onClick={(e) => handlerTypeBtn(e)}
                    >
                      {type.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link to='/' className={s.back_btn}>
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PokemonInfo;
