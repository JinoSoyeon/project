const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    quote: "The world id a book and those who do not travel read only one page",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other -",
    author: "John Lennon",
  },
  {
    quote: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other",
    author: "John Lennon",
  },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;