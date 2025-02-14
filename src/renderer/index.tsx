import React from "react";
import { createRoot } from "react-dom/client";
import TaskManager from "./components/TaskManager"; // Importando o componente
import "./styles/global.css"; // Importando o arquivo de estilos globais

const App = () => {
    return <TaskManager />; // Renderizando o TaskManager
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
