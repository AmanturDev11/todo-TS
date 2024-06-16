
// !!

// import { ChangeEvent, FC, FormEvent, useState } from "react";
// import { Box, Button, TextField, styled } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { addTodo, deleteAll } from "../store/todoSlice/todoSlice";
// import { Todo } from "../types";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const INPUT_ARRAY = [
// 	{
// 		name: "title",
// 		label: "name",
// 		type: "text",
// 	},
// 	{
// 		name: "date",
// 		label: "date",
// 		type: "date",
// 	},
// ];

// const schema = yup
// 	.object({
// 		title: yup.string().required(" это поле"),
// 		date: yup.string().required(),
// 	})
// 	.required();

// const TodoForm: FC = () => {
// 	// const [title, setTitle] = useState<string>("");
// 	// const [date, setDate] = useState<string>("");
// 	const dispatch = useDispatch();

// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm({
// 		defaultValues: {
// 			title: "",
// 			date: "",
// 		},
// 		resolver: yupResolver(schema),
// 	});

// 	// !!!!

// 	const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>
// 		setTitle(e.target.value);

// 	const changeDate = (e: ChangeEvent<HTMLInputElement>) =>
// 		setDate(e.target.value);

// 	const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		const newData: Todo = {
// 			id: Math.floor(Math.random() * 1000),
// 			title,
// 			date,
// 			isCompleted: false,
// 		};
// 		dispatch(addTodo(newData));
// 		// setTitle("");
// 		// setDate("");
// 	};

// 	const handleDeleteAll = () => {
// 		dispatch(deleteAll());
// 	};

// 	return (
// 		<div>
// 			<div className="container">
// 				<Content>
// 					<Box component={"form"} onSubmit={handleSubmit(handleAddTodo)}>
// 						<MuiContent>
// 							{INPUT_ARRAY.map((item) => {
// 								<TextField
// 									key={item.name}
// 									value={title}
// 									onChange={changeTitle}
// 									helperText={errors[item.name]?.message}
// 									error={!!errors[item.name]?.message}
// 									{...register(item.name)}
// 								/>;
// 							})}
// 							<Button type="submit">Add</Button>
// 							<Button onClick={handleDeleteAll}>Delete All</Button>
// 						</MuiContent>
// 					</Box>
// 				</Content>
// 			</div>
// 		</div>
// 	);
// };

// export default TodoForm;

// const Content = styled("div")(() => ({
// 	display: "flex",
// 	justifyContent: "center",
// 	// alignItems: "center",
// }));

// const MuiContent = styled("div")(() => ({
// 	display: "flex",
// 	justifyContent: "center",
// 	// alignItems: "center",
// 	flexDirection: "column",
// 	gap: "1rem",
// 	border: "1px solid",
// 	borderRadius: "5px",
// 	padding: "1rem",
// }));

// // const MuiInput = styled(TextField)(() => ({
// // 	width: "90%",
// // }));

// // const MuiForm = styled("form")(() => ({
// // 	border: "1px solid",
// // 	borderRadius: '5px",',
// // }));

import { FC } from "react";
import { Box, Button, TextField, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo, deleteAll } from "../store/todoSlice/todoSlice";
import { Todo } from "../types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
	.object({
		title: yup.string().required("Это поле обязательно"),
		date: yup.string().required("Это поле обязательно"),
	})
	.required();

const TodoForm: FC = () => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: { title: string; date: string }) => {
		const newData: Todo = {
			id: Math.floor(Math.random() * 1000),
			title: data.title,
			date: data.date,
			isCompleted: false,
		};
		dispatch(addTodo(newData));
		reset();
	};

	const handleDeleteAll = () => {
		dispatch(deleteAll());
	};

	return (
		<div>
			<div className="container">
				<Content>
					<Box component="form" onSubmit={handleSubmit(onSubmit)}>
						<MuiContent>
							<TextField
								{...register("title")}
								label="Title"
								error={!!errors.title}
								helperText={errors.title?.message}
							/>
							<TextField
								{...register("date")}
								type="date"
								error={!!errors.date}
								helperText={errors.date?.message}
								InputLabelProps={{ shrink: true }}
							/>
							<Button type="submit">Add</Button>
							<Button onClick={handleDeleteAll}>Delete All</Button>
						</MuiContent>
					</Box>
				</Content>
			</div>
		</div>
	);
};

export default TodoForm;

const Content = styled("div")(() => ({
	display: "flex",
	justifyContent: "center",
}));

const MuiContent = styled("div")(() => ({
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	gap: "1rem",
	border: "1px solid",
	borderRadius: "5px",
	padding: "1rem",
}));
