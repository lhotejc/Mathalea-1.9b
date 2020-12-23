;

;

;

/**
 * 5A10 - Division Euclidienne; diviseurs, multiples, critères de divisibilité
 * Exercice bilan
 * @author Sébastien Lozano
 */

function Liste_des_diviseurs_5e() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1;
	this.titre = "Écrire la liste de tous les diviseurs d'un entier.";
	// pas de différence entre la version html et la version latex pour la consigne
	//this.consigne =`Écrire la liste de tous les diviseurs d'un entier.`;
	this.consigne = ``;
	//this.consigne += `<br>`;
	sortie_html ? this.spacing = 2 : this.spacing = 1;
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1;
	this.nb_questions = 3;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function (numero_de_l_exercice) {
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			//this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A10.pdf","Aide mémoire sur la division euclidienne (Sébastien Lozano)","Aide mémoire")		
			//this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1, 1, 2];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions);

		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			type_de_questions = liste_type_de_questions[i];

			switch (type_de_questions) {
				case 1: // Compléter un tableau pour trouver la liste de tous les diviseurs d'un entier
					// on choisit un entier non premier inférieur à 99
					let M = randint(2, 99, crible_eratosthene_n(99));
					// on calcule le nombre de diviseur de M pour prévoir le nombre de lignes du tableau
					let nbre_diviseurs_M = liste_diviseurs(M).length;

					texte = `Compléter le tableau suivant et faire la liste de tous les diviseurs de ${M}`;
					if (!sortie_html) {
						texte += `$\\medskip$`;
					};
					texte += `<br>`;
					if (sortie_html) {
						texte += `$\\def\\arraystretch{2.5}\\begin{array}{|c|c|c|}\n`
					} else {

						texte += `$\\begin{array}{|c|c|c|}\n`
					};
					texte += `\\hline\n`
					texte += `\\text{Facteur n°1} & \\text{Facteur n°2} & \\text{Produit donnant } ${M} \\\\\n`
					texte += `\\hline\n`

					if (nbre_diviseurs_M % 2 == 0) {//si il y a un nombre pair de diviseurs
						for (let m = 0; m < (liste_diviseurs(M).length / 2); m++) {
							texte += texte_ou_pas(liste_diviseurs(M)[m]) + ` & ` + texte_ou_pas(liste_diviseurs(M)[(liste_diviseurs(M).length - m - 1)]) + `& ${texte_ou_pas(M)} \\\\\n`;
							texte += `\\hline\n`;
						};
					} else { // sinon il est impair, cela n'arrive qu'avvec les carrés parfaits
						for (let m = 0; m < ((liste_diviseurs(M).length - 1) / 2); m++) {
							texte += texte_ou_pas(liste_diviseurs(M)[m]) + ` & ` + texte_ou_pas(liste_diviseurs(M)[(liste_diviseurs(M).length - m - 1)]) + `& ${texte_ou_pas(M)} \\\\\n`;
						};
						texte += texte_ou_pas(liste_diviseurs(M)[(nbre_diviseurs_M - 1) / 2]) + ` & ` + texte_ou_pas(liste_diviseurs(M)[(nbre_diviseurs_M - 1) / 2]) + `& ${texte_ou_pas(M)} \\\\\n`;
						texte += `\\hline\n`;
					};
					texte += `\\end{array}\n$`

					// correction

					texte_corr = `Le tableau suivant contient tous les couples de facteurs dont le produit vaut ${M}`;
					if (!sortie_html) {
						texte_corr += `$\\medskip$`;
					};
					texte_corr += `<br>`;
					if (sortie_html) {
						texte_corr += `$\\def\\arraystretch{2.5}\\begin{array}{|c|c|c|}\n`
					} else {
						texte_corr += `$\\begin{array}{|c|c|c|}\n`
					};
					texte_corr += `\\hline\n`
					texte_corr += `\\text{Facteur n°1} & \\text{Facteur n°2} & \\text{Produit donnant } ${M} \\\\\n`
					texte_corr += `\\hline\n`

					if (nbre_diviseurs_M % 2 == 0) {//si il y a un nombre pair de diviseurs
						for (let m = 0; m < (liste_diviseurs(M).length / 2); m++) {
							texte_corr += liste_diviseurs(M)[m] + ` & ` + liste_diviseurs(M)[(liste_diviseurs(M).length - m - 1)] + `& ${M} \\\\\n`;
							texte_corr += `\\hline\n`;
						};
					} else { // sinon il est impair, cela n'arrive qu'avvec les carrés parfaits
						for (let m = 0; m < ((liste_diviseurs(M).length - 1) / 2); m++) {
							texte_corr += liste_diviseurs(M)[m] + ` & ` + liste_diviseurs(M)[(liste_diviseurs(M).length - m - 1)] + `& ${M} \\\\\n`;
						};
						texte_corr += liste_diviseurs(M)[(nbre_diviseurs_M - 1) / 2] + ` & ` + liste_diviseurs(M)[(nbre_diviseurs_M - 1) / 2] + `& ${M} \\\\\n`;
						texte_corr += `\\hline\n`;
					};
					texte_corr += `\\end{array}\n$`
					if (!sortie_html) {
						texte_corr += `$\\medskip$`;
					};
					texte_corr += `<br>`;
					texte_corr += `${M} a donc ${nbre_diviseurs_M} diviseurs qui sont : `;
					texte_corr += `1`;
					for (let w = 1; w < liste_diviseurs(M).length; w++) {
						texte_corr += ` ; ` + liste_diviseurs(M)[w];
					};
					texte_corr += `.`;
					break;
				case 2: // liste des diviseurs
					// on définit un tableau pour les choix du nombre dont on veut les diviseurs
					// 3 parmis 2,99 y compris les premiers et 1 parmis les entiers à 3 chiffres ayant au moins 8 diviseurs, il y en a 223 !
					let tableau_de_choix = [];
					tableau_de_choix = [randint(2, 99), randint(2, 99, [tableau_de_choix[0]]), randint(2, 99, [tableau_de_choix[0], tableau_de_choix[1]]), randint(2, 99, [tableau_de_choix[0], tableau_de_choix[1], tableau_de_choix[2]])];
					let tableau_de_choix_3chiffres = [];
					for (let m = 101; m < 999; m++) {
						if (liste_diviseurs(m).length > 8) {
							tableau_de_choix_3chiffres.push(m);
						};
					};
					// on ajoute un nombre à trois chiffre avec au moins 8 diviseurs dans les choix possibles
					let rg_Nb_3chiffres = randint(0, (tableau_de_choix_3chiffres.length - 1));
					tableau_de_choix.push(tableau_de_choix_3chiffres[rg_Nb_3chiffres]);

					let N; // on déclare le nombre dont on va chercher les diviseurs
					let rg_N; // pour tirer le rang du nombre dans le tableau des choix
					rg_N = randint(0, (tableau_de_choix.length - 1));
					N = tableau_de_choix[rg_N];
					texte = `Écrire la liste de tous les diviseurs de ${N}.`;
					texte_corr = `Pour trouver la liste des diviseurs de ${N} on cherche tous les produits de deux facteurs qui donnent ${N}. En écrivant toujours le plus petit facteur en premier.<br>`;
					texte_corr += `Il est suffisant de chercher des diviseurs inférieurs au plus grand nombre dont le carré vaut ${N}, par exemple ici, ${Math.trunc(Math.sqrt(N))}$\\times $${Math.trunc(Math.sqrt(N))} = ${Math.trunc(Math.sqrt(N)) * Math.trunc(Math.sqrt(N))}<${N}`;
					texte_corr += ` et ${Math.trunc(Math.sqrt(N)) + 1}$\\times $${Math.trunc(Math.sqrt(N)) + 1} = ${(Math.trunc(Math.sqrt(N)) + 1) * (Math.trunc(Math.sqrt(N)) + 1)}>${N} donc il suffit d'arrêter la recherche de facteur à ${Math.trunc(Math.sqrt(N))}.`;
					texte_corr += ` En effet, si ${N} est le produit de deux entiers p$\\times $q avec p < q alors si p$\\times $p > ${N} c'est que q$\\times $q < ${N} mais dans ce cas p serait supérieur à q sinon p$\\times $q serait inférieur à ${N} ce qui ne doit pas être le cas.<br>`
					if (liste_diviseurs(N).length % 2 == 0) {//si il y a un nombre pair de diviseurs
						for (let m = 0; m < (liste_diviseurs(N).length / 2); m++) {
							texte_corr += `` + liste_diviseurs(N)[m] + `$\\times $` + liste_diviseurs(N)[(liste_diviseurs(N).length - m - 1)] + ` = ${N}<br>`;
						};
					} else {
						for (let m = 0; m < ((liste_diviseurs(N).length - 1) / 2); m++) {
							texte_corr += `` + liste_diviseurs(N)[m] + `$\\times $` + liste_diviseurs(N)[(liste_diviseurs(N).length - m - 1)] + `<br>`;
						};
						texte_corr += `` + liste_diviseurs(N)[(liste_diviseurs(N).length - 1) / 2] + `$\\times $` + liste_diviseurs(N)[(liste_diviseurs(N).length - 1) / 2] + ` = ${N}<br>`;
					};
					texte_corr += `Chacun des facteurs de la liste ci-dessus est un diviseur de ${N}.<br>`;
					texte_corr += `La liste des diviseurs de ${N} est donc `;
					texte_corr += `1`;
					for (let w = 1; w < liste_diviseurs(N).length; w++) {
						texte_corr += ` ; ` + liste_diviseurs(N)[w];
					};
					texte_corr += `.`;
					break;
			};

			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++
		}

		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};


/**
 * Justifier la non primalité réinvestissement des critères de divisibilité
 * Nombres à 3 ou 4 chiffres, un multiple de 2, de 3, de 5, de 7, de 9, de 10, sous forme d'un produit de deux nombres premiers inférieurs à 30
 * et un nombre premier inferieur à 529 
 * 5A12-1
 * @author Sébastien Lozano
 */
function Premier_ou_pas_5e() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Primalité ou pas";
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne = `Justifier que les nombres suivants sont premiers ou pas.`;
	//this.consigne += `<br>`;	
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1;
	this.nb_questions = 7;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 2;
	this.nb_cols_corr = 1;
	this.sup = 1;
	this.liste_packages = `bclogo`;

	this.nouvelle_version = function (numero_de_l_exercice) {
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice, "pdf/FicheArithmetique-5A11.pdf", "Aide mémoire sur les nombres premiers (Sébastien Lozano)", "Aide mémoire")
			this.bouton_aide += modal_video('conteMathsNombresPremiers', 'videos/LesNombresPremiers.mp4', 'Petit conte mathématique - Les Nombres Premiers', 'Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1, 2, 3, 4, 5, 6, 7];
		type_de_questions_disponibles = shuffle(type_de_questions_disponibles); // on mélange l'ordre des questions
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions);

		let string_rappel = `Cette liste des nombres premiers inférieurs à 30 pourra être utile : <br>` + crible_eratosthene_n(100)[0];
		for (let k = 1; k < crible_eratosthene_n(30).length; k++) {
			string_rappel += `, ` + crible_eratosthene_n(30)[k];
		};
		string_rappel += `.`;
		this.introduction = warn_message(string_rappel, `nombres`, `Coup de pouce`);

		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {

			type_de_questions = liste_type_de_questions[i];

			var N; // le nombre de la question

			switch (type_de_questions) {
				case 1: // nombre pair
					N = 2 * randint(51, 4999);
					texte = nombre_avec_espace(N);
					texte_corr = `Comme ${nombre_avec_espace(N)} est pair, il admet donc au moins trois diviseurs qui sont 1, 2 et lui-même, `;
					texte_corr += texte_en_couleur_et_gras(nombre_avec_espace(N) + ` n'est donc pas premier.`);
					break;
				case 2: // Multiple de 3
					let sum3 = 0; // pour la valeur de la somme;
					N = 3 * randint(34, 3333);// on initialise avant la boucle car on a peut être de la chance
					while ((N % 2 == 0) || (N % 5 == 0)) {
						N = 3 * randint(34, 3333);
					};
					texte = nombre_avec_espace(N);
					texte_corr = `Comme ` + N.toString().charAt(0);
					sum3 = Number(N.toString().charAt(0));
					for (let k = 1; k < N.toString().length; k++) {
						texte_corr += ` + ` + N.toString().charAt(k);
						sum3 += Number(N.toString().charAt(k));
					};
					texte_corr += ` = ${sum3} est un multiple de 3 donc ${nombre_avec_espace(N)} aussi, il admet donc au moins trois diviseurs qui sont 1, 3 et lui-même, `;
					texte_corr += texte_en_couleur_et_gras(nombre_avec_espace(N) + ` n'est donc pas premier.`);
					break;
				case 3: // Multiple de 5
					N = 5 * randint(20, 1999);
					texte = nombre_avec_espace(N);
					texte_corr = `Comme le dernier chiffre de ${nombre_avec_espace(N)} est un ${N.toString().charAt(N.toString().length - 1)} alors ${nombre_avec_espace(N)} est divisible par 5, `;
					texte_corr += `il admet donc au moins trois diviseurs qui sont 1, 5 et lui-même, `;
					texte_corr += texte_en_couleur_et_gras(nombre_avec_espace(N) + ` n'est donc pas premier.`);
					break;
				case 4: // Multiple de 9
					let sum9 = 0; // pour la valeur de la somme;
					N = 9 * randint(12, 1111);// on initialise avant la boucle car on a peut être de la chance
					while ((N % 2 == 0) || (N % 5 == 0)) {
						N = 9 * randint(34, 3333);
					};
					texte = nombre_avec_espace(N);
					texte_corr = `Comme ` + N.toString().charAt(0);
					sum9 = Number(N.toString().charAt(0));
					for (let k = 1; k < N.toString().length; k++) {
						texte_corr += ` + ` + N.toString().charAt(k);
						sum9 += Number(N.toString().charAt(k));
					};
					texte_corr += ` = ${sum9} est un multiple de 9 donc ${nombre_avec_espace(N)} aussi, il admet donc au moins trois diviseurs qui sont 1, 9 et lui-même, `;
					texte_corr += texte_en_couleur_et_gras(nombre_avec_espace(N) + ` n'est donc pas premier.`);
					break;
				case 5: // multiple de 10
					N = 10 * randint(10, 999);
					texte = nombre_avec_espace(N);
					texte_corr = `Comme le nombre ${nombre_avec_espace(N)} se termine par un ${N.toString().charAt(N.toString().length - 1)} alors ${nombre_avec_espace(N)} est un multiple de 10, `;
					texte_corr += `il admet donc au moins trois diviseurs qui sont 1, 10 et lui-même, `;
					texte_corr += texte_en_couleur_et_gras(nombre_avec_espace(N) + ` n'est donc pas premier.`);
					break;
				case 6: // produit de deux nombres premiers inférieurs à 30
					// rang du premier facteur premier
					let r1 = randint(0, crible_eratosthene_n(30).length - 1);
					// rang du second facteur premier
					let r2 = randint(0, crible_eratosthene_n(30).length - 1);
					let prime1 = crible_eratosthene_n(100)[r1]; // on tire un nombre premier inférieur à 100, il n'y en a que 25!
					let prime2 = crible_eratosthene_n(100)[r2]; // on tire un autre nombre premier inférieur à 100, ça peut être le même qu'avant!
					N = prime1 + `$\\times $` + prime2;
					texte = N;
					texte_corr = `${N} est le produit de ${prime1} et de ${prime2}, il admet donc au moins `;
					if (prime1 == prime2) {
						texte_corr += `trois divisieurs qui sont 1, ${prime1} et lui-même ${N}=${nombre_avec_espace(prime1 * prime2)} `;
					} else {
						texte_corr += `quatre diviseurs qui sont 1, ${prime1}, ${prime2} et lui-même ${N}=${nombre_avec_espace(prime1 * prime2)}, `;
					};
					texte_corr += texte_en_couleur_et_gras(`${N} = ` + nombre_avec_espace(prime1 * prime2) + ` n'est donc pas premier.`);
					break;
				case 7: // nombre premier inférieur à 29
					// rang du nombre premier choisi
					let r = randint(0, crible_eratosthene_n(29).length - 1);
					N = crible_eratosthene_n(29)[r]; //on choisit un nombre premier inférieur à 529
					texte = N + ``;
					let tab_premiers_a_tester = crible_eratosthene_n(N);
					//texte_corr = `Testons la divisibilité de ${N} par tous les nombres premiers inférieurs à $\\sqrt{${N}}$, c'est à dire par les nombres `;
					texte_corr = `En effectuant la division euclidienne de ${N} par tous les nombres premiers inférieurs à $\\sqrt{${N}}$, c'est à dire par les nombres `;
					texte_corr += tab_premiers_a_tester[0];
					for (let k = 1; k < tab_premiers_a_tester.length; k++) {
						texte_corr += `, ` + tab_premiers_a_tester[k];
					};
					//texte_corr += `.`;
					// texte_corr += `<br> Aucun de ces nombres premiers ne divise ${N}, `;
					texte_corr += `, le reste n'est jamais nul.`;
					// texte_corr += texte_en_couleur_et_gras(nombre_avec_espace(N) + ` est donc un nombre premier.`);
					texte_corr += `<br>` + texte_en_couleur_et_gras(nombre_avec_espace(N) + ` est donc un nombre premier.`);
					break;
			};

			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++
		}

		liste_de_question_to_contenu(this);
	}

};

/**
 * Trouver l'image d'une figure par une symétrie centrale dans un pavage (7 motifs différents)
 * @Auteur Jean-Claude Lhote
 * fonction servant à tous les niveaux
 * Pas de version Latex !
 * Références 5G12-1, 6G25-2, 4G11, 3G12
 */
function Pavages_et_transformations() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	//	this.titre = "Trouver l'image d'une figure par une symétrie centrale";
	this.pas_de_version_LaTeX = true;
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//	this.sup = 1; // 1 pour symétrie axiale, 2 pour symétrie centrale, 3 pour translations, et 4 pour rotations ; paramètre fixé par les variantes respectives.
	sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;
	this.liste_packages = 'tkz-euclide';
	this.nouvelle_version = function (numero_de_l_exercice) {
		this.type_exercice = 'MG32';
		this.MG32editable = false;
		this.taille_div_MG32 = [700, 700];
		this.liste_questions = [];
		this.liste_corrections = []; // Liste de questions corrigées
		//listes de pavages [nx,ny,xB,yB,xC,yC,xD,yD,zoom,anngle]  : 0=carrés, 1=cerf-volant 2=quadri concave 3=quadri quelconque 4=parallélogrammes 5=triangles rectangles isocèles 6=triangles équilatéraux 7=losanges
		let paves = [[5, 5, 4, 0, 4, 4, 0, 4, 22, 0], [5, 5, 6, 0, 8, 8, 0, 6, 40, -9], [5, 5, 8, 0, 4, 4, 2, 8, 30, -10], [5, 5, 4, 0, 6, 4, 0, 6, 28, -15], [4, 6, 8, 0, 7, 4, -1, 4, 32, 0], [5, 5, 8, 0, 4, 4, 0, 8, 40, 0], [5, 5, 4, 0, 3, 2 * Math.sin(Math.PI / 3), 2, 4 * Math.sin(Math.PI / 3), 15, 0], [4, 4, 3, 1, 4, 4, 1, 3, 20, 0]]

		let texte, texte_corr
		let tabfigA = [], tabfigB = [], tabfigC = [], tabfigD = []
		let pave = []
		switch (parseInt(this.sup)) {
			case 1:
				pave = paves[0] // pavages adaptés à symétrie axiale (carrés)
				break
			case 2:
				pave = paves[randint(0, 7)] // pavages adaptés à symétrie centrale (tous)
				break
			case 3:
				pave = paves[randint(0, 7)] //pavages adaptés à translation (tous)
				break
			case 4:
				pave = paves[0] // pavages adaptés à rotation (carrés  )
		}
		let nx = pave[0], ny = pave[1], xB = pave[2], yB = pave[3], xC = pave[4], yC = pave[5], xD = pave[6], yD = pave[7], Zoom = pave[8], Angle = pave[9]
		let xAI = xB + xC - xD
		let yAI = yB + yC - yD
		let xAJ = xC + xD - xB
		let yAJ = yC + yD - yB
		let xAxy, yAxy, numAxy
		let point = [0, 0, 0]
		let trouver = false, indexA, numA, indexcentre1, numcentre1, xmil1 = 0, ymil1 = 0, indexD, numD, indexcentre2, numcentre2, xmil2 = 0, ymil2 = 0, indexC, numC, indexcentre3, numcentre3, xmil3 = 0, ymil3 = 0, num1, num2, num3
		let xc = 0, yc = 0, xb = 0, yb = 0, xa = 0, ya = 0, xV1 = 0, yV1 = 0, xV2 = 0, yV2 = 0, xV3 = 0, yV3 = 0
		let s0 = choice([`S`, `T`, `L`, `W`, `R`, `G`, `E`, `F`, `G`, `K`])
		let s1 = choice([`S`, `T`, `L`, `W`, `R`, `G`, `E`, `F`, `G`, `K`], [s0])
		let s2 = choice([`S`, `T`, `L`, `W`, `R`, `G`, `E`, `F`, `G`, `K`], [s0, s1])


		for (let y = 0; y < ny; y++) {  // On initialise les tableaux avec les coordonnées des points de référence (A,B,C et D) de chaque translaté et son numéro dans le pavage.
			for (let x = 0; x < nx; x++) {
				xAxy = x * xAI + y * xAJ
				yAxy = x * yAI + y * yAJ
				numAxy = 2 * x + 4 * y * nx
				tabfigA.push([xAxy, yAxy, numAxy])
				tabfigB.push([xAxy + xB, yAxy + yB, numAxy + 1])
				tabfigD.push([xAxy + xD, yAxy + yD, numAxy + 2 * nx])
				tabfigC.push([xAxy + xC, yAxy + yC, numAxy + 2 * nx + 1])
			}
		}

		texte = `Le point O peut être déplacé pour recadrer éventuellement le pavage.<br>` // La figure énoncé a la même base pour toutes les transformations.

		switch (parseInt(this.sup)) {
			case 1: //symétrie axiale
				this.MG32codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+0euFAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAQL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAVBbmdsZQABMAAAAAEAAAAAAAAAAAAAAAIA#####wAEWm9vbQACMzAAAAABQD4AAAAAAAAAAAACAP####8AAm54AAE1AAAAAUAUAAAAAAAA#####wAAAAEABUNGb25jAP####8AB21vZHVsb3gACG1vZCh4LDIp#####wAAAAEADUNGb25jdGlvbjJWYXIG#####wAAAAIAEUNWYXJpYWJsZUZvcm1lbGxlAAAAAAAAAAFAAAAAAAAAAAABeAAAAAMA#####wAHbW9kdWxveQASbW9kKGludCh5L254LzIpLDIpAAAABAb#####AAAAAgAJQ0ZvbmN0aW9uAv####8AAAABAApDT3BlcmF0aW9uAwAAAAcDAAAABQAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAAwAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAABeQAAAAMA#####wACcjAAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTApLDEsMCn#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAHAgAAAAcI#####wAAAAEADkNBcHBlbEZvbmN0aW9uAAAABAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAgD#####AAJ5RAABNAAAAAFAEAAAAAAAAAAAAAIA#####wACeEQAATAAAAABAAAAAAAAAAAAAAACAP####8AAnlDAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ4QwABNAAAAAFAEAAAAAAAAAAAAAIA#####wACeUIAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhCAAE0AAAAAUAQAAAAAAAA#####wAAAAEACkNQb2ludEJhc2UA#####wAAAAAAEAABTwDAMgAAAAAAAMAzAAAAAAAABQABQEXAAAAAAABASkKPXCj1w#####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####Af8AAAEQAAABAAIAAAANAD#3Cj1wo9cK#####wAAAAEACUNSb3RhdGlvbgD#####AAAADQAAAAFAVoAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACAAAAAL#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQGeAAAAAAAAAAAAOAAAADQD#####AAAADQAAAAgAAAAB#####wAAAAEAC0NQb2ludEltYWdlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAEv####8AAAABAA5DUG9pbnRMaWVQb2ludAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAE#####8AAAABAAlDQ2VyY2xlT0EA#####wH#AAAAAgAAAA0AAAAU#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wH#AAAADQAAAQACAAAADQAAABT#####AAAAAQAQQ0RlbWlEcm9pdGVJbWFnZQD#####Af8AAAANAAABAAIAAAAWAAAAD#####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAXAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAGAAAABAA#####wH#AAAAEAACSicAAAAAAAAAAABACAAAAAAAAAUAAAAAFAAAABAAAAAQAP####8B#wAAABAAAkknAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAAAQ#####wAAAAIAB0NSZXBlcmUA#####wDm5uYBAQAAAA0AAAAbAAAAGgAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8B#wAAARAAAkInAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAADAAAAAgAAAALAAAAEQD#####AQAAAAAQAAFCAEAAAAAAAAAAwDcAAAAAAAAFAAAAAB0AAAAYAP####8B#wAAARAAAkQnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACAAAAAgAAAAHAAAAEQD#####AQAAAAAQAAFEAMAxAAAAAAAAwCoAAAAAAAAFAAAAAB8AAAAYAP####8B#wAAARAAAkMnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACgAAAAgAAAAJAAAAEQD#####AQAAAAAQAAFDAEAIAAAAAAAAv#AAAAAAAAAFAAAAACEAAAACAP####8AAnhhAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ5YQABOAAAAAFAIAAAAAAAAAAAAAIA#####wAEbnVtYQABMAAAAAEAAAAAAAAAAAAAAAIA#####wACeGMAAjE4AAAAAUAyAAAAAAAAAAAAAgD#####AAJ5YwACMTIAAAABQCgAAAAAAAAAAAAYAP####8BAAAAABAAAWEAQBAAAAAAAADAMwAAAAAAAAUAAAAAHAAAAAgAAAAjAAAACAAAACQAAAAYAP####8BAAAAABAAAWMAQAgAAAAAAADAMQAAAAAAAAUAAAAAHAAAAAgAAAAmAAAACAAAACcAAAAOAP####8AAAANAAAABwMAAAABP#AAAAAAAAAAAAAKAAAABgAAAAgAAAAlAAAAEAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAACoAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAAKgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACIAAAAqAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAACr#####AAAAAQAMQ1RyYW5zbGF0aW9uAP####8AAAANAAAAKAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACsAAAAvAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALAAAAC8AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAtAAAALwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAC4AAAAvAAAAAgD#####AAJueQABNQAAAAFAFAAAAAAAAAAAAAMA#####wACcjMAJXNpKChtb2R1bG94KHgpPTEpKihtb2R1bG95KHgpPTEpLDEsMCkAAAAJAAAAAAcCAAAABwgAAAAKAAAABAAAAAUAAAAAAAAAAT#wAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAwD#####AAJyMgAlc2koKG1vZHVsb3goeCk9MCkqKG1vZHVsb3koeCk9MSksMSwwKQAAAAkAAAAABwIAAAAHCAAAAAoAAAAEAAAABQAAAAAAAAABAAAAAAAAAAAAAAAHCAAAAAoAAAAFAAAABQAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAAAAAABAAAAAAAAAAAAAXgAAAADAP####8AAnIxACVzaSgobW9kdWxveCh4KT0xKSoobW9kdWxveSh4KT0wKSwxLDApAAAACQAAAAAHAgAAAAcIAAAACgAAAAQAAAAFAAAAAAAAAAE#8AAAAAAAAAAAAAcIAAAACgAAAAUAAAAFAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAEAAAAAAAAAAAABeAAAAAIA#####wAFbWluaTEAAjEwAAAAAUAkAAAAAAAAAAAAAgD#####AAVtYXhpMQACNDAAAAABQEQAAAAAAAAAAAACAP####8ABHBhczEAATEAAAABP#AAAAAAAAD#####AAAAAgAMQ0NvbW1lbnRhaXJlAP####8BAAAAAMAxAAAAAAAAwC4AAAAAAAAAAAANEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAUEAAAACAP####8ABW1pbmkyAAMtMzD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUA+AAAAAAAAAAAAAgD#####AAVtYXhpMgACMzAAAAABQD4AAAAAAAAAAAACAP####8ABHBhczIAATEAAAABP#AAAAAAAAD#####AAAAAQAHQ01pbGlldQD#####AQAAAAEQAAJKMQAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAAIv####8AAAABABFDU3ltZXRyaWVDZW50cmFsZQD#####AAAAPwAAABAA#####wEAAAABEAABSgAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAAQAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABAAAAAHAD#####AQAAAAEQAAJJMQAAAAAAAAAAAEAIAAAAAAAABQAAAAAiAAAAHgAAAB0A#####wAAAEMAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAARAAAABAA#####wEAAAABEAABSQAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAARAAAABkA#####wAAAA0AAAAiAAAAEAD#####AQAAAAEQAAFBAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABHAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAEcAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAARwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACAAAABH#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAABAAAABQAAACAAAABBAAAAQgAAACIAAAAgAAAAHgD#####AAAAAAABAAAABQAAAB4AAAAiAAAARQAAAEYAAAAeAAAAHgD#####AAAAAAABAAAABQAAAEgAAABLAAAASQAAAEoAAABIAAAAHgD#####AAAAAAABAAAABQAAAA0AAAAgAAAAIgAAAB4AAAANAAAAFgD#####AP8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAABgAAAAXAP####8A5ubmAAEAAAANAAAARgAAAEEAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAD#####AAAAAQARQ1BvaW50UGFyQWJzY2lzc2UA#####wEAAAAAEAABVQAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAARgAAAAcBAAAACAAAAAMAAAABP#AAAAAAAAAAAAAfAP####8BAAAAABAAAVYAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEEAAAAHAQAAAAgAAAA0AAAAAT#wAAAAAAAA#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAA0AAABSAAAAIAD#####AQAAAAAQAAABAAEAAAANAAAAUwAAAA8A#####wEAAAAAEAACVTEAAAAAAAAAAABACAAAAAAAAAUAAT#TA9Z22dUpAAAAVAAAABkA#####wAAAA0AAABTAAAAEAD#####AQAAAAAQAAJWMQAAAAAAAAAAAEAIAAAAAAAABQAAAABWAAAAVwAAACAA#####wEAAAAAEAAAAQABAAAAVgAAAFgAAAAPAP####8BAAAAABAAAlUyAAAAAAAAAAAAQAgAAAAAAAAFAAE#1tGzvqNnfgAAAFkAAAAZAP####8AAAANAAAAWgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABbAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAAFsAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAiAAAAWwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB4AAABbAAAAHgD#####AQAAAAABAAAABQAAAFwAAABdAAAAXgAAAF8AAABcAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARQAAAFsAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABGAAAAWwAAAB4A#####wEAAAAAAQAAAAUAAABfAAAAXgAAAGEAAABiAAAAXwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEEAAABbAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAQgAAAFsAAAAeAP####8BAAAAAAEAAAAFAAAAXQAAAGQAAABlAAAAXgAAAF0AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABIAAAAWwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEsAAABbAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASQAAAFsAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABKAAAAWwAAAB4A#####wEAAAAAAQAAAAUAAABnAAAAaAAAAGkAAABqAAAAZ#####8AAAACAAhDTWVzdXJlWAD#####AAF4AAAAUQAAAFr#####AAAAAgAIQ01lc3VyZVkA#####wABeQAAAFEAAABaAAAAAgD#####AAJ4MQAMaW50KHgrMC4wMDEpAAAABgIAAAAHAAAAAAgAAABsAAAAAT9QYk3S8an8AAAAAgD#####AAJ5MQAMaW50KHkrMC4wMDEpAAAABgIAAAAHAAAAAAgAAABtAAAAAT9QYk3S8an8AAAAAgD#####AANudW0ADHgxKjIrbngqNCp5MQAAAAcAAAAABwIAAAAIAAAAbgAAAAFAAAAAAAAAAAAAAAcCAAAABwIAAAAIAAAAAwAAAAFAEAAAAAAAAAAAAAgAAABvAAAAHAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAWgAAAF7#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAP####8BAAAAAMAmAAAAAAAAwCP#######AAAABxEgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHAAAAACAP####8ABG51bTEABW51bSsxAAAABwAAAAAIAAAAcAAAAAE#8AAAAAAAAAAAAAIA#####wAEbnVtJwAIbnVtK254KjIAAAAHAAAAAAgAAABwAAAABwIAAAAIAAAAAwAAAAFAAAAAAAAAAAAAAAIA#####wAFbnVtJzEABm51bScrMQAAAAcAAAAACAAAAHQAAAABP#AAAAAAAAAAAAAcAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABdAAAAZQAAABwA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAF4AAABpAAAAHAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAXwAAAGEAAAAjAP####8BAAAAAMAmAAAAAAAAwCQAAAAAAAAAAAB4EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHMAAAAjAP####8BAAAAAMAkAAAAAAAAwCQAAAAAAAAAAAB2EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHQAAAAjAP####8BAAAAAMAiAAAAAAAAwCAAAAAAAAAAAAB3EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHX#####AAAAAgASQ0xpZXVPYmpldFBhclB0TGllAP####8BAAAAAAAAYAAAAAgAAAA0AAAAWgAAAAcAAABaAAAAWwAAAFwAAABdAAAAXgAAAF8AAABgAAAAJAD#####AQAAAAAAAGYAAAAIAAAANAAAAFoAAAAHAAAAWgAAAFsAAABdAAAAXgAAAGQAAABlAAAAZgAAACQA#####wEAAAAAAABrAAAACAAAADQAAABaAAAABwAAAFoAAABbAAAAZwAAAGgAAABpAAAAagAAAGsAAAAkAP####8BAAAAAAAAYwAAAAgAAAA0AAAAWgAAAAcAAABaAAAAWwAAAF4AAABfAAAAYQAAAGIAAABjAAAAJAD#####AAAAAAAAAHwAAAAIAAAAAwAAAFYAAAALAAAAVgAAAFgAAABZAAAAWgAAAFsAAABcAAAAXQAAAF4AAABfAAAAYAAAAHwAAAAkAP####8AAAAAAAAAfwAAAAgAAAADAAAAVgAAAAsAAABWAAAAWAAAAFkAAABaAAAAWwAAAF4AAABfAAAAYQAAAGIAAABjAAAAfwAAACQA#####wAAAAAAAAB+AAAACAAAAAMAAABWAAAACwAAAFYAAABYAAAAWQAAAFoAAABbAAAAZwAAAGgAAABpAAAAagAAAGsAAAB+AAAAJAD#####AAAAAAAAAH0AAAAIAAAAAwAAAFYAAAALAAAAVgAAAFgAAABZAAAAWgAAAFsAAABdAAAAXgAAAGQAAABlAAAAZgAAAH0AAAAkAP####8BAAAAAAAAcgAAAAgAAAA0AAAAWgAAAAoAAABaAAAAWwAAAF4AAABsAAAAbQAAAG4AAABvAAAAcAAAAHEAAAByAAAAJAD#####AAAAAAAAAIQAAAAIAAAAAwAAAFYAAAAOAAAAVgAAAFgAAABZAAAAWgAAAFsAAABeAAAAbAAAAG0AAABuAAAAbwAAAHAAAABxAAAAcgAAAIQAAAAkAP####8BAAAAAAAAeQAAAAgAAAA0AAAAWgAAAAwAAABaAAAAWwAAAF8AAABhAAAAbAAAAG0AAABuAAAAbwAAAHAAAABzAAAAeAAAAHkAAAAkAP####8AAAAAAAAAhgAAAAgAAAADAAAAVgAAABAAAABWAAAAWAAAAFkAAABaAAAAWwAAAF8AAABhAAAAbAAAAG0AAABuAAAAbwAAAHAAAABzAAAAeAAAAHkAAACGAAAAJAD#####AQAAAAAAAHsAAAAIAAAANAAAAFoAAAANAAAAWgAAAFsAAABeAAAAaQAAAGwAAABtAAAAbgAAAG8AAABwAAAAdAAAAHUAAAB3AAAAewAAACQA#####wAAAAAAAACIAAAACAAAAAMAAABWAAAAEQAAAFYAAABYAAAAWQAAAFoAAABbAAAAXgAAAGkAAABsAAAAbQAAAG4AAABvAAAAcAAAAHQAAAB1AAAAdwAAAHsAAACIAAAAJAD#####AQAAAAAAAHoAAAAIAAAANAAAAFoAAAAMAAAAWgAAAFsAAABdAAAAZQAAAGwAAABtAAAAbgAAAG8AAABwAAAAdAAAAHYAAAB6AAAAJAD#####AAAAAAAAAIoAAAAIAAAAAwAAAFYAAAAQAAAAVgAAAFgAAABZAAAAWgAAAFsAAABdAAAAZQAAAGwAAABtAAAAbgAAAG8AAABwAAAAdAAAAHYAAAB6AAAAiv####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAABGAAAAIQAAAACMAAJ4MgAAABwAAABGAAAAIgAAAACMAAJ5MgAAABwAAABGAAAAGgEAAACMAf8AAABAHAAAAAAAAAAAAAAAAAAAAAAARhAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAAQQAAACEAAAAAkAACeDIAAAAcAAAAQQAAACIAAAAAkAACeTIAAAAcAAAAQQAAABoBAAAAkAH#AAAAQBwAAAAAAADANQAAAAAAAAAAAEEQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAlAP####8AKUFmZmljaGFnZSBkJ8OpcXVhdGlvbiBkZSBkcm9pdGUgb3UgY2VyY2xlAAAAAgAAAAEAAAACAAAAHAAAACAAAAAhAAAAAJQAAngyAAAAHAAAACAAAAAiAAAAAJQAAnkyAAAAHAAAACAAAAAaAQAAAJQB#wAAAL#wAAAAAAAAQAAAAAAAAAAAAAAgEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAFygjVmFsKHgyLDEpLCNWYWwoeTIsMikpAAAAJQD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAAAeAAAAIQAAAACYAAJ4MgAAABwAAAAeAAAAIgAAAACYAAJ5MgAAABwAAAAeAAAAGgEAAACYAf8AAAC#8AAAAAAAAD#########gAAAAHhAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAAIgAAACEAAAAAnAACeDIAAAAcAAAAIgAAACIAAAAAnAACeTIAAAAcAAAAIgAAABoBAAAAnAH#AAAAQBgAAAAAAADANQAAAAAAAAAAACIQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAQAP####8B#wAAARAAAkExAMA3AAAAAAAAv#AAAAAAAAAFAAAAACIAAABHAAAAJQD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAACgAAAAIQAAAAChAAJ4MgAAABwAAACgAAAAIgAAAAChAAJ5MgAAABwAAACgAAAAGgEAAAChAf8AAABAEAAAAAAAAMAzAAAAAAAAAAAAoBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAAAIA#####wACeGIAATAAAAABAAAAAAAAAAAAAAACAP####8AAnliAAIxNgAAAAFAMAAAAAAAAAAAAAIA#####wAEbnVtYgACMTAAAAABQCQAAAAAAAAAAAACAP####8ABG51bWMAAjMzAAAAAUBAgAAAAAAAAAAAGAD#####AQAAAAAQAAFiAEAIAAAAAAAAwDL#######gFAAAAABwAAAAIAAAApQAAAAgAAACmAAAAHgD#####AAAAAAABAAAABQAAACsAAAAsAAAALQAAAC4AAAArAAAAHgD#####ACy4LAABAAAABQAAADAAAAAxAAAAMgAAADMAAAAw#####wAAAAEAEENTdXJmYWNlUG9seWdvbmUA#####wAAfwAAAAAFAAAAqwAAAA4A#####wAAAA0AAAAHAwAAAAE#8AAAAAAAAAAAAAoAAAA2AAAACAAAAKcAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAAgAAAArQAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAEEAAACtAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAQgAAAK0AAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAAiAAAArQAAAB4A#####wAAAAAAAQAAAAUAAACuAAAArwAAALAAAACxAAAArgAAABkA#####wAAAA0AAACpAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAArgAAALMAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACvAAAAswAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAALAAAACzAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAsQAAALMAAAAeAP####8A#wAAAAEAAAAFAAAAtAAAALUAAAC2AAAAtwAAALQAAAAmAP####8A#wAAAAAABQAAALgAAAAZAP####8AAAANAAAAKf####8AAAABAAtDTWFjcm9QYXVzZQD#####AAAAAAH#####EECO9AAAAAAAQEHCj1wo9cMCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAgAAAA4A#####wAAAA0AAAAHAwAAAAE#8AAAAAAAAAAAAAoAAAA1AAAACAAAAKgAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABIAAAAvAAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEsAAAC8AAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASQAAALwAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABKAAAAvAAAAB4A#####wH#AAAAAQAAAAUAAAC9AAAAvgAAAL8AAADAAAAAvQAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAL0AAAC6AAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAvgAAALoAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAC#AAAAugAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAMAAAAC6AAAAHgD#####AAAAfwABAAAABQAAAMIAAADDAAAAxAAAAMUAAADCAAAAJgD#####AAAA#wAAAAUAAADGAAAAAgD#####AAN4YzEAAjMyAAAAAUBAAAAAAAAAAAAAAgD#####AAN5YzEAAjIwAAAAAUA0AAAAAAAAAAAAGAD#####AQB#AAAQAAJjMQBAAAAAAAAAAMA5AAAAAAAABQAAAAAcAAAACAAAAMgAAAAIAAAAyf####8AAAABAAlDRHJvaXRlT20A#####wAAfwAAEAAAAQACAAAAHAAAAMoAAAAbAAAAAT#wAAAAAAAA#####wAAAAEAD0NTeW1ldHJpZUF4aWFsZQD#####AAAAywAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADAAAADMAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMQAAAMwAAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAyAAAAzAAAABAA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADMAAADMAAAAHgD#####AQB#AAABAAAABQAAAM0AAADOAAAAzwAAANAAAADNAAAAJgD#####AQB#AAAAAAUAAADRAAAADwD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAcAnnHHHHHHHAAAADgAAABkA#####wAAAA0AAABGAAAAGQD#####AAAADQAAAFIAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADTAAAA1QAAACAA#####wH#AAAAEAAAAQACAAAA0wAAANYAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADTAAAA1AAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAANYAAADUAAAAIAD#####AQB#AAAQAAABAAIAAADYAAAA2f####8AAAABABBDSW50RHJvaXRlRHJvaXRlAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADLAAAA2gAAABoA#####wAAfwAAwDoAAAAAAADAPgAAAAAAAAAAANsQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgxKSkAAAACAP####8AA3hjMgABNAAAAAFAEAAAAAAAAAAAAAIA#####wADeWMyAAEwAAAAAQAAAAAAAAAAAAAAAgD#####AAN4YzMAATgAAAABQCAAAAAAAAAAAAACAP####8AA3ljMwABNAAAAAFAEAAAAAAAAAAAABgA#####wH#AAAAEAACYzIAAAAAAAAAAABACAAAAAAAAAUAAAAAHAAAAAgAAADdAAAACAAAAN4AAAAYAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAcAAAACAAAAN0AAAAIAAAA3gAAABgA#####wH#AAAAEAACYzMAAAAAAAAAAABACAAAAAAAAAUAAAAAHAAAAAgAAADfAAAACAAAAOAAAAACAP####8AAnhWAAEwAAAAAQAAAAAAAAAAAAAAAgD#####AAJ5VgABMAAAAAEAAAAAAAAAAAAAAAIA#####wADeFYyAAEwAAAAAQAAAAAAAAAAAAAAAgD#####AAN5VjIAATAAAAABAAAAAAAAAAAAAAACAP####8AA3hWMwABMAAAAAEAAAAAAAAAAAAAAAIA#####wADeVYzAAEwAAAAAQAAAAAAAAAAAAAAKAD#####AP8AAAAQAAABAAIAAAAcAAAA4QAAAAE#8AAAAAAAAAAAACkA#####wAAAOoAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAC0AAAA6wAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAALUAAADrAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAtgAAAOsAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAC3AAAA6wAAAB4A#####wH#AAAAAQAAAAUAAADsAAAA7QAAAO4AAADvAAAA7AAAACYA#####wH#AAAAAAAFAAAA8P####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8AAAD#ABAAAAEAAgAAAOMAAAAOAAAAGQD#####AAAA0wAAANkAAAAqAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADqAAAA1wAAABoA#####wD#AAAAwEYAAAAAAADAPAAAAAAAAAAAAPQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgyKSkAAAAqAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAOAAAA8gAAABoA#####wAAAP8AwD0AAAAAAADACAAAAAAAAAAAAPYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgzKSkAAAAfAP####8BAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAAHwAAAAcAAAAABwIAAAAIAAAANAAAAAFAAAAAAAAAAAAAAAE#8AAAAAAAAAAAABEA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAPgAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAD5AAAA1AAAABAA#####wEAAP8AEAABWQAAAAAAAAAAAEAIAAAAAAAABQAAAAD6AAAA8wAAACAA#####wH#AAAAEAAAAQABAAAA+gAAAPsAAAAqAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADqAAAA#AAAABoA#####wD#AAAAwDUAAAAAAADAAAAAAAAAAAAAAP0QAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgyKSkAAAAgAP####8BAH8AABAAAAEAAQAAAPgAAAD7AAAAKgD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAywAAAP8AAAAaAP####8AAH8AAL#wAAAAAAAAP#AAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMSkp################"
				this.MG32codeBase64corr = "TWF0aEdyYXBoSmF2YTEuMAAAABI+0euFAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAT7#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAVBbmdsZQABMAAAAAEAAAAAAAAAAAAAAAIA#####wAEWm9vbQACMzAAAAABQD4AAAAAAAAAAAACAP####8AAm54AAE1AAAAAUAUAAAAAAAAAAAAAgD#####AAJ5RAABNAAAAAFAEAAAAAAAAAAAAAIA#####wACeEQAATAAAAABAAAAAAAAAAAAAAACAP####8AAnlDAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ4QwABNAAAAAFAEAAAAAAAAAAAAAIA#####wACeUIAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhCAAE0AAAAAUAQAAAAAAAA#####wAAAAEACkNQb2ludEJhc2UA#####wAAAAAAEAABTwDAMgAAAAAAAMAzAAAAAAAABQABQEbAAAAAAABAU2FHrhR64v####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####Af8AAAEQAAABAAIAAAAKAD#3Cj1wo9cK#####wAAAAEACUNSb3RhdGlvbgD#####AAAACgAAAAFAVoAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAACv####8AAAABAApDT3BlcmF0aW9uAwAAAAE#8AAAAAAAAP####8AAAABAA9DUmVzdWx0YXRWYWxldXIAAAAC#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAUBngAAAAAAAAAAACwAAAAUA#####wAAAAoAAAAIAAAAAf####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADgAAAA######AAAAAQAOQ1BvaW50TGllUG9pbnQA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABD#####AAAAAQAJQ0NlcmNsZU9BAP####8B#wAAAAIAAAAKAAAAEf####8AAAABAA1DRGVtaURyb2l0ZU9BAP####8B#wAAAA0AAAEAAgAAAAoAAAAR#####wAAAAEAEENEZW1pRHJvaXRlSW1hZ2UA#####wH#AAAADQAAAQACAAAAEwAAAAz#####AAAAAQAQQ0ludERyb2l0ZUNlcmNsZQD#####AAAAFAAAABL#####AAAAAQAQQ1BvaW50TGllQmlwb2ludAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAABUAAAAKAP####8B#wAAABAAAkonAAAAAAAAAAAAQAgAAAAAAAAFAAAAABEAAAANAAAACgD#####Af8AAAAQAAJJJwAAAAAAAAAAAEAIAAAAAAAABQAAAAAWAAAADf####8AAAACAAdDUmVwZXJlAP####8A5ubmAQEAAAAKAAAAGAAAABcAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAD#####AAAAAQAQQ1BvaW50RGFuc1JlcGVyZQD#####Af8AAAEQAAJCJwAAAAAAAAAAAEAIAAAAAAAABQAAAAAZAAAACAAAAAkAAAAIAAAACAAAAAsA#####wEAAAAAEAABQgBAAAAAAAAAAMA3AAAAAAAABQAAAAAaAAAAEgD#####Af8AAAEQAAJEJwAAAAAAAAAAAEAIAAAAAAAABQAAAAAZAAAACAAAAAUAAAAIAAAABAAAAAsA#####wEAAAAAEAABRADAMQAAAAAAAMAqAAAAAAAABQAAAAAcAAAAEgD#####Af8AAAEQAAJDJwAAAAAAAAAAAEAIAAAAAAAABQAAAAAZAAAACAAAAAcAAAAIAAAABgAAAAsA#####wEAAAAAEAABQwBACAAAAAAAAL#wAAAAAAAABQAAAAAeAAAAAgD#####AAJueQABNQAAAAFAFAAAAAAAAP####8AAAABAAdDTWlsaWV1AP####8BAAAAARAAAkkxAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAAAb#####wAAAAEAEUNTeW1ldHJpZUNlbnRyYWxlAP####8AAAAhAAAACgD#####AQAAAAEQAAFJAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB0AAAAi#####wAAAAEAEUNQb2ludFBhckFic2Npc3NlAP####8BAAAAABAAAVUAAAAAAAAAAABACAAAAAAAAAUAAAAACgAAACMAAAAHAQAAAAgAAAADAAAAAT#wAAAAAAAAAAAACQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAcAnnHHHHHHHAAAAC#####8AAAABAAxDVHJhbnNsYXRpb24A#####wAAAAoAAAAjAAAAFgD#####AAAACgAAACQAAAAKAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAlAAAAJwAAAAoA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACgAAAAmAAAAFgD#####AAAAJQAAACkAAAAVAP####8BAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAKAAAAHAAAAAcAAAAABwIAAAAIAAAAIAAAAAFAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAsA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACsAAAAKAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAsAAAAJgAAAAoA#####wEAAP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAC0AAAAqAAAAAgD#####AAN4YzIAATAAAAABAAAAAAAAAAAAAAACAP####8AA3ljMgABMAAAAAEAAAAAAAAAAAAAABIA#####wH#AAAAEAACYzIAAAAAAAAAAABACAAAAAAAAAUAAAAAGQAAAAgAAAAvAAAACAAAADD#####AAAAAQAJQ0Ryb2l0ZU9tAP####8B#wAAABAAAAEAAgAAABkAAAAxAAAAAT#wAAAAAAAA#####wAAAAEACENTZWdtZW50AP####8B#wAAABAAAAEAAQAAAC0AAAAu#####wAAAAEAEENJbnREcm9pdGVEcm9pdGUA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADIAAAAz#####wAAAAIADENDb21tZW50YWlyZQD#####Af8AAADANQAAAAAAAMAAAAAAAAAAAAAANBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAgoZCNMKDIpKQAAAAIA#####wADeGMxAAIyNgAAAAFAOgAAAAAAAAAAAAIA#####wADeWMxAAIyNgAAAAFAOgAAAAAAAAAAABIA#####wEAfwAAEAACYzEAQAAAAAAAAADAOQAAAAAAAAUAAAAAGQAAAAgAAAA2AAAACAAAADcAAAAXAP####8BAH8AABAAAAEAAgAAABkAAAA4#####wAAAAEADENNb2luc1VuYWlyZQAAAAE#8AAAAAAAAAAAABgA#####wEAAP8AEAAAAQABAAAALAAAAC4AAAAZAP####8BAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA5AAAAOgAAABoA#####wEAfwABAAAAOxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAgoZCNMKDEpKf####8AAAABAAVDRm9uYwD#####AAdtb2R1bG94AAhtb2QoeCwyKf####8AAAABAA1DRm9uY3Rpb24yVmFyBv####8AAAACABFDVmFyaWFibGVGb3JtZWxsZQAAAAAAAAABQAAAAAAAAAAAAXgAAAAcAP####8AB21vZHVsb3kAEm1vZChpbnQoeS9ueC8yKSwyKQAAAB0G#####wAAAAIACUNGb25jdGlvbgIAAAAHAwAAAAcDAAAAHgAAAAAAAAAIAAAAAwAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAABeQAAABwA#####wACcjAAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTApLDEsMCn#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAHAgAAAAcI#####wAAAAEADkNBcHBlbEZvbmN0aW9uAAAAPQAAAB4AAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAhAAAAPgAAAB4AAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAgD#####AAJ4YQACMjAAAAABQDQAAAAAAAAAAAACAP####8AAnlhAAIyNAAAAAFAOAAAAAAAAAAAAAIA#####wAEbnVtYQABMAAAAAEAAAAAAAAAAAAAAAIA#####wACeGMAAjE4AAAAAUAyAAAAAAAAAAAAAgD#####AAJ5YwACMTIAAAABQCgAAAAAAAAAAAASAP####8BAAAAABAAAWEAQBAAAAAAAADAMwAAAAAAAAUAAAAAGQAAAAgAAABAAAAACAAAAEEAAAASAP####8BAAAAABAAAWMAQAgAAAAAAADAMQAAAAAAAAUAAAAAGQAAAAgAAABDAAAACAAAAEQAAAAGAP####8AAAAKAAAABwMAAAABP#AAAAAAAAAAAAAhAAAAPwAAAAgAAABCAAAACgD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAACgAAAEcAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAdAAAARwAAAAoA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAABHAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAGwAAAEcAAAAWAP####8AAAAKAAAARQAAAAoA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEgAAABMAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASQAAAEwAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABKAAAATAAAAAoA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEsAAABMAAAAHAD#####AAJyMwAlc2koKG1vZHVsb3goeCk9MSkqKG1vZHVsb3koeCk9MSksMSwwKQAAACAAAAAABwIAAAAHCAAAACEAAAA9AAAAHgAAAAAAAAABP#AAAAAAAAAAAAAHCAAAACEAAAA+AAAAHgAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAAAAAABAAAAAAAAAAAAAXgAAAAcAP####8AAnIyACVzaSgobW9kdWxveCh4KT0wKSoobW9kdWxveSh4KT0xKSwxLDApAAAAIAAAAAAHAgAAAAcIAAAAIQAAAD0AAAAeAAAAAAAAAAEAAAAAAAAAAAAAAAcIAAAAIQAAAD4AAAAeAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAAAAAAEAAAAAAAAAAAABeAAAABwA#####wACcjEAJXNpKChtb2R1bG94KHgpPTEpKihtb2R1bG95KHgpPTApLDEsMCkAAAAgAAAAAAcCAAAABwgAAAAhAAAAPQAAAB4AAAAAAAAAAT#wAAAAAAAAAAAABwgAAAAhAAAAPgAAAB4AAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAgD#####AAVtaW5pMQACMTAAAAABQCQAAAAAAAAAAAACAP####8ABW1heGkxAAI0MAAAAAFARAAAAAAAAAAAAAIA#####wAEcGFzMQABMQAAAAE#8AAAAAAAAAAAABoA#####wEAAAAAwDEAAAAAAADALgAAAAAAAAAAAAoQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABQQAAAAIA#####wAFbWluaTIAAy0zMAAAABsAAAABQD4AAAAAAAAAAAACAP####8ABW1heGkyAAIzMAAAAAFAPgAAAAAAAAAAAAIA#####wAEcGFzMgABMQAAAAE#8AAAAAAAAAAAABMA#####wEAAAABEAACSjEAAAAAAAAAAABACAAAAAAAAAUAAAAAHQAAAB8AAAAUAP####8AAABbAAAACgD#####AQAAAAEQAAFKAAAAAAAAAAAAQAgAAAAAAAAFAAAAABsAAABcAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAACgAAAFwAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAKAAAAIgAAABYA#####wAAAAoAAAAfAAAACgD#####AQAAAAEQAAFBAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAoAAABgAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHwAAAGAAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAbAAAAYAAAAAoA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB0AAABg#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAABAAAABQAAAB0AAABdAAAAXgAAAB8AAAAdAAAAIgD#####AAAAAAABAAAABQAAABsAAAAfAAAAXwAAACMAAAAbAAAAIgD#####AAAAAAABAAAABQAAAGEAAABkAAAAYgAAAGMAAABhAAAAIgD#####AAAAAAABAAAABQAAAAoAAAAdAAAAHwAAABsAAAAKAAAAEAD#####AP8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAABUAAAARAP####8A5ubmAAEAAAAKAAAAIwAAAF0AAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAAAAAAVAP####8BAAAAABAAAVYAAAAAAAAAAABACAAAAAAAAAUAAAAACgAAAF0AAAAHAQAAAAgAAAAgAAAAAT#wAAAAAAAAAAAAGAD#####AQAAAAAQAAABAAEAAAAKAAAAJAAAABgA#####wEAAAAAEAAAAQABAAAACgAAAGsAAAAJAP####8BAAAAABAAAlUxAAAAAAAAAAAAQAgAAAAAAAAFAAE#0wPWdtnVKQAAAGwAAAAWAP####8AAAAKAAAAawAAAAoA#####wEAAAAAEAACVjEAAAAAAAAAAABACAAAAAAAAAUAAAAAbgAAAG8AAAAYAP####8BAAAAABAAAAEAAQAAAG4AAABwAAAACQD#####AQAAAAAQAAJVMgAAAAAAAAAAAEAIAAAAAAAABQABP9bRs76jZ34AAABxAAAAFgD#####AAAACgAAAHIAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAKAAAAcwAAAAoA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB0AAABzAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHwAAAHMAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAbAAAAcwAAACIA#####wEAAAAAAQAAAAUAAAB0AAAAdQAAAHYAAAB3AAAAdAAAAAoA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAF8AAABzAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIwAAAHMAAAAiAP####8BAAAAAAEAAAAFAAAAdwAAAHYAAAB5AAAAegAAAHcAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABdAAAAcwAAAAoA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAF4AAABzAAAAIgD#####AQAAAAABAAAABQAAAHUAAAB8AAAAfQAAAHYAAAB1AAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYQAAAHMAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABkAAAAcwAAAAoA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGIAAABzAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYwAAAHMAAAAiAP####8BAAAAAAEAAAAFAAAAfwAAAIAAAACBAAAAggAAAH######AAAAAgAIQ01lc3VyZVgA#####wABeAAAAGoAAABy#####wAAAAIACENNZXN1cmVZAP####8AAXkAAABqAAAAcgAAAAIA#####wACeDEADGludCh4KzAuMDAxKQAAAB8CAAAABwAAAAAIAAAAhAAAAAE#UGJN0vGp#AAAAAIA#####wACeTEADGludCh5KzAuMDAxKQAAAB8CAAAABwAAAAAIAAAAhQAAAAE#UGJN0vGp#AAAAAIA#####wADbnVtAAx4MSoyK254KjQqeTEAAAAHAAAAAAcCAAAACAAAAIYAAAABQAAAAAAAAAAAAAAHAgAAAAcCAAAACAAAAAMAAAABQBAAAAAAAAAAAAAIAAAAhwAAABMA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAHIAAAB2#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQD#####AQAAAADAJgAAAAAAAMAj#######wAAAAiRIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAACIAAAAAgD#####AARudW0xAAVudW0rMQAAAAcAAAAACAAAAIgAAAABP#AAAAAAAAAAAAACAP####8ABG51bScACG51bStueCoyAAAABwAAAAAIAAAAiAAAAAcCAAAACAAAAAMAAAABQAAAAAAAAAAAAAACAP####8ABW51bScxAAZudW0nKzEAAAAHAAAAAAgAAACMAAAAAT#wAAAAAAAAAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAdQAAAH0AAAATAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAB2AAAAgQAAABMA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAHcAAAB5AAAAJQD#####AQAAAADAJgAAAAAAAMAkAAAAAAAAAAAAkBIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAACLAAAAJQD#####AQAAAADAJAAAAAAAAMAkAAAAAAAAAAAAjhIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAACMAAAAJQD#####AQAAAADAIgAAAAAAAMAgAAAAAAAAAAAAjxIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAACN#####wAAAAIAEkNMaWV1T2JqZXRQYXJQdExpZQD#####AQAAAAAAAHgAAAAIAAAAIAAAAHIAAAAHAAAAcgAAAHMAAAB0AAAAdQAAAHYAAAB3AAAAeAAAACYA#####wEAAAAAAAB+AAAACAAAACAAAAByAAAABwAAAHIAAABzAAAAdQAAAHYAAAB8AAAAfQAAAH4AAAAmAP####8BAAAAAAAAgwAAAAgAAAAgAAAAcgAAAAcAAAByAAAAcwAAAH8AAACAAAAAgQAAAIIAAACDAAAAJgD#####AQAAAAAAAHsAAAAIAAAAIAAAAHIAAAAHAAAAcgAAAHMAAAB2AAAAdwAAAHkAAAB6AAAAewAAACYA#####wAAAAAAAACUAAAACAAAAAMAAABuAAAACwAAAG4AAABwAAAAcQAAAHIAAABzAAAAdAAAAHUAAAB2AAAAdwAAAHgAAACUAAAAJgD#####AAAAAAAAAJcAAAAIAAAAAwAAAG4AAAALAAAAbgAAAHAAAABxAAAAcgAAAHMAAAB2AAAAdwAAAHkAAAB6AAAAewAAAJcAAAAmAP####8AAAAAAAAAlgAAAAgAAAADAAAAbgAAAAsAAABuAAAAcAAAAHEAAAByAAAAcwAAAH8AAACAAAAAgQAAAIIAAACDAAAAlgAAACYA#####wAAAAAAAACVAAAACAAAAAMAAABuAAAACwAAAG4AAABwAAAAcQAAAHIAAABzAAAAdQAAAHYAAAB8AAAAfQAAAH4AAACVAAAAJgD#####AQAAAAAAAIoAAAAIAAAAIAAAAHIAAAAKAAAAcgAAAHMAAAB2AAAAhAAAAIUAAACGAAAAhwAAAIgAAACJAAAAigAAACYA#####wAAAAAAAACcAAAACAAAAAMAAABuAAAADgAAAG4AAABwAAAAcQAAAHIAAABzAAAAdgAAAIQAAACFAAAAhgAAAIcAAACIAAAAiQAAAIoAAACcAAAAJgD#####AQAAAAAAAJEAAAAIAAAAIAAAAHIAAAAMAAAAcgAAAHMAAAB3AAAAeQAAAIQAAACFAAAAhgAAAIcAAACIAAAAiwAAAJAAAACRAAAAJgD#####AAAAAAAAAJ4AAAAIAAAAAwAAAG4AAAAQAAAAbgAAAHAAAABxAAAAcgAAAHMAAAB3AAAAeQAAAIQAAACFAAAAhgAAAIcAAACIAAAAiwAAAJAAAACRAAAAngAAACYA#####wEAAAAAAACTAAAACAAAACAAAAByAAAADQAAAHIAAABzAAAAdgAAAIEAAACEAAAAhQAAAIYAAACHAAAAiAAAAIwAAACNAAAAjwAAAJMAAAAmAP####8AAAAAAAAAoAAAAAgAAAADAAAAbgAAABEAAABuAAAAcAAAAHEAAAByAAAAcwAAAHYAAACBAAAAhAAAAIUAAACGAAAAhwAAAIgAAACMAAAAjQAAAI8AAACTAAAAoAAAACYA#####wEAAAAAAACSAAAACAAAACAAAAByAAAADAAAAHIAAABzAAAAdQAAAH0AAACEAAAAhQAAAIYAAACHAAAAiAAAAIwAAACOAAAAkgAAACYA#####wAAAAAAAACiAAAACAAAAAMAAABuAAAAEAAAAG4AAABwAAAAcQAAAHIAAABzAAAAdQAAAH0AAACEAAAAhQAAAIYAAACHAAAAiAAAAIwAAACOAAAAkgAAAKL#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAZAAAAIwAAACMAAAAApAACeDIAAAAZAAAAIwAAACQAAAAApAACeTIAAAAZAAAAIwAAABoBAAAApAH#AAAAQBwAAAAAAAAAAAAAAAAAAAAAACMQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAnAP####8AKUFmZmljaGFnZSBkJ8OpcXVhdGlvbiBkZSBkcm9pdGUgb3UgY2VyY2xlAAAAAgAAAAEAAAACAAAAGQAAAF0AAAAjAAAAAKgAAngyAAAAGQAAAF0AAAAkAAAAAKgAAnkyAAAAGQAAAF0AAAAaAQAAAKgB#wAAAEAcAAAAAAAAwDUAAAAAAAAAAABdEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAFygjVmFsKHgyLDEpLCNWYWwoeTIsMikpAAAAJwD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABkAAAAdAAAAIwAAAACsAAJ4MgAAABkAAAAdAAAAJAAAAACsAAJ5MgAAABkAAAAdAAAAGgEAAACsAf8AAAC#8AAAAAAAAEAAAAAAAAAAAAAAHRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAACcA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAZAAAAGwAAACMAAAAAsAACeDIAAAAZAAAAGwAAACQAAAAAsAACeTIAAAAZAAAAGwAAABoBAAAAsAH#AAAAv#AAAAAAAAA#########4AAAABsQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAnAP####8AKUFmZmljaGFnZSBkJ8OpcXVhdGlvbiBkZSBkcm9pdGUgb3UgY2VyY2xlAAAAAgAAAAEAAAACAAAAGQAAAB8AAAAjAAAAALQAAngyAAAAGQAAAB8AAAAkAAAAALQAAnkyAAAAGQAAAB8AAAAaAQAAALQB#wAAAEAYAAAAAAAAwDUAAAAAAAAAAAAfEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAFygjVmFsKHgyLDEpLCNWYWwoeTIsMikpAAAACgD#####Af8AAAEQAAJBMQDANwAAAAAAAL#wAAAAAAAABQAAAAAfAAAAYAAAACcA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAZAAAAuAAAACMAAAAAuQACeDIAAAAZAAAAuAAAACQAAAAAuQACeTIAAAAZAAAAuAAAABoBAAAAuQH#AAAAQBAAAAAAAADAMwAAAAAAAAAAALgQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAACAP####8AAnhiAAEwAAAAAQAAAAAAAAAAAAAAAgD#####AAJ5YgACMTYAAAABQDAAAAAAAAAAAAACAP####8ABG51bWIAAjEwAAAAAUAkAAAAAAAAAAAAAgD#####AARudW1jAAIzMwAAAAFAQIAAAAAAAAAAABIA#####wEAAAAAEAABYgBACAAAAAAAAMAy#######4BQAAAAAZAAAACAAAAL0AAAAIAAAAvgAAACIA#####wAAAAAAAQAAAAUAAABIAAAASQAAAEoAAABLAAAASAAAACIA#####wEsuCwAAQAAAAUAAABNAAAATgAAAE8AAABQAAAATf####8AAAABABBDU3VyZmFjZVBvbHlnb25lAP####8BAH8AAAAABQAAAMMAAAAGAP####8AAAAKAAAABwMAAAABP#AAAAAAAAAAAAAhAAAAUgAAAAgAAAC#AAAACgD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAHQAAAMUAAAAKAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAABdAAAAxQAAAAoA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAF4AAADFAAAACgD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAHwAAAMUAAAAiAP####8AAAAAAAEAAAAFAAAAxgAAAMcAAADIAAAAyQAAAMYAAAAWAP####8AAAAKAAAAwQAAAAoA#####wEA#wAAEAABSAAAAAAAAAAAAEAIAAAAAAAACQAAAADGAAAAywAAAAoA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAMcAAADLAAAACgD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAyAAAAMsAAAAKAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAADJAAAAywAAACIA#####wH#AAAAAQAAAAUAAADMAAAAzQAAAM4AAADPAAAAzAAAACgA#####wH#AAAAAAAFAAAA0AAAABYA#####wAAAAoAAABG#####wAAAAEAC0NNYWNyb1BhdXNlAP####8AAAAAAf####8QQI7sAAAAAABAIwo9cKPXDAIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAACAAAABgD#####AAAACgAAAAcDAAAAAT#wAAAAAAAAAAAAIQAAAFEAAAAIAAAAwAAAAAoA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGEAAADUAAAACgD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAZAAAANQAAAAKAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABiAAAA1AAAAAoA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGMAAADUAAAAIgD#####Af8AAAABAAAABQAAANUAAADWAAAA1wAAANgAAADVAAAACgD#####Af8AAAAQAAFNAAAAAAAAAAAAQAgAAAAAAAAFAAAAANUAAADSAAAACgD#####Af8AAAAQAAFOAAAAAAAAAAAAQAgAAAAAAAAFAAAAANYAAADSAAAACgD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA1wAAANIAAAAKAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADYAAAA0gAAACIA#####wEAAH8AAQAAAAUAAADaAAAA2wAAANwAAADdAAAA2gAAACgA#####wEAAP8AAAAFAAAA3v####8AAAABAA9DU3ltZXRyaWVBeGlhbGUA#####wAAADkAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABNAAAA4AAAAAoA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAE4AAADgAAAACgD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAATwAAAOAAAAAKAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABQAAAA4AAAACIA#####wEAfwAAAQAAAAUAAADhAAAA4gAAAOMAAADkAAAA4QAAACgA#####wEAfwAAAAAFAAAA5QAAABgA#####wH#AAAAEAAAAQACAAAAJQAAACgAAAAKAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAlAAAAJgAAABgA#####wEAfwAAEAAAAQACAAAA6AAAACkAAAAZAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA5AAAA6QAAABoA#####wEAfwAAwDoAAAAAAADAPgAAAAAAAAAAAOoQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgxKSkAAAACAP####8AA3hjMwABOAAAAAFAIAAAAAAAAAAAAAIA#####wADeWMzAAE0AAAAAUAQAAAAAAAAAAAAEgD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAGQAAAAgAAAAvAAAACAAAADAAAAASAP####8B#wAAABAAAmMzAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAAAIAAAA7AAAAAgAAADtAAAAAgD#####AAJ4VgABMAAAAAEAAAAAAAAAAAAAAAIA#####wACeVYAATAAAAABAAAAAAAAAAAAAAACAP####8AA3hWMgABMAAAAAEAAAAAAAAAAAAAAAIA#####wADeVYyAAEwAAAAAQAAAAAAAAAAAAAAAgD#####AAN4VjMAATAAAAABAAAAAAAAAAAAAAACAP####8AA3lWMwABMAAAAAEAAAAAAAAAAAAAACoA#####wAAADIAAAAKAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADMAAAA9gAAAAoA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAM0AAAD2AAAACgD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAzgAAAPYAAAAKAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADPAAAA9gAAACIA#####wH#AAAAAQAAAAUAAAD3AAAA+AAAAPkAAAD6AAAA9wAAACgA#####wH#AAAAAAAFAAAA+#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAD#ABAAAAEAAgAAAO8AAAALAAAAGQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMgAAAOcAAAAaAP####8B#wAAAMBGAAAAAAAAwDwAAAAAAAAAAAD+EAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMikpAAAAGQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAACwAAAP0AAAAaAP####8BAAD#AMA9AAAAAAAAwAgAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMykp#####wAAAAEADUNQb2ludFByb2pldGUA#####wEAfwAAEAABRQAAAAAAAAAAAEAIAAAAAAAABQAAAABFAAAAOQAAABgA#####wEAfwAAEAAAAQABAAAA4QAAAEUAAAAJAP####8BAH8AABAAAUYAAAAAAAAAAABACAAAAAAAAAUAAT#wAAAAAAAAAAABA#####8AAAACAA9DTWVzdXJlQWJzY2lzc2UA#####wACazEAAAECAAAARQAAAQQAAAAsAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABQAAAAOQAAACwA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAE4AAAA5AAAABgD#####AAABBgAAAAgAAAEFAAAACgD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAUAAAAQgAAAAGAP####8AAAEHAAAACAAAAQUAAAAKAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABOAAABCgAAAAYA#####wAAAQIAAAAIAAABBQAAAAoA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAE8AAAEMAAAAIgD#####AQB#AAABAAAABQAAAQsAAAEEAAABCQAAAQ0AAAELAAAAKAD#####AQB#AAAAAAUAAAEO#####wAAAAEAEUNNYWNyb0Rpc3Bhcml0aW9uAP####8AAH8AAf####8KQI0UAAAAAABAScKPXCj1xAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTEAAAAAAAkAAADDAAAAxAAAAQ4AAAEPAAAA5QAAAOYAAAA8AAAAOQAAAOv#####AAAAAQAQQ01hY3JvQXBwYXJpdGlvbgD#####AAB#AAH#####CkCNDAAAAAAAQFLhR64UeuICAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAlhcHBhcmFpdDEAAAAAAAkAAADDAAAAxAAAAQ4AAAEPAAAA5QAAAOYAAAA8AAAAOQAAAOsA#####wAAAAIAF0NNYWNyb0FuaW1hdGlvblBvaW50TGllAP####8AAH8AAf####8KQI0MAAAAAABAWeFHrhR64gIAAAAAAAAAAAAAAAABAAAAAAAAAAAABWFuaW0xAAAAAAAAFAAAAGQAAAA8AAABBAABAP####8AAAABABFDTWFjcm9TdWl0ZU1hY3JvcwD#####AAB#AAH#####CkA0gAAAAAAAQBYUeuFHrhgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAxDb3JyZWN0aW9uIGEAAAAAAAQAAAERAAABEgAAARAAAADTAAAALAD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAOAAAADIAAAAsAP####8BAH8AABAAAUcAAAAAAAAAAABACAAAAAAAAAUAAAAAzAAAADIAAAAYAP####8BAH8AABAAAAEAAQAAAMwAAAD3AAAACQD#####AQB#AAAQAAFLAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAAAAAAAAAAAARYAAAAtAP####8AAmsyAAABFQAAAMwAAAEXAAAALAD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAzwAAADIAAAAsAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADOAAAAMgAAAAYA#####wAAARoAAAAIAAABGAAAAAoA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAM4AAAEbAAAABgD#####AAABGQAAAAgAAAEYAAAACgD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAzwAAAR0AAAAKAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADNAAABHQAAACIA#####wH#AAAAAQAAAAUAAAEXAAABHgAAARwAAAEfAAABFwAAACgA#####wH#AAAAAAAFAAABIAAAAC4A#####wD#AAAB#####wpAjUwAAAAAAEBhcKPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHbWFzcXVlMgAAAAAACQAAANAAAADRAAAA+wAAASAAAAEhAAAA#AAAAP8AAAAyAAAANQAAAC8A#####wD#AAAB#####wpAjUwAAAAAAEBlcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJYXBwYXJhaXQyAAAAAAAJAAAA0AAAANEAAAD7AAABIAAAASEAAAD8AAAA#wAAADIAAAA1AAAAADAA#####wD#AAAB#####wpAjWQAAAAAAEBpcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFYW5pbTIAAAAAAAAUAAAAZAAAADwAAAEXAAEAAAAAMQD#####AP8AAAH#####CkBYIAAAAAAAQBYUeuFHrhgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAxDb3JyZWN0aW9uIGIAAAAAAAQAAAEjAAABJAAAASIAAADTAAAAKgD#####AAAA#QAAAAoA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAANoAAAEmAAAACgD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA2wAAASYAAAAKAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADcAAABJgAAAAoA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAN0AAAEmAAAAIgD#####AQAA#wABAAAABQAAAScAAAEoAAABKQAAASoAAAEnAAAAKAD#####AQAA#wAAAAUAAAErAAAALAD#####AQAA#wAQAAFMAAAAAAAAAAAAQAgAAAAAAAAFAAAAANoAAAD9AAAALAD#####AQAA#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA3QAAAP0AAAAYAP####8B#wAAABAAAAEAAQAAANsAAAEoAAAACQD#####Af8AAAAQAAFQAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAAAAAAAAAAAAS8AAAAtAP####8AAmszAAABLQAAANsAAAEwAAAABgD#####AAABLQAAAAgAAAExAAAACgD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA2gAAATIAAAAGAP####8AAAEuAAAACAAAATEAAAAKAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADdAAABNAAAAAoA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAANwAAAE0AAAAIgD#####AQAA#wABAAAABQAAATMAAAEwAAABNgAAATUAAAEzAAAAKAD#####AQAA#wAAAAUAAAE3AAAALgD#####AAAA#wH#####CkCNZAAAAAAAQG2Qo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAdtYXNxdWUzAAAAAAAIAAAA3gAAAN8AAAE3AAABOAAAAQEAAAD9AAABKwAAASwAAAAvAP####8AAAD#Af####8QQI2MAAAAAABAcJhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACWFwcGFyYWl0MwAAAAAACAAAAN4AAADfAAABNwAAATgAAAEBAAAA#QAAASsAAAEsAAAAADAA#####wAAAP8B#####wpAjcwAAAAAAEBy2FHrhR64AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFYW5pbTMAAAAAAAAUAAAAZAAAADwAAAEwAAEAAAAAMQD#####AAAA#wH#####CkBlUAAAAAAAQBYUeuFHrhgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAxDb3JyZWN0aW9uIGMAAAAAAAMAAAE6AAABOwAAATkAAAAxAP####8AAAD#Af####8QQI28AAAAAABAdNhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACkNvcnJlY3Rpb24AAAAAAAQAAADTAAABEwAAASUAAAE8################"
				// Première question : une figure type A par symétrie d'axe // à [BD] est une figure type A. le symétrique du sommet A est le sommet C
				indexA = randint(0, nx * ny - 1)
				numA = tabfigA[indexA][2]
				let indexsym1 = randint(0, nx * ny - 1, [indexA]) // sert à choisir un axe [BD]. 
				xmil1 = tabfigD[indexsym1][0] // sert pour faire passer l'axe de symétrie.
				ymil1 = tabfigD[indexsym1][1]
				point = image_point_par_transformation(2, [tabfigA[indexA][0], tabfigA[indexA][1]], [xmil1, ymil1])
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigC[j][0] && point[1] == tabfigC[j][1]) {
							trouver = true
							num1 = tabfigA[j][2]
							xa = tabfigA[indexA][0]
							ya = tabfigA[indexA][1]
							break
						}
					}
					if (trouver == false) {
						indexA = randint(0, nx * ny - 1)
						numA = tabfigA[indexA][2]
						indexsym1 = randint(0, nx * ny - 1, [indexA])
						xmil1 = tabfigD[indexsym1][0]
						ymil1 = tabfigD[indexsym1][1]
						point = image_point_par_transformation(2, [tabfigA[indexA][0], tabfigA[indexA][1]], [xmil1, ymil1])
					}
				}
				texte += num_alpha(0) + texte_en_couleur_et_gras(` Quel est le numéro de la figure symétrique de la figure ${numA} dans la symétrie par rapport à $(d_1)$ ?<br>`, `green`)
				texte_corr = num_alpha(0) + texte_en_couleur_et_gras(` La figure symétrique de la figure ${numA} dans la symétrie par rapport à $(d_1)$ porte le numéro ${num1}.<br>`, `green`)
				// Deuxième question : une figure type D par symétrie d'axe // à [AC] est une figure type B. le symétrique du sommet B est le sommet D
				indexD = randint(0, nx * ny - 1)
				numD = tabfigD[indexD][2]
				let indexsym2 = randint(0, nx * ny - 1, [indexD]) // sert à choisir un axe [AC]. 
				xmil2 = tabfigA[indexsym2][0] // sert pour faire passer l'axe de symétrie.
				ymil2 = tabfigA[indexsym2][1]
				point = image_point_par_transformation(1, [tabfigD[indexD][0], tabfigD[indexD][1]], [xmil2, ymil2])
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigB[j][0] && point[1] == tabfigB[j][1]) {
							trouver = true
							num2 = tabfigB[j][2]
							xb = tabfigD[indexD][0]
							yb = tabfigD[indexD][1] - 4
							break
						}
					}
					if (trouver == false) {
						indexD = randint(0, nx * ny - 1)
						numD = tabfigD[indexD][2]
						indexsym2 = randint(0, nx * ny - 1, [indexD]) // sert à choisir un axe [AC]. 
						xmil2 = tabfigA[indexsym2][0] // sert pour faire passer l'axe de symétrie.
						ymil2 = tabfigA[indexsym2][1]
						point = image_point_par_transformation(1, [tabfigD[indexD][0], tabfigD[indexD][1]], [xmil2, ymil2])
					}
				}
				texte += num_alpha(1) + texte_en_couleur_et_gras(` Quel est le numéro de la figure symétrique de la figure ${numD} dans la symétrie par rapport à $(d_2)$ ?<br>`, `red`)
				texte_corr += num_alpha(1) + texte_en_couleur_et_gras(` La figure symétrique de la figure ${numD} dans la symétrie par rapport à $(d_2)$ porte le numéro ${num2}.<br>`, `red`)
				// troisième question : une figure type C par symétrie d'axe // à [DC] est une figure type B. le symétrique du sommet C est le sommet C'
				indexC = randint(0, nx * ny - 1)
				numC = tabfigC[indexC][2]
				let indexsym3 = randint(0, nx * ny - 1, [indexC]) // sert à choisir un axe [AC]. 
				xmil3 = tabfigC[indexsym3][0] // sert pour faire passer l'axe de symétrie.
				ymil3 = tabfigC[indexsym3][1]
				point = image_point_par_transformation(3, [tabfigC[indexC][0], tabfigC[indexC][1]], [xmil3, ymil3])
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigC[j][0] && point[1] == tabfigC[j][1]) {
							trouver = true
							num3 = tabfigC[j][2]
							xc = tabfigC[indexC][0] - 4
							yc = tabfigC[indexC][1] - 4
							break
						}
					}
					if (trouver == false) {
						indexC = randint(0, nx * ny - 1)
						numC = tabfigC[indexC][2]
						let indexsym3 = randint(0, nx * ny - 1, [indexC]) // sert à choisir un axe [AC]. 
						xmil3 = tabfigC[indexsym3][0] // sert pour faire passer l'axe de symétrie.
						ymil3 = tabfigC[indexsym3][1]
						point = image_point_par_transformation(3, [tabfigC[indexC][0], tabfigC[indexC][1]], [xmil3, ymil3])
					}
				}
				texte += num_alpha(2) + texte_en_couleur_et_gras(` Quel est le numéro de la figure symétrique de la figure ${numC} dans la symétrie par rapport à $(d_3)$ ?<br>`, `blue`)
				texte_corr += num_alpha(2) + texte_en_couleur_et_gras(` La figure symétrique de la figure ${numC} dans la symétrie par rapport à $(d_3)$ porte le numéro ${num3}.<br>`, `blue`)

				break
			case 2: // symétrie centrale
				this.MG32codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+0euFAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAST#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAVBbmdsZQABMAAAAAEAAAAAAAAAAAAAAAIA#####wAEWm9vbQACMzAAAAABQD4AAAAAAAAAAAACAP####8AAm54AAE1AAAAAUAUAAAAAAAA#####wAAAAEABUNGb25jAP####8AB21vZHVsb3gACG1vZCh4LDIp#####wAAAAEADUNGb25jdGlvbjJWYXIG#####wAAAAIAEUNWYXJpYWJsZUZvcm1lbGxlAAAAAAAAAAFAAAAAAAAAAAABeAAAAAMA#####wAHbW9kdWxveQASbW9kKGludCh5L254LzIpLDIpAAAABAb#####AAAAAgAJQ0ZvbmN0aW9uAv####8AAAABAApDT3BlcmF0aW9uAwAAAAcDAAAABQAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAAwAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAABeQAAAAMA#####wACcjAAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTApLDEsMCn#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAHAgAAAAcI#####wAAAAEADkNBcHBlbEZvbmN0aW9uAAAABAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAgD#####AAJ5RAABNgAAAAFAGAAAAAAAAAAAAAIA#####wACeEQAATAAAAABAAAAAAAAAAAAAAACAP####8AAnlDAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ4QwABNgAAAAFAGAAAAAAAAAAAAAIA#####wACeUIAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhCAAE0AAAAAUAQAAAAAAAA#####wAAAAEACkNQb2ludEJhc2UA#####wAAAAAAEAABTwDAMgAAAAAAAMAzAAAAAAAABQABQFKgAAAAAABAYLCj1wo9cf####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####Af8AAAEQAAABAAIAAAANAD#3Cj1wo9cK#####wAAAAEACUNSb3RhdGlvbgD#####AAAADQAAAAFAVoAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACAAAAAL#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQGeAAAAAAAAAAAAOAAAADQD#####AAAADQAAAAgAAAAB#####wAAAAEAC0NQb2ludEltYWdlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAEv####8AAAABAA5DUG9pbnRMaWVQb2ludAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAE#####8AAAABAAlDQ2VyY2xlT0EA#####wH#AAAAAgAAAA0AAAAU#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wH#AAAADQAAAQACAAAADQAAABT#####AAAAAQAQQ0RlbWlEcm9pdGVJbWFnZQD#####Af8AAAANAAABAAIAAAAWAAAAD#####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAXAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAGAAAABAA#####wH#AAAAEAACSicAAAAAAAAAAABACAAAAAAAAAUAAAAAFAAAABAAAAAQAP####8B#wAAABAAAkknAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAAAQ#####wAAAAIAB0NSZXBlcmUA#####wDm5uYBAQAAAA0AAAAbAAAAGgAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8B#wAAARAAAkInAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAADAAAAAgAAAALAAAAEQD#####AQAAAAAQAAFCAEAAAAAAAAAAwDcAAAAAAAAFAAAAAB0AAAAYAP####8B#wAAARAAAkQnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACAAAAAgAAAAHAAAAEQD#####AQAAAAAQAAFEAMAxAAAAAAAAwCoAAAAAAAAFAAAAAB8AAAAYAP####8B#wAAARAAAkMnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACgAAAAgAAAAJAAAAEQD#####AQAAAAAQAAFDAEAIAAAAAAAAv#AAAAAAAAAFAAAAACEAAAACAP####8AAnhhAAIxMgAAAAFAKAAAAAAAAAAAAAIA#####wACeWEAATgAAAABQCAAAAAAAAAAAAACAP####8ABG51bWEAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhjAAIxOAAAAAFAMgAAAAAAAAAAAAIA#####wACeWMAAjEyAAAAAUAoAAAAAAAAAAAAAgD#####AAN4YzEAATUAAAABQBQAAAAAAAAAAAACAP####8AA3ljMQABMgAAAAFAAAAAAAAAAAAAABgA#####wEAAAAAEAABYQAAAAAAAAAAAEAIAAAAAAAABQAAAAAcAAAACAAAACMAAAAIAAAAJAAAABgA#####wEAAAAAEAABYwAAAAAAAAAAAEAIAAAAAAAABQAAAAAcAAAACAAAACYAAAAIAAAAJwAAABgA#####wAJzAkAEAACYzEAAAAAAAAAAABACAAAAAAAAAkAAAAAHAAAAAgAAAAoAAAACAAAACkAAAAOAP####8AAAANAAAABwMAAAABP#AAAAAAAAAAAAAKAAAABgAAAAgAAAAlAAAAEAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAC0AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAALQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACIAAAAtAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAC3#####AAAAAQAMQ1RyYW5zbGF0aW9uAP####8AAAANAAAAKgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAC4AAAAyAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALwAAADIAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAwAAAAMgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADEAAAAyAAAAAgD#####AAJueQABNQAAAAFAFAAAAAAAAAAAAAMA#####wACcjMAJXNpKChtb2R1bG94KHgpPTEpKihtb2R1bG95KHgpPTEpLDEsMCkAAAAJAAAAAAcCAAAABwgAAAAKAAAABAAAAAUAAAAAAAAAAT#wAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAwD#####AAJyMgAlc2koKG1vZHVsb3goeCk9MCkqKG1vZHVsb3koeCk9MSksMSwwKQAAAAkAAAAABwIAAAAHCAAAAAoAAAAEAAAABQAAAAAAAAABAAAAAAAAAAAAAAAHCAAAAAoAAAAFAAAABQAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAAAAAABAAAAAAAAAAAAAXgAAAADAP####8AAnIxACVzaSgobW9kdWxveCh4KT0xKSoobW9kdWxveSh4KT0wKSwxLDApAAAACQAAAAAHAgAAAAcIAAAACgAAAAQAAAAFAAAAAAAAAAE#8AAAAAAAAAAAAAcIAAAACgAAAAUAAAAFAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAEAAAAAAAAAAAABeAAAAAIA#####wAFbWluaTEAAjEwAAAAAUAkAAAAAAAAAAAAAgD#####AAVtYXhpMQACNDAAAAABQEQAAAAAAAAAAAACAP####8ABHBhczEAATEAAAABP#AAAAAAAAD#####AAAAAgAMQ0NvbW1lbnRhaXJlAP####8BAAAAAMAxAAAAAAAAwC4AAAAAAAAAAAANEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAUEAAAACAP####8ABW1pbmkyAAMtMzD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUA+AAAAAAAAAAAAAgD#####AAVtYXhpMgACMzAAAAABQD4AAAAAAAAAAAACAP####8ABHBhczIAATEAAAABP#AAAAAAAAD#####AAAAAQAHQ01pbGlldQD#####AQAAAAEQAAJKMQAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAAIv####8AAAABABFDU3ltZXRyaWVDZW50cmFsZQD#####AAAAQgAAABAA#####wEAAAABEAABSgAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAAQwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABDAAAAHAD#####AQAAAAEQAAJJMQAAAAAAAAAAAEAIAAAAAAAABQAAAAAiAAAAHgAAAB0A#####wAAAEYAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAARwAAABAA#####wEAAAABEAABSQAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAARwAAABkA#####wAAAA0AAAAiAAAAEAD#####AQAAAAEQAAFBAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABKAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAEoAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAASgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACAAAABK#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAABAAAABQAAACAAAABEAAAARQAAACIAAAAgAAAAHgD#####AAAAAAABAAAABQAAAB4AAAAiAAAASAAAAEkAAAAeAAAAHgD#####AAAAAAABAAAABQAAAEsAAABOAAAATAAAAE0AAABLAAAAHgD#####AAAAAAABAAAABQAAAA0AAAAgAAAAIgAAAB4AAAANAAAAFgD#####AP8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAABgAAAAXAP####8A5ubmAAEAAAANAAAASQAAAEQAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAD#####AAAAAQARQ1BvaW50UGFyQWJzY2lzc2UA#####wEAAAAAEAABVQAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAASQAAAAcBAAAACAAAAAMAAAABP#AAAAAAAAAAAAAfAP####8BAAAAABAAAVYAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEQAAAAHAQAAAAgAAAA3AAAAAT#wAAAAAAAA#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAA0AAABVAAAAIAD#####AQAAAAAQAAABAAEAAAANAAAAVgAAAA8A#####wEAAAAAEAACVTEAAAAAAAAAAABACAAAAAAAAAUAAT#TA9Z22dUpAAAAVwAAABkA#####wAAAA0AAABWAAAAEAD#####AQAAAAAQAAJWMQAAAAAAAAAAAEAIAAAAAAAABQAAAABZAAAAWgAAACAA#####wEAAAAAEAAAAQABAAAAWQAAAFsAAAAPAP####8BAAAAABAAAlUyAAAAAAAAAAAAQAgAAAAAAAAFAAE#1tGzvqNnfgAAAFwAAAAZAP####8AAAANAAAAXQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABeAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAAF4AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAiAAAAXgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB4AAABeAAAAHgD#####AQAAAAABAAAABQAAAF8AAABgAAAAYQAAAGIAAABfAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASAAAAF4AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABJAAAAXgAAAB4A#####wEAAAAAAQAAAAUAAABiAAAAYQAAAGQAAABlAAAAYgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEQAAABeAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARQAAAF4AAAAeAP####8BAAAAAAEAAAAFAAAAYAAAAGcAAABoAAAAYQAAAGAAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABLAAAAXgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAE4AAABeAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAATAAAAF4AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABNAAAAXgAAAB4A#####wEAAAAAAQAAAAUAAABqAAAAawAAAGwAAABtAAAAav####8AAAACAAhDTWVzdXJlWAD#####AAF4AAAAVAAAAF3#####AAAAAgAIQ01lc3VyZVkA#####wABeQAAAFQAAABdAAAAAgD#####AAJ4MQAMaW50KHgrMC4wMDEpAAAABgIAAAAHAAAAAAgAAABvAAAAAT9QYk3S8an8AAAAAgD#####AAJ5MQAMaW50KHkrMC4wMDEpAAAABgIAAAAHAAAAAAgAAABwAAAAAT9QYk3S8an8AAAAAgD#####AANudW0ADHgxKjIrbngqNCp5MQAAAAcAAAAABwIAAAAIAAAAcQAAAAFAAAAAAAAAAAAAAAcCAAAABwIAAAAIAAAAAwAAAAFAEAAAAAAAAAAAAAgAAAByAAAAHAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAXQAAAGH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAP####8BAAAAAMAmAAAAAAAAwCP#######AAAAB0EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHMAAAACAP####8ABG51bTEABW51bSsxAAAABwAAAAAIAAAAcwAAAAE#8AAAAAAAAAAAAAIA#####wAEbnVtJwAIbnVtK254KjIAAAAHAAAAAAgAAABzAAAABwIAAAAIAAAAAwAAAAFAAAAAAAAAAAAAAAIA#####wAFbnVtJzEABm51bScrMQAAAAcAAAAACAAAAHcAAAABP#AAAAAAAAAAAAAcAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABgAAAAaAAAABwA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGEAAABsAAAAHAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYgAAAGQAAAAjAP####8BAAAAAMAmAAAAAAAAwCQAAAAAAAAAAAB7EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHYAAAAjAP####8BAAAAAMAkAAAAAAAAwCQAAAAAAAAAAAB5EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHcAAAAjAP####8BAAAAAMAiAAAAAAAAwCAAAAAAAAAAAAB6EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHj#####AAAAAgASQ0xpZXVPYmpldFBhclB0TGllAP####8BAAAAAAAAYwAAAAgAAAA3AAAAXQAAAAcAAABdAAAAXgAAAF8AAABgAAAAYQAAAGIAAABjAAAAJAD#####AQAAAAAAAGkAAAAIAAAANwAAAF0AAAAHAAAAXQAAAF4AAABgAAAAYQAAAGcAAABoAAAAaQAAACQA#####wEAAAAAAABuAAAACAAAADcAAABdAAAABwAAAF0AAABeAAAAagAAAGsAAABsAAAAbQAAAG4AAAAkAP####8BAAAAAAAAZgAAAAgAAAA3AAAAXQAAAAcAAABdAAAAXgAAAGEAAABiAAAAZAAAAGUAAABmAAAAJAD#####AAAAAAAAAH8AAAAIAAAAAwAAAFkAAAALAAAAWQAAAFsAAABcAAAAXQAAAF4AAABfAAAAYAAAAGEAAABiAAAAYwAAAH8AAAAkAP####8AAAAAAAAAggAAAAgAAAADAAAAWQAAAAsAAABZAAAAWwAAAFwAAABdAAAAXgAAAGEAAABiAAAAZAAAAGUAAABmAAAAggAAACQA#####wAAAAAAAACBAAAACAAAAAMAAABZAAAACwAAAFkAAABbAAAAXAAAAF0AAABeAAAAagAAAGsAAABsAAAAbQAAAG4AAACBAAAAJAD#####AAAAAAAAAIAAAAAIAAAAAwAAAFkAAAALAAAAWQAAAFsAAABcAAAAXQAAAF4AAABgAAAAYQAAAGcAAABoAAAAaQAAAIAAAAAkAP####8BAAAAAAAAdQAAAAgAAAA3AAAAXQAAAAoAAABdAAAAXgAAAGEAAABvAAAAcAAAAHEAAAByAAAAcwAAAHQAAAB1AAAAJAD#####AAAAAAAAAIcAAAAIAAAAAwAAAFkAAAAOAAAAWQAAAFsAAABcAAAAXQAAAF4AAABhAAAAbwAAAHAAAABxAAAAcgAAAHMAAAB0AAAAdQAAAIcAAAAkAP####8BAAAAAAAAfAAAAAgAAAA3AAAAXQAAAAwAAABdAAAAXgAAAGIAAABkAAAAbwAAAHAAAABxAAAAcgAAAHMAAAB2AAAAewAAAHwAAAAkAP####8AAAAAAAAAiQAAAAgAAAADAAAAWQAAABAAAABZAAAAWwAAAFwAAABdAAAAXgAAAGIAAABkAAAAbwAAAHAAAABxAAAAcgAAAHMAAAB2AAAAewAAAHwAAACJAAAAJAD#####AQAAAAAAAH4AAAAIAAAANwAAAF0AAAANAAAAXQAAAF4AAABhAAAAbAAAAG8AAABwAAAAcQAAAHIAAABzAAAAdwAAAHgAAAB6AAAAfgAAACQA#####wAAAAAAAACLAAAACAAAAAMAAABZAAAAEQAAAFkAAABbAAAAXAAAAF0AAABeAAAAYQAAAGwAAABvAAAAcAAAAHEAAAByAAAAcwAAAHcAAAB4AAAAegAAAH4AAACLAAAAJAD#####AQAAAAAAAH0AAAAIAAAANwAAAF0AAAAMAAAAXQAAAF4AAABgAAAAaAAAAG8AAABwAAAAcQAAAHIAAABzAAAAdwAAAHkAAAB9AAAAJAD#####AAAAAAAAAI0AAAAIAAAAAwAAAFkAAAAQAAAAWQAAAFsAAABcAAAAXQAAAF4AAABgAAAAaAAAAG8AAABwAAAAcQAAAHIAAABzAAAAdwAAAHkAAAB9AAAAjf####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAABJAAAAIQAAAACPAAJ4MgAAABwAAABJAAAAIgAAAACPAAJ5MgAAABwAAABJAAAAGgEAAACPAf8AAABAHAAAAAAAAAAAAAAAAAAAAAAASRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAARAAAACEAAAAAkwACeDIAAAAcAAAARAAAACIAAAAAkwACeTIAAAAcAAAARAAAABoBAAAAkwH#AAAAQBwAAAAAAADANQAAAAAAAAAAAEQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAlAP####8AKUFmZmljaGFnZSBkJ8OpcXVhdGlvbiBkZSBkcm9pdGUgb3UgY2VyY2xlAAAAAgAAAAEAAAACAAAAHAAAACAAAAAhAAAAAJcAAngyAAAAHAAAACAAAAAiAAAAAJcAAnkyAAAAHAAAACAAAAAaAQAAAJcB#wAAAL#wAAAAAAAAQAAAAAAAAAAAAAAgEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAFygjVmFsKHgyLDEpLCNWYWwoeTIsMikpAAAAJQD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAAAeAAAAIQAAAACbAAJ4MgAAABwAAAAeAAAAIgAAAACbAAJ5MgAAABwAAAAeAAAAGgEAAACbAf8AAAC#8AAAAAAAAD#########gAAAAHhAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAAIgAAACEAAAAAnwACeDIAAAAcAAAAIgAAACIAAAAAnwACeTIAAAAcAAAAIgAAABoBAAAAnwH#AAAAQBgAAAAAAADANQAAAAAAAAAAACIQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAQAP####8B#wAAARAAAkExAMA3AAAAAAAAv#AAAAAAAAAFAAAAACIAAABKAAAAJQD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAACjAAAAIQAAAACkAAJ4MgAAABwAAACjAAAAIgAAAACkAAJ5MgAAABwAAACjAAAAGgEAAACkAf8AAABAEAAAAAAAAMAzAAAAAAAAAAAAoxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAAAIA#####wACeGIAAjI0AAAAAUA4AAAAAAAAAAAAAgD#####AAJ5YgACMTYAAAABQDAAAAAAAAAAAAACAP####8ABG51bWIAAjEwAAAAAUAkAAAAAAAAAAAAAgD#####AARudW1jAAIzMwAAAAFAQIAAAAAAAAAAAAIA#####wADeGMyAAEzAAAAAUAIAAAAAAAAAAAAAgD#####AAN5YzIAATUAAAABQBQAAAAAAAAAAAACAP####8AA3hjMwABNgAAAAFAGAAAAAAAAAAAAAIA#####wADeWMzAAE3AAAAAUAcAAAAAAAAAAAAGAD#####AQAAAAAQAAFiAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAqAAAAAgAAACpAAAAGAD#####AH8AAAAQAAJjMgAAAAAAAAAAAEAIAAAAAAAACQAAAAAcAAAACAAAAKwAAAAIAAAArQAAABgA#####wAAAH8AEAACYzMAAAAAAAAAAABACAAAAAAAAAkAAAAAHAAAAAgAAACuAAAACAAAAK8AAAAeAP####8AAAAAAAEAAAAFAAAALgAAAC8AAAAwAAAAMQAAAC4AAAAeAP####8ALLgsAAEAAAAFAAAAMwAAADQAAAA1AAAANgAAADP#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AAB#AAAAAAUAAAC0AAAAHQD#####AAAALAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADMAAAC2AAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANAAAALYAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA1AAAAtgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADYAAAC2AAAAHgD#####ASy4LAABAAAABQAAALcAAAC4AAAAuQAAALoAAAC3AAAAJgD#####AQB#AAAAAAUAAAC7AAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADkAAAAIAAAAqgAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACAAAAC9AAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAARAAAAL0AAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAABFAAAAvQAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACIAAAC9AAAAHgD#####AAAAAAABAAAABQAAAL4AAAC#AAAAwAAAAMEAAAC+AAAAGQD#####AAAADQAAALAAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAC+AAAAwwAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAL8AAADDAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAwAAAAMMAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAADBAAAAwwAAAB4A#####wD#AAAAAQAAAAUAAADEAAAAxQAAAMYAAADHAAAAxAAAACYA#####wD#AAAAAAAFAAAAyAAAAB0A#####wAAALEAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAADEAAAAygAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAMUAAADKAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAxgAAAMoAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAADHAAAAygAAAB4A#####wH#AAAAAQAAAAUAAADLAAAAzAAAAM0AAADOAAAAywAAACYA#####wH#AAAAAAAFAAAAzwAAABkA#####wAAAA0AAAArAAAAHQD#####AAAAsv####8AAAABABJDTWFjcm9DbGlnbm90ZW1lbnQA#####wAA#wAB#####wpAi8QAAAAAAEBSoUeuFHriAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQ2xpZ25vdGUxAAAAAAACAAAAuwAAALwAAAAU#####wAAAAEAC0NNYWNyb1BhdXNlAP####8AAAAAAf####8QQI70AAAAAABAQcKPXCj1wwIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAAC#####wAAAAEAEkNBcmNEZUNlcmNsZURpcmVjdAD#####AQD#AAABAAAALAAAACv#####AAAAAUBmgAAAAAAAAAAAKQD#####AQAAAAABAAAAsQAAAMX#####AAAAAUBmgAAAAAAA#####wAAAAEAD0NQb2ludExpZUNlcmNsZQD#####Af8AAAEQAAAAAAAAAAAAAABACAAAAAAAAAUAAT9Q#XA667psAAAA1gAAACUA#####wAXTWVzdXJlIGQnYW5nbGUgb3JpZW50w6kAAAACAAAAAwAAAAMAAADFAAAAsQAAANf#####AAAAAQAMQ0Jpc3NlY3RyaWNlAAAAANgBAAAAABAAAAEAAQAAANcAAACxAAAAxQAAAA8AAAAA2AEAAAAAEAAAAAAAAAAAAAAAP+MzMzMzMzMFAAFAaT5Clg7dyQAAANn#####AAAAAgATQ01lc3VyZUFuZ2xlT3JpZW50ZQEAAADYAAZhbmdsZTIAAADFAAAAsQAAANcAAAAjAQAAANgBAAAAAEAIAAAAAAAAP#AAAAAAAAAAAADaDwAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAACwrAAAAAA2#####8AAAACABNDTWFycXVlQW5nbGVPcmllbnRlAQAAANgBAAAAAAEAAAABQEJbiQkrj78AAADFAAAAsQAAANcAAAAADQD#####AAAAsQAAAAgAAADbAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAxAAAAN4AAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADFAAAA3gAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAMYAAADeAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAxwAAAN4AAAAeAP####8B#wAAAAEAAAAFAAAA3wAAAOAAAADhAAAA4gAAAN8AAAAmAP####8B#wAAAAAABQAAAOP#####AAAAAQAQQ01hY3JvQXBwYXJpdGlvbgD#####AP8AAAH#####CkCMxAAAAAAAQHsoUeuFHrgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAtBcHBhcml0aW9uMgAAAAAABgAAAM8AAADQAAAA4wAAAOQAAADXAAAA4AD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wD#AAAB#####wpAjPQAAAAAAEB9aFHrhR64AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHbWFzcXVlMgAAAAAABgAAAM8AAADQAAAA4wAAAOQAAADXAAAA4AAAACcA#####wD#AAAB#####wpAjQwAAAAAAEB#eFHrhR64AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQ2xpZ25vdGUyAAAAAAACAAAAzwAAANAAAAAU#####wAAAAIAGENNYWNyb0FuaW1hdGlvbkF2ZWNUcmFjZQD#####AP8AAAH#####CkCNXAAAAAAAQIC8KPXCj1wCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAd0b3VybmUyAAAAAAABAAAA1wABAAAAAAoAAAAyAAAAAAAAANcBAP####8AAAABABFDTWFjcm9TdWl0ZU1hY3JvcwD#####AP8AAAH#####CkCQTgAAAAAAQHs4UeuFHrgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVDb3JyMgAAAAAABQAAAOcAAADUAAAA5QAAAOgAAADmAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADgAAAAIAAAAqwAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEsAAADqAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAATgAAAOoAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABMAAAA6gAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAE0AAADqAAAAHgD#####Af8AAAABAAAABQAAAOsAAADsAAAA7QAAAO4AAADrAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA6wAAANEAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADsAAAA0QAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAO0AAADRAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA7gAAANEAAAAeAP####8AAAB#AAEAAAAFAAAA8AAAAPEAAADyAAAA8wAAAPAAAAAmAP####8AAAB#AAAABQAAAPQAAAApAP####8B##8AAAEAAACyAAAA8P####8AAAABQGaAAAAAAAAAAAAqAP####8BAAB#ARAAAAAAAAAAAAAAAEAIAAAAAAAABQABPyl3lSGrWUIAAAD2AAAAJQD#####ABdNZXN1cmUgZCdhbmdsZSBvcmllbnTDqQAAAAIAAAADAAAAAwAAAPAAAACyAAAA9wAAACsAAAAA+AEAAAAAEAAAAQABAAAA9wAAALIAAADwAAAADwAAAAD4AQAAAAAQAAAAAAAAAAAAAAA#4zMzMzMzMwUAAUBpPkKWDt3JAAAA+QAAACwBAAAA+AAGYW5nbGUzAAAA8AAAALIAAAD3AAAAIwEAAAD4Af##AABACAAAAAAAAD#wAAAAAAAAAAAA+g8AAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAsKwAAAAAPsAAAAtAQAAAPgB##8AAAEAAAABQEJbiQkrj78AAADwAAAAsgAAAPcAAAAAEAD#####Af##AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA8AAAANIAAAAQAP####8B##8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADxAAAA0gAAABAA#####wH##wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAPIAAADSAAAAEAD#####Af##AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA8wAAANIAAAAeAP####8BAAB#AAEAAAAFAAAA#gAAAP8AAAEAAAABAQAAAP4AAAAmAP####8BAAB#AAAABQAAAQIAAAANAP####8AAACyAAAACAAAAPsAAAAQAP####8B##8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADwAAABBAAAABAA#####wH##wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAPEAAAEEAAAAEAD#####Af##AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA8gAAAQQAAAAQAP####8B##8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADzAAABBAAAAB4A#####wEAAH8AAQAAAAUAAAEFAAABBgAAAQcAAAEIAAABBQAAACYA#####wEAAH8AAAAFAAABCQAAAC4A#####wAAAH8B#####wpAjLQAAAAAAEBkMKPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALQXBwYXJpdGlvbjMAAAAAAAUAAAECAAABAwAAAQkAAAEKAAAA9wAAAAAvAP####8AAAB#Af####8KQIzUAAAAAABAaFCj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTMAAAAAAAUAAAECAAABAwAAAQkAAAEKAAAA9wAAACcA#####wAAAH8B#####wpAjOwAAAAAAEBr0KPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQ2xpZ25vdGUzAAAAAAACAAABAgAAAQMAAAAUAAAAMAD#####AAAAfwH#####CkCNLAAAAAAAQG+wo9cKPXECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAd0b3VybmUzAAAAAAABAAAA9wABAAAAAAoAAAAyAAAAAAAAAPcBAAAAADEA#####wAAAH8B#####xBAkB4AAAAAAEBkkKPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFQ29ycjMAAAAAAAUAAAENAAAA1AAAAQsAAAEOAAABDAAAACkA#####wEAAH8AAQAAACwAAAAq#####wAAAAFAZoAAAAAAAAAAACoA#####wEAfwABEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAE#bzDaInuZNgAAARAAAAAlAP####8AF01lc3VyZSBkJ2FuZ2xlIG9yaWVudMOpAAAAAgAAAAMAAAADAAAAKgAAACwAAAERAAAAKwAAAAESAQAAAAAQAAABAAEAAAERAAAALAAAACoAAAAPAAAAARIBAAAAABAAAAAAAAAAAAAAAD#jMzMzMzMzBQABQGk+QpYO3ckAAAETAAAALAEAAAESAAZhbmdsZTEAAAAqAAAALAAAAREAAAAjAQAAARIBAAB#AEAIAAAAAAAAP#AAAAAAAAAAAAEUDwAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAACwrAAAAABFQAAAC0BAAABEgEAAH8AAQAAAAFAQluJCSuPvwAAACoAAAAsAAABEQAAAAANAP####8AAAAsAAAACAAAARUAAAAQAP####8BAAB#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAzAAABGAAAABAA#####wEAAH8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADQAAAEYAAAAEAD#####AQAAfwAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANQAAARgAAAAQAP####8BAAB#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA2AAABGAAAAB4A#####wEAfwAAAQAAAAUAAAEZAAABGgAAARsAAAEcAAABGQAAACYA#####wEAfwAAAAAFAAABHQAAAC4A#####wAAfwAB#####xBAihQAAAAAAEBBQo9cKPXDAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALQXBwYXJpdGlvbjEAAAAAAAUAAAC7AAAAvAAAAR0AAAEeAAABEQAAAAAvAP####8AAH8AAf####8KQIpMAAAAAABAWeFHrhR64gIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTEAAAAAAAUAAAC7AAAAvAAAAR0AAAEeAAABEQAAADAA#####wAAfwAB#####wpAinQAAAAAAEBf4UeuFHriAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHdG91cm5lMQAAAAAAAQAAAREAAQAAAAAKAAAAMgAAAAAAAAERAQAAAAAxAP####8AAH8AAf####8KQI6cAAAAAABAV+FHrhR64gIAAAAAAAAAAAAAAAABAAAAAAAAAAAABUNvcnIxAAAAAAAFAAAA0wAAANQAAAEfAAABIQAAASAAAAAxAP####8AAH8AAf####8KQIyEAAAAAABAcfhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACkNvcnJlY3Rpb24AAAAAAAMAAAEiAAAA6QAAAQ################8="
				this.MG32codeBase64corr = "TWF0aEdyYXBoSmF2YTEuMAAAABI+0euFAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAST#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAVBbmdsZQABMAAAAAEAAAAAAAAAAAAAAAIA#####wAEWm9vbQACMzAAAAABQD4AAAAAAAAAAAACAP####8AAm54AAE1AAAAAUAUAAAAAAAA#####wAAAAEABUNGb25jAP####8AB21vZHVsb3gACG1vZCh4LDIp#####wAAAAEADUNGb25jdGlvbjJWYXIG#####wAAAAIAEUNWYXJpYWJsZUZvcm1lbGxlAAAAAAAAAAFAAAAAAAAAAAABeAAAAAMA#####wAHbW9kdWxveQASbW9kKGludCh5L254LzIpLDIpAAAABAb#####AAAAAgAJQ0ZvbmN0aW9uAv####8AAAABAApDT3BlcmF0aW9uAwAAAAcDAAAABQAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAAwAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAABeQAAAAMA#####wACcjAAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTApLDEsMCn#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAHAgAAAAcI#####wAAAAEADkNBcHBlbEZvbmN0aW9uAAAABAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAgD#####AAJ5RAABNgAAAAFAGAAAAAAAAAAAAAIA#####wACeEQAATAAAAABAAAAAAAAAAAAAAACAP####8AAnlDAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ4QwABNgAAAAFAGAAAAAAAAAAAAAIA#####wACeUIAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhCAAE0AAAAAUAQAAAAAAAA#####wAAAAEACkNQb2ludEJhc2UA#####wAAAAAAEAABTwDAMgAAAAAAAMAzAAAAAAAABQABQFKgAAAAAABAYLCj1wo9cf####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####Af8AAAEQAAABAAIAAAANAD#3Cj1wo9cK#####wAAAAEACUNSb3RhdGlvbgD#####AAAADQAAAAFAVoAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACAAAAAL#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQGeAAAAAAAAAAAAOAAAADQD#####AAAADQAAAAgAAAAB#####wAAAAEAC0NQb2ludEltYWdlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAEv####8AAAABAA5DUG9pbnRMaWVQb2ludAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAE#####8AAAABAAlDQ2VyY2xlT0EA#####wH#AAAAAgAAAA0AAAAU#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wH#AAAADQAAAQACAAAADQAAABT#####AAAAAQAQQ0RlbWlEcm9pdGVJbWFnZQD#####Af8AAAANAAABAAIAAAAWAAAAD#####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAXAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAGAAAABAA#####wH#AAAAEAACSicAAAAAAAAAAABACAAAAAAAAAUAAAAAFAAAABAAAAAQAP####8B#wAAABAAAkknAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAAAQ#####wAAAAIAB0NSZXBlcmUA#####wDm5uYBAQAAAA0AAAAbAAAAGgAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8B#wAAARAAAkInAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAADAAAAAgAAAALAAAAEQD#####AQAAAAAQAAFCAEAAAAAAAAAAwDcAAAAAAAAFAAAAAB0AAAAYAP####8B#wAAARAAAkQnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACAAAAAgAAAAHAAAAEQD#####AQAAAAAQAAFEAMAxAAAAAAAAwCoAAAAAAAAFAAAAAB8AAAAYAP####8B#wAAARAAAkMnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACgAAAAgAAAAJAAAAEQD#####AQAAAAAQAAFDAEAIAAAAAAAAv#AAAAAAAAAFAAAAACEAAAACAP####8AAnhhAAIxMgAAAAFAKAAAAAAAAAAAAAIA#####wACeWEAATgAAAABQCAAAAAAAAAAAAACAP####8ABG51bWEAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhjAAIxOAAAAAFAMgAAAAAAAAAAAAIA#####wACeWMAAjEyAAAAAUAoAAAAAAAAAAAAAgD#####AAN4YzEAATUAAAABQBQAAAAAAAAAAAACAP####8AA3ljMQABMgAAAAFAAAAAAAAAAAAAABgA#####wEAAAAAEAABYQAAAAAAAAAAAEAIAAAAAAAABQAAAAAcAAAACAAAACMAAAAIAAAAJAAAABgA#####wEAAAAAEAABYwAAAAAAAAAAAEAIAAAAAAAABQAAAAAcAAAACAAAACYAAAAIAAAAJwAAABgA#####wAJzAkAEAACYzEAAAAAAAAAAABACAAAAAAAAAkAAAAAHAAAAAgAAAAoAAAACAAAACkAAAAOAP####8AAAANAAAABwMAAAABP#AAAAAAAAAAAAAKAAAABgAAAAgAAAAlAAAAEAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAC0AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAALQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACIAAAAtAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAC3#####AAAAAQAMQ1RyYW5zbGF0aW9uAP####8AAAANAAAAKgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAC4AAAAyAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALwAAADIAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAwAAAAMgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADEAAAAyAAAAAgD#####AAJueQABNQAAAAFAFAAAAAAAAAAAAAMA#####wACcjMAJXNpKChtb2R1bG94KHgpPTEpKihtb2R1bG95KHgpPTEpLDEsMCkAAAAJAAAAAAcCAAAABwgAAAAKAAAABAAAAAUAAAAAAAAAAT#wAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAwD#####AAJyMgAlc2koKG1vZHVsb3goeCk9MCkqKG1vZHVsb3koeCk9MSksMSwwKQAAAAkAAAAABwIAAAAHCAAAAAoAAAAEAAAABQAAAAAAAAABAAAAAAAAAAAAAAAHCAAAAAoAAAAFAAAABQAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAAAAAABAAAAAAAAAAAAAXgAAAADAP####8AAnIxACVzaSgobW9kdWxveCh4KT0xKSoobW9kdWxveSh4KT0wKSwxLDApAAAACQAAAAAHAgAAAAcIAAAACgAAAAQAAAAFAAAAAAAAAAE#8AAAAAAAAAAAAAcIAAAACgAAAAUAAAAFAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAEAAAAAAAAAAAABeAAAAAIA#####wAFbWluaTEAAjEwAAAAAUAkAAAAAAAAAAAAAgD#####AAVtYXhpMQACNDAAAAABQEQAAAAAAAAAAAACAP####8ABHBhczEAATEAAAABP#AAAAAAAAD#####AAAAAgAMQ0NvbW1lbnRhaXJlAP####8BAAAAAMAxAAAAAAAAwC4AAAAAAAAAAAANEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAUEAAAACAP####8ABW1pbmkyAAMtMzD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUA+AAAAAAAAAAAAAgD#####AAVtYXhpMgACMzAAAAABQD4AAAAAAAAAAAACAP####8ABHBhczIAATEAAAABP#AAAAAAAAD#####AAAAAQAHQ01pbGlldQD#####AQAAAAEQAAJKMQAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAAIv####8AAAABABFDU3ltZXRyaWVDZW50cmFsZQD#####AAAAQgAAABAA#####wEAAAABEAABSgAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAAQwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABDAAAAHAD#####AQAAAAEQAAJJMQAAAAAAAAAAAEAIAAAAAAAABQAAAAAiAAAAHgAAAB0A#####wAAAEYAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAARwAAABAA#####wEAAAABEAABSQAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAARwAAABkA#####wAAAA0AAAAiAAAAEAD#####AQAAAAEQAAFBAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABKAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAEoAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAASgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACAAAABK#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAABAAAABQAAACAAAABEAAAARQAAACIAAAAgAAAAHgD#####AAAAAAABAAAABQAAAB4AAAAiAAAASAAAAEkAAAAeAAAAHgD#####AAAAAAABAAAABQAAAEsAAABOAAAATAAAAE0AAABLAAAAHgD#####AAAAAAABAAAABQAAAA0AAAAgAAAAIgAAAB4AAAANAAAAFgD#####AP8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAABgAAAAXAP####8A5ubmAAEAAAANAAAASQAAAEQAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAD#####AAAAAQARQ1BvaW50UGFyQWJzY2lzc2UA#####wEAAAAAEAABVQAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAASQAAAAcBAAAACAAAAAMAAAABP#AAAAAAAAAAAAAfAP####8BAAAAABAAAVYAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEQAAAAHAQAAAAgAAAA3AAAAAT#wAAAAAAAA#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAA0AAABVAAAAIAD#####AQAAAAAQAAABAAEAAAANAAAAVgAAAA8A#####wEAAAAAEAACVTEAAAAAAAAAAABACAAAAAAAAAUAAT#TA9Z22dUpAAAAVwAAABkA#####wAAAA0AAABWAAAAEAD#####AQAAAAAQAAJWMQAAAAAAAAAAAEAIAAAAAAAABQAAAABZAAAAWgAAACAA#####wEAAAAAEAAAAQABAAAAWQAAAFsAAAAPAP####8BAAAAABAAAlUyAAAAAAAAAAAAQAgAAAAAAAAFAAE#1tGzvqNnfgAAAFwAAAAZAP####8AAAANAAAAXQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABeAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAAF4AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAiAAAAXgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB4AAABeAAAAHgD#####AQAAAAABAAAABQAAAF8AAABgAAAAYQAAAGIAAABfAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASAAAAF4AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABJAAAAXgAAAB4A#####wEAAAAAAQAAAAUAAABiAAAAYQAAAGQAAABlAAAAYgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEQAAABeAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARQAAAF4AAAAeAP####8BAAAAAAEAAAAFAAAAYAAAAGcAAABoAAAAYQAAAGAAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABLAAAAXgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAE4AAABeAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAATAAAAF4AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABNAAAAXgAAAB4A#####wEAAAAAAQAAAAUAAABqAAAAawAAAGwAAABtAAAAav####8AAAACAAhDTWVzdXJlWAD#####AAF4AAAAVAAAAF3#####AAAAAgAIQ01lc3VyZVkA#####wABeQAAAFQAAABdAAAAAgD#####AAJ4MQAMaW50KHgrMC4wMDEpAAAABgIAAAAHAAAAAAgAAABvAAAAAT9QYk3S8an8AAAAAgD#####AAJ5MQAMaW50KHkrMC4wMDEpAAAABgIAAAAHAAAAAAgAAABwAAAAAT9QYk3S8an8AAAAAgD#####AANudW0ADHgxKjIrbngqNCp5MQAAAAcAAAAABwIAAAAIAAAAcQAAAAFAAAAAAAAAAAAAAAcCAAAABwIAAAAIAAAAAwAAAAFAEAAAAAAAAAAAAAgAAAByAAAAHAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAXQAAAGH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAP####8BAAAAAMAmAAAAAAAAwCP#######AAAAB0EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHMAAAACAP####8ABG51bTEABW51bSsxAAAABwAAAAAIAAAAcwAAAAE#8AAAAAAAAAAAAAIA#####wAEbnVtJwAIbnVtK254KjIAAAAHAAAAAAgAAABzAAAABwIAAAAIAAAAAwAAAAFAAAAAAAAAAAAAAAIA#####wAFbnVtJzEABm51bScrMQAAAAcAAAAACAAAAHcAAAABP#AAAAAAAAAAAAAcAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABgAAAAaAAAABwA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGEAAABsAAAAHAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYgAAAGQAAAAjAP####8BAAAAAMAmAAAAAAAAwCQAAAAAAAAAAAB7EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHYAAAAjAP####8BAAAAAMAkAAAAAAAAwCQAAAAAAAAAAAB5EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHcAAAAjAP####8BAAAAAMAiAAAAAAAAwCAAAAAAAAAAAAB6EgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAHj#####AAAAAgASQ0xpZXVPYmpldFBhclB0TGllAP####8BAAAAAAAAYwAAAAgAAAA3AAAAXQAAAAcAAABdAAAAXgAAAF8AAABgAAAAYQAAAGIAAABjAAAAJAD#####AQAAAAAAAGkAAAAIAAAANwAAAF0AAAAHAAAAXQAAAF4AAABgAAAAYQAAAGcAAABoAAAAaQAAACQA#####wEAAAAAAABuAAAACAAAADcAAABdAAAABwAAAF0AAABeAAAAagAAAGsAAABsAAAAbQAAAG4AAAAkAP####8BAAAAAAAAZgAAAAgAAAA3AAAAXQAAAAcAAABdAAAAXgAAAGEAAABiAAAAZAAAAGUAAABmAAAAJAD#####AAAAAAAAAH8AAAAIAAAAAwAAAFkAAAALAAAAWQAAAFsAAABcAAAAXQAAAF4AAABfAAAAYAAAAGEAAABiAAAAYwAAAH8AAAAkAP####8AAAAAAAAAggAAAAgAAAADAAAAWQAAAAsAAABZAAAAWwAAAFwAAABdAAAAXgAAAGEAAABiAAAAZAAAAGUAAABmAAAAggAAACQA#####wAAAAAAAACBAAAACAAAAAMAAABZAAAACwAAAFkAAABbAAAAXAAAAF0AAABeAAAAagAAAGsAAABsAAAAbQAAAG4AAACBAAAAJAD#####AAAAAAAAAIAAAAAIAAAAAwAAAFkAAAALAAAAWQAAAFsAAABcAAAAXQAAAF4AAABgAAAAYQAAAGcAAABoAAAAaQAAAIAAAAAkAP####8BAAAAAAAAdQAAAAgAAAA3AAAAXQAAAAoAAABdAAAAXgAAAGEAAABvAAAAcAAAAHEAAAByAAAAcwAAAHQAAAB1AAAAJAD#####AAAAAAAAAIcAAAAIAAAAAwAAAFkAAAAOAAAAWQAAAFsAAABcAAAAXQAAAF4AAABhAAAAbwAAAHAAAABxAAAAcgAAAHMAAAB0AAAAdQAAAIcAAAAkAP####8BAAAAAAAAfAAAAAgAAAA3AAAAXQAAAAwAAABdAAAAXgAAAGIAAABkAAAAbwAAAHAAAABxAAAAcgAAAHMAAAB2AAAAewAAAHwAAAAkAP####8AAAAAAAAAiQAAAAgAAAADAAAAWQAAABAAAABZAAAAWwAAAFwAAABdAAAAXgAAAGIAAABkAAAAbwAAAHAAAABxAAAAcgAAAHMAAAB2AAAAewAAAHwAAACJAAAAJAD#####AQAAAAAAAH4AAAAIAAAANwAAAF0AAAANAAAAXQAAAF4AAABhAAAAbAAAAG8AAABwAAAAcQAAAHIAAABzAAAAdwAAAHgAAAB6AAAAfgAAACQA#####wAAAAAAAACLAAAACAAAAAMAAABZAAAAEQAAAFkAAABbAAAAXAAAAF0AAABeAAAAYQAAAGwAAABvAAAAcAAAAHEAAAByAAAAcwAAAHcAAAB4AAAAegAAAH4AAACLAAAAJAD#####AQAAAAAAAH0AAAAIAAAANwAAAF0AAAAMAAAAXQAAAF4AAABgAAAAaAAAAG8AAABwAAAAcQAAAHIAAABzAAAAdwAAAHkAAAB9AAAAJAD#####AAAAAAAAAI0AAAAIAAAAAwAAAFkAAAAQAAAAWQAAAFsAAABcAAAAXQAAAF4AAABgAAAAaAAAAG8AAABwAAAAcQAAAHIAAABzAAAAdwAAAHkAAAB9AAAAjf####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAABJAAAAIQAAAACPAAJ4MgAAABwAAABJAAAAIgAAAACPAAJ5MgAAABwAAABJAAAAGgEAAACPAf8AAABAHAAAAAAAAAAAAAAAAAAAAAAASRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAARAAAACEAAAAAkwACeDIAAAAcAAAARAAAACIAAAAAkwACeTIAAAAcAAAARAAAABoBAAAAkwH#AAAAQBwAAAAAAADANQAAAAAAAAAAAEQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAlAP####8AKUFmZmljaGFnZSBkJ8OpcXVhdGlvbiBkZSBkcm9pdGUgb3UgY2VyY2xlAAAAAgAAAAEAAAACAAAAHAAAACAAAAAhAAAAAJcAAngyAAAAHAAAACAAAAAiAAAAAJcAAnkyAAAAHAAAACAAAAAaAQAAAJcB#wAAAL#wAAAAAAAAQAAAAAAAAAAAAAAgEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAFygjVmFsKHgyLDEpLCNWYWwoeTIsMikpAAAAJQD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAAAeAAAAIQAAAACbAAJ4MgAAABwAAAAeAAAAIgAAAACbAAJ5MgAAABwAAAAeAAAAGgEAAACbAf8AAAC#8AAAAAAAAD#########gAAAAHhAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAAIgAAACEAAAAAnwACeDIAAAAcAAAAIgAAACIAAAAAnwACeTIAAAAcAAAAIgAAABoBAAAAnwH#AAAAQBgAAAAAAADANQAAAAAAAAAAACIQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAQAP####8B#wAAARAAAkExAMA3AAAAAAAAv#AAAAAAAAAFAAAAACIAAABKAAAAJQD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAACjAAAAIQAAAACkAAJ4MgAAABwAAACjAAAAIgAAAACkAAJ5MgAAABwAAACjAAAAGgEAAACkAf8AAABAEAAAAAAAAMAzAAAAAAAAAAAAoxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAAAIA#####wACeGIAAjI0AAAAAUA4AAAAAAAAAAAAAgD#####AAJ5YgACMTYAAAABQDAAAAAAAAAAAAACAP####8ABG51bWIAAjEwAAAAAUAkAAAAAAAAAAAAAgD#####AARudW1jAAIzMwAAAAFAQIAAAAAAAAAAAAIA#####wADeGMyAAEzAAAAAUAIAAAAAAAAAAAAAgD#####AAN5YzIAATUAAAABQBQAAAAAAAAAAAACAP####8AA3hjMwABNgAAAAFAGAAAAAAAAAAAAAIA#####wADeWMzAAE3AAAAAUAcAAAAAAAAAAAAGAD#####AQAAAAAQAAFiAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAqAAAAAgAAACpAAAAGAD#####AH8AAAAQAAJjMgAAAAAAAAAAAEAIAAAAAAAACQAAAAAcAAAACAAAAKwAAAAIAAAArQAAABgA#####wAAAH8AEAACYzMAAAAAAAAAAABACAAAAAAAAAkAAAAAHAAAAAgAAACuAAAACAAAAK8AAAAeAP####8AAAAAAAEAAAAFAAAALgAAAC8AAAAwAAAAMQAAAC4AAAAeAP####8ALLgsAAEAAAAFAAAAMwAAADQAAAA1AAAANgAAADP#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AAB#AAAAAAUAAAC0AAAAHQD#####AAAALAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADMAAAC2AAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANAAAALYAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA1AAAAtgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADYAAAC2AAAAHgD#####ASy4LAABAAAABQAAALcAAAC4AAAAuQAAALoAAAC3AAAAJgD#####AQB#AAAAAAUAAAC7AAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADkAAAAIAAAAqgAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACAAAAC9AAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAARAAAAL0AAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAABFAAAAvQAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACIAAAC9AAAAHgD#####AAAAAAABAAAABQAAAL4AAAC#AAAAwAAAAMEAAAC+AAAAGQD#####AAAADQAAALAAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAC+AAAAwwAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAL8AAADDAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAwAAAAMMAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAADBAAAAwwAAAB4A#####wD#AAAAAQAAAAUAAADEAAAAxQAAAMYAAADHAAAAxAAAACYA#####wD#AAAAAAAFAAAAyAAAAB0A#####wAAALEAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAADEAAAAygAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAMUAAADKAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAxgAAAMoAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAADHAAAAygAAAB4A#####wH#AAAAAQAAAAUAAADLAAAAzAAAAM0AAADOAAAAywAAACYA#####wH#AAAAAAAFAAAAzwAAABkA#####wAAAA0AAAArAAAAHQD#####AAAAsv####8AAAABABJDTWFjcm9DbGlnbm90ZW1lbnQA#####wAA#wAB#####wpAi8QAAAAAAEBSoUeuFHriAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQ2xpZ25vdGUxAAAAAAACAAAAuwAAALwAAAAU#####wAAAAEAC0NNYWNyb1BhdXNlAP####8AAAAAAf####8QQI70AAAAAABAQcKPXCj1wwIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAAC#####wAAAAEAEkNBcmNEZUNlcmNsZURpcmVjdAD#####AQD#AAABAAAALAAAACv#####AAAAAUBmgAAAAAAAAAAAKQD#####AQAAAAABAAAAsQAAAMX#####AAAAAUBmgAAAAAAA#####wAAAAEAD0NQb2ludExpZUNlcmNsZQD#####Af8AAAEQAAAAAAAAAAAAAABACAAAAAAAAAUAAT9Q#XA667psAAAA1gAAACUA#####wAXTWVzdXJlIGQnYW5nbGUgb3JpZW50w6kAAAACAAAAAwAAAAMAAADFAAAAsQAAANf#####AAAAAQAMQ0Jpc3NlY3RyaWNlAAAAANgBAAAAABAAAAEAAQAAANcAAACxAAAAxQAAAA8AAAAA2AEAAAAAEAAAAAAAAAAAAAAAP+MzMzMzMzMFAAFAaT5Clg7dyQAAANn#####AAAAAgATQ01lc3VyZUFuZ2xlT3JpZW50ZQEAAADYAAZhbmdsZTIAAADFAAAAsQAAANcAAAAjAQAAANgBAAAAAEAIAAAAAAAAP#AAAAAAAAAAAADaDwAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAACwrAAAAAA2#####8AAAACABNDTWFycXVlQW5nbGVPcmllbnRlAQAAANgBAAAAAAEAAAABQEJbiQkrj78AAADFAAAAsQAAANcAAAAADQD#####AAAAsQAAAAgAAADbAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAxAAAAN4AAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADFAAAA3gAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAMYAAADeAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAxwAAAN4AAAAeAP####8B#wAAAAEAAAAFAAAA3wAAAOAAAADhAAAA4gAAAN8AAAAmAP####8B#wAAAAAABQAAAOP#####AAAAAQAQQ01hY3JvQXBwYXJpdGlvbgD#####AP8AAAH#####CkCMxAAAAAAAQHsoUeuFHrgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAtBcHBhcml0aW9uMgAAAAAABgAAAM8AAADQAAAA4wAAAOQAAADXAAAA4AD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wD#AAAB#####wpAjPQAAAAAAEB9aFHrhR64AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHbWFzcXVlMgAAAAAABgAAAM8AAADQAAAA4wAAAOQAAADXAAAA4AAAACcA#####wD#AAAB#####wpAjQwAAAAAAEB#eFHrhR64AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQ2xpZ25vdGUyAAAAAAACAAAAzwAAANAAAAAU#####wAAAAIAGENNYWNyb0FuaW1hdGlvbkF2ZWNUcmFjZQD#####AP8AAAH#####CkCNXAAAAAAAQIC8KPXCj1wCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAd0b3VybmUyAAAAAAABAAAA1wABAAAAABQAAABkAAAAUAAAANcBAP####8AAAABABFDTWFjcm9TdWl0ZU1hY3JvcwD#####AP8AAAH#####CkBbIAAAAAAAQDOFHrhR64ACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAxDb3JyZWN0aW9uIGIAAAAAAAUAAADnAAAA1AAAAOUAAADoAAAA5gAAAA4A#####wAAAA0AAAAHAwAAAAE#8AAAAAAAAAAAAAoAAAA4AAAACAAAAKsAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABLAAAA6gAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAE4AAADqAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAATAAAAOoAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABNAAAA6gAAAB4A#####wH#AAAAAQAAAAUAAADrAAAA7AAAAO0AAADuAAAA6wAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAOsAAADRAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA7AAAANEAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADtAAAA0QAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAO4AAADRAAAAHgD#####AAAAfwABAAAABQAAAPAAAADxAAAA8gAAAPMAAADwAAAAJgD#####AAAAfwAAAAUAAAD0AAAAKQD#####Af##AAABAAAAsgAAAPD#####AAAAAUBmgAAAAAAAAAAAKgD#####AQAAfwEQAAAAAAAAAAAAAABACAAAAAAAAAUAAT8pd5Uhq1lCAAAA9gAAACUA#####wAXTWVzdXJlIGQnYW5nbGUgb3JpZW50w6kAAAACAAAAAwAAAAMAAADwAAAAsgAAAPcAAAArAAAAAPgBAAAAABAAAAEAAQAAAPcAAACyAAAA8AAAAA8AAAAA+AEAAAAAEAAAAAAAAAAAAAAAP+MzMzMzMzMFAAFAaT5Clg7dyQAAAPkAAAAsAQAAAPgABmFuZ2xlMwAAAPAAAACyAAAA9wAAACMBAAAA+AH##wAAQAgAAAAAAAA#8AAAAAAAAAAAAPoPAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAALCsAAAAAD7AAAALQEAAAD4Af##AAABAAAAAUBCW4kJK4+#AAAA8AAAALIAAAD3AAAAABAA#####wH##wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAPAAAADSAAAAEAD#####Af##AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA8QAAANIAAAAQAP####8B##8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADyAAAA0gAAABAA#####wH##wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAPMAAADSAAAAHgD#####AQAAfwABAAAABQAAAP4AAAD#AAABAAAAAQEAAAD+AAAAJgD#####AQAAfwAAAAUAAAECAAAADQD#####AAAAsgAAAAgAAAD7AAAAEAD#####Af##AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA8AAAAQQAAAAQAP####8B##8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADxAAABBAAAABAA#####wH##wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAPIAAAEEAAAAEAD#####Af##AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAA8wAAAQQAAAAeAP####8BAAB#AAEAAAAFAAABBQAAAQYAAAEHAAABCAAAAQUAAAAmAP####8BAAB#AAAABQAAAQkAAAAuAP####8AAAB#Af####8KQIy0AAAAAABAZDCj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAAC0FwcGFyaXRpb24zAAAAAAAFAAABAgAAAQMAAAEJAAABCgAAAPcAAAAALwD#####AAAAfwH#####CkCM1AAAAAAAQGhQo9cKPXECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAdtYXNxdWUzAAAAAAAFAAABAgAAAQMAAAEJAAABCgAAAPcAAAAnAP####8AAAB#Af####8KQIzsAAAAAABAa9Cj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAACUNsaWdub3RlMwAAAAAAAgAAAQIAAAEDAAAAFAAAADAA#####wAAAH8B#####wpAjSwAAAAAAEBvsKPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHdG91cm5lMwAAAAAAAQAAAPcAAQAAAAAUAAAAZAAAAFAAAAD3AQAAAAAxAP####8AAAB#Af####8KQGbwAAAAAABAM4UeuFHriAIAAAAAAAAAAAAAAAABAAAAAAAAAAAADENvcnJlY3Rpb24gYwAAAAAABQAAAQ0AAADUAAABCwAAAQ4AAAEMAAAAKQD#####AQAAfwABAAAALAAAACr#####AAAAAUBmgAAAAAAAAAAAKgD#####AQB#AAEQAAAAAAAAAAAAAABACAAAAAAAAAUAAT9vMNoie5k2AAABEAAAACUA#####wAXTWVzdXJlIGQnYW5nbGUgb3JpZW50w6kAAAACAAAAAwAAAAMAAAAqAAAALAAAAREAAAArAAAAARIBAAAAABAAAAEAAQAAAREAAAAsAAAAKgAAAA8AAAABEgEAAAAAEAAAAAAAAAAAAAAAP+MzMzMzMzMFAAFAaT5Clg7dyQAAARMAAAAsAQAAARIABmFuZ2xlMQAAACoAAAAsAAABEQAAACMBAAABEgEAAH8AQAgAAAAAAAA#8AAAAAAAAAAAARQPAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAALCsAAAAAEVAAAALQEAAAESAQAAfwABAAAAAUBCW4kJK4+#AAAAKgAAACwAAAERAAAAAA0A#####wAAACwAAAAIAAABFQAAABAA#####wEAAH8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADMAAAEYAAAAEAD#####AQAAfwAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANAAAARgAAAAQAP####8BAAB#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA1AAABGAAAABAA#####wEAAH8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADYAAAEYAAAAHgD#####AQB#AAABAAAABQAAARkAAAEaAAABGwAAARwAAAEZAAAAJgD#####AQB#AAAAAAUAAAEdAAAALgD#####AAB#AAH#####EECKFAAAAAAAQEFCj1wo9cMCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAtBcHBhcml0aW9uMQAAAAAABQAAALsAAAC8AAABHQAAAR4AAAERAAAAAC8A#####wAAfwAB#####wpAikwAAAAAAEBZ4UeuFHriAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHbWFzcXVlMQAAAAAABQAAALsAAAC8AAABHQAAAR4AAAERAAAAMAD#####AAB#AAH#####CkCKdAAAAAAAQF#hR64UeuICAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAd0b3VybmUxAAAAAAABAAABEQABAAAAABQAAABkAAAAUAAAAREBAAAAADEA#####wAAfwAB#####wpAQEAAAAAAAEAzhR64UeuIAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAMQ29ycmVjdGlvbiBhAAAAAAAFAAAA0wAAANQAAAEfAAABIQAAASAAAAAxAP####8AAH8AAf####8KQI9MAAAAAABAcFhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACkNvcnJlY3Rpb24AAAAAAAMAAAEiAAAA6QAAAQ################8="
				// Première question : une figure dans tabfigA, une symétrie par rapport au milieu d'un [B'C'], logiquement : l'image est dans tabfigB et B' est l'image de C !
				indexA = randint(0, nx * ny - 1)
				numA = tabfigA[indexA][2]
				indexcentre1 = randint(0, nx * ny - 1, [indexA]) // indexcentre1 est l'index du bloc de 4 figures A,B,C et D, il sert dans les 4 tableaux.
				numcentre1 = tabfigA[indexcentre1][2] // [B'C'] est le segment commun à une figA et à une FigB. ici on prend le N° de la figure A, la figure B est la suivante.
				//on calcule les coordonnées du milieu de [BC] on ajoute aux coordonnées du milieu de [BC] celles du vecteur BB'. (j'aurais pu réduire mais cela aurait rendu le calcul plus opaque)
				xmil1 = (xB + xC) / 2 + tabfigB[indexcentre1][0] - xB
				ymil1 = (yB + yC) / 2 + tabfigB[indexcentre1][1] - yB
				point = image_point_par_transformation(7, [tabfigC[indexA][0], tabfigC[indexA][1]], [xmil1, ymil1])
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigB[j][0] && point[1] == tabfigB[j][1]) {
							trouver = true
							num1 = tabfigB[j][2]
							xa = tabfigA[indexA][0]
							ya = tabfigA[indexA][1]
							break
						}
					}
					if (trouver == false) {
						indexA = randint(0, nx * ny - 1)
						numA = tabfigA[indexA][2]
						indexcentre1 = randint(0, nx * ny - 1)
						numcentre1 = tabfigA[indexcentre1][2]
						xmil1 = (xB + xC) / 2 + tabfigB[indexcentre1][0] - xB
						ymil1 = (yB + yC) / 2 + tabfigB[indexcentre1][1] - yB
						point = image_point_par_transformation(7, [tabfigC[indexA][0], tabfigC[indexA][1]], [xmil1, ymil1])
					}
				}
				texte += num_alpha(0) + texte_en_couleur_et_gras(` Quel est le numéro de la figure symétrique de la figure ${numA} dans la symétrie par rapport à ${s0} ?<br>`, `green`)
				texte_corr = num_alpha(0) + texte_en_couleur_et_gras(` La figure symétrique de la figure ${numA} dans la symétrie par rapport à ${s0} porte le numéro ${num1}.<br>`, `green`)
				// Deuxième question : une figure dans tabfigD, une symétrie par rapport au milieu d'un [C'D'], le résultat est une figure dans tabfigA et C' est l'image de D !
				indexD = randint(0, nx * ny - 1)
				numD = tabfigD[indexD][2]
				indexcentre2 = randint(0, nx * ny - 1, [indexD]) // indexcentre2 est l'index du bloc de 4 figures A,B,C et D, il sert dans les 4 tableaux.
				numcentre2 = tabfigA[indexcentre2][2] // [D'C'] est le segment commun à une figA et à une FigD. ici on prend le N° de la figure A, la figure D est 2*nx+N°figA.
				//on calcule les coordonnées du milieu de [DC] on ajoute aux coordonnées du milieu de [DC] celles du vecteur DD'.
				xmil2 = (xD + xC) / 2 + tabfigD[indexcentre2][0] - xD
				ymil2 = (yD + yC) / 2 + tabfigD[indexcentre2][1] - yD
				point = image_point_par_transformation(7, [tabfigD[indexD][0], tabfigD[indexD][1]], [xmil2, ymil2])
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigC[j][0] && point[1] == tabfigC[j][1]) {
							trouver = true
							num2 = tabfigC[j][2]
							xb = tabfigA[indexD][0]
							yb = tabfigA[indexD][1]
							break
						}
					}
					if (trouver == false) {
						indexD = randint(0, nx * ny - 1)
						numD = tabfigD[indexD][2]
						indexcentre2 = randint(0, nx * ny - 1, [indexD])
						numcentre2 = tabfigA[indexcentre2][2]
						xmil2 = (xD + xC) / 2 + tabfigD[indexcentre2][0] - xD
						ymil2 = (yD + yC) / 2 + tabfigD[indexcentre2][1] - yD
						point = image_point_par_transformation(7, [tabfigD[indexD][0], tabfigD[indexD][1]], [xmil2, ymil2])
					}
				}

				texte += num_alpha(1) + texte_en_couleur_et_gras(` Quel est le numéro de la figure symétrique de la figure ${numD} dans la symétrie par rapport à ${s1} ?<br>`, `red`)
				texte_corr += num_alpha(1) + texte_en_couleur_et_gras(` La figure symétrique de la figure ${numD} dans la symétrie par rapport à ${s1} porte le numéro ${num2}.<br>`, `red`)
				// troisième question : une figure dans tabfigC, une symétrie par rapport au symétrique du milieu de [A'D'] par rapport au milieu de [C'D']... pas très clair
				// le résultat est une figure dans tabfigD et le point (C'+ vecteur AC) a pour image D' !
				indexC = randint(0, nx * ny - 1)
				numC = tabfigC[indexC][2]
				indexcentre3 = randint(0, nx * ny - 1, [indexC]) // indexcentre2 est l'index du bloc de 4 figures A,B,C et D, il sert dans les 4 tableaux.
				numcentre3 = tabfigD[indexcentre3][2] // le centre de symétrie est le milieu du segment commun à une figC et à une FigD. ici on prend le N° de la figure D, la figure C est la suivante.
				//on calcule les coordonnées du milieu du centre de symétrie : (C' + D + AC)/2=AC+AD/2 que l'on translate de CC' donc ça fait AC' + AD/2
				xmil3 = xD / 2 + tabfigC[indexcentre3][0]
				ymil3 = yD / 2 + tabfigC[indexcentre3][1]
				point = image_point_par_transformation(7, [tabfigC[indexC][0] + xC, tabfigC[indexC][1] + yC], [xmil3, ymil3]) // c'est le sommet C + AC qui a pour image D.
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigD[j][0] && point[1] == tabfigD[j][1]) {
							trouver = true
							num3 = tabfigD[j][2]
							xc = tabfigA[indexC][0]
							yc = tabfigA[indexC][1]
							break
						}
					}
					if (trouver == false) {
						indexC = randint(0, nx * ny - 1)
						numC = tabfigC[indexC][2]
						indexcentre3 = randint(0, nx * ny - 1, [indexC])
						numcentre3 = tabfigD[indexcentre3][2]
						xmil3 = xD / 2 + tabfigC[indexcentre3][0]
						ymil3 = yD / 2 + tabfigC[indexcentre3][1]
						point = image_point_par_transformation(7, [tabfigC[indexC][0] + xC, tabfigC[indexC][1] + yC], [xmil3, ymil3])
					}
				}
				texte += num_alpha(2) + texte_en_couleur_et_gras(` Quel est le numéro de la figure symétrique de la figure ${numC} dans la symétrie par rapport à ${s2} ?<br>`, `blue`)
				texte_corr += num_alpha(2) + texte_en_couleur_et_gras(` La figure symétrique de la figure ${numC} dans la symétrie par rapport à ${s2} porte le numéro ${num3}.<br>`, `blue`)
				break

			case 3: //translations
				let iB1, iB2, iB3, iC1, iA1, iD1
				this.MG32codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+0euFAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAMj#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAVBbmdsZQABMAAAAAEAAAAAAAAAAAAAAAIA#####wAEWm9vbQACMzAAAAABQD4AAAAAAAAAAAACAP####8AAm54AAE1AAAAAUAUAAAAAAAA#####wAAAAEABUNGb25jAP####8AB21vZHVsb3gACG1vZCh4LDIp#####wAAAAEADUNGb25jdGlvbjJWYXIG#####wAAAAIAEUNWYXJpYWJsZUZvcm1lbGxlAAAAAAAAAAFAAAAAAAAAAAABeAAAAAMA#####wAHbW9kdWxveQASbW9kKGludCh5L254LzIpLDIpAAAABAb#####AAAAAgAJQ0ZvbmN0aW9uAv####8AAAABAApDT3BlcmF0aW9uAwAAAAcDAAAABQAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAAwAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAABeQAAAAMA#####wACcjAAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTApLDEsMCn#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAHAgAAAAcI#####wAAAAEADkNBcHBlbEZvbmN0aW9uAAAABAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAgD#####AAJ5RAABNgAAAAFAGAAAAAAAAAAAAAIA#####wACeEQAATAAAAABAAAAAAAAAAAAAAACAP####8AAnlDAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ4QwABNgAAAAFAGAAAAAAAAAAAAAIA#####wACeUIAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhCAAE0AAAAAUAQAAAAAAAA#####wAAAAEACkNQb2ludEJhc2UA#####wAAAAAAEAABTwDAMgAAAAAAAMAzAAAAAAAABQABQFKgAAAAAABAYLCj1wo9cf####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####Af8AAAEQAAABAAIAAAANAD#3Cj1wo9cK#####wAAAAEACUNSb3RhdGlvbgD#####AAAADQAAAAFAVoAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACAAAAAL#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQGeAAAAAAAAAAAAOAAAADQD#####AAAADQAAAAgAAAAB#####wAAAAEAC0NQb2ludEltYWdlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAEv####8AAAABAA5DUG9pbnRMaWVQb2ludAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAE#####8AAAABAAlDQ2VyY2xlT0EA#####wH#AAAAAgAAAA0AAAAU#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wH#AAAADQAAAQACAAAADQAAABT#####AAAAAQAQQ0RlbWlEcm9pdGVJbWFnZQD#####Af8AAAANAAABAAIAAAAWAAAAD#####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAXAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAGAAAABAA#####wH#AAAAEAACSicAAAAAAAAAAABACAAAAAAAAAUAAAAAFAAAABAAAAAQAP####8B#wAAABAAAkknAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAAAQ#####wAAAAIAB0NSZXBlcmUA#####wDm5uYBAQAAAA0AAAAbAAAAGgAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8B#wAAARAAAkInAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAADAAAAAgAAAALAAAAEQD#####AQAAAAAQAAFCAEAAAAAAAAAAwDcAAAAAAAAFAAAAAB0AAAAYAP####8B#wAAARAAAkQnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACAAAAAgAAAAHAAAAEQD#####AQAAAAAQAAFEAMAxAAAAAAAAwCoAAAAAAAAFAAAAAB8AAAAYAP####8B#wAAARAAAkMnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACgAAAAgAAAAJAAAAEQD#####AQAAAAAQAAFDAEAIAAAAAAAAv#AAAAAAAAAFAAAAACEAAAACAP####8AAnhhAAIxMgAAAAFAKAAAAAAAAAAAAAIA#####wACeWEAATgAAAABQCAAAAAAAAAAAAACAP####8ABG51bWEAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhjAAIxOAAAAAFAMgAAAAAAAAAAAAIA#####wACeWMAAjEyAAAAAUAoAAAAAAAAAAAAGAD#####AQAAAAAQAAFhAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAIwAAAAgAAAAkAAAAGAD#####AQAAAAAQAAFjAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAJgAAAAgAAAAnAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAAAYAAAAIAAAAJQAAABAA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAAAqAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAACoAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAiAAAAKgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB4AAAAq#####wAAAAEADENUcmFuc2xhdGlvbgD#####AAAADQAAACgAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAArAAAALwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACwAAAAvAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALQAAAC8AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAuAAAALwAAAAIA#####wACbnkAATUAAAABQBQAAAAAAAAAAAADAP####8AAnIzACVzaSgobW9kdWxveCh4KT0xKSoobW9kdWxveSh4KT0xKSwxLDApAAAACQAAAAAHAgAAAAcIAAAACgAAAAQAAAAFAAAAAAAAAAE#8AAAAAAAAAAAAAcIAAAACgAAAAUAAAAFAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAAAAAAEAAAAAAAAAAAABeAAAAAMA#####wACcjIAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTEpLDEsMCkAAAAJAAAAAAcCAAAABwgAAAAKAAAABAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAwD#####AAJyMQAlc2koKG1vZHVsb3goeCk9MSkqKG1vZHVsb3koeCk9MCksMSwwKQAAAAkAAAAABwIAAAAHCAAAAAoAAAAEAAAABQAAAAAAAAABP#AAAAAAAAAAAAAHCAAAAAoAAAAFAAAABQAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABAAAAAAAAAAAAAXgAAAACAP####8ABW1pbmkxAAIxMAAAAAFAJAAAAAAAAAAAAAIA#####wAFbWF4aTEAAjQwAAAAAUBEAAAAAAAAAAAAAgD#####AARwYXMxAAExAAAAAT#wAAAAAAAA#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAADAMQAAAAAAAMAuAAAAAAAAAAAADRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAFBAAAAAgD#####AAVtaW5pMgADLTMw#####wAAAAEADENNb2luc1VuYWlyZQAAAAFAPgAAAAAAAAAAAAIA#####wAFbWF4aTIAAjMwAAAAAUA+AAAAAAAAAAAAAgD#####AARwYXMyAAExAAAAAT#wAAAAAAAA#####wAAAAEAB0NNaWxpZXUA#####wEAAAABEAACSjEAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAACL#####AAAAAQARQ1N5bWV0cmllQ2VudHJhbGUA#####wAAAD8AAAAQAP####8BAAAAARAAAUoAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAEAAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAAQAAAABwA#####wEAAAABEAACSTEAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAB4AAAAdAP####8AAABDAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEQAAAAQAP####8BAAAAARAAAUkAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAAEQAAAAZAP####8AAAANAAAAIgAAABAA#####wEAAAABEAABQQAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAARwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACIAAABHAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAEcAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAAR#####8AAAABAAlDUG9seWdvbmUA#####wAAAAAAAQAAAAUAAAAgAAAAQQAAAEIAAAAiAAAAIAAAAB4A#####wAAAAAAAQAAAAUAAAAeAAAAIgAAAEUAAABGAAAAHgAAAB4A#####wAAAAAAAQAAAAUAAABIAAAASwAAAEkAAABKAAAASAAAAB4A#####wAAAAAAAQAAAAUAAAANAAAAIAAAACIAAAAeAAAADQAAABYA#####wD#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAYAAAAFwD#####AObm5gABAAAADQAAAEYAAABBAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEAEUNQb2ludFBhckFic2Npc3NlAP####8BAAAAABAAAVUAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEYAAAAHAQAAAAgAAAADAAAAAT#wAAAAAAAAAAAAHwD#####AQAAAAAQAAFWAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABBAAAABwEAAAAIAAAANAAAAAE#8AAAAAAAAP####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAANAAAAUgAAACAA#####wEAAAAAEAAAAQABAAAADQAAAFMAAAAPAP####8BAAAAABAAAlUxAAAAAAAAAAAAQAgAAAAAAAAFAAE#0wPWdtnVKQAAAFQAAAAZAP####8AAAANAAAAUwAAABAA#####wEAAAAAEAACVjEAAAAAAAAAAABACAAAAAAAAAUAAAAAVgAAAFcAAAAgAP####8BAAAAABAAAAEAAQAAAFYAAABYAAAADwD#####AQAAAAAQAAJVMgAAAAAAAAAAAEAIAAAAAAAABQABP9bRs76jZ34AAABZAAAAGQD#####AAAADQAAAFoAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAAWwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACAAAABbAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAFsAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAAWwAAAB4A#####wEAAAAAAQAAAAUAAABcAAAAXQAAAF4AAABfAAAAXAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEUAAABbAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARgAAAFsAAAAeAP####8BAAAAAAEAAAAFAAAAXwAAAF4AAABhAAAAYgAAAF8AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABBAAAAWwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEIAAABbAAAAHgD#####AQAAAAABAAAABQAAAF0AAABkAAAAZQAAAF4AAABdAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASAAAAFsAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABLAAAAWwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEkAAABbAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASgAAAFsAAAAeAP####8BAAAAAAEAAAAFAAAAZwAAAGgAAABpAAAAagAAAGf#####AAAAAgAIQ01lc3VyZVgA#####wABeAAAAFEAAABa#####wAAAAIACENNZXN1cmVZAP####8AAXkAAABRAAAAWgAAAAIA#####wACeDEADGludCh4KzAuMDAxKQAAAAYCAAAABwAAAAAIAAAAbAAAAAE#UGJN0vGp#AAAAAIA#####wACeTEADGludCh5KzAuMDAxKQAAAAYCAAAABwAAAAAIAAAAbQAAAAE#UGJN0vGp#AAAAAIA#####wADbnVtAAx4MSoyK254KjQqeTEAAAAHAAAAAAcCAAAACAAAAG4AAAABQAAAAAAAAAAAAAAHAgAAAAcCAAAACAAAAAMAAAABQBAAAAAAAAAAAAAIAAAAbwAAABwA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFoAAABe#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQD#####AQAAAADAJgAAAAAAAMAj#######wAAAAcRIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABwAAAAAgD#####AARudW0xAAVudW0rMQAAAAcAAAAACAAAAHAAAAABP#AAAAAAAAAAAAACAP####8ABG51bScACG51bStueCoyAAAABwAAAAAIAAAAcAAAAAcCAAAACAAAAAMAAAABQAAAAAAAAAAAAAACAP####8ABW51bScxAAZudW0nKzEAAAAHAAAAAAgAAAB0AAAAAT#wAAAAAAAAAAAAHAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAXQAAAGUAAAAcAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABeAAAAaQAAABwA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAF8AAABhAAAAIwD#####AQAAAADAJgAAAAAAAMAkAAAAAAAAAAAAeBIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABzAAAAIwD#####AQAAAADAJAAAAAAAAMAkAAAAAAAAAAAAdhIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAAB0AAAAIwD#####AQAAAADAIgAAAAAAAMAgAAAAAAAAAAAAdxIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAAB1#####wAAAAIAEkNMaWV1T2JqZXRQYXJQdExpZQD#####AQAAAAAAAGAAAAAIAAAANAAAAFoAAAAHAAAAWgAAAFsAAABcAAAAXQAAAF4AAABfAAAAYAAAACQA#####wEAAAAAAABmAAAACAAAADQAAABaAAAABwAAAFoAAABbAAAAXQAAAF4AAABkAAAAZQAAAGYAAAAkAP####8BAAAAAAAAawAAAAgAAAA0AAAAWgAAAAcAAABaAAAAWwAAAGcAAABoAAAAaQAAAGoAAABrAAAAJAD#####AQAAAAAAAGMAAAAIAAAANAAAAFoAAAAHAAAAWgAAAFsAAABeAAAAXwAAAGEAAABiAAAAYwAAACQA#####wAAAAAAAAB8AAAACAAAAAMAAABWAAAACwAAAFYAAABYAAAAWQAAAFoAAABbAAAAXAAAAF0AAABeAAAAXwAAAGAAAAB8AAAAJAD#####AAAAAAAAAH8AAAAIAAAAAwAAAFYAAAALAAAAVgAAAFgAAABZAAAAWgAAAFsAAABeAAAAXwAAAGEAAABiAAAAYwAAAH8AAAAkAP####8AAAAAAAAAfgAAAAgAAAADAAAAVgAAAAsAAABWAAAAWAAAAFkAAABaAAAAWwAAAGcAAABoAAAAaQAAAGoAAABrAAAAfgAAACQA#####wAAAAAAAAB9AAAACAAAAAMAAABWAAAACwAAAFYAAABYAAAAWQAAAFoAAABbAAAAXQAAAF4AAABkAAAAZQAAAGYAAAB9AAAAJAD#####AQAAAAAAAHIAAAAIAAAANAAAAFoAAAAKAAAAWgAAAFsAAABeAAAAbAAAAG0AAABuAAAAbwAAAHAAAABxAAAAcgAAACQA#####wAAAAAAAACEAAAACAAAAAMAAABWAAAADgAAAFYAAABYAAAAWQAAAFoAAABbAAAAXgAAAGwAAABtAAAAbgAAAG8AAABwAAAAcQAAAHIAAACEAAAAJAD#####AQAAAAAAAHkAAAAIAAAANAAAAFoAAAAMAAAAWgAAAFsAAABfAAAAYQAAAGwAAABtAAAAbgAAAG8AAABwAAAAcwAAAHgAAAB5AAAAJAD#####AAAAAAAAAIYAAAAIAAAAAwAAAFYAAAAQAAAAVgAAAFgAAABZAAAAWgAAAFsAAABfAAAAYQAAAGwAAABtAAAAbgAAAG8AAABwAAAAcwAAAHgAAAB5AAAAhgAAACQA#####wEAAAAAAAB7AAAACAAAADQAAABaAAAADQAAAFoAAABbAAAAXgAAAGkAAABsAAAAbQAAAG4AAABvAAAAcAAAAHQAAAB1AAAAdwAAAHsAAAAkAP####8AAAAAAAAAiAAAAAgAAAADAAAAVgAAABEAAABWAAAAWAAAAFkAAABaAAAAWwAAAF4AAABpAAAAbAAAAG0AAABuAAAAbwAAAHAAAAB0AAAAdQAAAHcAAAB7AAAAiAAAACQA#####wEAAAAAAAB6AAAACAAAADQAAABaAAAADAAAAFoAAABbAAAAXQAAAGUAAABsAAAAbQAAAG4AAABvAAAAcAAAAHQAAAB2AAAAegAAACQA#####wAAAAAAAACKAAAACAAAAAMAAABWAAAAEAAAAFYAAABYAAAAWQAAAFoAAABbAAAAXQAAAGUAAABsAAAAbQAAAG4AAABvAAAAcAAAAHQAAAB2AAAAegAAAIr#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAARgAAACEAAAAAjAACeDIAAAAcAAAARgAAACIAAAAAjAACeTIAAAAcAAAARgAAABoBAAAAjAH#AAAAQBwAAAAAAAAAAAAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAlAP####8AKUFmZmljaGFnZSBkJ8OpcXVhdGlvbiBkZSBkcm9pdGUgb3UgY2VyY2xlAAAAAgAAAAEAAAACAAAAHAAAAEEAAAAhAAAAAJAAAngyAAAAHAAAAEEAAAAiAAAAAJAAAnkyAAAAHAAAAEEAAAAaAQAAAJAB#wAAAEAcAAAAAAAAwDUAAAAAAAAAAABBEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAFygjVmFsKHgyLDEpLCNWYWwoeTIsMikpAAAAJQD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAAAgAAAAIQAAAACUAAJ4MgAAABwAAAAgAAAAIgAAAACUAAJ5MgAAABwAAAAgAAAAGgEAAACUAf8AAAC#8AAAAAAAAEAAAAAAAAAAAAAAIBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAAHgAAACEAAAAAmAACeDIAAAAcAAAAHgAAACIAAAAAmAACeTIAAAAcAAAAHgAAABoBAAAAmAH#AAAAv#AAAAAAAAA#########4AAAAB4QAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAlAP####8AKUFmZmljaGFnZSBkJ8OpcXVhdGlvbiBkZSBkcm9pdGUgb3UgY2VyY2xlAAAAAgAAAAEAAAACAAAAHAAAACIAAAAhAAAAAJwAAngyAAAAHAAAACIAAAAiAAAAAJwAAnkyAAAAHAAAACIAAAAaAQAAAJwB#wAAAEAYAAAAAAAAwDUAAAAAAAAAAAAiEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAFygjVmFsKHgyLDEpLCNWYWwoeTIsMikpAAAAEAD#####Af8AAAEQAAJBMQDANwAAAAAAAL#wAAAAAAAABQAAAAAiAAAARwAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAAoAAAACEAAAAAoQACeDIAAAAcAAAAoAAAACIAAAAAoQACeTIAAAAcAAAAoAAAABoBAAAAoQH#AAAAQBAAAAAAAADAMwAAAAAAAAAAAKAQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAACAP####8AAnhiAAIyNAAAAAFAOAAAAAAAAAAAAAIA#####wACeWIAAjE2AAAAAUAwAAAAAAAAAAAAAgD#####AARudW1iAAIxMAAAAAFAJAAAAAAAAAAAAAIA#####wAEbnVtYwACMzMAAAABQECAAAAAAAAAAAAYAP####8BAAAAABAAAWIAAAAAAAAAAABACAAAAAAAAAUAAAAAHAAAAAgAAAClAAAACAAAAKYAAAAeAP####8AAAAAAAEAAAAFAAAAKwAAACwAAAAtAAAALgAAACsAAAAeAP####8ALLgsAAEAAAAFAAAAMAAAADEAAAAyAAAAMwAAADD#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AAB#AAAAAAUAAACrAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADYAAAAIAAAApwAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACAAAACtAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAQQAAAK0AAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAABCAAAArQAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACIAAACtAAAAHgD#####AAAAAAABAAAABQAAAK4AAACvAAAAsAAAALEAAACuAAAAGQD#####AAAADQAAAKkAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACuAAAAswAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAK8AAACzAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAsAAAALMAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACxAAAAswAAAB4A#####wD#AAAAAQAAAAUAAAC0AAAAtQAAALYAAAC3AAAAtAAAACYA#####wD#AAAAAAAFAAAAuAAAABkA#####wAAAA0AAAAp#####wAAAAEAC0NNYWNyb1BhdXNlAP####8AAAAAAf####8QQI70AAAAAABAQcKPXCj1wwIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAACAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADUAAAAIAAAAqAAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEgAAAC8AAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASwAAALwAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABJAAAAvAAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEoAAAC8AAAAHgD#####Af8AAAABAAAABQAAAL0AAAC+AAAAvwAAAMAAAAC9AAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAvQAAALoAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAC+AAAAugAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAL8AAAC6AAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAwAAAALoAAAAeAP####8AAAB#AAEAAAAFAAAAwgAAAMMAAADEAAAAxQAAAMIAAAAmAP####8AAAB#AAAABQAAAMb###############8="
				this.MG32codeBase64corr = "TWF0aEdyYXBoSmF2YTEuMAAAABI+0euFAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAART#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAVBbmdsZQABMAAAAAEAAAAAAAAAAAAAAAIA#####wAEWm9vbQACMzAAAAABQD4AAAAAAAAAAAACAP####8AAm54AAE1AAAAAUAUAAAAAAAA#####wAAAAEABUNGb25jAP####8AB21vZHVsb3gACG1vZCh4LDIp#####wAAAAEADUNGb25jdGlvbjJWYXIG#####wAAAAIAEUNWYXJpYWJsZUZvcm1lbGxlAAAAAAAAAAFAAAAAAAAAAAABeAAAAAMA#####wAHbW9kdWxveQASbW9kKGludCh5L254LzIpLDIpAAAABAb#####AAAAAgAJQ0ZvbmN0aW9uAv####8AAAABAApDT3BlcmF0aW9uAwAAAAcDAAAABQAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAAwAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAABeQAAAAMA#####wACcjAAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTApLDEsMCn#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAHAgAAAAcI#####wAAAAEADkNBcHBlbEZvbmN0aW9uAAAABAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAgD#####AAJ5RAABNgAAAAFAGAAAAAAAAAAAAAIA#####wACeEQAATAAAAABAAAAAAAAAAAAAAACAP####8AAnlDAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ4QwABNgAAAAFAGAAAAAAAAAAAAAIA#####wACeUIAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhCAAE0AAAAAUAQAAAAAAAA#####wAAAAEACkNQb2ludEJhc2UA#####wAAAAAAEAABTwDAMgAAAAAAAMAzAAAAAAAABQABQFKgAAAAAABAYLCj1wo9cf####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####Af8AAAEQAAABAAIAAAANAD#3Cj1wo9cK#####wAAAAEACUNSb3RhdGlvbgD#####AAAADQAAAAFAVoAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACAAAAAL#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQGeAAAAAAAAAAAAOAAAADQD#####AAAADQAAAAgAAAAB#####wAAAAEAC0NQb2ludEltYWdlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAEv####8AAAABAA5DUG9pbnRMaWVQb2ludAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAE#####8AAAABAAlDQ2VyY2xlT0EA#####wH#AAAAAgAAAA0AAAAU#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wH#AAAADQAAAQACAAAADQAAABT#####AAAAAQAQQ0RlbWlEcm9pdGVJbWFnZQD#####Af8AAAANAAABAAIAAAAWAAAAD#####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAXAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAGAAAABAA#####wH#AAAAEAACSicAAAAAAAAAAABACAAAAAAAAAUAAAAAFAAAABAAAAAQAP####8B#wAAABAAAkknAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAAAQ#####wAAAAIAB0NSZXBlcmUA#####wDm5uYBAQAAAA0AAAAbAAAAGgAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8B#wAAARAAAkInAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAADAAAAAgAAAALAAAAEQD#####AQAAAAAQAAFCAEAAAAAAAAAAwDcAAAAAAAAFAAAAAB0AAAAYAP####8B#wAAARAAAkQnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACAAAAAgAAAAHAAAAEQD#####AQAAAAAQAAFEAMAxAAAAAAAAwCoAAAAAAAAFAAAAAB8AAAAYAP####8B#wAAARAAAkMnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACgAAAAgAAAAJAAAAEQD#####AQAAAAAQAAFDAEAIAAAAAAAAv#AAAAAAAAAFAAAAACEAAAACAP####8AAnhhAAIxMgAAAAFAKAAAAAAAAAAAAAIA#####wACeWEAATgAAAABQCAAAAAAAAAAAAACAP####8ABG51bWEAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhjAAIxOAAAAAFAMgAAAAAAAAAAAAIA#####wACeWMAAjEyAAAAAUAoAAAAAAAAAAAAGAD#####AQAAAAAQAAFhAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAIwAAAAgAAAAkAAAAGAD#####AQAAAAAQAAFjAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAJgAAAAgAAAAnAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAAAYAAAAIAAAAJQAAABAA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAAAqAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAACoAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAiAAAAKgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB4AAAAq#####wAAAAEADENUcmFuc2xhdGlvbgD#####AAAADQAAACgAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAArAAAALwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACwAAAAvAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALQAAAC8AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAuAAAALwAAAAIA#####wACbnkAATUAAAABQBQAAAAAAAAAAAADAP####8AAnIzACVzaSgobW9kdWxveCh4KT0xKSoobW9kdWxveSh4KT0xKSwxLDApAAAACQAAAAAHAgAAAAcIAAAACgAAAAQAAAAFAAAAAAAAAAE#8AAAAAAAAAAAAAcIAAAACgAAAAUAAAAFAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAAAAAAEAAAAAAAAAAAABeAAAAAMA#####wACcjIAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTEpLDEsMCkAAAAJAAAAAAcCAAAABwgAAAAKAAAABAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAwD#####AAJyMQAlc2koKG1vZHVsb3goeCk9MSkqKG1vZHVsb3koeCk9MCksMSwwKQAAAAkAAAAABwIAAAAHCAAAAAoAAAAEAAAABQAAAAAAAAABP#AAAAAAAAAAAAAHCAAAAAoAAAAFAAAABQAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABAAAAAAAAAAAAAXgAAAACAP####8ABW1pbmkxAAIxMAAAAAFAJAAAAAAAAAAAAAIA#####wAFbWF4aTEAAjQwAAAAAUBEAAAAAAAAAAAAAgD#####AARwYXMxAAExAAAAAT#wAAAAAAAA#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAADAMQAAAAAAAMAuAAAAAAAAAAAADRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAFBAAAAAgD#####AAVtaW5pMgADLTMw#####wAAAAEADENNb2luc1VuYWlyZQAAAAFAPgAAAAAAAAAAAAIA#####wAFbWF4aTIAAjMwAAAAAUA+AAAAAAAAAAAAAgD#####AARwYXMyAAExAAAAAT#wAAAAAAAA#####wAAAAEAB0NNaWxpZXUA#####wEAAAABEAACSjEAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAACL#####AAAAAQARQ1N5bWV0cmllQ2VudHJhbGUA#####wAAAD8AAAAQAP####8BAAAAARAAAUoAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAEAAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAAQAAAABwA#####wEAAAABEAACSTEAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAB4AAAAdAP####8AAABDAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEQAAAAQAP####8BAAAAARAAAUkAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAAEQAAAAZAP####8AAAANAAAAIgAAABAA#####wEAAAABEAABQQAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAARwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACIAAABHAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAEcAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAAR#####8AAAABAAlDUG9seWdvbmUA#####wAAAAAAAQAAAAUAAAAgAAAAQQAAAEIAAAAiAAAAIAAAAB4A#####wAAAAAAAQAAAAUAAAAeAAAAIgAAAEUAAABGAAAAHgAAAB4A#####wAAAAAAAQAAAAUAAABIAAAASwAAAEkAAABKAAAASAAAAB4A#####wAAAAAAAQAAAAUAAAANAAAAIAAAACIAAAAeAAAADQAAABYA#####wD#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAYAAAAFwD#####AObm5gABAAAADQAAAEYAAABBAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEAEUNQb2ludFBhckFic2Npc3NlAP####8BAAAAABAAAVUAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEYAAAAHAQAAAAgAAAADAAAAAT#wAAAAAAAAAAAAHwD#####AQAAAAAQAAFWAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAABBAAAABwEAAAAIAAAANAAAAAE#8AAAAAAAAP####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAANAAAAUgAAACAA#####wEAAAAAEAAAAQABAAAADQAAAFMAAAAPAP####8BAAAAABAAAlUxAAAAAAAAAAAAQAgAAAAAAAAFAAE#0wPWdtnVKQAAAFQAAAAZAP####8AAAANAAAAUwAAABAA#####wEAAAAAEAACVjEAAAAAAAAAAABACAAAAAAAAAUAAAAAVgAAAFcAAAAgAP####8BAAAAABAAAAEAAQAAAFYAAABYAAAADwD#####AQAAAAAQAAJVMgAAAAAAAAAAAEAIAAAAAAAABQABP9bRs76jZ34AAABZAAAAGQD#####AAAADQAAAFoAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAAWwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACAAAABbAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAFsAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAAWwAAAB4A#####wEAAAAAAQAAAAUAAABcAAAAXQAAAF4AAABfAAAAXAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEUAAABbAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARgAAAFsAAAAeAP####8BAAAAAAEAAAAFAAAAXwAAAF4AAABhAAAAYgAAAF8AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABBAAAAWwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEIAAABbAAAAHgD#####AQAAAAABAAAABQAAAF0AAABkAAAAZQAAAF4AAABdAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASAAAAFsAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABLAAAAWwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEkAAABbAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASgAAAFsAAAAeAP####8BAAAAAAEAAAAFAAAAZwAAAGgAAABpAAAAagAAAGf#####AAAAAgAIQ01lc3VyZVgA#####wABeAAAAFEAAABa#####wAAAAIACENNZXN1cmVZAP####8AAXkAAABRAAAAWgAAAAIA#####wACeDEADGludCh4KzAuMDAxKQAAAAYCAAAABwAAAAAIAAAAbAAAAAE#UGJN0vGp#AAAAAIA#####wACeTEADGludCh5KzAuMDAxKQAAAAYCAAAABwAAAAAIAAAAbQAAAAE#UGJN0vGp#AAAAAIA#####wADbnVtAAx4MSoyK254KjQqeTEAAAAHAAAAAAcCAAAACAAAAG4AAAABQAAAAAAAAAAAAAAHAgAAAAcCAAAACAAAAAMAAAABQBAAAAAAAAAAAAAIAAAAbwAAABwA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFoAAABe#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQD#####AQAAAADAJgAAAAAAAMAj#######wAAAAcRIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABwAAAAAgD#####AARudW0xAAVudW0rMQAAAAcAAAAACAAAAHAAAAABP#AAAAAAAAAAAAACAP####8ABG51bScACG51bStueCoyAAAABwAAAAAIAAAAcAAAAAcCAAAACAAAAAMAAAABQAAAAAAAAAAAAAACAP####8ABW51bScxAAZudW0nKzEAAAAHAAAAAAgAAAB0AAAAAT#wAAAAAAAAAAAAHAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAXQAAAGUAAAAcAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABeAAAAaQAAABwA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAF8AAABhAAAAIwD#####AQAAAADAJgAAAAAAAMAkAAAAAAAAAAAAeBIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABzAAAAIwD#####AQAAAADAJAAAAAAAAMAkAAAAAAAAAAAAdhIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAAB0AAAAIwD#####AQAAAADAIgAAAAAAAMAgAAAAAAAAAAAAdxIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAAB1#####wAAAAIAEkNMaWV1T2JqZXRQYXJQdExpZQD#####AQAAAAAAAGAAAAAIAAAANAAAAFoAAAAHAAAAWgAAAFsAAABcAAAAXQAAAF4AAABfAAAAYAAAACQA#####wEAAAAAAABmAAAACAAAADQAAABaAAAABwAAAFoAAABbAAAAXQAAAF4AAABkAAAAZQAAAGYAAAAkAP####8BAAAAAAAAawAAAAgAAAA0AAAAWgAAAAcAAABaAAAAWwAAAGcAAABoAAAAaQAAAGoAAABrAAAAJAD#####AQAAAAAAAGMAAAAIAAAANAAAAFoAAAAHAAAAWgAAAFsAAABeAAAAXwAAAGEAAABiAAAAYwAAACQA#####wAAAAAAAAB8AAAACAAAAAMAAABWAAAACwAAAFYAAABYAAAAWQAAAFoAAABbAAAAXAAAAF0AAABeAAAAXwAAAGAAAAB8AAAAJAD#####AAAAAAAAAH8AAAAIAAAAAwAAAFYAAAALAAAAVgAAAFgAAABZAAAAWgAAAFsAAABeAAAAXwAAAGEAAABiAAAAYwAAAH8AAAAkAP####8AAAAAAAAAfgAAAAgAAAADAAAAVgAAAAsAAABWAAAAWAAAAFkAAABaAAAAWwAAAGcAAABoAAAAaQAAAGoAAABrAAAAfgAAACQA#####wAAAAAAAAB9AAAACAAAAAMAAABWAAAACwAAAFYAAABYAAAAWQAAAFoAAABbAAAAXQAAAF4AAABkAAAAZQAAAGYAAAB9AAAAJAD#####AQAAAAAAAHIAAAAIAAAANAAAAFoAAAAKAAAAWgAAAFsAAABeAAAAbAAAAG0AAABuAAAAbwAAAHAAAABxAAAAcgAAACQA#####wAAAAAAAACEAAAACAAAAAMAAABWAAAADgAAAFYAAABYAAAAWQAAAFoAAABbAAAAXgAAAGwAAABtAAAAbgAAAG8AAABwAAAAcQAAAHIAAACEAAAAJAD#####AQAAAAAAAHkAAAAIAAAANAAAAFoAAAAMAAAAWgAAAFsAAABfAAAAYQAAAGwAAABtAAAAbgAAAG8AAABwAAAAcwAAAHgAAAB5AAAAJAD#####AAAAAAAAAIYAAAAIAAAAAwAAAFYAAAAQAAAAVgAAAFgAAABZAAAAWgAAAFsAAABfAAAAYQAAAGwAAABtAAAAbgAAAG8AAABwAAAAcwAAAHgAAAB5AAAAhgAAACQA#####wEAAAAAAAB7AAAACAAAADQAAABaAAAADQAAAFoAAABbAAAAXgAAAGkAAABsAAAAbQAAAG4AAABvAAAAcAAAAHQAAAB1AAAAdwAAAHsAAAAkAP####8AAAAAAAAAiAAAAAgAAAADAAAAVgAAABEAAABWAAAAWAAAAFkAAABaAAAAWwAAAF4AAABpAAAAbAAAAG0AAABuAAAAbwAAAHAAAAB0AAAAdQAAAHcAAAB7AAAAiAAAACQA#####wEAAAAAAAB6AAAACAAAADQAAABaAAAADAAAAFoAAABbAAAAXQAAAGUAAABsAAAAbQAAAG4AAABvAAAAcAAAAHQAAAB2AAAAegAAACQA#####wAAAAAAAACKAAAACAAAAAMAAABWAAAAEAAAAFYAAABYAAAAWQAAAFoAAABbAAAAXQAAAGUAAABsAAAAbQAAAG4AAABvAAAAcAAAAHQAAAB2AAAAegAAAIr#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAARgAAACEAAAAAjAACeDIAAAAcAAAARgAAACIAAAAAjAACeTIAAAAcAAAARgAAABoBAAAAjAH#AAAAQBwAAAAAAAAAAAAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAlAP####8AKUFmZmljaGFnZSBkJ8OpcXVhdGlvbiBkZSBkcm9pdGUgb3UgY2VyY2xlAAAAAgAAAAEAAAACAAAAHAAAAEEAAAAhAAAAAJAAAngyAAAAHAAAAEEAAAAiAAAAAJAAAnkyAAAAHAAAAEEAAAAaAQAAAJAB#wAAAEAcAAAAAAAAwDUAAAAAAAAAAABBEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAFygjVmFsKHgyLDEpLCNWYWwoeTIsMikpAAAAJQD#####AClBZmZpY2hhZ2UgZCfDqXF1YXRpb24gZGUgZHJvaXRlIG91IGNlcmNsZQAAAAIAAAABAAAAAgAAABwAAAAgAAAAIQAAAACUAAJ4MgAAABwAAAAgAAAAIgAAAACUAAJ5MgAAABwAAAAgAAAAGgEAAACUAf8AAAC#8AAAAAAAAEAAAAAAAAAAAAAAIBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABcoI1ZhbCh4MiwxKSwjVmFsKHkyLDIpKQAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAAHgAAACEAAAAAmAACeDIAAAAcAAAAHgAAACIAAAAAmAACeTIAAAAcAAAAHgAAABoBAAAAmAH#AAAAv#AAAAAAAAA#########4AAAAB4QAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAAlAP####8AKUFmZmljaGFnZSBkJ8OpcXVhdGlvbiBkZSBkcm9pdGUgb3UgY2VyY2xlAAAAAgAAAAEAAAACAAAAHAAAACIAAAAhAAAAAJwAAngyAAAAHAAAACIAAAAiAAAAAJwAAnkyAAAAHAAAACIAAAAaAQAAAJwB#wAAAEAYAAAAAAAAwDUAAAAAAAAAAAAiEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAFygjVmFsKHgyLDEpLCNWYWwoeTIsMikpAAAAEAD#####Af8AAAEQAAJBMQDANwAAAAAAAL#wAAAAAAAABQAAAAAiAAAARwAAACUA#####wApQWZmaWNoYWdlIGQnw6lxdWF0aW9uIGRlIGRyb2l0ZSBvdSBjZXJjbGUAAAACAAAAAQAAAAIAAAAcAAAAoAAAACEAAAAAoQACeDIAAAAcAAAAoAAAACIAAAAAoQACeTIAAAAcAAAAoAAAABoBAAAAoQH#AAAAQBAAAAAAAADAMwAAAAAAAAAAAKAQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAXKCNWYWwoeDIsMSksI1ZhbCh5MiwyKSkAAAACAP####8AAnhiAAIyNAAAAAFAOAAAAAAAAAAAAAIA#####wACeWIAAjE2AAAAAUAwAAAAAAAAAAAAAgD#####AARudW1iAAIxMAAAAAFAJAAAAAAAAAAAAAIA#####wAEbnVtYwACMzMAAAABQECAAAAAAAAAAAAYAP####8BAAAAABAAAWIAAAAAAAAAAABACAAAAAAAAAUAAAAAHAAAAAgAAAClAAAACAAAAKYAAAAeAP####8AAAAAAAEAAAAFAAAAKwAAACwAAAAtAAAALgAAACsAAAAeAP####8BLLgsAAEAAAAFAAAAMAAAADEAAAAyAAAAMwAAADD#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AQB#AAAAAAUAAACrAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADYAAAAIAAAApwAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACAAAACtAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAQQAAAK0AAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAABCAAAArQAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACIAAACtAAAAHgD#####AAAAAAABAAAABQAAAK4AAACvAAAAsAAAALEAAACuAAAAGQD#####AAAADQAAAKkAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACuAAAAswAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAK8AAACzAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAsAAAALMAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACxAAAAswAAAB4A#####wH#AAAAAQAAAAUAAAC0AAAAtQAAALYAAAC3AAAAtAAAACYA#####wH#AAAAAAAFAAAAuAAAABkA#####wAAAA0AAAAp#####wAAAAEAC0NNYWNyb1BhdXNlAP####8AAAAAAf####8QQI70AAAAAABAQcKPXCj1wwIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAACAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADUAAAAIAAAAqAAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEgAAAC8AAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASwAAALwAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABJAAAAvAAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEoAAAC8AAAAHgD#####Af8AAAABAAAABQAAAL0AAAC+AAAAvwAAAMAAAAC9AAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAvQAAALoAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAC+AAAAugAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAL8AAAC6AAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAwAAAALoAAAAeAP####8BAAB#AAEAAAAFAAAAwgAAAMMAAADEAAAAxQAAAMIAAAAmAP####8BAAB#AAAABQAAAMYAAAACAP####8AAnhWAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ5VgABNAAAAAFAEAAAAAAAAAAAABgA#####wEAAAAAEAABdgAAAAAAAAAAAEAIAAAAAAAABQAAAAAcAAAACAAAAMgAAAAIAAAAyQAAABkA#####wAAAA0AAADKAAAAEAD#####AQAAAAAQAAJhJwAAAAAAAAAAAEAIAAAAAAAABQAAAAAoAAAAywAAACAA#####wEAAAAAEAAAAQABAAAAKAAAAMwAAAAPAP####8BAAAAABAAAm0xAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAAAAAAAAAAAAM0AAAAZAP####8AAAAoAAAAzAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADAAAADPAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMQAAAM8AAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAyAAAAzwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADMAAADPAAAAHgD#####AQB#AAABAAAABQAAANAAAADRAAAA0gAAANMAAADQAAAAJgD#####AQB#AAAAAAUAAADUAAAAGQD#####AAAAKAAAAM4AAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAwAAAA1gAAABAA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADEAAADWAAAAEAD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMgAAANYAAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAzAAAA1gAAAB4A#####wEAfwAAAQAAAAUAAADXAAAA2AAAANkAAADaAAAA1wAAACYA#####wEAfwAAAAAFAAAA2#####8AAAABABFDTWFjcm9EaXNwYXJpdGlvbgD#####AAB#AAH#####CkCHFAAAAAAAQEjCj1wo9cMCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAdtYXNxdWUxAAAAAAAGAAAA1AAAANUAAADcAAAA2wAAAKsAAACs#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wAAfwAB#####wpAhyQAAAAAAEBU4UeuFHriAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJYXBwYXJhaXQxAAAAAAAGAAAA1AAAANUAAADcAAAA2wAAAKsAAACsAP####8AAAACABdDTWFjcm9BbmltYXRpb25Qb2ludExpZQD#####AAB#AAH#####CkCHVAAAAAAAQF3hR64UeuICAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVhbmltMQAAAQAAABQAAABkAAAAPAAAAM4AAQD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAfwAB#####wpATMAAAAAAAEA#hR64UeuGAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAMY29ycmVjdGlvbiBhAAAAAAAEAAAA3gAAAN8AAADdAAAAuwAAAAIA#####wADeFYyAAIxMAAAAAFAJAAAAAAAAAAAAAIA#####wADeVYyAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAN4VjMAATQAAAABQBAAAAAAAAAAAAACAP####8AA3lWMwACMTAAAAABQCQAAAAAAAAAAAAYAP####8BAH8AABAAAnYyAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAA4QAAAAgAAADiAAAAGAD#####AQB#AAAQAAJ2MwAAAAAAAAAAAEAIAAAAAAAABQAAAAAcAAAACAAAAOMAAAAIAAAA5AAAABkA#####wAAAA0AAADlAAAAEAD#####AQB#AAAQAAJiJwAAAAAAAAAAAEAIAAAAAAAABQAAAACpAAAA5wAAABkA#####wAAAA0AAADmAAAAEAD#####AQB#AAAQAAJjJwAAAAAAAAAAAEAIAAAAAAAABQAAAAApAAAA6QAAACAA#####wEAfwAAEAAAAQABAAAAKQAAAOoAAAAgAP####8BAH8AABAAAAEAAQAAAKkAAADoAAAADwD#####AQB#AAAQAAJtMwAAAAAAAAAAAEAIAAAAAAAABQABP5EDcYGouj8AAADrAAAADwD#####AQB#AAAQAAJtMgAAAAAAAAAAAEAIAAAAAAAABQABAAAAAAAAAAAAAADsAAAAGQD#####AAAAKQAAAOoAAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADCAAAA7wAAABAA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAMMAAADvAAAAEAD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAxAAAAO8AAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADFAAAA7wAAAB4A#####wEAAP8AAQAAAAUAAADwAAAA8QAAAPIAAADzAAAA8AAAACYA#####wEAAP8AAAAFAAAA9AAAABkA#####wAAACkAAADtAAAAEAD#####AQAA#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAwgAAAPYAAAAQAP####8BAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAADDAAAA9gAAABAA#####wEAAP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAMQAAAD2AAAAEAD#####AQAA#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAxQAAAPYAAAAeAP####8BAAD#AAEAAAAFAAAA9wAAAPgAAAD5AAAA+gAAAPcAAAAmAP####8BAAD#AAAABQAAAPsAAAAoAP####8AAAD#Af####8KQIekAAAAAABAYzCj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTMAAAAAAAYAAAD0AAAA9QAAAPwAAAD7AAAAxwAAAMYAAAApAP####8AAAD#Af####8KQIe8AAAAAABAZ1Cj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAACWFwcGFyYWl0MwAAAAAABgAAAPQAAAD1AAAA#AAAAPsAAADHAAAAxgAAAAAqAP####8AAAD#Af####8KQIfUAAAAAABAa1Cj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAABWFuaW0zAAABAAAAFAAAAGQAAAA8AAAA7QABAAAAACsA#####wAAAP8B#####wpAbLAAAAAAAEBAQo9cKPXDAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAMY29ycmVjdGlvbiBjAAAAAAADAAAA#gAAAP8AAAD9AAAAGQD#####AAAAqQAAAOgAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAC0AAABAQAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAALUAAAEBAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAtgAAAQEAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAC3AAABAQAAAB4A#####wH#AAAAAQAAAAUAAAECAAABAwAAAQQAAAEFAAABAgAAACYA#####wH#AAAAAAAFAAABBgAAABkA#####wAAAKkAAADuAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAtAAAAQgAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAC1AAABCAAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAALYAAAEIAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAtwAAAQgAAAAeAP####8B#wAAAAEAAAAFAAABCQAAAQoAAAELAAABDAAAAQkAAAAmAP####8B#wAAAAAABQAAAQ0AAAAoAP####8A#wAAAf####8KQIgkAAAAAABAb3Cj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTIAAAAAAAYAAAEGAAABBwAAAQ0AAAEOAAAAuAAAALkAAAApAP####8A#wAAAf####8KQIgsAAAAAABAcfhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACWFwcGFyYWl0MgAAAAAABgAAAQYAAAEHAAABDQAAAQ4AAAC4AAAAuQAAAAAqAP####8A#wAAAf####8KQIg8AAAAAABAc9hR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAABWFuaW0yAAABAAAAFAAAAGQAAAA8AAAA7gABAAAAACsA#####wD#AAAB#####wpAYdAAAAAAAEBAQo9cKPXAAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAMY29ycmVjdGlvbiBiAAAAAAAEAAABEAAAAREAAAEPAAAAuwAAACsA#####wD#AAAB#####xBAiFQAAAAAAEB2eFHrhR64AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKQ29ycmVjdGlvbgAAAAAABAAAALsAAADgAAABEgAAAQD###############8="

				// Première question : une figure dans tabfigA, l'image dans tabfigA... 
				// On choisit deux figures de type B pour définir le vecteur de translation.

				indexA = randint(0, nx * ny - 1)
				numA = tabfigA[indexA][2]
				iB1 = randint(0, nx * ny - 1)
				iB2 = randint(0, nx * ny - 1, [iB1])
				xV1 = tabfigB[iB2][0] - tabfigB[iB1][0]
				yV1 = tabfigB[iB2][1] - tabfigB[iB1][1]
				point = image_point_par_transformation(8, [tabfigA[indexA][0], tabfigA[indexA][1]], [0, 0], [xV1, yV1])
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigA[j][0] && point[1] == tabfigA[j][1]) {
							trouver = true
							num1 = tabfigA[j][2]
							xa = tabfigA[indexA][0]
							ya = tabfigA[indexA][1]
							break
						}
					}
					if (trouver == false) {
						indexA = randint(0, nx * ny - 1)
						numA = tabfigA[indexA][2]
						iB1 = randint(0, nx * ny - 1)
						iB2 = randint(0, nx * ny - 1, [iB1])
						xV1 = tabfigB[iB2][0] - tabfigB[iB1][0]
						yV1 = tabfigB[iB2][1] - tabfigB[iB1][1]
						point = image_point_par_transformation(8, [tabfigA[indexA][0], tabfigA[indexA][1]], [0, 0], [xV1, yV1])
					}
				}
				texte += num_alpha(0) + texte_en_couleur_et_gras(` Dans la translation qui transforme la figure ${tabfigB[iB1][2]} en la figure ${tabfigB[iB2][2]} quelle est le numéro de l'image de la figure ${numA} ?<br>`, `green`)
				texte_corr = num_alpha(0) + texte_en_couleur_et_gras(` La figure image de la figure ${numA}  dans la translation qui transforme la figure ${tabfigB[iB1][2]} en la figure ${tabfigB[iB2][2]} porte le numéro ${num1}.<br>`, `green`)
				// Deuxième question : une figure dans tabfigD, l'image dans tabfigB... 
				// On choisit une figure C et une figure A pour définir le vecteur de translation.
				indexD = randint(0, nx * ny - 1)
				numD = tabfigD[indexD][2]
				iC1 = randint(0, nx * ny - 1)
				iA1 = randint(0, nx * ny - 1, [iC1])
				xV2 = tabfigA[iA1][0] - tabfigC[iC1][0]
				yV2 = tabfigA[iA1][1] - tabfigC[iC1][1]
				point = image_point_par_transformation(8, [tabfigD[indexD][0], tabfigD[indexD][1]], [0, 0], [xV2, yV2])
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigB[j][0] && point[1] == tabfigB[j][1]) {
							trouver = true
							num2 = tabfigB[j][2]
							xb = tabfigA[indexD][0]
							yb = tabfigA[indexD][1]
							break
						}
					}
					if (trouver == false) {
						indexD = randint(0, nx * ny - 1)
						numD = tabfigD[indexD][2]
						iC1 = randint(0, nx * ny - 1)
						iA1 = randint(0, nx * ny - 1, [iC1])
						xV2 = tabfigA[iA1][0] - tabfigC[iC1][0]
						yV2 = tabfigA[iA1][1] - tabfigC[iC1][1]
						point = image_point_par_transformation(8, [tabfigD[indexD][0], tabfigD[indexD][1]], [0, 0], [xV2, yV2])
					}
				}
				texte += num_alpha(1) + texte_en_couleur_et_gras(` Dans la translation qui transforme la figure ${tabfigC[iC1][2]} en la figure ${tabfigA[iA1][2]} quelle est le numéro de l'image de la figure ${numD} ?<br>`, `red`)
				texte_corr += num_alpha(1) + texte_en_couleur_et_gras(` La figure image de la figure ${numD}  dans la translation qui transforme la figure ${tabfigC[iC1][2]} en la figure ${tabfigA[iA1][2]} porte le numéro ${num2}.<br>`, `red`)


				// troisième question : une figure dans tabfigC, l'image dans tabfigA... 
				// On choisit une figure D et une figure B pour définir le vecteur de translation.
				indexC = randint(0, nx * ny - 1)
				numC = tabfigC[indexC][2]
				iD1 = randint(0, nx * ny - 1)
				iB3 = randint(0, nx * ny - 1, [iD1])
				xV3 = tabfigA[iB3][0] - tabfigC[iD1][0]
				yV3 = tabfigA[iB3][1] - tabfigC[iD1][1]
				point = image_point_par_transformation(8, [tabfigC[indexC][0], tabfigC[indexC][1]], [0, 0], [xV3, yV3])
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigA[j][0] && point[1] == tabfigA[j][1]) {
							trouver = true
							num3 = tabfigA[j][2]
							xc = tabfigA[indexC][0]
							yc = tabfigA[indexC][1]
							break
						}
					}
					if (trouver == false) {
						indexC = randint(0, nx * ny - 1)
						numC = tabfigC[indexC][2]
						iD1 = randint(0, nx * ny - 1)
						iB3 = randint(0, nx * ny - 1, [iD1])
						xV3 = tabfigA[iB3][0] - tabfigC[iD1][0]
						yV3 = tabfigA[iB3][1] - tabfigC[iD1][1]
						point = image_point_par_transformation(8, [tabfigC[indexC][0], tabfigC[indexC][1]], [0, 0], [xV3, yV3])
					}
				}
				texte += num_alpha(2) + texte_en_couleur_et_gras(` Dans la translation qui transforme la figure ${tabfigC[iD1][2]} en la figure ${tabfigA[iB3][2]} quelle est le numéro de l'image de la figure ${numC} ?<br>`, `blue`)
				texte_corr += num_alpha(2) + texte_en_couleur_et_gras(` La figure image de la figure ${numC}  dans la translation qui transforme la figure ${tabfigC[iD1][2]} en la figure ${tabfigA[iB3][2]} porte le numéro ${num3}.<br>`, `blue`)


				break

			case 4: //rotations

				this.MG32codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+0euFAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAPj#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAVBbmdsZQABMAAAAAEAAAAAAAAAAAAAAAIA#####wAEWm9vbQACMzAAAAABQD4AAAAAAAAAAAACAP####8AAm54AAE1AAAAAUAUAAAAAAAA#####wAAAAEABUNGb25jAP####8AB21vZHVsb3gACG1vZCh4LDIp#####wAAAAEADUNGb25jdGlvbjJWYXIG#####wAAAAIAEUNWYXJpYWJsZUZvcm1lbGxlAAAAAAAAAAFAAAAAAAAAAAABeAAAAAMA#####wAHbW9kdWxveQASbW9kKGludCh5L254LzIpLDIpAAAABAb#####AAAAAgAJQ0ZvbmN0aW9uAv####8AAAABAApDT3BlcmF0aW9uAwAAAAcDAAAABQAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAAwAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAABeQAAAAMA#####wACcjAAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTApLDEsMCn#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAHAgAAAAcI#####wAAAAEADkNBcHBlbEZvbmN0aW9uAAAABAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAgD#####AAJ5RAABNAAAAAFAEAAAAAAAAAAAAAIA#####wACeEQAATAAAAABAAAAAAAAAAAAAAACAP####8AAnlDAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ4QwABNAAAAAFAEAAAAAAAAAAAAAIA#####wACeUIAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhCAAE0AAAAAUAQAAAAAAAA#####wAAAAEACkNQb2ludEJhc2UA#####wAAAAAAEAABTwDAMgAAAAAAAMAzAAAAAAAABQABQEdAAAAAAABAO4UeuFHrhv####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####Af8AAAEQAAABAAIAAAANAD#3Cj1wo9cK#####wAAAAEACUNSb3RhdGlvbgD#####AAAADQAAAAFAVoAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACAAAAAL#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQGeAAAAAAAAAAAAOAAAADQD#####AAAADQAAAAgAAAAB#####wAAAAEAC0NQb2ludEltYWdlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAEv####8AAAABAA5DUG9pbnRMaWVQb2ludAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAE#####8AAAABAAlDQ2VyY2xlT0EA#####wH#AAAAAgAAAA0AAAAU#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wH#AAAADQAAAQACAAAADQAAABT#####AAAAAQAQQ0RlbWlEcm9pdGVJbWFnZQD#####Af8AAAANAAABAAIAAAAWAAAAD#####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAXAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAGAAAABAA#####wH#AAAAEAACSicAAAAAAAAAAABACAAAAAAAAAUAAAAAFAAAABAAAAAQAP####8B#wAAABAAAkknAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAAAQ#####wAAAAIAB0NSZXBlcmUA#####wDm5uYBAQAAAA0AAAAbAAAAGgAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8B#wAAARAAAkInAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAADAAAAAgAAAALAAAAEQD#####AQAAAAAQAAFCAEAAAAAAAAAAwDcAAAAAAAAFAAAAAB0AAAAYAP####8B#wAAARAAAkQnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACAAAAAgAAAAHAAAAEQD#####AQAAAAAQAAFEAMAxAAAAAAAAwCoAAAAAAAAFAAAAAB8AAAAYAP####8B#wAAARAAAkMnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACgAAAAgAAAAJAAAAEQD#####AQAAAAAQAAFDAEAIAAAAAAAAv#AAAAAAAAAFAAAAACEAAAACAP####8AAnhhAAIxMgAAAAFAKAAAAAAAAAAAAAIA#####wACeWEAATgAAAABQCAAAAAAAAAAAAACAP####8ABG51bWEAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhjAAE4AAAAAUAgAAAAAAAAAAAAAgD#####AAJ5YwABOAAAAAFAIAAAAAAAAAAAAAIA#####wADeGMxAAE4AAAAAUAgAAAAAAAAAAAAAgD#####AAN5YzEAAjE2AAAAAUAwAAAAAAAAAAAAGAD#####AQAAAAAQAAFhAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAIwAAAAgAAAAkAAAAGAD#####AQAAAAAQAAFjAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAJgAAAAgAAAAnAAAAGAD#####AAnMCQAQAAJjMQAAAAAAAAAAAEAIAAAAAAAACQAAAAAcAAAACAAAACgAAAAIAAAAKQAAAA4A#####wAAAA0AAAAHAwAAAAE#8AAAAAAAAAAAAAoAAAAGAAAACAAAACUAAAAQAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAALQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACAAAAAtAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAC0AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAALf####8AAAABAAxDVHJhbnNsYXRpb24A#####wAAAA0AAAAqAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALgAAADIAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAvAAAAMgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADAAAAAyAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMQAAADIAAAACAP####8AAm55AAE1AAAAAUAUAAAAAAAAAAAAAwD#####AAJyMwAlc2koKG1vZHVsb3goeCk9MSkqKG1vZHVsb3koeCk9MSksMSwwKQAAAAkAAAAABwIAAAAHCAAAAAoAAAAEAAAABQAAAAAAAAABP#AAAAAAAAAAAAAHCAAAAAoAAAAFAAAABQAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAAAAAABAAAAAAAAAAAAAXgAAAADAP####8AAnIyACVzaSgobW9kdWxveCh4KT0wKSoobW9kdWxveSh4KT0xKSwxLDApAAAACQAAAAAHAgAAAAcIAAAACgAAAAQAAAAFAAAAAAAAAAEAAAAAAAAAAAAAAAcIAAAACgAAAAUAAAAFAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAAAAAAEAAAAAAAAAAAABeAAAAAMA#####wACcjEAJXNpKChtb2R1bG94KHgpPTEpKihtb2R1bG95KHgpPTApLDEsMCkAAAAJAAAAAAcCAAAABwgAAAAKAAAABAAAAAUAAAAAAAAAAT#wAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAADAMQAAAAAAAMAuAAAAAAAAAAAADRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAFB#####wAAAAEAB0NNaWxpZXUA#####wEAAAABEAACSjEAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAACL#####AAAAAQARQ1N5bWV0cmllQ2VudHJhbGUA#####wAAADwAAAAQAP####8BAAAAARAAAUoAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAD0AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAAPQAAABsA#####wEAAAABEAACSTEAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAB4AAAAcAP####8AAABAAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEEAAAAQAP####8BAAAAARAAAUkAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAAEEAAAAZAP####8AAAANAAAAIgAAABAA#####wEAAAABEAABQQAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAARAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACIAAABEAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAEQAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAARP####8AAAABAAlDUG9seWdvbmUA#####wAAAAAAAQAAAAUAAAAgAAAAPgAAAD8AAAAiAAAAIAAAAB0A#####wAAAAAAAQAAAAUAAAAeAAAAIgAAAEIAAABDAAAAHgAAAB0A#####wAAAAAAAQAAAAUAAABFAAAASAAAAEYAAABHAAAARQAAAB0A#####wAAAAAAAQAAAAUAAAANAAAAIAAAACIAAAAeAAAADQAAABYA#####wD#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAYAAAAFwD#####AObm5gABAAAADQAAAEMAAAA+AAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEAEUNQb2ludFBhckFic2Npc3NlAP####8BAAAAABAAAVUAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEMAAAAHAQAAAAgAAAADAAAAAT#wAAAAAAAAAAAAHgD#####AQAAAAAQAAFWAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAAA+AAAABwEAAAAIAAAANwAAAAE#8AAAAAAAAP####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAANAAAATwAAAB8A#####wEAAAAAEAAAAQABAAAADQAAAFAAAAAPAP####8BAAAAABAAAlUxAAAAAAAAAAAAQAgAAAAAAAAFAAE#0wPWdtnVKQAAAFEAAAAZAP####8AAAANAAAAUAAAABAA#####wEAAAAAEAACVjEAAAAAAAAAAABACAAAAAAAAAUAAAAAUwAAAFQAAAAfAP####8BAAAAABAAAAEAAQAAAFMAAABVAAAADwD#####AQAAAAAQAAJVMgAAAAAAAAAAAEAIAAAAAAAABQABP9bRs76jZ34AAABWAAAAGQD#####AAAADQAAAFcAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAAWAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACAAAABYAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAFgAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAAWAAAAB0A#####wEAAAAAAQAAAAUAAABZAAAAWgAAAFsAAABcAAAAWQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEIAAABYAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAQwAAAFgAAAAdAP####8BAAAAAAEAAAAFAAAAXAAAAFsAAABeAAAAXwAAAFwAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA+AAAAWAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAD8AAABYAAAAHQD#####AQAAAAABAAAABQAAAFoAAABhAAAAYgAAAFsAAABaAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARQAAAFgAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABIAAAAWAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEYAAABYAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARwAAAFgAAAAdAP####8BAAAAAAEAAAAFAAAAZAAAAGUAAABmAAAAZwAAAGT#####AAAAAgAIQ01lc3VyZVgA#####wABeAAAAE4AAABX#####wAAAAIACENNZXN1cmVZAP####8AAXkAAABOAAAAVwAAAAIA#####wACeDEADGludCh4KzAuMDAxKQAAAAYCAAAABwAAAAAIAAAAaQAAAAE#UGJN0vGp#AAAAAIA#####wACeTEADGludCh5KzAuMDAxKQAAAAYCAAAABwAAAAAIAAAAagAAAAE#UGJN0vGp#AAAAAIA#####wADbnVtAAx4MSoyK254KjQqeTEAAAAHAAAAAAcCAAAACAAAAGsAAAABQAAAAAAAAAAAAAAHAgAAAAcCAAAACAAAAAMAAAABQBAAAAAAAAAAAAAIAAAAbAAAABsA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFcAAABb#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQD#####AQAAAADAJgAAAAAAAMAj#######wAAAAbhIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABtAAAAAgD#####AARudW0xAAVudW0rMQAAAAcAAAAACAAAAG0AAAABP#AAAAAAAAAAAAACAP####8ABG51bScACG51bStueCoyAAAABwAAAAAIAAAAbQAAAAcCAAAACAAAAAMAAAABQAAAAAAAAAAAAAACAP####8ABW51bScxAAZudW0nKzEAAAAHAAAAAAgAAABxAAAAAT#wAAAAAAAAAAAAGwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAWgAAAGIAAAAbAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABbAAAAZgAAABsA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFwAAABeAAAAIgD#####AQAAAADAJgAAAAAAAMAkAAAAAAAAAAAAdRIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABwAAAAIgD#####AQAAAADAJAAAAAAAAMAkAAAAAAAAAAAAcxIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABxAAAAIgD#####AQAAAADAIgAAAAAAAMAgAAAAAAAAAAAAdBIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABy#####wAAAAIAEkNMaWV1T2JqZXRQYXJQdExpZQD#####AQAAAAAAAF0AAAAIAAAANwAAAFcAAAAHAAAAVwAAAFgAAABZAAAAWgAAAFsAAABcAAAAXQAAACMA#####wEAAAAAAABjAAAACAAAADcAAABXAAAABwAAAFcAAABYAAAAWgAAAFsAAABhAAAAYgAAAGMAAAAjAP####8BAAAAAAAAaAAAAAgAAAA3AAAAVwAAAAcAAABXAAAAWAAAAGQAAABlAAAAZgAAAGcAAABoAAAAIwD#####AQAAAAAAAGAAAAAIAAAANwAAAFcAAAAHAAAAVwAAAFgAAABbAAAAXAAAAF4AAABfAAAAYAAAACMA#####wAAAAAAAAB5AAAACAAAAAMAAABTAAAACwAAAFMAAABVAAAAVgAAAFcAAABYAAAAWQAAAFoAAABbAAAAXAAAAF0AAAB5AAAAIwD#####AAAAAAAAAHwAAAAIAAAAAwAAAFMAAAALAAAAUwAAAFUAAABWAAAAVwAAAFgAAABbAAAAXAAAAF4AAABfAAAAYAAAAHwAAAAjAP####8AAAAAAAAAewAAAAgAAAADAAAAUwAAAAsAAABTAAAAVQAAAFYAAABXAAAAWAAAAGQAAABlAAAAZgAAAGcAAABoAAAAewAAACMA#####wAAAAAAAAB6AAAACAAAAAMAAABTAAAACwAAAFMAAABVAAAAVgAAAFcAAABYAAAAWgAAAFsAAABhAAAAYgAAAGMAAAB6AAAAIwD#####AQAAAAAAAG8AAAAIAAAANwAAAFcAAAAKAAAAVwAAAFgAAABbAAAAaQAAAGoAAABrAAAAbAAAAG0AAABuAAAAbwAAACMA#####wAAAAAAAACBAAAACAAAAAMAAABTAAAADgAAAFMAAABVAAAAVgAAAFcAAABYAAAAWwAAAGkAAABqAAAAawAAAGwAAABtAAAAbgAAAG8AAACBAAAAIwD#####AQAAAAAAAHYAAAAIAAAANwAAAFcAAAAMAAAAVwAAAFgAAABcAAAAXgAAAGkAAABqAAAAawAAAGwAAABtAAAAcAAAAHUAAAB2AAAAIwD#####AAAAAAAAAIMAAAAIAAAAAwAAAFMAAAAQAAAAUwAAAFUAAABWAAAAVwAAAFgAAABcAAAAXgAAAGkAAABqAAAAawAAAGwAAABtAAAAcAAAAHUAAAB2AAAAgwAAACMA#####wEAAAAAAAB4AAAACAAAADcAAABXAAAADQAAAFcAAABYAAAAWwAAAGYAAABpAAAAagAAAGsAAABsAAAAbQAAAHEAAAByAAAAdAAAAHgAAAAjAP####8AAAAAAAAAhQAAAAgAAAADAAAAUwAAABEAAABTAAAAVQAAAFYAAABXAAAAWAAAAFsAAABmAAAAaQAAAGoAAABrAAAAbAAAAG0AAABxAAAAcgAAAHQAAAB4AAAAhQAAACMA#####wEAAAAAAAB3AAAACAAAADcAAABXAAAADAAAAFcAAABYAAAAWgAAAGIAAABpAAAAagAAAGsAAABsAAAAbQAAAHEAAABzAAAAdwAAACMA#####wAAAAAAAACHAAAACAAAAAMAAABTAAAAEAAAAFMAAABVAAAAVgAAAFcAAABYAAAAWgAAAGIAAABpAAAAagAAAGsAAABsAAAAbQAAAHEAAABzAAAAdwAAAIcAAAAQAP####8B#wAAARAAAkExAMA3AAAAAAAAv#AAAAAAAAAFAAAAACIAAABEAAAAAgD#####AAJ4YgACMjQAAAABQDgAAAAAAAAAAAACAP####8AAnliAAIxNgAAAAFAMAAAAAAAAAAAAAIA#####wAEbnVtYgACNTYAAAABQEwAAAAAAAAAAAACAP####8ABG51bWMAAjMzAAAAAUBAgAAAAAAAAAAAAgD#####AAN4YzIAAjE2AAAAAUAwAAAAAAAAAAAAAgD#####AAN5YzIAAjIwAAAAAUA0AAAAAAAAAAAAAgD#####AAN4YzMAAjEyAAAAAUAoAAAAAAAAAAAAAgD#####AAN5YzMAAjI0AAAAAUA4AAAAAAAAAAAAGAD#####AQAAAAAQAAFiAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAigAAAAgAAACLAAAAGAD#####AH8AAAAQAAJjMgAAAAAAAAAAAEAIAAAAAAAACQAAAAAcAAAACAAAAI4AAAAIAAAAjwAAABgA#####wAAAH8AEAACYzMAAAAAAAAAAABACAAAAAAAAAkAAAAAHAAAAAgAAACQAAAACAAAAJEAAAAdAP####8AAAAAAAEAAAAFAAAALgAAAC8AAAAwAAAAMQAAAC4AAAAdAP####8ALLgsAAEAAAAFAAAAMwAAADQAAAA1AAAANgAAADP#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AAB#AAAAAAUAAACWAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADkAAAAIAAAAjAAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACAAAACYAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAPgAAAJgAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAA#AAAAmAAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACIAAACYAAAAHQD#####AAAAAAABAAAABQAAAJkAAACaAAAAmwAAAJwAAACZAAAAGQD#####AAAADQAAAJIAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACZAAAAngAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAJoAAACeAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAmwAAAJ4AAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACcAAAAngAAAB0A#####wD#AAAAAQAAAAUAAACfAAAAoAAAAKEAAACiAAAAnwAAACQA#####wD#AAAAAAAFAAAAowAAABkA#####wAAAA0AAAAr#####wAAAAEAC0NNYWNyb1BhdXNlAP####8AAAAAAf####8QQI70AAAAAABAQcKPXCj1wwIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAACAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADgAAAAIAAAAjQAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEUAAACnAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASAAAAKcAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABGAAAApwAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEcAAACnAAAAHQD#####Af8AAAABAAAABQAAAKgAAACpAAAAqgAAAKsAAACoAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAqAAAAKUAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACpAAAApQAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAKoAAAClAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAqwAAAKUAAAAdAP####8AAAB#AAEAAAAFAAAArQAAAK4AAACvAAAAsAAAAK0AAAAkAP####8AAAB#AAAABQAAALH#####AAAAAQASQ0FyY0RlQ2VyY2xlRGlyZWN0AP####8B##8AAAEAAACUAAAArf####8AAAABQFaAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8BAAB#ARAAAAAAAAAAAAAAAEAIAAAAAAAABQABP10AlhldV+MAAACzAAAADQD#####AAAALAAAAAFAVoAAAAAAAAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADMAAAC1AAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANAAAALUAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA1AAAAtQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADYAAAC1AAAAHQD#####AQB#AAABAAAABQAAALYAAAC3AAAAuAAAALkAAAC2AAAAJAD#####AQB#AAAAAAUAAAC6AAAADQD#####AAAAlAAAAAFAVoAAAAAAAAAAABAA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAK0AAAC8AAAAEAD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAArgAAALwAAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACvAAAAvAAAABAA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAALAAAAC8AAAAHQD#####AQAAfwABAAAABQAAAL0AAAC+AAAAvwAAAMAAAAC9AAAAJAD#####AQAAfwAAAAUAAADBAAAADQD#####AAAAk#####8AAAABAAxDTW9pbnNVbmFpcmUAAAABQFaAAAAAAAAAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACfAAAAwwAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAKAAAADDAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAoQAAAMMAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACiAAAAwwAAAB0A#####wH#AAAAAQAAAAUAAADEAAAAxQAAAMYAAADHAAAAxAAAACQA#####wH#AAAAAAAFAAAAyAAAACYA#####wH#AAAAAQAAACwAAAAq#####wAAAAFAVoAAAAAAAAAAACcA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAE#Zs#fPkSCoAAAAMr#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wAXTWVzdXJlIGQnYW5nbGUgb3JpZW50w6kAAAACAAAAAwAAAAMAAAAqAAAALAAAAMv#####AAAAAQAMQ0Jpc3NlY3RyaWNlAAAAAMwBAAAAABAAAAEAAQAAAMsAAAAsAAAAKgAAAA8AAAAAzAEAAAAAEAAAAAAAAAAAAAAAP+MzMzMzMzMFAAFAaT5Clg7dyQAAAM3#####AAAAAgATQ01lc3VyZUFuZ2xlT3JpZW50ZQEAAADMAAZhbmdsZTEAAAAqAAAALAAAAMsAAAAiAQAAAMwB#wAAAEAIAAAAAAAAP#AAAAAAAAAAAADODwAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAACwrAAAAAAz#####8AAAACABNDTWFycXVlQW5nbGVPcmllbnRlAQAAAMwB#wAAAAEAAAABQEJbiQkrj78AAAAqAAAALAAAAMsAAAAADQD#####AAAALAAAAAgAAADPAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMwAAANIAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA0AAAA0gAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADUAAADSAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANgAAANIAAAAdAP####8BAH8AAAEAAAAFAAAA0wAAANQAAADVAAAA1gAAANMAAAAkAP####8BAH8AAAAABQAAANf#####AAAAAgAXQ01hY3JvQW5pbWF0aW9uUG9pbnRMaWUA#####wAAfwAB#####xBAjwQAAAAAAEBi8KPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHdG91cm5lMQAAAAAAABQAAABkAAAAAAAAAMsAAQAAAAApAP####8AF01lc3VyZSBkJ2FuZ2xlIG9yaWVudMOpAAAAAgAAAAMAAAADAAAArQAAAJQAAAC0AAAAKgAAAADaAQAAAAAQAAABAAEAAAC0AAAAlAAAAK0AAAAPAAAAANoBAAAAABAAAAAAAAAAAAAAAD#jMzMzMzMzBQABQGk+QpYO3ckAAADbAAAAKwEAAADaAAZhbmdsZTMAAACtAAAAlAAAALQAAAAiAQAAANoBAH8AAEAIAAAAAAAAP#AAAAAAAAAAAADcDwAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAACwrAAAAAA3QAAACwBAAAA2gEAfwAAAQAAAAFAQluJCSuPvwAAAK0AAACUAAAAtAAAAAANAP####8AAACUAAAACAAAAN0AAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACtAAAA4AAAABAA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAK4AAADgAAAAEAD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAArwAAAOAAAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACwAAAA4AAAAB0A#####wEAAH8AAQAAAAUAAADhAAAA4gAAAOMAAADkAAAA4QAAACQA#####wEAAH8AAAAFAAAA5QAAAC0A#####wAAAH8B#####wpAj1wAAAAAAEBo8KPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHdG91cm5lMwAAAAAAABQAAABkAAAAPAAAALQAAQD#####AAAAAQAUQ0FyY0RlQ2VyY2xlSW5kaXJlY3QA#####wEAAH8AAQAAAJMAAACf#####wAAACgAAAABQFaAAAAAAAAAAAAnAP####8BAAB#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQABP+#fkVF76cAAAADoAAAAKQD#####ABdNZXN1cmUgZCdhbmdsZSBvcmllbnTDqQAAAAIAAAADAAAAAwAAAJ8AAACTAAAA6QAAACoAAAAA6gEAAAAAEAAAAQABAAAA6QAAAJMAAACfAAAADwAAAADqAQAAAAAQAAAAAAAAAAAAAAA#4zMzMzMzMwUAAUBpPkKWDt3JAAAA6wAAACsBAAAA6gAGYW5nbGUyAAAAnwAAAJMAAADpAAAAIgEAAADqAQAAfwBACAAAAAAAAD#wAAAAAAAAAAAA7A8AAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAsKwAAAAAO0AAAAsAQAAAOoBAAB#AAEAAAABQEJbiQkrj78AAACfAAAAkwAAAOkAAAAADQD#####AAAAkwAAAAgAAADtAAAAEAD#####AQAAfwAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAnwAAAPAAAAAQAP####8BAAB#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACgAAAA8AAAABAA#####wEAAH8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAKEAAADwAAAAEAD#####AQAAfwAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAogAAAPAAAAAdAP####8B#wAAAAEAAAAFAAAA8QAAAPIAAADzAAAA9AAAAPEAAAAkAP####8B#wAAAAAABQAAAPUAAAAtAP####8A#wAAAf####8KQI7sAAAAAABAXGFHrhR64gIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB3RvdXJuZTIAAAAAAAAUAAAAZAAAADwAAADpAAEA################"
				this.MG32codeBase64corr = "TWF0aEdyYXBoSmF2YTEuMAAAABI+0euFAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAQL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAVBbmdsZQABMAAAAAEAAAAAAAAAAAAAAAIA#####wAEWm9vbQACMzAAAAABQD4AAAAAAAAAAAACAP####8AAm54AAE1AAAAAUAUAAAAAAAA#####wAAAAEABUNGb25jAP####8AB21vZHVsb3gACG1vZCh4LDIp#####wAAAAEADUNGb25jdGlvbjJWYXIG#####wAAAAIAEUNWYXJpYWJsZUZvcm1lbGxlAAAAAAAAAAFAAAAAAAAAAAABeAAAAAMA#####wAHbW9kdWxveQASbW9kKGludCh5L254LzIpLDIpAAAABAb#####AAAAAgAJQ0ZvbmN0aW9uAv####8AAAABAApDT3BlcmF0aW9uAwAAAAcDAAAABQAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAAwAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAAABeQAAAAMA#####wACcjAAJXNpKChtb2R1bG94KHgpPTApKihtb2R1bG95KHgpPTApLDEsMCn#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAHAgAAAAcI#####wAAAAEADkNBcHBlbEZvbmN0aW9uAAAABAAAAAUAAAAAAAAAAQAAAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4AAAAAgD#####AAJ5RAABNAAAAAFAEAAAAAAAAAAAAAIA#####wACeEQAATAAAAABAAAAAAAAAAAAAAACAP####8AAnlDAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAJ4QwABNAAAAAFAEAAAAAAAAAAAAAIA#####wACeUIAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhCAAE0AAAAAUAQAAAAAAAA#####wAAAAEACkNQb2ludEJhc2UA#####wAAAAAAEAABTwDAMgAAAAAAAMAzAAAAAAAABQABQEtAAAAAAABAUSFHrhR64v####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####Af8AAAEQAAABAAIAAAANAD#3Cj1wo9cK#####wAAAAEACUNSb3RhdGlvbgD#####AAAADQAAAAFAVoAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACAAAAAL#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQGeAAAAAAAAAAAAOAAAADQD#####AAAADQAAAAgAAAAB#####wAAAAEAC0NQb2ludEltYWdlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAEv####8AAAABAA5DUG9pbnRMaWVQb2ludAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAE#####8AAAABAAlDQ2VyY2xlT0EA#####wH#AAAAAgAAAA0AAAAU#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wH#AAAADQAAAQACAAAADQAAABT#####AAAAAQAQQ0RlbWlEcm9pdGVJbWFnZQD#####Af8AAAANAAABAAIAAAAWAAAAD#####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAXAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAGAAAABAA#####wH#AAAAEAACSicAAAAAAAAAAABACAAAAAAAAAUAAAAAFAAAABAAAAAQAP####8B#wAAABAAAkknAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAAAQ#####wAAAAIAB0NSZXBlcmUA#####wDm5uYBAQAAAA0AAAAbAAAAGgAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8B#wAAARAAAkInAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAADAAAAAgAAAALAAAAEQD#####AQAAAAAQAAFCAEAAAAAAAAAAwDcAAAAAAAAFAAAAAB0AAAAYAP####8B#wAAARAAAkQnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACAAAAAgAAAAHAAAAEQD#####AQAAAAAQAAFEAMAxAAAAAAAAwCoAAAAAAAAFAAAAAB8AAAAYAP####8B#wAAARAAAkMnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAACgAAAAgAAAAJAAAAEQD#####AQAAAAAQAAFDAEAIAAAAAAAAv#AAAAAAAAAFAAAAACEAAAACAP####8AAnhhAAIxMgAAAAFAKAAAAAAAAAAAAAIA#####wACeWEAATgAAAABQCAAAAAAAAAAAAACAP####8ABG51bWEAATAAAAABAAAAAAAAAAAAAAACAP####8AAnhjAAE4AAAAAUAgAAAAAAAAAAAAAgD#####AAJ5YwABOAAAAAFAIAAAAAAAAAAAAAIA#####wADeGMxAAE4AAAAAUAgAAAAAAAAAAAAAgD#####AAN5YzEAAjE2AAAAAUAwAAAAAAAAAAAAGAD#####AQAAAAAQAAFhAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAIwAAAAgAAAAkAAAAGAD#####AQAAAAAQAAFjAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAJgAAAAgAAAAnAAAAGAD#####AQnMCQAQAAJjMQAAAAAAAAAAAEAIAAAAAAAACQAAAAAcAAAACAAAACgAAAAIAAAAKQAAAA4A#####wAAAA0AAAAHAwAAAAE#8AAAAAAAAAAAAAoAAAAGAAAACAAAACUAAAAQAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAALQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACAAAAAtAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAC0AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAALf####8AAAABAAxDVHJhbnNsYXRpb24A#####wAAAA0AAAAqAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALgAAADIAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAvAAAAMgAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADAAAAAyAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMQAAADIAAAACAP####8AAm55AAE1AAAAAUAUAAAAAAAAAAAAAwD#####AAJyMwAlc2koKG1vZHVsb3goeCk9MSkqKG1vZHVsb3koeCk9MSksMSwwKQAAAAkAAAAABwIAAAAHCAAAAAoAAAAEAAAABQAAAAAAAAABP#AAAAAAAAAAAAAHCAAAAAoAAAAFAAAABQAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAAAAAABAAAAAAAAAAAAAXgAAAADAP####8AAnIyACVzaSgobW9kdWxveCh4KT0wKSoobW9kdWxveSh4KT0xKSwxLDApAAAACQAAAAAHAgAAAAcIAAAACgAAAAQAAAAFAAAAAAAAAAEAAAAAAAAAAAAAAAcIAAAACgAAAAUAAAAFAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAAAAAAEAAAAAAAAAAAABeAAAAAMA#####wACcjEAJXNpKChtb2R1bG94KHgpPTEpKihtb2R1bG95KHgpPTApLDEsMCkAAAAJAAAAAAcCAAAABwgAAAAKAAAABAAAAAUAAAAAAAAAAT#wAAAAAAAAAAAABwgAAAAKAAAABQAAAAUAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAQAAAAAAAAAAAAF4#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAADAMQAAAAAAAMAuAAAAAAAAAAAADRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAFB#####wAAAAEAB0NNaWxpZXUA#####wEAAAABEAACSjEAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAACL#####AAAAAQARQ1N5bWV0cmllQ2VudHJhbGUA#####wAAADwAAAAQAP####8BAAAAARAAAUoAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAD0AAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAAPQAAABsA#####wEAAAABEAACSTEAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAB4AAAAcAP####8AAABAAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEEAAAAQAP####8BAAAAARAAAUkAAAAAAAAAAABACAAAAAAAAAUAAAAAIAAAAEEAAAAZAP####8AAAANAAAAIgAAABAA#####wEAAAABEAABQQAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAARAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACIAAABEAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAEQAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAgAAAARP####8AAAABAAlDUG9seWdvbmUA#####wEAAAAAAQAAAAUAAAAgAAAAPgAAAD8AAAAiAAAAIAAAAB0A#####wAAAAAAAQAAAAUAAAAeAAAAIgAAAEIAAABDAAAAHgAAAB0A#####wAAAAAAAQAAAAUAAABFAAAASAAAAEYAAABHAAAARQAAAB0A#####wAAAAAAAQAAAAUAAAANAAAAIAAAACIAAAAeAAAADQAAABYA#####wD#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAYAAAAFwD#####AObm5gABAAAADQAAAEMAAAA+AAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEAEUNQb2ludFBhckFic2Npc3NlAP####8BAAAAABAAAVUAAAAAAAAAAABACAAAAAAAAAUAAAAADQAAAEMAAAAHAQAAAAgAAAADAAAAAT#wAAAAAAAAAAAAHgD#####AQAAAAAQAAFWAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA0AAAA+AAAABwEAAAAIAAAANwAAAAE#8AAAAAAAAP####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAANAAAATwAAAB8A#####wEAAAAAEAAAAQABAAAADQAAAFAAAAAPAP####8BAAAAABAAAlUxAAAAAAAAAAAAQAgAAAAAAAAFAAE#0wPWdtnVKQAAAFEAAAAZAP####8AAAANAAAAUAAAABAA#####wEAAAAAEAACVjEAAAAAAAAAAABACAAAAAAAAAUAAAAAUwAAAFQAAAAfAP####8BAAAAABAAAAEAAQAAAFMAAABVAAAADwD#####AQAAAAAQAAJVMgAAAAAAAAAAAEAIAAAAAAAABQABP9bRs76jZ34AAABWAAAAGQD#####AAAADQAAAFcAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAANAAAAWAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACAAAABYAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAIgAAAFgAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAAWAAAAB0A#####wEAAAAAAQAAAAUAAABZAAAAWgAAAFsAAABcAAAAWQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEIAAABYAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAQwAAAFgAAAAdAP####8BAAAAAAEAAAAFAAAAXAAAAFsAAABeAAAAXwAAAFwAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA+AAAAWAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAD8AAABYAAAAHQD#####AQAAAAABAAAABQAAAFoAAABhAAAAYgAAAFsAAABaAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARQAAAFgAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABIAAAAWAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEYAAABYAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARwAAAFgAAAAdAP####8BAAAAAAEAAAAFAAAAZAAAAGUAAABmAAAAZwAAAGT#####AAAAAgAIQ01lc3VyZVgA#####wABeAAAAE4AAABX#####wAAAAIACENNZXN1cmVZAP####8AAXkAAABOAAAAVwAAAAIA#####wACeDEADGludCh4KzAuMDAxKQAAAAYCAAAABwAAAAAIAAAAaQAAAAE#UGJN0vGp#AAAAAIA#####wACeTEADGludCh5KzAuMDAxKQAAAAYCAAAABwAAAAAIAAAAagAAAAE#UGJN0vGp#AAAAAIA#####wADbnVtAAx4MSoyK254KjQqeTEAAAAHAAAAAAcCAAAACAAAAGsAAAABQAAAAAAAAAAAAAAHAgAAAAcCAAAACAAAAAMAAAABQBAAAAAAAAAAAAAIAAAAbAAAABsA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFcAAABb#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQD#####AQAAAADAJgAAAAAAAMAj#######wAAAAbhIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABtAAAAAgD#####AARudW0xAAVudW0rMQAAAAcAAAAACAAAAG0AAAABP#AAAAAAAAAAAAACAP####8ABG51bScACG51bStueCoyAAAABwAAAAAIAAAAbQAAAAcCAAAACAAAAAMAAAABQAAAAAAAAAAAAAACAP####8ABW51bScxAAZudW0nKzEAAAAHAAAAAAgAAABxAAAAAT#wAAAAAAAAAAAAGwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAWgAAAGIAAAAbAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABbAAAAZgAAABsA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFwAAABeAAAAIgD#####AQAAAADAJgAAAAAAAMAkAAAAAAAAAAAAdRIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABwAAAAIgD#####AQAAAADAJAAAAAAAAMAkAAAAAAAAAAAAcxIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABxAAAAIgD#####AQAAAADAIgAAAAAAAMAgAAAAAAAAAAAAdBIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABy#####wAAAAIAEkNMaWV1T2JqZXRQYXJQdExpZQD#####AQAAAAAAAF0AAAAIAAAANwAAAFcAAAAHAAAAVwAAAFgAAABZAAAAWgAAAFsAAABcAAAAXQAAACMA#####wEAAAAAAABjAAAACAAAADcAAABXAAAABwAAAFcAAABYAAAAWgAAAFsAAABhAAAAYgAAAGMAAAAjAP####8BAAAAAAAAaAAAAAgAAAA3AAAAVwAAAAcAAABXAAAAWAAAAGQAAABlAAAAZgAAAGcAAABoAAAAIwD#####AQAAAAAAAGAAAAAIAAAANwAAAFcAAAAHAAAAVwAAAFgAAABbAAAAXAAAAF4AAABfAAAAYAAAACMA#####wAAAAAAAAB5AAAACAAAAAMAAABTAAAACwAAAFMAAABVAAAAVgAAAFcAAABYAAAAWQAAAFoAAABbAAAAXAAAAF0AAAB5AAAAIwD#####AAAAAAAAAHwAAAAIAAAAAwAAAFMAAAALAAAAUwAAAFUAAABWAAAAVwAAAFgAAABbAAAAXAAAAF4AAABfAAAAYAAAAHwAAAAjAP####8AAAAAAAAAewAAAAgAAAADAAAAUwAAAAsAAABTAAAAVQAAAFYAAABXAAAAWAAAAGQAAABlAAAAZgAAAGcAAABoAAAAewAAACMA#####wAAAAAAAAB6AAAACAAAAAMAAABTAAAACwAAAFMAAABVAAAAVgAAAFcAAABYAAAAWgAAAFsAAABhAAAAYgAAAGMAAAB6AAAAIwD#####AQAAAAAAAG8AAAAIAAAANwAAAFcAAAAKAAAAVwAAAFgAAABbAAAAaQAAAGoAAABrAAAAbAAAAG0AAABuAAAAbwAAACMA#####wAAAAAAAACBAAAACAAAAAMAAABTAAAADgAAAFMAAABVAAAAVgAAAFcAAABYAAAAWwAAAGkAAABqAAAAawAAAGwAAABtAAAAbgAAAG8AAACBAAAAIwD#####AQAAAAAAAHYAAAAIAAAANwAAAFcAAAAMAAAAVwAAAFgAAABcAAAAXgAAAGkAAABqAAAAawAAAGwAAABtAAAAcAAAAHUAAAB2AAAAIwD#####AAAAAAAAAIMAAAAIAAAAAwAAAFMAAAAQAAAAUwAAAFUAAABWAAAAVwAAAFgAAABcAAAAXgAAAGkAAABqAAAAawAAAGwAAABtAAAAcAAAAHUAAAB2AAAAgwAAACMA#####wEAAAAAAAB4AAAACAAAADcAAABXAAAADQAAAFcAAABYAAAAWwAAAGYAAABpAAAAagAAAGsAAABsAAAAbQAAAHEAAAByAAAAdAAAAHgAAAAjAP####8AAAAAAAAAhQAAAAgAAAADAAAAUwAAABEAAABTAAAAVQAAAFYAAABXAAAAWAAAAFsAAABmAAAAaQAAAGoAAABrAAAAbAAAAG0AAABxAAAAcgAAAHQAAAB4AAAAhQAAACMA#####wEAAAAAAAB3AAAACAAAADcAAABXAAAADAAAAFcAAABYAAAAWgAAAGIAAABpAAAAagAAAGsAAABsAAAAbQAAAHEAAABzAAAAdwAAACMA#####wAAAAAAAACHAAAACAAAAAMAAABTAAAAEAAAAFMAAABVAAAAVgAAAFcAAABYAAAAWgAAAGIAAABpAAAAagAAAGsAAABsAAAAbQAAAHEAAABzAAAAdwAAAIcAAAAQAP####8B#wAAARAAAkExAMA3AAAAAAAAv#AAAAAAAAAFAAAAACIAAABEAAAAAgD#####AAJ4YgACMjQAAAABQDgAAAAAAAAAAAACAP####8AAnliAAIxNgAAAAFAMAAAAAAAAAAAAAIA#####wAEbnVtYgACNTYAAAABQEwAAAAAAAAAAAACAP####8ABG51bWMAAjMzAAAAAUBAgAAAAAAAAAAAAgD#####AAN4YzIAAjE2AAAAAUAwAAAAAAAAAAAAAgD#####AAN5YzIAAjIwAAAAAUA0AAAAAAAAAAAAAgD#####AAN4YzMAAjEyAAAAAUAoAAAAAAAAAAAAAgD#####AAN5YzMAAjI0AAAAAUA4AAAAAAAAAAAAGAD#####AQAAAAAQAAFiAAAAAAAAAAAAQAgAAAAAAAAFAAAAABwAAAAIAAAAigAAAAgAAACLAAAAGAD#####AX8AAAAQAAJjMgAAAAAAAAAAAEAIAAAAAAAACQAAAAAcAAAACAAAAI4AAAAIAAAAjwAAABgA#####wEAAH8AEAACYzMAAAAAAAAAAABACAAAAAAAAAkAAAAAHAAAAAgAAACQAAAACAAAAJEAAAAdAP####8AAAAAAAEAAAAFAAAALgAAAC8AAAAwAAAAMQAAAC4AAAAdAP####8BLLgsAAEAAAAFAAAAMwAAADQAAAA1AAAANgAAADP#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AQB#AAAAAAUAAACWAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADkAAAAIAAAAjAAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACAAAACYAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAPgAAAJgAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAA#AAAAmAAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAACIAAACYAAAAHQD#####AAAAAAABAAAABQAAAJkAAACaAAAAmwAAAJwAAACZAAAAGQD#####AAAADQAAAJIAAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACZAAAAngAAABAA#####wEA#wAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAJoAAACeAAAAEAD#####AQD#AAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAAmwAAAJ4AAAAQAP####8BAP8AABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACcAAAAngAAAB0A#####wH#AAAAAQAAAAUAAACfAAAAoAAAAKEAAACiAAAAnwAAACQA#####wH#AAAAAAAFAAAAowAAABkA#####wAAAA0AAAAr#####wAAAAEAC0NNYWNyb1BhdXNlAP####8AAAAAAf####8QQI70AAAAAABAQcKPXCj1wwIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAACAAAADgD#####AAAADQAAAAcDAAAAAT#wAAAAAAAAAAAACgAAADgAAAAIAAAAjQAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEUAAACnAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASAAAAKcAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABGAAAApwAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEcAAACnAAAAHQD#####Af8AAAABAAAABQAAAKgAAACpAAAAqgAAAKsAAACoAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAqAAAAKUAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACpAAAApQAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAKoAAAClAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAqwAAAKUAAAAdAP####8BAAB#AAEAAAAFAAAArQAAAK4AAACvAAAAsAAAAK0AAAAkAP####8BAAB#AAAABQAAALH#####AAAAAQASQ0FyY0RlQ2VyY2xlRGlyZWN0AP####8B##8AAAEAAACUAAAArf####8AAAABQFaAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8BAAB#ARAAAAAAAAAAAAAAAEAIAAAAAAAABQABP10AlhldV+MAAACzAAAADQD#####AAAALAAAAAFAVoAAAAAAAAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADMAAAC1AAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANAAAALUAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA1AAAAtQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADYAAAC1AAAAHQD#####AAB#AAABAAAABQAAALYAAAC3AAAAuAAAALkAAAC2AAAAJAD#####AQB#AAAAAAUAAAC6AAAADQD#####AAAAlAAAAAFAVoAAAAAAAAAAABAA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAK0AAAC8AAAAEAD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAArgAAALwAAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACvAAAAvAAAABAA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAALAAAAC8AAAAHQD#####AQAAfwABAAAABQAAAL0AAAC+AAAAvwAAAMAAAAC9AAAAJAD#####AQAAfwAAAAUAAADBAAAADQD#####AAAAk#####8AAAABAAxDTW9pbnNVbmFpcmUAAAABQFaAAAAAAAAAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACfAAAAwwAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAKAAAADDAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAoQAAAMMAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACiAAAAwwAAAB0A#####wH#AAAAAQAAAAUAAADEAAAAxQAAAMYAAADHAAAAxAAAACQA#####wH#AAAAAAAFAAAAyAAAACYA#####wH#AAAAAQAAACwAAAAq#####wAAAAFAVoAAAAAAAAAAACcA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAE#Zs#fPkSCoAAAAMr#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wAXTWVzdXJlIGQnYW5nbGUgb3JpZW50w6kAAAACAAAAAwAAAAMAAAAqAAAALAAAAMv#####AAAAAQAMQ0Jpc3NlY3RyaWNlAAAAAMwBAAAAABAAAAEAAQAAAMsAAAAsAAAAKgAAAA8AAAAAzAEAAAAAEAAAAAAAAAAAAAAAP+MzMzMzMzMFAAFAaT5Clg7dyQAAAM3#####AAAAAgATQ01lc3VyZUFuZ2xlT3JpZW50ZQEAAADMAAZhbmdsZTEAAAAqAAAALAAAAMsAAAAiAQAAAMwB#wAAAEAIAAAAAAAAP#AAAAAAAAAAAADODwAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAACwrAAAAAAz#####8AAAACABNDTWFycXVlQW5nbGVPcmllbnRlAQAAAMwB#wAAAAEAAAABQEJbiQkrj78AAAAqAAAALAAAAMsAAAAADQD#####AAAALAAAAAgAAADPAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMwAAANIAAAAQAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA0AAAA0gAAABAA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADUAAADSAAAAEAD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANgAAANIAAAAdAP####8BAH8AAAEAAAAFAAAA0wAAANQAAADVAAAA1gAAANMAAAAkAP####8BAH8AAAAABQAAANf#####AAAAAgAXQ01hY3JvQW5pbWF0aW9uUG9pbnRMaWUA#####wAAfwAB#####xBAjwQAAAAAAEBi8KPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHdG91cm5lMQAAAQAAAB4AAABkAAAAPAAAAMsAAQAAAAApAP####8AF01lc3VyZSBkJ2FuZ2xlIG9yaWVudMOpAAAAAgAAAAMAAAADAAAArQAAAJQAAAC0AAAAKgAAAADaAQAAAAAQAAABAAEAAAC0AAAAlAAAAK0AAAAPAAAAANoBAAAAABAAAAAAAAAAAAAAAD#jMzMzMzMzBQABQGk+QpYO3ckAAADbAAAAKwEAAADaAAZhbmdsZTMAAACtAAAAlAAAALQAAAAiAQAAANoBAH8AAEAIAAAAAAAAP#AAAAAAAAAAAADcDwAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAACwrAAAAAA3QAAACwBAAAA2gEAfwAAAQAAAAFAQluJCSuPvwAAAK0AAACUAAAAtAAAAAANAP####8AAACUAAAACAAAAN0AAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACtAAAA4AAAABAA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAK4AAADgAAAAEAD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAArwAAAOAAAAAQAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACwAAAA4AAAAB0A#####wEAAH8AAQAAAAUAAADhAAAA4gAAAOMAAADkAAAA4QAAACQA#####wEAAH8AAAAFAAAA5QAAAC0A#####wAAAH8B#####wpAj1wAAAAAAEBo8KPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHdG91cm5lMwAAAQAAAB4AAABkAAAAPAAAALQAAQD#####AAAAAQAUQ0FyY0RlQ2VyY2xlSW5kaXJlY3QA#####wEAAH8AAQAAAJMAAACf#####wAAACgAAAABQFaAAAAAAAAAAAAnAP####8BAAB#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQABP+#fkVF76cAAAADoAAAAKQD#####ABdNZXN1cmUgZCdhbmdsZSBvcmllbnTDqQAAAAIAAAADAAAAAwAAAJ8AAACTAAAA6QAAACoAAAAA6gEAAAAAEAAAAQABAAAA6QAAAJMAAACfAAAADwAAAADqAQAAAAAQAAAAAAAAAAAAAAA#4zMzMzMzMwUAAUBpPkKWDt3JAAAA6wAAACsBAAAA6gAGYW5nbGUyAAAAnwAAAJMAAADpAAAAIgEAAADqAQAAfwBACAAAAAAAAD#wAAAAAAAAAAAA7A8AAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAsKwAAAAAO0AAAAsAQAAAOoBAAB#AAEAAAABQEJbiQkrj78AAACfAAAAkwAAAOkAAAAADQD#####AAAAkwAAAAgAAADtAAAAEAD#####AQAAfwAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAnwAAAPAAAAAQAP####8BAAB#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACgAAAA8AAAABAA#####wEAAH8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAKEAAADwAAAAEAD#####AQAAfwAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAogAAAPAAAAAdAP####8B#wAAAAEAAAAFAAAA8QAAAPIAAADzAAAA9AAAAPEAAAAkAP####8B#wAAAAAABQAAAPUAAAAtAP####8A#wAAAf####8KQI7sAAAAAABAXGFHrhR64gIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB3RvdXJuZTIAAAEAAAAeAAAAZAAAADwAAADpAAEA#####wAAAAEAEUNNYWNyb0Rpc3Bhcml0aW9uAP####8AAH8AAf####8KQIe0AAAAAABAcLhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTEAAAAAAAcAAACWAAAAlwAAAEkAAAC7AAAALAAAANcAAADY#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wAAfwAB#####wpAiCQAAAAAAEByuFHrhR64AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJYXBwYXJhaXQxAAAAAAAHAAAAlgAAAJcAAABJAAAAuwAAACwAAADXAAAA2AD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAfwAB#####wpAQ8AAAAAAAEApCj1wo9cMAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAMQ29ycmVjdGlvbiBhAAAAAAAEAAAA+QAAANkAAAD4AAAApgAAAC8A#####wAAAH8B#####xBAj5QAAAAAAEBs8KPXCj1xAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHbWFzcXVlMwAAAAAABwAAAMEAAADCAAAAsQAAAOUAAACyAAAA5gAAAJQAAAAwAP####8AAAB#Af####8KQI+0AAAAAABAcLhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACWFwcGFyYWl0MwAAAAAABwAAAMEAAADCAAAAsQAAAOUAAACyAAAA5gAAAJQAAAAAMQD#####AAAAfwH#####CkBo8AAAAAAAQCkKPXCj1wwCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAxDb3JyZWN0aW9uIGMAAAAAAAMAAAD8AAAA5wAAAPsAAAAvAP####8A#wAAAf####8QQI+8AAAAAABAczhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTIAAAAAAAcAAADIAAAAyQAAAKMAAAD1AAAApAAAAPYAAACTAAAAMAD#####AAAAAAH#####CkCPxAAAAAAAQHZ4UeuFHrgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAlhcHBhcmFpdDIAAAAAAAcAAADIAAAAyQAAAKMAAAD1AAAApAAAAPYAAACTAAAAADEA#####wD#AAAB#####wpAXaAAAAAAAEApCj1wo9cMAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAMQ29ycmVjdGlvbiBiAAAAAAAEAAAA#wAAAPcAAAD+AAAApgAAADEA#####wAAAAAB#####xBAcigAAAAAAEAeFHrhR634AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKQ29ycmVjdGlvbgAAAAAABAAAAKYAAAD6AAABAAAAAP3###############8="
				//première question : centre A, rotation de 90° sens anti-horaire, une figure de tabfigA donne une figure de tabfigD, le point B donne le point D.
				indexA = randint(0, nx * ny - 1)
				numA = tabfigA[indexA][2]
				indexcentre1 = randint(0, nx * ny - 1, [indexA])
				xmil1 = tabfigA[indexcentre1][0]
				ymil1 = tabfigA[indexcentre1][1]
				point = image_point_par_transformation(6, [tabfigB[indexA][0], tabfigB[indexA][1]], [xmil1, ymil1]) // le repère est direct, donc le sens de rotation est inversé...
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigD[j][0] && point[1] == tabfigD[j][1]) {
							trouver = true
							num1 = tabfigD[j][2]
							xa = tabfigA[indexA][0]
							ya = tabfigA[indexA][1]
							break
						}
					}
					if (trouver == false) {
						indexA = randint(0, nx * ny - 1)
						numA = tabfigA[indexA][2]
						indexcentre1 = randint(0, nx * ny - 1, [indexA])
						xmil1 = tabfigA[indexcentre1][0]
						ymil1 = tabfigA[indexcentre1][1]
						point = image_point_par_transformation(6, [tabfigB[indexA][0], tabfigB[indexA][1]], [xmil1, ymil1]) // le repère est direct, donc le sens de rotation est inversé...
					}
				}
				texte += num_alpha(0) + texte_en_couleur_et_gras(` Quel est le numéro de la figure image de la figure ${numA} dans la rotation de centre ${s0} et d'angle 90° dans le sens inverse des aiguilles d'une montre ?<br>`, `green`)
				texte_corr = num_alpha(0) + texte_en_couleur_et_gras(` La figure image de la figure ${numA} dans la rotation de centre ${s0} et d'angle 90° dans le sens inverse des aiguilles d'une montre porte le numéro ${num1}.<br>`, `green`)

				//deuxième question : centre B, rotation 90° sens horaire, une figure de tabfigD donne une figure de tabfigC
				indexD = randint(0, nx * ny - 1)
				numD = tabfigD[indexD][2]
				indexcentre2 = randint(0, nx * ny - 1, [indexD])
				xmil2 = tabfigB[indexcentre2][0]
				ymil2 = tabfigB[indexcentre2][1]
				point = image_point_par_transformation(5, [tabfigD[indexD][0], tabfigD[indexD][1]], [xmil2, ymil2]) // le repère est direct, donc le sens de rotation est inversé...
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == 4 + tabfigC[j][0] && point[1] == tabfigC[j][1]) {
							trouver = true
							num2 = tabfigC[j][2]
							xb = tabfigA[indexD][0]
							yb = tabfigA[indexD][1]
							break
						}
					}
					if (trouver == false) {
						indexD = randint(0, nx * ny - 1)
						numD = tabfigD[indexD][2]
						indexcentre2 = randint(0, nx * ny - 1, [indexD])
						xmil2 = tabfigB[indexcentre2][0]
						ymil2 = tabfigB[indexcentre2][1]
						point = image_point_par_transformation(5, [tabfigD[indexD][0], tabfigD[indexD][1]], [xmil2, ymil2]) // le repère est direct, donc le sens de rotation est inversé...
					}
				}
				texte += num_alpha(1) + texte_en_couleur_et_gras(` Quel est le numéro de la figure image de la figure ${numD} dans la rotation de centre ${s1} et d'angle 90° dans le sens des aiguilles d'une montre ?<br>`, `red`)
				texte_corr += num_alpha(1) + texte_en_couleur_et_gras(` La figure image de la figure ${numD} dans la rotation de centre ${s1} et d'angle 90° dans le sens des aiguilles d'une montre porte le numéro ${num2}.<br>`, `red`)

				//troisième question : centre B, rotation 90° sens anti-horaire, une figure de tabfigC donne une figure de tabfigD
				indexC = randint(0, nx * ny - 1)
				numC = tabfigC[indexC][2]
				indexcentre3 = randint(0, nx * ny - 1, [indexC])
				xmil3 = tabfigB[indexcentre3][0]
				ymil3 = tabfigB[indexcentre3][1]
				point = image_point_par_transformation(6, [tabfigC[indexC][0], tabfigC[indexC][1]], [xmil3, ymil3]) // le repère est direct, donc le sens de rotation est inversé...
				trouver = false
				while (trouver == false) {
					for (let j = 0; j < nx * ny; j++) {
						if (point[0] == tabfigD[j][0] && point[1] == 4 + tabfigD[j][1]) {
							trouver = true
							num3 = tabfigD[j][2]
							xc = tabfigA[indexC][0]
							yc = tabfigA[indexC][1]
							break
						}
					}
					if (trouver == false) {
						indexC = randint(0, nx * ny - 1)
						numC = tabfigC[indexC][2]
						indexcentre3 = randint(0, nx * ny - 1, [indexC])
						xmil3 = tabfigB[indexcentre3][0]
						ymil3 = tabfigB[indexcentre3][1]
						point = image_point_par_transformation(6, [tabfigC[indexC][0], tabfigC[indexC][1]], [xmil3, ymil3]) // le repère est direct, donc le sens de rotation est inversé...
					}
				}
				texte += num_alpha(2) + texte_en_couleur_et_gras(` Quel est le numéro de la figure image de la figure ${numC} dans la rotation de centre ${s2} et d'angle 90° dans le sens inverse des aiguilles d'une montre ?<br>`, `blue`)
				texte_corr += num_alpha(2) + texte_en_couleur_et_gras(` La figure image de la figure ${numC} dans la rotation de centre ${s2} et d'angle 90° dans le sens inverse des aiguilles d'une montre porte le numéro ${num3}.<br>`, `blue`)


				break

		}
		if (sortie_html) {

			this.MG32code_pour_modifier_la_figure = `
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xB", "${xB}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yB", "${yB}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xC", "${xC}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yC", "${yC}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xD", "${xD}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yD", "${yD}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "nx", "${nx}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "ny", "${ny}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "numa", "${numA}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "numb", "${numD}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "numc", "${numC}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xc3", "${xmil3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yc3", "${ymil3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xc", "${xc}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yc", "${yc}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xc2", "${xmil2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yc2", "${ymil2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xb", "${xb}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yb", "${yb}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xc1", "${xmil1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yc1", "${ymil1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xa", "${xa}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "ya", "${ya}");	
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "Zoom", "${Zoom}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "Angle", "${Angle}");	
			mtg32App.rename("MG32svg${numero_de_l_exercice}", "c1", "${s0}");
			mtg32App.rename("MG32svg${numero_de_l_exercice}", "c2", "${s1}");
			mtg32App.rename("MG32svg${numero_de_l_exercice}", "c3", "${s2}");

			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xV", "${xV1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yV", "${yV1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xV2", "${xV2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yV2", "${yV2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xV3", "${xV3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yV3", "${yV3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xB", "${xB}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yB", "${yB}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xC", "${xC}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yC", "${yC}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xD", "${xD}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yD", "${yD}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "nx", "${nx}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "ny", "${ny}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "numa", "${numA}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "numb", "${numD}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "numc", "${numC}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xc3", "${xmil3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yc3", "${ymil3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xc", "${xc}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yc", "${yc}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xc2", "${xmil2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yc2", "${ymil2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xb", "${xb}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yb", "${yb}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xc1", "${xmil1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yc1", "${ymil1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xa", "${xa}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "ya", "${ya}");	
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "Zoom", "${Zoom}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "Angle", "${Angle}");	
			mtg32App.rename("MG32svgcorr${numero_de_l_exercice}", "c1", "${s0}");
			mtg32App.rename("MG32svgcorr${numero_de_l_exercice}", "c2", "${s1}");
			mtg32App.rename("MG32svgcorr${numero_de_l_exercice}", "c3", "${s2}");

			mtg32App.calculate("MG32svg${numero_de_l_exercice}");
			mtg32App.display("MG32svg${numero_de_l_exercice}");
			mtg32App.calculate("MG32svgcorr${numero_de_l_exercice}");
			mtg32App.display("MG32svgcorr${numero_de_l_exercice}");
			mtg32App.executeMacro("MG32svgcorr${numero_de_l_exercice}","Correction")
			mtg32App.display("MG32svgcorr${numero_de_l_exercice}");
			`

			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			liste_de_question_to_contenu_sans_numero(this)

		}
		else {
			texte = ``
			texte_cor = ``
			this.liste_questions.push(texte) // on envoie la question
			this.liste_corrections.push(texte_corr)
			liste_de_question_to_contenu_sans_numero(this);
		}



	}
	this.besoin_formulaire_numerique = ['Transformations', 4, '1 : Symétries axiales\n 2 : Symétries centrales\n 3 : Translations\n 4 : Rotations\n 5 : Homothéties\n'];
}
/**
 * Transformer un programme de calcul avec les 4 opérations dans un ordre aléatoire en un seul calcul.
 * @Auteur Jean-Claude Lhote
 * Référence 5C11-2
 */
function Ecrire_une_expression_mathador() {
	'use strict'
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Traduire une succession d\'opérations par une expression"
	this.consigne = "";
	this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let expression, calculs_successifs, tirage, cible, solution_mathador, quidam
		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			// traduire un calcul mathador
			solution_mathador = Trouver_solution_mathador(30, 90)
			tirage = solution_mathador[0]
			cible = solution_mathador[1]
			calculs_successifs = solution_mathador[2]
			expression = solution_mathador[3]
			quidam = prenom()
			texte = `${quidam} a trouvé une solution mathador pour le tirage suivant $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ et pour la cible $${cible}$, voici ses calculs :<br>`
			for (let j = 0; j < 4; j++) {
				texte += `$${calculs_successifs[j]}$<br>`
			}
			texte += `Écris cette succession d'opérations en une seule expression.`
			texte_corr = `L'expression correspondante au calcul de ${quidam} est<br>$${expression}$ ou $${solution_mathador[4]}$.`
			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
}
/**
 * Construction de symétrique avec dispositif d'auto-correction aléatoire
 * Ref 5G11-3 
 * @Auteur Jean-Claude Lhote
 * Publié le 30/11/2020
 */
function Construire_symetrique_point_5e() {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Construire le symétrique d'un point avec cible auto-corrective";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 3;
	this.nouvelle_version = function () {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let result = [0, 0], texte_corr = "", nbpoints = parseInt(this.sup)
		let celluleAlea = function (rang) {
			let lettre = lettre_depuis_chiffre(randint(1, rang))
			let chiffre = Number(randint(1, rang)).toString()
			return lettre + chiffre
		}
		// On prépare la figure...
		let O = point(0, 0, 'O')
		let marks = ['/', '//', '///', 'x', 'o', 'S', 'V']
		let noms = choisit_lettres_differentes(nbpoints, 'QO', majuscule = true)
		this.consigne = `Construire le symétrique des points $${noms[0]}$`
		for (let i = 1; i < nbpoints - 1; i++) {
			this.consigne += `, $${noms[i]}$`
		}
		this.consigne += ` et $${noms[nbpoints - 1]}$ par rapport à $O$.`;
		let cibles = [], M = [], N = [], objets_enonce = [], objets_correction = []  //cibles, M point marqués, N symétrique de M
		let cellules = []
		let xMin, yMin, xMax, yMax
		[xMin, yMin, xMax, yMax] = [0, 0, 0, 0]
		for (let i = 0; i < nbpoints; i++) { //On place les cibles.
			N.push(point(calcul(randint(-80, 80, 0) / 10), calcul(randint(-80, 80, 0) / 10), noms[i] + "\'"))
			nontrouve = true
			while (longueur(N[i], O) < 3 || nontrouve) {
				nontrouve = true
				if (longueur(N[i], O) < 3) {
					N[i].x = calcul(randint(-80, 80, 0) / 10)
					N[i].y = calcul(randint(-80, 80, 0) / 10)
				}
				else {
					assezloin = true
					for (let j = 0; j < i; j++) {
						if (longueur(N[i], N[j]) < 4.5) assezloin = false
					}
					if (assezloin == false) {//éloigner les points donc les grilles
						N[i].x = calcul(randint(-80, 80, 0) / 10)
						N[i].y = calcul(randint(-80, 80, 0) / 10)
					}
					else nontrouve = false
				}
			}
		}

		objets_enonce.push(tracePoint(O), labelPoint(O))
		objets_correction.push(tracePoint(O), labelPoint(O))

		for (let i = 0; i < nbpoints; i++) {
			cellules.push(celluleAlea(4))
			result = dansLaCibleCarree(N[i].x, N[i].y, 4, 0.6, cellules[i])
			cible = cibleCarree({ x: result[0], y: result[1], rang: 4, num: i + 1, taille: 0.6 })
			cible.taille = 0.6
			cible.color = 'orange'
			cible.opacite = 0.7
			cibles.push(cible)
		}
		for (let i = 0; i < nbpoints; i++) {
			M.push(rotation(N[i], O, 180, noms[i]))
			objets_enonce.push(tracePoint(M[i]), labelPoint(M[i]), cibles[i])
			objets_correction.push(tracePoint(M[i], N[i]), labelPoint(M[i], N[i]), cibles[i])
			objets_correction.push(segment(M[i], N[i], arcenciel(i)), codageMilieu(M[i], N[i], arcenciel(i + 5), marks[i]))
			objets_correction.push(traceCompas(O, N[i], 20))
			texte_corr += `$${noms[i]}\'$, le symétrique du point $${noms[i]}$ est dans la case ${cellules[i]} de la grille ${i + 1}.<br>`
		}

		for (let i = 0; i < nbpoints; i++) {
			xMin = Math.min(xMin, N[i].x - 3, M[i].x - 3)
			yMin = Math.min(yMin, N[i].y - 3, M[i].y - 3)
			xMax = Math.max(xMax, N[i].x + 3, M[i].x + 3)
			yMax = Math.max(yMax, N[i].y + 3, M[i].y + 3)
		}

		fenetreMathalea2d = [xMin, yMin, xMax, yMax]

		this.liste_questions.push(mathalea2d({ xmin: xMin, ymin: yMin, xmax: xMax, ymax: yMax, pixelsParCm: 20, scale: 0.7 }, objets_enonce))
		this.liste_corrections.push(texte_corr + mathalea2d({ xmin: xMin, ymin: yMin, xmax: xMax, ymax: yMax, pixelsParCm: 20, scale: 0.7 }, objets_correction))
		liste_de_question_to_contenu(this)

		//  let nonchoisi,coords=[],x,y,objets_enonce=[],objets_correction=[],nomd,label_pos

	}
	this.besoin_formulaire_numerique = ['Nombre de points (1 à 5)', 5, "1\n2\n3\n4\n5"];
	// this.besoin_formulaire2_case_a_cocher = ["Avec des points de part et d'autre"];	
}

/**
 * @Auteur Jean-Claude Lhote
 * Référence 5C11
 */
function Traduire_une_phrase_par_une_expression() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 1
	this.titre = "Traduire une phrase par une expression"
	this.sup = false
	this.sup2 = false
}
/**
 * @Auteur Jean-Claude Lhote
 * Référence 5L10-1
 */
function Traduire_une_phrase_par_une_expression_litterale() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 1
	this.titre = "Traduire une phrase par une expression"
	this.sup = false
	this.sup2 = false
	this.litteral = true
}
/**
 * @Auteur Jean-Claude Lhote
 * Référence 5C11-1
 */
function Traduire_une_expression_par_une_phrase() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 2
	this.titre = "Traduire une expression par une phrase"
}
/**
 * @Auteur Jean-Claude Lhote
 * Référence 5L10-3
 */
function Traduire_une_expression_litterale_par_une_phrase() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 2
	this.titre = "Traduire une expression par une phrase"
	this.litteral = true
}

/**
 * @Auteur Jean-Claude Lhote
 * Référence 5C12-1
 */
function Traduire_une_phrase_par_une_expression_et_calculer() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 3
	this.titre = "Traduire une phrase par une expression et la calculer"
}
/**
 * @Auteur Jean-Claude Lhote
 * Référence 5L13-3
 */
function Traduire_une_phrase_par_une_expression_litterale_et_calculer() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 3
	this.titre = "Traduire une phrase par une expression et la calculer"
	this.litteral = true
}
/**
 * @Auteur Jean-Claude Lhote
 * Référence 5C12
 */
function Calculer_une_expression_numerique() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 4
	this.titre = "Calculer une expression numérique en détaillant les calculs"
}
/**
 * @Auteur Jean-Claude Lhote
  * Référence 5L13-1
*/
function Calculer_une_expression_litterale() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 4
	this.titre = "Calculer une expression littérale pour les valeurs données en détaillant les calculs"
	this.litteral = true
}



/**
 * 5L12-1
 * Distinction entre la réduction d'un produit et la réduction d'une somme, on garde les même coeffs
 * @author Sébastien Lozano 
 */
function Reduire_dinstinction_somme_produit() {
	'use strict'
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	if (this.debug) {
		this.nb_questions = 4;
	} else {
		this.nb_questions = 2;
	};
	this.consigne = "";
	//this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//this.sup2=false; // si false alors utilisation de nombres entiers, si true alors utilisation de nombres à un chiffre après la virgule.
	this.titre = `Réduire un produit et une somme à partir des mêmes éléments algébriques pour distinguer la différence`;
	let type_de_questions_disponibles
	this.nouvelle_version = function (numero_de_l_exercice) {
		//let type_de_questions_disponibles
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (this.debug) {
			type_de_questions_disponibles = [0, 1, 2, 3];
		} else {
			type_de_questions_disponibles = [choice([0, 2]), choice([1, 3])];
		}

		//let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) 
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions)

		//if (this.sup2) decimal=10;
		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			// deux fonctions pour gérer la chaine de sortie et supprimer le coeff 1 !
			function isUn(n) {
				if (n == 1) {
					return true;
				} else {
					return false;
				};
			};
			function sliceUn(n) {
				if (n == 1) {
					return ``;
				} else {
					return `${n}`;
				};
			};
			let variables = ['x', 'y', 'z', 't'];
			let enonces = [];
			let n = randint(1, 6);
			let p = randint(1, 6);
			let inc = variables[randint(0, variables.length - 1)];
			//===== 0 le produit puis la somme
			enonces.push({
				enonce: `Simplifier le plus possible le produit puis la somme de $${sliceUn(n)}${inc}$ et de $${sliceUn(p)}${inc}$`,
				questtion: ``,
				correction_produit: `Le produit de $${sliceUn(n)}${inc}$ et de $${sliceUn(p)}${inc}$ vaut : $${sliceUn(n)}${inc}\\times ${sliceUn(p)}${inc} = ${n}\\times ${inc}\\times ${p}\\times ${inc} = ${n}\\times ${p}\\times ${inc}\\times ${inc}=$ `,
				correction_somme: `La somme de $${sliceUn(n)}${inc}$ et de $${sliceUn(p)}${inc}$ vaut : $${sliceUn(n)}${inc}+${sliceUn(p)}${inc} = ${n}\\times ${inc}+${p}\\times ${inc} = (${n}+${p})\\times ${inc}=$ `
			});
			if (isUn(n * p)) {
				enonces[0].correction_produit += `${texte_en_couleur(`$${n * p}${inc}^2=${inc}^2$`)}`;
			} else {
				enonces[0].correction_produit += `${texte_en_couleur(` $${n * p}${inc}^2$`)}`;
			};
			if (isUn(n * p)) {
				enonces[0].correction_somme += `${texte_en_couleur(` $${n + p}${inc}=${inc}$`)}`;
			} else {
				enonces[0].correction_somme += `${texte_en_couleur(` $${n + p}${inc}$`)}`;
			};
			if (isUn(n) && isUn(p)) {
				enonces[0].correction_produit = `$${inc}\\times ${inc} =$ ${texte_en_couleur(` $${inc}^2$`)} `;
			}
			//===== 1 le produit puis la somme
			enonces.push({
				enonce: `Simplifier le plus possible l'expression $${sliceUn(n)}${inc}\\times ${sliceUn(p)}${inc}$ puis l'expression $${sliceUn(n)}${inc}+${sliceUn(p)}${inc}$`,
				questtion: ``,
				correction_produit: `$${sliceUn(n)}${inc}\\times ${sliceUn(p)}${inc} = ${n}\\times ${inc}\\times ${p}\\times ${inc} = ${n}\\times ${p}\\times ${inc}\\times ${inc}=$ `,
				correction_somme: `$${sliceUn(n)}${inc}+${sliceUn(p)}${inc} = ${n}\\times ${inc}+${p}\\times ${inc} = (${n}+${p})\\times ${inc}=$ `
			});

			if (isUn(n * p)) {
				enonces[1].correction_produit += `${texte_en_couleur(`$${n * p}${inc}^2=${inc}^2$`)}`;
			} else {
				enonces[1].correction_produit += `${texte_en_couleur(` $${n * p}${inc}^2$`)}`;
			};
			if (isUn(n * p)) {
				enonces[1].correction_somme += `${texte_en_couleur(` $${n + p}${inc}=${inc}$`)}`;
			} else {
				enonces[1].correction_somme += `${texte_en_couleur(` $${n + p}${inc}$`)}`;
			};
			if (isUn(n) && isUn(p)) {
				enonces[1].correction_produit = `$${inc}\\times ${inc} =$ ${texte_en_couleur(` $${inc}^2$`)} `;
			}
			//===== 2 la somme puis le produit 
			enonces.push({
				enonce: `Simplifier le plus possible la somme puis le produit de $${sliceUn(n)}${inc}$ et de $${sliceUn(p)}${inc}$`,
				questtion: ``,
				correction_produit: `Le produit de $${sliceUn(n)}${inc}$ et de $${sliceUn(p)}${inc}$ vaut : $${sliceUn(n)}${inc}\\times ${sliceUn(p)}${inc} = ${n}\\times ${inc}\\times ${p}\\times ${inc} = ${n}\\times ${p}\\times ${inc}\\times ${inc}=$ `,
				correction_somme: `La somme de $${sliceUn(n)}${inc}$ et de $${sliceUn(p)}${inc}$ vaut : $${sliceUn(n)}${inc}+${sliceUn(p)}${inc} = ${n}\\times ${inc}+${p}\\times ${inc} = (${n}+${p})\\times ${inc}=$ `
			});
			if (isUn(n * p)) {
				enonces[2].correction_produit += `${texte_en_couleur(`$${n * p}${inc}^2=${inc}^2$`)}`;
			} else {
				enonces[2].correction_produit += `${texte_en_couleur(` $${n * p}${inc}^2$`)}`;
			};
			if (isUn(n * p)) {
				enonces[2].correction_somme += `${texte_en_couleur(` $${inc}$`)}`;
			} else {
				enonces[2].correction_somme += `${texte_en_couleur(` $${n + p}${inc}$`)}`;
			};
			if (isUn(n) && isUn(p)) {
				enonces[2].correction_produit = `$${inc}\\times ${inc} =$ ${texte_en_couleur(` $${inc}^2$`)} `;
			}
			//===== 3 la somme puis le produit 
			enonces.push({
				enonce: `Simplifier le plus possible l'expression $${sliceUn(n)}${inc}+${sliceUn(p)}${inc}$ puis l'expression $${sliceUn(n)}${inc}\\times ${sliceUn(p)}${inc}$`,
				questtion: ``,
				correction_produit: `$${sliceUn(n)}${inc}\\times ${sliceUn(p)}${inc} = ${n}\\times ${inc}\\times ${p}\\times ${inc} = ${n}\\times ${p}\\times ${inc}\\times ${inc}=$ `,
				correction_somme: `$${sliceUn(n)}${inc}+${sliceUn(p)}${inc} = ${n}\\times ${inc}+${p}\\times ${inc} = (${n}+${p})\\times ${inc}=$ `
			});
			if (isUn(n * p)) {
				enonces[3].correction_produit += `${texte_en_couleur(`$${inc}^2$`)}`;
			} else {
				enonces[3].correction_produit += `${texte_en_couleur(` $${n * p}${inc}^2$`)}`;
			};
			if (isUn(n * p)) {
				enonces[3].correction_somme += `${texte_en_couleur(` $${inc}$`)}`;
			} else {
				enonces[3].correction_somme += `${texte_en_couleur(` $${n + p}${inc}$`)}`;
			};
			if (isUn(n) && isUn(p)) {
				enonces[3].correction_produit = `$${inc}\\times ${inc} =$ ${texte_en_couleur(` $${inc}^2$`)} `;
			};

			switch (liste_type_de_questions[i]) {
				case 0:	// produit puis somme 				
					texte = `${enonces[0].enonce}.`;
					if (this.debug) {
						texte += `<br><br>=====CORRECTION======<br>`;
						texte += enonces[0].correction_produit;
						texte += `<br>`;
						texte += enonces[0].correction_somme;
						texte_corr = ``;
					} else {
						texte_corr = enonces[0].correction_produit;
						texte_corr += `<br>`;
						texte_corr += enonces[0].correction_somme;
					};
					break;
				case 1:	// x puis +				
					texte = `${enonces[1].enonce}.`;
					if (this.debug) {
						texte += `<br><br>=====CORRECTION======<br>`;
						texte += enonces[1].correction_produit;
						texte += `<br>`;
						texte += enonces[1].correction_somme;
						texte_corr = ``;
					} else {
						texte_corr = enonces[1].correction_produit;
						texte_corr += `<br>`;
						texte_corr += enonces[1].correction_somme;
					};
					break;
				case 2:	// somme puis produit				
					texte = `${enonces[2].enonce}.`;
					if (this.debug) {
						texte += `<br><br>=====CORRECTION======<br>`;
						texte += enonces[2].correction_somme;
						texte += `<br>`;
						texte += enonces[2].correction_produit;
						texte_corr = ``;
					} else {
						texte_corr = enonces[2].correction_somme;
						texte_corr += `<br>`;
						texte_corr += enonces[2].correction_produit;
					};
					break;
				case 3:	// + puis x				
					texte = `${enonces[3].enonce}.`;
					if (this.debug) {
						texte += `<br><br>=====CORRECTION======<br>`;
						texte += enonces[3].correction_somme;
						texte += `<br>`;
						texte += enonces[3].correction_produit;
						texte_corr = ``;
					} else {
						texte_corr = enonces[3].correction_somme;
						texte_corr += `<br>`;
						texte_corr += enonces[3].correction_produit;
					};
					break;


			}
			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire2_case_a_cocher = ["Avec décimaux.",false]

}


/**
 * Référence 5L14-4
 * Déterminer la dernière opération à effectuer dans une expression littérale
 * @author Sébastien Lozano fork Jean-Claude Lhote
 */
function Calculer_une_expression_litteraleBis() {
	'use strict'
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.consigne = "";
	this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup2 = false; // si false alors utilisation de nombres entiers, si true alors utilisation de nombres à un chiffre après la virgule.
	this.titre = `Déterminer la dernière opération à effectuer dans une expression littérale`;

	this.nouvelle_version = function (numero_de_l_exercice) {
		let type_de_questions_disponibles
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		type_de_questions_disponibles = [5] //expressions complexes
		let expf, expn, expc, decimal = 1, nbval, nb_operations, resultats, last_op
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions)
		if (this.sup2) decimal = 10;
		for (let i = 0, texte, texte_corr, val1, val2, cpt = 0; i < this.nb_questions && cpt < 50;) {
			nb_operations = parseInt(liste_type_de_questions[i])
			val1 = randint(2, 5)
			val2 = randint(6, 9)
			//resultats=Choisir_expression_litteraleBis(nb_operations,decimal,val1,val2)
			resultats = Choisir_expression_litterale(nb_operations, decimal, val1, val2, this.sup)
			expf = resultats[0]
			expn = resultats[1]
			expc = resultats[2]
			nbval = resultats[3]
			last_op = resultats[4];

			switch (liste_type_de_questions[i]) {
				case 5:
					if (expn.indexOf('ou') > 0) expn = expn.substring(0, expn.indexOf('ou')) // on supprime la deuxième expression fractionnaire
					this.consigne = `Déterminer la dernière opération à effectuer s'il fallait faire le calcul pour des valeurs données de $x$ et de $y$.`
					texte = `${expn}.`
					if (this.debug) {
						texte += `<br><br>=====CORRECTION======<br>`;
						texte += `Pour fixer les idées, choissions des valeurs pour $x$ et $y$, par exemple $x=${val1}$ et $y=${val2}$.`
						texte += `<br>Le calcul serait le suivant :<br> ${expc}.`;
						texte += `<br>Pour n'importe quelles valeurs de $x$ et de $y$ choisies, les étapes sont les mêmes, elles respectent les priorités opératoires.`
						texte += texte_en_couleur(`<br>La dernière opération dans ${expn} est donc une ${last_op}.`);
						texte_corr = ``;
					} else {
						texte_corr = `Pour fixer les idées, choissions des valeurs pour $x$ et $y$, par exemple $x=${val1}$ et $y=${val2}$.`
						texte_corr += `<br>Le calcul serait le suivant : ${expc}.`;
						texte_corr += `<br>Pour n'importe quelles valeurs de $x$ et de $y$ choisies, les étapes sont les mêmes, elles respectent les priorités opératoires.`
						texte_corr += texte_en_couleur(`<br>La dernière opération dans ${expn} est donc une ${last_op}.`);
					};

					break;

			}
			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_case_a_cocher = ["Avec signes × devant les parenthèses", true]
	this.besoin_formulaire2_case_a_cocher = ["Avec décimaux.", false]

}

/**
 * Référence 5L13-6
 * Déterminer la dernière opération à effectuer dans une expression numérique
 * @author Sébastien Lozano 
 */
function Determiner_derniere_operation_exp_num() {
	'use strict'
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.consigne = "";
	this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = true;
	this.sup2 = false; // si false alors utilisation de nombres entiers, si true alors utilisation de nombres à un chiffre après la virgule.
	this.titre = `Déterminer la dernière opération à effectuer dans une expression numérique`;

	this.nouvelle_version = function (numero_de_l_exercice) {
		let type_de_questions_disponibles
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		type_de_questions_disponibles = [5] //expressions complexes
		let expf, expn, expc, decimal = 1, nbval, nb_operations, resultats, last_op
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions)
		if (this.sup2) decimal = 10;
		for (let i = 0, texte, texte_corr, val1, val2, cpt = 0; i < this.nb_questions && cpt < 50;) {
			nb_operations = parseInt(liste_type_de_questions[i])
			val1 = randint(2, 5)
			val2 = randint(6, 9)
			//resultats=Choisir_expression_litteraleBis(nb_operations,decimal,val1,val2)
			resultats = Choisir_expression_litterale(nb_operations, decimal, val1, val2, this.sup)
			expf = resultats[0]
			expn = resultats[1]
			expc = resultats[2]
			nbval = resultats[3]
			last_op = resultats[4];
			let str = expc.split('=');

			switch (liste_type_de_questions[i]) {
				case 5:
					if (expn.indexOf('ou') > 0) expn = expn.substring(0, expn.indexOf('ou')) // on supprime la deuxième expression fractionnaire
					this.consigne = `Déterminer la dernière opération à effectuer .`
					texte = `$${str[1]}$`
					//texte=`${expn}`
					if (this.debug) {
						texte += `<br><br>=====CORRECTION======<br>`;
						texte += `$`
						for (l = 1; l < str.length - 1; l++) {
							texte += `${str[l]}=`
						};
						texte += `${str[str.length - 1]}`
						texte += `<br>$\\textbf{La dernière opération dans $${str[1]}$ est donc une ${last_op}.}$`;
						texte_corr = ``;
					} else {
						texte_corr = `$`
						for (l = 1; l < str.length - 1; l++) {
							texte_corr += `${str[l]}=`
						};
						texte_corr += `${str[str.length - 1]}`
						texte_corr += `<br>$\\textbf{La dernière opération dans $${str[1]}$ est donc une ${last_op}.}$`;
					};

					break;

			}
			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire2_case_a_cocher = ["Avec décimaux.", false]
	this.besoin_formulaire_case_a_cocher = ["Avec le signe × devant les parenthèses", true]

}

/**
 * Fork de la fonction de JC avec ajout de la dernière opération dans le tableau de sortie
 * @param {number} nb_operations 
 * @param {number} decimal 
 * @param {number} val1 
 * @param {number} val2 
 * @returns [expf,expl,expc,nbval,last_op]
 * @author Jean Claude Lhote forked by Sébastien LOZANO
 * Référence 5C11,5C11-1, 5C11-2, 5L13, 5L13-1, 5L13-2, 5L13-3
 */
//function Choisir_expression_litteraleBis(nb_operations,decimal,val1=1,val2=2) {
function Choisir_expression_litterale(nb_operations, decimal, val1 = 1, val2 = 2, times_on = true) {
	let expf, expl, expc, arrondir = Math.log10(decimal)
	let a = arrondi(randint(2 * decimal, 10 * decimal) / decimal, arrondir)
	let b = arrondi(randint(2 * decimal, 10 * decimal, [a * decimal]) / decimal, arrondir)
	let c = arrondi(randint(2 * decimal, 10 * decimal) / decimal, arrondir)
	let d = arrondi(randint(2 * decimal, 10 * decimal, [c * decimal]) / decimal, arrondir)
	let e = arrondi(randint(2 * decimal, 10 * decimal) / decimal, arrondir)
	let f = arrondi(randint(2 * decimal, 10 * decimal, [e * decimal]) / decimal, arrondir)
	let souscas
	let l1 = 'x'
	let l2 = 'y'
	let nbval
	let signex = ``
	if (times_on) signex = `\\times`
	switch (nb_operations) {
		case 1: // expressions de base (1 opération)
			nbval = 1
			souscas = randint(0, 3)
			switch (souscas) {
				case 0: //somme de deux nombres
					expf = `La somme de ${nombre_avec_espace(a)} et $${l1}$`
					expl = `$${tex_nombre(a)}+${l1}$`
					expc = `$${tex_nombre(a)}+${l1}=${tex_nombre(a)}+${tex_nombre(val1)}=${tex_nombre(a + val1)}$`
					last_op = 'addition';
					break
				case 1: // différence de deux nombres
					if (val1 > b) {
						expf = `La différence de $${l1}$ et ${nombre_avec_espace(b)}`
						expl = `$${l1}-${tex_nombre(b)}$`
						expc = `$${l1}-${tex_nombre(b)}=${tex_nombre(val1)}-${tex_nombre(b)}=${tex_nombre(val1 - b)}$`
					}
					else {
						expf = `La différence de ${nombre_avec_espace(b)} et $${l1}$`
						expl = `$${tex_nombre(b)}-${l1}$`
						expc = `$${tex_nombre(b)}-${l1}=${tex_nombre(b)}-${tex_nombre(val1)}=${tex_nombre(b - val1)}$`
					}
					last_op = 'soustraction';
					break
				case 2: // produit de deux nombres
					expf = `Le produit de $${l1}$ par ${nombre_avec_espace(b)}`
					expl = `$${l1}\\times ${tex_nombre(b)} = ${tex_nombrec(b)}${l1}$`
					expc = `$${tex_nombrec(b)}${l1} = ${tex_nombrec(b)}\\times ${val1}=${tex_nombre(b * val1)}$`
					last_op = 'multiplication';
					break
				case 3: // quotient de deux nombres

					expf = `Le quotient de $${l1}$ par ${nombre_avec_espace(b)}`
					expl = `$${l1}\\div ${tex_nombre(b)}$`
					if (estentier(val1 / b * 1000)) expc = `$${l1}\\div ${tex_nombre(b)} = ${val1}\\div ${tex_nombre(b)} = ${tex_nombrec(val1 / b)}$`
					else expc = `$${l1}\\div ${tex_nombre(b)} = ${val1}\\div ${tex_nombre(b)}=${tex_fraction(val1, tex_nombre(b))}${simplification_de_fraction_avec_etapes(val1, tex_nombre(b))}$`
					last_op = 'division';
					break
			}
			break
		case 2: // expressions de niveau 1 (2 opérations)
			souscas = randint(0, 5)
			nbval = 1
			switch (souscas) {
				case 0: //a(b+c)
					expf = `Le produit de ${nombre_avec_espace(a)} par la somme de ${nombre_avec_espace(b)} et $${l1}$`
					expl = `$${tex_nombre(a)}${signex}(${tex_nombre(b)}+${l1})$`
					expc = `$${tex_nombre(a)}${signex}(${tex_nombre(b)}+${l1})=${tex_nombre(a)}${signex}(${tex_nombre(b)}+${val1})=${tex_nombre(a)}\\times ${tex_nombre(b + val1)} = ${tex_nombre(a * (b + val1))}$`
					last_op = 'multiplication';
					break
				case 1: // a(b-c)
					if (b <= c) b = calcul(b + c) // b-c positif
					expf = `Le produit de $${l1}$ par la différence de ${b} et ${nombre_avec_espace(c)}`
					expl = `$${l1}${signex}(${tex_nombre(b)}-${tex_nombre(c)})=${l1}\\times ${tex_nombrec(b - c)}=${tex_nombrec(b - c)}${l1}$`
					expc = `$${l1}${signex}(${tex_nombre(b)}-${tex_nombre(c)}) = ${tex_nombre(val1)}${signex}(${tex_nombre(b)}-${tex_nombre(c)})=${tex_nombre(val1)}\\times ${tex_nombrec(b - c)}=${tex_nombrec(val1 * (b - c))}$`
					last_op = 'multiplication';
					break
				case 2: // a/(b+c)
					a = calcul(a * (val1 + c)) // on s'assure que le quotient tombe juste...
					expf = `Le quotient de ${nombre_avec_espace(a)} par la somme de $${l1}$ et ${nombre_avec_espace(c)}`
					expl = `$${tex_nombre(a)}\\div (${l1}+${tex_nombre(c)})$ ou $\\dfrac{${tex_nombre(a)}}{${l1}+${tex_nombre(c)}}$`
					expc = `$${tex_nombre(a)}\\div (${l1}+${tex_nombre(c)})=${tex_nombre(a)}\\div (${tex_nombre(val1)}+${tex_nombre(c)}) = ${tex_nombre(a)}\\div ${tex_nombrec(val1 + c)}=${tex_nombrec(a / (val1 + c))}$`
					last_op = 'division';
					break
				case 3: // a/(b-c)
					if (b <= val1) b = calcul(b + val1) // b-c positif
					a = calcul(a * (b - val1)) // on s'assure que le quotient tombe juste
					expf = `Le quotient de ${nombre_avec_espace(a)} par la différence de ${nombre_avec_espace(b)} et $${l1}$`
					expl = `$${tex_nombre(a)}\\div (${b}-${l1})$ ou $\\dfrac{${tex_nombre(a)}}{${tex_nombre(b)}-${l1}}$`
					expc = `$${tex_nombre(a)}\\div (${b}-${l1})=${tex_nombre(a)}\\div (${b}-${val1})=${tex_nombre(a)}\\div ${tex_nombrec(b - val1)}=${tex_nombrec(a / (b - val1))}$`
					last_op = 'division';
					break
				case 4: // (a+b)/c
					a = calcul(a * val1)
					b = calcul(b * val1) // on s'assure que le quotient tombe juste
					expf = `Le quotient de la somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par $${l1}$`
					expl = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div  ${l1}$ ou $\\dfrac{${tex_nombre(a)}+${tex_nombre(b)}}{${l1}}$`
					expc = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div  ${l1}=(${tex_nombre(a)}+${tex_nombre(b)})\\div ${val1}= ${tex_nombrec(a + b)}\\div ${val1}=${tex_nombrec((a + b) / val1)}$`
					last_op = 'division';
					break
				case 5: // (a-b)/c
					a = calcul(a * c) + val1 // on s'assure que le quotient tombe juste et que a-b>0
					expf = `Le quotient de la différence de ${nombre_avec_espace(a)} et $${l1}$ par ${nombre_avec_espace(c)}`
					expl = `$(${tex_nombre(a)}-${l1})\\div ${tex_nombre(c)}$ ou $\\dfrac{${tex_nombre(a)}-${l1}}{${tex_nombre(c)}}$`
					expc = `$(${tex_nombre(a)}-${l1})\\div ${tex_nombre(c)}=(${tex_nombre(a)}-${val1})\\div ${tex_nombre(c)}= ${tex_nombrec(a - val1)}\\div ${tex_nombre(c)}=${tex_nombrec((a - val1) / c)}$`
					last_op = 'division';
					break

			}
			break
		case 3: // expressions de niveau 2 (3 opérations)
			souscas = randint(0, 13)
			nbval = 2
			switch (souscas) {
				case 0: // (a+b)(c+d)
					a = val1
					d = val2
					expf = `Le produit de la somme de $${l1}$ et ${nombre_avec_espace(b)} par la somme de ${nombre_avec_espace(c)} et $${l2}$`
					expl = `$(${l1}+${tex_nombre(b)})${signex}(${tex_nombre(c)}+${l2})$`
					expc = `$(${l1}+${tex_nombre(b)})${signex}(${tex_nombre(c)}+${l2})=(${a}+${tex_nombre(b)})${signex}(${tex_nombre(c)}+${d})= ${tex_nombrec(a + b)}\\times ${tex_nombrec(c + d)} = ${tex_nombrec((a + b) * (c + d))}$`
					last_op = 'multiplication';
					break
				case 1: // (a+b)(c-d)
					d = val2
					b = val1
					if (c <= d) c = calcul(c + d)
					expf = `Le produit de la somme de ${nombre_avec_espace(a)} et $${l1}$ par la différence de ${nombre_avec_espace(c)} et $${l2}$`
					expl = `$(${tex_nombre(a)}+${l1})${signex}(${tex_nombre(c)}-${l2})$`
					expc = `$(${tex_nombre(a)}+${l1})${signex}(${tex_nombre(c)}-${l2})=(${tex_nombre(a)}+${b})${signex}(${tex_nombre(c)}-${d})= ${tex_nombrec(a + b)}\\times ${tex_nombrec(c - d)} = ${tex_nombrec((a + b) * (c - d))}$`
					last_op = 'multiplication';
					break
				case 2: // (a-b)(c+d)
					b = val2
					c = val1
					if (a <= b) a = calcul(a + b)
					expf = `Le produit de la différence de ${nombre_avec_espace(a)} et $${l2}$ par la somme de $${l1}$ et ${nombre_avec_espace(d)}`
					expl = `$(${tex_nombre(a)}-${l2})${signex}(${l1}+${tex_nombre(d)})$`
					expc = `$(${tex_nombre(a)}-${l2})${signex}(${l1}+${tex_nombre(d)})=(${tex_nombre(a)}-${b})${signex}(${c}+${tex_nombre(d)})=${tex_nombrec(a - b)}\\times ${tex_nombrec(c + d)} = ${tex_nombrec((a - b) * (c + d))}$`
					last_op = 'multiplication';
					break
				case 3: // (a-b)(c-d)
					b = val1
					d = val2
					if (a <= b) a = calcul(a + b)
					if (c <= d) c = calcul(c + d)
					expf = `Le produit de la différence de ${nombre_avec_espace(a)} et $${l1}$ par la différence de ${nombre_avec_espace(c)} et $${l2}$`
					expl = `$(${tex_nombre(a)}-${l1})${signex}(${tex_nombre(c)}-${l2})$`
					expc = `$(${tex_nombre(a)}-${l1})${signex}(${tex_nombre(c)}-${l2})=(${tex_nombre(a)}-${b})${signex}(${tex_nombre(c)}-${d})= ${tex_nombrec(a - b)}\\times ${tex_nombrec(c - d)} = ${tex_nombrec((a - b) * (c - d))}$`
					last_op = 'multiplication';
					break
				case 4: // (a+b)/(c+d)
					d = val2
					b = val1
					if (!estentier((a + b) / (c + d))) a = calcul(a * (c + d) - b)
					expf = `Le quotient de la somme de ${nombre_avec_espace(a)} et $${l1}$ par la somme de ${nombre_avec_espace(c)} et $${l2}$`
					expl = `$(${tex_nombre(a)}+${l1})\\div (${tex_nombre(c)}+${l2})$ ou $\\dfrac{${tex_nombre(a)}+${l1}}{${tex_nombre(c)}+${l2}}$`
					expc = `$(${tex_nombre(a)}+${l1})\\div (${tex_nombre(c)}+${l2})=(${tex_nombre(a)}+${tex_nombre(b)})\\div (${tex_nombre(c)}+${tex_nombre(d)}) = ${tex_nombrec(a + b)}\\div ${tex_nombrec(c + d)} = ${tex_nombrec((a + b) / (c + d))}$`
					last_op = 'division';
					break
				case 5: // (a-b)/(c+d)
					d = val1
					b = val2
					if (a - b <= 0 || !estentier((a - b) / (c + d))) a = calcul(a * (c + d) + b)
					expf = `Le quotient de la différence de ${nombre_avec_espace(a)} et $${l2}$ par la somme de ${nombre_avec_espace(c)} et $${l1}$`
					expl = `$(${tex_nombre(a)}-${l2})\\div (${tex_nombre(c)}+${l1})$ ou $\\dfrac{${tex_nombre(a)}-${l2}}{${tex_nombre(c)}+${l1}}$`
					expc = `$(${tex_nombre(a)}-${l2})\\div (${tex_nombre(c)}+${l1})=(${tex_nombre(a)}-${tex_nombre(b)})\\div (${tex_nombre(c)}+${tex_nombre(d)}) = ${tex_nombrec(a - b)}\\div ${tex_nombrec(c + d)} = ${tex_nombrec((a - b) / (c + d))}$`
					last_op = 'division';
					break
				case 6: // (a+b)/(c-d)
					b = val1
					d = val2
					if (c <= d) c = calcul(c + d)
					if (!estentier((a + b) / (c - d)))
						if (a * (c - d) > b) a = calcul(a * (c - d) - b)
						else a = calcul((a + b) * (c - d) - b)
					expf = `Le quotient de la somme de ${nombre_avec_espace(a)} et $${l1}$ par la différence de ${nombre_avec_espace(c)} et $${l2}$`
					expl = `$(${tex_nombre(a)}+${l1})\\div (${tex_nombre(c)}-${l2})$ ou $\\dfrac{${tex_nombre(a)}+${l1}}{${tex_nombre(c)}-${l2}}$`
					expc = `$(${tex_nombre(a)}+${l1})\\div (${tex_nombre(c)}-${l2})=(${tex_nombre(a)}+${tex_nombre(b)})\\div (${tex_nombre(c)}-${tex_nombre(d)}) = ${tex_nombrec(a + b)}\\div ${tex_nombrec(c - d)} = ${tex_nombrec((a + b) / (c - d))}$`
					last_op = 'division';
					break
				case 7: // (a-b)/(c-d)
					d = val2;
					b = val1;
					if (c <= d) c = calcul(c + d)
					if (a <= b) a = calcul(a + b)
					if (!estentier((a - b) / (c - d))) a = calcul(a * (c - d) + b)
					expf = `Le quotient de la différence de ${nombre_avec_espace(a)} et $${l1}$ par la différence de ${nombre_avec_espace(c)} et $${l2}$`
					expl = `$(${tex_nombre(a)}-${l1})\\div (${tex_nombre(c)}-${l2})$ ou $\\dfrac{${tex_nombre(a)}-${l1}}{${tex_nombre(c)}-${l2}}$`
					expc = `$(${tex_nombre(a)}-${l1})\\div (${tex_nombre(c)}-${l2})=(${tex_nombre(a)}-${tex_nombre(b)})\\div (${tex_nombre(c)}-${tex_nombre(d)}) = ${tex_nombrec(a - b)}\\div ${tex_nombrec(c - d)} = ${tex_nombrec((a - b) / (c - d))}$`
					last_op = 'division';
					break
				case 8: // ab+cd
					b = val1;
					d = val2;
					expf = `La somme du produit de ${nombre_avec_espace(a)} par $${l1}$ et du produit de ${nombre_avec_espace(c)} par $${l2}$`
					expl = `$${tex_nombre(a)}${l1}+${tex_nombre(c)}${l2}$`
					expc = `$${tex_nombre(a)}${l1}+${tex_nombre(c)}${l2}=${tex_nombre(a)}\\times ${tex_nombre(b)}+${tex_nombre(c)}\\times ${tex_nombre(d)} = ${tex_nombrec(a * b)}+${tex_nombrec(c * d)} = ${tex_nombrec(a * b + c * d)}$`
					last_op = 'addition';
					break
				case 9: // ab-cd
					d = val2
					b = val1
					if (a * b < d * c) a = calcul(a + c)
					while (a * b < d * c) a = calcul(a + c)
					expf = `La différence du produit de ${nombre_avec_espace(a)} par $${l1}$ et du produit de ${nombre_avec_espace(c)} par $${l2}$`
					expl = `$${tex_nombre(a)}${l1}-${tex_nombre(c)}${l2}$`
					expc = `$${tex_nombre(a)}${l1}-${tex_nombre(c)}${l2}=${tex_nombre(a)}\\times ${tex_nombre(b)}-${tex_nombre(c)}\\times ${tex_nombre(d)} = ${tex_nombrec(a * b)}-${tex_nombrec(c * d)} = ${tex_nombrec(a * b - c * d)}$`
					last_op = 'soustraction';
					break
				case 10: // ab+c/d
					d = val1
					b = val2
					if (!estentier(c / d)) c = calcul(c * d)
					expf = `La somme du produit de ${nombre_avec_espace(a)} par $${l2}$ et du quotient de ${nombre_avec_espace(c)} par $${l1}$`
					expl = `$${tex_nombre(a)}${l2}+${tex_nombre(c)}\\div ${l1}$ ou $${tex_nombre(a)}${l2}+\\dfrac{${tex_nombre(c)}}{${l1}}$`
					expc = `$${tex_nombre(a)}${l2}+${tex_nombre(c)}\\div ${l1}=${tex_nombre(a)}\\times ${tex_nombre(b)}+${tex_nombre(c)}\\div ${tex_nombre(d)} = ${tex_nombrec(a * b)}+${tex_nombrec(c / d)} = ${tex_nombrec(a * b + c / d)}$`
					last_op = 'addition';
					break
				case 11: // ab-c/d
					d = val2
					b = val1
					if (!estentier(c / d)) c = calcul(c * d)
					while (a * b < c / d) a = calcul(a * c)
					expf = `La différence du produit de ${nombre_avec_espace(a)} par $${l1}$ et du quotient de ${nombre_avec_espace(c)} par $${l2}$`
					expl = `$${tex_nombre(a)}${l1}-${tex_nombre(c)}\\div ${l2}$ ou $${tex_nombre(a)}\\times ${l1}-\\dfrac{${tex_nombre(c)}}{${l2}}$`
					expc = `${tex_nombre(a)}${l1}-${tex_nombre(c)}\\div ${l2}=${tex_nombre(a)}\\times ${tex_nombre(b)}-${tex_nombre(c)}\\div ${tex_nombre(d)} = ${tex_nombrec(a * b)}-${tex_nombrec(c / d)} = ${tex_nombrec(a * b - c / d)}$`
					last_op = 'soustraction';
					break
				case 12: // a/b+c/d
					d = val1
					b = val2
					if (!estentier(a / b)) a = calcul(a * b)
					if (!estentier(c / d)) c = calcul(c * d)
					expf = `La somme du quotient de ${nombre_avec_espace(a)} par $${l2}$ et du quotient de ${nombre_avec_espace(c)} par $${l1}$`
					expl = `$${tex_nombre(a)}\\div ${l2}+${tex_nombre(c)}\\div ${l1}$ ou $\\dfrac{${tex_nombre(a)}}{${l2}}+\\dfrac{${tex_nombre(c)}}{${l1}}$`
					expc = `$${tex_nombre(a)}\\div ${l2}+${tex_nombre(c)}\\div ${l1}=${tex_nombre(a)}\\div ${tex_nombre(b)}+${tex_nombre(c)}\\div ${tex_nombre(d)} = ${tex_nombrec(a / b)}+${tex_nombrec(c / d)} = ${tex_nombrec(a / b + c / d)}$`
					break
				case 13: // a/b-c/d
					d = val2
					b = val1
					if (!estentier(a / b)) a = calcul(a * b)
					if (!estentier(c / d)) c = calcul(c * d)
					while (a / b < c / d) a = calcul(a * c)
					expf = `La différence du quotient de ${nombre_avec_espace(a)} par $${l1}$ et du quotient de ${nombre_avec_espace(c)} par $${l2}$`
					expl = `$${tex_nombre(a)}\\div ${l1}-${tex_nombre(c)}\\div ${l2}$ ou $\\dfrac{${tex_nombre(a)}}{${l1}}-\\dfrac{${tex_nombre(c)}}{${l2}}$`
					expc = `$${tex_nombre(a)}\\div ${l1}-${tex_nombre(c)}\\div ${l2}=${tex_nombre(a)}\\div ${tex_nombre(b)}-${tex_nombre(c)}\\div ${tex_nombre(d)} = ${tex_nombrec(a / b)}-${tex_nombrec(c / d)} = ${tex_nombrec(a / b - c / d)}$`
					last_op = 'soustraction';
					break
			}
			break;
		case 5: // expressions complexes
			souscas = randint(0, 5)
			nbval = 2
			switch (souscas) {
				case 0: // 2(a+bc)
					a = val1
					c = val2
					expf = `Le double de la somme de $${l1}$ et du produit de ${nombre_avec_espace(b)} par $${l2}$`
					expl = `$2${signex}(${l1}+${tex_nombre(b)}${l2})$`
					expc = `$2${signex}(${l1}+${tex_nombre(b)}${l2})=2${signex}(${tex_nombre(a)}+${tex_nombre(b)}\\times ${tex_nombre(c)}) = 2${signex}(${tex_nombre(a)}+${tex_nombrec(b * c)}) = 2\\times ${tex_nombrec(a + b * c)}=${tex_nombrec(2 * (a + b * c))}$`
					last_op = 'multiplication';
					break
				case 1: // 3(a+b)/c
					b = val1
					c = val2
					if (!estentier(3 * (a + b) / c)) a = calcul(a * c - b)
					while (a < b) a = calcul(a * c - b)
					expf = `Le triple du quotient de la somme de ${nombre_avec_espace(a)} et $${l1}$ par $${l2}$`
					expl = `$3${signex}(${tex_nombre(a)}+${l1})\\div ${l2}$ ou $3\\times \\dfrac{${tex_nombre(a)}+${l1}}{${l2}}$`
					expc = `$3${signex}(${tex_nombre(a)}+${l1})\\div ${l2}=3${signex}(${tex_nombre(a)}+${tex_nombre(b)})\\div ${tex_nombre(c)} = 3\\times  ${tex_nombre(a + b)}\\div ${tex_nombre(c)} = ${tex_nombrec(3 * (a + b))}\\div ${tex_nombre(c)} = ${tex_nombrec(3 * (a + b) / c)}$`
					last_op = 'division';
					break
				case 2: // (a-b)/3
					nbval = 1
					b = val1
					if (!estentier((a - b) / 3)) a = calcul(3 * a + b)
					expf = `Le tiers de la différence de ${nombre_avec_espace(a)} et $${l1}$`
					expl = `$(${tex_nombre(a)}-${l1})\\div  3$ ou $\\dfrac{${tex_nombre(a)}-${l1}}{3}$`
					expc = `$(${tex_nombre(a)}-${l1})\\div  3=(${tex_nombre(a)}-${tex_nombre(b)})\\div  3 = ${tex_nombrec(a - b)}\\div  3 = ${tex_nombrec((a - b) / 3)}$`
					last_op = 'division';
					break
				case 3: // (a-b)/3*2(c+d)
					c = val1
					b = val2
					if (a <= b) a = calcul(a + b)
					if (!estentier((a - b) / 3)) a = calcul(3 * a + b)
					expf = `Le produit du tiers de la différence de ${nombre_avec_espace(a)} et $${l2}$ par le double de la somme de $${l1}$ et ${nombre_avec_espace(d)}`
					expl = `$\\left((${tex_nombre(a)}-${l2})\\div  3\\right)\\times  2${signex}(${l1}+${tex_nombre(d)})$`
					expc = `$\\left((${tex_nombre(a)}-${l2})\\div  3\\right)\\times  2${signex}(${l1}+${tex_nombre(d)})=\\left((${tex_nombre(a)}-${tex_nombre(b)})\\div  3\\right)\\times  2${signex}(${tex_nombre(c)}+${tex_nombre(d)}) = ${tex_nombrec(a - b)}\\div  3 \\times  2 \\times ${tex_nombrec(c + d)} = ${tex_nombrec((a - b) / 3)} \\times  2 \\times  ${tex_nombrec(c + d)} =  ${tex_nombrec(2 * (a - b) / 3)} \\times  ${tex_nombrec(c + d)} = ${tex_nombrec(2 * (c + d) * (a - b) / 3)}$`
					last_op = 'multiplication';
					break
				case 4: // 3(a+b)-2(c+d)
					b = val1
					c = val2
					if (3 * (a + b) < 2 * (c + d)) a = calcul(a + c + d)
					expf = `La différence du triple de la somme de ${nombre_avec_espace(a)} et $${l1}$ et du double de la somme de $${l2}$ et ${nombre_avec_espace(d)}`
					expl = `$3${signex}(${tex_nombre(a)}+${l1})-2${signex}(${l2}+${tex_nombre(d)})$`
					expc = `$3${signex}(${tex_nombre(a)}+${l1})-2${signex}(${l2}+${tex_nombre(d)})=3${signex}(${tex_nombre(a)}+${tex_nombre(b)})-2${signex}(${tex_nombre(c)}+${tex_nombre(d)}) = 3 \\times  ${tex_nombrec(a + b)} - 2 \\times  ${tex_nombrec(c + d)} = ${tex_nombrec(3 * (a + b))} - ${tex_nombrec(2 * (c + d))} = ${tex_nombrec(3 * (a + b) - 2 * (c + d))}$`
					last_op = 'soustraction';
					break
				case 5: // 2(a-b)+3(c+d)
					d = val2
					b = val1
					if (a <= b) a = calcul(a + b)
					expf = `La somme du double de la différence de ${nombre_avec_espace(a)} et $${l1}$ et du triple de la somme de ${nombre_avec_espace(c)} et $${l2}$`
					expl = `$2${signex}(${tex_nombre(a)}-${l1})+3${signex}(${tex_nombre(c)}+${l2})$`
					expc = `$2${signex}(${tex_nombre(a)}-${l1})+3${signex}(${tex_nombre(c)}+${l2})=2${signex}(${tex_nombre(a)}-${tex_nombre(b)})+3${signex}(${tex_nombre(c)}+${tex_nombre(d)}) = 2 \\times  ${tex_nombrec(a - b)} + 3 \\times  ${tex_nombrec(c + d)} = ${tex_nombrec(2 * (a - b))} + ${tex_nombrec(3 * (c + d))} = ${tex_nombrec(2 * (a - b) + 3 * (c + d))}$`
					last_op = 'addition';
					break
			}
			break;
		case 4: // 4 opérations
			souscas = randint(1, 3)
			nbval = 2
			switch (souscas) {
				case 1: // (a+b)/(c(d+e))
					b = val1
					e = val2
					if (!estentier((a + b) / (c * (d + e)))) a = calcul(a * c * (d + e) - b)
					expf = `Le quotient de la somme de ${nombre_avec_espace(a)} et $${l1}$ par le produit de ${nombre_avec_espace(c)} par la somme de ${nombre_avec_espace(d)} et $${l2}$`
					expl = `$(${tex_nombre(a)}+${l1})\\div (${tex_nombre(c)}${signex}(${tex_nombre(d)}+${l2}))$ ou $\\dfrac{${tex_nombre(a)}+${l1}}{${tex_nombre(c)}${signex}(${tex_nombre(d)}+${l2})}$`
					expc = `$(${tex_nombre(a)}+${l1})\\div (${tex_nombre(c)}${signex}(${tex_nombre(d)}+${l2}))=(${tex_nombre(a)}+${tex_nombre(b)})\\div (${tex_nombre(c)}${signex}(${tex_nombre(d)}+${tex_nombre(e)})) = ${tex_nombrec(a + b)} \\div  (${tex_nombre(c)} \\times  ${tex_nombrec(d + e)}) = ${tex_nombrec(a + b)} \\div  ${tex_nombre(c * (d + e))} = ${tex_nombrec((a + b) / (c * (d + e)))}$`
					last_op = 'division';
					break
				case 2: //(a-b)*(c+de)
					e = val1
					b = val2
					if (a <= b) a = calcul(a + b)
					expf = `Le produit de la différence de ${nombre_avec_espace(a)} et $${l2}$ par la somme de ${nombre_avec_espace(c)} et du produit de ${nombre_avec_espace(d)} par $${l1}$`
					expl = `$(${tex_nombre(a)}-${l2})${signex}(${tex_nombre(c)}+${tex_nombre(d)}${l1})$`
					expc = `$(${tex_nombre(a)}-${l2})${signex}(${tex_nombre(c)}+${tex_nombre(d)}${l1})=(${tex_nombre(a)}-${tex_nombre(b)})${signex}(${tex_nombre(c)}+${tex_nombre(d)}\\times ${tex_nombre(e)}) = ${tex_nombrec(a - b)}(${tex_nombre(c)}+${tex_nombrec(d * e)}) = ${tex_nombrec(a - b)} \\times  ${tex_nombre(c + d * e)} = ${tex_nombrec((a - b) * (c + d * e))}$`
					last_op = 'multiplication';
					break
				case 3: // ab+cd/e
					d = val2
					b = val1
					if (!estentier(c * d / e)) c = calcul(c * e)
					expf = `La somme du produit de ${nombre_avec_espace(a)} par $${l1}$ et du quotient du produit de ${nombre_avec_espace(c)} et $${l2}$ par ${nombre_avec_espace(e)}`
					expl = `$${tex_nombre(a)}${l1}+${tex_nombre(c)}${l2}\\div ${tex_nombre(e)}$ ou $${tex_nombre(a)}${l1}+\\dfrac{${tex_nombre(c)}${l2}}{${tex_nombre(e)}}$`
					expc = `$${tex_nombre(a)}${l1}+${tex_nombre(c)}${l2}\\div ${tex_nombre(e)}=${tex_nombre(a)}\\times ${tex_nombre(b)}+${tex_nombre(c)}\\times ${tex_nombre(d)}\\div ${tex_nombre(e)} = ${tex_nombrec(a * b)} + ${tex_nombrec(c * d)} \\div  ${tex_nombre(e)} = ${tex_nombrec(a * b)} + ${tex_nombrec(c * d / e)} = ${tex_nombrec(a * b + c * d / e)}$`
					last_op = 'addition';
					break
			}
			break
	}
	let pos1 = 0
	for (; pos1 < expc.length; pos1++)
		if (expc[pos1] == '=') break
	let pos2 = pos1 + 1
	for (; pos2 < expc.length; pos2++)
		if (expc[pos2] == '=') break
	let expn = '$' + expc.substring(pos1 + 1, pos2 - 1) + '$'
	return [expf, expl, expc, nbval, last_op, expn]
}


/**
* Fonction noyau pour 7 fonctions qui utilisent les mêmes variables et la fonction Choisir_expression_numerique
* @Auteur Jean-Claude Lhote
* Référence 5C11,5C11-1, 5C11-2, 5C12, 5C12-1, 5L13, 5L13-1, 5L13-2, 5L13-3
*/
function Ecrire_une_expression_numerique() {
	'use strict'
	Exercice.call(this); // Héritage de la classe Exercice()
	this.consigne = "";
	this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup2 = false; // si false alors utilisation de nombres entiers, si true alors utilisation de nombres à un chiffre après la virgule.
	this.sup = false;
	this.sup3 = true;
	this.version = 1; // 1 pour ecrire une expression, 2 pour écrire la phrase, 3 pour écrire l'expression et la calculer, 4 pour calculer une expression numérique

	this.nouvelle_version = function (numero_de_l_exercice) {
		let type_de_questions_disponibles
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (!this.sup) { // Si aucune liste n'est saisie
			type_de_questions_disponibles = [1, 2, 3, 4, 5]
		}
		else {
			if (typeof (this.sup) == 'number') { // Si c'est un nombre c'est qu'il y a qu'une expression
				type_de_questions_disponibles[0] = this.sup
				this.nb_questions = 1
			} else {
				type_de_questions_disponibles = this.sup.split("-");// Sinon on créé un tableau à partir des valeurs séparées par des -
				this.nb_questions = type_de_questions_disponibles.length
			}
		}
		let expf, expn, expc, decimal = 1, nbval, nb_operations, resultats
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions)
		if (this.sup2) decimal = 10;
		for (let i = 0, texte, texte_corr, val1, val2, cpt = 0; i < this.nb_questions && cpt < 50;) {
			nb_operations = parseInt(liste_type_de_questions[i])
			val1 = randint(2, 5)
			val2 = randint(6, 9)
			if (this.version > 2 && nb_operations == 1 && !this.litteral) nb_operations++
			if (!this.litteral)
				resultats = Choisir_expression_numerique(nb_operations, decimal, this.sup3)
			else
				resultats = Choisir_expression_litterale(nb_operations, decimal, val1, val2, this.sup3)
			expf = resultats[0]
			expn = resultats[1]
			expc = resultats[2]
			nbval = resultats[3]
			switch (this.version) {
				case 1:
					this.consigne = `Traduire la phrase par un calcul (il n’est pas demandé d’effectuer ce calcul).`
					texte = `${expf}.`
					texte_corr = `${expf} s'écrit<br>${expn}.`
					break
				case 2:
					if (expn.indexOf('ou') > 0) expn = expn.substring(0, expn.indexOf('ou')) // on supprime la deuxième expression fractionnaire
					this.consigne = `Traduire le calcul par une phrase en français.`
					texte = `${expn}`
					expf = `l` + expf.substring(1);
					texte_corr = `${expn} est ${expf}.`
					break
				case 3:
					this.consigne = `Traduire la phrase par un calcul et effectuer ce calcul en respectant les priorités opératoires.`
					if (!this.litteral) texte = `${expf}.`
					else if (nbval == 2) texte = `${expf} puis calculer pour $x=${val1}$ et $y=${val2}$.` //nbval contient le nombre de valeurs en cas de calcul littéral
					else texte = `${expf} puis calculer pour $x=${val1}$.`
					texte_corr = `${expf} s'écrit ${expn}.<br>`
					if (!this.litteral) texte_corr = `${expc}.`
					else if (nbval == 2) texte_corr += `Pour $x=${val1}$ et $y=${val2}$ :<br> ${expc}.`
					else texte_corr += `Pour $x=${val1}$ :<br>${expc}.`
					break
				case 4:
					if (expn.indexOf('ou') > 0) expn = expn.substring(0, expn.indexOf('ou')) // on supprime la deuxième expression fractionnaire
					this.consigne = `Calculer en respectant les priorités opératoires.`
					if (!this.litteral) texte = `${expn}.`
					else if (nbval == 2) texte = `Pour $x=${val1}$ et $y=${val2}$, calculer ${expn}.`
					else texte = `Pour $x=${val1}$, calculer ${expn}.`
					if (!this.litteral) texte_corr = `${expc}.`
					else if (nbval == 2) texte_corr = `Pour $x=${val1}$ et $y=${val2}$ :<br>${expc}.`
					else texte_corr = `Pour $x=${val1}$ :<br>${expc}.`
					break

			}
			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des expressions', 'Nombres séparés par des tirets\n 1 : Expressions de base à une opération\n2 : Expressions à deux opérations\n3 : Expressions à 3 opérations\n4 : Expressions à 4 opérations\n5 : Expressions complexes'] // Texte, tooltip
	this.besoin_formulaire2_case_a_cocher = ["Avec décimaux.", false]
	this.besoin_formulaire3_case_a_cocher = ["Avec le signe × devant les parenthèses", true]

}

/**
 * Chosis aléatoirement une expressions numérique parmi de nombreuses variantes.
 * @param {number} nb_operations fixe la complexité de l'expression à retourner
 * @param {number} decimal 1 si on veut des entiers, 10, 100, 1000 selon le nombre de chiffres après la virgule qu'on veut
 * retourne
 * * l'expression en français commençant par une majuscule sans point final
 * * l'expression en mode maths LaTex
 * * Le détaillé du calcul en mode maths LaTex 
 * @Auteur Jean-Claude Lhote
 * Fonction utilisée dans plusieurs exercices.
 */
function Choisir_expression_numerique(nb_operations, decimal, times_on = true) {
	let expf, expn, expc, arrondir = Math.log10(decimal)
	let a = arrondi(randint(2 * decimal, 10 * decimal) / decimal, arrondir)
	let b = arrondi(randint(2 * decimal, 10 * decimal, [a * decimal]) / decimal, arrondir)
	let c = arrondi(randint(2 * decimal, 10 * decimal) / decimal, arrondir)
	let d = arrondi(randint(2 * decimal, 10 * decimal, [c * decimal]) / decimal, arrondir)
	let e = arrondi(randint(2 * decimal, 10 * decimal) / decimal, arrondir)
	let f = arrondi(randint(2 * decimal, 10 * decimal, [e * decimal]) / decimal, arrondir)
	let souscas
	let signex = ``
	if (times_on) signex = `\\times`
	switch (nb_operations) {
		case 1: // expressions de base (1 opération)
			souscas = randint(0, 3)
			switch (souscas) {
				case 0: //somme de deux nombres
					expf = `La somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)}`
					expn = `$${tex_nombre(a)}+${tex_nombre(b)}$`
					expc = `$${tex_nombre(a)}+${tex_nombre(b)} = ${tex_nombre(a + b)}$`
					break
				case 1: // différence de deux nombres
					if (a < b) a = a + b
					expf = `La différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)}`
					expn = `$${tex_nombre(a)}-${tex_nombre(b)}$`
					expc = `$${tex_nombre(a)}-${tex_nombre(b)} = ${tex_nombre(a - b)}$`
					break
				case 2: // produit de deux nombres
					expf = `Le produit de ${nombre_avec_espace(a)} par ${nombre_avec_espace(b)}`
					expn = `$${tex_nombre(a)}\\times ${tex_nombre(b)}$`
					expc = `$${tex_nombre(a)}\\times ${tex_nombre(b)} = ${tex_nombrec(a * b)}$`
					break
				case 3: // quotient de deux nombres
					a = calcul(Math.round(a) * b)
					expf = `Le quotient de ${nombre_avec_espace(a)} par ${nombre_avec_espace(b)}`
					expn = `$${tex_nombre(a)}\\div ${tex_nombre(b)}$`
					expc = `$${tex_nombre(a)}\\div ${tex_nombre(b)} = ${tex_nombrec(a)}$`
					break
			}
			break
		case 2: // expressions de niveau 1 (2 opérations)
			souscas = randint(0, 5)
			switch (souscas) {
				case 0: //a(b+c)
					expf = `Le produit de ${nombre_avec_espace(a)} par la somme de ${nombre_avec_espace(b)} et ${nombre_avec_espace(c)}`
					expn = `$${tex_nombre(a)}${signex}(${tex_nombre(b)}+${tex_nombre(c)})$`
					expc = `$${tex_nombre(a)}${signex}(${tex_nombre(b)}+${tex_nombre(c)}) = ${tex_nombre(a)}\\times ${tex_nombrec(b + c)}=${tex_nombrec(a * (b + c))}$`
					break
				case 1: // a(b-c)
					if (b <= c) b = calcul(b + c) // b-c positif
					expf = `Le produit de ${nombre_avec_espace(a)} par la différence de ${nombre_avec_espace(b)} et ${nombre_avec_espace(c)}`
					expn = `$${tex_nombre(a)}${signex}(${tex_nombre(b)}-${tex_nombre(c)})$`
					expc = `$${tex_nombre(a)}${signex}(${tex_nombre(b)}-${tex_nombre(c)}) = ${tex_nombre(a)}\\times ${tex_nombrec(b - c)}=${tex_nombrec(a * (b - c))}$`
					break
				case 2: // a/(b+c)
					a = calcul(a * (b + c)) // on s'assure que le quotient tombe juste...
					expf = `Le quotient de ${nombre_avec_espace(a)} par la somme de ${nombre_avec_espace(b)} et ${nombre_avec_espace(c)}`
					expn = `$${tex_nombre(a)}\\div (${tex_nombre(b)}+${tex_nombre(c)})$ ou $\\dfrac{${tex_nombre(a)}}{${tex_nombre(b)}+${tex_nombre(c)}}$`
					expc = `$${tex_nombre(a)}\\div (${tex_nombre(b)}+${tex_nombre(c)}) = ${tex_nombre(a)}\\div ${tex_nombrec(b + c)}=${tex_nombrec(a / (b + c))}$`
					break
				case 3: // a/(b-c)
					if (b <= c) b = calcul(b + c) // b-c positif
					a = calcul(a * (b - c)) // on s'assure que le quotient tombe juste
					expf = `Le quotient de ${nombre_avec_espace(a)} par la différence de ${nombre_avec_espace(b)} et ${nombre_avec_espace(c)}`
					expn = `$${tex_nombre(a)}\\div (${b}-${tex_nombre(c)})$ ou $\\dfrac{${tex_nombre(a)}}{${tex_nombre(b)}-${tex_nombre(c)}}$`
					expc = `$${tex_nombre(a)}\\div (${b}-${tex_nombre(c)}) = ${tex_nombre(a)}\\div ${tex_nombrec(b - c)}=${tex_nombrec(a / (b - c))}$`
					break
				case 4: // (a+b)/c
					a = calcul(a * c)
					b = calcul(b * c) // on s'assure que le quotient tombe juste
					expf = `Le quotient de la somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par ${nombre_avec_espace(c)}`
					expn = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div ${tex_nombre(c)}$ ou $\\dfrac{${tex_nombre(a)}+${tex_nombre(b)}}{${tex_nombre(c)}}$`
					expc = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div ${tex_nombre(c)} = ${tex_nombrec(a + b)}\\div ${tex_nombre(c)}=${tex_nombrec((a + b) / c)}$`
					break
				case 5: // (a-b)/c
					if (a <= b) a = calcul(a + b) // a-b positif
					a = calcul(a * c)
					b = calcul(b * c) // on s'assure que le quotient tombe juste
					expf = `Le quotient de la différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par ${nombre_avec_espace(c)}`
					expn = `$(${tex_nombre(a)}-${tex_nombre(b)})\\div ${tex_nombre(c)}$ ou $\\dfrac{${tex_nombre(a)}-${tex_nombre(b)}}{${tex_nombre(c)}}$`
					expc = `$(${tex_nombre(a)}-${tex_nombre(b)})\\div ${tex_nombre(c)} = ${tex_nombrec(a - b)}\\div ${tex_nombre(c)}=${tex_nombrec((a - b) / c)}$`
					break

			}
			break
		case 3: // expressions de niveau 2 (3 opérations)
			souscas = randint(0, 13)
			switch (souscas) {
				case 0: // (a+b)(c+d)
					expf = `Le produit de la somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par la somme de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$(${tex_nombre(a)}+${tex_nombre(b)})${signex}(${tex_nombre(c)}+${tex_nombre(d)})$`
					expc = `$(${tex_nombre(a)}+${tex_nombre(b)})${signex}(${tex_nombre(c)}+${tex_nombre(d)}) = ${tex_nombrec(a + b)}\\times ${tex_nombrec(c + d)} = ${tex_nombrec((a + b) * (c + d))}$`
					break
				case 1: // (a+b)(c-d)
					if (c <= d) c = calcul(c + d)
					expf = `Le produit de la somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par la différence de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$(${tex_nombre(a)}+${tex_nombre(b)})${signex}(${tex_nombre(c)}-${tex_nombre(d)})$`
					expc = `$(${tex_nombre(a)}+${tex_nombre(b)})${signex}(${tex_nombre(c)}-${tex_nombre(d)}) = ${tex_nombrec(a + b)}\\times ${tex_nombrec(c - d)} = ${tex_nombrec((a + b) * (c - d))}$`
					break
				case 2: // (a-b)(c+d)
					if (a <= b) a = calcul(a + b)
					expf = `Le produit de la différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par la somme de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$(${tex_nombre(a)}-${tex_nombre(b)})${signex}(${tex_nombre(c)}+${tex_nombre(d)})$`
					expc = `$(${tex_nombre(a)}-${tex_nombre(b)})${signex}(${tex_nombre(c)}+${tex_nombre(d)}) = ${tex_nombrec(a - b)}\\times ${tex_nombrec(c + d)} = ${tex_nombrec((a - b) * (c + d))}$`
					break
				case 3: // (a-b)(c-d)
					if (a <= b) a = calcul(a + b)
					if (c <= d) c = calcul(c + d)
					expf = `Le produit de la différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par la différence de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$(${tex_nombre(a)}-${tex_nombre(b)})${signex}(${tex_nombre(c)}-${tex_nombre(d)})$`
					expc = `$(${tex_nombre(a)}-${tex_nombre(b)})${signex}(${tex_nombre(c)}-${tex_nombre(d)}) = ${tex_nombrec(a - b)}\\times ${tex_nombrec(c - d)} = ${tex_nombrec((a - b) * (c - d))}$`
					break
				case 4: // (a+b)/(c+d)
					a = calcul(a * (c + d))
					b = calcul(b * (c + d))
					expf = `Le quotient de la somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par la somme de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div (${tex_nombre(c)}+${tex_nombre(d)})$ ou $\\dfrac{${tex_nombre(a)}+${tex_nombre(b)}}{${tex_nombre(c)}+${tex_nombre(d)}}$`
					expc = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div (${tex_nombre(c)}+${tex_nombre(d)}) = ${tex_nombrec(a + b)}\\div ${tex_nombrec(c + d)} = ${tex_nombrec((a + b) / (c + d))}$`
					break
				case 5: // (a-b)/(c+d)
					a = calcul(a * (c + d))
					b = calcul(b * (c + d))
					if (a <= b) a = calcul(a + b)
					expf = `Le quotient de la différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par la somme de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$(${tex_nombre(a)}-${tex_nombre(b)})\\div (${tex_nombre(c)}+${tex_nombre(d)})$ ou $\\dfrac{${tex_nombre(a)}-${tex_nombre(b)}}{${tex_nombre(c)}+${tex_nombre(d)}}$`
					expc = `$(${tex_nombre(a)}-${tex_nombre(b)})\\div (${tex_nombre(c)}+${tex_nombre(d)}) = ${tex_nombrec(a - b)}\\div ${tex_nombrec(c + d)} = ${tex_nombrec((a - b) / (c + d))}$`
					break
				case 6: // (a+b)/(c-d)
					if (c <= d) c = calcul(c + d)
					a = calcul(a * (c - d))
					b = calcul(b * (c - d))
					expf = `Le quotient de la somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par la différence de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div (${tex_nombre(c)}-${tex_nombre(d)})$ ou $\\dfrac{${tex_nombre(a)}+${tex_nombre(b)}}{${tex_nombre(c)}-${tex_nombre(d)}}$`
					expc = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div (${tex_nombre(c)}-${tex_nombre(d)}) = ${tex_nombrec(a + b)}\\div ${tex_nombrec(c - d)} = ${tex_nombrec((a + b) / (c - d))}$`
					break
				case 7: // (a-b)/(c-d)
					if (c <= d) c = calcul(c + d)
					if (a <= b) a = calcul(a + b)
					a = calcul(a * (c - d))
					b = calcul(b * (c - d))
					expf = `Le quotient de la différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par la différence de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$(${tex_nombre(a)}-${tex_nombre(b)})\\div (${tex_nombre(c)}-${tex_nombre(d)})$ ou $\\dfrac{${tex_nombre(a)}-${tex_nombre(b)}}{${tex_nombre(c)}-${tex_nombre(d)}}$`
					expc = `$(${tex_nombre(a)}-${tex_nombre(b)})\\div (${tex_nombre(c)}-${tex_nombre(d)}) = ${tex_nombrec(a - b)}\\div ${tex_nombrec(c - d)} = ${tex_nombrec((a - b) / (c - d))}$`
					break
				case 8: // ab+cd
					expf = `La somme du produit de ${nombre_avec_espace(a)} par ${nombre_avec_espace(b)} et du produit de ${nombre_avec_espace(c)} par ${nombre_avec_espace(d)}`
					expn = `$${tex_nombre(a)}\\times ${tex_nombre(b)}+${tex_nombre(c)}\\times ${tex_nombre(d)}$`
					expc = `$${tex_nombre(a)}\\times ${tex_nombre(b)}+${tex_nombre(c)}\\times ${tex_nombre(d)} = ${tex_nombrec(a * b)}+${tex_nombrec(c * d)} = ${tex_nombrec(a * b + c * d)}$`
					break
				case 9: // ab-cd
					if (a * b < d * c) a = calcul(a + c)
					if (a * b < d * c) b = calcul(b + d)
					expf = `La différence du produit de ${nombre_avec_espace(a)} par ${nombre_avec_espace(b)} et du produit de ${nombre_avec_espace(c)} par ${nombre_avec_espace(d)}`
					expn = `$${tex_nombre(a)}\\times ${tex_nombre(b)}-${tex_nombre(c)}\\times ${tex_nombre(d)}$`
					expc = `$${tex_nombre(a)}\\times ${tex_nombre(b)}-${tex_nombre(c)}\\times ${tex_nombre(d)} = ${tex_nombrec(a * b)}-${tex_nombrec(c * d)} = ${tex_nombrec(a * b - c * d)}$`
					break
				case 10: // ab+c/d
					c = calcul(c * d)
					expf = `La somme du produit de ${nombre_avec_espace(a)} par ${nombre_avec_espace(b)} et du quotient de ${nombre_avec_espace(c)} par ${nombre_avec_espace(d)}`
					expn = `$${tex_nombre(a)}\\times ${tex_nombre(b)}+${tex_nombre(c)}\\div ${tex_nombre(d)}$ ou $${tex_nombre(a)}\\times ${tex_nombre(b)}+\\dfrac{${tex_nombre(c)}}{${tex_nombre(d)}}$`
					expc = `$${tex_nombre(a)}\\times ${tex_nombre(b)}+${tex_nombre(c)}\\div ${tex_nombre(d)} = ${tex_nombrec(a * b)}+${tex_nombrec(c / d)} = ${tex_nombrec(a * b + c / d)}$`
					break
				case 11: // ab-c/d
					c = c * d
					if (a * b < c / d) a = calcul(a * c)
					if (a * b < c / d) b = calcul(b * c)
					expf = `La différence du produit de ${nombre_avec_espace(a)} par ${nombre_avec_espace(b)} et du quotient de ${nombre_avec_espace(c)} par ${nombre_avec_espace(d)}`
					expn = `$${tex_nombre(a)}\\times ${tex_nombre(b)}-${tex_nombre(c)}\\div ${tex_nombre(d)}$ ou $${tex_nombre(a)}\\times ${tex_nombre(b)}-\\dfrac{${tex_nombre(c)}}{${tex_nombre(d)}}$`
					expc = `$${tex_nombre(a)}\\times ${tex_nombre(b)}-${tex_nombre(c)}\\div ${tex_nombre(d)} = ${tex_nombrec(a * b)}-${tex_nombrec(c / d)} = ${tex_nombrec(a * b - c / d)}$`
					break
				case 12: // a/b+c/d
					a = calcul(a * b)
					c = calcul(c * d)
					expf = `La somme du quotient de ${nombre_avec_espace(a)} par ${nombre_avec_espace(b)} et du quotient de ${nombre_avec_espace(c)} par ${nombre_avec_espace(d)}`
					expn = `$${tex_nombre(a)}\\div ${tex_nombre(b)}+${tex_nombre(c)}\\div ${tex_nombre(d)}$ ou $\\dfrac{${tex_nombre(a)}}{${tex_nombre(b)}}+\\dfrac{${tex_nombre(c)}}{${tex_nombre(d)}}$`
					expc = `$${tex_nombre(a)}\\div ${tex_nombre(b)}+${tex_nombre(c)}\\div ${tex_nombre(d)} = ${tex_nombrec(a / b)}+${tex_nombrec(c / d)} = ${tex_nombrec(a / b + c / d)}$`
					break
				case 13: // a/b-c/d		
					a = calcul(a * b)
					c = calcul(c * d)
					if (a / b < c / d) a = calcul(a * c)
					if (a / c < c / d) a = calcul(a * d)
					expf = `La différence du quotient de ${nombre_avec_espace(a)} par ${nombre_avec_espace(b)} et du quotient de ${nombre_avec_espace(c)} par ${nombre_avec_espace(d)}`
					expn = `$${tex_nombre(a)}\\div ${tex_nombre(b)}-${tex_nombre(c)}\\div ${tex_nombre(d)}$ ou $\\dfrac{${tex_nombre(a)}}{${tex_nombre(b)}}-\\dfrac{${tex_nombre(c)}}{${tex_nombre(d)}}$`
					expc = `$${tex_nombre(a)}\\div ${tex_nombre(b)}-${tex_nombre(c)}\\div ${tex_nombre(d)} = ${tex_nombrec(a / b)}-${tex_nombrec(c / d)} = ${tex_nombrec(a / b - c / d)}$`
					break
			}
			break;
		case 5: // expressions complexes
			souscas = randint(0, 5)
			switch (souscas) {
				case 0: // 2(a+bc)
					expf = `Le double de la somme de ${nombre_avec_espace(a)} et du produit de ${nombre_avec_espace(b)} par ${nombre_avec_espace(c)}`
					expn = `$2${signex}(${tex_nombre(a)}+${tex_nombre(b)}\\times ${tex_nombre(c)})$`
					expc = `$2${signex}(${tex_nombre(a)}+${tex_nombre(b)}\\times ${tex_nombre(c)}) = 2${signex}(${tex_nombre(a)}+${tex_nombrec(b * c)}) = 2\\times  ${tex_nombrec(a + b * c)}$`
					break
				case 1: // 3(a+b)/c
					a = calcul(a * c)
					b = calcul(b * c)
					expf = `Le triple du quotient de la somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par ${nombre_avec_espace(c)}`
					expn = `$3${signex}(${tex_nombre(a)}+${tex_nombre(b)})\\div ${tex_nombre(c)}$ ou $3\\times \\dfrac{${tex_nombre(a)}+${tex_nombre(b)}}{${tex_nombre(c)}}$`
					expc = `$3${signex}(${tex_nombre(a)}+${tex_nombre(b)})\\div ${tex_nombre(c)} = 3\\times  ${tex_nombre(a + b)}\\div ${tex_nombre(c)} = ${tex_nombrec(3 * (a + b))}\\div ${tex_nombre(c)} = ${tex_nombrec(3 * (a + b) / c)}$`
					break
				case 2: // (a-b)/3
					if (a <= b) a = calcul(a + b)
					a = calcul(3 * a)
					b = calcul(3 * b)
					expf = `Le tiers de la différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)}`
					expn = `$(${tex_nombre(a)}-${tex_nombre(b)})\\div  3$ ou $\\dfrac{${tex_nombre(a)}-${tex_nombre(b)}}{3}$`
					expc = `$(${tex_nombre(a)}-${tex_nombre(b)})\\div  3 = ${tex_nombrec(a - b)}\\div  3 = ${tex_nombrec((a - b) / 3)}$`
					break
				case 3: // (a-b)/3*2(c+d)
					if (a <= b) a = calcul(a + b)
					a = calcul(3 * a)
					b = calcul(3 * b)
					expf = `Le produit du tiers de la différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par le double de la somme de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$\\left((${tex_nombre(a)}-${tex_nombre(b)})\\div  3\\right)\\times  2${signex}(${tex_nombre(c)}+${tex_nombre(d)})$`
					expc = `$\\left((${tex_nombre(a)}-${tex_nombre(b)})\\div  3\\right)\\times  2${signex}(${tex_nombre(c)}+${tex_nombre(d)}) = ${tex_nombrec(a - b)}\\div  3 \\times  2 \\times ${tex_nombrec(c + d)} = ${tex_nombrec((a - b) / 3)} \\times  2 \\times  ${tex_nombrec(c + d)} =  ${tex_nombrec(2 * (a - b) / 3)} \\times  ${tex_nombrec(c + d)} = ${tex_nombrec(2 * (c + d) * (a - b) / 3)}$`
					break
				case 4: // 3(a+b)-2(c+d)
					if (3 * (a + b) < 2 * (c + d)) a = calcul(a + c + d)
					expf = `La différence du triple de la somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} et du double de la somme de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$3${signex}(${tex_nombre(a)}+${tex_nombre(b)})-2${signex}(${tex_nombre(c)}+${tex_nombre(d)})$`
					expc = `$3${signex}(${tex_nombre(a)}+${tex_nombre(b)})-2${signex}(${tex_nombre(c)}+${tex_nombre(d)}) = 3 \\times  ${tex_nombrec(a + b)} - 2 \\times  ${tex_nombrec(c + d)} = ${tex_nombrec(3 * (a + b))} - ${tex_nombrec(2 * (c + d))} = ${tex_nombrec(3 * (a + b) - 2 * (c + d))}$`
					break
				case 5: // 2(a-b)+3(c+d)
					if (a <= b) a = calcul(a + b)
					expf = `La somme du double de la différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} et du triple de la somme de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)}`
					expn = `$2${signex}(${tex_nombre(a)}-${tex_nombre(b)})+3${signex}(${tex_nombre(c)}+${tex_nombre(d)})$`
					expc = `$2${signex}(${tex_nombre(a)}-${tex_nombre(b)})+3${signex}(${tex_nombre(c)}+${tex_nombre(d)}) = 2 \\times  ${tex_nombrec(a - b)} + 3 \\times  ${tex_nombrec(c + d)} = ${tex_nombrec(2 * (a - b))} + ${tex_nombrec(3 * (c + d))} = ${tex_nombrec(2 * (a - b) + 3 * (c + d))}$`
					break
			}
			break;
		case 4: // 4 opérations
			souscas = randint(1, 3)
			switch (souscas) {
				case 1: // (a+b)/(c(d+e))
					a = calcul(a * c * (d + e))
					b = calcul(b * c * (d + e))
					expf = `Le quotient de la somme de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par le produit de ${nombre_avec_espace(c)} par la somme de ${nombre_avec_espace(d)} et ${nombre_avec_espace(e)}`
					expn = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div (${tex_nombre(c)}${signex}(${tex_nombre(d)}+${tex_nombre(e)}))$ ou $\\dfrac{${tex_nombre(a)}+${tex_nombre(b)}}{${tex_nombre(c)}${signex}(${tex_nombre(d)}+${tex_nombre(e)})}$`
					expc = `$(${tex_nombre(a)}+${tex_nombre(b)})\\div (${tex_nombre(c)}${signex}(${tex_nombre(d)}+${tex_nombre(e)})) = ${tex_nombrec(a + b)} \\div  (${tex_nombre(c)} \\times  ${tex_nombrec(d + e)}) = ${tex_nombrec(a + b)} \\div  ${tex_nombre(c * (d + e))} = ${tex_nombrec((a + b) / (c * (d + e)))}$`
					break
				case 2: //(a-b)*(c+de)
					if (a <= b) a = calcul(a + b)
					expf = `Le produit de la différence de ${nombre_avec_espace(a)} et ${nombre_avec_espace(b)} par la somme de ${nombre_avec_espace(c)} et du produit de ${nombre_avec_espace(d)} par ${nombre_avec_espace(e)}`
					expn = `$(${tex_nombre(a)}-${tex_nombre(b)})${signex}(${tex_nombre(c)}+${tex_nombre(d)}\\times ${tex_nombre(e)})$`
					expc = `$(${tex_nombre(a)}-${tex_nombre(b)})${signex}(${tex_nombre(c)}+${tex_nombre(d)}\\times ${tex_nombre(e)}) = ${tex_nombrec(a - b)}${signex}(${tex_nombre(c)}+${tex_nombrec(d * e)}) = ${tex_nombrec(a - b)} \\times  ${tex_nombre(c + d * e)} = ${tex_nombrec((a - b) * (c + d * e))}$`
					break
				case 3: // ab+cd/e
					c = calcul(c * e)
					expf = `La somme du produit de ${nombre_avec_espace(a)} par ${nombre_avec_espace(b)} et du quotient du produit de ${nombre_avec_espace(c)} et ${nombre_avec_espace(d)} par ${nombre_avec_espace(e)}`
					expn = `$${tex_nombre(a)}\\times ${tex_nombre(b)}+${tex_nombre(c)}\\times ${tex_nombre(d)}\\div ${tex_nombre(e)}$ ou $${tex_nombre(a)}\\times ${tex_nombre(b)}+\\dfrac{${tex_nombre(c)}\\times ${tex_nombre(d)}}{${tex_nombre(e)}}$`
					expc = `$${tex_nombre(a)}\\times ${tex_nombre(b)}+${tex_nombre(c)}\\times ${tex_nombre(d)}\\div ${tex_nombre(e)} = ${tex_nombrec(a * b)} + ${tex_nombrec(c * d)} \\div  ${tex_nombre(e)} = ${tex_nombrec(a * b)} + ${tex_nombrec(c * d / e)} = ${tex_nombrec(a * b + c * d / e)}$`
					break
			}
			break
	}
	return [expf, expn, expc, souscas]
}

/**
 * Constructibilité des triangles
 * Préciser ici les numéros des exos 
 * 5G2 exercice parent il faudra supprimmer la version beta5G2 de la liste des choix du fichier mathalea_exercices.js
 * 5G21-1
 * 5G31-1 
 * Dans ces exercices je me servais de this.beta pour faire passer l'exo de beta.html à mathalea.html
 * this.beta pouvait prendre la valeur 'beta' ou '', tous les autres this.beta sont devenus des this.debug
 * @author Sébastien Lozano
 */

function Constructibilite_des_triangles() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()	
	this.sup = 1;
	if (this.exo == this.beta + '5G21-1') { // via longueurs
		this.titre = `Constructibilité des triangles via les longueurs`;
		this.consigne = `Justifier si les longueurs données permettent de construire le triangle.`;
		this.consigne += `<br>Dire si tous les élèves qui doivent construire ce triangle auront la même figure.`

	} else if (this.exo == this.beta + '5G31-1') {//via angles
		this.titre = `Constructibilité des triangles via les angles`;
		this.consigne = `Justifier si les angles donnés permettent de construire le triangle.`;
		this.consigne += `<br>Dire si tous les élèves qui doivent construire ce triangle auront la même figure.`
	} else {
		this.titre = "Constructibilité des triangles";
		this.consigne = `Justifier si les longueurs ou les angles donnés permettent de construire le triangle.`;
		this.consigne += `<br>Dire si tous les élèves qui doivent construire ce triangle auront la même figure.`

	};

	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.nb_questions_modifiable = false;

	this.liste_packages = `bclogo`;

	let type_de_questions_disponibles;

	this.nouvelle_version = function (numero_de_l_exercice) {

		if (this.exo == this.beta + '5G21-1') { // via longueurs
			if (this.sup == 1) {
				type_de_questions_disponibles = shuffle([1, 2, 3]);
				this.nb_questions = type_de_questions_disponibles.length;
			} else if (this.sup == 2) {
				type_de_questions_disponibles = [choice([1, 2, 3]), 4];
				this.nb_questions = type_de_questions_disponibles.length;
			};
		} else if (this.exo == this.beta + '5G31-1') {//via angles
			if (this.sup == 1) {
				type_de_questions_disponibles = shuffle([5, 6, 7]);
				this.nb_questions = type_de_questions_disponibles.length;
			} else if (this.sup == 2) {
				type_de_questions_disponibles = [choice([5, 6, 7]), 8];
				this.nb_questions = type_de_questions_disponibles.length;
			};
		} else {
			type_de_questions_disponibles = [1, 2, 3, 4, 5, 6, 7, 8];
			this.nb_questions = type_de_questions_disponibles.length;
		};

		//let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_type_de_questions = type_de_questions_disponibles // Tous les types de questions sont posées --> à remettre comme ci dessus

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		for (let i = 0, texte, texte_corr, l1, l2, l3, a1, a2, a3, cpt = 0; i < this.nb_questions && cpt < 50;) {

			// on fixe longueur min et max en cm
			let l_min = 2;
			let l_max = 20;
			// on fixe angle min et max en degré
			let a_min = 0;
			let a_max = 180;

			// on crée un objet triangle 
			let triangle = new Triangles();
			// on crée un tableau pour le triangle courant
			let current_triangle = [];

			switch (liste_type_de_questions[i]) {
				case 1: // 3 longueurs constructible
					while (!triangle.isTrueTriangleLongueurs()) {
						l1 = randint(l_min, l_max);
						l2 = randint(l_min, l_max);
						l3 = randint(l_min, l_max);
						triangle.l1 = l1;
						triangle.l2 = l2;
						triangle.l3 = l3;
					};
					texte = `${triangle.getNom()} tel que ${triangle.getLongueurs()[0]} $= ${triangle.l1}$ cm ; `;
					texte += `${triangle.getLongueurs()[1]} $= ${triangle.l2}$ cm et ${triangle.getLongueurs()[2]} $= ${triangle.l3}$ cm.`;
					// on crée l'objet longueurs + valeurs des côtés du triangle
					for (let i = 0; i < 3; i++) {
						current_triangle.push({ longueur: triangle.getLongueurs()[i], cote: triangle.getCotes()[i], valeur: triangle.getLongueursValeurs()[i] });
					};
					// on trie les couples longueurs/valeurs du triangle selon les valeurs croissantes.
					current_triangle.sort(function (a, b) {
						return a.valeur - b.valeur;
					});
					texte_corr = `Supposons que l'on puisse construire un triangle ${triangle.getNom()} avec ces mesures.`;
					texte_corr += `<br>Dans le triangle ${triangle.getNom()}, ${current_triangle[2].cote} qui mesure $${current_triangle[2].valeur}$ cm est le plus grand côté.`;
					texte_corr += `<br> De plus ${current_triangle[0].longueur} + ${current_triangle[1].longueur} = $${current_triangle[0].valeur}$ cm + $${current_triangle[1].valeur}$ cm = $${calcul(current_triangle[0].valeur + current_triangle[1].valeur)}$ cm.`;
					texte_corr += `<br> On constate que ${current_triangle[0].longueur} + ${current_triangle[1].longueur} > ${current_triangle[2].longueur}.`;
					texte_corr += `<br> ${texte_en_couleur('On peut donc construire le triangle ' + triangle.getNom())}.`;
					texte_corr += `<br><br>  Si on considère que le triangle nommé dans le sens des aiguilles d'une montre et celui nommé dans le sens inverse sont différents, ${texte_en_couleur('plusieurs tels triangles existent')}.`;
					texte_corr += `<br> Ils sont obtenus les uns à partir des autres par symétire axiale par rapport à un des côtés.`;
					break;
				case 2: // 3 longueurs plat
					while (!triangle.isPlatTriangleLongueurs()) {
						l1 = randint(l_min, l_max);
						l2 = randint(l_min, l_max);
						l3 = calcul(l1 + l2);
						triangle.l1 = l1;
						triangle.l2 = l2;
						triangle.l3 = l3;
					};
					texte = `${triangle.getNom()} tel que ${triangle.getLongueurs()[0]} $= ${triangle.l1}$ cm ; `;
					texte += `${triangle.getLongueurs()[1]} $= ${triangle.l2}$ cm et ${triangle.getLongueurs()[2]} $= ${triangle.l3}$ cm.`;
					// on crée l'objet longueurs + valeurs des côtés du triangle
					for (let i = 0; i < 3; i++) {
						current_triangle.push({ longueur: triangle.getLongueurs()[i], cote: triangle.getCotes()[i], valeur: triangle.getLongueursValeurs()[i] });
					};
					// on trie les couples longueurs/valeurs du triangle selon les valeurs croissantes.
					current_triangle.sort(function (a, b) {
						return a.valeur - b.valeur;
					});
					texte_corr = `Supposons que l'on puisse construire un triangle ${triangle.getNom()} avec ces mesures.`;
					texte_corr += `<br>Dans le triangle ${triangle.getNom()}, ${current_triangle[2].cote} qui mesure $${current_triangle[2].valeur}$ cm est le plus grand côté.`;
					texte_corr += `<br> De plus ${current_triangle[0].longueur} + ${current_triangle[1].longueur} = $${current_triangle[0].valeur}$ cm + $${current_triangle[1].valeur}$ cm = $${current_triangle[2].valeur}$ cm aussi.`;
					texte_corr += `<br> ${texte_en_couleur('On peut donc construire le triangle ' + triangle.getNom() + ' c\'est un triangle plat')}.`;
					texte_corr += `<br><br>${texte_en_couleur('Un seul triangle de ce type existe')}, il s'agit du segment ${current_triangle[2].cote} sur lequel on place le point `;
					if ((current_triangle[0].longueur.split('')[2] == current_triangle[2].cote.split('')[1]) || (current_triangle[0].longueur.split('')[2] == current_triangle[2].cote.split('')[2])) {
						texte_corr += `${current_triangle[0].longueur.split('')[1]}`;
					} else {
						texte_corr += `${current_triangle[0].longueur.split('')[2]}`;
					};
					texte_corr += `.`;
					//`${current_triangle[0].longueur.split('')[2]}.`;				
					break;
				case 3: // 3 longueurs non constructible
					// on initialise les longueurs sinon la méthode isTrueTriangleLongueurs() renvoie false!
					l1 = randint(l_min, l_max);
					l2 = randint(l_min, l_max);
					l3 = randint(l_min, l_max);
					triangle.l1 = l1;
					triangle.l2 = l2;
					triangle.l3 = l3;

					while (triangle.isTrueTriangleLongueurs()) {
						l1 = randint(l_min, l_max);
						l2 = randint(l_min, l_max);
						l3 = randint(l_min, l_max);
						triangle.l1 = l1;
						triangle.l2 = l2;
						triangle.l3 = l3;
					};
					texte = `${triangle.getNom()} tel que ${triangle.getLongueurs()[0]} $= ${triangle.l1}$ cm ; `;
					texte += `${triangle.getLongueurs()[1]} $= ${triangle.l2}$ cm et ${triangle.getLongueurs()[2]} $= ${triangle.l3}$ cm.`;
					// on crée l'objet longueurs + valeurs des côtés du triangle
					for (let i = 0; i < 3; i++) {
						current_triangle.push({ longueur: triangle.getLongueurs()[i], cote: triangle.getCotes()[i], valeur: triangle.getLongueursValeurs()[i] });
					};
					// on trie les couples longueurs/valeurs du triangle selon les valeurs croissantes.
					current_triangle.sort(function (a, b) {
						return a.valeur - b.valeur;
					});
					texte_corr = `Supposons que l'on puisse construire un triangle ${triangle.getNom()} avec ces mesures.`;
					texte_corr += `<br>Dans le triangle ${triangle.getNom()}, ${current_triangle[2].cote} qui mesure $${current_triangle[2].valeur}$ cm est le plus grand côté.`;
					texte_corr += `<br> De plus ${current_triangle[0].longueur} + ${current_triangle[1].longueur} = $${current_triangle[0].valeur}$ cm + $${current_triangle[1].valeur}$ cm = $${calcul(current_triangle[0].valeur + current_triangle[1].valeur)}$ cm.`;
					texte_corr += `<br> On constate que ${current_triangle[0].longueur} + ${current_triangle[1].longueur} < ${current_triangle[2].longueur}, les longueurs données ne permettent donc pas de satisfaire à l'inégalité triangulaire.`;
					texte_corr += `<br> ${texte_en_couleur('On ne peut donc pas construire le triangle ' + triangle.getNom())}.`;
					texte_corr += `<br><br>  ${texte_en_couleur('Aucun triangle de ce type n\'existe')}.`;
					break;
				case 4: // 2 longueurs et le périmètre
					// on utilise la méthode isTrueTriangleLongueurs(), le triangle ne sera pas plat.
					while (!triangle.isTrueTriangleLongueurs()) {
						l1 = randint(l_min, l_max);
						l2 = randint(l_min, l_max);
						l3 = randint(l_min, l_max);
						triangle.l1 = l1;
						triangle.l2 = l2;
						triangle.l3 = l3;
					};
					texte = `${triangle.getNom()} tel que ${triangle.getLongueurs()[0]} $= ${triangle.l1}$ cm ; `;
					texte += `${triangle.getLongueurs()[1]} $= ${triangle.l2}$ cm et dont le périmètre vaut $${triangle.getPerimetre()}$ cm.`;
					// on crée l'objet longueurs + valeurs des côtés du triangle
					for (let i = 0; i < 3; i++) {
						current_triangle.push({ longueur: triangle.getLongueurs()[i], cote: triangle.getCotes()[i], valeur: triangle.getLongueursValeurs()[i] });
					};
					// on trie les couples longueurs/valeurs du triangle selon les valeurs croissantes.
					current_triangle.sort(function (a, b) {
						return a.valeur - b.valeur;
					});
					texte_corr = `Supposons que l'on puisse construire un triangle ${triangle.getNom()} avec ces mesures.`;
					texte_corr += `<br>Puisque le périmètre vaut $${triangle.getPerimetre()}$ cm alors la troisième longueur vaut ${triangle.getLongueurs()[2]} = $${triangle.getPerimetre()}$ cm - $${triangle.l1}$ cm - $${triangle.l2}$ cm = $${triangle.l3}$ cm.`
					texte_corr += `<br> Donc dans le triangle ${triangle.getNom()}, ${current_triangle[2].cote} qui mesure $${current_triangle[2].valeur}$ cm est le plus grand côté.`;
					texte_corr += `<br> De plus ${current_triangle[0].longueur} + ${current_triangle[1].longueur} = $${current_triangle[0].valeur}$ cm + $${current_triangle[1].valeur}$ cm = $${calcul(current_triangle[0].valeur + current_triangle[1].valeur)}$ cm.`;
					texte_corr += `<br> On constate que ${current_triangle[0].longueur} + ${current_triangle[1].longueur} > ${current_triangle[2].longueur}`;
					texte_corr += `<br> ${texte_en_couleur('On peut donc construire le triangle ' + triangle.getNom())}.`;
					// texte_corr += `<br><br>  Si on considère que le triangle nommé dans le sens des aiguilles d'une montre et celui nommé dans le sens inverse sont différents, ${texte_en_couleur('deux tels triangles existent')}.`;
					// texte_corr += `<br> Les deux étant obtenus l'un à partir de l'autre par symétire axiale.`;
					texte_corr += `<br><br>  Si on considère que le triangle nommé dans le sens des aiguilles d'une montre et celui nommé dans le sens inverse sont différents, ${texte_en_couleur('plusieurs tels triangles existent')}.`;
					texte_corr += `<br> Ils sont obtenus les uns à partir des autres par symétire axiale par rapport à un des côtés.`;
					break;
				case 5: //3 angles constructible
					while (!triangle.isTrueTriangleAngles()) {
						a1 = randint(a_min, a_max, [0, 180]);
						a2 = randint(a_min, a_max, [0, 180]);
						a3 = calcul(180 - a1 - a2);
						triangle.a1 = a1;
						triangle.a2 = a2;
						triangle.a3 = a3;
					};
					texte = ``;
					texte_corr = ``;
					texte = `${triangle.getNom()} tel que ${triangle.getAngles()[0]} $= ${triangle.a1}\\degree$ ; `;
					texte += `${triangle.getAngles()[1]} $= ${triangle.a2}\\degree$ et ${triangle.getAngles()[2]} $= ${triangle.a3}\\degree$.`;
					// on crée l'objet longueurs + valeurs des côtés du triangle
					for (let i = 0; i < 3; i++) {
						current_triangle.push({ angle: triangle.getAngles()[i], valeur: triangle.getAnglesValeurs()[i] });
					};
					// on trie les couples longueurs/valeurs du triangle selon les valeurs croissantes.
					current_triangle.sort(function (a, b) {
						return a.valeur - b.valeur;
					});
					texte_corr = `Supposons que l'on puisse construire un triangle ${triangle.getNom()} avec ces mesures.`;
					texte_corr += `<br>Dans le triangle ${triangle.getNom()}, ${current_triangle[0].angle} + ${current_triangle[1].angle} + ${current_triangle[2].angle} = $${current_triangle[0].valeur}\\degree + ${current_triangle[1].valeur}\\degree + ${current_triangle[2].valeur}\\degree = ${calcul(current_triangle[0].valeur + current_triangle[1].valeur + current_triangle[2].valeur)}\\degree$.`;
					texte_corr += `<br> On constate que la somme des trois angles du triangle vaut bien $180\\degree$.`;
					texte_corr += `<br> ${texte_en_couleur('On peut donc construire le triangle ' + triangle.getNom())}.`;
					texte_corr += `<br><br>  ${texte_en_couleur('Il existe une infinité de triangles avec ces mesures.')}`;
					texte_corr += `<br> On les obtient les uns à partir des autres par un agrandissement ou une réduction.`;
					break;
				case 6: // 3 angles plat
					while (!triangle.isPlatTriangleAngles()) {
						a1 = randint(a_min, a_max);
						a2 = randint(a_min, a_max);
						a3 = calcul(180 - a1 - a2);
						triangle.a1 = a1;
						triangle.a2 = a2;
						triangle.a3 = a3;
					};
					texte = ``;
					texte_corr = ``;
					texte = `${triangle.getNom()} tel que ${triangle.getAngles()[0]} $= ${triangle.a1}\\degree$ ; `;
					texte += `${triangle.getAngles()[1]} $= ${triangle.a2}\\degree$ et ${triangle.getAngles()[2]} $= ${triangle.a3}\\degree$.`;
					// on crée l'objet longueurs + valeurs des côtés du triangle
					for (let i = 0; i < 3; i++) {
						current_triangle.push({ angle: triangle.getAngles()[i], valeur: triangle.getAnglesValeurs()[i] });
					};
					// on trie les couples longueurs/valeurs du triangle selon les valeurs croissantes.
					current_triangle.sort(function (a, b) {
						return a.valeur - b.valeur;
					});
					texte_corr = `Supposons que l'on puisse construire un triangle ${triangle.getNom()} avec ces mesures.`;
					texte_corr += `<br>Dans le triangle ${triangle.getNom()}, ${current_triangle[0].angle} + ${current_triangle[1].angle} + ${current_triangle[2].angle} = $${current_triangle[0].valeur}\\degree + ${current_triangle[1].valeur}\\degree + ${current_triangle[2].valeur}\\degree = ${calcul(current_triangle[0].valeur + current_triangle[1].valeur + current_triangle[2].valeur)}\\degree$.`;
					texte_corr += `<br> On constate que la somme des trois angles du triangle vaut bien $180\\degree$.`;
					texte_corr += `<br> ${texte_en_couleur('On peut donc construire le triangle ' + triangle.getNom())}.`;
					texte_corr += `<br> Deux des trois angles du triangle valent $0\\degree$, ${texte_en_couleur(triangle.getNom() + ' est donc un triangle plat')}.`
					texte_corr += `<br><br>  ${texte_en_couleur('Il existe une infinité de triangles avec ces mesures.')}`;
					texte_corr += `<br> On les obtient en traçant des segments et en plaçant le troisième sommet sur ce segment, les longueurs n'ayant aucune importance.`;
					texte_corr += `<br> Dans le cas présent, il s'agit d'un segment $[${current_triangle[2].angle.split('')[12]}${current_triangle[2].angle.split('')[14]}]$ sur lequel on place un point ${current_triangle[2].angle.split('')[13]}.`;
					//texte_corr += `<br> ${JSON.stringify(current_triangle)}`;
					break;
				case 7: // 3 angles non constructible
					// on initialise les angles sinon la méthode isTrueTriangleAngles() renvoie false!
					a1 = randint(a_min, a_max);
					a2 = randint(a_min, a_max);
					a3 = randint(a_min, a_max);
					triangle.a1 = a1;
					triangle.a2 = a2;
					triangle.a3 = a3;
					while (triangle.isTrueTriangleAngles()) {
						a1 = randint(a_min, a_max);
						a2 = randint(a_min, a_max);
						a3 = randint(a_min, a_max);
						triangle.a1 = a1;
						triangle.a2 = a2;
						triangle.a3 = a3;
					};
					texte = `${triangle.getNom()} tel que ${triangle.getAngles()[0]} $= ${triangle.a1}\\degree$ ; `;
					texte += `${triangle.getAngles()[1]} $= ${triangle.a2}\\degree$ et ${triangle.getAngles()[2]} $= ${triangle.a3}\\degree$.`;
					// on crée l'objet longueurs + valeurs des côtés du triangle
					for (let i = 0; i < 3; i++) {
						current_triangle.push({ angle: triangle.getAngles()[i], valeur: triangle.getAnglesValeurs()[i] });
					};
					// on trie les couples longueurs/valeurs du triangle selon les valeurs croissantes.
					current_triangle.sort(function (a, b) {
						return a.valeur - b.valeur;
					});
					texte_corr = `Supposons que l'on puisse construire un triangle ${triangle.getNom()} avec ces mesures.`;
					texte_corr += `<br>Dans le triangle ${triangle.getNom()}, ${current_triangle[0].angle} + ${current_triangle[1].angle} + ${current_triangle[2].angle} = $${current_triangle[0].valeur}\\degree + ${current_triangle[1].valeur}\\degree + ${current_triangle[2].valeur}\\degree = ${calcul(current_triangle[0].valeur + current_triangle[1].valeur + current_triangle[2].valeur)}\\degree$.`;
					texte_corr += `<br> Si le triangle était constructible, la somme des trois angles vaudrait $180\\degree$,`;
					texte_corr += ` or ce n'est pas le cas.`
					texte_corr += `<br> ${texte_en_couleur('On ne peut donc pas construire le triangle ' + triangle.getNom())}.`;
					texte_corr += `<br><br>  ${texte_en_couleur('Aucun triangle de ce type n\'existe')}.`;
					break;
				case 8: // 2 angles et le 3e fonction du 1er ou du 2eme
					let angle_rg = randint(0, 1);
					let operations_possibles = ['triple', 'quadruple', 'quart'];
					let operation = '';
					texte = ``;
					texte_corr = ``;
					texte_corr = `Supposons que l'on puisse construire un triangle ${triangle.getNom()} avec ces mesures.`;
					switch (angle_rg) {
						case 0:
							a1 = randint(a_min, a_max);
							triangle.a1 = a1;
							operation = operations_possibles[randint(0, 2)];
							texte += `${triangle.getNom()} tel que ${triangle.getAngles()[0]} $= ${tex_nombre(triangle.a1)}\\degree$ ; `;
							switch (operation) {
								case 'triple':
									a2 = calcul((180 - a1) / 4);
									a3 = calcul(3 * a2);
									break;
								case 'quadruple':
									a2 = calcul((180 - a1) / 5);
									a3 = calcul(4 * a2);
									break;
								case 'quart':
									a2 = calcul(4 * (180 - a1) / 5);
									a3 = calcul(a2 / 4);
									break;
							};
							triangle.a2 = a2;
							triangle.a3 = a3;
							texte += `${triangle.getAngles()[1]} $= ${tex_nombre(triangle.a2)}\\degree$ et ${triangle.getAngles()[2]} est le ${operation} de ${triangle.getAngles()[1]}.`;
							// on crée l'objet longueurs + valeurs des côtés du triangle
							for (let i = 0; i < 3; i++) {
								current_triangle.push({ angle: triangle.getAngles()[i], valeur: triangle.getAnglesValeurs()[i] });
							};
							texte_corr += `<br>Dans le triangle ${triangle.getNom()}, ${current_triangle[2].angle} est le ${operation} de ${current_triangle[1].angle} = $${tex_nombre(current_triangle[1].valeur)}\\degree$  d'où ${current_triangle[2].angle} = $${tex_nombre(current_triangle[2].valeur)}\\degree$.`;
							break;
						case 1:
							a2 = randint(a_min, a_max);
							triangle.a2 = a2;
							operation = operations_possibles[randint(0, 2)];
							texte += `${triangle.getNom()} tel que ${triangle.getAngles()[1]} $= ${tex_nombre(triangle.a2)}\\degree$ ; `;
							switch (operation) {
								case 'triple':
									a1 = calcul((180 - a2) / 4);
									a3 = calcul(3 * a1);
									break;
								case 'quadruple':
									a1 = calcul((180 - a2) / 5);
									a3 = calcul(4 * a1);
									break;
								case 'quart':
									a1 = calcul(4 * (180 - a2) / 5);
									a3 = calcul(a1 / 4);
									break;
							};
							triangle.a1 = a1;
							triangle.a3 = a3;
							texte += `${triangle.getAngles()[0]} $= ${tex_nombre(triangle.a1)}\\degree$ et ${triangle.getAngles()[2]} est le ${operation} de ${triangle.getAngles()[0]}.`;
							// on crée l'objet longueurs + valeurs des côtés du triangle
							for (let i = 0; i < 3; i++) {
								current_triangle.push({ angle: triangle.getAngles()[i], valeur: triangle.getAnglesValeurs()[i] });
							};
							texte_corr += `<br>Dans le triangle ${triangle.getNom()}, ${current_triangle[2].angle} est le ${operation} de ${current_triangle[0].angle} = $${tex_nombre(current_triangle[0].valeur)}\\degree$  d'où ${current_triangle[2].angle} = $${tex_nombre(current_triangle[2].valeur)}\\degree$.`;
							break;
					};
					texte_corr += `<br>Donc ${current_triangle[0].angle} + ${current_triangle[1].angle} + ${current_triangle[2].angle} = $${tex_nombre(current_triangle[0].valeur)}\\degree + ${tex_nombre(current_triangle[1].valeur)}\\degree + ${tex_nombre(current_triangle[2].valeur)}\\degree = ${tex_nombrec(current_triangle[0].valeur + current_triangle[1].valeur + current_triangle[2].valeur)}\\degree$.`;
					texte_corr += `<br> On constate que la somme des trois angles du triangle vaut bien $180\\degree$.`;
					texte_corr += `<br> ${texte_en_couleur('On peut donc construire le triangle ' + triangle.getNom())}.`;
					texte_corr += `<br><br>  ${texte_en_couleur('Il existe une infinité de triangles avec ces mesures.')}`;
					texte_corr += `<br> On les obtient les uns à partir des autres par un agrandissement ou une réduction.`;
					break;
			}
			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	if (this.exo == this.beta + '5G21-1') {
		this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, "1 : 3 longueurs\n2 : 2 longueurs et le périmètre"];
	} else if (this.exo == this.beta + '5G31-1') {
		this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, "1 : 3 angles\n2 : 2 angles et le 3e en fonction du 1er ou du 2eme"];
	} else {
		//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : sans conversions de longueurs\n2 : avec conversions de longueurs"];
	};
}

/**
 * Vocabulaire des triangles 
 * G21-1
 * @author Sébastien Lozano
 */
function Constructibilite_des_triangles_longueurs() {
	this.beta = ``;// ici this.beta peut prendre la valeur 'beta' ou '', tous les autres this.beta sont devenus des this.debug
	this.exo = this.beta + `5G21-1`;
	//this.titre = `Constructibilité des triangles via les longueurs`;
	Constructibilite_des_triangles.call(this);
};

/**
 * Vocabulaire des triangles 
 * 5G31-1
 * @author Sébastien Lozano
 */
function Constructibilite_des_triangles_angles() {
	this.beta = ``;// ici this.beta peut prendre la valeur 'beta' ou '', tous les autres this.beta sont devenus des this.debug
	this.exo = this.beta + `5G31-1`;
	//this.titre = `Constructibilité des triangles via les angles`;
	Constructibilite_des_triangles.call(this);
};

/**
 * 5G22
 * @Auteur Jean-Claude Lhote
 * Les droites remarquables du triangle : hauteurs médiatrices....médianes et bissectrices
 */
function DroiteRemarquableDuTriangle() {
	Exercice.call(this); // Héritage de la classe Exercice()

	this.titre = "Déterminer la nature d'une droite remarquable"
	this.consigne = 'Définir'
	this.spacing = 2;
	this.nb_questions = 1
	this.nb_cols = 1
	this.nb_cols_corr = 1
	this.sup = 1

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let triangles = [], sommets = [[]], A = [], B = [], C = [], t = [], d = [], n = [], c = [], objets = [], A0, B0, C0, tri, G
		let type_de_questions_disponibles, liste_type_de_questions
		if (this.sup == 1) type_de_questions_disponibles = [1, 2]
		if (this.sup == 2) type_de_questions_disponibles = [3, 4]
		if (this.sup == 3) type_de_questions_disponibles = [1, 2, 3, 4]
		liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions)
		for (let i = 0, a, angle, rapport, texte, texte_corr, cpt = 0; i < this.nb_questions; i++) {// this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			triangles[i] = new Triangles();
			sommets[i] = triangles[i].getSommets(false);

			A0 = point(3, randint(1, 2))
			B0 = point(6, randint(1, 2))
			angle = choice([50, 60, 70, 75, 80, 100, 110, 120])
			rapport = randint(7, 13) / 10
			C0 = similitude(B0, A0, angle, rapport)
			tri = polygone(A0, B0, C0)
			G = centreGraviteTriangle(A0, B0, C0)
			a = randint(0, 30) * 12 - 180
			A[i] = rotation(A0, G, a, sommets[i][0], 'below left')
			B[i] = rotation(B0, G, a, sommets[i][1], 'below right')
			C[i] = rotation(C0, G, a, sommets[i][2], 'above')
			t[i] = polygone(A[i], B[i], C[i])
			n[i] = nommePolygone(t[i], `${sommets[i][0]}${sommets[i][1]}${sommets[i][2]}`)
			switch (liste_type_de_questions[i]) {
				case 1:
					d[i] = hauteurTriangle(C[i], B[i], A[i], 'blue')
					d[i].epaisseur = 1
					c[i] = codageHauteurTriangle(C[i], B[i], A[i])
					objets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]
					texte_corr = `La droite tracée est la hauteur issue de $${sommets[i][0]}$ dans le triangle ${triangles[i].getNom()}.<br>`
					texte_corr += mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i])
					break
				case 2:
					d[i] = mediatrice(A[i], B[i], true, 'blue')
					d[i].epaisseur = 1
					c[i] = codageMediatrice(A[i], B[i])
					objets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]
					texte_corr = `La droite tracée est la médiatrice du segment [$${sommets[i][0]}${sommets[i][1]}]$.<br>`
					texte_corr += mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i], constructionMediatrice(A[i], B[i], true, color = 'gray', markmilieu = '×', markrayons = '||', couleurMediatrice = 'blue', epaisseurMediatrice = 1))
					break
				case 3:
					d[i] = medianeTriangle(C[i], B[i], A[i], 'blue')
					d[i].epaisseur = 1
					c[i] = codageMedianeTriangle(C[i], B[i], A[i], color = 'black', mark = '//')
					objets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]
					texte_corr = `La droite tracée est la médiane issue de $${sommets[i][0]}$ dans le triangle ${triangles[i].getNom()}.<br>`
					texte_corr += mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i])
					break
				case 4:
					d[i] = bissectrice(A[i], B[i], C[i], 'blue')
					d[i].epaisseur = 1
					c[i] = codageBissectrice(A[i], B[i], C[i])
					objets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]
					texte_corr = `La droite tracée est la bissectrice de l'angle $\\widehat{${sommets[i][0]}${sommets[i][1]}${sommets[i][2]}}$.<br>`
					texte_corr += mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i], constructionBissectrice(A[i], B[i], C[i], detail = false, color = 'red', mark = '×', tailleLosange = 3, couleurBissectrice = 'blue', epaiseurBissectrice = 1))
					break

			}

			texte = `Quelle est la nature de la droite tracée en bleu pour le triangle ${triangles[i].getNom()} ?<br>` + mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i])

			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
			}
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Type de droites', 3, "1 : Hauteurs et Médiatrices\n2 : Médianes et Bissectrices\n3 : Toutes les droites"]
}
/**
 * Publié le 14/12/2020
 * Trouver l'image par symétrie centrale d'une figure dans un pavage
 * Version Latex & Html grâce à Mathalea2d
 * @Auteur Jean-Claude Lhote
 * Ref 5G12
 */
function Pavage_et_demi_tour2d() {
	"use strict";
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre =
	  "Trouver l\'image d'une figure par une symétrie centrale dans un pavage";
	this.consigne = "";
	this.nb_questions = 3;
	this.nb_questions_modifiable = true;
	this.correction_detaillee_disponible=true
	this.correction_detaillee=true
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1; // 1 pour des pavages modestes, 2 pour des plus grand.
	this.sup2=false // On cache les barycentres par défaut.
	this.sup3=7;
	sortie_html ? (this.spacing_corr = 2.5) : (this.spacing_corr = 1.5);
	this.nouvelle_version = function (numero_de_l_exercice) {
	  let videcouples=function(tableau){
		for (let k=0;k<tableau.length;k++){
		  for (let j=k+1;j<tableau.length;j++){
			if (tableau[k][1]==tableau[j][0]) {
			  tableau.splice(j,1)
			}
		  }
		}
		return tableau
	  }
	  let compare2polys=function(poly1,poly2){
		if (comparenbsommets(poly1,poly2)) {
		  if (comparesommets(poly1,poly2)) 
			return true
		  else
			return false
		}
		else 
		  return false 
		}
		let comparenbsommets = function(poly1,poly2){
		  if (poly1.listePoints.length==poly2.listePoints.length){
			return true
		  }
		  else return false
		}
		
		let compare2sommets=function(sommet1,sommet2){
		  if (egal(sommet1.x,sommet2.x,0.1)&&egal(sommet1.y,sommet2.y,0.1)) {
			return true
		  }
		  else return false
		}
		let comparesommets = function(poly1,poly2){
		  let trouve=false,trouves=0
		  if (comparenbsommets(poly1,poly2))
		  for (let P of poly1.listePoints) {
			for (let M of poly2.listePoints) {
			  if (compare2sommets(M,P)) {
				trouve=true
			  }
			  if (trouve) break
			}
			if (trouve) {
			  trouves++
			  trouve=false
			}
			else {
			  trouves-=100
			}
			if (trouves<0)
			break
		  }
		  if (trouves==poly1.listePoints.length)
			return true
		  else return false
		}
	  
	  let demitour = function (pavage, A, numero) { // retourne le numero du polygone symétrique ou -1 si il n'existe pas
		let poly=pavage.polygones[numero-1]
		let pol
		let result=-1
		let sympoly=rotation(poly,A,180)
		for (let k= 0;k<pavage.polygones.length;k++) {
		  pol=pavage.polygones[k]
		  if (compare2polys(sympoly,pol)) {
			return k+1
		  }
		}
		return result
	  } 
  
	  let objets=[],objets_correction=[],P1,P2,P3,G1,G2,t
	  let codes=['/','//','///','o','w','X','U','*']
	  let taillePavage=parseInt(this.sup)
	  if (taillePavage<1||taillePavage>2) {
		taillePavage=1
	  }
	  if (this.nb_questions>5) {
		taillePavage=2
	  }
	  this.liste_corrections = []
	  this.liste_questions = []
	  let Nx,Ny,index1,index2,A,B,d,image,couples=[],tailles=[],monpavage,fenetre
	  let texte = "", texte_corr = "", type_de_pavage = parseInt(this.sup)
	  let nombreTentatives,nombrePavageTestes=1
	  if (this.sup3==8) {
		type_de_pavage =  randint(1,7)
	  }
	  else {
		type_de_pavage=parseInt(this.sup3)
	  }
	  while (couples.length<this.nb_questions&&nombrePavageTestes<6){
		nombreTentatives=0
	  monpavage = pavage() // On crée l'objet Pavage qui va s'appeler monpavage
	  tailles = [[[3, 2], [3, 2], [2, 2], [2, 2], [2, 2], [2, 2],[3,2]], [[4, 3], [4, 3], [3, 3], [3, 3], [3, 3], [3, 2],[5,3]]]
	  Nx = tailles[taillePavage-1][type_de_pavage-1][0]
	  Ny = tailles[taillePavage-1][type_de_pavage-1][1]
	  monpavage.construit(type_de_pavage, Nx, Ny, 3) // On initialise toutes les propriétés de l'objet.
	  fenetre=monpavage.fenetre
	  fenetreMathalea2d=[fenetre.xmin,fenetre.ymin,fenetre.xmax,fenetre.ymax]
	  while (couples.length<this.nb_questions+2&&nombreTentatives<3) { // On cherche d pour avoir suffisamment de couples
	  couples=[] // On vide la liste des couples pour une nouvelle recherche
	  
	  index1=randint(Math.floor(monpavage.nb_polygones/3),Math.ceil(monpavage.nb_polygones*2/3)) // On choisit 1 point dans un des polygones
	  if (choice([true,false])) { 
		  A=monpavage.polygones[index1].listePoints[randint(0,monpavage.polygones[index1].listePoints.length-1)] // On choisit un sommet
	  }
	  else {
		A=monpavage.barycentres[index1] // Ou on choisit un barycentre
	  }
	  while (A.x-5<fenetre.xmin||A.x+5>fenetre.xmax||A.y-5<fenetre.ymin||A.y+5>fenetre.ymax){
		index1=randint(Math.floor(monpavage.nb_polygones/3),Math.ceil(monpavage.nb_polygones*2/3)) // On choisit 1 point dans un des polygones
		if (choice([true,false])) { 
			A=monpavage.polygones[index1].listePoints[randint(0,monpavage.polygones[index1].listePoints.length-1)] // On choisit un sommet
		}
		else {
		  A=monpavage.barycentres[index1] // Ou on choisit un barycentre
		}
	  }
			  A.nom='A'
			  A.positionLabel='above left'
		  d=tracePoint(A) // la trace du centre de symétrie sera rouge et grosse
		  B=labelPoint(A)
	  d.epaisseur=3
	  d.taille=4
	  d.color='red'
	  for (let i=1;i<= monpavage.nb_polygones; i++){ //on crée une liste des couples (antécédents, images)
		image=demitour(monpavage,A,i)
		if (image!=-1){ // si l'image du polygone i existe, on ajoute le couple à la liste
		  couples.push([i,image])
		}
	  }
	  couples=videcouples(couples) //supprime tous les couples en double (x,y)=(y,x)
	  nombreTentatives++ 
	  }
	  if (couples.length<this.nb_questions){
		if (this.sup3==7) {
			type_de_pavage=(type_de_pavage+1)%5+1
		  }
	  nombrePavageTestes++
	  }
	}
	if (couples.length<this.nb_questions){
	  console.log('trop de questions, augmentez la taille du pavage')
	  return
	}
  
	  objets.push(d) // le centre est OK on pousse sa trace
	  objets.push(B) // et son label
	  couples=shuffle(couples) // on mélange les couples
	  for (let i = 0; i < monpavage.nb_polygones; i++) {
		objets.push(texteParPosition(nombre_avec_espace(i + 1), monpavage.barycentres[i].x + 0.5, monpavage.barycentres[i].y, 'milieu', 'gray', 1, 0, true))
	  }
	  if (this.sup2) { // Doit-on montrer les centres des figures ?
		for (let i = 0; i < monpavage.nb_polygones; i++) {
		  objets.push(monpavage.tracesCentres[i])
		}
	  }
	  for (let i = 0; i < monpavage.nb_polygones; i++) { // il faut afficher tous les polygones du pavage
		objets.push(monpavage.polygones[i])
	  }
	  texte = mathalea2d(fenetre, objets) // monpavage.fenetre est calibrée pour faire entrer le pavage dans une feuille A4
	  texte+=`<br>`
	  for (let i=0;i<this.nb_questions;i++){
		texte+=`Quel est l'image de la figure $${couples[i][0]}$ dans la symétrie de centre $A$ ?<br>`
		texte_corr+=`L'image de la figure $${couples[i][0]}$ dans la symétrie de centre $A$ est la figure ${couples[i][1]}<br>`
		if (this.correction_detaillee){
			t=this.nb_questions*3;
			G1=monpavage.barycentres[couples[i][0]-1]
			G2=monpavage.barycentres[couples[i][1]-1]
			P1=monpavage.polygones[couples[i][0]-1]
			P1.color=texcolors(i)
			P1.couleurDeRemplissage=texcolors(i)
			P1.opaciteDeRemplissage=0.5
			P1.epaisseur=2
			P2=monpavage.polygones[couples[i][1]-1]
			P2.color=texcolors(i)
			P2.couleurDeRemplissage=texcolors(i)
			P2.opaciteDeRemplissage=0.5
			P2.epaisseur=2
			P3=rotationAnimee(P1,A,180,`begin="${i*3}s;${i*3+t}s;${i*3+t*2}s" end="${i*3+2}s;${i*3+t+2}s;${i*3+t*2+2}s" dur="2s" repeatCount="indefinite" repeatDur="${9*this.nb_questions}s" id="poly-${i}-anim"`)
			P3.color=texcolors(i)
			P3.epaisseur=2
			objets_correction.push(tracePoint(G1,G2),segment(G1,G2,texcolors(i)),codageMilieu(G1,G2,texcolors(i),codes[i],false),P1,P2,P3)
		  }
	}
    if (this.correction_detaillee){
      texte_corr+=mathalea2d(fenetre, objets,objets_correction)
    }
	  this.liste_questions.push(texte);
	  this.liste_corrections.push(texte_corr);
	  liste_de_question_to_contenu(this)
	}
	this.besoin_formulaire_numerique = ['Taille du pavage (la grande est automatique au-delà de 5 questions)', 2, '1 : Taille modeste\n 2 : Grande taille'];
	this.besoin_formulaire2_case_a_cocher=["Montrer les centres"]
	this.besoin_formulaire3_numerique=['Choix du pavage',8,'1 : Pavage de triangles équilatéraux\n2 : Pavage de carrés\n3 : Pavage d\'hexagones réguliers\n4 : Pavage 3².4.3.4\n5 : Pavage 8².4\n 6 : Pavage de losanges (hexagonal d\'écolier)\n7 : Pavage 6.3.6.3\n8 : Un des sept pavages au hasard']
}

/**
 * Référence 6G24-1
 * @Auteur Jean-Claude Lhote
 */
function Symetrie_axiale_point_6e() {
	Construire_par_Symetrie.call(this)
	this.titre = 'Construire le symétrique d\'un point par rapport à une droite (cas simples)'
	this.figure = false
	this.sup = 0
}
/**
 * Référence 6G24-2
 * @Auteur Jean-Claude Lhote
 */
function Symetrie_axiale_figure_6e() {
	Construire_par_Symetrie.call(this)
	this.titre = 'Construire le symétrique d\'une figure par rapport à une droite (cas simples)'
	this.figure = true
	this.sup = 0
}
/**
 * Référence 6G10-1
 * @Auteur Jean-Claude Lhote
 */
function Symetrie_axiale_point_5e() {
	Construire_par_Symetrie.call(this)
	this.titre = 'Construire le symétrique d\'un point par rapport à une droite'
	this.figure = false
	this.sup = 1
}
/**
 * Référence 6G10-2
 * @Auteur Jean-Claude Lhote
 */
function Symetrie_axiale_figure_5e() {
	Construire_par_Symetrie.call(this)
	this.titre = 'Construire le symétrique d\'une figure par rapport à une droite'
	this.figure = true
	this.sup = 1
}
/**
 * Référence 6G11-1
 * @Auteur Jean-Claude Lhote
 */
function Symetrie_centrale_point() {
	Construire_par_Symetrie.call(this)
	this.titre = 'Construire le symétrique d\'un point par rapport à un point'
	this.figure = false
	this.sup = 2
}
/**
 * Référence 6G11-2
 * @Auteur Jean-Claude Lhote
 */
function Symetrie_centrale_figure() {
	Construire_par_Symetrie.call(this)
	this.titre = 'Construire le symétrique d\'une figure par rapport à un point'
	this.figure = true
	this.sup = 2
}
/**
 * @Auteur Jean-Claude Lhote
 * Fonction générale pour les exercices de construction de symétriques (centrale/axiale et points/triangles)
 * références  6G24-1, 6G24-2, 5G10-1, 5G10-2, 5G11-1 et 5G11-2
 * Permet une sortie html/pdf sur petits carreaux/gros carreaux/papier blanc
 */

function Construire_par_Symetrie() {
	"use strict";
	Exercice.call(this);
	this.titre = "Construire par Symétrie...";
	this.nb_questions = 1;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;
	this.sup2 = 1;
	this.figure = false
	this.nouvelle_version = function (numero_de_l_exercice) {
		let type_de_questions_disponibles;
		if (this.sup == 3) 	  //Symétrie axiale ou centrale
			if (this.figure == false) type_de_questions_disponibles = [0, 1, 2]; // points
			else type_de_questions_disponibles = [3, 4, 5] // triangle

		else
			if (this.figure == false) type_de_questions_disponibles = [parseInt(this.sup)]; // Le choix 1 ou 2 : points
			else type_de_questions_disponibles = [parseInt(this.sup) + 3] //figures

		let liste_type_de_questions = combinaison_listes(
			type_de_questions_disponibles,
			this.nb_questions
		);
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let Xmin, Xmax, Ymin, Ymax, sc;
		if (this.sup2 == 2) sc = 0.8;
		else sc = 0.5;

		let A, AA, cA, sA,
			B,
			C, CC, cC, sC, sCE,
			D, DD, cD, sD, sDE,
			E, EE, cE, sE, sED,
			sEC, inter,
			d, dB,
			enonce,
			correction,
			g,
			carreaux,
			k,
			objets_enonce = [],
			objets_correction = [],
			p1, p2, p1nom;
		for (
			let i = 0, cpt = 0;
			i < this.nb_questions && cpt < 50;

		) {
			objets_enonce.length = 0
			objets_correction.length = 0
			switch (liste_type_de_questions[i]) {
				case 0: // 3 symétries axiales simples de points (6ème)
					p1nom = creerNomDePolygone(5, "PQ")
					A = point(0, 0, `${p1nom[0]}`, 'above');
					k = choice([-1, 0, 1, 2])

					if (k < 2) d = droiteParPointEtPente(A, k);
					else d = droiteVerticaleParPoint(A)
					B = pointSurDroite(d, 6, `${p1nom[1]}`, 'above');
					d.isVisible = true;
					d.epaisseur = 1
					if (k == 2) {
						A.positionLabel = 'left'
						B.positionLabel = 'left'
					}
					C = point(randint(2, 3), randint(3, 4), `${p1nom[2]}`, 'above left');
					D = point(randint(3, 5), randint(-4, -3), `${p1nom[3]}`, 'below right');
					//			dB = droiteParPointEtPerpendiculaire(B, d);
					E = point(randint(6, 7), randint(5, 6), `${p1nom[4]}`, "left");
					//F = point(E.x+1,5-B.y,'F','above left');
					CC = symetrieAxiale(C, d, `${p1nom[2]}\'`, 'below left')
					DD = symetrieAxiale(D, d, `${p1nom[3]}\'`, 'above right')
					EE = symetrieAxiale(E, d, `${p1nom[4]}\'`, 'left')
					//FF=symetrieAxiale(F,d,'F\'','below left')
					cC = codageMediatrice(C, CC, 'red', '|')
					cD = codageMediatrice(D, DD, 'blue', 'X')
					cE = codageMediatrice(E, EE, 'green', 'O')
					//cF=codageMediatrice(F,FF,'purple','V')
					sC = segment(C, CC)
					sD = segment(D, DD)
					sE = segment(E, EE)
					//sF=segment(F,FF)
					sCE = droite(CC, EE, '', 'gray')
					sCE.pointilles = true
					sED = droite(EE, D, '', 'gray')
					sED.pointilles = true
					sDE = droite(DD, E, '', 'gray')
					sDE.pointilles = true
					sEC = droite(C, E, '', 'gray')
					sEC.pointilles = true



					objets_correction.push(d, tracePoint(A, B, C, D, E, CC, DD, EE), labelPoint(A, B, C, D, E, CC, DD, EE), cC, cD, cE, sC, sD, sE, sED, sDE, sCE, sEC)
					objets_enonce.push(tracePoint(A, B, C, D, E), labelPoint(A, B, C, D, E), d);
					enonce = num_alpha(0) + ` Reproduire la figure ci-dessous.<br>`
					enonce += num_alpha(1) + ` Construire le point $${p1nom[2]}\'$ symétrique de $${p1nom[2]}$ par rapport à la droite $(${p1nom[0]}${p1nom[1]})$.<br>`
					enonce += num_alpha(2) + ` Construire le point $${p1nom[3]}\'$ symétrique de $${p1nom[3]}$ par rapport à la droite $(${p1nom[0]}${p1nom[1]})$.<br>`
					enonce += num_alpha(3) + ` Construire le point $${p1nom[4]}\'$ symétrique de $${p1nom[4]}$ par rapport à la droite $(${p1nom[0]}${p1nom[1]})$.<br>`
					enonce += num_alpha(5) + ` Coder la figure.<br>`;
					Xmin = Math.floor(Math.min(A.x, B.x, C.x, D.x, E.x, EE.x, CC.x, DD.x) - 1)
					Xmax = Math.ceil(Math.max(A.x, B.x, C.x, D.x, E.x, EE.x, CC.x, DD.x) + 1)
					Ymin = Math.floor(Math.min(A.y, B.y, C.y, D.y, E.y, EE.y, CC.y, DD.y) - 1)
					Ymax = Math.ceil(Math.max(A.y, B.y, C.y, D.y, E.y, EE.y, CC.y, DD.y) + 1)


					correction = `Contrôler la figure en vérifiant que les segments en pointillés se coupent bien sur la droite $(${p1nom[0]}${p1nom[1]})$<br>`

					break;
				case 1: // 3 symétries axiales de points
					p1nom = creerNomDePolygone(5)
					A = point(0, randint(-1, 1), `${p1nom[0]}`, 'above');
					B = point(6, randint(-1, 1, A.y), `${p1nom[1]}`, 'above');
					d = droite(A, B);
					d.isVisible = true;
					d.epaisseur = 1
					C = point(randint(2, 3), randint(3, 4), `${p1nom[2]}`, 'above left');
					D = point(randint(10, 13), randint(-4, -3), `${p1nom[3]}`, 'below right');
					//			dB = droiteParPointEtPerpendiculaire(B, d);
					E = point(randint(6, 8), randint(-8, -5), `${p1nom[4]}`, "left");
					//F = point(E.x+1,5-B.y,'F','above left');
					CC = symetrieAxiale(C, d, `${p1nom[2]}\'`, 'below left')
					DD = symetrieAxiale(D, d, `${p1nom[3]}\'`, 'above right')
					EE = symetrieAxiale(E, d, `${p1nom[4]}\'`, 'left')
					//FF=symetrieAxiale(F,d,'F\'','below left')
					cC = codageMediatrice(C, CC, 'red', '|')
					cD = codageMediatrice(D, DD, 'blue', 'X')
					cE = codageMediatrice(E, EE, 'green', 'O')
					//cF=codageMediatrice(F,FF,'purple','V')
					sC = segment(C, CC)
					sD = segment(D, DD)
					sE = segment(E, EE)
					//sF=segment(F,FF)
					sCE = segment(CC, EE, 'gray')
					sCE.pointilles = true
					sED = segment(EE, D, 'gray')
					sED.pointilles = true
					sDE = segment(DD, E, 'gray')
					sDE.pointilles = true
					sEC = segment(C, E, 'gray')
					sEC.pointilles = true



					objets_correction.push(d, tracePoint(A, B, C, D, E, CC, DD, EE), labelPoint(A, B, C, D, E, CC, DD, EE), cC, cD, cE, sC, sD, sE, sED, sDE, sCE, sEC)
					objets_enonce.push(tracePoint(A, B, C, D, E), labelPoint(A, B, C, D, E), d);
					enonce = num_alpha(0) + ` Reproduire la figure ci-dessous.<br>`
					enonce += num_alpha(1) + ` Construire le point $${p1nom[2]}\'$ symétrique de $${p1nom[2]}$ par rapport à la droite $(${p1nom[0]}${p1nom[1]})$.<br>`
					enonce += num_alpha(2) + ` Construire le point $${p1nom[3]}\'$ symétrique de $${p1nom[3]}$ par rapport à la droite $(${p1nom[0]}${p1nom[1]})$.<br>`
					enonce += num_alpha(3) + ` Construire le point $${p1nom[4]}\'$ symétrique de $${p1nom[4]}$ par rapport à la droite $(${p1nom[0]}${p1nom[1]})$.<br>`
					enonce += num_alpha(5) + ` Coder la figure.<br>`;
					Xmin = Math.floor(Math.min(A.x, B.x, C.x, D.x, E.x, EE.x, CC.x, DD.x) - 1)
					Xmax = Math.ceil(Math.max(A.x, B.x, C.x, D.x, E.x, EE.x, CC.x, DD.x) + 1)
					Ymin = Math.floor(Math.min(A.y, B.y, C.y, D.y, E.y, EE.y, CC.y, DD.y) - 1)
					Ymax = Math.ceil(Math.max(A.y, B.y, C.y, D.y, E.y, EE.y, CC.y, DD.y) + 1)


					correction = `Contrôler la figure en vérifiant que les segments en pointillés se coupent bien sur la droite $(${p1nom[0]}${p1nom[1]})$<br>`
					break;
				case 2: // 3 symétries centrales de points
					p1nom = creerNomDePolygone(4)
					A = point(0, randint(-1, 4), `${p1nom[0]}`, 'left');
					B = point(7, randint(-1, 1, A.y), `${p1nom[1]}`, 'above');
					C = point(randint(2, 3), randint(-4, -2), `${p1nom[2]}`, 'left');
					D = point(randint(10, 13), randint(-6, -5), `${p1nom[3]}`, 'below right');
					CC = rotation(C, B, 180, `${p1nom[2]}\'`, 'right')
					DD = rotation(D, B, 180, `${p1nom[3]}\'`, 'above left')
					AA = rotation(A, B, 180, `${p1nom[0]}\'`, 'right')
					cC = codageMilieu(C, CC, 'red', '|', false)
					cD = codageMilieu(D, DD, 'blue', '||', false)
					cA = codageMilieu(A, AA, 'green', '|||', false)
					sC = segment(C, CC)
					sD = segment(D, DD)
					sA = segment(A, AA)

					objets_correction.push(tracePoint(A, C, D, CC, DD, AA), labelPoint(A, B, C, D, CC, DD, AA), cC, cD, cA, sC, sD, sA)
					objets_enonce.push(tracePoint(A, B, C, D), labelPoint(A, B, C, D));
					enonce = num_alpha(0) + ` Reproduire la figure ci-dessous.<br>`
					enonce += num_alpha(1) + ` Construire le point $${p1nom[2]}\'$ symétrique de $${p1nom[2]}$ par rapport au point $${p1nom[1]}$.<br>`
					enonce += num_alpha(2) + ` Construire le point $${p1nom[3]}\'$ symétrique de $${p1nom[3]}$ par rapport au point $${p1nom[1]}$.<br>`
					enonce += num_alpha(3) + ` Construire le point $${p1nom[0]}\'$ symétrique de $${p1nom[0]}$ par rapport au point $${p1nom[1]}$.<br>`
					enonce += num_alpha(4) + ` Coder la figure.<br>`;
					Xmin = Math.floor(Math.min(A.x, B.x, C.x, D.x, AA.x, CC.x, DD.x) - 1)
					Xmax = Math.ceil(Math.max(A.x, B.x, C.x, D.x, AA.x, CC.x, DD.x) + 1)
					Ymin = Math.floor(Math.min(A.y, B.y, C.y, D.y, AA.y, CC.y, DD.y) - 1)
					Ymax = Math.ceil(Math.max(A.y, B.y, C.y, D.y, AA.y, CC.y, DD.y) + 1)
					correction = ''
					break;

				case 3: // symétrie axiale simple d'un triangle
					p1nom = creerNomDePolygone(5, "PQ")
					A = point(0, 0, `${p1nom[0]}`, 'above');
					k = choice([-1, 0, 1, 2])

					if (k < 2) d = droiteParPointEtPente(A, k);
					else d = droiteVerticaleParPoint(A)
					B = pointSurDroite(d, 6, `${p1nom[1]}`, 'above');
					d.isVisible = true;
					d.epaisseur = 1
					C = point(randint(2, 3), randint(3, 4), `${p1nom[2]}`, 'above left');
					D = point(randint(3, 5), randint(-4, -3), `${p1nom[3]}`, 'below right');
					//			dB = droiteParPointEtPerpendiculaire(B, d);
					E = point(randint(6, 7), randint(5, 6), `${p1nom[4]}`, "left");
					p1 = polygone(C, D, E)
					p2 = symetrieAxiale(p1, d)
					p2.listePoints[0].nom = `${p1nom[2]}\'`
					p2.listePoints[1].nom = `${p1nom[3]}\'`
					p2.listePoints[2].nom = `${p1nom[4]}\'`
					//CC=nommePolygone(p1)
					//DD=nommePolygone(p2)
					cC = codageMediatrice(p1.listePoints[0], p2.listePoints[0], 'red', '|')
					cD = codageMediatrice(p1.listePoints[1], p2.listePoints[1], 'blue', 'X')
					cE = codageMediatrice(p1.listePoints[2], p2.listePoints[2], 'green', 'O')
					sC = segment(p1.listePoints[0], p2.listePoints[0], 'red')
					sD = segment(p1.listePoints[1], p2.listePoints[1], 'blue')
					sE = segment(p1.listePoints[2], p2.listePoints[2], 'green')
					sCE = droite(p1.listePoints[2], p1.listePoints[1], '', 'gray')
					sCE.pointilles = true
					sED = droite(p2.listePoints[2], p2.listePoints[1], '', 'gray')
					sED.pointilles = true
					objets_correction.push(d, tracePoint(A, B), labelPoint(A, B), cC, cD, cE, sC, sD, sE, CC, DD, p1, p1.sommets, p2, p2.sommets, sCE, sED)
					objets_enonce.push(d, tracePoint(A, B), labelPoint(A, B), CC, p1);
					enonce = num_alpha(0) + `Reproduire la figure ci-dessous.<br>`
					enonce += num_alpha(1) + ` Construire le triangle  $${p1nom[2]}\'${p1nom[3]}\'${p1nom[4]}\'$ symétrique de $${p1nom[2]}${p1nom[3]}${p1nom[4]}$ par rapport à la droite $(${p1nom[0]}${p1nom[1]})$.<br>`
					enonce += num_alpha(2) + ` Coder la figure.<br>`;
					Xmin = Math.floor(Math.min(A.x, B.x, C.x, D.x, p1.listePoints[0].x, p1.listePoints[1].x, p1.listePoints[2].x, p2.listePoints[0].x, p2.listePoints[1].x, p2.listePoints[2].x) - 1)
					Xmax = Math.ceil(Math.max(A.x, B.x, C.x, D.x, p1.listePoints[0].x, p1.listePoints[1].x, p1.listePoints[2].x, p2.listePoints[0].x, p2.listePoints[1].x, p2.listePoints[2].x) + 1)
					Ymin = Math.floor(Math.min(A.y, B.y, C.y, D.y, p1.listePoints[0].y, p1.listePoints[1].y, p1.listePoints[2].y, p2.listePoints[0].y, p2.listePoints[1].y, p2.listePoints[2].y) - 1)
					Ymax = Math.ceil(Math.max(A.y, B.y, C.y, D.y, p1.listePoints[0].y, p1.listePoints[1].y, p1.listePoints[2].y, p2.listePoints[0].y, p2.listePoints[1].y, p2.listePoints[2].y) + 1)
					correction = ''

					break
				case 4: // symetrie axiale d'un triangle
					p1nom = creerNomDePolygone(5)


					A = point(0, randint(-1, 1), `${p1nom[0]}`, 'above');
					B = point(6, randint(-1, 1, A.y), `${p1nom[1]}`, 'above');
					d = droite(A, B);
					d.isVisible = true;
					d.epaisseur = 1
					C = point(randint(2, 3), randint(3, 4), `${p1nom[2]}`, 'above left');
					D = point(randint(10, 13), randint(-4, -2), `${p1nom[3]}`, 'below right');
					dB = droiteParPointEtPerpendiculaire(B, d);
					E = point(randint(6, 8), randint(-8, -6), `${p1nom[4]}`, "left");
					p1 = polygone(C, D, E)
					p2 = symetrieAxiale(p1, d)
					p2.listePoints[0].nom = `${p1nom[2]}\'`
					p2.listePoints[1].nom = `${p1nom[3]}\'`
					p2.listePoints[2].nom = `${p1nom[4]}\'`
					CC = nommePolygone(p1)
					DD = nommePolygone(p2)
					cC = codageMediatrice(p1.listePoints[0], p2.listePoints[0], 'red', '|')
					cD = codageMediatrice(p1.listePoints[1], p2.listePoints[1], 'blue', 'X')
					cE = codageMediatrice(p1.listePoints[2], p2.listePoints[2], 'green', 'O')
					sC = segment(p1.listePoints[0], p2.listePoints[0], 'red')
					sD = segment(p1.listePoints[1], p2.listePoints[1], 'blue')
					sE = segment(p1.listePoints[2], p2.listePoints[2], 'green')
					sCE = droite(p1.listePoints[2], p1.listePoints[1], '', 'gray')
					sCE.pointilles = true
					sED = droite(p2.listePoints[2], p2.listePoints[1], '', 'gray')
					sED.pointilles = true
					inter = pointIntersectionDD(sCE, sED)
					objets_correction.push(d, tracePoint(A, B), labelPoint(A, B), cC, cD, cE, sC, sD, sE, CC, DD, p1, p2, sCE, sED)
					objets_enonce.push(d, tracePoint(A, B), labelPoint(A, B), CC, p1);
					enonce = num_alpha(0) + `Reproduire la figure ci-dessous.<br>`
					enonce += num_alpha(1) + ` Construire le triangle  $${p1nom[2]}\'${p1nom[3]}\'${p1nom[4]}\'$ symétrique de $${p1nom[2]}${p1nom[3]}${p1nom[4]}$ par rapport à la droite $(${p1nom[0]}${p1nom[1]})$.<br>`
					enonce += num_alpha(2) + ` Coder la figure.<br>`;
					Xmin = Math.floor(Math.min(inter.x, A.x, B.x, C.x, D.x, p1.listePoints[0].x, p1.listePoints[1].x, p1.listePoints[2].x, p2.listePoints[0].x, p2.listePoints[1].x, p2.listePoints[2].x) - 1)
					Xmax = Math.ceil(Math.max(inter.x, A.x, B.x, C.x, D.x, p1.listePoints[0].x, p1.listePoints[1].x, p1.listePoints[2].x, p2.listePoints[0].x, p2.listePoints[1].x, p2.listePoints[2].x) + 1)
					Ymin = Math.floor(Math.min(inter.y, A.y, B.y, C.y, D.y, p1.listePoints[0].y, p1.listePoints[1].y, p1.listePoints[2].y, p2.listePoints[0].y, p2.listePoints[1].y, p2.listePoints[2].y) - 1)
					Ymax = Math.ceil(Math.max(inter.y, A.y, B.y, C.y, D.y, p1.listePoints[0].y, p1.listePoints[1].y, p1.listePoints[2].y, p2.listePoints[0].y, p2.listePoints[1].y, p2.listePoints[2].y) + 1)

					correction = `Contrôler la figure en vérifiant que les côtés des deux triangles se coupent bien sur la droite $(${p1nom[0]}${p1nom[1]})$<br>`
					break;
				case 5:
					p1nom = creerNomDePolygone(4)
					console.log(p1nom)
					A = point(0, randint(-1, 4), `${p1nom[0]}`, 'left');
					B = point(7, randint(-1, 1, A.y), `${p1nom[1]}`, 'above');
					C = point(randint(2, 3), randint(-6, -4), `${p1nom[2]}`, 'left');
					D = point(randint(10, 13), randint(-6, -5), `${p1nom[3]}`, 'below right');
					p1 = polygone(A, C, D)
					p2 = rotation(p1, B, 180)
					p2.listePoints[0].nom = `${p1nom[0]}\'`
					p2.listePoints[1].nom = `${p1nom[2]}\'`
					p2.listePoints[2].nom = `${p1nom[3]}\'`
					CC = nommePolygone(p1)
					DD = nommePolygone(p2)
					cC = codageMilieu(p1.listePoints[0], p2.listePoints[0], 'red', '|', false)
					cD = codageMilieu(p1.listePoints[1], p2.listePoints[1], 'blue', 'X', false)
					cA = codageMilieu(p1.listePoints[2], p2.listePoints[2], 'green', 'O', false)
					sA = segment(p1.listePoints[0], p2.listePoints[0], 'red')
					sC = segment(p1.listePoints[1], p2.listePoints[1], 'blue')
					sD = segment(p1.listePoints[2], p2.listePoints[2], 'green')

					objets_correction.push(tracePoint(B), labelPoint(B), cC, cD, cA, sC, sD, sA, DD, CC, p1, p2)
					objets_enonce.push(tracePoint(B), labelPoint(B), CC, p1);
					enonce = num_alpha(0) + `Reproduire la figure ci-dessous.<br>`
					enonce += num_alpha(1) + ` Construire le triangle  $${p1nom[0]}\'${p1nom[2]}\'${p1nom[3]}\'$ symétrique de $${p1nom[0]}${p1nom[2]}${p1nom[3]}$ par rapport au point $${p1nom[1]}$.<br>`
					enonce += num_alpha(2) + ` Coder la figure.<br>`;
					Xmin = Math.floor(Math.min(A.x, B.x, C.x, D.x, p1.listePoints[0].x, p1.listePoints[1].x, p1.listePoints[2].x, p2.listePoints[0].x, p2.listePoints[1].x, p2.listePoints[2].x) - 1)
					Xmax = Math.ceil(Math.max(A.x, B.x, C.x, D.x, p1.listePoints[0].x, p1.listePoints[1].x, p1.listePoints[2].x, p2.listePoints[0].x, p2.listePoints[1].x, p2.listePoints[2].x) + 1)
					Ymin = Math.floor(Math.min(A.y, B.y, C.y, D.y, p1.listePoints[0].y, p1.listePoints[1].y, p1.listePoints[2].y, p2.listePoints[0].y, p2.listePoints[1].y, p2.listePoints[2].y) - 1)
					Ymax = Math.ceil(Math.max(A.y, B.y, C.y, D.y, p1.listePoints[0].y, p1.listePoints[1].y, p1.listePoints[2].y, p2.listePoints[0].y, p2.listePoints[1].y, p2.listePoints[2].y) + 1)
					correction = ''
					break;

			}

			let params = {
				xmin: Xmin,
				ymin: Ymin,
				xmax: Xmax,
				ymax: Ymax,
				pixelsParCm: 20,
				scale: sc,
			}
			if (this.sup2 < 3) g = grille(Xmin, Ymin, Xmax, Ymax, "gray", 0.7);
			else g = ''
			if (this.sup2 == 2) {
				k = 0.8;
				carreaux = seyes(Xmin, Ymin, Xmax, Ymax);
			} else {
				k = 0.5;
				carreaux = "";
			}
			objets_enonce.push(g, carreaux)
			objets_correction.push(g, carreaux)
			enonce += mathalea2d(params
				,
				objets_enonce
			);
			correction += mathalea2d(
				params,
				objets_correction
			);
			if (this.liste_questions.indexOf(enonce) == -1) {
				// Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(enonce + "<br>");
				this.liste_corrections.push(correction + "<br>");
				i++;
			}
			cpt++;
		}

		liste_de_question_to_contenu(this);
	};
	this.besoin_formulaire_numerique = ['Type de questions', 4, `0 : symétries axiales simples\n 1 : Symétrie axiale\n 2 : Symétrie centrale\n 3 : Mélange`]
	this.besoin_formulaire2_numerique = [
		"Type de cahier",
		3,
		`1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche`,
	];
}


/** 
* * Remplir un tableau en utilisant la notion d'opposé
* * 5R10-0
* @author Sébastien Lozano
*/
function Trouver_oppose() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.sup = 1;
	if (this.debug) {
		this.nb_questions = 1;
	} else {
		this.nb_questions = 1;
	};

	this.titre = "Trouver l'opposé d'un nombre relatif";
	this.consigne = "Compléter le tableau suivant.";

	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//this.nb_questions_modifiable = false;
	//sortie_html? this.spacing = 3 : this.spacing = 2; 
	//sortie_html? this.spacing_corr = 3 : this.spacing_corr = 2;

	let type_de_questions_disponibles;

	this.nouvelle_version = function (numero_de_l_exercice) {
		if (this.debug) {
			type_de_questions_disponibles = [1];
		} else {
			type_de_questions_disponibles = [1];
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		//type_de_questions_disponibles=[1];			

		//let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			// une fonction pour générer un relatif et son opposé
			function nbRel_et_son_oppose() {
				let nb_num = calcul(randint(-9, 9) + calcul(randint(-9, 9) / 10));

				return {
					nb: tex_nombre(nb_num),
					opp: tex_nombre(-nb_num)
				};
			}
			let nb_ligne_nombres = ['\\text{Nombre}'];
			let nb_ligne_nombres_corr = ['\\text{Nombre}'];
			let nb_ligne_nombres_opp = [];
			let nb_ligne_nombres_opp_corr = [];
			let nb;
			for (let k = 0; k < 6; k++) {
				nb = nbRel_et_son_oppose();
				if (randint(0, 1) == 1) {
					nb_ligne_nombres[k + 1] = '';
					nb_ligne_nombres_corr[k + 1] = mise_en_evidence(nb.nb);
					nb_ligne_nombres_opp.push(nb.opp)
					nb_ligne_nombres_opp_corr.push(nb.opp)
				} else {
					nb_ligne_nombres.push(nb.nb);
					nb_ligne_nombres_corr.push(nb.nb);
					nb_ligne_nombres_opp[k] = '';
					nb_ligne_nombres_opp_corr[k] = mise_en_evidence(nb.opp);
				}
			};

			let enonces = [];
			enonces.push({
				enonce: `								
				${tab_C_L(nb_ligne_nombres, ['\\text{Opposé du nombre}'], nb_ligne_nombres_opp)}
				`,
				question: ``,
				correction: `
				${tab_C_L(nb_ligne_nombres_corr, ['\\text{Opposé du nombre}'], nb_ligne_nombres_opp_corr)}				
				`
			});
			enonces.push({
				enonce: `énoncé type 2`,
				question: ``,
				correction: `${texte_en_couleur(`correction type2`)}`
			});

			switch (liste_type_de_questions[i]) {
				case 1:
					texte = `${enonces[0].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[0].correction}`;
					};
					break;
				case 2:
					texte = `${enonces[1].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[1].correction}`;
					};
					break;
			}


			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);

	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
	//this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
}

/** 
 * * résoudre un problème additif de fractions niv 5e
 * * 5N20-0
 * @author Sébastien Lozano
 */
function Problemes_additifs_fractions_5e() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.sup = 1;
	if (this.debug) {
		this.nb_questions = 1;
	} else {
		this.nb_questions = 1;
	};

	this.titre = "Résoudre un problème en utilisant des fractions";
	this.consigne = `Calculatrice autorisée.`;

	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//this.nb_questions_modifiable = false;
	sortie_html ? this.spacing = 2.5 : this.spacing = 1.5;
	sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

	let type_de_questions_disponibles;

	this.nouvelle_version = function (numero_de_l_exercice) {
		if (this.debug) {
			type_de_questions_disponibles = [0];
		} else {
			// type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);
			type_de_questions_disponibles = [0];
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées		

		//let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			// on définit les fractions pour les vols et les arguments pour le graphique
			let frac_vols = [
				[1, 12, [1.8, ' ', 'black', 2, 1, 'red', 0.4]],
				[1, 12, [1.8, ' ', 'black', 2, 1, 'red', 0.4]],
				[1, 12, [1.8, ' ', 'black', 2, 1, 'red', 0.4]],
				[1, 4, [1.8, ' ', 'black', 2, 1, 'blue', 0.4]],
				[1, 2, [1.8, ' ', 'black', 2, 1, 'green', 0.4]]
			];
			// on mélange pour l'aléatoire tant que les deux premieres fractions sont égales
			do {
				frac_vols = shuffle(frac_vols);
			} while (frac_vols[0][1] == frac_vols[1][1]);


			// let q1a = randint(1,5); // indice pour faire varier la 1ere question sur la destination
			// let q1b = randint(1,5,[q1a]); // indice pour faire varier la 2eme question sur la destination
			let nb_vols_total;
			let destinations_vols = [[`l'`, `Afrique`], [`l'`, `Asie`], [`l'`, `Amerique`], [`l'`, `Europe`], [`la`, ` France`]];
			destinations_vols = shuffle(destinations_vols);
			do {
				nb_vols_total = randint(200, 600);
			} while (nb_vols_total % 2 != 0 || nb_vols_total % 3 != 0 || nb_vols_total % 4 != 0)

			// pour les situations
			let situations = [
				{//case 0 --> vols
					fin_enonce_situation: `vols d'une compagnie aérienne selon la destination`,
					nom_enonce: `vols`,
					last_question: [`cette compagnie a affrété`, `vols`, `le nombre de vols`, `Le nombre de vols`],
					cat1: {
						destination: destinations_vols[0][0] + destinations_vols[0][1],
						article: destinations_vols[0][0],
						nom: destinations_vols[0][1],
						frac: frac_vols[0],
						angle: calcul(360 / frac_vols[0][1]),
						arg_graph: frac_vols[0][2],
					},
					cat2: {
						destination: destinations_vols[1][0] + destinations_vols[1][1],
						article: destinations_vols[1][0],
						nom: destinations_vols[1][1],
						frac: frac_vols[1],
						angle: calcul(360 / frac_vols[1][1]),
						arg_graph: frac_vols[1][2],
					},
					cat3: {
						destination: destinations_vols[2][0] + destinations_vols[2][1],
						article: destinations_vols[2][0],
						nom: destinations_vols[2][1],
						frac: frac_vols[2],
						angle: calcul(360 / frac_vols[2][1]),
						arg_graph: frac_vols[2][2],
					},
					cat4: {
						destination: destinations_vols[3][0] + destinations_vols[3][1],
						article: destinations_vols[3][0],
						nom: destinations_vols[3][1],
						frac: frac_vols[3],
						angle: calcul(360 / frac_vols[3][1]),
						arg_graph: frac_vols[3][2],
					},
					cat5: {
						destination: destinations_vols[4][0] + destinations_vols[4][1],
						article: destinations_vols[4][0],
						nom: destinations_vols[4][1],
						frac: frac_vols[4],
						angle: calcul(360 / frac_vols[4][1]),
						arg_graph: frac_vols[4][2],
					},
					// q1a:q1a,
					// q1b:q1b,
					nb_total: nb_vols_total,
					fig: ``,
				},
				{//case 1 --> courses
				},
				{//case 2 --> activités sportives
				},
				{//case 3 -->
				},
				{//case 4 -->
				},
			];
			// une fonction pour gérer le codage des angles
			function myCodageAngle(A, O, B, angle, [...args]) {
				if (angle == 90) {
					return codageAngleDroit(A, O, B);
				} else {
					return codeAngle(A, O, angle, ...args)
				};
			};

			// une fonction pour gérer l'affichage correct de la légende
			//param est l'ordonnée du point qui sert à la mediatrice !
			function myLegendeOK(param) {
				if (param < 0) {
					return 2;
				} else {
					return 1;
				};
			};

			//une fonction pour positionner le label
			// y est l'ordonnée du point
			function myLabelPosition(y) {
				if (y < 0) {
					return 'below';
				} else {
					return 'above';
				};
			};

			// une fonction pour gérer le texte en fonction de l'angle
			function myTexte_vols_corr(angle) {
				switch (angle) {
					case 90:
						return `du secteur est un angle droit, il mesure $${angle}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${angle}}{360}$ du disque soit $\\dfrac{1}{4}$.`;
					case 30:
						return `rouge apparaît 3 fois, l'angle vert vaut $180\\degree$ et il y a un angle droit.<br>
							L'angle pour un tour complet vaut $360\\degree$, donc l'angle rouge vaut $(360-180-90)\\div 3 = ${angle}\\degree$.<br>
							L'angle rouge mesure $${angle}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${angle}}{360}$ du disque soit $\\dfrac{1}{12}$.
							`;
					case 180:
						return `du secteur est un angle plat, il mesure $${angle}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${angle}}{360}$ du disque soit $\\dfrac{1}{2}$.`;

				}
			};

			// on prépare la fenetre mathalea2d
			let fenetreMathalea2D = { xmin: -10, ymin: -8, xmax: 10, ymax: 8, pixelsParCm: 20, scale: 0.5 }
			let O_vols = point(0, 0);
			let A_vols = point(fenetreMathalea2D.xmin + 6, 0);
			let c_vols = cercleCentrePoint(O_vols, A_vols, 'blue');
			c_vols.epaisseur = 2;
			// on trace les quartiers
			//cat1
			let B_vols = rotation(A_vols, O_vols, situations[0].cat1.angle);
			let s_OA_vols = segment(O_vols, A_vols);
			let s_OB_vols = segment(O_vols, B_vols);
			let codage_AOB = myCodageAngle(A_vols, O_vols, B_vols, situations[0].cat1.angle, situations[0].cat1.arg_graph)
			//cat2
			let C_vols = rotation(B_vols, O_vols, situations[0].cat2.angle);
			let s_OC_vols = segment(O_vols, C_vols);
			let codage_BOC = myCodageAngle(B_vols, O_vols, C_vols, situations[0].cat2.angle, situations[0].cat2.arg_graph)
			//cat3
			let D_vols = rotation(C_vols, O_vols, situations[0].cat3.angle);
			let s_OD_vols = segment(O_vols, D_vols);
			let codage_COD = myCodageAngle(C_vols, O_vols, D_vols, situations[0].cat3.angle, situations[0].cat3.arg_graph)
			//cat4
			let E_vols = rotation(D_vols, O_vols, situations[0].cat4.angle);
			let s_OE_vols = segment(O_vols, E_vols);
			let codage_DOE = myCodageAngle(D_vols, O_vols, E_vols, situations[0].cat4.angle, situations[0].cat4.arg_graph)
			//cat5
			let F_vols = rotation(E_vols, O_vols, situations[0].cat5.angle);
			let s_OF_vols = segment(O_vols, F_vols);
			let codage_EOF = myCodageAngle(E_vols, O_vols, F_vols, situations[0].cat5.angle, situations[0].cat5.arg_graph)

			// légende 
			let A_legende = point(fenetreMathalea2D.xmin + 4, 0);
			let L_vols_cat1 = rotation(A_legende, O_vols, situations[0].cat1.angle / 2, situations[0].cat1.nom);
			L_vols_cat1.positionLabel = myLabelPosition(L_vols_cat1.y);
			let LL_vols_cat1 = rotation(A_vols, O_vols, situations[0].cat1.angle / 2, situations[0].cat1.nom);
			let s_legende_cat1 = segment(L_vols_cat1, LL_vols_cat1);
			s_legende_cat1.styleExtremites = '->';
			s_legende_cat1.pointilles = true;

			let L_vols_cat2 = rotation(L_vols_cat1, O_vols, situations[0].cat1.angle / 2 + situations[0].cat2.angle / 2, situations[0].cat2.nom);
			L_vols_cat2.positionLabel = myLabelPosition(L_vols_cat2.y);
			let LL_vols_cat2 = rotation(B_vols, O_vols, situations[0].cat2.angle / 2, situations[0].cat2.nom);
			let s_legende_cat2 = segment(L_vols_cat2, LL_vols_cat2);
			s_legende_cat2.styleExtremites = '->';
			s_legende_cat2.pointilles = true;

			let L_vols_cat3 = rotation(L_vols_cat2, O_vols, situations[0].cat2.angle / 2 + situations[0].cat3.angle / 2, situations[0].cat3.nom);
			L_vols_cat3.positionLabel = myLabelPosition(L_vols_cat3.y);
			let LL_vols_cat3 = rotation(C_vols, O_vols, situations[0].cat3.angle / 2, situations[0].cat3.nom);
			let s_legende_cat3 = segment(L_vols_cat3, LL_vols_cat3);
			s_legende_cat3.styleExtremites = '->';
			s_legende_cat3.pointilles = true;

			let L_vols_cat4 = rotation(L_vols_cat3, O_vols, situations[0].cat3.angle / 2 + situations[0].cat4.angle / 2, situations[0].cat4.nom);
			L_vols_cat4.positionLabel = myLabelPosition(L_vols_cat4.y);
			let LL_vols_cat4 = rotation(D_vols, O_vols, situations[0].cat4.angle / 2, situations[0].cat4.nom);
			let s_legende_cat4 = segment(L_vols_cat4, LL_vols_cat4);
			s_legende_cat4.styleExtremites = '->';
			s_legende_cat4.pointilles = true;

			let L_vols_cat5 = rotation(L_vols_cat4, O_vols, situations[0].cat4.angle / 2 + situations[0].cat5.angle / 2, situations[0].cat5.nom);
			L_vols_cat5.positionLabel = myLabelPosition(L_vols_cat5.y);
			let LL_vols_cat5 = rotation(E_vols, O_vols, situations[0].cat5.angle / 2, situations[0].cat5.nom);
			let s_legende_cat5 = segment(L_vols_cat5, LL_vols_cat5);
			s_legende_cat5.styleExtremites = '->';
			s_legende_cat5.pointilles = true;


			let mesAppels = [
				c_vols,
				s_OA_vols,
				s_OB_vols,
				s_OC_vols,
				s_OD_vols,
				s_OE_vols,
				s_OF_vols,
				codage_AOB,
				codage_BOC,
				codage_COD,
				codage_DOE,
				codage_EOF,
				labelPoint(L_vols_cat1),
				labelPoint(L_vols_cat2),
				labelPoint(L_vols_cat3),
				labelPoint(L_vols_cat4),
				labelPoint(L_vols_cat5),
				s_legende_cat1,
				s_legende_cat2,
				s_legende_cat3,
				s_legende_cat4,
				s_legende_cat5,
			];
			let fig_vols = mathalea2d(
				fenetreMathalea2D,
				mesAppels
			);
			situations[0].fig = fig_vols;

			let enonces = [];
			let i_sous_question = 0;
			let i_sous_question_corr = 0;

			for (let k = 0; k < 1; k++) {
				enonces.push({
					enonce: `
					On a représenté sur le diagramme circulaire ci-contre la répartition des ${situations[k].fin_enonce_situation}.<br>
					${texte_gras(`Les angles de même couleur ont la même mesure.`)}<br>
					${texte_gras(`L'angle vert est un angle plat.`)}<br>
					${situations[k].fig}<br>
					${num_alpha(i_sous_question++)} Quelle fraction représente les ${situations[k].nom_enonce} vers ${situations[k].cat1.destination} ?<br>
					${num_alpha(i_sous_question++)} Quelle fraction représente les ${situations[k].nom_enonce} vers ${situations[k].cat2.destination} ?<br>
					${num_alpha(i_sous_question++)} Sachant que ${situations[k].last_question[0]} ${situations[k].nb_total} ${situations[k].last_question[1]}
					et que les ${situations[k].nom_enonce} vers ${situations[k].cat3.destination} représentent $\\dfrac{${situations[k].cat3.frac[0]}}{${situations[k].cat3.frac[1]}}$ de ce total,
					caluler ${situations[k].last_question[2]} vers ${situations[k].cat3.destination}?
												
					`,
					correction: `
					${num_alpha(i_sous_question_corr++)} Pour ${situations[k].cat1.destination} l'angle ${myTexte_vols_corr(situations[k].cat1.angle)}<br>					
					${texte_en_couleur(`La fraction qui représente les ${situations[k].nom_enonce} vers ${situations[k].cat1.destination} vaut donc $\\dfrac{${situations[k].cat1.frac[0]}}{${situations[k].cat1.frac[1]}}$`)}.<br>
					
					${num_alpha(i_sous_question_corr++)} Pour ${situations[k].cat2.destination} l'angle ${myTexte_vols_corr(situations[k].cat2.angle)}<br>				
					${texte_en_couleur(`La fraction qui représente les ${situations[k].nom_enonce} vers ${situations[k].cat2.destination} vaut donc $\\dfrac{${situations[k].cat2.frac[0]}}{${situations[k].cat2.frac[1]}}$`)}<br>

					${num_alpha(i_sous_question_corr++)} Calculons $\\dfrac{${situations[k].cat3.frac[0]}}{${situations[k].cat3.frac[1]}}$ de ${situations[k].nb_total} :<br> 
					$\\dfrac{${situations[k].cat3.frac[0]}}{${situations[k].cat3.frac[1]}}\\times ${situations[k].nb_total} = \\dfrac{${situations[k].cat3.frac[0]}\\times ${situations[k].nb_total}}{${situations[k].cat3.frac[1]}} = \\dfrac{${situations[k].cat3.frac[0]}\\times ${calcul(situations[k].nb_total / situations[k].cat3.frac[1])}\\times ${situations[k].cat3.frac[1]}}{${situations[k].cat3.frac[1]}} = \\dfrac{${situations[k].cat3.frac[0]}\\times ${calcul(situations[k].nb_total / situations[k].cat3.frac[1])}\\times \\cancel{${situations[k].cat3.frac[1]}}}{\\cancel{${situations[k].cat3.frac[1]}}} = ${situations[k].cat3.frac[0]}\\times ${calcul(situations[k].nb_total / situations[k].cat3.frac[1])} = ${calcul(situations[k].nb_total / situations[k].cat3.frac[1])}$<br>
					${texte_en_couleur(`${situations[k].last_question[3]} vers ${situations[k].cat3.destination} vaut donc ${calcul(situations[k].nb_total / situations[k].cat3.frac[1])}.`)}
					`
				});
			};

			switch (liste_type_de_questions[i]) {
				case 0:
					texte = `${enonces[0].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
						texte += `             `
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[0].correction}`;
					};
					break;
			}


			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);

	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
	//this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
};


/** 
 * * résoudre un problème additif avec des relatifs
 * * 5R20-4
 * @author Sébastien Lozano
 */

function Problemes_additifs_relatifs_5e() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.sup = 1;
	if (this.debug) {
		this.nb_questions = 1;
	} else {
		this.nb_questions = 1;
	};

	this.titre = "Résoudre un problème en utilisant une somme algébrique de relatifs.";
	this.consigne = ``;

	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//this.nb_questions_modifiable = false;
	sortie_html ? this.spacing = 2.5 : this.spacing = 1.5;
	sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

	let type_de_questions_disponibles;

	this.nouvelle_version = function (numero_de_l_exercice) {
		if (this.debug) {
			type_de_questions_disponibles = [0];
		} else {
			//   type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);
			type_de_questions_disponibles = [0];
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		//type_de_questions_disponibles=[1];			

		//let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			let g_p_u; //pour le gain/perte unitaire
			let g_m; //pour le gain multiple
			// on veut des multiples de 5 pour n'avoir que des demis entiers ou des entiers
			do {
				g_p_u = randint(10, 30);
				g_m = randint(10, 30);
			} while (g_p_u % 5 != 0 || g_m % 5 != 0 || g_m <= g_p_u)

			let n_tot = randint(10, 15); // nombre totale de lancers
			let n_g_u; // nb de gains untitaires
			let n_p; // nb de pertes
			do {
				n_g_u = randint(2, 10);
				n_p = randint(2, 10);
			} while (n_g_u + n_p >= n_tot)

			// on échange parfois le nombre de gain unitaire et le nombre de perte pour avoir un bilan négatif plus souvent
			if (n_p < n_g_u) {
				if (randint(0, 1) == 0) {
					let temp = n_p;
					n_p = n_g_u;
					n_g_u = temp;
				};
			};

			let prenoms = [[prenomF(), 'Elle', 'elle'], [prenomM(), 'Il', 'il']];
			let currentPrenom = choice(prenoms);

			// une fonction pour écrire les chaine correctives
			function myGainPerteString(nb, type, valeur) {
				let sortie = ``;
				switch (type) {
					case 'gain':
						sortie = `(+${tex_prix(valeur)}$€$)`;
						for (let m = 1; m < nb; m++) {
							sortie += `+(+${tex_prix(valeur)}$€$)`;
						};
						break;
					case 'perte':
						sortie = `(-${tex_prix(valeur)}$€$)`;
						for (let m = 1; m < nb; m++) {
							sortie += `+(-${tex_prix(valeur)}$€$)`;
						};
						break;
				};
				return sortie;
			}

			// une fonction pour dire si le bilan est positif ou négatif
			function isBilanPositif(tot) {
				if (tot >= 0) {
					return true;
				} else {
					return false;
				};
			};

			let bilan;
			if (isBilanPositif(calcul((n_tot - n_g_u - n_p) * calcul(g_m / 10)) + calcul(n_g_u * calcul(g_p_u / 10)) - calcul(n_p * calcul(g_p_u / 10)))) {
				bilan = [`Globalement, le montant des gains`, `est supérieur au montant des pertes`, `${texte_en_couleur(`Le bilan est donc positif.`)}`, `a gagné`, tex_prix(calcul((n_tot - n_g_u - n_p) * calcul(g_m / 10)) + calcul(n_g_u * calcul(g_p_u / 10)) - calcul(n_p * calcul(g_p_u / 10)))];
			} else {
				bilan = [`Globalement, le montant des gains`, `est inférieur au montant des pertes`, `${texte_en_couleur(`Le bilan est donc négatif.`)}`, `a perdu`, tex_prix((-1) * (calcul((n_tot - n_g_u - n_p) * calcul(g_m / 10)) + calcul(n_g_u * calcul(g_p_u / 10)) - calcul(n_p * calcul(g_p_u / 10))))];
			}
			// pour les situations
			let situations = [
				{//case 0 --> les quilles
					nb_tot_lancers: n_tot,
					nb_gains_unitaires: n_g_u,
					nb_pertes: n_p,
					nb_gains: n_tot - n_g_u - n_p,
					perte: calcul(g_p_u / 10),
					gain_unitaire: calcul(g_p_u / 10),
					gain_multiple: calcul(g_m / 10),
					enonce_1: `lancer une balle sur des quilles.`,
					enonce_2: `- Si la balle touche plusieurs quilles, le joueur gagne `,
					enonce_3: `- Si la balle ne touche qu'une quille, le joueur gagne `,
					enonce_4: `- Si la balle ne touche aucune quille, le joueur perd `,
					enonce_5: `a lancé`,
					enonce_6: `la balle`,
					correction_1: `touché plusieurs quilles`,
					correction_2: `touché qu'une seule quille`,
					prenom: currentPrenom[0],//prenoms[choice([0,1])][0],
					pronomMaj: currentPrenom[1],//prenoms[choice([0,1])][1],
					pronomMin: currentPrenom[2],//prenoms[choice([0,1])][2],
					bilan: bilan,
				},
			];

			let enonces = [];
			let i_sous_question;
			let i_sous_question_corr;
			for (let k = 0; k < situations.length; k++) {
				i_sous_question = 0;
				i_sous_question_corr = 0;
				enonces.push({
					enonce: `
					Un jeu consiste à ${situations[k].enonce_1}
					<br>${situations[0].enonce_2} $${tex_prix(situations[0].gain_multiple)}$€.				
					<br>${situations[0].enonce_3} $${tex_prix(situations[0].gain_unitaire)}$€.
					<br>${situations[0].enonce_4} $${tex_prix(situations[0].perte)}$€.
					<br>${situations[k].prenom} ${situations[k].enonce_5} $${situations[k].nb_tot_lancers}$ fois ${situations[k].enonce_6}.
					${situations[k].pronomMaj} a perdu de l'argent $${situations[k].nb_pertes}$ fois et a gagné $${situations[k].nb_gains_unitaires}$ fois $${tex_prix(situations[k].gain_unitaire)}$€.
					<br> ${num_alpha(i_sous_question++)} A-t-${situations[k].pronomMin} globalement gagné ou perdu de l'argent ?
					<br> ${num_alpha(i_sous_question++)} Combien a-t-${situations[k].pronomMin} globalement gagné ou perdu ?
					`,
					question: ``,
					correction: `
					${situations[k].prenom} ${situations[k].enonce_5} $${situations[k].nb_tot_lancers}$ fois ${situations[k].enonce_6},
					sur les $${situations[k].nb_tot_lancers}$ lancers, on sait combien de fois ${situations[k].pronomMin} a perdu de l'argent et combien de fois ${situations[k].pronomMin} a gagné $${tex_prix(situations[k].gain_unitaire)}$€, les autres lancers correspondent donc au nombre de fois où ${situations[k].pronomMin} a ${situations[k].correction_1} et qu'${situations[k].pronomMin} a gagné $${tex_prix(situations[k].gain_multiple)}$€ 
					<br> $${situations[k].nb_tot_lancers}-${situations[k].nb_pertes}-${situations[k].nb_gains_unitaires} = ${situations[k].nb_tot_lancers - situations[k].nb_pertes - situations[k].nb_gains_unitaires}$,
					${situations[k].pronomMin} a donc ${situations[k].correction_1} $${situations[k].nb_gains}$ fois.

					<br>${texte_gras(`Gains lorsqu'${situations[k].pronomMin} a ${situations[k].correction_1} :`)}
					<br>$${myGainPerteString(situations[k].nb_gains, 'gain', situations[k].gain_multiple)} = ${situations[k].nb_gains}\\times (+${tex_prix(situations[k].gain_multiple)}$€$) = +${tex_prix(situations[k].nb_gains * situations[k].gain_multiple)}$€

					<br>${texte_gras(`Gains lorsqu'${situations[k].pronomMin} n'a ${situations[k].correction_2} :`)}
					<br>$${myGainPerteString(situations[k].nb_gains_unitaires, 'gain', situations[k].gain_unitaire)} = ${situations[k].nb_gains_unitaires}\\times (+${tex_prix(situations[k].gain_unitaire)}$€$) = +${tex_prix(situations[k].nb_gains_unitaires * situations[k].gain_unitaire)}$€

					<br>${texte_gras(`Pertes :`)}
					<br>$${myGainPerteString(situations[k].nb_pertes, 'perte', situations[k].perte)} = ${situations[k].nb_pertes}\\times (-${tex_prix(situations[k].perte)}$€$) = -${tex_prix(situations[k].nb_pertes * situations[k].perte)}$€

					<br>${num_alpha(i_sous_question_corr++)} ${situations[k].bilan[0]}, $(+${tex_prix(situations[k].nb_gains * situations[k].gain_multiple)}$€$)$ et $(+${tex_prix(situations[k].nb_gains_unitaires * situations[k].gain_unitaire)}$€$)$, ${situations[k].bilan[1]}, $(-${tex_prix(situations[k].nb_pertes * situations[k].perte)}$€$)$.
					<br> ${situations[k].bilan[2]}   

					<br>${num_alpha(i_sous_question_corr++)} 
					$(+${tex_prix(situations[k].nb_gains * situations[k].gain_multiple)}$€$)+(+${tex_prix(situations[k].nb_gains_unitaires * situations[k].gain_unitaire)}$€$)+(-${tex_prix(situations[k].nb_pertes * situations[k].perte)}$€$) = (${tex_prix(situations[k].nb_gains * situations[k].gain_multiple + situations[k].nb_gains_unitaires * situations[k].gain_unitaire - situations[k].nb_pertes * situations[k].perte)}$€$)$
					<br>${texte_en_couleur(`Globalement ${situations[k].prenom} ${situations[k].bilan[3]} $${situations[k].bilan[4]}$€`)} 

					`
				});
			};

			switch (liste_type_de_questions[i]) {
				case 0:
					texte = `${enonces[0].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
						texte += `             `
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[0].correction}`;
					};
					break;
			};

			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);

	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
	//this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
};


/**
 * Caculer la valeur d'une expression littérale de degré 1 à une inconnue
 * 5L13-5
 * @author Sébastien Lozano forking 5L13 of Rémi Angot
 */
function Calculer_la_valeur_d_une_expression_litterale_deg1_inc1() {
	Calculer_la_valeur_d_une_expression_litterale.call(this)
	this.version = "5L13-5";
	this.titre = "Calculer la valeur d'une expression littérale de degré 1 à 1 inconnue";
	this.nb_questions = 2;

}


/** 
 * * Justifier qu'un tableau est un tableau de proportionnalité ou non
 * * 5P10
 * @author Sébastien Lozano
 */

function Tableaux_et_proportionnalite() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.sup = 1;
	if (this.debug) {
		this.nb_questions = 6;
	} else {
		this.nb_questions = 4;
	};

	this.titre = "Tableaux et proportionnalité.";
	this.consigne = `Dire si les tableaux suivants sont de tableaux de proportionnalité. Justifier.`;

	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//this.nb_questions_modifiable = false;
	sortie_html ? this.spacing = 2.5 : this.spacing = 1.5;
	sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

	let type_de_questions_disponibles;

	this.nouvelle_version = function (numero_de_l_exercice) {
		if (this.debug) {
			type_de_questions_disponibles = [0, 1, 2, 3, 4, 5];
		} else {
			//type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);
			type_de_questions_disponibles = [choice([0, 1]), 2, choice([3, 4]), 5];
			type_de_questions_disponibles = shuffle(type_de_questions_disponibles);
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		//let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {

			let n1 = randint(5, 9);
			let n2 = randint(5, 9, [n1]);
			let n3 = randint(5, 9, [n1, n2]);
			let coeff = randint(2, 9);
			let coeff_soust = randint(2, 4);

			// pour les décimaux seulement en demis
			let u1 = randint(1, 9);
			let ci1 = choice([0, 5]);
			let u2 = randint(1, 9);
			let ci2 = choice([0, 5]);
			let u3 = randint(1, 9);
			let ci3 = choice([0, 5]);

			while (ci1 == 0 && ci2 == 0 && ci3 == 0) {
				ci1 = choice([0, 5]);
				ci2 = choice([0, 5]);
				ci3 = choice([0, 5]);
			};

			// une fonction pour la justification
			function justifications_OK(n1, n2, n3, coeff, sens) {
				let sortie;
				switch (sens) {
					case 'L1L2':
						sortie = `$\\dfrac{\\textcolor{blue}{${tex_nombre(n1)}}}{\\textcolor{red}{${tex_nombre(n1 * coeff)}}} = \\dfrac{\\textcolor{blue}{${tex_nombre(n2)}}}{\\textcolor{red}{${tex_nombre(n2 * coeff)}}} = \\dfrac{\\textcolor{blue}{${tex_nombre(n3)}}}{\\textcolor{red}{${tex_nombre(n3 * coeff)}}}$`;
						break;
					case 'L2L1':
						sortie = `$\\dfrac{\\textcolor{red}{${tex_nombre(n1 * coeff)}}}{\\textcolor{blue}{${tex_nombre(n1)}}} = \\dfrac{\\textcolor{red}{${tex_nombre(n2 * coeff)}}}{\\textcolor{blue}{${tex_nombre(n2)}}} = \\dfrac{\\textcolor{red}{${tex_nombre(n3 * coeff)}}}{\\textcolor{blue}{${tex_nombre(n3)}}}$`;
						break;
				};
				return sortie;
			};

			// une fonction pour la justification sens1
			function justifications_KO(n1, n2, n3, coeff, operation, sens) {
				let sortie;
				let isEq = function (n1, n2, coeff) {
					if (calcul(n1 / (n1 + coeff)) == calcul(n2 / (n2 + coeff))) {
						return `=`;
					} else {
						return `\\neq`;
					};
				};
				let color1, color2;
				switch (sens) {
					case 'L1L2':
						color1 = 'red';
						color2 = 'blue';
						break;
					case 'L2L1':
						color1 = 'blue';
						color2 = 'red';
						break;
				};
				switch (operation) {
					case '+':
						sortie = `$\\dfrac{\\textcolor{${color2}}{${tex_nombre(n1)}}}{\\textcolor{${color1}}{${tex_nombre(n1 + coeff)}}}`;
						sortie += isEq(n1, n2, coeff);
						sortie += `\\dfrac{\\textcolor{${color2}}{${tex_nombre(n2)}}}{\\textcolor{${color1}}{${tex_nombre(n2 + coeff)}}}`;
						sortie += isEq(n2, n3, coeff);
						sortie += `\\dfrac{\\textcolor{${color2}}{${tex_nombre(n3)}}}{\\textcolor{${color1}}{${tex_nombre(n3 + coeff)}}}$`;
						break;
					case '-':
						sortie = `$\\dfrac{\\textcolor{${color2}}{${tex_nombre(n1)}}}{\\textcolor{${color1}}{${tex_nombre(n1 - coeff)}}}`;
						sortie += isEq(n1, n2, coeff);
						sortie += `\\dfrac{\\textcolor{${color2}}{${tex_nombre(n2)}}}{\\textcolor{${color1}}{${tex_nombre(n2 - coeff)}}}`;
						sortie += isEq(n2, n3, coeff);
						sortie += `\\dfrac{\\textcolor{${color2}}{${tex_nombre(n3)}}}{\\textcolor{${color1}}{${tex_nombre(n3 - coeff)}}}$`;
						break;
				};
				return sortie;
			};


			// pour les situations, autant de situations que de cas dans le switch !
			let situations = [
				{//case 0 --> multiplication ligne1 vers ligne2
					tableau: tab_C_L(
						[`\\phantom{000}` + n1 + `\\phantom{000}`, `\\phantom{000}` + n2 + `\\phantom{000}`, `\\phantom{000}` + n3 + `\\phantom{000}`],
						[n1 * coeff], [n2 * coeff, n3 * coeff]
					),
					justification_L1_L2: justifications_OK(n1, n2, n3, coeff, 'L1L2'),
					justification_L2_L1: justifications_OK(n1, n2, n3, coeff, 'L2L1'),
					isProportionnel: texte_en_couleur_et_gras(`C'est donc un tableau de proportionnalité.`),
					areEgaux: `égaux`,

				},
				{//case 1 --> multiplication ligne1 vers ligne2 Décimaux
					tableau: tab_C_L(
						[`\\phantom{000}` + tex_nombre(u1 + ci1 / 10) + `\\phantom{000}`, `\\phantom{000}` + tex_nombre(u2 + ci2 / 10) + `\\phantom{000}`, `\\phantom{000}` + tex_nombre(u3 + ci3 / 10) + `\\phantom{000}`],
						[tex_nombre((u1 + ci1 / 10) * coeff)], [tex_nombre((u2 + ci2 / 10) * coeff), tex_nombre((u3 + ci3 / 10) * coeff)]
					),
					justification_L1_L2: justifications_OK(u1 + ci1 / 10, u2 + ci2 / 10, u3 + ci3 / 10, coeff, 'L1L2'),
					justification_L2_L1: justifications_OK(u1 + ci1 / 10, u2 + ci2 / 10, u3 + ci3 / 10, coeff, 'L2L1'),
					isProportionnel: texte_en_couleur_et_gras(`C'est donc un tableau de proportionnalité.`),
					areEgaux: `égaux`,

				},
				{//case 2 --> division ligne1 vers ligne2
					tableau: tab_C_L(
						[`\\phantom{000}` + n1 * coeff + `\\phantom{000}`, `\\phantom{000}` + n2 * coeff + `\\phantom{000}`, `\\phantom{000}` + n3 * coeff + `\\phantom{000}`],
						[n1], [n2, n3]
					),
					justification_L1_L2: justifications_OK(n1 * coeff, n2 * coeff, n3 * coeff, 1 / coeff, 'L1L2'),
					justification_L2_L1: justifications_OK(n1 * coeff, n2 * coeff, n3 * coeff, 1 / coeff, 'L2L1'),
					isProportionnel: texte_en_couleur_et_gras(`C'est donc un tableau de proportionnalité.`),
					areEgaux: `égaux`,

				},
				{//case 3 --> addition ligne1 vers ligne2
					tableau: tab_C_L(
						[`\\phantom{000}` + n1 + `\\phantom{000}`, `\\phantom{000}` + n2 + `\\phantom{000}`, `\\phantom{000}` + n3 + `\\phantom{000}`],
						[n1 + coeff], [n2 + coeff, n3 + coeff]
					),
					justification_L1_L2: justifications_KO(n1, n2, n3, coeff, '+', 'L1L2'),
					justification_L2_L1: justifications_KO(n1 + coeff, n2 + coeff, n3 + coeff, -coeff, '+', 'L2L1'),
					isProportionnel: texte_en_couleur_et_gras(`Ce n'est donc pas un tableau de proportionnalité.`),
					areEgaux: `différents`,
				},
				{//case 4 --> addition ligne1 vers ligne2 Décimaux
					tableau: tab_C_L(
						[`\\phantom{000}` + tex_nombre(u1 + ci1 / 10) + `\\phantom{000}`, `\\phantom{000}` + tex_nombre(u2 + ci2 / 10) + `\\phantom{000}`, `\\phantom{000}` + tex_nombre(u3 + ci3 / 10) + `\\phantom{000}`],
						[tex_nombre((u1 + ci1 / 10) + coeff)], [tex_nombre((u2 + ci2 / 10) + coeff), tex_nombre((u3 + ci3 / 10) + coeff)]
					),
					justification_L1_L2: justifications_KO(u1 + ci1 / 10, u2 + ci2 / 10, u3 + ci3 / 10, coeff, '+', 'L1L2'),
					justification_L2_L1: justifications_KO(u1 + ci1 / 10, u2 + ci2 / 10, u3 + ci3 / 10, coeff, '+', 'L2L1'),
					isProportionnel: texte_en_couleur_et_gras(`Ce n'est donc pas un tableau de proportionnalité.`),
					areEgaux: `différents`,

				},
				{//case 5 --> soustraction ligne1 vers ligne2
					tableau: tab_C_L(
						[`\\phantom{000}` + n1 + `\\phantom{000}`, `\\phantom{000}` + n2 + `\\phantom{000}`, `\\phantom{000}` + n3 + `\\phantom{000}`],
						[n1 - coeff_soust], [n2 - coeff_soust, n3 - coeff_soust]
					),
					justification_L1_L2: justifications_KO(n1, n2, n3, coeff_soust, '-', 'L1L2'),
					justification_L2_L1: justifications_KO(n1 - coeff_soust, n2 - coeff_soust, n3 - coeff_soust, -coeff_soust, '-', 'L2L1'),
					isProportionnel: texte_en_couleur_et_gras(`Ce n'est donc pas un tableau de proportionnalité.`),
					areEgaux: `différents`,
				},
			];

			let enonces = [];
			for (let k = 0; k < situations.length; k++) {
				enonces.push({
					enonce: `					
					${situations[k].tableau}				
					`,
					question: ``,
					correction: `
					Pour déterminer si c'est un tableau de proportionnalité, il suffit de comparer les quotients d'un nombre de la première ligne par le nombre correspondant de la seconde ligne ou inversement.
					<br> Soit ${situations[k].justification_L1_L2}, on constate qu'ils sont ${situations[k].areEgaux}.
					<br>Ou bien ${situations[k].justification_L2_L1}, on constate aussi qu'ils sont ${situations[k].areEgaux}.
					<br>${situations[k].isProportionnel}
					`
				});
			};

			// autant de case que d'elements dans le tableau des situations
			switch (liste_type_de_questions[i]) {
				case 0:
					texte = `${enonces[0].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
						texte += `             `
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[0].correction}`;
					};
					break;
				case 1:
					texte = `${enonces[1].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[1].correction}`;
					};
					break;
				case 2:
					texte = `${enonces[2].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[2].correction}`;
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[2].correction}`;
					};
					break;
				case 3:
					texte = `${enonces[3].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[3].correction}`;
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[3].correction}`;
					};
					break;
				case 4:
					texte = `${enonces[4].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[4].correction}`;
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[4].correction}`;
					};
					break;
				case 5:
					texte = `${enonces[5].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[5].correction}`;
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[5].correction}`;
					};
					break;
			};

			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);

	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
	//this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
};

/** 
 * * Tableaux et pourcentages
 * * 5N11-pere de 5N11-1 et 5N11-2
 * * publication initiale le 08/2020
 * * modification le 25/11/2020 pour ajouter des paramétrages
 * * modification le 27/11/2020 ajout de la modulation de la demande
 * @author Sébastien Lozano
 */

function Tableaux_et_pourcentages() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.sup = 1; // nature du coefficient entre les pourcentages, entier/decimal
	this.sup2 = 1; //nombre de colonnes
	if (this.debug) {
		this.nb_questions = 1;
	} else {
		this.nb_questions = 1;
	};
	if (this.exo == '5N11-1') { // prix constant
		this.titre = "Tableaux et pourcentages - prix constant";
		this.consigne = `Compléter le tableau suivant. Le prix est fixe.`;
	} else if (this.exo == '5N11-2') { // pourcentage constant
		this.titre = "Tableaux et pourcentages - pourcentage constant";
		this.consigne = `Compléter le tableau suivant. Le pourcentage est fixe.`;
	} else {
		this.titre = "Tableaux et pourcentages";
		this.consigne = `Compléter le tableau suivant.`;
	};

	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.nb_questions_modifiable = false;
	// sortie_html? this.spacing = 2.5 : this.spacing = 1.5; 
	// sortie_html? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

	this.correction_detaillee_disponible = true;

	let type_de_questions_disponibles;

	this.nouvelle_version = function (numero_de_l_exercice) {
		if (this.debug) {
			if (this.sup2 == 1) {
				type_de_questions_disponibles = [0];
			};
			if (this.sup2 == 2) {
				type_de_questions_disponibles = [1];
			};
			if (this.sup2 == 3) {
				type_de_questions_disponibles = [2];
			};
			if (this.sup2 == 4) {
				type_de_questions_disponibles = [3];
			};
			if (this.sup3) {
				type_de_questions_disponibles = [4];
			};
		} else {
			if (this.sup2 == 1) {
				type_de_questions_disponibles = [0];
			};
			if (this.sup2 == 2) {
				type_de_questions_disponibles = [1];
			};
			if (this.sup2 == 3) {
				type_de_questions_disponibles = [2];
			};
			if (this.sup2 == 4) {
				type_de_questions_disponibles = [3];
			};
			if (this.sup3) {
				type_de_questions_disponibles = [4];
			};
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées		

		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			// une fonction pour les textes de correction
			/**
			 * @param {string} type // ce qui est donné, remise en pourcentage; Montant de la remise ou Nouveau prix
			 * @param {object} remise_init //remise initiale deux propriétés nb sous forme numerique et str sous forme de chaine
			 * @param {object} remise //remise effective deux propriétés nb sous forme numerique et str sous forme de codageHauteurTriangle
			 * @param {number} prix
			 */
			function justifCorrType(type, remise_init, remise, prix) {
				let sortie = ``;
				switch (type) {
					case 'pourcentage':
						sortie = `-- L'énoncé indique le montant pour une remise de $${remise_init.str}$ du prix initial or $${tex_nombre(remise.nb / remise_init.nb)} \\times ${remise_init.str} = ${remise.str}$.<br>
						Donc pour une remise de $${remise.str}$ du prix initial, le montant de la remise sera $${tex_nombre(remise.nb / remise_init.nb)}$ fois celui de la remise de $${remise_init.str}$ du prix initial,<br>
						d'où le calul pour le montant de la remise : $${mise_en_evidence(`${tex_prix(prix * remise_init.nb / 100)} \\times ${tex_nombre(remise.nb / remise_init.nb)} = ${tex_prix(prix * remise.nb / 100)}`)}$.<br>
						Et celui pour le nouveau prix : $${mise_en_evidence(`${tex_prix(prix)}-${tex_prix(prix * remise.nb / 100)} = ${tex_prix(prix - prix * remise.nb / 100)}`)}$.<br><br>
						Mais on peut aussi calculer directement le prix réduit en faisant :<br>
						$${mise_en_evidence(`${tex_prix(prix)} \\times (100\\% - ${remise.str}) = ${tex_prix(prix)} \\times ${100 - remise.nb}\\% = ${tex_prix(prix)} \\times ${tex_nombre(calcul(1 - remise.nb / 100))} = ${tex_prix(prix * calcul(1 - remise.nb / 100))}`)}$
						`;
						break;
					case 'remise':
						sortie = `-- L'énoncé indique $${tex_prix(prix * remise.nb / 100)}$ € de remise pour un montant de $${tex_prix(prix)}$ €<br>
						d'où le calcul pour le pourcentage de remise : $${mise_en_evidence(`${tex_prix(prix * remise.nb / 100)} \\div ${tex_prix(prix)} = ${tex_nombrec(remise.nb / 100)} = ${remise.str}`)}$.<br>
						Et celui pour le nouveau prix : $${mise_en_evidence(`${tex_prix(prix)}-${tex_prix(prix * remise.nb / 100)} = ${tex_prix(prix - prix * remise.nb / 100)}`)}$.`;

						break;
					case 'nouveau_prix':
						sortie = `-- L'énoncé indique un nouveau prix de $${tex_prix(prix - prix * remise.nb / 100)}$ € pour un montant de $${tex_prix(prix)}$ €<br>
						d'où le calcul pour le nouveau prix : $${mise_en_evidence(`${tex_prix(prix)} - ${tex_prix(prix - prix * remise.nb / 100)} = ${tex_prix(prix * remise.nb / 100)}`)}$.<br>
						Et celui pour le pourcentage de remise : $${mise_en_evidence(`${tex_prix(prix * remise.nb / 100)} \\div ${tex_prix(prix)} = ${tex_nombrec(remise.nb / 100)} = ${remise.str}`)}$.`;
						break;
					case 'pourcentage_constant':
						sortie = `-- L'énoncé indique un prix de $${tex_prix(prix)}$ € et une remise de $${remise.str}$ du prix initial<br>
						d'où le calul pour le montant de la remise : $${mise_en_evidence(`${tex_prix(prix)} \\times ${remise.str} = ${tex_prix(prix)} \\times ${tex_nombre(remise.nb / 100)} = ${tex_prix(prix * remise.nb / 100)}`)}$.<br>
						Et celui pour le nouveau prix : $${mise_en_evidence(`${tex_prix(prix)}-${tex_prix(prix * remise.nb / 100)} = ${tex_prix(prix - prix * remise.nb / 100)}`)}$.<br><br>
						Mais on peut aussi calculer directement le prix réduit en faisant :<br>
						$${mise_en_evidence(`${tex_prix(prix)} \\times (100\\% - ${remise.str}) = ${tex_prix(prix)} \\times ${100 - remise.nb}\\% = ${tex_prix(prix)} \\times ${tex_nombre(calcul(1 - remise.nb / 100))} = ${tex_prix(prix * calcul(1 - remise.nb / 100))}`)}$
						`;
						break;
				};
				return sortie;
			};

			let choix_prix, prix1, prix2, prix3, prix4, prix5, prix, remises;
			do {
				choix_prix = randint(150, 300);
			} while (choix_prix % 5 != 0)

			if (this.exo == '5N11-1') { // prix constant
				prix = [choix_prix, choix_prix, choix_prix, choix_prix, choix_prix]
			} else if (this.exo = '5N11-2') {
				prix1 = randint(150, 300);
				prix2 = randint(150, 300, [prix1]);
				prix3 = randint(150, 300, [prix1, prix2]);
				prix4 = randint(150, 300, [prix1, prix2, prix3]);
				prix5 = randint(150, 300, [prix1, prix2, prix3, prix4]);
				prix = [prix1, prix2, prix3, prix4, prix5]
			}

			if (this.sup == 1) {//coeff entier
				if (this.exo == '5N11-1') { // prix constant
					remises = choice([
						[{ str: '5\\%', nb: 5 }, { str: '10\\%', nb: 10 }, { str: '15\\%', nb: 15 }, { str: '20\\%', nb: 20 }, { str: '25\\%', nb: 25 }, { str: '30\\%', nb: 30 }],
						[{ str: '5\\%', nb: 5 }, { str: '35\\%', nb: 35 }, { str: '45\\%', nb: 45 }, { str: '55\\%', nb: 55 }, { str: '65\\%', nb: 65 }, { str: '75\\%', nb: 75 }],
						[{ str: '5\\%', nb: 5 }, { str: '15\\%', nb: 15 }, { str: '25\\%', nb: 25 }, { str: '35\\%', nb: 35 }, { str: '45\\%', nb: 45 }, { str: '55\\%', nb: 55 }],
						[{ str: '5\\%', nb: 5 }, { str: '30\\%', nb: 30 }, { str: '40\\%', nb: 40 }, { str: '50\\%', nb: 50 }, { str: '60\\%', nb: 60 }, { str: '70\\%', nb: 70 }],
						[{ str: '5\\%', nb: 5 }, { str: '25\\%', nb: 25 }, { str: '40\\%', nb: 40 }, { str: '45\\%', nb: 45 }, { str: '50\\%', nb: 50 }, { str: '55\\%', nb: 55 }],
						[{ str: '5\\%', nb: 5 }, { str: '45\\%', nb: 45 }, { str: '50\\%', nb: 50 }, { str: '55\\%', nb: 55 }, { str: '60\\%', nb: 60 }, { str: '65\\%', nb: 65 }],
						[{ str: '5\\%', nb: 5 }, { str: '50\\%', nb: 50 }, { str: '55\\%', nb: 55 }, { str: '60\\%', nb: 60 }, { str: '65\\%', nb: 65 }, { str: '70\\%', nb: 70 }],
						[{ str: '10\\%', nb: 10 }, { str: '20\\%', nb: 20 }, { str: '30\\%', nb: 30 }, { str: '40\\%', nb: 40 }, { str: '50\\%', nb: 50 }, { str: '60\\%', nb: 60 }],
						[{ str: '10\\%', nb: 10 }, { str: '30\\%', nb: 30 }, { str: '40\\%', nb: 40 }, { str: '50\\%', nb: 50 }, { str: '60\\%', nb: 60 }, { str: '70\\%', nb: 70 }],
						[{ str: '10\\%', nb: 10 }, { str: '40\\%', nb: 40 }, { str: '50\\%', nb: 50 }, { str: '60\\%', nb: 60 }, { str: '70\\%', nb: 70 }, { str: '80\\%', nb: 80 }]
					]);
				} else if (this.exo == '5N11-2') { // pourcentage constant
					remises = choice([
						[{ str: '5\\%', nb: 5 }, { str: '5\\%', nb: 5 }, { str: '5\\%', nb: 5 }, { str: '5\\%', nb: 5 }, { str: '5\\%', nb: 5 }, { str: '5\\%', nb: 5 }],
						[{ str: '10\\%', nb: 10 }, { str: '10\\%', nb: 10 }, { str: '10\\%', nb: 10 }, { str: '10\\%', nb: 10 }, { str: '10\\%', nb: 10 }, { str: '10\\%', nb: 10 }],
						[{ str: '15\\%', nb: 15 }, { str: '15\\%', nb: 15 }, { str: '15\\%', nb: 15 }, { str: '15\\%', nb: 15 }, { str: '15\\%', nb: 15 }, { str: '15\\%', nb: 15 }],
						[{ str: '20\\%', nb: 20 }, { str: '20\\%', nb: 20 }, { str: '20\\%', nb: 20 }, { str: '20\\%', nb: 20 }, { str: '20\\%', nb: 20 }, { str: '20\\%', nb: 20 }],
						[{ str: '25\\%', nb: 25 }, { str: '25\\%', nb: 25 }, { str: '25\\%', nb: 25 }, { str: '25\\%', nb: 25 }, { str: '25\\%', nb: 25 }, { str: '25\\%', nb: 25 }],
						[{ str: '30\\%', nb: 30 }, { str: '30\\%', nb: 30 }, { str: '30\\%', nb: 30 }, { str: '30\\%', nb: 30 }, { str: '30\\%', nb: 30 }, { str: '30\\%', nb: 30 }],
						[{ str: '35\\%', nb: 35 }, { str: '35\\%', nb: 35 }, { str: '35\\%', nb: 35 }, { str: '35\\%', nb: 35 }, { str: '35\\%', nb: 35 }, { str: '35\\%', nb: 35 }],
						[{ str: '40\\%', nb: 40 }, { str: '40\\%', nb: 40 }, { str: '40\\%', nb: 40 }, { str: '40\\%', nb: 40 }, { str: '40\\%', nb: 40 }, { str: '40\\%', nb: 40 }],
						[{ str: '45\\%', nb: 45 }, { str: '45\\%', nb: 45 }, { str: '45\\%', nb: 45 }, { str: '45\\%', nb: 45 }, { str: '45\\%', nb: 45 }, { str: '45\\%', nb: 45 }],
						[{ str: '50\\%', nb: 50 }, { str: '50\\%', nb: 50 }, { str: '50\\%', nb: 50 }, { str: '50\\%', nb: 50 }, { str: '50\\%', nb: 50 }, { str: '50\\%', nb: 50 }],
						[{ str: '55\\%', nb: 55 }, { str: '55\\%', nb: 55 }, { str: '55\\%', nb: 55 }, { str: '55\\%', nb: 55 }, { str: '55\\%', nb: 55 }, { str: '55\\%', nb: 55 }],
						[{ str: '60\\%', nb: 60 }, { str: '60\\%', nb: 60 }, { str: '60\\%', nb: 60 }, { str: '60\\%', nb: 60 }, { str: '60\\%', nb: 60 }, { str: '60\\%', nb: 60 }],
						[{ str: '65\\%', nb: 65 }, { str: '65\\%', nb: 65 }, { str: '65\\%', nb: 65 }, { str: '65\\%', nb: 65 }, { str: '65\\%', nb: 65 }, { str: '65\\%', nb: 65 }],
						[{ str: '70\\%', nb: 70 }, { str: '70\\%', nb: 70 }, { str: '70\\%', nb: 70 }, { str: '70\\%', nb: 70 }, { str: '70\\%', nb: 70 }, { str: '70\\%', nb: 70 }],
						[{ str: '75\\%', nb: 75 }, { str: '75\\%', nb: 75 }, { str: '75\\%', nb: 75 }, { str: '75\\%', nb: 75 }, { str: '75\\%', nb: 75 }, { str: '75\\%', nb: 75 }],
						[{ str: '80\\%', nb: 80 }, { str: '80\\%', nb: 80 }, { str: '80\\%', nb: 80 }, { str: '80\\%', nb: 80 }, { str: '80\\%', nb: 80 }, { str: '80\\%', nb: 80 }]
					]);
				};
			};
			if (this.sup == 2) {//coeff décimal
				if (this.exo == '5N11-1') { // prix constant
					remises = choice([
						[{ str: '10\\%', nb: 10 }, { str: '5\\%', nb: 5 }, { str: '15\\%', nb: 15 }, { str: '25\\%', nb: 25 }, { str: '35\\%', nb: 35 }, { str: '45\\%', nb: 45 }],
						[{ str: '50\\%', nb: 50 }, { str: '30\\%', nb: 30 }, { str: '10\\%', nb: 10 }, { str: '20\\%', nb: 20 }, { str: '40\\%', nb: 40 }, { str: '60\\%', nb: 60 }],
						[{ str: '20\\%', nb: 20 }, { str: '10\\%', nb: 10 }, { str: '50\\%', nb: 50 }, { str: '30\\%', nb: 30 }, { str: '40\\%', nb: 40 }, { str: '60\\%', nb: 60 }],
						[{ str: '40\\%', nb: 40 }, { str: '10\\%', nb: 10 }, { str: '5\\%', nb: 5 }, { str: '20\\%', nb: 20 }, { str: '50\\%', nb: 50 }, { str: '30\\%', nb: 30 }],
						[{ str: '80\\%', nb: 80 }, { str: '10\\%', nb: 10 }, { str: '50\\%', nb: 50 }, { str: '30\\%', nb: 30 }, { str: '40\\%', nb: 40 }, { str: '20\\%', nb: 20 }],
						[{ str: '10\\%', nb: 10 }, { str: '15\\%', nb: 15 }, { str: '25\\%', nb: 25 }, { str: '35\\%', nb: 35 }, { str: '45\\%', nb: 45 }, { str: '55\\%', nb: 55 }],
						[{ str: '50\\%', nb: 50 }, { str: '35\\%', nb: 35 }, { str: '10\\%', nb: 10 }, { str: '25\\%', nb: 25 }, { str: '40\\%', nb: 40 }, { str: '65\\%', nb: 65 }],
						[{ str: '20\\%', nb: 20 }, { str: '5\\%', nb: 5 }, { str: '50\\%', nb: 50 }, { str: '35\\%', nb: 35 }, { str: '40\\%', nb: 40 }, { str: '55\\%', nb: 55 }],
						[{ str: '40\\%', nb: 40 }, { str: '15\\%', nb: 15 }, { str: '5\\%', nb: 5 }, { str: '20\\%', nb: 20 }, { str: '30\\%', nb: 30 }, { str: '25\\%', nb: 25 }],
						[{ str: '80\\%', nb: 80 }, { str: '20\\%', nb: 20 }, { str: '55\\%', nb: 55 }, { str: '30\\%', nb: 30 }, { str: '40\\%', nb: 40 }, { str: '20\\%', nb: 20 }],
					]);
				} else if (this.exo == '5N11-2') { // pourcentage constant
					// remises = choice([
					// 	[{str:'10\\%',nb:10},{str:'5\\%',nb:5},{str:'15\\%',nb:15},{str:'25\\%',nb:25},{str:'35\\%',nb:35},{str:'45\\%',nb:45}],
					// 	[{str:'50\\%',nb:50},{str:'30\\%',nb:30},{str:'10\\%',nb:10},{str:'20\\%',nb:20},{str:'40\\%',nb:40},{str:'60\\%',nb:60}],
					// 	[{str:'20\\%',nb:20},{str:'10\\%',nb:10},{str:'50\\%',nb:50},{str:'30\\%',nb:30},{str:'40\\%',nb:40},{str:'60\\%',nb:60}],
					// 	[{str:'40\\%',nb:40},{str:'10\\%',nb:10},{str:'5\\%',nb:5},{str:'20\\%',nb:20},{str:'50\\%',nb:50},{str:'30\\%',nb:30}],
					// 	[{str:'80\\%',nb:80},{str:'10\\%',nb:10},{str:'50\\%',nb:50},{str:'30\\%',nb:30},{str:'40\\%',nb:40},{str:'20\\%',nb:20}],
					// 	[{str:'10\\%',nb:10},{str:'15\\%',nb:15},{str:'25\\%',nb:25},{str:'35\\%',nb:35},{str:'45\\%',nb:45},{str:'55\\%',nb:55}],
					// 	[{str:'50\\%',nb:50},{str:'35\\%',nb:35},{str:'10\\%',nb:10},{str:'25\\%',nb:25},{str:'40\\%',nb:40},{str:'65\\%',nb:65}],
					// 	[{str:'20\\%',nb:20},{str:'5\\%',nb:5},{str:'50\\%',nb:50},{str:'35\\%',nb:35},{str:'40\\%',nb:40},{str:'55\\%',nb:55}],
					// 	[{str:'40\\%',nb:40},{str:'15\\%',nb:15},{str:'5\\%',nb:5},{str:'20\\%',nb:20},{str:'30\\%',nb:30},{str:'25\\%',nb:25}],
					// 	[{str:'80\\%',nb:80},{str:'20\\%',nb:20},{str:'55\\%',nb:55},{str:'30\\%',nb:30},{str:'40\\%',nb:40},{str:'20\\%',nb:20}],		
					// ]);		
				};
			};

			// pour les situations, autant de situations que de cas dans le switch !
			let situations = [
				{//case 0 --> 1 colonne à remplir
					tableau: tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[1])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`], [
						remises[0].str, remises[1].str,
						tex_prix(prix[0] * remises[0].nb / 100), '',
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), '',
					]),
					tableau_corr: tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[1])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`], [
						remises[0].str, remises[1].str,
						tex_prix(prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[1] * remises[1].nb / 100)}`),
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[1] - prix[1] * remises[1].nb / 100)}`),
					]),
				},
				{//case 1 --> 2 colonnes à remplir
					tableau: tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[1]), tex_prix(prix[2])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`], [
						remises[0].str, remises[1].str, remises[2].str,
						tex_prix(prix[0] * remises[0].nb / 100), '', '',
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), '', '',
					]),
					tableau_corr: tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[1]), tex_prix(prix[2])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`], [
						remises[0].str, remises[1].str, remises[2].str,
						tex_prix(prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[1] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[2] * remises[2].nb / 100)}`),
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[1] - prix[1] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[2] - prix[2] * remises[2].nb / 100)}`),
					]),
				},
				{//case 2 --> 3 colonnes à remplir
					tableau: tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[1]), tex_prix(prix[2]), tex_prix(prix[3])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`], [
						remises[0].str, remises[1].str, remises[2].str, remises[3].str,
						tex_prix(prix[0] * remises[0].nb / 100), '', '', '',
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), '', '', '',
					]),
					tableau_corr: tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[1]), tex_prix(prix[2]), tex_prix(prix[3])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`], [
						remises[0].str, remises[1].str, remises[2].str, remises[3].str,
						tex_prix(prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[1] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[2] * remises[2].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[3] * remises[3].nb / 100)}`),
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[1] - prix[1] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[2] - prix[2] * remises[2].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[3] - prix[3] * remises[3].nb / 100)}`),
					]),
				},
				{//case 3 --> 4 colonnes à remplir
					tableau: tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[1]), tex_prix(prix[2]), tex_prix(prix[3]), tex_prix(prix[4])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`], [
						remises[0].str, remises[1].str, remises[2].str, remises[3].str, remises[4].str,
						tex_prix(prix[0] * remises[0].nb / 100), '', '', '', '',
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), '', '', '', '',
					]),
					tableau_corr: tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[1]), tex_prix(prix[2]), tex_prix(prix[3]), tex_prix(prix[4])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`], [
						remises[0].str, remises[1].str, remises[2].str, remises[3].str, remises[4].str,
						tex_prix(prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[1] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[2] * remises[2].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[3] * remises[3].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[4] * remises[4].nb / 100)}`),
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[1] - prix[1] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[2] - prix[2] * remises[2].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[3] - prix[3] * remises[3].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[4] - prix[4] * remises[4].nb / 100)}`),
					]),
				},
				{//case 4 --> 3 colonnes à remplir
					tableau: [],
					tableau_corr: [],
				},
			];

			let corrections;
			if (this.sup3) {
				let interieur_tableau_tableau_corr = choice([
					{
						tableau_case_4: [remises[0].str, remises[1].str, '', '',
						tex_prix(prix[0] * remises[0].nb / 100), '', `${tex_prix(prix[0] * remises[2].nb / 100)}`, '',
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), '', '', `${tex_prix(prix[0] - prix[0] * remises[3].nb / 100)}`],
						tableau_case_4_corr: [remises[0].str, remises[1].str, mise_en_evidence(remises[2].str), mise_en_evidence(remises[3].str),
						tex_prix(prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[0] * remises[1].nb / 100)}`), `${tex_prix(prix[0] * remises[2].nb / 100)}`, mise_en_evidence(`${tex_prix(prix[0] * remises[3].nb / 100)}`),
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[2].nb / 100)}`), `${tex_prix(prix[0] - prix[0] * remises[3].nb / 100)}`],
						corrections: `${justifCorrType('pourcentage', remises[0], remises[1], prix[0])}<br><br>${justifCorrType('remise', remises[0], remises[2], prix[0])}<br><br>${justifCorrType('nouveau_prix', remises[0], remises[3], prix[0])}`
					},
					{
						tableau_case_4: [remises[0].str, remises[1].str, '', '',
						tex_prix(prix[0] * remises[0].nb / 100), '', '', `${tex_prix(prix[0] * remises[3].nb / 100)}`,
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), '', `${tex_prix(prix[0] - prix[0] * remises[2].nb / 100)}`, ''],
						tableau_case_4_corr: [remises[0].str, remises[1].str, mise_en_evidence(remises[2].str), mise_en_evidence(remises[3].str),
						tex_prix(prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[0] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[0] * remises[2].nb / 100)}`), `${tex_prix(prix[0] * remises[3].nb / 100)}`,
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[1].nb / 100)}`), `${tex_prix(prix[0] - prix[0] * remises[2].nb / 100)}`, mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[3].nb / 100)}`)],
						corrections: `${justifCorrType('pourcentage', remises[0], remises[1], prix[0])}<br><br>${justifCorrType('nouveau_prix', remises[0], remises[2], prix[0])}<br><br>${justifCorrType('remise', remises[0], remises[3], prix[0])}`
					},
					{
						tableau_case_4: [remises[0].str, '', remises[2].str, '',
						tex_prix(prix[0] * remises[0].nb / 100), `${tex_prix(prix[0] * remises[1].nb / 100)}`, '', '',
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), '', '', `${tex_prix(prix[0] - prix[0] * remises[3].nb / 100)}`],
						tableau_case_4_corr: [remises[0].str, mise_en_evidence(remises[1].str), remises[2].str, mise_en_evidence(remises[3].str),
						tex_prix(prix[0] * remises[0].nb / 100), `${tex_prix(prix[0] * remises[1].nb / 100)}`, mise_en_evidence(`${tex_prix(prix[0] * remises[2].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[0] * remises[3].nb / 100)}`),
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[2].nb / 100)}`), `${tex_prix(prix[0] - prix[0] * remises[3].nb / 100)}`],
						corrections: `${justifCorrType('remise', remises[0], remises[1], prix[0])}<br><br>${justifCorrType('pourcentage', remises[0], remises[2], prix[0])}<br><br>${justifCorrType('nouveau_prix', remises[0], remises[3], prix[0])}`
					},
					{
						tableau_case_4: [remises[0].str, '', '', remises[3].str,
						tex_prix(prix[0] * remises[0].nb / 100), `${tex_prix(prix[0] * remises[1].nb / 100)}`, '', '',
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), '', `${tex_prix(prix[0] - prix[0] * remises[2].nb / 100)}`, ''],
						tableau_case_4_corr: [remises[0].str, mise_en_evidence(remises[1].str), mise_en_evidence(remises[2].str), remises[3].str,
						tex_prix(prix[0] * remises[0].nb / 100), `${tex_prix(prix[0] * remises[1].nb / 100)}`, mise_en_evidence(`${tex_prix(prix[0] * remises[2].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[0] * remises[3].nb / 100)}`),
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[1].nb / 100)}`), `${tex_prix(prix[0] - prix[0] * remises[2].nb / 100)}`, mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[3].nb / 100)}`)],
						corrections: `${justifCorrType('remise', remises[0], remises[1], prix[0])}<br><br>${justifCorrType('nouveau_prix', remises[0], remises[2], prix[0])}<br><br>${justifCorrType('pourcentage', remises[0], remises[3], prix[0])}`
					},
					{
						tableau_case_4: [remises[0].str, '', remises[2].str, '',
						tex_prix(prix[0] * remises[0].nb / 100), '', '', `${tex_prix(prix[0] * remises[3].nb / 100)}`,
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), `${tex_prix(prix[0] - prix[0] * remises[1].nb / 100)}`, '', ''],
						tableau_case_4_corr: [remises[0].str, mise_en_evidence(remises[1].str), remises[2].str, mise_en_evidence(remises[3].str),
						tex_prix(prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[0] * remises[1].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[0] * remises[2].nb / 100)}`), `${tex_prix(prix[0] * remises[3].nb / 100)}`,
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), `${tex_prix(prix[0] - prix[0] * remises[1].nb / 100)}`, mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[2].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[3].nb / 100)}`)],
						corrections: `${justifCorrType('nouveau_prix', remises[0], remises[1], prix[0])}<br><br>${justifCorrType('pourcentage', remises[0], remises[2], prix[0])}<br><br>${justifCorrType('remise', remises[0], remises[3], prix[0])}`
					},
					{
						tableau_case_4: [remises[0].str, '', '', remises[3].str,
						tex_prix(prix[0] * remises[0].nb / 100), '', `${tex_prix(prix[0] * remises[2].nb / 100)}`, '',
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), `${tex_prix(prix[0] - prix[0] * remises[1].nb / 100)}`, '', ''],
						tableau_case_4_corr: [remises[0].str, mise_en_evidence(remises[1].str), mise_en_evidence(remises[2].str), remises[3].str,
						tex_prix(prix[0] * remises[0].nb / 100), mise_en_evidence(`${tex_prix(prix[0] * remises[1].nb / 100)}`), `${tex_prix(prix[0] * remises[2].nb / 100)}`, mise_en_evidence(`${tex_prix(prix[0] * remises[3].nb / 100)}`),
						tex_prix(prix[0] - prix[0] * remises[0].nb / 100), `${tex_prix(prix[0] - prix[0] * remises[1].nb / 100)}`, mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[2].nb / 100)}`), mise_en_evidence(`${tex_prix(prix[0] - prix[0] * remises[3].nb / 100)}`)],
						corrections: `${justifCorrType('nouveau_prix', remises[0], remises[1], prix[0])}<br><br>${justifCorrType('remise', remises[0], remises[2], prix[0])}<br><br>${justifCorrType('pourcentage', remises[0], remises[3], prix[0])}`
					}
				]);

				let tableau_case_4 = tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[0]), tex_prix(prix[0]), tex_prix(prix[0])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`],
					interieur_tableau_tableau_corr.tableau_case_4
				);
				let tableau_case_4_corr = tab_C_L([`\\text{Prix en €}`, tex_prix(prix[0]), tex_prix(prix[0]), tex_prix(prix[0]), tex_prix(prix[0])], [`\\text{Remise en pourcentage}`, `\\text{Montant de la remise en €}`, `\\text{Nouveau prix en €}`],
					interieur_tableau_tableau_corr.tableau_case_4_corr
				);
				if (this.correction_detaillee) {
					corrections = interieur_tableau_tableau_corr.corrections;
					corrections += `<br><br>D'où le tableau complété :<br><br>`;
				} else {
					corrections = ``;
				};
				situations[4].tableau = tableau_case_4;
				situations[4].tableau_corr = tableau_case_4_corr;
			} else {
				let type_corr;
				if (this.exo == '5N11-1') {
					type_corr = 'pourcentage';
				};
				if (this.exo == '5N11-2') {
					type_corr = 'pourcentage_constant'
				};
				if (this.sup2 == 1 && this.correction_detaillee) {
					corrections = `${justifCorrType(type_corr, remises[0], remises[1], prix[1])}`;
					corrections += `<br><br>D'où le tableau complété :<br><br>`;
				} else if (this.sup2 == 2 && this.correction_detaillee) {
					corrections = `${justifCorrType(type_corr, remises[0], remises[1], prix[1])}<br><br>${justifCorrType(type_corr, remises[0], remises[2], prix[2])}`;
					corrections += `<br><br>D'où le tableau complété :<br><br>`;
				} else if (this.sup2 == 3 && this.correction_detaillee) {
					corrections = `${justifCorrType(type_corr, remises[0], remises[1], prix[1])}<br><br>${justifCorrType(type_corr, remises[0], remises[2], prix[2])}<br><br>${justifCorrType(type_corr, remises[0], remises[3], prix[3])}`;
					corrections += `<br><br>D'où le tableau complété :<br><br>`;
				} else if (this.sup2 == 4 && this.correction_detaillee) {
					corrections = `${justifCorrType(type_corr, remises[0], remises[1], prix[1])}<br><br>${justifCorrType(type_corr, remises[0], remises[2], prix[2])}<br><br>${justifCorrType(type_corr, remises[0], remises[3], prix[3])}<br><br>${justifCorrType(type_corr, remises[0], remises[4], prix[4])}`;
					corrections += `<br><br>D'où le tableau complété :<br><br>`;
				} else {
					corrections = ``;
				};
			};

			let enonces = [];
			for (let k = 0; k < situations.length; k++) {
				enonces.push({
					enonce: `					
					${situations[k].tableau}	
					`,
					question: ``,
					correction: `
					${corrections}
					${situations[k].tableau_corr}
					`
				});
			};

			// autant de case que d'elements dans le tableau des situations
			switch (liste_type_de_questions[i]) {
				case 0:
					texte = `${enonces[0].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
						texte += `             `
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[0].correction}`;
					};
					break;
				case 1:
					texte = `${enonces[1].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;
						texte += `             `
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[1].correction}`;
					};
					break;
				case 2:
					texte = `${enonces[2].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[2].correction}`;
						texte += `             `
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[2].correction}`;
					};
					break;
				case 3:
					texte = `${enonces[3].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[3].correction}`;
						texte += `             `
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[3].correction}`;
					};
					break;
				case 4:
					texte = `${enonces[4].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[4].correction}`;
						texte += `             `
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[4].correction}`;
					};
					break;
			};

			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);

	}
	if (this.exo == '5N11-1') { // prix constant
		this.besoin_formulaire_numerique = ['Le coefficient entre les pourcentages', 2, "1 : est entier\n2 : est décimal"];
		this.besoin_formulaire3_case_a_cocher = ["Modulation de ce qui est demandé"];
		this.besoin_formulaire2_numerique = ['Nombre de colonnes à remplir (fixé à 3 lorsque la case ci-dessous est cochée)', 4, "1 : une colonne\n2 : deux colonnes\n3 : trois colonnes\n4 : quatre colonnes"];
	};
	if (this.exo == '5N11-2') { // pourcentage
		this.besoin_formulaire2_numerique = ['Nombre de colonnes à remplir', 4, "1 : une colonne\n2 : deux colonnes\n3 : trois colonnes\n4 : quatre colonnes"];
	};



};

/** 
 * * Tableaux et pourcentages prix constant
 * * numéro de l'exo ex : 5N11-1 fils de 5N11-pere
 * * publication initiale le 25/11/2020 
 * @author Sébastien Lozano
 */

function Tableaux_et_pourcentages_prix_constant() {
	this.exo = `5N11-1`;
	Tableaux_et_pourcentages.call(this);
};

/** 
 * * Tableaux et pourcentages prix constant
 * * numéro de l'exo ex : 5N11-2 fils de 5N11-pere
 * * publication initiale le 28/11/2020 
 * @author Sébastien Lozano
 */
function Tableaux_et_pourcentages_pourcent_constant() {
	this.exo = `5N11-2`;
	Tableaux_et_pourcentages.call(this);
};

/** 
 * * Traduire la dépendance entre deux grandeurs par un tableau de valeurs et produire une formule.
 * * 5L10-4
 * @author Sébastien Lozano
 */

function Tableaux_et_fonction() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.sup = 1;
	if (this.debug) {
		this.nb_questions = 1;
	} else {
		this.nb_questions = 1;
	};

	this.titre = "Produire une formule à partir d'un tableau";
	this.consigne = ``;

	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//this.nb_questions_modifiable = false;
	sortie_html ? this.spacing = 2.5 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1;

	let type_de_questions_disponibles;

	this.nouvelle_version = function (numero_de_l_exercice) {
		if (this.debug) {
			type_de_questions_disponibles = [0];
		} else {
			//type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);      			
			type_de_questions_disponibles = [0];
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		//let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			let L1 = randint(3, 7);
			let L2 = L1 + 1;
			let L3 = L2 * 2;
			let L4 = L2 * 3;

			let cote_inconnu = choice(['L']);
			let cote_inconnu_corr;
			let cote_inconnu_corr_num;
			let cote_connu = randint(3, 7);

			let unites;
			let grand_L;
			let grand_L_num;
			let petit_l;
			let petit_l_num;
			let unite_grand_L;
			let unite_petit_l;
			let txt_corr;
			if (this.sup == 1) {//même unités
				unites = choice([['cm', 'cm'], ['m', 'm']]);
				grand_L = [`${L1}`, `${L2}`, `${L3}`, `${L4}`];
				grand_L_num = [`${L1}`, `${L2}`, `${L3}`, `${L4}`];
				petit_l = [`${cote_connu}`, ``, ``, ``];
				petit_l_num = [`${cote_connu}`, ``, ``, ``];
				unite_grand_L = unites[0];
				unite_petit_l = unites[1];
				cote_inconnu_corr = cote_inconnu;
				cote_inconnu_corr_num = `2` + cote_inconnu;
				txt_corr = `Les unités sont les mêmes il n'est donc pas necessaire de convertir.`;
			};
			if (this.sup == 2) {// unités différentes
				unites = choice([['cm', 'm'], ['m', 'cm']]);
				if (unites[0] == 'cm') {
					grand_L = [`${L1}`, `${L2}`, `${L3}`, `${L4}`];
					grand_L_num = [`${L1}`, `${L2}`, `${L3}`, `${L4}`];
					petit_l = [`${cote_connu}\\times 100`, ``, ``, ``];
					petit_l_num = [`${100 * cote_connu}`, ``, ``, ``];
					unite_grand_L = unites[0];
					unite_petit_l = unites[0];
					cote_inconnu_corr = cote_inconnu;
					cote_inconnu_corr_num = `2` + cote_inconnu;
					txt_corr = `Les unités sont différentes, pour plus de confort, nous pouvons les convertir dans la même unité, ici en cm.`;
				};
				if (unites[0] == 'm') {
					grand_L = [`${L1}\\times 100`, `${L2}\\times 100`, `${L3}\\times 100`, `${L4}\\times 100`];
					grand_L_num = [`${100 * L1}`, `${100 * L2}`, `${100 * L3}`, `${100 * L4}`];
					petit_l = [`${cote_connu}`, ``, ``, ``];
					petit_l_num = [`${cote_connu}`, ``, ``, ``];
					unite_grand_L = unites[1];
					unite_petit_l = unites[1];
					cote_inconnu_corr = cote_inconnu + `\\times 100`;
					cote_inconnu_corr_num = `200` + cote_inconnu;

					txt_corr = `Les unités sont différentes, pour plus de confort, nous pouvons les convertir dans la même unité, ici en cm.`;
				};

			};



			// on prépare la fenetre mathalea2d
			let fenetreMathalea2D = { xmin: -5, ymin: -3, xmax: 5, ymax: 3, pixelsParCm: 20, scale: 0.5 }
			let A = point(-4, 2);
			let B = point(-4, -2);
			let C = point(4, -2);
			let D = point(4, 2);
			let mesAppels = [
				polygone(A, B, C, D),
			];
			let figure = mathalea2d(
				fenetreMathalea2D,
				mesAppels
			);

			// une fonction pour moduler l'affichage d'une étape dans la correction
			function etapeCorrective(str, sup) {
				let sortie;
				if (sup == 1) {
					sortie = ``;
				};
				if (sup == 2) {
					sortie = str;
				};
				return sortie;

			};

			// pour les situations, autant de situations que de cas dans le switch !
			let situations = [
				{//case 0 -->
					unites: unites,
					cote_connu: cote_connu,
					cote_inconnu: cote_inconnu,
					tableau: tab_C_L([`\\text{Longueur $${cote_inconnu}$ du côté (en ${unites[0]})}`, `\\phantom{000}${L1}\\phantom{000}`, `\\phantom{000}${L2}\\phantom{000}`, `\\phantom{000}${L3}\\phantom{000}`, `\\phantom{000}${L4}\\phantom{000}`], [`\\text{Périmètre du rectangle (en $${unites[1]}$)}`],
						['', '', '', '']
					),
					calculL1: `Pour ${L1} ${unites[0]} : $2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L1} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${tex_nombre(grand_L_num[0])} \\; \\text{${unite_grand_L}}}`, this.sup)} \\color{black}{ \\;= ${tex_nombre(2 * petit_l_num[0] + 2 * grand_L_num[0])} \\; \\text{${unite_grand_L}}}$.`,
					calculL2: `Pour ${L2} ${unites[0]} : $2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L2} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${tex_nombre(grand_L_num[1])} \\; \\text{${unite_grand_L}}}`, this.sup)} \\color{black}{ \\;= ${tex_nombre(2 * petit_l_num[0] + 2 * grand_L_num[1])} \\; \\text{${unite_grand_L}}}$.`,
					calculL3: `Pour ${L3} ${unites[0]} : $2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L3} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${tex_nombre(grand_L_num[2])} \\; \\text{${unite_grand_L}}}`, this.sup)} \\color{black}{ \\;= ${tex_nombre(2 * petit_l_num[0] + 2 * grand_L_num[2])} \\; \\text{${unite_grand_L}}}$.`,
					calculL4: `Pour ${L4} ${unites[0]} : $2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L4} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${tex_nombre(grand_L_num[3])} \\; \\text{${unite_grand_L}}}`, this.sup)} \\color{black}{ \\;= ${tex_nombre(2 * petit_l_num[0] + 2 * grand_L_num[3])} \\; \\text{${unite_grand_L}}}$.`,
					tableau_corr: tab_C_L([`\\text{Longueur $${cote_inconnu_corr}$ du côté (en ${unite_grand_L})}`, `\\phantom{0}${grand_L[0]}\\phantom{0}`, `\\phantom{0}${grand_L[1]}\\phantom{0}`, `\\phantom{0}${grand_L[2]}\\phantom{0}`, `\\phantom{0}${grand_L[3]}\\phantom{0}`],
						[`\\text{Périmètre du rectangle (en ${unite_petit_l})}`],
						[
							`${tex_nombre(2 * petit_l_num[0] + 2 * grand_L_num[0])} \\; \\text{${unite_grand_L}}`,
							`${tex_nombre(2 * petit_l_num[0] + 2 * grand_L_num[1])} \\; \\text{${unite_grand_L}}`,
							`${tex_nombre(2 * petit_l_num[0] + 2 * grand_L_num[2])} \\; \\text{${unite_grand_L}}`,
							`${tex_nombre(2 * petit_l_num[0] + 2 * grand_L_num[3])} \\; \\text{${unite_grand_L}}`,
						],
					),
					tableau_corr_p1: tab_C_L([`\\text{Longueur $${cote_inconnu_corr}$ du côté (en $${unite_grand_L}$)}`, `\\phantom{000}${grand_L[0]}\\phantom{000}`, `\\phantom{000}${grand_L[1]}\\phantom{000}`],//,`\\phantom{000}${grand_L[2]}\\phantom{000}`,`\\phantom{000}${grand_L[3]}\\phantom{000}`],
						[`\\text{Périmètre du rectangle (en ${unite_petit_l})}`],
						[
							//`2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L1} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${tex_nombre(grand_L_num[0])} \\; \\text{${unite_grand_L}}}`,this.sup)} \\color{black}{ \\;= ${tex_nombre(2*petit_l_num[0]+2*grand_L_num[0])} \\; \\text{${unite_grand_L}}}`,
							//`2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L2} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${tex_nombre(grand_L_num[1])} \\; \\text{${unite_grand_L}}}`,this.sup)} \\color{black}{ \\;= ${tex_nombre(2*petit_l_num[0]+2*grand_L_num[1])} \\; \\text{${unite_grand_L}}}`,
							//`2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L3} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${grand_L_num[2]} \\; \\text{${unite_grand_L}}}`,this.sup)} \\color{black}{ \\;= ${tex_nombre(2*petit_l_num[0]+2*grand_L_num[2])} \\; \\text{${unite_grand_L}}}`,
							//`2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L4} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${grand_L_num[3]} \\; \\text{${unite_grand_L}}}`,this.sup)} \\color{black}{ \\;= ${tex_nombre(2*petit_l_num[0]+2*grand_L_num[3])} \\; \\text{${unite_grand_L}}}`,`2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L4} \\; \\text{${unites[0]}}} \\color{black}{ = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${grand_L_num[3]} \\; \\text{${unite_grand_L}} = \\color{black}{${tex_nombre(2*petit_l_num[0]+2*grand_L_num[3])} \\; \\text{${unite_grand_L}}}}`,
						],
					),
					tableau_corr_p2: tab_C_L([`\\text{Longueur $${cote_inconnu_corr}$ du côté (en $${unite_grand_L}$)}`, `\\phantom{000}${grand_L[2]}\\phantom{000}`, `\\phantom{000}${grand_L[3]}\\phantom{000}`],//,`\\phantom{000}${grand_L[2]}\\phantom{000}`,`\\phantom{000}${grand_L[3]}\\phantom{000}`],
						[`\\text{Périmètre du rectangle (en $${unite_petit_l}$)}`],
						[
							//`2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L1} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${grand_L_num[0]} \\; \\text{${unite_grand_L}}}`,this.sup)} \\color{black}{ \\;= ${tex_nombre(2*petit_l_num[0]+2*grand_L_num[0])} \\; \\text{${unite_grand_L}}}`,
							//`2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L2} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${grand_L_num[1]} \\; \\text{${unite_grand_L}}}`,this.sup)} \\color{black}{ \\;= ${tex_nombre(2*petit_l_num[0]+2*grand_L_num[1])} \\; \\text{${unite_grand_L}}}`,
							//`2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L3} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${tex_nombre(grand_L_num[2])} \\; \\text{${unite_grand_L}}}`,this.sup)} \\color{black}{ \\;= ${tex_nombre(2*petit_l_num[0]+2*grand_L_num[2])} \\; \\text{${unite_grand_L}}}`,
							//`2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${L4} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${tex_nombre(grand_L_num[3])} \\; \\text{${unite_grand_L}}}`,this.sup)} \\color{black}{ \\;= ${tex_nombre(2*petit_l_num[0]+2*grand_L_num[3])} \\; \\text{${unite_grand_L}}}`,
						],
					),
					secondeQ: `2\\times \\color{blue}{${cote_connu} \\; \\text{${unites[1]}}} \\color{black}{+2\\times} \\color{red}{${cote_inconnu} \\; \\text{${unites[0]}}} ${etapeCorrective(`\\color{black}{\\; = 2\\times} \\color{blue}{${petit_l_num[0]} \\; \\text{${unite_petit_l}}} \\color{black}{+2\\times} \\color{red}{${cote_inconnu_corr} \\; \\text{${unite_grand_L}}}`, this.sup)} \\color{black}{ \\;= ${tex_nombre(2 * petit_l_num[0])} + ${cote_inconnu_corr_num} \\; \\text{exprimé en ${unite_grand_L}}}`,
					intro: txt_corr,
					fig: figure,
				},
			];

			let enonces = [];
			let i_sous_question = 0;
			let i_sous_question_corr = 0;

			for (let k = 0; k < situations.length; k++) {
				enonces.push({
					enonce: `
					On considère le rectangle ci-dessous dont l'un des côtés mesure $${situations[k].cote_connu}$ $${unites[1]}$ et l'autre mesure $${situations[k].cote_inconnu}$ $${unites[0]}$.<br>
					${situations[k].fig}<br>
					${num_alpha(i_sous_question++)} Compléter le tableau suivant :<br><br>
					${situations[k].tableau}<br><br>
					${num_alpha(i_sous_question++)} Quelle formule permet de calculer le périmètre de ce rectangle en fonction de $${situations[k].cote_inconnu}$ ?								
					`,
					question: ``,
					correction: `
					${num_alpha(i_sous_question_corr++)} ${situations[k].intro}<br>
					Il y a plusieurs façons de calculer le périmètre d'un rectangle, par exemple : <br> $2\\times largeur + 2\\times Longueur$.<br>
					Ici l'un des côtés mesure toujours $\\textcolor{blue}{${petit_l[0]}}$ $${unite_petit_l}$<br>
					Calculons les périmètres pour chacune des valeurs données :<br>
					${situations[k].calculL1}<br>
					${situations[k].calculL2}<br>
					${situations[k].calculL3}<br>
					${situations[k].calculL4}<br>
					Nous pouvons alors remplir le tableau<br>
					${situations[k].tableau_corr}<br><br>
					${num_alpha(i_sous_question_corr++)} On peut généraliser le raisonnement des calculs du périmètre, et ainsi obtenir une formule.<br>
					$${situations[k].secondeQ}$

					`
				});
			};

			// autant de case que d'elements dans le tableau des situations
			switch (liste_type_de_questions[i]) {
				case 0:
					texte = `${enonces[0].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
						texte += `             `
						texte_corr = ``;
					} else {
						texte_corr = `${enonces[0].correction}`;
					};
					break;

			};

			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);

	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, "1 : les mêmes unités\n2 : unités différentes"];
	//this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
};

/**
* Effectuer des additions de relatifs dans un tableau à double entrée
*
* @Auteur Rémi Angot
* 5R20-5
*/
function Exercice_tableau_additions_relatifs() {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = false;
	this.titre = "Additions de deux entiers relatifs dans un tableau à double entrée"
	this.consigne = 'Calculer'
	this.spacing = 1;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_signes1 = combinaison_listes([-1, 1], 4);
		let liste_signes2 = combinaison_listes([-1, 1], 4);
		let a1 = randint(2, 9);
		let a2 = randint(2, 9, a1);
		let a3 = randint(2, 9, [a1, a2]);
		let a4 = randint(2, 9, [a1, a2, a3]);
		let b1 = randint(2, 9);
		let b2 = randint(2, 9, b1);
		let b3 = randint(2, 9, [b1, b2]);
		let b4 = randint(2, 9, [b1, b2, b3]);
		a1 *= liste_signes1[0]
		a2 *= liste_signes1[1]
		a3 *= liste_signes1[2]
		a4 *= liste_signes1[3]
		b1 *= liste_signes1[0]
		b2 *= liste_signes1[1]
		b3 *= liste_signes1[2]
		b4 *= liste_signes1[3]

		let texte = `$\\def\\arraystretch{1.5}\\begin{array}{|c|c|c|c|c|}
    \\hline
    + & ${ecriture_algebrique(a1)} & ${ecriture_algebrique(a2)} & ${ecriture_algebrique(a3)} & ${ecriture_algebrique(a4)} \\\\
    \\hline
    ${ecriture_algebrique(b1)} &  &  & &  \\\\
    \\hline
    ${ecriture_algebrique(b2)} & & & & \\\\
    \\hline
    ${ecriture_algebrique(b3)} & & & & \\\\
    \\hline
    ${ecriture_algebrique(b4)} & & & & \\\\
    \\hline
    \\end{array}$`

		let texte_corr = `$\\def\\arraystretch{1.5}\\begin{array}{|c|c|c|c|c|}
    \\hline
    + & ${ecriture_algebrique(a1)} & ${ecriture_algebrique(a2)} & ${ecriture_algebrique(a3)} & ${ecriture_algebrique(a4)} \\\\
    \\hline
    ${ecriture_algebrique(b1)} & ${ecriture_algebrique(a1 + b1)} & ${ecriture_algebrique(a2 + b1)} & ${ecriture_algebrique(a3 + b1)} & ${ecriture_algebrique(a4 + b1)} \\\\
    \\hline
    ${ecriture_algebrique(b2)} & ${ecriture_algebrique(a1 + b2)} & ${ecriture_algebrique(a2 + b2)} & ${ecriture_algebrique(a3 + b2)} & ${ecriture_algebrique(a4 + b2)} \\\\
    \\hline
    ${ecriture_algebrique(b3)} & ${ecriture_algebrique(a1 + b3)} & ${ecriture_algebrique(a2 + b3)} & ${ecriture_algebrique(a3 + b3)} & ${ecriture_algebrique(a4 + b3)} \\\\
    \\hline
    ${ecriture_algebrique(b4)} & ${ecriture_algebrique(a1 + b4)} & ${ecriture_algebrique(a2 + b4)} & ${ecriture_algebrique(a3 + b4)} & ${ecriture_algebrique(a4 + b4)} \\\\
    \\hline
	\\end{array}$`
		this.liste_questions.push(texte);
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu(this);
	}
}

