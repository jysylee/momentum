const quotes = [
  {
    quote: "What would life be if we had no courage to attempt anything?",
    author: "Vincent van Gogh",
  },
  {
    quote:
      "You are a human with one life and it is up to you to make it the best life you can.",
    author: "Dan Howell",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    quote: "You can't please everyone, and you can't make everyone like you.",
    author: "Katie Couric",
  },
  {
    quote: "There are no mistakes, only opportunities.",
    author: "Tina Fey",
  },
  {
    quote: "Once you choose hope, anything's possible.",
    author: "Christopher Reeve",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Life is ten percent what happens to you and ninety percent how you respond to it.",
    author: "Lou Holtz",
  },
  {
    quote:
      "In three words I can sum up everything I’ve learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "People are just about as happy as they make up their minds to be.",
    author: "Abraham Lincoln",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `[${todaysQuote.author}]`;
