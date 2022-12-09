import React from "react";
import Task from "./Task";

type TTask = {
  title: string;
  id: number;
  done: boolean;
};

interface ITasksProps {
  tasks: TTask[];
  delete: (title: string) => void;
  mark: (title: string) => void;
}

function Tasks(props: ITasksProps) {
  return (
    <ul className="flex flex-col w-1/2 py-5 mx-auto">
      {props.tasks.map((item) => (
        <Task
          title={item.title}
          key={item.id}
          delete={props.delete}
          done={item.done}
          mark={props.mark}
        />
      ))}
    </ul>
  );
}

export default Tasks;
