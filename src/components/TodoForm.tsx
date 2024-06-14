import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo, deleteAll,  } from "../store/todoSlice/todoSlice";
import { Todo } from "../types";

const TodoForm: FC = () => {
	const [title, setTitle] = useState<string>("");
	const dispatch = useDispatch();

	const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>
		setTitle(e.target.value);

	const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newData: Todo = {
			id: Math.floor(Math.random() * 1000),
			title,
		};
		dispatch(addTodo(newData));
		setTitle("");
	};

	const handleDeleteAll = () => {
		dispatch(deleteAll());
	};

	return (
		<div>
			<Box component={"form"} onSubmit={handleAddTodo}>
				<TextField value={title} onChange={changeTitle} />
				<Button type="submit">Add</Button>
				<Button onClick={handleDeleteAll}>DeleteAll</Button>
			</Box>
		</div>
	);
};

export default TodoForm;
