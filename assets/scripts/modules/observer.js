/* Observer
---------------------------------------------------------------------------- */

const addObserver = () => {
    const observedElements = document.querySelectorAll('[data-js-observe]');
    const options = { margin: '0px', threshold: 0.6 };

    const observer = new IntersectionObserver (function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-in-view");
            } else {
                entry.target.classList.remove("is-in-view");
            }
        });
    });

    observedElements.forEach(observedElements => {
        observer.observe(observedElements);
    });

};

/* Exports
############################################################################ */

export { addObserver };