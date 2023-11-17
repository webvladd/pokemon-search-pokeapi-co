import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { PokemonInstance } from '../../types/';

export const getPokemon = createAsyncThunk<PokemonInstance, string>(
  'pokemon/fetchPokemon',
  async (id: string, thunkApi) => {
    try {
      const response: AxiosResponse<PokemonInstance> = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
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
