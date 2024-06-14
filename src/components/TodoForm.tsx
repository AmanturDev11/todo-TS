import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const TodoForm = () => {
	const [title, setTitle] = useState("");

	const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>
		setTitle(e.target.value);

	return (
		<div>
			<Box>
				<TextField value={title} onChange={changeTitle} />
				<Button type="submit">Add</Button>
			</Box>
		</div>
	);
};

export default TodoForm;
