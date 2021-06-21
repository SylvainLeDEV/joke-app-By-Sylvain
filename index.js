// https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header")
const content = document.getElementById("content")

function getJoke() {
fetch('https://api.blablagues.net/?rub=blagues')
    .then((res) => res.json())
    .then((data) => {
        const joke = data.data.content;
        console.log(joke);
        header.textContent = joke.text_head
            if (joke.text !== "") {
                content.textContent = joke.text
            } else {
                content.textContent = joke.text_hidden
            }
    });
}

document.body.addEventListener('click', () => {
    getJoke()
});
