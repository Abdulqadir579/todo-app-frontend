import { createSlice } from "@reduxjs/toolkit";
import {
 addTodo,
 deleteTodo,
 fetchAllTodos,
 fetchSingleTodo,
 updateTodo,
} from "./action";
const initialState = {
 todos: [],
 user: null,
 loading: false,
 todo: null,
};

const TodosSlice = createSlice({
 name: "users",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(addTodo.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(addTodo.fulfilled, (state, action) => {
    state.loading = false;
    state.todos.push(action.payload); // Add the new todo to the state
   })
   .addCase(addTodo.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
   })
   .addCase(fetchAllTodos.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(fetchAllTodos.fulfilled, (state, action) => {
    state.loading = false;
    state.todos = action.payload;
   })
   .addCase(fetchAllTodos.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
   })
   .addCase(fetchSingleTodo.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(fetchSingleTodo.fulfilled, (state, action) => {
    state.loading = false;
    state.user = action.payload;
   })
   .addCase(fetchSingleTodo.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
   })
   .addCase(deleteTodo.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(deleteTodo.fulfilled, (state, action) => {
    state.loading = false;
    state.todos = state?.todos?.filter((todo) => todo.id !== action.payload);
   })
   .addCase(deleteTodo.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
   })
   .addCase(updateTodo.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(updateTodo.fulfilled, (state, action) => {
    state.loading = false;
    // Update the specific user in the state based on the returned data
    state.todos = state.todos.map((todo) =>
     todo.id === action.payload.id ? action.payload : todo
    );
   })
   .addCase(updateTodo.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
   });
 },
});

export default TodosSlice.reducer;
