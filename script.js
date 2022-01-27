let quotes = [
    {
        quote: "The opportunity for doing mischief is found a hundred times a day, and of doing good once in a year.",
        author: "- Voltaire"
    },
    {
        quote: "We must like what we have when we don't have what we like.",
        author: "- Roger de Rabutin"
    },
    {
        quote: "Hitch your wagon to a star.",
        author: "- Ralph Waldo Emerson"
    },
    {
        quote: "Every area of trouble gives out a ray of hope, and the one unchangeable certainty is that nothing is certain or unchangeable.",
        author: "- Voltaire"
    },
    {
        quote: "Earth changes, but thy soul and God stand sure.",
        author: "- Elizabeth Barrett Browning"
    }
]

let box = document.getElementsByClassName("box")[0];
let btn = document.getElementsByClassName("btn")[0];
let quotE = document.getElementsByClassName("para")[0];
let authoR = document.getElementsByClassName("author")[0];

btn.addEventListener("click", function () {

    box.style.opacity=0;
    authoR.style.opacity=0;

    setTimeout(() => {
        let i = Math.floor(Math.random() * quotes.length) + 1;
        quotE.innerHTML = quotes[i].quote;
        authoR.innerHTML = quotes[i].author;
        box.style.opacity=1;
        authoR.style.opacity=1;

    }, 500);
   
    
                         
} 
)




