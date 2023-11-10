const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');
const bullets =  document.getElementsByClassName('dot')
const image = document.querySelector('.banner-img');
const slideText = document.getElementById("text");
let slideIndex = 0;

//initialisation des bullet au chargement de la page 
window.addEventListener("load", (event) => {
	//ajout d'un bullet point pour chaque objet du tableau
	for (i=0; i< slides.length; i++) {
		const dot = document.createElement('div'); //creer une div pour chaque point 
		dot.className = "dot" //donne une classe "dot"
		document.getElementsByClassName('dots')[0].appendChild(dot); //selectionne tout les elements avec la classe "dots" et slectionne le premier element pour ajouter un element enfant 	
	}
	document.querySelector('.dots :first-child').classList.add('dot_selected'); // ajoute au premier enfant la classe dot_selected
});

//event listener des fleches
arrow_right.addEventListener("click", (event) => {
	if (slideIndex === slides.length - 1) {// verifie si c'est le dernier objet du tableau
		slideIndex = 0; // remet l'index a 0
	} else {
		slideIndex++; // sinon on incremente l'index pour passer au suivant
	}
    slideText.innerHTML = slides[slideIndex].tagLine; //integre et met a jour la tagline en fonction de l'index
	image.src = "./assets/images/slideshow/" + slides[slideIndex].image; //met a jour le path de l'image en fonction de l'index
	updateBullets() //fait appel a la fonction pour mettre a jour les bullets
 })

arrow_left.addEventListener("click", (event) => {
	if (slideIndex === 0) { // verifie si index est egale a 0
        slideIndex = slides.length - 1; // reinitialise a l'objet comme dernier du tableau
    } else {
        slideIndex--; //passe au precedent
    }
    slideText.innerHTML = slides[slideIndex].tagLine;
    image.src = "./assets/images/slideshow/" + slides[slideIndex].image;
	updateBullets()	;
});

//mettre a jour les bullets
function updateBullets(){
	for (i = 0; i < bullets.length; i++) { // parcours les éléments de la liste
		bullets[i].classList.remove('dot_selected'); // supprime la classe si l'element actuel a la classe 
	}
	bullets[slideIndex].classList.add('dot_selected'); // ajoute la classe a l'element grace a l'incrementation de slideIndex
}



