import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTodo = createAsyncThunk(
 "todos/addTodo",
 async (todoData, thunkAPI) => {
  try {
   const response = await axios.post(
    "http://localhost:5000/Todolist",
    todoData
   );
   return response.data;
  } catch (error) {
   return thunkAPI.rejectWithValue(error.message);
  }
 }
);

export const fetchAllTodos = createAsyncThunk(
 "users/fetchAllUsers",
 async (_, thunkAPI) => {
  try {
   const response = await axios.get("http://localhost:5000/Todolist");
   return response.data;
  } catch (error) {
   return thunkAPI.rejectWithValue(error.message);
  }
 }
);

export const fetchSingleTodo = createAsyncThunk(
 "users/fetchSingleUser",
 async (userId, thunkAPI) => {
  try {
   const response = await axios.get(`http://localhost:5000/Todolist/${userId}`);
   return response.data;
  } catch (error) {
   return thunkAPI.rejectWithValue(error.message);
  }
 }
);

export const deleteTodo = createAsyncThunk(
 "users/deleteUser",
 async (userId, thunkAPI) => {
  try {
   await axios.delete(`http://localhost:5000/Todolist/${userId}`);
   return userId;
  } catch (error) {
   return thunkAPI.rejectWithValue(error.message);
  }
 }
);

export const updateTodo = createAsyncThunk(
 "users/updateUser",
 async (userData, thunkAPI) => {
  try {
   const response = await axios.put(
    `http://localhost:5000/Todolist/${userData.id}`,
    userData
   );
   return response.data;
  } catch (error) {
   return thunkAPI.rejectWithValue(error.message);
  }
 }
);
