import { boxAlert } from "./reference";

function showSuccessAlert() {
  boxAlert.classList.add("alert-box--success");
  boxAlert.textContent = "Success - message was saved correctly";
  setTimeout(() => {
    boxAlert.classList.remove("alert-box--success");
    boxAlert.textContent = "";
  }, 3000);
}

function showErrorAlert() {
  boxAlert.classList.add("alert-box--error");
  boxAlert.textContent =
    "Error - the message wasn't saved. Fill up the input field and try again.";
  setTimeout(() => {
    boxAlert.classList.remove("alert-box--error");
    boxAlert.textContent = "";
  }, 3000);
}

export { showSuccessAlert, showErrorAlert };
