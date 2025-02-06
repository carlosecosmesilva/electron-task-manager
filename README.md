# Electron Task Manager

## Overview
This is a simple task manager application built using Electron. The project demonstrates how to create a basic desktop app with Electron, featuring task creation and deletion functionality.

---

## Features
- **Add Tasks:** Quickly add tasks to the list.
- **Remove Tasks:** Delete tasks easily with a remove button.
- **Clean UI:** Simple and intuitive interface.

---

## Project Structure
```
electron-task-manager/
├── src/
│   ├── css/
│   │   └── style.css   # Application styling
│   └── js/
│       └── renderer.js # Renderer process for UI logic
├── index.js         # Main process code
├── index.html      # Frontend UI
└── package.json    # Project metadata
```

---

## Prerequisites
Ensure that you have the following installed:
- [Node.js](https://nodejs.org/)

---

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd electron-task-manager
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```

---

## Usage
1. Enter a task in the input field.
2. Click the **Add Task** button to add the task.
3. Click the **Remove** button next to a task to delete it.

---

## File Breakdown
- **`index.js`**: Manages the Electron app lifecycle and window creation.
- **`index.html`**: Basic layout of the application.
- **`src/js/renderer.js`**: Handles task addition and removal logic.
- **`src/css/style.css`**: Styles the user interface.

---

## Future Enhancements
- Task persistence using local storage or a database.
- Add task due dates and priority levels.
- Improved UI with animations.

---

## License
This project is licensed under the MIT License.

