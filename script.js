// W O R D S  T A B L E

// EASY MODE

const easytable = [
	"chat",
	"chien",
	"pain",
	"lait",
	"eau",
	"sucre",
	"table",
	"chaise",
	"porte",
	"mur",
	"main",
	"pied",
	"tête",
	"nez",
	"yeux",
	"bras",
	"jambe",
	"dos",
	"ami",
	"amie",
	"père",
	"mère",
	"frère",
	"sœur",
	"jour",
	"nuit",
	"matin",
	"soir",
	"hier",
	"demain",
	"ici",
	"là",
	"oui",
	"non",
	"bien",
	"mal",
	"vite",
	"lent",
	"haut",
	"bas",
	"gros",
	"petit",
	"beau",
	"laid",
	"vrai",
	"faux",
	"bon",
	"mauvais",
	"chaud",
	"froid",
	"plein",
	"vide",
	"dur",
	"mou",
	"clair",
	"sombre",
	"neuf",
	"vieux",
];

// MEDIUM MODE

const mediumtable = [
	"maison",
	"voiture",
	"ordinateur",
	"clavier",
	"écran",
	"téléphone",
	"fenêtre",
	"cuisine",
	"salon",
	"chambre",
	"bureau",
	"travail",
	"école",
	"collège",
	"université",
	"professeur",
	"élève",
	"étudiant",
	"exercice",
	"question",
	"réponse",
	"solution",
	"problème",
	"histoire",
	"géographie",
	"science",
	"nature",
	"animal",
	"plante",
	"montagne",
	"rivière",
	"océan",
	"forêt",
	"prairie",
	"désert",
	"nuage",
	"pluie",
	"orage",
	"vent",
	"soleil",
	"étoile",
	"planète",
	"galaxie",
	"univers",
	"énergie",
	"force",
	"vitesse",
	"distance",
	"volume",
	"surface",
	"température",
	"pression",
	"matière",
	"atome",
	"molécule",
	"réaction",
	"expérience",
	"analyse",
	"mesure",
	"calcul",
];

// HARD MODE

const hardtable = [
	"administration",
	"organisationnelle",
	"responsabilité",
	"professionnel",
	"développement",
	"implémentation",
	"international",
	"communication",
	"interprétation",
	"collaboration",
	"coordination",
	"expérimentale",
	"documentation",
	"classification",
	"transformation",
	"optimisation",
	"configuration",
	"synchronisation",
	"visualisation",
	"représentation",
	"identification",
	"authentification",
	"autorisation",
	"infrastructure",
	"architecture",
	"algorithmique",
	"programmation",
	"compilation",
	"interopérabilité",
	"compatibilité",
	"virtualisation",
	"automatisation",
	"orchestration",
	"distribution",
	"sauvegarde",
	"restauration",
	"supervision",
	"monitoring",
	"performance",
	"scalabilité",
	"résilience",
	"tolérance",
	"redondance",
	"migration",
	"intégration",
	"déploiement",
	"validation",
	"vérification",
	"évaluation",
	"amélioration",
	"innovation",
	"technologique",
	"scientifique",
	"méthodologie",
	"statistique",
	"probabilité",
	"modélisation",
	"simulation",
	"corrélation",
	"causalité",
];

// Q U E R R Y  S E L E C T O R S  A N D  O T H E R S

let time = 60;
let difficulty = "";

// check pour debuggage
console.log(difficulty);
randomWord();

let $h3timer = document.querySelector("#timer");
const $btnstart = document.querySelector("#btnstart");
const $dialogstart = document.querySelector("#dialogstart");
const $btneasy = document.querySelector("#easy");
const $btnmedium = document.querySelector("#medium");
const $btnhard = document.querySelector("#hard");

$btnstart.addEventListener("click", () => {
	console.log("Starting test...");
	$dialogstart.close();
	timer();
});

function timer() {

	const timer = setInterval ( () => {
		time--;
		$h3timer.textContent = "0:" + time;

		if (time < 40) {
			$h3timer.classList.add("orange");
		}
		if (time < 20) {
			$h3timer.classList.remove("orange");
			$h3timer.classList.add("red");
		}
		if (time <= 9) {
			$h3timer.textContent = "0:0" + time;
		}
		if (time == 0) {
			console.log("Stopping test... ");
			clearInterval(timer);
		}
	}, 1000)

}

// Difficuly selection

$btneasy.addEventListener("click", () => {
	$btneasy.classList.remove("selectbtn");
	$btneasy.classList.add("selectbtnactive");
	$btnmedium.classList.remove("selectbtnactive");
	$btnmedium.classList.add("selectbtn");
	$btnhard.classList.remove("selectbtnactive");
	$btnhard.classList.add("selectbtn");
	let difficulty = "easy";
	console.log(difficulty);
	randomWord();
});
$btnmedium.addEventListener("click", () => {
	$btneasy.classList.remove("selectbtnactive");
	$btneasy.classList.add("selectbtn");
	$btnmedium.classList.remove("selectbtn");
	$btnmedium.classList.add("selectbtnactive");
	$btnhard.classList.remove("selectbtnactive");
	$btnhard.classList.add("selectbtn");
	let difficulty = "medium";
	console.log(difficulty);
	randomWord();
});
$btnhard.addEventListener("click", () => {
	$btneasy.classList.remove("selectbtnactive");
	$btneasy.classList.add("selectbtn");
	$btnmedium.classList.remove("selectbtnactive");
	$btnmedium.classList.add("selectbtn");
	$btnhard.classList.remove("selectbtn");
	$btnhard.classList.add("selectbtnactive");
	let difficulty = "hard";
	console.log(difficulty);
	randomWord();
});

function randomWord() {
	if (difficulty == "easy") {
		console.log(easytable)
		// code pour afficher les mots de la table easytable
	}
	else if (difficulty == "medium") {
		console.log(mediumtable)
		// code pour afficher les mots de la table mediumtable
	}
	else if (difficulty == "hard") {
		console.log(hardtable)
		// code pour afficher les mots de la table hardtable
	}
	else {
		console.error("Error: difficulty = null, please select a difficulty level, otherwise the speed type test won't work");
	}
}

/* 
1. Choisir et memoriser la dificulté selectionner. 										  	|DONE
2. Choisir des mots aléatoires de la table correspondante. 								  	|IN PROGRESS (il faut encore faire le lien entre la difficulté selectionnée et la table de mots correspondante)
3. Découper les lettres des mots en <span> et les afficher. 							  	|TODO
4. Vérifier la saisie de l'utilisateur et colorer les mots en vert ou rouge selon le cas. 	|TODO
5. Afficher les résultats à la fin du test (Word Per Minute et Accuracy). 				  	|TODO
*/
