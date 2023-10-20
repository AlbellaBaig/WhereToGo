const postImages = document.querySelectorAll(".post-image");
const closeButtons = document.querySelectorAll(".close");

postImages.forEach((postImage) => {
    postImage.addEventListener("click", (event) => {
        const postId = event.target.getAttribute("data-post-id");
        const modalId = `post-modal-${postId}`;
        const modal = document.getElementById(modalId);

        modal.classList.add("show");
    });
});

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", (event) => {
        const postId = event.target.getAttribute("data-post-id");
        const modalId = `post-modal-${postId}`;
        const modal = document.getElementById(modalId);

        modal.classList.remove("show");
    });
});

// Добавьте обработчики закрытия по клику вне модального окна, если нужно

const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});
