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

let difficulty = "easy";
let time = 60;

let $h3timer = document.querySelector("#timer");
const $btnstart = document.querySelector("#btnstart");
const $dialogstart = document.querySelector("#dialogstart");
const $btneasy = document.querySelector("#easy");
const $btnmedium = document.querySelector("#medium");
const $btnhard = document.querySelector("#hard");
const $wordcontainer = document.querySelector("#wordcontainer");

$btnstart.addEventListener("click", () => {
	console.log("Starting test...");
	$dialogstart.close();
	timer();
	randomWord();
	$btneasy.disabled = true;
	$btnmedium.disabled = true;
	$btnhard.disabled = true;
});

function timer() {

	console.log("Current difficulty: " + difficulty);

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

// DIFFICULTY SELECTION

$btneasy.addEventListener("click", () => {
	$btneasy.classList.remove("selectbtn");
	$btneasy.classList.add("selectbtnactive");
	$btnmedium.classList.remove("selectbtnactive");
	$btnmedium.classList.add("selectbtn");
	$btnhard.classList.remove("selectbtnactive");
	$btnhard.classList.add("selectbtn");
	let difficulty = "easy";
	console.log(difficulty);
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
});

function randomWord() {

	if (difficulty == "easy") {
		for (let i = 0; i < easytable.length; i++) {
			const randomIndex = Math.floor(Math.random() * easytable.length);
			const $span = document.createElement("span");
			$span.textContent = easytable[randomIndex] + " ";
			$wordcontainer.appendChild($span);
		}
	}

	else if (difficulty == "medium") {
		for (let i = 0; i < mediumtable.length; i++) {
			const randomIndex = Math.floor(Math.random() * mediumtable.length);
			const $span = document.createElement("span");
			$span.textContent = mediumtable[randomIndex] + " ";
			$wordcontainer.appendChild($span);
		}
	}

	else if (difficulty == "hard") {
		for (let i = 0; i < hardtable.length; i++) {
			const randomIndex = Math.floor(Math.random() * hardtable.length);
			const $span = document.createElement("span");
			$span.textContent = hardtable[randomIndex] + " ";
			$wordcontainer.appendChild($span);
		}
	}

	else {
		console.error("Error: difficulty = null, please select a difficulty level, otherwise the speed type test won't work");
	}
}

/* 
1. Choisir et memoriser la dificulté selectionner. 										  		|DONE.
2. Choisir des mots aléatoires de la table correspondante. 								  		|DONE.
3. Découper les lettres des mots en <span> et les afficher. 							  		|WE'RE GONNA SAY ITS DONE...
4. Vérifier la saisie de l'utilisateur et colorier les lettres en vert ou rouge selon le cas. 	|IN PROGRESS...
5. Afficher les résultats à la fin du test ("Word Per Minute" et "Accuracy"). 					|TODO.
*/

// LE GAMEMODE A ETAIT FORCER EN "EASY" POUR LE MOMENT! (Ln 198, Col 18 à 24) (Fait sans l'extension "Prettier", le code ne sera pas fait correctement.)
