import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contactsApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setAuthHeader = (token) => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (cradentials, thunkAPI) => {
    try {
      const { data } = await contactsApi.post("users/signup", cradentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (cradentials, thunkAPI) => {
    try {
      const { data } = await contactsApi.post("users/login", cradentials);
      console.log(data);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      const { data } = await contactsApi.post(
        "users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
