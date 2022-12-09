import Input from "./components/Input";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import useTODO from "./hooks/useTODO";

function App() {
  const { tasks, createTask, deleteTask, markAsDone } = useTODO();

  return (
    <>
      <Title />
      <Input create={createTask} />
      <Tasks tasks={tasks} delete={deleteTask} mark={markAsDone} />
    </>
  );
}

export default App;
