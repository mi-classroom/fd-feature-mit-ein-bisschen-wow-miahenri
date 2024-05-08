/* Horizontal Scrolling
---------------------------------------------------------------------------- */

const addHorizontalScroll = () => {

  const scrollContainer = document.querySelector("[data-js-horizontal-scroll-container]");
  if (!scrollContainer) return;

  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
  });
};


/* Exports
############################################################################ */

export { addHorizontalScroll };