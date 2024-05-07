import NewTask from "./NewTask";
export default function Task({ deleteTask, addTask, task }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">New Task</h2>
      <NewTask deleteTask={deleteTask} addTask={addTask} />
      {task.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any task yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100 ">
          {task.map((eachTask) => {
            return (
              <>
                <li key={eachTask.TaskId} className="flex justify-between my-4">
                  <span>{eachTask.tasks}</span>
                  <button
                    className="text-stone-700 hover:text-red-500"
                    onClick={() => {
                      deleteTask(eachTask.TaskId);
                    }}
                  >
                    Clear
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </section>
  );
}
