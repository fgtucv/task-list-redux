export const TasksHeader = () => {
    return (
        <header className="flex items-start justify-between">
            <div className="text-base leading-5 text-[#222]">
                <h2 className="font-bold">Tasks</h2>
                <span className="block">Active: </span>
                <span className="block">Completed: </span>
            </div>

            <div className="text-base leading-5 text-[#222]">
                <h2 className="font-bold">Filter by status</h2>
                <div className="mt-1 flex gap-[3px]">
                    <button
                        type="button"
                        className="h-9 cursor-pointer rounded-[3px] bg-[#1a73d9] px-3 text-base text-white"
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className="h-9 cursor-pointer rounded-[3px] bg-[#e1e4e8] px-3 text-base text-[#333] hover:bg-[#d3d7dc]"
                    >
                        Active
                    </button>
                    <button
                        type="button"
                        className="h-9 cursor-pointer rounded-[3px] bg-[#e1e4e8] px-3 text-base text-[#333] hover:bg-[#d3d7dc]"
                    >
                        Completed
                    </button>
                </div>
            </div>
        </header>
    )
};