const { contextBridge, ipcRenderer } = require("electron");

let bridge = {
    updateMessage: (callback) => ipcRenderer.on("updateMessage", callback),
  };

let PATH_TEST = {
  updateMessage_test_path: (callback) => ipcRenderer.on("path_test", callback),
};

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer
});
  contextBridge.exposeInMainWorld("bridge", bridge);
  contextBridge.exposeInMainWorld("PATH_TEST_WINDOW", PATH_TEST);