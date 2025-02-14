import { app, BrowserWindow } from "electron";
import path from "path";
import net from "net";

const REACT_DEV_URL = "http://localhost:3000";
const CHECK_INTERVAL = 500;

let mainWindow: BrowserWindow | null = null;

const waitForReact = (callback: () => void) => {
    const client = new net.Socket();
    client.connect(3000, "localhost", () => {
        client.destroy();
        callback();
    });
    client.on("error", () => {
        setTimeout(() => waitForReact(callback), CHECK_INTERVAL);
    });
};

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    waitForReact(() => {
        mainWindow!.loadURL(REACT_DEV_URL);
    });
});
