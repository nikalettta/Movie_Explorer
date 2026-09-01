import { createSlice } from "@reduxjs/toolkit";
import type { MovieType } from "@shared/types";
import { getMovies } from "../api/getMovies";
import { getTopOfMovies } from "../api/getTopOfMovies";
import { getMoviesByGenres } from "../api/getMoviesByGenre";

interface initialStateType {
  movies: MovieType[]
  moviesCollections: {
    top: MovieType[]
  }
  selectedGenre: MovieType[]
  moviesCount: number | null
  moviesAreLoading: boolean
  error: string | null
}

const initialState: initialStateType = {
  movies: [],
  moviesCollections: {
    top: []
  },
  selectedGenre: [],
  moviesCount: null,
  moviesAreLoading: false,
  error: null
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state) => {
        state.moviesAreLoading = true
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.moviesAreLoading = false;
        state.movies = action.payload.docs;
        state.moviesCount = action.payload.total
        state.error = null;
      })
      .addCase(getMovies.rejected, (state) => {
        state.moviesAreLoading = false;
        state.error = 'Ошибка загрузки фильмов.'
      })

      .addCase(getTopOfMovies.pending, (state) => {
        state.moviesAreLoading = true
      })
      .addCase(getTopOfMovies.fulfilled, (state, action) => {
        state.moviesAreLoading = false;
        state.moviesCollections.top = action.payload.docs;
        state.error = null
      })
      .addCase(getTopOfMovies.rejected, (state) => {
        state.moviesAreLoading = false;
        state.error = 'Ошибка загрузки фильмов.'
      })

      .addCase(getMoviesByGenres.pending, (state) => {
        state.moviesAreLoading = true
      })
      .addCase(getMoviesByGenres.fulfilled, (state, action) => {
        state.moviesAreLoading = false;
        state.selectedGenre = action.payload;
        state.error = null
      })
      .addCase(getMoviesByGenres.rejected, (state) => {
        state.moviesAreLoading = false;
        state.error = 'Ошибка загрузки фильмов.'
      })

  }
})