tabIngredients = ['Crème','Pâtes', 'Oeuf', 'Sel', 'Poivre', 'Lardon', 'Oignon'];

let resumeRecette = document.getElementById("resumeRecette");
let listeIngredients = document.getElementById("listeIngredients");
let listeIngredientsOrdonnée = document.getElementById("listeIngredientsOrdonnée");

let premierIngredient = true;
let tabIngredientsOrdonné = tabIngredients.sort();

for (const ingredient of tabIngredients){ 

	resumeRecette.textContent += (premierIngredient ? "" : ", ") + ingredient;
	premierIngredient = false;
	//

	let newIngredientLigne = document.createElement("li");
	let newIngredient = document.createTextNode(ingredient);
	newIngredientLigne.appendChild(newIngredient);
	listeIngredients.appendChild(newIngredientLigne);
}


// liste ordonnée
for (const ingredient of tabIngredientsOrdonné){ 

	let newIngredientLigne = document.createElement("li");
	let newIngredient = document.createTextNode(ingredient);
	newIngredientLigne.appendChild(newIngredient);
	listeIngredientsOrdonnée.appendChild(newIngredientLigne);
}