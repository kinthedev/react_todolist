import { useState } from "react"

interface todoType {
	addTodo(value: string, setTitle: (value: string) => void): void
}
function TodoForm({ addTodo }: todoType) {
	const [title, setTitle] = useState("")

	return (
		<>
			<div className="relative flex h-12 my-10">
				<input
					className="bg-[#E9E9E9] rounded-3xl w-full outline-none pl-5 pr-30"
					type="text"
					placeholder="Add your task"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value)
					}}
				/>
				<button
					className="absolute  right-0 rounded-3xl bg-[#FD5C5D] text-white px-8 h-full cursor-pointer hover:bg-[#fc3f3f] hover:scale-110 transition duration-300 "
					onClick={() => {
						addTodo(title, setTitle)
					}}>
					ADD
				</button>
			</div>
		</>
	)
}

export default TodoForm
