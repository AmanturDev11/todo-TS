// import { Box, Button, TextField, Typography, styled } from "@mui/material";
// import { Todo as TypeTodo } from "../types";
// import { useDispatch } from "react-redux";
// import {
// 	completedTodo,
// 	deleteTodo,
// 	editTodo,
// } from "../store/todoSlice/todoSlice";
// import { ChangeEvent, useState } from "react";

// const Todo = (props: TypeTodo) => {
// 	const { title, id, isCompleted, date } = props;
// 	const dispatch = useDispatch();
// 	const [openEdit, setOpenEdit] = useState<boolean>(false);
// 	const [edit, setEdit] = useState<string>(title);
// 	const [editDate, setEditDate] = useState<string>(date); // Keep date as string

// 	const handleDelete = () => dispatch(deleteTodo(id));

// 	const handleOpenEdit = () => setOpenEdit((prev) => !prev);
// 	const handleEditTodo = (e: ChangeEvent<HTMLInputElement>) =>
// 		setEdit(e.target.value);

// 	const handleEditDate = (e: ChangeEvent<HTMLInputElement>) =>
// 		setEditDate(e.target.value);

// 	const handleSaveEdit = () => {
// 		const newData: TypeTodo = {
// 			id,
// 			title: edit,
// 			date: editDate,
// 			isCompleted,
// 		};
// 		dispatch(editTodo(newData));
// 		setOpenEdit(false);
// 	};

// 	const handleCompleted = () => dispatch(completedTodo(id));

// 	return (
// 		<div>
// 			<div className="container">
// 				<Content>
// 					<CardsContent>
// 						{openEdit ? (
// 							<MuiBox>
// 								<TextField onChange={handleEditTodo} value={edit} />
// 								<TextField
// 									onChange={handleEditDate}
// 									value={editDate}
// 									type="date"
// 								/>
// 								<Button onClick={handleSaveEdit}>Save</Button>
// 								<Button onClick={handleOpenEdit}>Cancel</Button>
// 							</MuiBox>
// 						) : (
// 							<MuiBox>
// 								<Typography
// 									sx={{ textDecoration: isCompleted ? "line-through" : "" }}>
// 									{title}
// 								</Typography>
// 								<Typography
// 									sx={{ textDecoration: isCompleted ? "line-through" : "" }}>
// 									{date}
// 								</Typography>
// 								{/* Convert to Date for display */}
// 								<Button onClick={handleDelete}>Delete</Button>
// 								<Button onClick={handleOpenEdit}>Edit</Button>
// 								<Button onClick={handleCompleted}>
// 									{isCompleted ? "Uncomplete" : "Complete"}
// 								</Button>
// 							</MuiBox>
// 						)}
// 					</CardsContent>
// 				</Content>
// 			</div>
// 		</div>
// 	);
// };

// export default Todo;

// const Content = styled("div")(() => ({
// 	display: "flex",
// 	justifyContent: "center",
// 	// alignItems: "center",
// 	// flexDirection: "column",
// }));

// const CardsContent = styled("div")(() => ({
// 	display: "flex",
// 	justifyContent: "center",
// 	alignItems: "center",
// 	flexWrap: "wrap",
// 	// flexDirection: "column",
// }));

// const MuiBox = styled(Box)(() => ({
// 	display: "flex",
// 	justifyContent: "center",
// 	alignItems: "center",
// 	flexDirection: "column",
// 	padding: "5px",
// 	// paddingLeft: "10px",
// 	border: "1px solid",
// 	borderRadius: "5px",
// }));

import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { Todo as TypeTodo } from "../types";
import { useDispatch } from "react-redux";
import {
	completedTodo,
	deleteTodo,
	editTodo,
} from "../store/todoSlice/todoSlice";
import { ChangeEvent, useState } from "react";

const Todo = (props: TypeTodo) => {
	const { title, id, isCompleted, date } = props;
	const dispatch = useDispatch();
	const [openEdit, setOpenEdit] = useState<boolean>(false);
	const [edit, setEdit] = useState<string>(title);
	const [editDate, setEditDate] = useState<string>(date);

	const handleDelete = () => dispatch(deleteTodo(id));

	const handleOpenEdit = () => setOpenEdit((prev) => !prev);
	const handleEditTodo = (e: ChangeEvent<HTMLInputElement>) =>
		setEdit(e.target.value);
	const handleEditDate = (e: ChangeEvent<HTMLInputElement>) =>
		setEditDate(e.target.value);

	const handleSaveEdit = () => {
		const newData: TypeTodo = {
			id,
			title: edit,
			date: editDate,
			isCompleted,
		};
		dispatch(editTodo(newData));
		setOpenEdit(false);
	};

	const handleCompleted = () => dispatch(completedTodo(id));

	return (
		<div>
			<div className="container">
				<Content>
					<CardsContent>
						{openEdit ? (
							<MuiBox>
								<TextField onChange={handleEditTodo} value={edit} />
								<TextField
									onChange={handleEditDate}
									value={editDate}
									type="date"
								/>
								<Button onClick={handleSaveEdit}>Save</Button>
								<Button onClick={handleOpenEdit}>Cancel</Button>
							</MuiBox>
						) : (
							<MuiBox>
								<Typography
									sx={{ textDecoration: isCompleted ? "line-through" : "" }}>
									{title}
								</Typography>
								<Typography
									sx={{ textDecoration: isCompleted ? "line-through" : "" }}>
									{date}
								</Typography>
								<Button onClick={handleDelete}>Delete</Button>
								<Button onClick={handleOpenEdit}>Edit</Button>
								<Button onClick={handleCompleted}>
									{isCompleted ? "Uncomplete" : "Complete"}
								</Button>
							</MuiBox>
						)}
					</CardsContent>
				</Content>
			</div>
		</div>
	);
};

export default Todo;

const Content = styled("div")(() => ({
	display: "flex",
	justifyContent: "center",
}));

const CardsContent = styled("div")(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexWrap: "wrap",
}));

const MuiBox = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	padding: "5px",
	border: "1px solid",
	borderRadius: "5px",
}));
