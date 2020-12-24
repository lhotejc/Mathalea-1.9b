/**
 * référence 5G20
 * @Auteur Lhote Jean-Claude
 * 
 */
/**
 * référence ?
 */
function Arrondir_une_valeur_5e() {
	Arrondir_une_valeur.call(this);
	this.sup = 2;
	this.besoin_formulaire_numerique = ['Type de nombre', 2, `1 : Nombre décimal\n 2 : Fraction`];
  }

Pavage_et_demi_tour2d
/**
 * référence  5G51
 */
function Representer_un_solide_5e() {
	this.sup = 4;
	this.classe = 5;
	Representer_un_solide.call(this);
  }

/**
 * Vocabulaire des triangles
 * 5G20-1
 * @author Sébastien Lozano
 */
function Vocabulaire_des_triangles_5e() {
	this.classe = 5;
	Vocabulaire_des_triangles.call(this);
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
 * Référence 5C12
 */
function Calculer_une_expression_numerique() {
	Ecrire_une_expression_numerique.call(this)
	this.version = 4
	this.titre = "Calculer une expression numérique en détaillant les calculs"
}

/**
 * Simplifier une fraction, le facteur commun est inférieur à une valeur donnée en paramètre qui est 11 par défaut
 * @Auteur Rémi Angot
 *  5N13
 */
function Exercice_fractions_simplifier(max = 11) {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max; // Correspond au facteur commun
	this.titre = "Simplification de fractions";
	this.consigne = "Simplifier les fractions suivantes.";
	this.spacing = 2;
	this.spacing_corr = 2;
  
	this.nouvelle_version = function (numero_de_l_exercice) {
	  this.liste_questions = []; // Liste de questions
	  this.liste_corrections = []; // Liste de questions corrigées
	  liste_fractions = [
		[1, 2],
		[1, 3],
		[2, 3],
		[1, 4],
		[3, 4],
		[1, 5],
		[2, 5],
		[3, 5],
		[4, 5],
		[1, 6],
		[5, 6],
		[1, 7],
		[2, 7],
		[3, 7],
		[4, 7],
		[5, 7],
		[6, 7],
		[1, 8],
		[3, 8],
		[5, 8],
		[7, 8],
		[1, 9],
		[2, 9],
		[4, 9],
		[5, 9],
		[7, 9],
		[8, 9],
		[1, 10],
		[3, 10],
		[7, 10],
		[9, 10],
	  ]; // Couples de nombres premiers entre eux
	  for (
		let i = 0, fraction, a, b, texte, texte_corr, cpt = 0;
		i < this.nb_questions;
		i++
	  ) {
		fraction = choice(liste_fractions); //
		a = fraction[0];
		b = fraction[1];
		k = randint(2, this.sup);
		enleve_element(liste_fractions, fraction); // Il n'y aura pas 2 fois la même réponse
		texte =
		  "$ " +
		  tex_fraction(k * a, k * b) +
		  " = " +
		  tex_fraction("\\phantom{00000000000000}", "") +
		  " = " +
		  tex_fraction("\\phantom{0000}", "") +
		  " $";
		texte_corr =
		  "$ " +
		  tex_fraction(k * a, k * b) +
		  " = " +
		  tex_fraction(k + " \\times " + a, k + " \\times " + b) +
		  " = " +
		  tex_fraction(a, b) +
		  " $";
		this.liste_questions.push(texte);
		this.liste_corrections.push(texte_corr);
	  }
	  liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	};
	this.besoin_formulaire_numerique = [
	  "Valeur maximale du facteur commun",
	  99999,
	];
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
/** */
// 5G10
function Symetrie_axiale_5e() {
	Transformations.call(this);
	this.sup = 1;
	this.titre = `Trouver l'image d'un point par une symétrie axiale`;
	this.pas_de_version_LaTeX = true;
  }
  /** */
  // 5G11
  function Transformations_5e() {
	Transformations.call(this);
	this.sup = 2;
	this.titre = `Trouver l'image d'un point par une symétrie axiale ou centrale`;
	this.pas_de_version_LaTeX = true;
  }

/** */