import { createSlice } from "@reduxjs/toolkit";
import type { MovieType } from "@shared/types";
import { getTheMovie } from "../api/getTheMovie";

interface initialStateType {
  movie: MovieType | null
  movieIsLoading: boolean
  error: string | null
}

const initialState: initialStateType = {
  movie: null,
  movieIsLoading: false,
  error: null
}

export const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTheMovie.pending, (state) => {
        state.movieIsLoading = true;
      })
      .addCase(getTheMovie.fulfilled, (state, action) => {
        state.movieIsLoading = false;
        state.error = null;
        state.movie = action.payload
      })
      .addCase(getTheMovie.rejected, (state) => {
        state.movieIsLoading = false;
        state.error = 'Ошибка загрузки фильма.'
      })
  }
})