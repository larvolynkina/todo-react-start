import { useState } from "react";

function useTODO() {
  let [id, setId] = useState(4);

  const [tasks, setTasks] = useState([
    { title: "To buy milk", id: 1, done: false },
    { title: "To cook dinner", id: 2, done: false },
    { title: "To check my TODO list", id: 3, done: false },
  ]);

  function createTask(text: string) {
    setTasks([...tasks, { title: text, id: id, done: false }]);
    setId((id += 1));
  }

  function deleteTask(title: string) {
    setTasks(tasks.filter((item) => item.title !== title));
  }

  function markAsDone(title: string) {
    const current = tasks.findIndex((item) => item.title === title);
    const id = tasks[current].id;
    const done = !tasks[current].done;
    const prev = tasks.filter((item, index) => index < current);
    const next = tasks.filter((item, index) => index > current);
    setTasks([...prev, { title: title, id: id, done: done }, ...next]);
  }

  return { tasks, createTask, deleteTask, markAsDone };
}

export default useTODO;
