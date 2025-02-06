import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Load development or production build
    if (process.env.NODE_ENV === "development") {
        mainWindow.loadURL("http://localhost:3001");
    } else {
        mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
    }

    mainWindow.webContents.openDevTools(); // Optional for debugging
});
