import { combineReducers, configureStore } from '@reduxjs/toolkit';
import PokemonReducer from './slices/PokemonSlice';

const rootReducer = combineReducers({
  PokemonReducer
});

const createStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export const store = createStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

