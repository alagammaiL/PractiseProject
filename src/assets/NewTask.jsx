import React from "react";
import { useState } from "react";
export default function NewTask({ deleteTask, addTask }) {
  const [enteredInput, setEnteredInput] = useState("");
  function handleChange(event) {
    setEnteredInput(event.target.value);
  }
  function handleClick() {
    if (enteredInput.length > 0) {
      addTask(enteredInput);
      setEnteredInput("");
    }
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredInput}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
        disabled={enteredInput.trim().length === 0}
      >
        Add Task
      </button>
    </div>
  );
}
