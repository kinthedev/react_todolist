import TodoItem from "./TodoItem"

interface Task {
	id: number
	title: string
	completed: boolean
}

interface TaskListProps {
	taskList: Task[]
	deleteTodo: (id: number) => void
	updateTodo: (title: string, id: number) => void
	// setTaskList(value: Task[]): void
}

function TodoList({ taskList, deleteTodo, updateTodo }: TaskListProps) {
	return (
		<>
			<div>
				<ul>
					{taskList.map((task) => (
						<li key={task.id} className="flex justify-between place-items-center">
							<TodoItem task={task} deleteTodo={deleteTodo} updateTodo={updateTodo} />
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default TodoList
