const form = document.querySelector("#searchForm");
const query = document.querySelector("input")

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log("SUBMITTED!")
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    makeImages(res.data)
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}

const deleteImgs = function () {
    const imgs = document.querySelectorAll("img");
    for (let img of imgs) {
        img.remove();
    }
}

query.addEventListener('keydown', deleteImgs)