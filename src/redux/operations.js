import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://649a057279fbe9bcf8403de5.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get("/contacts");
            return responce.data;
        }
        catch (event) {
            return thunkAPI.rejectWithValue(event.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, phone}, thunkAPI) => {
        try {
            const responce = await axios.post("/contacts", {name, phone});
            console.log(responce.data);
            return responce.data;
        } catch (event) {
            return thunkAPI.rejectWithValue(event.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${contactId}`);
            return responce.data;
        } catch (event) {
            return thunkAPI.rejectWithValue(event.message);
        }
    }
);

