import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { ListPokemonByType } from '../../types/';

export const getPokemonByType = createAsyncThunk<ListPokemonByType, string>(
  'pokemon/fetchPokemonByType',
  async (pokemonType: string, thunkApi) => {
    try {
      const response: AxiosResponse<ListPokemonByType> = await axios.get(
        `https://pokeapi.co/api/v2/type/${pokemonType}`
      );

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      if (!error.response) {
        throw err;
      }

      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);