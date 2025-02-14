import React from "react";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

interface Task {
    id: number;
    title: string;
    description: string;
}

interface TaskListProps {
    tasks: Task[];
    removeTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, removeTask }) => {
    if (tasks.length === 0) {
        return <p className="no-tasks">No tasks available.</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} {...task} removeTask={removeTask} />
            ))}
        </ul>
    );
};

export default TaskList;
