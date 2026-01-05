import { useState } from "react"
import "./App.css"
import Input from "./Input"
import TaskList from "./TaskList"

function App() {
	const [nextId, setNextId] = useState(4)
	const [editId, setEditId] = useState(1.1)
	const [title, setTitle] = useState("")
	const [taskList, setTaskList] = useState([
		{ id: 0, title: "Learn Typescript0" },
		{ id: 1, title: "Learn Javascript1" },
		{ id: 2, title: "Learn Javascript2" },
		{ id: 3, title: "Learn Javascript3" },
	])
	return (
		<>
			<div className="bg-[#f3f3f3] w-137.5 h-162.5 rounded-2xl px-10 py-10">
				<h1 className="text-2xl font-semibold text-[#091f4b] ">
					<i className="icon text-3xl fa-regular fa-calendar-days pr-2"></i>
					To-Do List
				</h1>
				<Input
					nextId={nextId}
					setNextId={setNextId}
					title={title}
					updateTitle={setTitle}
					taskList={taskList}
					updateTaskList={setTaskList}></Input>
				<TaskList
					taskList={taskList}
					updateTaskList={setTaskList}
					editId={editId}
					setEditId={setEditId}></TaskList>
			</div>
		</>
	)
}

export default App
