import React, { useState } from "react";
import TaskList from "./TaskList";
import "../styles/TaskManager.css";

interface Task {
    id: number;
    title: string;
    description: string;
}

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTask = () => {
        if (!title.trim()) return;

        const newTask: Task = {
            id: Date.now(),
            title,
            description,
        };

        setTasks([...tasks, newTask]);
        setTitle("");
        setDescription("");
    };

    const removeTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <h1 className="title">Task Manager</h1>

            {/* Seção de adicionar tarefa */}
            <div className="task-input">
                <input
                    type="text"
                    placeholder="New Task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Details"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={addTask}>Create</button>
            </div>

            {/* Seção de exibição de tarefas */}
            <TaskList tasks={tasks} removeTask={removeTask} />
        </div>
    );
};

export default TaskManager;
