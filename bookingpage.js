// BOOKING PAGE

function Booking() {
    const BookingContent = document.querySelector(".text");
    fetch("http://localhost:3000/cart")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            BookingContent.innerHTML = ''
            if (data) {
                console.log(data.Cart)
            

                for (let i = 0; i < data.Cart.length; i++) {
                    console.log(data.Cart[i]);

                    const date = new Date(data.Cart[i].date).getTime()
                    const hour = String(
                        new Date(data.Cart[i].trip.date).getHours()).padStart(2, "0");
                    const minute = String(
                        new Date(data.Cart[i].trip.date).getMinutes()).padStart(2, "0");

                      
                     BookingContent.innerHTML +=
                        `<div class="travelsList" id=${data.Cart[i].trip._id}>
                <div class="travel">${data.Cart[i].trip.departure} > ${data.Cart[i].trip.arrival}</div>
                <div class="travel-time">${hour} : ${minute}</div>
                <div class="travel-price" value='${data.Cart[i].trip.price}'>${data.Cart[i].trip.price}€</div>
                <div class="time-departure">Departure ${moment(data.Cart[i].trip.date).fromNow()}</div>
                </div>`

            }}})
        
        }

        Booking()
