document.querySelector("#openModal").onclick = () => {
    document.querySelector(".modal").style.display = "flex"; // <-- flex only when opened
};

document.querySelector(".close-modal").onclick = () => {
    document.querySelector(".modal").style.display = "none";
};

document.querySelector(".modal").onclick = (e) => {
    if (e.target.classList.contains("modal")) {
        document.querySelector(".modal").style.display = "none";
    }
};
