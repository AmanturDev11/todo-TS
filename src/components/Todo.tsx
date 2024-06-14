import { Box, Button, TextField, Typography } from "@mui/material";
import { Todo as TypeTodo } from "../types";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/todoSlice/todoSlice";
import { ChangeEvent, useState } from "react";

const Todo = (props: TypeTodo) => {
	const { title, id } = props;
	const dispatch = useDispatch();
	const [openEdit, setOpenEdit] = useState<boolean>(false);
	const [edit, setEdit] = useState<string>(title);

	const handleDelete = () => dispatch(deleteTodo(id));

	const handleOpenEdit = () => setOpenEdit((prev) => !prev);
	const handleEditTodo = (e: ChangeEvent<HTMLInputElement>) =>
		setEdit(e.target.value);
	const handleSaveEdit = () => {
		const newData: TypeTodo = {
			id,
			title: edit,
		};
		setEdit("");
		dispatch(editTodo(newData));
		setOpenEdit(false);
	};

	return (
		<Box>
			{openEdit ? (
				<Box>
					<TextField onChange={handleEditTodo} value={edit} />
					<Button onClick={handleSaveEdit}>save</Button>
					<Button onClick={handleOpenEdit}>cansel</Button>
				</Box>
			) : (
				<>
					<Typography>{title}</Typography>
					<Button onClick={handleDelete}>Delete</Button>
					<Button onClick={handleOpenEdit}>Edit</Button>
				</>
			)}
		</Box>
	);
};

export default Todo;
