import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import { useTodo } from "../hooks/useTodo"
function TodoPage() {
	const { taskList, addTodo, deleteTodo, updateTodo } = useTodo()
	return (
		<>
			<div className="bg-[#f3f3f3] w-137.5 h-162.5 rounded-2xl px-10 py-10">
				<h1 className="text-2xl font-semibold text-[#091f4b] ">
					<i className="icon text-3xl fa-regular fa-calendar-days pr-2"></i>
					To-Do List
				</h1>
				<TodoForm addTodo={addTodo}></TodoForm>
				<TodoList
					taskList={taskList}
					deleteTodo={deleteTodo}
					updateTodo={updateTodo}></TodoList>
			</div>
		</>
	)
}

export default TodoPage
