import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CirclePlus } from 'lucide-react';
import { Task } from '../Task/index';

import imgClipboard from '../../assets/images/clipboard.svg';
import styles from './Content.module.css';

interface TaskItem {
  id: string;
  description: string;
  completed: boolean;
}

interface Content {
  id: string;
  description: string;
  completed: boolean;
}

export function Content() {
  const [createdTasks, setCreatedTasks] = useState<TaskItem[]>([]);
  const [descriptionTask, setDescriptionTask] = useState<string>('');

  function handleNewTask() {
    if (descriptionTask === '') {
      return alert('Por favor, insira uma descrição para a tarefa!!');
    }

    const newTask: TaskItem = {
      id: uuidv4(),
      description: descriptionTask,
      completed: false,
    };

    setCreatedTasks((previousTask) => [...previousTask, newTask]);
    setDescriptionTask('');
  }

  function deleteTask(idToDelete: string) {
    setCreatedTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== idToDelete)
    );
  }

  function changeStatusTask(id: string) {
    setCreatedTasks((prevsTask) =>
      prevsTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className={styles.search}>
      <div className={styles.wrapperNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={descriptionTask}
          onChange={(e) => setDescriptionTask(e.target.value)}
        />

        <button className={styles.createTask} onClick={handleNewTask}>
          Criar <CirclePlus size={18} />
        </button>
      </div>

      <div className={styles.titles}>
        <span className={styles.createdTasks}>
          Tarefas criadas <span>{createdTasks.length}</span>
        </span>
        <span className={styles.completedTasks}>
          Concluídas{' '}
          <span>{createdTasks.filter((task) => task.completed).length}</span>
        </span>
      </div>

      {createdTasks.length > 0 ? (
        createdTasks.map((task) => (
          <Task
            key={task.id}
            content={task}
            deleteTask={deleteTask}
            finishedTask={changeStatusTask}
          />
        ))
      ) : (
        <div className={styles.empty}>
          <img src={imgClipboard} alt="clipboard" />
          <div className={styles.emptyPhrase}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      )}
    </div>
  );
}
