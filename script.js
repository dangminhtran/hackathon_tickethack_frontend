
// MAIN PAGE

// Au clic du bouton "Search"
document.querySelector('.search-btn').addEventListener('click',
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
            fetch(/* 'http://localhost:3000/trips/search' */
            `http://localhost:3000/trips?departure=${departureSearch}&arrival=${arrivalSearch}&date=${dateSearch}`/* , {
                
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ departure, arrival}),

            } */).then(response => response.json())
            .then((data) => {
                console.log(data);
                if (data.trip) {
                    for (let i = 0; i < data.trip.length; i++) {
                        document.querySelector('#card-booking').innerHTML =
                            `<div class="travelsList" id=${data.trip[i]._id}>
                                <div class="travel">${data.trip[i].departure} > ${data.trip[i].arrival}</div>
                                <div class="travel-time">${data.trip[i].time}</div>
                                <div class="travel-price">${data.trip[i].price}</div>
                                <button id="book-btn" type='button'>Book</button>
                            </div>
                            `
                         bookTravel()
                        }
                        window.location.assign('cart.html')
                    }
                })
        }
    })



function bookTravel() {
    for (let i = 0; i < document.querySelectorAll('.travelsList').length; i++) {
        document.querySelectorAll('.book-btn')[i].addEventListener('click',
            function () {
                window.location.assign('cart.html')
                /* document.querySelector('.text').innerHTML =
                    `<div class="travelsList" id=${data.trips[i]._id}>
                        <div class="travel">${data.trips[i].departure} > ${data.trips[i].arrival}</div>
                        <div class="travel-time">${data.trips[i].time}</div>
                        <div class="travel-price">${data.trips[i].price}</div>
                        <button class="delete-btn" type='button'>X</button>
                    </div>`
                    deleteTravel() */

            })
    }
}
bookTravel()




