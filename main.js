const path = require("path");
const url = require("url");
const { app, BrowserWindow } = require("electron");

let mainWindow;

process.env.NODE_ENV = "production";

app.on("ready", function () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "main.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  mainWindow.on("closed", () => app.quit());
  if (process.env.NODE_ENV == "production") {
    mainWindow.setMenu(null);
  }
});
