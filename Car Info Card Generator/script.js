const carInfo = document.getElementById("infoCard");
const carList = [
    {
        manufacturer: "Honda",
        model: "Accord",
        year: 2022,
        color: "Crystal Black Pearl",
        genre: "Mid-size sedan",
        name: "Accord EX",
        image: "hondaaccord.avif",
        hasAudioSystem: "Yes",
        hasVideoNavigationSystem: "No"
    },
    {
        manufacturer: "Ford",
        model: "Mustang",
        year: 2023,
        color: 'Velocity Blue',
        genre: 'Sports car',
        name: 'Mustang GT',
        image: "fordmustang.webp",
        hasAudioSystem: "Yes",
        hasVideoNavigationSystem: "Yes"
    },
    {
        manufacturer: 'Chevrolet',
        model: 'Silverado',
        year: 2024,
        color: 'Summit White',
        genre: 'Full-size pickup truck',
        name: 'Silverado LT',
        image: "chevroletsilverado.png",
        hasAudioSystem: "Yes",
        hasVideoNavigationSystem: "No"
    },
    {
        manufacturer: 'Nissan',
        model: 'Altima',
        year: 2022,
        color: 'Glacier White',
        genre: 'Mid-size sedan',
        name: 'Altima SV',
        image: "nissanaltima.webp",
        hasAudioSystem: "No",
        hasVideoNavigationSystem: "No"
    }
];

    function generateRandom() {
        const randomIndex = Math.floor(Math.random() * carList.length);
        const randomCar = carList[randomIndex];

        carInfo.innerHTML = `
            <div class="card">
                <h3>${randomCar.manufacturer} ${randomCar.model}</h3>
                <img src="${randomCar.image}" alt="${randomCar.manufacturer} ${randomCar.model}">
                <span>Release Year: ${randomCar.year}</span>
                <span>Current Selected Color: ${randomCar.color}</span>
                <span>Genre: ${randomCar.genre}</span>
                <span>Name: ${randomCar.name}</span>
                <span>Has Audio System: ${randomCar.hasAudioSystem}</span>
                <span>Has Video Navigation System: ${randomCar.hasVideoNavigationSystem}</span>
            </div>
        `;
    }