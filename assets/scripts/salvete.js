// mostly from https://en.wikiversity.org/wiki/Multilingual_ways_to_say_%27Hello%27
const verbi = ["Salve", "Χαίρε", "Olá", "你好", "سَلَام", "Zdravo", "Hallå",
    "こんにちは", "Buongiorno", "Salut", "Hello", "Ahoj"];
let index = 0;
const vas = document.querySelector(".salvete");

vas.textContent = verbi[index] + ","; // change the title text to [index] position of the array

setInterval(() => {
    vas.style.opacity = 0;

    setTimeout(() => {

    index = (index + 1) % verbi.length; // mod arithmetic BULLSHIT
    vas.textContent = verbi[index] + ",";
    vas.style.opacity = 1;

}, 500);
}, 2800);

