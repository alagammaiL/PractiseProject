import Button from "./Button";
export default function ProjectSideBar({
  newProjectClick,
  projects,
  pickProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={() => newProjectClick("add")}>+ Add Projects</Button>
      <ul className="mt-8">
        {projects.map((eachPro) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (eachPro.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += "  text-stone-400";
          }
          return (
            <li key={eachPro.id}>
              <button
                onClick={() => pickProject(eachPro.id)}
                className={cssClasses}
              >
                {eachPro.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
