
// Au clic du bouton "Search"
document.querySelector('#search-btn').addEventListener('click',
    function () {
        let departureSearch = document.querySelector('#departure').value
        let arrivalSearch = document.querySelector('#arrival').value
        let dateSearch = document.querySelector('#calendar').value

        // Si les champs sont vides
        if (!departureSearch || !arrivalSearch || !dateSearch) {
            document.querySelector('#card-booking').innerHTML =
                `<img src="./images/notfound.png" id='notfound' alt="notfound-picture">
            <p class="phrase">Missing field</p>
            `
        } else {
            fetch('http://localhost:3000/trips/search')
                .then(response => response.json())
                .then(data => {
                    // Replace "results" by the good name of the data
                    if (data.results) {
                        for (let i = 0; i < data.results.length; i++) {
                            // A TERMINER LA BOUCLE

                            document.querySelector('#card-booking').innerHTML =
                                `<p class="phrase">${data.result}</p>
            `
                        }
                    }
                })

        }
    })

/* fetch('http://localhost:3000/weather')
    .then(response => response.json())
    .then(data => {
        if (data.weather) {
            for (let i = 0; i < data.weather.length; i++) {
                document.querySelector('#cityList').innerHTML += `
				<div class="cityContainer">
				<p class="name">${data.weather[i].cityName}</p>
				<p class="description">${data.weather[i].description}</p>
				<img class="weatherIcon" src="images/${data.weather[i].main}.png"/>
				<div class="temperature">
					<p class="tempMin">${data.weather[i].tempMin}°C</p>
					<span>-</span>
					<p class="tempMax">${data.weather[i].tempMax}°C</p>
				</div>
				<button class="deleteCity" id="${data.weather[i].cityName}">Delete</button>
			</div>
			`;
            }
            updateDeleteCityEventListener(); */
