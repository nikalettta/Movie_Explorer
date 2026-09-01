import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviesByGenre } from "../../../api/api";

export const getMoviesByGenres = createAsyncThunk(
  'moviesByGenre/getMoviesByGenre',
  async (genre: string) => {
    return await getMoviesByGenre(genre);
  })