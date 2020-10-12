import { textEditor, bodyElement } from "./reference";
import size from "./data";
import * as alert from "./alert-box";

function fontSizeDown() {
  textEditor.style.fontSize = `${size - 1}px`;
  size--;
}

function fontSizeUp() {
  textEditor.style.fontSize = `${size + 1}px`;
  size++;
}

function fontStyleBold() {
  textEditor.classList.toggle("bold");
}

function fontStyleUnderline() {
  textEditor.classList.toggle("underline");
}

function fontStyleItalic() {
  textEditor.classList.toggle("italic");
}

function selectFont() {
  const selector = document.getElementById("select");
  const value = selector[selector.selectedIndex].value;
  textEditor.style.fontFamily = value;
}

function loadData(e) {
  e.preventDefault();
  if (localStorage.getItem("message")) {
    textEditor.value = localStorage.getItem("message");
  }
}

function saveData(e) {
  e.preventDefault();
  if (textEditor.value.trim() !== "") {
    alert.showSuccessAlert();

    localStorage.setItem("message", textEditor.value);
    textEditor.value = "";
  } else {
    alert.showErrorAlert();
  }
}

function clearMemory() {
  localStorage.removeItem("message");
}

function reloadServer() {
  location.reload(true);
}

function themeSwitcherBlue() {
  if (!bodyElement.classList.contains("theme-blue")) {
    document.body.classList.toggle("theme-blue");
    document.body.classList.remove("theme-yellow");
    document.body.classList.remove("theme-olive");
  }
}

function themeSwitcherOlive() {
  if (!bodyElement.classList.contains("theme-olive")) {
    document.body.classList.toggle("theme-olive");
    document.body.classList.remove("theme-yellow");
    document.body.classList.remove("theme-blue");
  }
}

function themeSwitcherYellow() {
  if (!bodyElement.classList.contains("theme-yellow")) {
    document.body.classList.toggle("theme-yellow");
    document.body.classList.remove("theme-olive");
    document.body.classList.remove("theme-blue");
  }
}

export {
  fontSizeDown,
  fontSizeUp,
  fontStyleBold,
  fontStyleUnderline,
  fontStyleItalic,
  selectFont,
  loadData,
  saveData,
  clearMemory,
  reloadServer,
  themeSwitcherBlue,
  themeSwitcherOlive,
  themeSwitcherYellow,
};
