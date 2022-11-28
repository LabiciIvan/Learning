setInterval(insertQuote, 7000)
animateLogo();

let quotePosition = 0;

let quotes = [
      "”First, solve the problem. Then, write the code.”  John Johnson",
      "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
      "“Experience is the name everyone gives to their mistakes.”  Oscar Wilde",
      "“Java is to Javascript what car is to Carpet.”  Chris Heilmann",
      "“Knowledge is power”  Francis Bacon",
      "“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon",
      "“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint – Exupery",
      "“ Code is like humor. When you have to explain it, it’s bad.”  Cory House",
      "“Fix the cause, not the symptom.”– Steve Maguire",
      "“Before software can be reusable it first has to be usable.”  Ralph Johnson",
      "“Make it work, make it right, make it fast.”  Kent Beck",     
];


function insertQuote() {

      let whereQuotesGoes = document.getElementById('insertHereQuotes');

          whereQuotesGoes.style.opacity = 0;
          whereQuotesGoes.style.transition = '0.2s';
          whereQuotesGoes.innerHTML = quotes[quotePosition];
          ++quotePosition;

      if (quotePosition === quotes.length) { quotePosition = 0; }

      visible(whereQuotesGoes);
}


function visible(whereQuotesGoes) {
   
      setTimeout(() =>  { whereQuotesGoes.style.opacity = 1;}, 300);
}

function animateLogo() 
{
      var tl = gsap.timeline({duration:2});
      
      let distanceFrom = 300;
      
      if (window.innerWidth <= 600) 
      {
            distanceFrom = 200;
      }
      
      tl.from("#left", {duration: 1, x: -`${distanceFrom}`, opacity: 0}, "-=2")
      .from("#right", {duration: 1, x: `${distanceFrom}`, opacity: 0}, "-=1")

      var tlTwo = gsap.timeline({duration:2});

      tlTwo.from('#list-one',   { y: -100,  opacity: 0})
           .from('#list-two',   { y: 100 ,  opacity: 0})
           .from('#list-three', { y: 100 ,  opacity: 0})
           .from('#list-four',  { y: 100 ,  opacity: 0})
           .from('#list-five',  { y: 100 ,  opacity: 0})
           .from('#list-six',   { y: 100 ,  opacity: 0})
           .from('#list-seven', { y: 100 ,  opacity: 0});

           
      tlTwo.to('#list-one',   { backgroundColor: '#ffd500', duration: 0.2})
           .to('#list-two',   { backgroundColor: '#ffd500', duration: 0.2})
           .to('#list-three', { backgroundColor: '#ffd500', duration: 0.2})
           .to('#list-four',  { backgroundColor: '#ffd500', duration: 0.2})
           .to('#list-five',  { backgroundColor: '#ffd500', duration: 0.2})
           .to('#list-six',   { backgroundColor: '#ffd500', duration: 0.2})
           .to('#list-seven', { backgroundColor: '#ffd500', duration: 0.2});

      tlTwo.to('#list-one',   { backgroundColor: 'transparent', duration: 0.2})
           .to('#list-two',   { backgroundColor: 'transparent', duration: 0.2})
           .to('#list-three', { backgroundColor: 'transparent', duration: 0.2})
           .to('#list-four',  { backgroundColor: 'transparent', duration: 0.2})
           .to('#list-five',  { backgroundColor: 'transparent', duration: 0.2})
           .to('#list-six',   { backgroundColor: 'transparent', duration: 0.2})
           .to('#list-seven', { backgroundColor: 'transparent', duration: 0.2});
}