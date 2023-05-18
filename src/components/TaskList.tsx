import { useState } from "react";
import { Body } from "./Body";
import styles from "./TaskList.module.css";
import clip from "../assets/Clipboard.svg";
import { Trash } from "phosphor-react";

export function TaskList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  function handleDeleteTask(index: number) {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  }

  function handleCompleteTask(index: number) {
    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = [...prevCompletedTasks, tasks[index]];
      return updatedCompletedTasks;
    });

    handleDeleteTask(index);
  }

  return (
    <div className={styles.body}>
      <Body
        tasks={tasks}
        setTasks={setTasks}
        handleDeleteTask={handleDeleteTask}
      />

      <div className={styles.accountants}>
        <h3 className={styles.firstH3}>
          Tarefas Criadas{" "}
          <span className={styles.taskCount}>{tasks.length}</span>
        </h3>
        <h3 className={styles.secondH3}>
          Tarefas Concluídas{" "}
          {tasks.length > 0 ? `${completedTasks.length} de ${tasks.length}` : 0}
        </h3>
      </div>

      {tasks.length > 0 ? (
        <div>
          <ul>
            {tasks.map((task: string, index: number) => (
              <li key={index} className={styles.taskItem}>
                <input
                  className={styles.list}
                  id="checkboxId"
                  type="checkbox"
                  checked={completedTasks.includes(task)}
                  onChange={() => handleCompleteTask(index)}
                />
                <label htmlFor="checkboxId" />
                <span className={styles.taskText}>{task}</span>
                <button onClick={() => handleDeleteTask(index)}>
                  <Trash className={styles.trash} size={24} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.dowElements}>
          <hr />
          <div className={styles.notTasks}>
            <img className={styles.clipImage} src={clip} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </div>
  );
}
