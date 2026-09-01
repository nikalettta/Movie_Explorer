import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPageMovies } from "../../../api/api";

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async () => {
    return await getPageMovies();
  })