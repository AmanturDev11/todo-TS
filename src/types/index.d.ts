export interface Todo {
	id: number;
	title: string;
	// date: Date;
	isCompleted: boolean;
}

export interface TodosState {
	todos: Todo[];
}
