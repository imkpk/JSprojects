// ftetching with Javascript
// http://api.forismatic.com/api/1.0/
// get quote from Api

// https:twitter.com/intent/tweet
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuotebtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
// show loading
function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// hide loading
function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

//fetching quote from api
async function getQuote() {
  showLoadingSpinner();
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    // console.log(data);

    //author issue if author is blank add unknown
    if (data.quoteAuthor === "") {
      authorText.innerHTML = "Unknown";
    } else {
      authorText.innerHTML = data.quoteAuthor;
    }

    // reduce font size for long quotes

    if (data.quoteText.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
    quoteText.innerText = data.quoteText;
    // authorText.innerText = data.quoteAuthor;

    // stop Loader show the quote
    removeLoadingSpinner();
  } catch (error) {
    getQuote();
    // console.log("whops, no quote", error);
  }
}

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const tweetUrl = `https:twitter.com/intent/tweet?text=${quote}-${author}`;
  window.open(tweetUrl, "_blank");
}

//event listeners
newQuotebtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// on load
//
getQuote();
loading();
