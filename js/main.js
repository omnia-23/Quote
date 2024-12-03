var quotes = [
  {
    text: "If everything was perfect you would never learn and you would never grow.",
    author: "Beyonce",
    img:"url('img/macbook screensaver.jpg')"
  },
  {
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
    img:"url('img/words-motivatsiya-tablichka-tekst-fraza-134242.jpeg')"

  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    img:"url('img/macbook screensaver.jpg')"
  },
  {
    text: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
    img:"url('img/words-motivatsiya-tablichka-tekst-fraza-134242.jpeg')"

  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
    img:"url('img/macbook screensaver.jpg')"
  },
  {
    text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author: "Helen Keller",
    img:"url('img/words-motivatsiya-tablichka-tekst-fraza-134242.jpeg')"

  },
  {
    text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
    img:"url('img/macbook screensaver.jpg')"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dream",
    author: "Eleanor Roosevelt",
    img:"url('img/words-motivatsiya-tablichka-tekst-fraza-134242.jpeg')"

  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
    img:"url('macbook screensaver.jpg')"
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years",
    author: "Abraham Lincoln",
    img:"url('words-motivatsiya-tablichka-tekst-fraza-134242.jpeg')"
  },
  {
    text: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh",
    img:"url('macbook screensaver.jpg')"
  },
];


function new_quote() {
  var x = Math.floor(Math.random() * 12);
  var oldx = 0;
  while (x === oldx) {
    x = Math.floor(Math.random() * 12);
  }
  oldx = x;

  // document.body.style.backgroundImage = quotes[x].img;
  document.getElementById("quote").innerHTML = `
  <div id="quote_body" class="fs-4"> 
  <div class="align-middle fs-3">“${quotes[x].text}”</div>
  <span class="text-end justify-content-end">—${quotes[x].author}</span>
  
  </div>

 
 `;
}
