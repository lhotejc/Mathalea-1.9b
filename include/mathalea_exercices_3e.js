
;

;

;

;

;

;

;

;

;


/** 
 * * Equations résolvantes pour le théorème de Thalès
 * * 3L13-2
 * @author Sébastien Lozano
 */

function Eq_resolvantes_Thales() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	if (this.debug) {
		this.nb_questions = 4;
	} else {
		this.nb_questions = 2;				
	};	
	this.sup = 1;
	this.sup2 = false;
	//this.exo = '';	
	if (this.exo == '4L15-1') {
		this.titre = "Equations du type $\\dfrac{x}{a}=\\dfrac{b}{c}$";
	} else if (this.exo == '4P10-2') {
		this.titre = "Déterminer une quatrième proportionnelle dans un tableau";
	}else {
		this.titre = "Equations résolvantes pour le théorème de Thalès";
	}
	if (this.exo == '4P10-2') {
		this.consigne = `Déterminer la quatrième proportionnelle dans les tableaux suivants.`;
	} else {
		this.consigne = `Résoudre les équations suivantes.`;
	};

	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//this.nb_questions_modifiable = false;
	sortie_html ? this.spacing = 2.5 : this.spacing = 1.5;
	sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

	this.liste_packages = `bclogo`;

	let type_de_questions_disponibles;

	this.nouvelle_version = function (numero_de_l_exercice) {
		// une fonction pour dire que c'est trivial dans ce cas
		function trivial(bool, a, b, c, inc) {
			let sortie;
			let texte = ``;
			if (bool) {
				if (b==c) {
					texte = `Dans ce cas le recours au produit en croix est superflu.<br> Par identification, on a directement $${inc}=${a}$ !`;
					sortie = warn_message(texte, `nombres`, `Keep Cool Guy !`);
				};
				if (c==a) {
					texte = `Dans ce cas le recours au produit en croix est superflu.<br> Par identification, on a directement $${inc}=${b}$ !`;
					sortie = warn_message(texte, `nombres`, `Keep Cool Guy !`);
				}
			} else {
				sortie = ``
			};
			return sortie;
		};

		if (this.debug) {
			type_de_questions_disponibles = [0, 1, 2, 3];
		} else {
			type_de_questions_disponibles = shuffle([choice([0, 1]), choice([2, 3])]);
		};
		
		if (this.sup == 4) {
			this.nb_questions = 5;
		} else if (!this.debug) {
			this.nb_questions = 2;
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_nombres_sup_egal_4 = []; // liste des situations coeff on veut chaque fois [1,1,1] et [-1,1,1] ou autre  et [0.1,0.1,0.1]

		//let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {

			// on a besoin d'un coeff pour le type de nombres
			let coeff;
			let nb_alea=[1,1,1];
			let c_temp_case_3;
			while (c_temp_case_3 % 2 != 0 || c_temp_case_3 % 5 != 0) {
				c_temp_case_3 = randint(11, 99)
			};

			this.sup = Number(this.sup); // attention le formulaire renvoie un string, on a besoin d'un number pour le switch !
			switch (this.sup) {
				case 1://entiers          
					coeff = [1, 1, 1];
					nb_alea[0] = randint(2, 9)
					nb_alea[1] =randint(2, 9,nb_alea[0])
					nb_alea[2] =choice([2,4,5,8],[nb_alea[0],nb_alea[1]]);
					break;
				case 2://relatifs            
					coeff = [choice([1, -1]), choice([1, -1]), choice([1, -1])];
					nb_alea[0] = randint(2, 9)
					nb_alea[1] =randint(2, 9,nb_alea[0])
					nb_alea[2] =choice([2,4,5,8],[nb_alea[0],nb_alea[1]]);
					break;
				case 3://décimaux            
					coeff = [0.1, 0.1, 0.1];
					nb_alea[0] = randint(2, 9)
					nb_alea[1] =randint(2, 9,nb_alea[0])
					nb_alea[2] =c_temp_case_3;
					break;
				case 4://mélange
					nb_alea[0] = randint(2, 9)
					nb_alea[1] =randint(2, 9,nb_alea[0])
					nb_alea[2] =choice([2,4,5,8],[nb_alea[0],nb_alea[1]]);
					let masterChoix = choice([
						{c:[1, 1, 1],na:[nb_alea[0],nb_alea[1],nb_alea[2]]},
						{c:[choice([1, -1]), choice([1, -1]), choice([1, -1])],na:[nb_alea[0],nb_alea[1],nb_alea[2]]},
						{c:[0.1, 0.1, 0.1],na:[randint(11, 99), randint(11, 99), c_temp_case_3]}
					]);
					coeff = masterChoix.c;					
					nb_alea = masterChoix.na;					
			};

			let inc;
			if (this.exo == '4L15-1') {
				inc = choice(['r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);

			} else if (this.exo == '4P10-2') {
				inc = ['?'];
			} else {
				inc = choice(['x', 'y', 'GO', 'AB', 'z', 'GA', 'BU', 'ZO', 'ME']);
			};

			let params = {
				a: calcul(nb_alea[0] * coeff[0]),
				b: calcul(nb_alea[1] * coeff[1]),
				c: calcul(nb_alea[2] * coeff[2]),
				inc: inc
			}

			// pour les situations, autant de situations que de cas dans le switch !
			let situations = [
				{//case 0 --> x/b=a/c --> cx= ab
					eq: `\\dfrac{${params.inc}}{${tex_nombre(params.b)}}=\\dfrac{${tex_nombre(params.a)}}{${tex_nombre(params.c)}}`,
					tab:tab_C_L([params.inc,params.a],[params.b],[params.c]),
					a: params.a,
					b: params.b,
					c: params.c,
					inc: params.inc,
					trivial: (params.b == params.c) || (params.c == params.a)
				},
				{//case 1 --> a/c=x/b --> cx=ab
					eq: `\\dfrac{${tex_nombre(params.a)}}{${tex_nombre(params.c)}}=\\dfrac{${params.inc}}{${tex_nombre(params.b)}}`,
					tab:tab_C_L([params.a,params.inc],[params.c],[params.b]),
					a: params.a,
					b: params.b,
					c: params.c,
					inc: params.inc,
					trivial: (params.b == params.c) || (params.c == params.a)

				},
				{//case 2 -->b/x=c/a --> cx = ab
					eq: `\\dfrac{${tex_nombre(params.b)}}{${params.inc}}=\\dfrac{${tex_nombre(params.c)}}{${tex_nombre(params.a)}}`,
					tab:tab_C_L([params.b,params.c],[params.inc],[params.a]),
					a: params.a,
					b: params.b,
					c: params.c,
					inc: params.inc,
					trivial: (params.b == params.c) || (params.c == params.a)
				},
				{//case 3 -->c/a=b/x --> cx = ab 
					eq: `\\dfrac{${tex_nombre(params.c)}}{${tex_nombre(params.a)}}=\\dfrac{${tex_nombre(params.b)}}{${params.inc}}`,
					tab:tab_C_L([params.c,params.b],[params.a],[params.inc]),
					a: params.a,
					b: params.b,
					c: params.c,
					inc: params.inc,
					trivial: (params.b == params.c) || (params.c == params.a)
				},
			];

			let enoncePlus;
			let corrPlusPremiereLigne;
			
			let enonces = [];
			for (let k = 0; k < situations.length; k++) {
				if (this.exo == '4P10-2') {
					enoncePlus = `${situations[k].tab}`;
					corrPlusPremiereLigne = `${situations[k].tab} <br> Le tableau ci-dessus est un tableau de proportionnalité, pour déterminer la quatrième proportionnelle il suffit par exemple de résoudre l'équation suivante : <br>`;
				} else {
					enoncePlus = `$${situations[k].eq}$`;
					corrPlusPremiereLigne = ``;
				};
				enonces.push({
					enonce: enoncePlus,
					question: ``,
					correction: `${corrPlusPremiereLigne}
						$${situations[k].eq}$<br>
						${texte_en_couleur_et_gras(`Les produits en croix sont égaux.`)}<br>
						$${tex_nombre(situations[k].c)}\\times ${situations[k].inc} = ${tex_nombre(situations[k].a)}\\times ${tex_nombre(situations[k].b)}$<br>
						${texte_en_couleur_et_gras(`On divise les deux membres par ${tex_nombre(situations[k].c)}`)}.<br>
						$\\dfrac{${tex_nombre(situations[k].c)}\\times ${situations[k].inc}}{${tex_nombre(situations[k].c)}}= \\dfrac{${tex_nombre(situations[k].a)}\\times ${tex_nombre(situations[k].b)}}{${tex_nombre(situations[k].c)}}$<br>
						${texte_en_couleur_et_gras(`On simplifie et on calcule.`)}<br>
						$${situations[k].inc}=${tex_nombre(calcul(Number(situations[k].b) * Number(situations[k].a) / Number(situations[k].c)))}$
						${trivial(situations[k].trivial, tex_nombre(situations[k].a), tex_nombre(situations[k].b), tex_nombre(situations[k].c), situations[k].inc)}
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
	this.besoin_formulaire_numerique = ['Type de nombres', 4, "1 : Entiers naturels\n2 : Entiers relatifs\n3 : Décimaux\n4 : Mélange"];
	//this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];
	//this.besoin_formulaire2_case_a_cocher = ["Avec décimaux.",false]	
};

/** 
 * * Calcul mental autour des identités remarquables
 * * numéro de l'exo ex : 3L11-5
 * * publié le  14/11/2020
 * @author Sébastien Lozano
 */

function identites_calculs() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.sup = 1;
	if (this.debug) {
		this.nb_questions = 3;
	} else {
		this.nb_questions = 3;
	};

	this.titre = "Calcul mental et calcul littéral";
	this.consigne = `Faire les calculs suivants sans calculatrice. Utiliser la double distributivité ou les identités remarquables.`;

	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//this.nb_questions_modifiable = false;	
	sortie_html ? this.spacing = 1 : this.spacing = 1;
	sortie_html ? this.spacing_corr = 1 : this.spacing_corr = 1;

	this.liste_packages = `bclogo`;

	let type_de_questions_disponibles;

	this.nouvelle_version = function (numero_de_l_exercice) {
		//une fonction pour gérer un \hfill dans la sortie LaTeX
		function myhfill() {
			if (sortie_html) {
				return `<br><br>`;
			} else {
				return `\\hfill`;
			}
		};
		switch (Number(this.sup)) {
			case 1:
				type_de_questions_disponibles = [0, 0, 0];//shuffle([choice([1,3]),choice([2,3]),0]);
				this.introduction = warn_message(`$(a+b)^2=a^2+2ab+b^2$`, `nombres`, `Coup de pouce`);
				break;
			case 2:
				type_de_questions_disponibles = [1, 1, 1];//shuffle([choice([1,3]),choice([2,3]),0]); 
				this.introduction = warn_message(`$(a-b)^2 = a^2-2ab+b^2$`, `nombres`, `Coup de pouce`);
				break;
			case 3:
				type_de_questions_disponibles = [2, 2, 2];//shuffle([choice([1,3]),choice([2,3]),0]);      			
				this.introduction = warn_message(`$(a+b)(a-b)=a^2-b^2$`, `nombres`, `Coup de pouce`);
				break;
			case 4:
				type_de_questions_disponibles = shuffle([0, 1, 2]);//shuffle([choice([1,3]),choice([2,3]),0]);      			
				this.introduction = warn_message(`$(a+b)^2 = a^2 +2ab + b^2$ ${myhfill()} $(a-b)^2 = a^2-2ab+b^2$ ${myhfill()} $(a+b)(a-b)=a^2-b^2$`, `nombres`, `Coup de pouce`);
				break;
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		//let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		


		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			// une fonction pour gérer l'affichage sous forme de carré
			// a et b  sont les facteurs du produit, s'ils sont égaux on affiche sous forme de carré
			function ifIsCarreAfficheCarre(a, b) {
				if (a == b) {
					return `${a}^2`
				} else {
					return `${a}\\times ${b}`
				}
			}

			// une fonction pour afficher le double terme rectangle ou pas
			function ifIsCarreAfficheDblProd(bool, dblTermeRect) {
				if (bool) {
					return dblTermeRect;
				} else {
					return ``;
				}
			};

			let a = randint(2, 9);
			let b_somme = randint(1, 4);
			let b_difference = randint(1, 4);
			let b_som_dif = randint(1, 9);
			let coeff = choice([10, 100]);
			let coeff_som_dif = 100;
			let signes_som_dif = choice([[{ str: '-', nb: -1 }, { str: '+', nb: 1 }], [{ str: '+', nb: 1 }, { str: '-', nb: -1 }]]);
			let lettres = choice(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])

			// pour les situations, autant de situations que de cas dans le switch !
			let situations = [
				{//case 0 --> carré d'une somme
					lettre: lettres,
					a: a,
					b: b_somme,
					coeff: coeff,
					a_coeff: a * coeff,
					operations: [{ str: '+', nb: 1 }, { str: '+', nb: 1 }],
					facteurs: [{ str: `${tex_nombre(a * coeff)}+${b_somme}`, nb: tex_nombre(a * coeff + b_somme) }, { str: `${tex_nombre(a * coeff)}+${b_somme}`, nb: tex_nombre(a * coeff + b_somme) }],
					carre_de_a_coeff: tex_nombre(coeff * coeff * a * a),
					//carre_de_coeff:coeff*coeff,	
					carre_de_b: tex_nombre(b_somme * b_somme),
					termes_rectangles: [tex_nombre(coeff * a * b_somme), tex_nombre(coeff * a * b_somme)],
					somme_terme_rect: tex_nombre(2 * coeff * a * b_somme),
					signes_dbl_dist: ['+', '+', '+'],
					carre: true,
					resultat: tex_nombre(a * a * coeff * coeff + b_somme * b_somme + 2 * a * coeff * b_somme)
				},
				{//case 1 --> carré d'une différence
					lettre: lettres,
					a: a,
					b: b_difference,
					coeff: coeff,
					a_coeff: a * coeff,
					operations: [{ str: '-', nb: -1 }, { str: '-', nb: -1 }],
					facteurs: [{ str: `${tex_nombre(a * coeff)}-${b_difference}`, nb: tex_nombre(a * coeff - b_difference) }, { str: `${tex_nombre(a * coeff)}-${b_difference}`, nb: tex_nombre(a * coeff - b_difference) }],
					carre_de_a_coeff: tex_nombre(coeff * coeff * a * a),
					//carre_de_coeff:coeff*coeff,					
					carre_de_b: tex_nombre(b_difference * b_difference),
					termes_rectangles: [tex_nombre(coeff * a * b_difference), tex_nombre(coeff * a * b_difference)],
					somme_terme_rect: tex_nombre(2 * coeff * a * b_difference),
					signes_dbl_dist: ['+', '-', '-'],
					carre: true,
					resultat: tex_nombre(a * a * coeff * coeff + b_difference * b_difference - 2 * a * coeff * b_difference)

				},
				{//case 2 --> produit somme différence
					lettre: lettres,
					a: a,
					b: b_som_dif,
					coeff: coeff_som_dif,
					a_coeff: a * coeff_som_dif,
					operations: signes_som_dif,
					facteurs: [{ str: `${tex_nombre(a * coeff_som_dif)} ${signes_som_dif[0].str} ${b_som_dif}`, nb: tex_nombre(a * coeff_som_dif + signes_som_dif[0].nb * b_som_dif) }, { str: `${tex_nombre(a * coeff_som_dif)} ${signes_som_dif[1].str} ${b_som_dif}`, nb: tex_nombre(a * coeff_som_dif + signes_som_dif[1].nb * b_som_dif) }],
					carre_de_a_coeff: tex_nombre(coeff_som_dif * coeff_som_dif * a * a),
					//carre_de_coeff:coeff*coeff,	
					carre_de_b: tex_nombre(b_som_dif * b_som_dif),
					termes_rectangles: [tex_nombre(coeff_som_dif * a * b_som_dif), tex_nombre(coeff_som_dif * a * b_som_dif)],
					somme_terme_rect: 0,
					signes_dbl_dist: ['-', '+', '-'],
					carre: false,
					resultat: tex_nombre(a * a * coeff_som_dif * coeff_som_dif - b_som_dif * b_som_dif)
				},
			];

			let enonces = [];
			for (let k = 0; k < situations.length; k++) {
				enonces.push({
					enonce: `					
					 $${situations[k].lettre}=${ifIsCarreAfficheCarre(situations[k].facteurs[0].nb, situations[k].facteurs[1].nb)}$
					`,
					question: ``,
					correction1: `
						${texte_gras(`Avec la double distributivité`)}<br>
						$${situations[k].lettre} = ${ifIsCarreAfficheCarre(situations[k].facteurs[0].nb, situations[k].facteurs[1].nb)}$<br>
						$${situations[k].lettre} = (${situations[k].facteurs[0].str})\\times (${situations[k].facteurs[1].str})$<br>
						$${situations[k].lettre} = ${situations[k].a_coeff}^2 ${situations[k].signes_dbl_dist[1]} ${situations[k].a_coeff}\\times ${situations[k].b} ${situations[k].signes_dbl_dist[2]} ${situations[k].b}\\times ${situations[k].a_coeff} ${situations[k].signes_dbl_dist[0]} ${situations[k].b}^2$<br>
						$${situations[k].lettre} = ${situations[k].carre_de_a_coeff} ${situations[k].signes_dbl_dist[1]} ${situations[k].termes_rectangles[0]} ${situations[k].signes_dbl_dist[2]} ${situations[k].termes_rectangles[1]}	${situations[k].signes_dbl_dist[0]} ${situations[k].carre_de_b}$<br>
						$${situations[k].lettre} = ${situations[k].carre_de_a_coeff} ${ifIsCarreAfficheDblProd(situations[k].carre, `${situations[k].signes_dbl_dist[1]} ${situations[k].somme_terme_rect}`)} ${situations[k].signes_dbl_dist[0]} ${situations[k].carre_de_b}$<br>
						$${situations[k].lettre} = ${situations[k].resultat}$
					`,
					correction2: `
					${texte_gras(`Avec une identité`)}<br>
					$${situations[k].lettre} = ${ifIsCarreAfficheCarre(situations[k].facteurs[0].nb, situations[k].facteurs[1].nb)}$<br>
					$${situations[k].lettre} = ${ifIsCarreAfficheCarre(`(${situations[k].facteurs[0].str})`, `(${situations[k].facteurs[1].str})`)} $<br>
					$${situations[k].lettre} = ${situations[k].a_coeff}^2 ${ifIsCarreAfficheDblProd(situations[k].carre, `${situations[k].signes_dbl_dist[1]} 2\\times ${situations[k].a_coeff} \\times ${situations[k].b}`)} ${situations[k].signes_dbl_dist[0]}  ${situations[k].b}^2$<br>
					$${situations[k].lettre} = ${situations[k].carre_de_a_coeff} ${ifIsCarreAfficheDblProd(situations[k].carre, `${situations[k].signes_dbl_dist[1]} 2\\times ${situations[k].termes_rectangles[0]}`)} ${situations[k].signes_dbl_dist[0]}  ${situations[k].carre_de_b}$<br>
					$${situations[k].lettre} = ${situations[k].carre_de_a_coeff} ${ifIsCarreAfficheDblProd(situations[k].carre, `${situations[k].signes_dbl_dist[1]} ${situations[k].somme_terme_rect}`)} ${situations[k].signes_dbl_dist[0]} ${situations[k].carre_de_b}$<br>
					$${situations[k].lettre} = ${situations[k].resultat}$				
				`
				});
			};

			// autant de case que d'elements dans le tableau des situations
			switch (liste_type_de_questions[i]) {
				case 0: // carré d'une somme 
					texte = `${enonces[0].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[0].correction1}<br>${enonces[0].correction2}`;
						texte_corr = ``;
					} else {
						if (sortie_html) {
							texte_corr = `${enonces[0].correction1}<br><br>${enonces[0].correction2}`;
						} else {
							texte_corr = `Détaillons deux méthodes : <br><br>`
							texte_corr += `\\begin{minipage}{8cm}`;
							texte_corr += enonces[0].correction1;
							texte_corr += `\\end{minipage}`;
							texte_corr += `\\hfill \\vrule \\hfill`;
							texte_corr += `\\begin{minipage}{8cm}`;
							texte_corr += enonces[0].correction2;
							texte_corr += `\\end{minipage}`;
							texte_corr += `<br>`;
						};
					};
					break;
				case 1: // carré d'une différence
					texte = `${enonces[1].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[1].correction1}<br>${enonces[1].correction2}`;
						texte_corr = ``;
					} else {
						if (sortie_html) {
							texte_corr = `${enonces[1].correction1}<br><br>${enonces[1].correction2}`;
						} else {
							texte_corr = `Détaillons deux méthodes : <br><br>`
							texte_corr += `\\begin{minipage}{8cm}`;
							texte_corr += enonces[1].correction1;
							texte_corr += `\\end{minipage}`;
							texte_corr += `\\hfill \\vrule \\hfill`;
							texte_corr += `\\begin{minipage}{8cm}`;
							texte_corr += enonces[1].correction2;
							texte_corr += `\\end{minipage}`;
							texte_corr += `<br>`;
						};
					};
					break;
				case 2: // Produit somme différence
					texte = `${enonces[2].enonce}`;
					if (this.debug) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[2].correction1}<br>${enonces[2].correction2}`;
						texte_corr = ``;
					} else {
						if (sortie_html) {
							texte_corr = `${enonces[2].correction1}<br><br>${enonces[2].correction2}`;
						} else {
							texte_corr = `Détaillons deux méthodes : <br><br>`
							texte_corr += `\\begin{minipage}{8cm}`;
							texte_corr += enonces[2].correction1;
							texte_corr += `\\end{minipage}`;
							texte_corr += `\\hfill \\vrule \\hfill`;
							texte_corr += `\\begin{minipage}{8cm}`;
							texte_corr += enonces[2].correction2;
							texte_corr += `\\end{minipage}`;
							texte_corr += `<br>`;
						};
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
	this.besoin_formulaire_numerique = ['Niveau de difficulté', 4, "1 : Carré d'une somme\n2 : Carré d'une différence\n3 : Produit de la somme et de la différence\n4 : Mélange"];
	//this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
};


/** 
 * * Instructions conditionnelles
 * * numéro de l'exo ex : 3Algo1
 * * publié le  24/11/2020
 * @author Erwan Duplessy
 */

function Instruction_conditionelle() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.debug = false;
	this.sup = 1;
	this.nb_questions = 2;

	this.titre = "Instruction conditionelle";
	this.consigne = `Donner les coordonnées de la position finale du lutin.`;

	this.nb_cols = 2;
	this.nb_cols_corr = 1;
	this.nb_questions_modifiable = false;
	sortie_html ? this.spacing = 1 : this.spacing = 1;
	sortie_html ? this.spacing_corr = 1 : this.spacing_corr = 1;
	this.liste_packages = `scratch3`;
	//let type_de_questions_disponibles;	

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		function scratchblocks_Tikz(code_svg, code_tikz) {
			if (sortie_html) {
				return code_svg;
			} else {
				return code_tikz;
			};
		};

		let texte = "La position initiale d'un lutin dans un repère est (0,0). Dans le programme, x désigne l'abscisse, et y désigne l'ordonnée d'un lutin. <br>"; // texte de l'énoncé
		texte += `Une variable a été créée, elle s'appelle <code class="b">(var) :: ring</code>. <br>`
		let texte_corr = " "; // texte du corrigé
		let code_tikz = ``; // code pour dessiner les blocs en tikz
		let code_svg = ``; // code pour dessiner les blocs en svg
		let nbCommandes = Number(this.sup) + 2; // nombre de commandes de déplacement dans un script
		let nbRepetition = 1; // Nombre de fois où la boucle est répétée. 
		if (this.sup2) {
			nbRepetition = 3;
		}
		let xLutin = 0;
		let yLutin = 0;

		code_tikz += `\\medskip \\\\ \\begin{scratch} <br>`;
		code_svg += `<pre class='blocks'>`;

		let n1 = randint(1, 10);
		let n2 = randint(1, 10);
		let n3 = randint(1, 10);
		let n4 = randint(1, 10);

		code_tikz += `\\blockmove{aller à x: \ovalnum{0} y: \ovalnum{0}}`;
		code_svg += `quand le drapeau vert pressé <br>`;
		code_svg += `Aller à x:(0) y:(0) <br>`;
		code_svg += `mettre (var) à (${n1}) <br>`;
		code_svg += ` si <(var) < [${n2}]> alors <br>`;
		code_svg += ` ajouter (100) à x <br>`;
		if (this.sup > 1) {
			code_svg += ` si <(var) > [${n3}]> alors <br>`;
			code_svg += ` ajouter (50) à x <br>`;
			code_svg += ` fin <br>`;
		}
		code_svg += ` sinon <br>`;
		code_svg += ` ajouter (70) à y <br>`;
		if (this.sup > 2) {
			code_svg += ` si <(var) > [${n4}]> alors <br>`;
			code_svg += ` ajouter (40) à y <br>`;
			code_svg += ` fin <br>`;
		}
		code_svg += ` fin <br>`;

		code_svg += `</pre>`;
		code_tikz += `\\end{scratch}`;

		texte += scratchblocks_Tikz(code_svg, code_tikz);


		if (n1 < n2) {
			texte_corr += `Comme l'inégalité "${n1} < ${n2}" est vraie, alors on ajoute 100 à l'abscisse du lutin. <br>`;
			xLutin += 100;
			if (this.sup > 1) {
				if (n1 > n3) {
					texte_corr += `Comme l'inégalité "${n1} > ${n3}" est vraie, alors on ajoute 50 à l'abscisse du lutin. <br>`;
					xLutin += 50;
				} else {
					texte_corr += `Comme l'inégalité "${n1} > ${n3}" est fausse, alors on ne change pas l'abscisse du lutin. <br>`
				}
			}
		} else {
			texte_corr += `Comme l'inégalité "${n1} < ${n2}" est fausse, alors on ajoute 70 à l'ordonnée du lutin. <br>`;
			yLutin += 70;
			if (this.sup > 2) {
				if (n1 > n4) {
					texte_corr += `Comme l'inégalité "${n1} > ${n4}" est vraie, on ajoute 40 à l'ordonnée du lutin. <br>`;
					yLutin += 40;
				} else {
					texte_corr += `Comme l'inégalité "${n1} > ${n4}" est fausse, alors on ne change pas l'ordonnée du lutin. <br>`
				}
			}
		}
		texte_corr += ` La position finale est donc : (${xLutin} ; ${yLutin}).`


		this.liste_questions.push(texte);
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = [`Variante `, 3, '1 : sans condition imbriquée\n2 : avec une condition imbriquée\n3 : avec deux conditions imbriquées'];
};

/**
 * Construction d'images par rotation avec dispositif d'auto-correction aléatoire
 * Ref 3G10-3 
 * @Auteur Jean-Claude Lhote
 * Publié le 30/11/2020
 */
function Construire_rotation_point_3e() {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Construire l\'image d'un point par une rotation avec cible auto-corrective";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 3;
	this.nouvelle_version = function () {
		let angle = randint(-8, 8, 0) * 10
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
		this.consigne = `Construire l'image des points $${noms[0]}$`
		for (let i = 1; i < nbpoints - 1; i++) {
			this.consigne += `, $${noms[i]}$`
		}
		this.consigne += ` et $${noms[nbpoints - 1]}$ par la rotation de centre $O$`;
		this.consigne += ` et d\'angle $${Math.abs(angle)}\\degree$`
		if (angle < 0) this.consigne += ` dans le sens des aiguilles d'une montre.`
		else this.consigne += ` dans le sens contraire des aiguilles d'une montre.`
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
			M.push(rotation(N[i], O, -angle, noms[i]))
			objets_enonce.push(tracePoint(M[i]), labelPoint(M[i]), cibles[i])
			objets_correction.push(tracePoint(M[i], N[i]), labelPoint(M[i], N[i]), cibles[i])
			objets_correction.push(arcPointPointAngle(M[i], N[i], angle, true, arcenciel(i), 'gray', 0.2))
			texte_corr += `$${noms[i]}\'$, l\'image du point $${noms[i]}$ est dans la case ${cellules[i]} de la grille ${i + 1}.<br>`
		}

		for (let i = 0; i < nbpoints; i++) {
			xMin = Math.min(xMin, N[i].x - 3, M[i].x - 3)
			yMin = Math.min(yMin, N[i].y - 3, M[i].y - 3)
			xMax = Math.max(xMax, N[i].x + 3, M[i].x + 3)
			yMax = Math.max(yMax, N[i].y + 3, M[i].y + 3)
		}

		fenetreMathalea2d = [xMin, yMin, xMax, yMax]

		this.liste_questions.push(mathalea2d({ xmin: xMin, ymin: yMin, xmax: xMax, ymax: yMax, pixelsParCm: 20, scale: 1 }, objets_enonce))
		this.liste_corrections.push(texte_corr + mathalea2d({ xmin: xMin, ymin: yMin, xmax: xMax, ymax: yMax, pixelsParCm: 20, scale: 0.7 }, objets_correction))
		liste_de_question_to_contenu(this)

		//  let nonchoisi,coords=[],x,y,objets_enonce=[],objets_correction=[],nomd,label_pos

	}
	this.besoin_formulaire_numerique = ['Nombre de points (1 à 5)', 5, "1\n2\n3\n4\n5"];
	// this.besoin_formulaire2_case_a_cocher = ["Avec des points de part et d'autre"];	
}
/**
* Construction d'images par homothétie avec dispositif d'auto-correction aléatoire
* Ref 3G11
* @Auteur Jean-Claude Lhote
* Publié le 30/11/2020
*/
function Construire_homothetie_point_3e() {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Construire l\'image d'un point par une homothetie avec cible auto-corrective";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 3;
	this.nouvelle_version = function () {
		let k = randint(-4, 4, [0, -1, 1]) / 2
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
		this.consigne = `Construire l\'image des points $${noms[0]}$`
		for (let i = 1; i < nbpoints - 1; i++) {
			this.consigne += `, $${noms[i]}$`
		}
		this.consigne += ` et $${noms[nbpoints - 1]}$ par l\'homothétie de centre $O$`;
		this.consigne += ` et de rapport $${k}$.`
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
			M.push(homothetie(N[i], O, 1 / k, noms[i]))
			objets_enonce.push(tracePoint(M[i]), labelPoint(M[i]), cibles[i])
			objets_correction.push(tracePoint(M[i], N[i]), labelPoint(M[i], N[i]), cibles[i])
			s = segment(M[i], N[i])
			s.color = arcenciel(i)
			objets_correction.push(s)
			texte_corr += `$${noms[i]}\'$, l\'image du point $${noms[i]}$ est dans la case ${cellules[i]} de la grille ${i + 1}.<br>`
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
