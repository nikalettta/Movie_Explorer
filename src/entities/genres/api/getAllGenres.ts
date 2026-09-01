import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGenres } from "../../../api/api"


export const getAllGenres = createAsyncThunk(
  'genres/getAllGenres',
  async () => {
  return await getGenres();
  }
)