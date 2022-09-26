let text = document.querySelector("#textarea")
let word = document.querySelector("#words")
let character = document.querySelector("#characters")


text.addEventListener('keyup', () => {
   
    let words = text.value.match(/\b[-?(\w+)?]+\b/gi);
    // console.log(words);
    
    if (words) {
        word.innerHTML = words.length;
    } else {
        word.innerHTML = 0;
    }

    character.innerHTML = text.value.length;
});
