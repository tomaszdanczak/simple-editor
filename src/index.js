import "./sass/index.scss";
import * as ref from "./tools/reference";
import * as hand from "./tools/handlers";

// handle font style buttons
ref.btnSizeDown.addEventListener("click", hand.fontSizeDown);
ref.btnSizeUp.addEventListener("click", hand.fontSizeUp);
ref.btnBold.addEventListener("click", hand.fontStyleBold);
ref.btnUnderline.addEventListener("click", hand.fontStyleUnderline);
ref.btnItalic.addEventListener("click", hand.fontStyleItalic);
ref.selectFontButton.addEventListener("click", hand.selectFont);

// handle storage buttons
ref.btnLoad.addEventListener("click", hand.loadData);
ref.btnSave.addEventListener("click", hand.saveData);
ref.btnClear.addEventListener("click", hand.clearMemory);
ref.btnReload.addEventListener("click", hand.reloadServer);

// handle switchers
ref.switchThemeBlue.addEventListener("click", hand.themeSwitcherBlue);
ref.switchThemeOlive.addEventListener("click", hand.themeSwitcherOlive);
ref.switchThemeYellow.addEventListener("click", hand.themeSwitcherYellow);
