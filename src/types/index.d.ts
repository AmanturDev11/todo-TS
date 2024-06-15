// export interface Todo {
// 	id: number;
// 	title: string;
// 	date: Date;
// 	isCompleted: boolean;
// }

export interface Todo {
	id: number;
	title: string;
	date: string;
	isCompleted: boolean;
}

export interface TodosState {
	todos: Todo[];
}
