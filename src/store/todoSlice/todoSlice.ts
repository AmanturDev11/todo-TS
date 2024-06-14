import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo, TodosState } from "../../types";

const initialState: TodosState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, { payload }: PayloadAction<Todo>) => {
			state.todos.push(payload);
		},
		deleteTodo: (state, { payload }: PayloadAction<number>) => {
			state.todos = state.todos.filter((item) => item.id !== payload);
		},
		deleteAll: (state) => {
			state.todos = [];
		},
		editTodo: (state, { payload }: PayloadAction<Todo>) => {
			state.todos = state.todos.map((item) =>
				item.id === payload.id ? { ...item, title: payload.title } : item
			);
		},
	},
});

export const { addTodo, deleteTodo, deleteAll, editTodo } = todoSlice.actions;
