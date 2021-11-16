//fenêtre pour règles du jeu
let modal       = document.getElementById('myModal');
let btn         = document.getElementById('myBtn');
let modalClose  = document.getElementById('modalClose')


//créaton des fonction pour ouvrir et fermer la modal au click
const rulesContent = function() {
   modal.style.display = "block";
}

const rulesClose = function() {
    modal.style.display = "none";
}

//création d'événement au click sur bouton  
btn.addEventListener('click', rulesContent);
modalClose.addEventListener('click', rulesClose);

//------------------------------------------------------------------------
let lancer  = document.querySelector('.again');
let start   = document.querySelector('.start');
let round   = document.querySelector('.round');
let img     = document.getElementById('img1');

let dernier = 0;
let nombreAleatoire = 0;

//tableau des images
let images = [
    [img  = "./images/image1.png"],
    [img  = './images/image2.png'],
    [img  = './images/image3.png'],
    [img  = './images/image4.png'],
    [img  = './images/image5.png'],
    [img  = './images/image6.png']
];

function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//bouton nouveau jeu
start.addEventListener('click', () => {
    round.textContent ="0";
});

lancer.addEventListener('click', () => {
   do {
    nombreAleatoire = genererNombreEntier(images.length);
   } while (nombreAleatoire == dernier);
   img.textContent = images[nombreAleatoire][0];
});

$(function() {
    $('#p1').tooltip();
});





//------------------------------------------------------------------------


//let new = document.getElementsByClassName('title');



