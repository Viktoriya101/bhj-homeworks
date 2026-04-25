let tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach((tab) => {
            tab.classList.remove("tab_active");
        });
        let number = Array.from(tabs).indexOf(tab);
        if (number !== -1) {
            // document.querySelectorAll(".tab").
        }
        tab.classList.add("tab_active");
        number = Array.from(tabs).indexOf(tab);
        if (number !== -1) {
            let content = document.querySelectorAll(".tab__content");
            content.forEach((content) => {
                content.classList.remove("tab__content_active");
            });
            content[number].classList.add("tab__content_active");
        }
    });
});