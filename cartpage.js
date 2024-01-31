// CART PAGE

function deleteTravel() {
    for (let i = 0; i < document.querySelectorAll('.travelsList').length; i++) { 
      document.querySelectorAll('.delete-btn')[i].addEventListener('click',
      function () {
        this.parentElement.remove();
      })
    }
    }
deleteTravel()