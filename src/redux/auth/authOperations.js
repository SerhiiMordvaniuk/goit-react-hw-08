import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (cradentials, thunkAPI) => {
    try {
      const { data } = await axios.post("users/signup", cradentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
