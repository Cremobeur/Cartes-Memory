const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
let premiereCarte, secondeCarte;
let verouillage = false;

cartes.forEach(carte => {
    carte.addEventListener('click', retourneCarte)
})

function retourneCarte() {

    if(verouillage) return;

    this.childNodes[1].classList.toggle('active'); /* childNodes = ses enfants (le contenu) */

    if(!carteRetournee) {

        carteRetournee =  true;
        premiereCarte = this;
        return;
    }

    carteRetournee =  false;
    secondeCarte = this;

     // console.log(premiereCarte, secondeCarte);

     correspondance();
}

function correspondance() {

    if(premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')) {

        premiereCarte.removeEventListener('click', retourneCarte); /* removeEventListener enlève l'event qu'on a crée.*/
        secondeCarte.removeEventListener('click', retourneCarte);

    } else {
        verouillage = true;
        setTimeout(() => {

            premiereCarte.childNodes[1].classList.remove('active');
            secondeCarte.childNodes[1].classList.remove('active');

            verouillage = false;
        }, 1500)
    }
}

function aleatoire() {

    cartes.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12); /* Math.floor permet d'arrondir à l'inférieur */
        card.style.order = randomPos;
    })
}
aleatoire();