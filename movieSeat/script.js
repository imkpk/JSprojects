//get the container
const container = document.querySelector(".container");

//get all the seats that are not occupied
//not occupied value passed in the css .row.seat:not(.occupied)
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
//get hte count
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();

//select the ticket price
let ticketPrice = +movieSelect.value;

//save or set selected movie index and price in local storage
function setMovieData(mi, mp) {
  localStorage.setItem("selectedMovieIndex", mi);
  localStorage.setItem("selectedMoviePrice", mp);
}
// update total and count
function updateSelectedCount() {
  //get the selected seats first with
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  /* in order to save locally we gonna do three things 
  a. copy selected seats into array
  b. map through that array
  c. return the new array of indexes
  d. we gonna use spread optr do the above */

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // console.log(seatsIndex);

  // save it in local storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  // get the length of selected seats which is actually node list
  const selectedSeatsCount = selectedSeats.length;
  // console.log(selectedSeatCount);
  // get the total seat count (id=count) and put it in html with innerText
  count.innerText = selectedSeatsCount;
  // get the titket price by selecting seats
  total.innerText = selectedSeatsCount * ticketPrice;
}

// /populate UI get data from local storage
function populateUI() {
  const getSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  //get the seat first
  if (getSeats !== null && getSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (getSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  // get the movie index from localstorage
  const getMI = localStorage.getItem("selectedMovieIndex");
  // console.log(getMI);
  if (getMI !== null) {
    movieSelect.selectedIndex = getMI;
  }
}
// Get data from localstorage and populate UI

// movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;

  setMovieData(e.target.selectedIndex, e.target.value);
  //movie slection and its value to local storage
  // clal function to auto load of amount for the selected movie
  updateSelectedCount();
});

//adding event listiner to the seats on click
container.addEventListener("click", (e) => {
  if (
    // if u click the seat it reads the dom element
    // if seats are occupied it wont fire anything
    // if seats are empty it changes the color as we mentioned in css
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // toggling the click like select unselect
    e.target.classList.toggle("selected");

    // calling the selected seats function
    updateSelectedCount();
  }
});

// console.log(typeof ticketPrice);

//intial count and total set pageload
updateSelectedCount();
