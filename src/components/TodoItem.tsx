import { useState } from "react"
interface task {
	task: {
		id: number
		title: string
		completed: boolean
	}
	deleteTodo: (id: number) => void
	updateTodo: (title: string, id: number) => void
}
export default function TodoItem({ task, deleteTodo, updateTodo }: task) {
	const [edit, setEdit] = useState(false)
	const [title, setTitle] = useState(task.title)
	return (
		<>
			<div className="flex gap-4 py-2">
				<input type="checkbox" id={`${task.id}`} className="mr-3 peer    hidden" />
				<label
					htmlFor={`${task.id}`}
					className="flex relative justify-center place-items-center w-6 h-6 rounded-full border-2 border-[#cac8c8] transition
							peer-checked:bg-[#FD5C5D]
							peer-checked:border-[#FD5C5D]  cursor-pointer "></label>
			</div>
			{edit ? (
				<input
					id="input"
					type="text"
					onBlur={() => setEdit(!edit)}
					onKeyDown={(e) => {
						if (e.key === "Enter") setEdit(!edit)
						updateTodo(title, task.id)
					}}
					autoFocus
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					className="bg-[#E9E9E9] rounded-3xl w-90 outline-none pl-5 pr-3"
				/>
			) : (
				<span className="peer-checked:line-through whitespace-nowrap w-90 overflow-hidden peer-checked:text-gray-700 pl-5 ">
					{task.title}
				</span>
			)}

			<div className="flex gap-2 ">
				<i
					className="bx bx-edit cursor-pointer text-2xl text-[#777272]"
					onClick={() => {
						setEdit(!edit)
						updateTodo(title, task.id)
					}}></i>
				<i
					className="bx bx-trash cursor-pointer text-2xl text-[#777272]"
					onClick={() => {
						deleteTodo(task.id)
					}}></i>
			</div>
		</>
	)
}
