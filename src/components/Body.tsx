import styles from "./Body.module.css";
import { useState, FormEvent } from "react";
import add from "../assets/add.svg";

interface BodyProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  handleDeleteTask: (index: number) => void;
}

export function Body({ setTasks }: BodyProps) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask}>
        <div className={styles.addTasks}>
          <input
            className={styles.textInput}
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Digite uma nova tarefa"
          />
          <button type="submit">
            Criar <img src={add} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}
