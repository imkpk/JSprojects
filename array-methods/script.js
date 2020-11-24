const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionaires = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const wealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];
  // console.log(user);

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
  addData(newUser);
}
// add new obj to data array
function addData(obj) {
  data.push(obj);
  updateDom();
}
//double everyones money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDom();
}

//sort by welth or sort rich people
function sortRichppl() {
  data.sort((a, b) => b.money - a.money);
  updateDom();
}
//filter by millionaires
function showMillionairesOnly() {
  // console.log(123);

  data.filter((user) => user.money > 1000000);
  updateDom();
}
//calculate the welth of all
function calculateWealth() {
  const wealth = data.reduce((acc, user) => acc + user.money, 0);
  // create a div elementh
  const wealthElement = document.createElement("div");
  //write something into the div
  wealthElement.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthElement);
}

// writing something into the Dom
function updateDom(pdata = data) {
  // clear the main div
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
  pdata.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong>
    ${formatMoney(item.money)}`;
    //so now append the element data into the main element
    main.appendChild(element);
  });
}
// format the number
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&, ");
}

//Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortRichppl);
showMillionaires.addEventListener("click", showMillionairesOnly);
wealthBtn.addEventListener("click", calculateWealth);
