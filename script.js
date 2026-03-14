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

// Q U E R R Y  S E L E C T O R S

let time = 60;

let $h3timer = document.querySelector("#timer");
const $btnstart = document.querySelector("#btnstart");
const $dialogstart = document.querySelector("#dialogstart");

$btnstart.addEventListener("click", () => {
	console.log("Starting test...");
	$dialogstart.close();
	timer();
});

function timer() {

	const timer = setInterval ( () => {
		time--;
		$h3timer.textContent = "0:" + time;

		if (time == 40) {
			$h3timer.classList.add("orange");
		}
		if (time == 20) {
			$h3timer.classList.remove("orange");
			$h3timer.classList.add("red");
		}
		if (time <= 9) {
			$h3timer.textContent = "0:0" + time;
		}
		if (time == 1) {
			console.log("Stopping test... ");
			clearInterval();
		}
	}, 1000)

}
