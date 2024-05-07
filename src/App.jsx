import ProjectSideBar from "./assets/ProjectSideBar";
import NewProjects from "./assets/NewProjects";
import NoProjectSelected from "./assets/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./assets/SelectedProject";
function App() {
  const [newproj, setNewProj] = useState({
    createNewProject: false,
    projects: [],
    task: [],
  });
  function settingData(data) {
    if (data === "add") return true;
    else if (data === "cancel") return false;
  }
  function addTaskHandler(taskValue) {
    setNewProj((prevState) => {
      let taskDetails = {
        TaskId: Math.random(),
        tasks: taskValue,
        proId: prevState.createNewProject,
      };

      return {
        ...prevState,
        task: [...prevState.task, taskDetails],
      };
    });
  }

  function deleteTaskHandler(delId) {
    setNewProj((prevState) => {
      return {
        ...prevState,
        task: prevState.task.filter((eachTask) => delId !== eachTask.TaskId),
      };
    });
  }

  function newProjectHandler(data) {
    let createOrNot = settingData(data);

    setNewProj((prevState) => {
      return {
        ...prevState,
        createNewProject: createOrNot,
      };
    });
  }
  function handleSelectedProject(id) {
    setNewProj((prevState) => {
      return {
        ...prevState,
        createNewProject: id,
      };
    });
  }
  function deleteSelectedProject() {
    setNewProj((prevState) => {
      return {
        ...prevState,
        createNewProject: false,
        projects: prevState.projects.filter(
          (pro) => prevState.createNewProject !== pro.id
        ),
      };
    });
  }
  function addSaveProjectHandler(projectData) {
    let projectInput = {
      ...projectData,
      id: Math.random(),
    };
    setNewProj((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, projectInput],
        createNewProject: false,
      };
    });
  }
  let content;
  let selctedPro = newproj.projects.find(
    (pro) => newproj.createNewProject === pro.id
  );

  if (newproj.createNewProject === true) {
    content = (
      <NewProjects
        onSave={addSaveProjectHandler}
        newProjectClick={newProjectHandler}
      />
    );
  } else if (newproj.createNewProject === false) {
    content = <NoProjectSelected newProjectClick={newProjectHandler} />;
  } else {
    content = (
      <SelectedProject
        project={selctedPro}
        deleteProject={deleteSelectedProject}
        addTask={addTaskHandler}
        deleteTask={deleteTaskHandler}
        task={newproj.task}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        newProjectClick={newProjectHandler}
        projects={newproj.projects}
        pickProject={handleSelectedProject}
        selectedProjectId={newproj.createNewProject}
      />
      {content}
    </main>
  );
}

export default App;
