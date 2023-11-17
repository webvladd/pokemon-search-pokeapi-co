import { createSlice } from '@reduxjs/toolkit';
import { PokemonInitialStateType } from '../../types';
import { getPokemonsData } from '../reducers/getPokemonsData';
import { getPokemon } from '../reducers/getPokemon';
import { getPokemonName } from '../reducers/getPokemonName';
import { getPokemonByType } from '../reducers/getPokemonByType';

const initialState: PokemonInitialStateType = {
  allPokemon: [],
  count: 0,
  isLoading: false,
  error: '',
  currentPokemon: undefined,
  searchByName: undefined,
  isLoadingSearchByName: false,
  activeType: undefined,
  searchByType: undefined,
  isLoadingSearchByType: false
};

export const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {
    [getPokemonsData.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      if (state.count === 0) state.count = action.payload.count;
      state.allPokemon.push(...action.payload.results);
    },
    [getPokemonsData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPokemonsData.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getPokemon.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.currentPokemon = action.payload;
    },
    [getPokemon.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPokemon.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getPokemonName.fulfilled.type]: (state, action) => {
      state.isLoadingSearchByName = false;
      state.error = '';
      state.searchByName = action.payload;
    },
    [getPokemonName.pending.type]: (state) => {
      state.isLoadingSearchByName = true;
    },
    [getPokemonName.rejected.type]: (state, action) => {
      state.isLoadingSearchByName = false;
      state.searchByName = undefined;
      state.error = action.payload;
    },
    [getPokemonByType.fulfilled.type]: (state, action) => {
      state.isLoadingSearchByType = false;
      state.error = '';
      state.activeType = action.meta.arg;
      state.searchByType = action.payload.pokemon;
    },
    [getPokemonByType.pending.type]: (state) => {
      state.isLoadingSearchByType = true;
    },
    [getPokemonByType.rejected.type]: (state, action) => {
      state.isLoadingSearchByType = false;
      state.activeType = undefined;
      state.searchByType = undefined;
      state.error = action.payload;
    }
  }
});

export default PokemonSlice.reducer;
