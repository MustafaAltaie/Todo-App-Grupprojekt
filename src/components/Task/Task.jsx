import styles from './Task.module.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// returns rendering of a task
export default function Task({ task, cssClassname }) {
    const { columns } = useSelector((state) => state.columns);

    const navigate = useNavigate();
    return (
        <div
            // Drag and Drop-function
            draggable
            onDragStart={(e) => { e.dataTransfer.setData('id', task.id) }} // transport key('id) with value (task.id)
            className={cssClassname ? `${styles.listview__tasks}` : `${styles.task__card}`}
            onClick={() => navigate(`/${task.id}`)}
            >
            <div className={styles.listview__container__left}>
                {task.title && <h4>{task.title}</h4>}
                {task.deadline && <p className={styles.listview__deadline}>Deadline: {task.deadline}</p>}
            </div>
            <div className={styles.listview__container__right}>
                {task.responsible.length > 0 &&
                    <div className={styles.listview__responsible__container}>
                        {task.responsible.map(user => <p className={styles.listview__responsible}>{user.name}</p>)}
                    </div>}
                {task.columnId &&
                    <div className={styles.listview__column__title__container}>
                        <p className={styles.listview__column__title}>
                            {columns.map(column => column.id === task.columnId ? column.title : null)}
                            {task.column}</p>
                    </div>
                }
            </div>
        </div>
    );
}