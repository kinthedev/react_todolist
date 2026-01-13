import { useState } from "react"

export const useTodo = () => {
	const [taskList, setTaskList] = useState([
		{ id: 0, title: "Learn Typescript0", completed: false },
		{ id: 1, title: "Learn Javascript1", completed: false },
		{ id: 2, title: "Learn Javascript2", completed: false },
		{ id: 3, title: "Learn Javascript3", completed: false },
	])
	const nextId: number = taskList.length
	const addTodo = (title: string, setTitle: (value: string) => void) => {
		setTaskList([...taskList, { id: nextId, title: title, completed: false }])
		setTitle("")
	}
	const deleteTodo = (id: number) => {
		setTaskList(taskList.filter((task) => id !== task.id))
	}
	const updateTodo = (title: string, id: number) => {
		const newTaskList = taskList.map((task) =>
			id !== task.id ? task : { ...task, title: title }
		)
		setTaskList(newTaskList)
	}
	return { taskList, addTodo, deleteTodo, updateTodo }
}
