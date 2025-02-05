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
    try {
      const { data } = await contactsApi.post("users/logout");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const saveToken = thunkAPI.getState().auth.token;
    if (saveToken === null) {
      return thunkAPI.rejectWithValue("token not found");
    }

    setAuthHeader(saveToken);

    try {
      const { data } = await contactsApi.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
