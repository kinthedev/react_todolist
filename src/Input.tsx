interface Task {
	id: number
	title: string
}

interface TaskListProps {
	nextId: number
	setNextId(value: number): void
	title: string
	updateTitle(value: string): void
	taskList: Task[]
	updateTaskList(value: Task[]): void
}
function Input({
	nextId,
	setNextId,
	title,
	updateTitle,
	taskList,
	updateTaskList,
}: TaskListProps) {
	return (
		<>
			<div className="relative flex h-12 my-10">
				<input
					className="bg-[#E9E9E9] rounded-3xl w-full outline-none pl-5 pr-30"
					type="text"
					placeholder="Add your task"
					value={title}
					onChange={(e) => {
						updateTitle(e.target.value)
					}}
				/>
				<button
					className="absolute  right-0 rounded-3xl bg-[#FD5C5D] text-white px-8 h-full cursor-pointer hover:bg-[#fc3f3f] hover:scale-110 transition duration-300 "
					onClick={() => {
						updateTaskList([...taskList, { id: nextId++, title: title }])
						setNextId(nextId++)
						updateTitle("")
					}}>
					ADD
				</button>
			</div>
		</>
	)
}

export default Input
