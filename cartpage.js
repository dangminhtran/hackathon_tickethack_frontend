// CART PAGE



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
                    document.querySelector('#count').textContent = total;

                }

                    let deleteBtn = document.querySelectorAll(".delete-btn")

                    for (let i = 0; i < deleteBtn.length; i++) {
                        deleteBtn[i].addEventListener('click',
                            function () {
                                this.parentNode.remove();
                                fetch(`http://localhost:3000/cart`, {
                                    method: 'DELETE',
                                    headers: { 'Content-Type': 'application/json' },
                               
                                })
                                    .then((response) => response.json())
                                    .then(() => {
                                        console.log(data.Cart[i].trip.price)
                                        console.log(total)
                                        total -= data.Cart[i].trip.price;
                                        console.log(total)

                                        document.querySelector('#count').textContent = total;

                                    })

                            }
                        )
                    }

                    document.querySelector('#purchase-btn').addEventListener('click',
                        function () {
                            
                            fetch(`http://localhost:3000/booking`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({})
                            }).then((response) => response.json())
                                .then(data => {
                                    console.log(data)
                                    window.location.assign('booking.html')
                                })
                            })
                
            }
        })
}

Cart()


        