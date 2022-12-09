import React from "react";

type TTask = {
  title: string;
  delete: (title: string) => void;
  mark: (title: string) => void;
  done: boolean;
};

function Task(props: TTask) {
  let className = !props.done
    ? "flex mx-auto w-4/5 py-1 justify-between"
    : "flex mx-auto w-4/5 py-1 justify-between line-through";
  return (
    <li className={className}>
      <input
        checked={props.done}
        className="cursor-pointer"
        type="checkbox"
        onChange={() => props.mark(props.title)}
      />
      <p>{props.title}</p>
      <img
        className="border cursor-pointer"
        src="./delete.svg"
        width={"25px"}
        alt="Delete"
        onClick={() => props.delete(props.title)}
      />
    </li>
  );
}

export default Task;
