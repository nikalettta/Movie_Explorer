import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopMovies } from "../../../api/api";

export const getTopOfMovies = createAsyncThunk(
  'topMovies/getTopOfMovies',
  async () => {
    return await getTopMovies();
  }
)