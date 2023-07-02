import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (dataUser, thunkAPI) => {
    try {
      const response = await axios.post('/api/contacts', dataUser);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (_id, thunkAPI) => {
    
    try {
      const response = await axios.delete(`/api/contacts/${_id}`);
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const existContacts = createAsyncThunk(
  'contacts/existingContacts',
  async (data, thunkAPI) => {
    try {
      const body = { name: data.name, number: data.number };
      const response = await axios.patch(`/api/contacts/${data.id}`, body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
