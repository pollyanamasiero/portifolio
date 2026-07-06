document.querySelectorAll("[data-event").forEach((button) => {
    button.addEventListener("click", () => {
        gtag("event", button.dataset.event, {
            event_category: "portifolio",
            event_label: button.textContent.trim()
        });
    });
});