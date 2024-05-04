import { Trash } from 'lucide-react';

import styles from './Task.module.css';

interface Content {
  id: string;
  description: string;
  completed: boolean;
}

interface TaskProps {
  content: Content;
  deleteTask: (id: string) => void; // Função para deletar uma task com base no ID
  finishedTask: (id: string) => void; // Função para marcar uma task como finalizada com base no ID
}

export function Task({ content, deleteTask, finishedTask }: TaskProps) {
  function handleDeleteTask() {
    deleteTask(content.id);
  }

  function handleCompleteTask() {
    finishedTask(content.id);
  }

  return (
    <>
      <div className={styles.wrapperTask}>
        <div className={styles.contentTask}>
          <input
            type="checkbox"
            checked={content.completed}
            onChange={handleCompleteTask}
          />
          <p
            style={{
              textDecoration: content.completed ? 'line-through' : 'none',
            }}
          >
            {content.description}
          </p>
        </div>

        <Trash size={22} onClick={handleDeleteTask} />
      </div>
    </>
  );
}
