document.addEventListener("DOMContentLoaded", function () {
  window.bridge.updateMessage(updateMessage_test);
  window.PATH_TEST_WINDOW.updateMessage_test_path(pathTestFunction);
  setTimeout(() => {
    window.electron.ipcRenderer.send('send-data-to-main', 'from render to main');
  }, 5000);
});

function updateMessage_test(event, message) {
  console.log("message logged in view");
  let elemE = document.getElementById("message");
  elemE.innerHTML = message;
}
function pathTestFunction(event, message) {
  console.log("message logged in view" + message + ' mena test dddddddddddddddddddddddddd');
}