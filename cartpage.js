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
          console.log(data.Cart[0].trip);
          if (data) {
              for (let i = 0; i < data.length; i++) {
            const hour = String(
                new Date(data.trips[i].date).getHours()).padStart(2,"0");
            const minute = String(
                new Date(data.trips[i].date).getMinutes()).padStart(2, "0");
                cartContent.innerHTML +=
                `<div class="travelsList" id=${data.trips[i]._id}>
                <div class="travel">${data.trips[i].departure} > ${data.trips[i].arrival}</div>
                <div class="travel-time">${hour} : ${minute}</div>
                <div class="travel-price">${data.trips[i].price}€</div>
                <button class="book-btn" type='button' value=${data.trips[i]._id}>Book</button>
            </div>`
          } 
        }})}

     Cart()


/* function deleteTravel() {
    for (let i = 0; i < document.querySelectorAll('.travelsList').length; i++) { 
      document.querySelectorAll('.delete-btn')[i].addEventListener('click',
      function () {
        this.parentElement.remove();
      })
    }
    }
deleteTravel()



function updateCount() {
    const messagesCount = document.querySelectorAll('.travelsList').length;
    document.querySelector('#count').textContent = messagesCount;
    }
    updateCount() */
