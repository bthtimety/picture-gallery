const buttonLoad = document.querySelector(".content__button-load");
const buttonDelete = document.querySelector(".content__button-delete");
const contentImageContainer = document.querySelector(".content__image-container");

const loader = document.getElementById("loader");

const URL = "https://dog.ceo/api/breeds/image/random/20";

const fetchData = () => {
    loader.style.display = "block";
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(image => {
                const contentImage = document.createElement("div");
                contentImage.classList.add("content__image");
                contentImage.innerHTML =
                    `<img src="${image}" alt="image">`;
                contentImageContainer.appendChild(contentImage);
            });
        })
        .catch(error => {
            console.error(`Error ${error}`);
            alert("Error fetching data");
        })
        .finally(() => {
            loader.style.display = "none";
        });
};

const cleanData = () => {
    contentImageContainer.innerHTML = "";
};

buttonLoad.addEventListener("click", fetchData);
buttonDelete.addEventListener("click", cleanData);