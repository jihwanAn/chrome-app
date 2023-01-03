const quotes = [
  {
    quote:
      "To the world you may be one person, but to one person you may be the world.",
    author: "Dr.Seuss",
  },
  {
    quote:
      "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
    author: "Bill Gates",
  },
  {
    quote:
      "One day you will wake up and there won't be any more time to do the things you've always wanted. Do it now.",
    author: "Paulo Coelho",
  },
  {
    quote:
      "Inspiration is wonderful when it happens, but the writer must develop an approach for the rest of the time.",
    author: "Leonard Bernstein",
  },
  {
    quote: "From a little spark may burst a flame.",
    author: "Dante Alighieri",
  },
  {
    quote:
      "Early to bed and early to rise makes a man healthy, wealthy and wise.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Learn as if you would live forever, live as if you would die tomorrow.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Success follows doing what you want to do, there is no other way to be.",
    author: "Malcolm Forbes",
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H.jackson Brown,Jr",
  },
  {
    quote: "It always seems impossible until its done.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "There is only one thing that makes a dream impossible to achieve : the fear of failure.",
    author: "Paulo Coelho",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
