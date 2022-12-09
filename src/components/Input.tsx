import React, { useState } from "react";

function Input(props: any) {
  let [input, setInput] = useState("");

  function createTask(e: React.KeyboardEvent<HTMLInputElement>) {
    props.create(input);
    setInput("");
    if (e.target instanceof HTMLInputElement) {
      e.target.value = "";
    }
  }

  return (
    <input
      type="text"
      placeholder="Enter task"
      className="border w-2/5 flex mx-auto px-3 py-3 rounded-lg border-gray-500"
      onChange={(event) => setInput(event.target.value)}
      onKeyDown={(e) => e.keyCode === 13 && createTask(e)}
    />
  );
}

export default Input;
