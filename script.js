document.querySelector("#openModal").onclick = () => {
    document.querySelector(".modal").style.display = "block";  // MUST be block
};

document.querySelector(".close-modal").onclick = () => {
    document.querySelector(".modal").style.display = "none";
};

document.querySelector(".modal").onclick = (e) => {
    if (e.target.classList.contains("modal")) {
        document.querySelector(".modal").style.display = "none";
    }
};
