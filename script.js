const titles = [
    "Porn",
    "Jerkmate",
    "Gay porn",
    "Adolf hitler",
    "Nigger"
];

function changeTitle() {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById("title").textContent = "porn";
}

setInterval(() => {
    changeTitle();
    location.reload();
}, 300);

changeTitle();
