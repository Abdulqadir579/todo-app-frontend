"use client";

import TodosList from "@/app/Components/TodoList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
 addTodo,
 deleteTodo,
 fetchAllTodos,
 fetchSingleTodo,
 updateTodo,
} from "../Redux/action";

const TodoPage = () => {
 const dispatch = useDispatch();
 const state = useSelector((state) => state.todos);
 const todos = state.result;
 const [text, setText] = useState("");

 useEffect(() => {
  const handleGetAllTodos = async () => {
   console.log("loading...");
   await dispatch(fetchAllTodos());
  };
  handleGetAllTodos();
  // dispatch(fetchSingleTodo()); // Replace with the desired user ID
  console.log(state);
 }, [dispatch]);

 const handleDelete = (id) => {
  dispatch(deleteTodo(id));
  console.log(id);
 };

 const handleUpdate = (userData) => {
  dispatch(updateTodo(userData));
 };

 const handleAddTodo = async () => {
  // const newTodo = {
  //   title: "New Todo Title", // Replace with your actual todo data
  //   description: "New Todo Description",
  //   // Add other fields as needed
  // };

  try {
   await dispatch(addTodo(text));
   // Optional: Fetch all todos or update state after adding the todo
   dispatch(fetchAllTodos());
  } catch (error) {
   console.error("Error adding todo:", error);
  }
 };

 useEffect(() => {
  dispatch(fetchAllTodos());
 }, []);

 return (
  <div className="w-1/2 m-auto">
   <h1 className="font-serif text-5xl my-9">TodoList App</h1>
   <div>
    <input
     onChange={(e) => setText(e.target.value)}
     type="text"
     value={text}
     name="price"
     id="price"
     className="block w-full rounded-md border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
     placeholder="Enter Text"
    />
    <button
     onClick={handleAddTodo}
     type="button"
     className="bg-yellow-700 drop-shadow-lg hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded mt-4"
    >
     Add
    </button>
   </div>
   <TodosList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />
  </div>
 );
};

export default TodoPage;
