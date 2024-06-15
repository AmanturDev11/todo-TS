import { Box, Button, TextField, Typography } from "@mui/material";
import { Todo as TypeTodo } from "../types";
import { useDispatch } from "react-redux";
import {
	completedTodo,
	deleteTodo,
	editTodo,
} from "../store/todoSlice/todoSlice";
import { ChangeEvent, useState } from "react";

const Todo = (props: TypeTodo) => {
	const { title, id, isCompleted } = props;
	const dispatch = useDispatch();
	const [openEdit, setOpenEdit] = useState<boolean>(false);
	const [edit, setEdit] = useState<string>(title);
	// const [editDate, setEditDate] = useState<number>(date);

	const handleDelete = () => dispatch(deleteTodo(id));

	const handleOpenEdit = () => setOpenEdit((prev) => !prev);
	const handleEditTodo = (e: ChangeEvent<HTMLInputElement>) =>
		setEdit(e.target.value);

	// const handleEditDate = (e: ChangeEvent<HTMLInputElement>) =>
	// 	setEditDate(e.target.value);
	const handleSaveEdit = () => {
		const newData: TypeTodo = {
			id,
			title: edit,
			// date: editDate,
			isCompleted,
		};
		setEdit("");
		// setEditDate("");
		dispatch(editTodo(newData));
		setOpenEdit(false);
	};

	const handleCompleted = () => dispatch(completedTodo(id));

	return (
		<Box>
			{openEdit ? (
				<Box>
					<TextField onChange={handleEditTodo} value={edit} />
					{/* <TextField onChange={handleEditDate} value={editDate} type="date" /> */}
					<Button onClick={handleSaveEdit}>save</Button>
					<Button onClick={handleOpenEdit}>cansel</Button>
				</Box>
			) : (
				<>
					<Typography
						sx={{ textDecoration: isCompleted ? "line-through" : "" }}>
						{title}
					</Typography>
					{/* <Typography>{date}</Typography> */}
					<Button onClick={handleDelete}>Delete</Button>
					<Button onClick={handleOpenEdit}>Edit</Button>
					<Button onClick={handleCompleted}>
						{isCompleted ? "unCompleted" : "completed"}
					</Button>
				</>
			)}
		</Box>
	);
};

export default Todo;
