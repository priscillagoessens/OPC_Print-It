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

arrow_right.addEventListener("click", (event) => {
	// Parcour les éléments de la liste "bullets"
	for(i=0; i < bullets.length; i++){
		//verifie si il la classe est presente
		if(bullets[i].classList.contains('dot_selected')){
			//si oui, on supprime
			bullets[i].classList.remove('dot_selected')
			//on ajoute la classe pour le passer en mode actif sur le bullet/dot
			bullets[i+1].classList.add('dot_selected')
			//arrete la boucle
			break;
		}
	}
	image.src = "./assets/images/slideshow/" + slides[i+1].image;
	slideText.innerHTML = slides[i+1].tagLine;
})

arrow_left.addEventListener("click", (event) => {
	for(i=0; i < bullets.length; i++){
		if(bullets[i].classList.contains('dot_selected')){
			bullets[i].classList.remove('dot_selected')
			bullets[i-1].classList.add('dot_selected')
			break;
		}
	}
	image.src = "./assets/images/slideshow/" + slides[i-1].image;
	slideText.innerHTML = slides[i-1].tagLine;
});
	
for (let i in slides) {
	//creer une div pour chaque dot en fonction du nb d'objet
	const dot = document.createElement('div');
	dot.className = "dot"
	document.getElementsByClassName('dots')[0].appendChild(dot);	
}

document.querySelector('.dots :first-child').classList.add('dot_selected')





