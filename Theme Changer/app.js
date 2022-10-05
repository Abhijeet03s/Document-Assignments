function toggleTheme() {
    const slider = document.getElementById("slider");
    const main = document.getElementById("main");
    if (slider.checked === true) {
        main.style.backgroundColor = "#242B2E";
        document.body.style.color = "#CAD5E2";
    } else {
        main.style.backgroundColor = "#CAD5E2";
        document.body.style.color = "#242B2E";
    }
}