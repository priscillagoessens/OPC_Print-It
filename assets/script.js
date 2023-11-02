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

var currentIndex = 0;

// afficher la diapositive suivante
function next() {
	if (currentIndex === slides.length - 1) {// verifie si c'est le dernier du tableau
		currentIndex = 0; // remet l'index a 0
	} else {
		currentIndex ++; // sinon passe au suivant
	}
    slideText.innerHTML = slides[currentIndex].tagLine; //integre la tagline
	image.src = "./assets/images/slideshow/" + slides[currentIndex].image; //met a jour le path de l'image en fonction de l'index
}

//afficher la diapositive suivante
function prev() {
    if (currentIndex === 0) { // verifie si index est egale a 0
        currentIndex = slides.length - 1; // reinitialise a l'objet comme dernier du tableau
    } else {
        currentIndex --; //passe au precedent
    }
    slideText.innerHTML = slides[currentIndex].tagLine;
    image.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	
}

arrow_right.addEventListener("click", (event) => {
	next();
	//Parcour les éléments de la liste "bullets"
	for( i=0; i < bullets.length; i++){			
		if(bullets[i].classList.contains('dot_selected')){ //verifie si il la classe est presente			
			bullets[i].classList.remove('dot_selected') //si oui, on supprime			
			bullets[i+1].classList.add('dot_selected')	//on ajoute la classe pour le passer en mode actif sur le bullet/dot
			break;	//arrete la boucle
		}
	}
 })

arrow_left.addEventListener("click", (event) => {
	prev();
	for( i=0; i < bullets.length; i++){
		if(bullets[i].classList.contains('dot_selected')){
			bullets[i].classList.remove('dot_selected')
			bullets[i-1].classList.add('dot_selected')
			break;
		}
	}
});
	
for (let i in slides) {
	//creer une div pour chaque dot en fonction du nb d'objet
	const dot = document.createElement('div');
	dot.className = "dot"
	document.getElementsByClassName('dots')[0].appendChild(dot);	
}

document.querySelector('.dots :first-child').classList.add('dot_selected')





