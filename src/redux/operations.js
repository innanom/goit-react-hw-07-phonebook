import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.default.baseURL = "https://649a057279fbe9bcf8403de5.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get("/contacts");
            return responce.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const responce = await axios.post("/contacts", contact);
            console.log(responce.data);
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contact, thunkAPI) => {
        try {
            const responce = await axios.post(`/contacts/ ${contact.Id}`);
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

    