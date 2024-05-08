import { renderData } from "./modules/renderer.js";
import { addKeyboardEvents } from "./modules/keyboard-navigation.js";
import { addHorizontalScroll } from "./modules/horizontal-scrolling.js";
import { addObserver } from "./modules/observer.js";


/* Config
############################################################################ */
const config = {
  "content": {
    "base": "./assets/data/mi-base.json"
  }
};


/* Functions
############################################################################ */

/* Get Content
---------------------------------------------------------------------------- */

const getContent = (section) => {

  const contentUrl = config.content[section];

  fetch(contentUrl)
    .then(response => response.json())
    .then(responseData => {
      renderData(responseData.data);
      addObserver();
      addHorizontalScroll();
      addKeyboardEvents();
    });
};


/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function () {
  getContent("base");
});