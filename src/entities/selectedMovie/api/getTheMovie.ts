import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieById } from "../../../api/api";

export const getTheMovie = createAsyncThunk(
  'movie/getMovie',
  async (id: number) => {
    return await getMovieById(id);
  })