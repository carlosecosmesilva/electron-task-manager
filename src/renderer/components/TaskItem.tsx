import React from "react";
import "../styles/TaskItem.css";

interface Task {
    id: number;
    title: string;
    description: string;
    removeTask: (id: number) => void;
}

const TaskItem: React.FC<Task> = ({ id, title, description, removeTask }) => {
    return (
        <li className="task-item">
            <div className="task-content">
                <strong>{title}</strong>
                <p>{description}</p>
            </div>
            <button className="delete-button" onClick={() => removeTask(id)}>🗑️</button>
        </li>
    );
};

export default TaskItem;
