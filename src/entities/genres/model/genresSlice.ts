import { createSlice } from "@reduxjs/toolkit";
import type { GenreType } from "@shared/types";
import { getAllGenres } from "../api/getAllGenres";

interface initialStateType {
  genres: GenreType[]
  genresIsLoading: boolean
}

const initialState: initialStateType = {
  genres: [],
  genresIsLoading: false
}

export const genresSlise = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllGenres.pending, (state) => {
        state.genresIsLoading = true;
      })
      .addCase(getAllGenres.fulfilled, (state, action) => {
        state.genresIsLoading = false;
        state.genres = action.payload
      })
      .addCase(getAllGenres.rejected, (state) => {
        state.genresIsLoading = false;
      })
  }
})