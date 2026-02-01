document.addEventListener("DOMContentLoaded", () => {
    const contacts = document.querySelectorAll(".contact-item");

    contacts.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 300);
    });
});
