import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { RootState } from '../../store';

import { PokemonListType } from '../../types/';

export const getPokemonsData = createAsyncThunk<PokemonListType, string>(
  'pokemon/fetchAll',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const { allPokemon } = state.PokemonReducer;
      const offset = allPokemon ? allPokemon.length : 0;

      const response: AxiosResponse<PokemonListType> = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
      );

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
    }
  }
);
