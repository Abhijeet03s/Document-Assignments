let urlLink = document.querySelector("#url")
let websiteName = document.querySelector("#name")
let submitBtn = document.querySelector(".btn")
let list = document.querySelector(".bookmark-list")


submitBtn.addEventListener("click", () => {
    let list = {
        "urlLink": urlLink.value
    }
    localStorage.setItem(websiteName.value, JSON.stringify(list))
})

for (let i = 0; i < localStorage.length; i++) {
    let webName = localStorage.key(i);
    let webData = JSON.parse(localStorage.getItem(webName));
    let bookmark = document.createElement("a");
    bookmark.setAttribute("href", webData["urlLink"])
    bookmark.innerText = webName;
    list.appendChild(bookmark);
}

