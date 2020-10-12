// DOM manipulated elements
const textEditor = document.querySelector(".editor__textarea--js");
const boxAlert = document.querySelector(".alert-box--js");

//  references to font style buttons
const btnSizeDown = document.querySelector(".js-btn-font-style--size-down");
const btnSizeUp = document.querySelector(".js-btn-font-style--size-up");
const selectFontButton = document.querySelector(".js-btn-select");
const btnBold = document.querySelector(".js-btn-font-style--bold");
const btnUnderline = document.querySelector(".js-btn-font-style--underline");
const btnItalic = document.querySelector(".js-btn-font-style--italic");

// references to storage buttons
const btnLoad = document.querySelector(".js-btn-editor--load");
const btnSave = document.querySelector(".js-btn-editor--save");
const btnClear = document.querySelector(".js-btn-cleaning--remove");
const btnReload = document.querySelector(".js-btn-cleaning--reload");

// references to switchers
const switchThemeBlue = document.querySelector(".switchers__input--blue-js");
const switchThemeOlive = document.querySelector(".switchers__input--olive-js");
const switchThemeYellow = document.querySelector(
  ".switchers__input--yellow-js"
);
// body
const bodyElement = document.querySelector("body");

export {
  btnSizeDown,
  btnSizeUp,
  selectFontButton,
  btnBold,
  btnUnderline,
  btnItalic,
  btnLoad,
  btnSave,
  btnClear,
  btnReload,
  switchThemeBlue,
  switchThemeOlive,
  switchThemeYellow,
  textEditor,
  boxAlert,
  bodyElement,
};
