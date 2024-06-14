import React, { FC } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { Todo as TypeTodo } from "../types";
import { RootState } from "../store/store";
// import { Todo } from "../types";

const TodoList: FC = () => {
	const { todos } = useSelector((state: RootState) => state.todo);
	return (
		<div>
			{todos?.map((todo: TypeTodo) => (
				<Todo key={todo.id} {...todo} />
			))}
		</div>
	);
};

export default TodoList;
