import { configureStore } from "@reduxjs/toolkit";
import { contactsListReducer } from "./contacts/contactsSlice";
import { filterReduser } from "./filters/filtersSlice";
import { authReduser } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsListReducer,
    filter: filterReduser,
    auth: authReduser,
  },
});
