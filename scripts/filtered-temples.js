const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },

  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },

  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },

  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },

  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },

  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },

  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

{
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
},

{
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 22200,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-774302-wallpaper.jpg"
},
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-759298-wallpaper.jpg"
  },

  


];

const container = document.querySelector(".temple-container");
const title = document.querySelector("#page-title");

function displayTemples(filteredTemples) {

    container.innerHTML = "";

    filteredTemples.forEach(temple => {

        const card = document.createElement("section");

        card.classList.add("temple-card");

        card.innerHTML = `
            <img src="${temple.imageUrl}"
                 alt="${temple.templeName}"
                 loading="lazy">

            <h3>${temple.templeName}</h3>

            <p><strong>Location:</strong> ${temple.location}</p>

            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        container.appendChild(card);
    });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {

    title.textContent = "Home";

    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {

    title.textContent = "Old Temples";

    const oldTemples = temples.filter(temple =>
        parseInt(temple.dedicated) < 1900
    );

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {

    title.textContent = "New Temples";

    const newTemples = temples.filter(temple =>
        parseInt(temple.dedicated) > 2000
    );

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {

    title.textContent = "Large Temples";

    const largeTemples = temples.filter(temple =>
        temple.area > 90000
    );

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {

    title.textContent = "Small Temples";

    const smallTemples = temples.filter(temple =>
        temple.area < 10000
    );

    displayTemples(smallTemples);
});

document.querySelector("#year").textContent =
`© ${new Date().getFullYear()}`;

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;