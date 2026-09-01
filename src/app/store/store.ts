import { genresSlise } from "@entities/genres/model/genresSlice";
import { moviesSlice } from "@entities/movies/model/moviesSlice";
import { selectedMovieSlice } from "@entities/selectedMovie/model/selectedMovieSlice";
import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  type TypedUseSelectorHook
} from 'react-redux';


const rootReducer = {
  genres: genresSlise.reducer,
  movies: moviesSlice.reducer,
  selectedMovie: selectedMovieSlice.reducer
}

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;