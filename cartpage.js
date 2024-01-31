// CART PAGE

// TO BOOK A TRAVEL
/* function bookTravel() {
    for (let i = 0; i < document.querySelectorAll('.travelsList').length; i++) {
        document.querySelectorAll('.book-btn')[i].addEventListener('click',
            function () {
                //window.location.assign('cart.html')
                document.querySelector('.text').innerHTML =
                    `<div class="travelsList" id=${data.trips[i]._id}>
                    <div class="travel">${data.trips[i].departure} > ${data.trips[i].arrival}</div>
                    <div class="travel-time">${hour} : ${minute}</div>
                    <div class="travel-price">${data.trips[i].price}€</div>
                    <button class="delete-btn" type='button'>Delete</button>
                </div>`
                    deleteTravel()

            })
    }
}
 */


function Cart() {
    const cartContent = document.querySelector(".text");
    fetch("http://localhost:3000/cart")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.Cart);
            cartContent.innerHTML = ''
            if (data) {
                let total = 0
                for (let i = 0; i < data.Cart.length; i++) {
                    const hour = String(
                        new Date(data.Cart[i].trip.date).getHours()).padStart(2, "0");
                    const minute = String(
                        new Date(data.Cart[i].trip.date).getMinutes()).padStart(2, "0");
                    cartContent.innerHTML +=
                        `<div class="travelsList" id=${data.Cart[i].trip._id}>
                <div class="travel">${data.Cart[i].trip.departure} > ${data.Cart[i].trip.arrival}</div>
                <div class="travel-time">${hour} : ${minute}</div>
                <div class="travel-price" value='${data.Cart[i].trip.price}'>${data.Cart[i].trip.price}€</div>
                <button class="delete-btn" type='button' value=${data.Cart[i].trip._id}>X</button>
                </div>`
                
                total += data.Cart[i].trip.price;
                document.querySelector('.total > span').textContent = total;


                let deleteBtn = document.querySelectorAll(".delete-btn")

                for (let i = 0; i < deleteBtn.length; i++) {
                    deleteBtn[i].addEventListener('click',
                        function () {
                            console.log(deleteBtn[i])
                            this.parentNode.remove();
                            fetch(`http://localhost:3000/cart`, {
                                method: 'DELETE',
                                headers: { 'Content-Type': 'application/json' },
                                /* body: JSON.stringify({ id: deleteBtn[i].value }) */
                            })
                            .then((response) => response.json())
                            .then(() => {
                                document.querySelector('#count').textContent = total
                                    //console.log(deleteBtn[i].previousElementSibling)
                                //deleteBtn.previousElementSibling.remove();
                                Cart();



                //deleteTravel()
            }
                    )}
        )}}}})
}



/* function deleteTravel() {
    
    let deleteBtn = document.querySelectorAll(".delete-btn")

    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click',
            function () {
                console.log(deleteBtn[i])
                this.parentNode.remove();
                fetch(`http://localhost:3000/cart`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    //body: JSON.stringify({ id: deleteBtn[i].value })
                })
                .then((response) => response.json())
                .then(() => {
                    document.querySelector('#count').textContent = total
                    
                    Cart();
                    updateTotal()

            }
        )}
)}
} */
Cart()

    

//deleteTravel()





/* function updateTotal() {
    const totalTravels = document.querySelectorAll('.travel-price').length;
    
    document.querySelector('#count').textContent = totalTravels;
    console.log(totalTravels.valueOf)
    }

    updateTotal() */