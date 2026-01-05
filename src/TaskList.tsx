interface Task {
	id: number
	title: string
}

interface TaskListProps {
	taskList: Task[]
	updateTaskList(value: Task[]): void

	editId: number
	setEditId(value: number): void
}

function TaskList({
	taskList,
	updateTaskList,
	editId,
	setEditId,
}: TaskListProps) {
	return (
		<>
			<div>
				<ul>
					{taskList.map((task) => (
						<li key={task.id} className="flex justify-between place-items-center">
							<div className="flex gap-4 py-2">
								<input type="checkbox" id={`${task.id}`} className="mr-3 peer hidden" />
								<label
									htmlFor={`${task.id}`}
									className="flex relative justify-center place-items-center w-6 h-6 rounded-full border-2 border-[#cac8c8] transition
							peer-checked:bg-[#FD5C5D]
							peer-checked:border-[#FD5C5D]  cursor-pointer "></label>
								{editId === task.id ? (
									<input
										type="text"
										onBlur={() => setEditId(-1)}
										onKeyDown={(e) => {
											if (e.key === "Enter") setEditId(-1)
										}}
										onChange={(e) =>
											updateTaskList(
												taskList.map((value) =>
													value.id === task.id ? { ...value, title: e.target.value } : value
												)
											)
										}
										value={task.title}
										className="bg-[#E9E9E9] rounded-3xl w-90 outline-none pl-5 pr-3"
									/>
								) : (
									<span className="peer-checked:line-through whitespace-nowrap w-90 overflow-hidden peer-checked:text-gray-700 pl-5 ">
										{task.title}
									</span>
								)}
							</div>
							<div className="flex gap-2 ">
								<i
									className="bx bx-edit cursor-pointer text-2xl text-[#777272]"
									onClick={() => {
										setEditId(task.id)
									}}></i>
								<i
									className="bx bx-trash cursor-pointer text-2xl text-[#777272]"
									onClick={() => {
										updateTaskList(taskList.filter((id) => task.id !== id.id))
									}}></i>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default TaskList
