    const editIcon = document.getElementById("edit_birth_icon");
    const birthInput = document.getElementById("birth_input");

    editIcon.addEventListener("click", () => {
        editIcon.style.display = "none";    // скрыть текст
        birthInput.style.display = "block";     // показать input
    });
