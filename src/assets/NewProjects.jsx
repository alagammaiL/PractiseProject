import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProjects({ onSave, newProjectClick }) {
  const titleRef = useRef();
  const desRef = useRef();
  const dueRef = useRef();
  const dialog = useRef();
  function saveButtonHandler() {
    let title = titleRef.current.value;
    let description = desRef.current.value;
    let dueDate = dueRef.current.value;
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      dueDate.trim().length === 0
    ) {
      dialog.current.openModal();
      return;
    }
    let projectData = {
      title,
      description,
      dueDate,
    };
    onSave(projectData);
    titleRef.current.value = "";
    desRef.current.value = "";
    dueRef.current.value = "";
  }
  return (
    <>
      <Modal ref={dialog} actionName={"Okay"}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops....looks like you forget to enter the value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <main className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={() => newProjectClick("cancel")}
          >
            Cancel
          </button>

          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={saveButtonHandler}
          >
            Save
          </button>
        </main>
        <div>
          <Input label="Title" ref={titleRef} type="text" />
          <Input
            label="Description"
            isTextArea={true}
            ref={desRef}
            type="textarea"
          />
          <Input label="Due Date" ref={dueRef} type="date" />
        </div>
      </div>
    </>
  );
}
