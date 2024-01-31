
// MAIN PAGE

// SEARCH BUTTON ACTION
document.querySelector('.search-btn').addEventListener('click',
    function () {
        let departureSearch = document.querySelector('#departure').value
        let arrivalSearch = document.querySelector('#arrival').value
        let dateSearch = document.querySelector('#calendar').value

        if (!departureSearch || !arrivalSearch || !dateSearch) {
            document.querySelector('#card-booking').innerHTML =
                `<img src="./images/notfound.png" id='notfound' alt="notfound-picture">
                <p class="phrase">Missing field</p>
            `
        } else {
            fetch(`http://localhost:3000/trips?departure=${departureSearch}&arrival=${arrivalSearch}&date=${dateSearch}`,/* {
                
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ departure : departureSearch, arrival : arrivalSearch, date : dateSearch}),

            } */).then(response => response.json())
                .then((data) => {
                    if (data) {
                        console.log(data)
                        for (let i = 0; i < data.trips.length; i++) {
                            const hour = String(
                                new Date(data.trips[i].date).getHours()
                            ).padStart(2, "0");
                            const minute = String(
                                new Date(data.trips[i].date).getMinutes()
                            ).padStart(2, "0");
                            document.querySelector('#card-booking').innerHTML +=
                                `<div class="travelsList" id=${data.trips[i]._id}>
                                <div class="travel">${data.trips[i].departure} > ${data.trips[i].arrival}</div>
                                <div class="travel-time">${hour} : ${minute}</div>
                                <div class="travel-price">${data.trips[i].price}€</div>
                                <button class="book-btn" type='button' value=${data.trips[i]._id}>Book</button>
                            </div>
                            `
                            /* bookTravel() */
                            let bookBtn = document.querySelectorAll(".book-btn")
                            for (let i = 0; i < bookBtn.length; i++) {
                                bookBtn[i].addEventListener('click',
                                    function () {
                                        fetch(`http://localhost:3000/cart`,{
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body : JSON.stringify({id : bookBtn[i].value})
                                                  })
                                                  .then((response) => response.json())
                                                  .then(window.location.assign('cart.html'))
                                    }
                                )
                            };
                        }
                    }
                })
        }
    })


            