
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
* Passer d'une écriture en base 10 à l'écriture dans une autre base ou inversement
*
* * Convertir en base 10
* * Convertir vers une base entre 2 et 7
* * Trouver le plus grand nombre à 3 ou 4 chiffres d'une base ainsi que son successeur et le convertir en base 10 ou le plus petit et son prédecesseur
*
* @Auteur Rémi Angot
*/
function Passer_d_une_base_a_l_autre() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Passer de la base 10 à une autre base et inversement";
	this.consigne = "";
	this.nb_questions = 3;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1;

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = ['vers_base_10', choice(['vers_base_n_3_chiffres', 'vers_base_n_4_chiffres']), choice(['plus_grand_4_chiffres', 'plus_grand_3_chiffres', 'plus_petit_4_chiffres', 'plus_petit_3_chiffres'])];
		if (this.nb_questions > 3) {
			type_de_questions_disponibles = ['vers_base_10', 'vers_base_n_3_chiffres', 'vers_base_n_4_chiffres', 'plus_grand_4_chiffres', 'plus_grand_3_chiffres', 'plus_petit_4_chiffres', 'plus_petit_3_chiffres'];
		}
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, b, n, m, chiffre1, chiffre2, chiffre3, chiffre4, cpt = 0; i < this.nb_questions && cpt < 50;) {
			b = randint(2, 7);
			switch (liste_type_de_questions[i]) {
				case 'vers_base_10':
					n = randint(1, b - 1) * 10 + randint(0, b - 1);
					m = randint(1, b - 1) * 1000 + randint(0, b - 1) * 100 + randint(0, b - 1) * 10 + randint(0, b - 1);
					texte = `Les nombre $(${n})_${b}$ et $(${m})_${b}$ sont écrits en base ${b}. Donner leur écriture en base 10.`;
					texte_corr = `$(${n})_${b}=${n.toString()[0]}\\times${b}+${n.toString()[1]}=${parseInt(n, b)}$`;
					texte_corr += `<br>$(${m})_${b}=${m.toString()[0]}\\times${b}^3+${m.toString()[1]}\\times${b}^2+${m.toString()[2]}\\times${b}+${m.toString()[3]}=${parseInt(m, b)}$`;
					break;
				case 'vers_base_n_3_chiffres':
					chiffre1 = randint(1, b - 1);
					chiffre2 = randint(0, b - 1);
					chiffre3 = randint(0, b - 1);
					n = chiffre1 * b ** 2 + chiffre2 * b + chiffre3;
					texte = `Écrire en base ${b} le nombre ${n}.`;
					texte_corr = `$${n}=${b}\\times${Math.floor(n / b)}+${mise_en_evidence(n % b)}$`;
					texte_corr += `<br>$${Math.floor(n / b)}=${b}\\times${mise_en_evidence(chiffre1)}+${mise_en_evidence(chiffre2)}$`;
					texte_corr += `<br> Finalement $${n}=(${chiffre1}${chiffre2}${chiffre3})_${b}$`
					break;
				case 'vers_base_n_4_chiffres':
					chiffre1 = randint(1, b - 1);
					chiffre2 = randint(0, b - 1);
					chiffre3 = randint(0, b - 1);
					chiffre4 = randint(0, b - 1);
					n = chiffre1 * b ** 3 + chiffre2 * b ** 2 + chiffre3 * b + chiffre4;
					texte = `Écrire en base ${b} le nombre ${n}.`;
					texte_corr = `$${n}=${b}\\times${Math.floor(n / b)}+${mise_en_evidence(n % b)}$`;
					texte_corr += `<br>$${Math.floor(n / b)}=${b}\\times${Math.floor(Math.floor(n / b) / b)}+${mise_en_evidence(Math.floor(n / b) % b)}$`;
					texte_corr += `<br>$${Math.floor(Math.floor(n / b) / b)}=${b}\\times${mise_en_evidence(chiffre1)}+${mise_en_evidence(chiffre2)}$`;
					texte_corr += `<br> Finalement $${n}=(${chiffre1}${chiffre2}${chiffre3}${chiffre4})_${b}$`
					break;
				case 'plus_grand_4_chiffres':
					texte = `Quel est le plus grand nombre à 4 chiffres que l'on peut écrire en base ${b}.`;
					texte += `<br>Comment s'écrit son successeur immédiat en base ${b} ? En déduire l'écriture en base 10 de ces 2 nombres.`;
					texte_corr = `En base ${b} les chiffres sont 0`;
					for (let i = 1; i < b; i++) {
						texte_corr += `, ${i}`
					}
					texte_corr += ` donc le plus grand nombre à 4 chiffres est $(${b - 1}${b - 1}${b - 1}${b - 1})_${b}$ et son successeur immédiat est $(10000)_${b}$.`
					texte_corr += `<br> $(10000)_${b}=1\\times${b}^4=${tex_nombre(b ** 4)}$ donc $(${b - 1}${b - 1}${b - 1}${b - 1})_${b}=${b ** 4}-1=${tex_nombre(b ** 4 - 1)}$.`
					break;
				case 'plus_grand_3_chiffres':
					texte = `Quel est le plus grand nombre à 3 chiffres que l'on peut écrire en base ${b}.`;
					texte += `<br>Comment s'écrit son successeur immédiat en base ${b} ? En déduire l'écriture en base 10 de ces 2 nombres.`;
					texte_corr = `En base ${b} les chiffres sont 0`;
					for (let i = 1; i < b; i++) {
						texte_corr += `, ${i}`
					}
					texte_corr += ` donc le plus grand nombre à 3 chiffres est $(${b - 1}${b - 1}${b - 1})_${b}$ et son successeur immédiat est $(1000)_${b}$.`
					texte_corr += `<br> $(1000)_${b}=1\\times${b}^3=${tex_nombre(b ** 3)}$ donc $(${b - 1}${b - 1}${b - 1})_${b}=${b ** 3}-1=${tex_nombre(b ** 3 - 1)}$.`
					break;
				case 'plus_petit_4_chiffres':
					texte = `Quel est le plus petit nombre à 4 chiffres que l'on peut écrire en base ${b}.`;
					texte += `<br>Comment s'écrit son prédécesseur immédiat en base ${b} ? En déduire l'écriture en base 10 de ces 2 nombres.`;
					texte_corr = `En base ${b} les chiffres sont 0`;
					for (let i = 1; i < b; i++) {
						texte_corr += `, ${i}`
					}
					texte_corr += ` donc le plus petit nombre à 4 chiffres est $(1000)_${b}$ et son prédécesseur immédiat est $(${b - 1}${b - 1}${b - 1})_${b}$.`
					texte_corr += `<br> $(1000)_${b}=1\\times${b}^3=${tex_nombre(b ** 3)}$ donc $(${b - 1}${b - 1}${b - 1})_${b}=${b ** 3}-1=${tex_nombre(b ** 3 - 1)}$.`
					break;
				case 'plus_petit_3_chiffres':
					texte = `Quel est le plus petit nombre à 3 chiffres que l'on peut écrire en base ${b}.`;
					texte += `<br>Comment s'écrit son prédécesseur immédiat en base ${b} ? En déduire l'écriture en base 10 de ces 2 nombres.`;
					texte_corr = `En base ${b} les chiffres sont 0`;
					for (let i = 1; i < b; i++) {
						texte_corr += `, ${i}`
					}
					texte_corr += ` donc le plus petit nombre à 3 chiffres est $(100)_${b}$ et son prédécesseur immédiat est $(${b - 1}${b - 1})_${b}$.`
					texte_corr += `<br> $(100)_${b}=1\\times${b}^2=${tex_nombre(b ** 2)}$ donc $(${b - 1}${b - 1})_${b}=${b ** 2}-1=${tex_nombre(b ** 2 - 1)}$.`
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
}


/**
* Passer d'une écriture en base 10 à l'écriture dans une autre base ou inversement
*
* * Convertir en base 10
* * Convertir vers une base entre 2 et 7
* * Trouver le plus grand nombre à 3 ou 4 chiffres d'une base ainsi que son successeur et le convertir en base 10 ou le plus petit et son prédecesseur
*
* @Auteur Rémi Angot
*/
function Passer_de_la_base_12_ou_16_a_la_10() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Passer de la base 12 ou 16 à la base 10 et inversement";
	this.consigne = "";
	this.nb_questions = 3;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1;

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = ['vers_base_10', 'vers_base_n_3_chiffres']
		if (this.nb_questions == 3) {
			type_de_questions_disponibles.push(choice(['vers_base_n_4_chiffres', 'plus_grand_4_chiffres', 'plus_petit_4_chiffres', 'plus_petit_3_chiffres']))
		}


		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let b = choice([12, 16]);
		if (b == 12) {
			this.introduction = 'Les symboles que l’on utilise en base 12 sont les dix chiffres habituels, la lettre A pour désigner 10 unités et la lettre B pour désigner 11 unités.';
		} else {
			this.introduction = 'Les symboles que l’on utilise en base 16 sont les dix chiffres habituels, la lettre A pour désigner 10 unités, B pour 11 unités, C pour 12 unités, D pour 13 unités, ';
			this.introduction += 'E pour 14 unités et F pour 15 unités.'
		}
		for (let i = 0, texte, texte_corr, n, m, chiffre1, chiffre2, chiffre3, chiffre4, cpt = 0; i < this.nb_questions && cpt < 50;) {
			switch (liste_type_de_questions[i]) {
				case 'vers_base_10':
					if (b == 12) {
						n = choice([choice(['A', 'B']) + randint(0, 9), randint(1, 9) + choice(['A', 'B']), choice(['A', 'B']) + choice(['A', 'B'])])
						m = choice(['A', 'B', randint(1, 9)]) + choice(['A', 'B', randint(0, 9)]) + choice(['A', 'B', randint(0, 9)]) + choice(['A', 'B', randint(0, 9)]);
					}
					if (b == 16) {
						n = choice(['A', 'B', 'C', 'D', 'E', 'F', randint(1, 9).toString()]) + choice(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
						m = choice(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) + choice(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) + choice(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
					}
					texte = `Les nombre $(${n})_{${b}}$ et $(${m})_{${b}}$ sont écrits en base ${b}. Donner leur écriture en base 10.`;
					texte_corr = `$(${n})_{${b}}=${valeur_base(n.toString()[0])}\\times${b}+${valeur_base(n.toString()[1])}=${tex_nombre(parseInt(n, b))}$`;
					if (b == 12) { //m est un nombre à 4 chiffres
						texte_corr += `<br>$(${m})_{${b}}=${valeur_base(m.toString()[0])}\\times${b}^3+${valeur_base(m.toString()[1])}\\times${b}^2+${valeur_base(m.toString()[2])}\\times${b}+${valeur_base(m.toString()[3])}=${tex_nombre(parseInt(m, b))}$`;
					} else { //m est un nombre à 3 chiffres
						texte_corr += `<br>$(${m})_{${b}}=${valeur_base(m.toString()[0])}\\times${b}^2+${valeur_base(m.toString()[1])}\\times${b}+${valeur_base(m.toString()[2])}=${tex_nombre(parseInt(m, b))}$`;
					}
					break;
				case 'vers_base_n_3_chiffres':
					if (b == 12) {
						chiffre1 = choice(['A', 'B', randint(1, 9).toString()])
						chiffre2 = choice(['A', 'B', randint(0, 9).toString()])
						chiffre3 = choice(['A', 'B', randint(1, 9).toString()])
					} else {
						chiffre1 = choice(['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
						chiffre2 = choice(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
						chiffre3 = choice(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
					}
					n = valeur_base(chiffre1) * b ** 2 + valeur_base(chiffre2) * b + valeur_base(chiffre3);
					texte = `Écrire en base ${b} le nombre ${nombre_avec_espace(n)}.`;
					texte_corr = `$${tex_nombre(n)}=${b}\\times${Math.floor(n / b)}+${mise_en_evidence(n % b)}$`;
					texte_corr += `<br>$${Math.floor(n / b)}=${b}\\times${mise_en_evidence(valeur_base(chiffre1))}+${mise_en_evidence(valeur_base(chiffre2))}$`;
					texte_corr += `<br> Finalement $${tex_nombre(n)}=(${chiffre1}${chiffre2}${chiffre3})_{${b}}$`
					break;
				case 'vers_base_n_4_chiffres':
					if (b == 12) {
						chiffre1 = choice(['A', 'B', randint(1, 9).toString()])
						chiffre2 = choice(['A', 'B', randint(0, 9).toString()])
						chiffre3 = choice(['A', 'B', randint(1, 9).toString()])
						chiffre4 = choice(['A', 'B', randint(1, 9).toString()])
					} else {
						chiffre1 = choice(['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
						chiffre2 = choice(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
						chiffre3 = choice(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
						chiffre4 = choice(['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
					}
					n = valeur_base(chiffre1) * b ** 3 + valeur_base(chiffre2) * b ** 2 + valeur_base(chiffre3) * b + valeur_base(chiffre4);
					texte = `Écrire en base ${b} le nombre ${nombre_avec_espace(n)}.`;
					texte_corr = `$${tex_nombre(n)}=${b}\\times${Math.floor(n / b)}+${mise_en_evidence(n % b)}$`;
					texte_corr += `<br>$${tex_nombre(Math.floor(n / b))}=${b}\\times${Math.floor(Math.floor(n / b) / b)}+${mise_en_evidence(Math.floor(n / b) % b)}$`;
					texte_corr += `<br>$${tex_nombre(Math.floor(Math.floor(n / b) / b))}=${b}\\times${mise_en_evidence(valeur_base(chiffre1))}+${mise_en_evidence(valeur_base(chiffre2))}$`;
					texte_corr += `<br> Finalement $${tex_nombre(n)}=(${chiffre1}${chiffre2}${chiffre3}${chiffre4})_{${b}}$`
					break;
				case 'plus_grand_4_chiffres':
					texte = `Quel est le plus grand nombre à 4 chiffres que l'on peut écrire en base ${b}.`;
					texte += `<br>Comment s'écrit son successeur immédiat en base ${b} ? En déduire l'écriture en base 10 de ces 2 nombres.`;
					if (b == 12) {
						texte_corr = `En base ${b} le plus grand chiffre est $B$`
						texte_corr += ` donc le plus grand nombre à 4 chiffres est $(BBBB)_{${b}}$ et son successeur immédiat est $(10000)_{${b}}$.`
						texte_corr += `<br> $(10000)_{${b}}=1\\times${b}^4=${tex_nombre(b ** 4)}$ donc $(BBBB)_{${b}}=${b ** 4}-1=${tex_nombre(b ** 4 - 1)}$.`
					} else {
						texte_corr = `En base ${b} le plus grand chiffre est $F$`
						texte_corr += ` donc le plus grand nombre à 4 chiffres est $(FFFF)_{${b}}$ et son successeur immédiat est $(10000)_{${b}}$.`
						texte_corr += `<br> $(10000)_{${b}}=1\\times${b}^4=${tex_nombre(b ** 4)}$ donc $(FFFF)_{${b}}=${b ** 4}-1=${tex_nombre(b ** 4 - 1)}$.`
					}
					break;
				case 'plus_grand_3_chiffres':
					texte = `Quel est le plus grand nombre à 3 chiffres que l'on peut écrire en base ${b}.`;
					texte += `<br>Comment s'écrit son successeur immédiat en base ${b} ? En déduire l'écriture en base 10 de ces 2 nombres.`;
					if (b == 12) {
						texte_corr = `En base ${b} le plus grand chiffre est $B$`
						texte_corr += ` donc le plus grand nombre à 3 chiffres est $(BBB)_{${b}}$ et son successeur immédiat est $(1000)_{${b}}$.`
						texte_corr += `<br> $(1000)_{${b}}=1\\times${b}^3=${tex_nombre(b ** 3)}$ donc $(BBB)_{${b}}=${b ** 3}-1=${tex_nombre(b ** 3 - 1)}$.`
					} else {
						texte_corr = `En base ${b} le plus grand chiffre est $F$`
						texte_corr += ` donc le plus grand nombre à 3 chiffres est $(FFF)_{${b}}$ et son successeur immédiat est $(1000)_{${b}}$.`
						texte_corr += `<br> $(1000)_{${b}}=1\\times${b}^3=${tex_nombre(b ** 3)}$ donc $(FFF)_{${b}}=${b ** 3}-1=${tex_nombre(b ** 3 - 1)}$.`
					}
					break;
				case 'plus_petit_4_chiffres':
					texte = `Quel est le plus petit nombre à 4 chiffres que l'on peut écrire en base ${b}.`;
					texte += `<br>Comment s'écrit son prédécesseur immédiat en base ${b} ? En déduire l'écriture en base 10 de ces 2 nombres.`;
					if (b == 12) {
						texte_corr = `En base ${b} le plus petit chiffre est $0$ et le plus grand chiffre est $B$`
						texte_corr += ` donc le plus petit nombre à 4 chiffres est $(1000)_{${b}}$ et son prédécesseur immédiat est $(BBB)_{${b}}$.`
						texte_corr += `<br> $(1000)_{${b}}=1\\times${b}^3=${tex_nombre(b ** 3)}$ donc $(BBB)_{${b}}=${b ** 3}-1=${tex_nombre(b ** 3 - 1)}$.`
					} else {
						texte_corr = `En base ${b} le plus petit chiffre est $0$ et le plus grand chiffre est $F$`
						texte_corr += ` donc le plus petit nombre à 4 chiffres est $(1000)_{${b}}$ et son prédécesseur immédiat est $(FFF)_{${b}}$.`
						texte_corr += `<br> $(1000)_{${b}}=1\\times${b}^3=${tex_nombre(b ** 3)}$ donc $(FFF)_{${b}}=${b ** 3}-1=${tex_nombre(b ** 3 - 1)}$.`
					}
					break;
				case 'plus_petit_3_chiffres':
					texte = `Quel est le plus petit nombre à 3 chiffres que l'on peut écrire en base ${b}.`;
					texte += `<br>Comment s'écrit son prédécesseur immédiat en base ${b} ? En déduire l'écriture en base 10 de ces 2 nombres.`;
					if (b == 12) {
						texte_corr = `En base ${b} le plus petit chiffre est $0$ et le plus grand chiffre est $B$`
						texte_corr += ` donc le plus petit nombre à 3 chiffres est $(100)_{${b}}$ et son prédécesseur immédiat est $(BB)_{${b}}$.`
						texte_corr += `<br> $(100)_{${b}}=1\\times${b}^2=${tex_nombre(b ** 2)}$ donc $(BB)_{${b}}=${b ** 2}-1=${tex_nombre(b ** 2 - 1)}$.`
					} else {
						texte_corr = `En base ${b} le plus petit chiffre est $0$ et le plus grand chiffre est $F$`
						texte_corr += ` donc le plus petit nombre à 3 chiffres est $(100)_{${b}}$ et son prédécesseur immédiat est $(FF)_{${b}}$.`
						texte_corr += `<br> $(100)_{${b}}=1\\times${b}^2=${tex_nombre(b ** 2)}$ donc $(FF)_{${b}}=${b ** 2}-1=${tex_nombre(b ** 2 - 1)}$.`
					}
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
}


/**
* Problèmes de variations en pourcentage
*
* * Situations variées : prix soldé ou augmenté, effectif d'un collège ou lycée, facture, population d'une ville
* 
* * Calculer le résultat d'une évolution 
* * Exprimer l'évolution en pourcentage
* * Retrouver la situation initiale
* * Mélange des 3 types de problèmes
* @Auteur Rémi Angot
* 3P10
*/
function Evolutions_en_pourcentage() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Variations en pourcentage";
	this.consigne = "";
	this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 4; // type de questions

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles = [];
		if (this.sup == 1) {
			type_de_questions_disponibles = ['finale'];
		}
		if (this.sup == 2) {
			type_de_questions_disponibles = ['evolution'];
		}
		if (this.sup == 3) {
			type_de_questions_disponibles = ['initiale'];
		}
		if (this.sup == 4) {
			type_de_questions_disponibles = ['finale', 'evolution', 'initiale'];
		}
		let type_de_situations_disponibles = ['prix', 'etablissement', 'facture', 'population'];
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_type_de_situations = combinaison_listes(type_de_situations_disponibles, this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, depart, arrive, taux, coeff, cpt = 0; i < this.nb_questions && cpt < 50;) {

			switch (liste_type_de_situations[i]) {
				case 'prix':
					depart = choice([calcul(randint(11, 99) / 10), randint(11, 99), randint(11, 99) * 10]);
					taux = choice([10, 20, 30, 40, 60]);
					taux *= choice([-1, 1]);
					coeff = tex_nombrec(1 + taux / 100)
					arrive = calcul(depart * (1 + taux / 100));
					switch (liste_type_de_questions[i]) {
						case 'finale':
							if (taux > 0) {
								texte = `Un article coûtait $${tex_prix(depart)}$ € et son prix a augmenté de $${taux}~\\%$. Calculer son nouveau prix.`
								texte_corr = `Une augmentation de $${taux}~\\%$ revient à multiplier par $100~\\% + ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.`
								texte_corr += `<br>$${tex_prix(depart)}\\times ${coeff} = ${tex_prix(arrive)}$`
								texte_corr += `<br>Le nouveau prix de cet article est ${tex_prix(arrive)} €.`
							} else {
								texte = `Un article coûtait $${tex_prix(depart)}$ € et son prix est soldé à $${taux}~\\%$. Calculer son nouveau prix.`
								texte_corr = `Une diminution de $${abs(taux)}~\\%$ revient à multiplier par $100~\\% ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.`
								texte_corr += `<br>$${tex_prix(depart)}\\times ${coeff} = ${tex_prix(arrive)}$`
								texte_corr += `<br>Le nouveau prix de cet article est ${tex_prix(arrive)} €.`
							}
							break;
						case 'initiale':
							if (taux > 0) {
								texte = `Après une augmentation de $${taux}~\\%$ un article coûte maintenant $${tex_prix(arrive)}$ €. Calculer son prix avant l'augmentation.`
								texte_corr = `Une augmentation de $${taux}~\\%$ revient à multiplier par $100~\\% + ${taux}~\\%=${100 + taux}~\\% = ${coeff}$.<br>Pour retrouver le prix initial, on va donc diviser le prix final par ${coeff}.`
								texte_corr += `<br>$${tex_prix(arrive)}\\div ${coeff} = ${tex_prix(depart)}$`
								texte_corr += `<br>Avant l'augmentation cet article coûtait ${tex_prix(depart)} €.`
							} else {
								texte = `Soldé à $${taux}~\\%$ un article coûte maintenant $${tex_prix(arrive)}$ €. Calculer son prix avant les soldes.`
								texte_corr = `Une diminution de $${abs(taux)}~\\%$ revient à multiplier par $100~\\% ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.<br>Pour retrouver le prix initial, on va donc diviser le prix final par ${coeff}.`
								texte_corr += `<br>$${tex_prix(arrive)}\\div ${coeff} = ${tex_prix(depart)}$`
								texte_corr += `<br>Avant les soldes cet article coûtait ${tex_prix(depart)} €.`
							}
							break;
						case 'evolution':
							if (taux > 0) {
								texte = `Un article qui coûtait $${tex_prix(depart)}$ € coûte maintenant $${tex_prix(arrive)}$ €. Exprimer l'augmentation du prix en pourcentage.`
								texte_corr = `$${tex_prix(arrive)}\\div ${tex_prix(depart)} = ${coeff} =  ${100 + taux}~\\% = 100~\\%+${taux}~\\%$`
								texte_corr += `<br>Le prix a été multiplié par ${coeff}, il a donc augmenté de $${taux}~\\%$.`
							} else {
								texte = `Un article qui coûtait $${tex_prix(depart)}$ € coûte maintenant $${tex_prix(arrive)}$ €. Exprimer la réduction du prix en pourcentage.`
								texte_corr = `$${tex_prix(arrive)}\\div ${tex_prix(depart)} = ${coeff} =  ${100 + taux}~\\% = 100~\\%${taux}~\\%$`
								texte_corr += `<br>Le prix a été multiplié par ${coeff}, il a donc diminué de $${abs(taux)}~\\%$.`
							}
							break;
					}
					break;
				case 'etablissement':
					//Le nombre d'élève doit être entier
					//Multiple de 50 et multiple de 2%
					//Multiple de 20 et multiple de 5%
					//Multiple de 100 et n%
					switch (randint(1, 3)) {
						case 1:
							depart = 50 * randint(7, 24);
							taux = 2 * randint(1, 5);
							break;
						case 2:
							depart = 20 * randint(17, 60);
							taux = 5 * randint(1, 3);
							break;
						case 3:
							depart = 100 * randint(4, 12);
							taux = randint(1, 11);
							break;
					}
					arrive = calcul(depart * (1 + taux / 100));
					coeff = tex_nombrec(1 + taux / 100)
					let date = new Date()
					let cetteAnnee = date.getFullYear();
					let anneeDerniere = cetteAnnee - 1;
					let etablissement = choice(['collège', 'lycée']);
					switch (liste_type_de_questions[i]) {
						case 'finale':
							if (taux > 0) {
								texte = `Un ${etablissement} avait $${tex_nombre(depart)}$ élèves en ${anneeDerniere}. Depuis, le nombre d'élèves a augmenté de $${taux}~\\%$. Calculer le nombre d'élèves dans ce ${etablissement} cette année.`
								texte_corr = `Une augmentation de $${taux}~\\%$ revient à multiplier par $100~\\% + ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.`
								texte_corr += `<br>$${tex_nombre(depart)}\\times ${coeff} = ${tex_nombre(arrive)}$`
								texte_corr += `<br>Il y a maintenant ${string_nombre(arrive)} élèves dans ce ${etablissement}.`
							} else {
								texte = `Un ${etablissement} avait $${tex_nombre(depart)}$ élèves en ${anneeDerniere}. Depuis, le nombre d'élèves a diminué de $${abs(taux)}~\\%$. Calculer le nombre d'élèves dans ce ${etablissement} cette année.`
								texte_corr = `Une diminution de $${abs(taux)}~\\%$ revient à multiplier par $100~\\% ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.`
								texte_corr += `<br>$${tex_nombre(depart)}\\times ${coeff} = ${tex_nombre(arrive)}$`
								texte_corr += `<br>Il y a maintenant ${string_nombre(arrive)} élèves dans ce ${etablissement}.`
							}
							break;
						case 'initiale':
							if (taux > 0) {
								texte = `Depuis ${anneeDerniere} le nombre d'élèves d'un ${etablissement} a augmenté de $${taux}~\\%$. Il y a maintenant $${tex_nombre(arrive)}$ élèves. Calculer le nombre d'élèves en ${anneeDerniere} dans cet établissement.`
								texte_corr = `Une augmentation de $${taux}~\\%$ revient à multiplier par $100~\\% + ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.<br>Pour retrouver le nombre initial d'élèves, on va donc diviser le nombre actuel d'élèves par ${coeff}.`
								texte_corr += `<br>$${tex_nombre(arrive)}\\div ${coeff} = ${tex_nombre(depart)}$`
								texte_corr += `<br>En ${anneeDerniere}, il y avait ${string_nombre(depart)} élèves dans ce ${etablissement}.`
							} else {
								texte = `Depuis ${anneeDerniere} le nombre d'élèves d'un ${etablissement} a diminué de $${taux}~\\%$. Il y a maintenant $${tex_nombre(arrive)}$ élèves. Calculer le nombre d'élèves en ${anneeDerniere} dans cet établissement.`
								texte_corr = `Une diminution de $${abs(taux)}~\\%$ revient à multiplier par $100~\\% ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.<br>Pour retrouver le nombre initial d'élèves, on va donc diviser le nombre actuel d'élèves par ${coeff}.`
								texte_corr += `<br>$${tex_nombre(arrive)}\\div ${coeff} = ${tex_nombre(depart)}$`
								texte_corr += `<br>En ${anneeDerniere}, il y avait ${string_nombre(depart)} élèves dans ce ${etablissement}.`
							}
							break;
						case 'evolution':
							texte = `En ${anneeDerniere}, il y avait $${tex_nombre(depart)}$ élèves dans un ${etablissement}. En ${cetteAnnee}, ils sont $${tex_nombre(arrive)}$. Exprimer la variation du nombre d'élèves de cet établissement en pourcentage.`
							if (taux > 0) {
								texte_corr = `$${tex_nombre(arrive)}\\div ${tex_nombre(depart)} = ${coeff} =  ${100 + taux}~\\% = 100~\\%+${taux}~\\%$`
								texte_corr += `<br>Le nombre d'élèves a été multiplié par ${coeff}, il a donc augmenté de $${taux}~\\%$.`
							} else {
								texte = `Un article qui coûtait $${tex_nombre(depart)}$ € coûte maintenant $${tex_nombre(arrive)}$ €. Exprimer la réduction du prix en pourcentage.`
								texte_corr = `$${tex_nombre(arrive)}\\div ${tex_prix(depart)} = ${coeff} =  ${100 + taux}~\\% = 100~\\%${taux}~\\%$`
								texte_corr += `<br>Le nombre d'élèves a été multiplié par ${coeff}, il a donc diminué de $${abs(taux)}~\\%$.`
							}
							break;
					}
					break;
				case 'facture':
					depart = randint(700, 1400);
					taux = randint(1, 12);
					taux *= choice([-1, 1]);
					coeff = tex_nombrec(1 + taux / 100)
					arrive = calcul(depart * (1 + taux / 100));
					let facture = choice(["ma facture annuelle d'électricité", "ma facture annuelle de gaz", "ma taxe d'habitation", "mon ordinateur", "mon vélo électrique"])
					switch (liste_type_de_questions[i]) {
						case 'finale':
							if (taux > 0) {
								texte = `Le prix de ${facture} était de $${tex_prix(depart)}$ € l'année dernière et il a augmenté de $${taux}~\\%$. Calculer son nouveau prix.`
								texte_corr = `Une augmentation de $${taux}~\\%$ revient à multiplier par $100~\\% + ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.`
								texte_corr += `<br>$${tex_prix(depart)}\\times ${coeff} = ${tex_prix(arrive)}$`
								texte_corr += `<br>Le prix de ${facture} est maintenant de ${tex_prix(arrive)} €.`
							} else {
								texte = `Le prix de ${facture} était de $${tex_prix(depart)}$ € l'année dernière et il a diminué de $${abs(taux)}~\\%$. Calculer son nouveau prix.`
								texte_corr = `Une diminution de $${abs(taux)}~\\%$ revient à multiplier par $100~\\% ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.`
								texte_corr += `<br>$${tex_prix(depart)}\\times ${coeff} = ${tex_prix(arrive)}$`
								texte_corr += `<br>Le prix de ${facture} est maintenant de ${tex_prix(arrive)} €.`
							}
							break;
						case 'initiale':
							if (taux > 0) {
								texte = `Après une augmentation de $${taux}~\\%$ le prix de ${facture} est maintenant $${tex_prix(arrive)}$ €. Calculer son prix avant l'augmentation.`
								texte_corr = `Une augmentation de $${taux}~\\%$ revient à multiplier par $100~\\% + ${taux}~\\%=${100 + taux}~\\% = ${coeff}$.<br>Pour retrouver le prix initial, on va donc diviser le prix final par ${coeff}.`
								texte_corr += `<br>$${tex_prix(arrive)}\\div ${coeff} = ${tex_prix(depart)}$`
								texte_corr += `<br>Avant l'augmentation le prix de ${facture} était de ${tex_prix(depart)} €.`
							} else {
								texte = `Après une diminution de $${abs(taux)}~\\%$ ${facture} coûte maintenant $${tex_prix(arrive)}$ €. Calculer son prix avant les soldes.`
								texte_corr = `Une diminution de $${abs(taux)}~\\%$ revient à multiplier par $100~\\% ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.<br>Pour retrouver le prix initial, on va donc diviser le prix final par ${coeff}.`
								texte_corr += `<br>$${tex_prix(arrive)}\\div ${coeff} = ${tex_prix(depart)}$`
								texte_corr += `<br>Avant la diminution le prix de ${facture} était de ${tex_prix(depart)} €.`
							}
							break;
						case 'evolution':
							if (taux > 0) {
								texte = `Le prix de ${facture} est passé de $${tex_prix(depart)}$ € à $${tex_prix(arrive)}$ €. Exprimer cette augmentation en pourcentage.`
								texte_corr = `$${tex_prix(arrive)}\\div ${tex_prix(depart)} = ${coeff} =  ${100 + taux}~\\% = 100~\\%+${taux}~\\%$`
								texte_corr += `<br>Le prix a été multiplié par ${coeff}, il a donc augmenté de $${taux}~\\%$.`
							} else {
								texte = `Le prix de ${facture} est passé de $${tex_prix(depart)}$ € à $${tex_prix(arrive)}$ €. Exprimer cette diminution en pourcentage.`
								texte_corr = `$${tex_prix(arrive)}\\div ${tex_prix(depart)} = ${coeff} =  ${100 + taux}~\\% = 100~\\%${taux}~\\%$`
								texte_corr += `<br>Le prix a été multiplié par ${coeff}, il a donc diminué de $${abs(taux)}~\\%$.`
							}
							break;
					}
					break;
				case 'population':
					depart = choice([randint(11, 99) * 1000, randint(11, 99) * 10000]);
					taux = randint(5, 35);
					taux *= choice([-1, 1]);
					coeff = tex_nombrec(1 + taux / 100)
					arrive = calcul(depart * (1 + taux / 100));
					let nb = randint(5, 15);
					switch (liste_type_de_questions[i]) {
						case 'finale':
							if (taux > 0) {
								texte = `Il y a ${nb} ans, la population d'une ville était de $${tex_nombre(depart)}$ habitants. Depuis, elle a augmenté de $${taux}~\\%$. Calculer le nombre d'habitants actuel de cette ville.`
								texte_corr = `Une augmentation de $${taux}~\\%$ revient à multiplier par $100~\\% + ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.`
								texte_corr += `<br>$${tex_nombre(depart)}\\times ${coeff} = ${tex_nombre(arrive)}$`
								texte_corr += `<br>La population de cette ville est maintenant de $${tex_nombre(arrive)}$ habitants.`
							} else {
								texte = `Il y a ${nb} ans, la population d'une ville était de $${tex_nombre(depart)}$ habitants. Depuis, elle a diminué de $${abs(taux)}~\\%$. Calculer le nombre d'habitants actuel de cette ville.`
								texte_corr = `Une diminution de $${abs(taux)}~\\%$ revient à multiplier par $100~\\% ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.`
								texte_corr += `<br>$${tex_nombre(depart)}\\times ${coeff} = ${tex_nombre(arrive)}$`
								texte_corr += `<br>La population de cette ville est maintenant de $${tex_nombre(arrive)}$ habitants.`
							}
							break;
						case 'initiale':
							if (taux > 0) {
								texte = `En ${nb} ans, la population d'une ville a augmenté de $${taux}~\\%$ et est maintenant $${tex_nombre(arrive)}$ habitants. Calculer sa population d'il y a ${nb} ans.`
								texte_corr = `Une augmentation de $${taux}~\\%$ revient à multiplier par $100~\\% + ${taux}~\\%=${100 + taux}~\\% = ${coeff}$.<br>Pour retrouver la population initiale, on va donc diviser le nombre d'habitants actuel par ${coeff}.`
								texte_corr += `<br>$${tex_nombre(arrive)}\\div ${coeff} = ${tex_nombre(depart)}$`
								texte_corr += `<br>Il y a ${nb} ans cette ville comptait $${tex_nombre(depart)}$ habitants.`
							} else {
								texte = `En ${nb} ans, la population d'une ville a diminué de $${abs(taux)}~\\%$ et est maintenant $${tex_nombre(arrive)}$ habitants. Calculer sa population d'il y a ${nb} ans.`
								texte_corr = `Une diminution de $${abs(taux)}~\\%$ revient à multiplier par $100~\\% ${taux}~\\% = ${100 + taux}~\\% = ${coeff}$.<br>Pour retrouver la population initiale, on va donc diviser le nombre d'habitants actuel par ${coeff}.`
								texte_corr += `<br>$${tex_nombre(arrive)}\\div ${coeff} = ${tex_nombre(depart)}$`
								texte_corr += `<br>Il y a ${nb} ans cette ville comptait $${tex_nombre(depart)}$ habitants.`
							}
							break;
						case 'evolution':
							if (taux > 0) {
								texte = `En ${nb} ans, la population d'une ville est passé de $${tex_nombre(depart)}$ habitants à $${tex_nombre(arrive)}$. Exprimer cette augmentation en pourcentage.`
								texte_corr = `$${tex_nombre(arrive)}\\div ${tex_nombre(depart)} = ${coeff} =  ${100 + taux}~\\% = 100~\\%+${taux}~\\%$`
								texte_corr += `<br>La population a été multipliée par ${coeff} elle a donc augmenté de $${abs(taux)}~\\%$.`
							} else {
								texte = `En ${nb} ans, la population d'une ville est passé de $${tex_nombre(depart)}$ habitants à $${tex_nombre(arrive)}$. Exprimer cette diminution en pourcentage.`
								texte_corr = `$${tex_nombre(arrive)}\\div ${tex_nombre(depart)} = ${coeff} =  ${100 + taux}~\\% = 100~\\%${taux}~\\%$`
								texte_corr += `<br>La population a été multipliée par ${coeff} elle a donc diminué de $${abs(taux)}~\\%$.`
							}
							break;
					}
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
	this.besoin_formulaire_numerique = ['Niveau de difficulté', 4, '1 : Déterminer le résultat après une variation en pourcentage\n2 : Exprimer une variation en pourcentage\n3 : Calculer la valeur initiale en connaissant la variation et la situation finale\n4 : Mélange des 3 types de problèmes'];
}


/**
* Déterminer le coefficient de proportionnalité associé à une évolution en pourcentage ou l'inverse
*
* 
* @Auteur Rémi Angot
* 3P10-1
*/
function Coefficient_evolution() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Coefficient multiplicateur d'une variation en pourcentage";
	this.consigne = "Compléter.";
	this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let texte_aide = '- Augmenter un nombre de $t~\\%$ revient à le multiplier par $1+\\dfrac{t}{100}$.';
		texte_aide += '<br>'
		texte_aide += '<br>- Diminuer un nombre de $t~\\%$ revient à le multiplier par $1-\\dfrac{t}{100}$.'
		texte_aide += '<br>'
		texte_aide += '<br><b>Exemples</b> :'
		texte_aide += '<br>- Diminuer un nombre de $20~\\%$ revient à le multiplier par $1-\\dfrac{20}{100}=1-0,20=0,8$.'
		texte_aide += '<br><br>- Augmenter un nombre de $5~\\%$ revient à le multiplier par $1+\\dfrac{5}{100}=1+0,05=1,05$.'

		this.bouton_aide = modal_url(numero_de_l_exercice, '/aide/3P10');

		let type_de_questions_disponibles = [];
		if (this.sup == 1) {
			type_de_questions_disponibles = ['coef+', 'coef-'];
		}
		if (this.sup == 2) {
			type_de_questions_disponibles = ['taux+', 'taux-'];
		}
		if (this.sup == 3) {
			type_de_questions_disponibles = ['coef+', 'coef-', 'taux+', 'taux-'];
		}
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, taux, coeff, cpt = 0; i < this.nb_questions && cpt < 50;) {
			taux = choice([randint(1, 9) * 10, randint(1, 9)]);
			switch (liste_type_de_questions[i]) {
				case 'coef+':
					texte = `Augmenter de $${taux}~\\%$ revient à multiplier par...`;
					coeff = tex_prix(calcul(1 + taux / 100));
					texte_corr = `Augmenter de $${taux}~\\%$ revient à multiplier par ${coeff} car $100~\\% + ${taux}~\\% = ${100 + taux}~\\%$.`;
					break;
				case 'coef-':
					texte = `Diminuer de $${taux}~\\%$ revient à multiplier par...`;
					coeff = tex_prix(calcul(1 - taux / 100));
					texte_corr = `Diminuer de $${taux}~\\%$ revient à multiplier par ${coeff} car $100~\\% - ${taux}~\\% = ${100 - taux}~\\%$.`;
					break;
				case 'taux+':
					coeff = tex_nombrec(1 + taux / 100);
					texte = `Multiplier par ${coeff} revient à...`;
					texte_corr = `Multiplier par ${coeff} revient à augmenter de $${taux}~\\%$ car $${coeff} = ${100 + taux}~\\% = 100~\\% + ${taux}~\\%$.`;
					break;
				case 'taux-':
					coeff = tex_nombrec(1 - taux / 100);
					texte = `Multiplier par ${coeff} revient à...`;
					texte_corr = `Multiplier par ${coeff} revient à diminuer de $${taux}~\\%$ car $${coeff} = ${100 - taux}~\\% = 100~\\% - ${taux}~\\%$.`;
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
	this.besoin_formulaire_numerique = ['Niveau de difficulté', 3, '1 : Déterminer le coefficient\n2 : Exprimer une variation en pourcentage\n3 : Mélange des 2 types de questions'];
}

/**
* Banque de problèmes utilisant le théorème de Thalès et différentes propriétés de géométrie
* @Auteur Rémi Angot
* 3G20-1
*/
function Problemes_Thales() {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Problèmes avec le théorème de Thalès";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;


	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let texte = '';
		let texte_corr = '';
		let type_de_questions = randint(1, 2);
		let A, B, C, D, M, N, x, k, y, p, p2, codage1, codage2, codage3, codage4, sMN, sBD, sCote, texte1, texte2, texte3, texte4, labels, BC, BD, MN


		switch (type_de_questions) {
			case 1:
				x = randint(6, 10);
				k = calcul(randint(12, 19) / 10);
				y = calcul(randint(30, 50) / 10);
				[A, B, C, D, E] = creerNomDePolygone(5)
				texte = `On sait que $${A}${E}=${tex_nombre(x)}$ cm ; $${A}${D}=${tex_nombrec(k * x)}$ cm et $${E}${B}=${tex_nombre(y)}$ cm.<br>`;
				texte += `Calculer la valeur exacte de $${D}${C}$.`
				if (sortie_html) {
					// Pour le svg toutes les longueurs sont multipliées par 20
					let fig1 = `<div><svg width="450" height="300" viewBox="-40 -40 450 300" xmlns="http://www.w3.org/2000/svg">
					  <polygon points="0,0 ${calcul(k * x * 20)},0 ${calcul(k * x * 20)},${calcul(k * y * 20)}  " fill="none" stroke="black" />
					  <line x1="${calcul(x * 20)}" y1="0" x2="${calcul(x * 20)}" y2="${calcul(y * 20)}" stroke="black" /> //[BE]
					  <polyline points="${calcul(x * 20 - 10)},0 ${calcul(x * 20 - 10)},10 ${calcul(x * 20)},10" fill="none" stroke="black" />  //Angle droit en E
					  <polyline points="${calcul(k * x * 20 - 10)},0 ${calcul(k * x * 20 - 10)},10 ${calcul(k * x * 20)},10" fill="none" stroke="black" />  //Angle droit en D
					  <text x="-10" y="-10" text-anchor="middle" alignment-baseline="central">${A}</text> 
					  <text x="${calcul(x * 20)}" y="-10" text-anchor="middle" alignment-baseline="central">${E}</text> 
					  <text x="${calcul(x * 20)}" y="${calcul(y * 20 + 10)}" text-anchor="middle" alignment-baseline="central">${B}</text> 
					  <text x="${calcul(k * x * 20 + 10)}" y="-10" text-anchor="middle" alignment-baseline="central">${D}</text>
					  <text x="${calcul(k * x * 20 + 10)}" y="${calcul(k * y * 20 + 10)}" text-anchor="middle" alignment-baseline="central">${C}</text>
					</svg></div>`

					let fig2 = `<div><svg width="450" height="300" viewBox="-40 -260 450 300" xmlns="http://www.w3.org/2000/svg">
					  <polygon points="0,0 ${calcul(k * x * 20)},0 ${calcul(k * x * 20)},${calcul(-k * y * 20)}  " fill="none" stroke="black" />
					  <line x1="${calcul(x * 20)}" y1="0" x2="${calcul(x * 20)}" y2="${calcul(-y * 20)}" stroke="black" /> //[BE]
					  <polyline points="${calcul(x * 20 - 10)},0 ${calcul(x * 20 - 10)},-10 ${calcul(x * 20)},-10" fill="none" stroke="black" />  //Angle droit en E
					  <polyline points="${calcul(k * x * 20 - 10)},0 ${calcul(k * x * 20 - 10)},-10 ${calcul(k * x * 20)},-10" fill="none" stroke="black" />  //Angle droit en D
					  <text x="-10" y="-10" text-anchor="middle" alignment-baseline="central">${A}</text> 
					  <text x="${calcul(x * 20)}" y="10" text-anchor="middle" alignment-baseline="central">${E}</text> 
					  <text x="${calcul(x * 20)}" y="${calcul(-y * 20 - 10)}" text-anchor="middle" alignment-baseline="central">${B}</text> 
					  <text x="${calcul(k * x * 20 + 10)}" y="10" text-anchor="middle" alignment-baseline="central">${D}</text>
					  <text x="${calcul(k * x * 20 + 10)}" y="${calcul(-k * y * 20 - 10)}" text-anchor="middle" alignment-baseline="central">${C}</text>
					</svg></div>`

					texte += choice([fig1, fig2])



				} else {
					let fig1 = `\\begin{tikzpicture}[scale=.6]
\\draw (0,0)--(${calcul(k * x)},0)--(${calcul(k * x)},${-k * y})--cycle;
\\draw (${x},0)--(${x},${-y});
\\draw (${x},0) rectangle ++(-.5,-.5);
\\draw (${calcul(k * x)},0) rectangle ++(-.5,-.5);
\\node [above left] at (0,0) {${A}};
\\node [above] at (${x},0) {${E}};
\\node [above right] at (${k * x},0) {${D}};
\\node [below right] at (${k * x},${-k * y}) {${C}};
\\node [below] at (${x},${-y}) {${B}};
\\end{tikzpicture}`

					let fig2 = `\\begin{tikzpicture}[scale=.6]
\\draw (0,0)--(${calcul(k * x)},0)--(${calcul(k * x)},${k * y})--cycle;
\\draw (${x},0)--(${x},${y});
\\draw (${x},0) rectangle ++(.5,.5);
\\draw (${calcul(k * x)},0) rectangle ++(.5,.5);
\\node [below left] at (0,0) {${A}};
\\node [below] at (${x},0) {${E}};
\\node [below right] at (${k * x},0) {${D}};
\\node [above right] at (${k * x},${k * y}) {${C}};
\\node [above] at (${x},${y}) {${B}};
\\end{tikzpicture}`

					texte += '<br>' + choice([fig1, fig2])

				}

				texte_corr = `Les droites $(${E}${B})$ et $(${D}${C})$ sont perpendiculaires à la même droite $(${A}${D})$, elles sont donc parallèles entre elles.`
				texte_corr += `<br>De plus les points $${A}$, $${E}$, $${D}$  et $${A}$, $${B}$, $${C}$ sont alignés dans cet ordre donc d'après le théorème de Thalès on a :`
				texte_corr += `<br><br>$\\dfrac{${A}${E}}{${A}${D}}=\\dfrac{${E}${B}}{${D}${C}}=\\dfrac{${A}${B}}{${A}${C}}$`
				texte_corr += `<br><br>$\\dfrac{${tex_nombre(x)}}{${tex_nombrec(k * x)}}=\\dfrac{${tex_nombre(y)}}{${D}${C}}$`
				texte_corr += `<br><br>$${D}${C}=\\dfrac{${tex_nombrec(k * x)}\\times${tex_nombre(y)}}{${tex_nombre(x)}}=${tex_nombrec(k * y)}$`
				break;


			case 2:
				let [nomA, nomB, nomC, nomD] = creerNomDePolygone(4, ['M', 'N'])
				BC = randint(2, 6)
				BD = 2 * BC
				MN = calcul(BD * choice([0.2, 0.3, 0.4]))
				A = point(0, 4, nomA, 'above')
				B = point(7, 4, nomB, 'above')
				C = point(7, 0, nomC, 'below')
				D = point(0, 0, nomD, 'below')
				p = polygone(A, B, C, D)
				codage1 = codageAngleDroit(D, A, B)
				codage2 = codageAngleDroit(A, B, C)
				codage3 = codageAngleDroit(B, C, D)
				codage4 = codageAngleDroit(C, D, A)
				M = pointSurSegment(A, B, longueur(A, B) / 3, 'M', 'above')
				N = pointSurSegment(A, D, longueur(A, D) / 3, 'N', 'left')
				sMN = segment(M, N)
				sBD = segment(B, D)
				sCote = segment(point(N.x - 1.3, N.y), point(D.x - 1.3, D.y))
				sCote.styleExtremites = '<->'
				texte1 = texteParPoint('?', milieu(point(N.x - 1.5, N.y), point(D.x - 1.5, D.y)), 'gauche')
				texte2 = texteSurSegment(nombre_avec_espace(BD) + ' cm', B, D)
				texte3 = texteSurSegment(nombre_avec_espace(MN) + ' cm', M, N)
				texte4 = texteSurSegment(nombre_avec_espace(BC) + ' cm', B, C)

				labels = labelPoint(M, N, A, B, C, D)

				texte = `Sur la figure ci-dessous $${nomA + nomB + nomC + nomD}$ est un rectangle et $(MN)$ est parallèle à la diagonale $(${nomB + nomD})$.`
				texte += `<br>Calculer la longueur $${nomD + 'N'}$ au millimètre près.<br><br>`
				texte += mathalea2d({
					xmin: -2,
					xmax: 9,
					ymin: -1.5,
					ymax: 5,
					scale: .8
				}, p, codage1, codage2, codage3, codage4, sMN, sBD, sCote, texte1, texte2, texte3, texte4, labels)

				texte_corr = `Dans le triangle $${nomA + nomB + nomD}$, $M$ est un point de $[${nomA + nomB}]$, $N$ est un point de $[${nomA + nomD}]$ et $(MN)$ est parallèle à $(${nomB + nomD})$ donc d'après le théorème de Thalès on a : `
				texte_corr += `<br><br> $${tex_fraction(nomA + 'M', nomA + nomB)}=${tex_fraction(nomA + 'N', nomA + nomD)}=${tex_fraction('MN', nomB + nomD)}$`
				texte_corr += `<br><br> $${tex_fraction(nomA + 'M', nomA + nomB)}=${tex_fraction(nomA + 'N', BC)}=${tex_fraction(tex_nombre(MN), tex_nombre(BD))}$`
				texte_corr += `<br><br> $${nomA}N = ${tex_fraction(BC + '\\times' + tex_nombre(MN), BD)}=${tex_nombre(arrondi(calcul(BC * MN / BD), 1))}$ cm`
				texte_corr += `<br><br> Les points $${nomA}$, $N$ et $${nomD}$ sont alignés dans cet ordre donc $N${nomD}=${nomA + nomD}-${nomA}N= ${BC}-${tex_nombre(arrondi(calcul(BC * MN / BD), 1))}=${tex_nombre(arrondi(calcul(BC - BC * MN / BD), 1))}$ cm.`
				break;
		}

		this.liste_questions[0] = texte;
		this.liste_corrections[0] = texte_corr;
		liste_de_question_to_contenu(this);
		// this.besoin_formulaire_numerique = ['Type de questions',2,"1 : Donner l'égalité\n2 : Compléter une égalité avec une addition ou une soustraction"];
		// this.besoin_formulaire2_case_a_cocher = ['Sans figures']
	}
}
/**
 * 3G23 reconnaitre des triangles égaux
 * @author Jean-Claude Lhote et Sébastien Lozano
 */
function TrianglesSemblables() {
	'use strict'
	Exercice.call(this)
	this.debug = false;
	this.titre = "Reconnaître des triangles semblables dans différentes configurations";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.nouvelle_version = function (numero_de_l_exercice) {
		let coeff = 50
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let texte = '';
		let texte_corr = '';
		let type_de_questions = randint(1, 1);
		switch (type_de_questions) {
			case 1:
				let trouve = false, aireABC, A, B, C, M, p, q, r, s, X, G, Gq, nom1, grid;
				// on génère le triangle ABC avec une contrainte sur son aire
				while (!trouve) {
					A = point(choice([0, 3]), choice([0, 3]), 'A'); // le point A !
					B = point(choice([6, 9]), choice([6, 9]), 'B'); // le point B !
					C = rotation(B, A, 90, 'C'); // le point C à partir de B par rotation autour de A!
					C.x += choice([0, 3, 6]); // on décale l'abscise de C de 0, 3 ou 6 !
					C.y += choice([-3, 0, 3]); // on décale l'abscise de C de -3, 0 ou 3 !
					p = polygone(A, B, C); // on trace le polygone ABC
					aireABC = aireTriangle(p); // Je savais bien que cette formule servirait un jour !
					if (aireABC < 11 && aireABC > 5) trouve = true;
				};
				G = barycentre(p); // le barycentre de ABC
				let angleChoisi1 = choice([0, 90, 270]);
				p = rotation(p, G, angleChoisi1); // on tourne ABC de façon aléatoire autour de son barycentre
				p.couleurDeRemplissage = 'gray';//remplissage de ABC
				p.opaciteDeRemplissage = 0.2;//0.5;//remplissage de ABC
				nom1 = nommePolygone(p, 'ABC', 0.4); // on  nomme ABC en plaçant A,B et C à 0,4
				grid = grille(-3, -3, 27, 18, 'gray', 0.4, 1); // on trace une grille
				M = point(9, 12); // un point M fixe pour tourner autour				
				q = rotation(p, M, 90); // on fait tourner ABC autour de M de 90°
				// on a besoin de récupérer le polygone non tracé
				let q_non_trace = polygone(q.listePoints);
				Gq = barycentre(q); // on construit son barycentre
				//let angleChoisi2 = 270; 
				let angleChoisi2 = choice([0, 90, 180, 270]);
				r = rotation(q, Gq, angleChoisi2); // on fait tourner q encore autour de son barycentre
				X = milieu(r.listePoints[0], r.listePoints[1]); // on place le milieu des deux premiers points de la figure obtenue qui sont les images des points A et B initiaux	
				s = rotation(r, X, 180); // on fait topurner r autour du milieu des deux extremites du plus grand côté
				r.couleurDeRemplissage = 'red'; // solution 1 en rouge
				r.opaciteDeRemplissage = 0.2;//0.5; // 
				s.couleurDeRemplissage = 'blue'; //solution 2 en bleu
				s.opaciteDeRemplissage = 0.2;//0.5; //
				// mes ajouts par rapport à la figure de JC				
				// on fixe une place pour D et E
				let D = r.listePoints[0];
				D.nom = 'D';
				let E = r.listePoints[1];
				E.nom = 'E';
				// on crée un tableau avec les noms proposé pour les points				
				let tabPointsNames = ['F', 'G', 'H', 'I'];
				// on mélange le tableau 
				tabPointsNames = shuffle(tabPointsNames);
				//on place les deux solutions
				let I = r.listePoints[2];
				//I.nom='I';
				I.nom = tabPointsNames[0];
				let I1 = rotation(I, X, 180)
				//I1.nom='I1';
				I1.nom = tabPointsNames[1];
				// on place les mauvaises solutions
				let F = point(I1.x + 1, I1.y + 1);
				//F.nom='F';
				F.nom = tabPointsNames[2];
				let L = point(I.x - 1, I.y - 3);
				//L.nom='L';
				L.nom = tabPointsNames[3];
				//on trace le segment [DE] en pointillés pour que la figure soit plus lisible
				let sgmt_DE = segment(D, E, 'blue');
				sgmt_DE.pointilles = true;
				sgmt_DE.epaisseur = 1.5;

				// on prépare la fenetre mathalea2d
				let fenetreMathalea2D = { xmin: -3, ymin: -3, xmax: 27, ymax: 18, pixelsParCm: 20, scale: 0.5 }

				// on prépare les corrections
				let centre_rot = {
					sol1: pointIntersectionDD(droite(p.listePoints[1], E), droite(D, p.listePoints[0])),
					sol2: pointIntersectionDD(droite(E, p.listePoints[0]), droite(p.listePoints[1], D))
				};
				let vect_trans = {
					sol1: vecteur(p.listePoints[1], E),
					sol2: vecteur(p.listePoints[1], D)
				};
				let transformationAnimee = {
					sol1: ``,
					//nature_sol1:``,
					sol2: ``,
					//nature_sol2:``
				};
				// pour construire les droites et les centres passant par les centres de rotations
				let d, d1, d2, d3, d4, d5, J1, J2;
				switch (angleChoisi2) {
					case 0:
						transformationAnimee.sol1 = rotationAnimee(p, M, 90, 'begin="0s" dur="4s" repeatCount="indefinite"');
						//transformationAnimee.nature_sol1=`rotation`;
						// la 1ere compo
						d = droite(M, Gq);
						d1 = rotation(d, M, -45);
						d2 = rotation(d, Gq, 0);
						J1 = pointIntersectionDD(d1, d2); // centre de la composée, ici l'angle vaut 90
						//2eme compo
						d3 = droite(J1, X);
						d4 = rotation(d3, J1, -45);
						d5 = rotation(d3, X, 90);
						J2 = pointIntersectionDD(d4, d5);// centre après la seconde composition angle 270 à 2pi près						
						transformationAnimee.sol2 = rotationAnimee(p, J2, -90, 'begin="0s" dur="4s" repeatCount="indefinite"');
						//transformationAnimee.nature_sol2=`rotation`;
						break;
					case 90:
						transformationAnimee.sol1 = rotationAnimee(p, centre_rot.sol1, 180, 'begin="0s" dur="4s" repeatCount="indefinite"');
						//transformationAnimee.nature_sol1=`rotation`;
						transformationAnimee.sol2 = translationAnimee(p, vect_trans.sol2, 'begin="0s" dur="4s" repeatCount="indefinite"');
						//transformationAnimee.nature_sol2=`translation`;
						break;
					case 180:
						// la 1ere compo
						d = droite(M, Gq);
						d1 = rotation(d, M, -45);
						d2 = rotation(d, Gq, 90);
						J1 = pointIntersectionDD(d1, d2); // centre de la composée, ici l'angle vaut 270 à 2pi près
						//2eme compo
						d3 = droite(J1, X);
						d4 = rotation(d3, J1, -135);
						d5 = rotation(d3, X, 90);
						J2 = pointIntersectionDD(d4, d5);// centre après la seconde composition angle 450 à 2pi près						
						transformationAnimee.sol1 = rotationAnimee(p, J1, -90, 'begin="0s" dur="4s" repeatCount="indefinite"');
						//transformationAnimee.nature_sol1=`rotation`;
						transformationAnimee.sol2 = rotationAnimee(p, J2, 90, 'begin="0s" dur="4s" repeatCount="indefinite"');
						//transformationAnimee.nature_sol2=`rotation`;
						break;
					case 270:
						transformationAnimee.sol1 = translationAnimee(p, vect_trans.sol1, 'begin="0s" dur="4s" repeatCount="indefinite"');
						//transformationAnimee.nature_sol1=`translation`;						
						transformationAnimee.sol2 = rotationAnimee(p, centre_rot.sol2, 180, 'begin="0s" dur="4s" repeatCount="indefinite"');
						//transformationAnimee.nature_sol2=`rotation`;
						break;
				}
				// DE = AB
				let seg_DE_corr = segment(D, E, 'blue');
				seg_DE_corr.epaisseur = 2;
				let seg_AB_corr = segment(p.listePoints[0], p.listePoints[1], 'blue');
				seg_AB_corr.epaisseur = 2;
				//DI = AC ou EI1 = AC
				let seg_DI_corr = segment(D, I, 'red');
				let seg_EI1_corr = segment(E, I1, 'red');
				seg_DI_corr.epaisseur = 2;
				seg_EI1_corr.epaisseur = 2;
				let seg_AC_corr = segment(p.listePoints[0], p.listePoints[2], 'red');
				seg_AC_corr.epaisseur = 2;
				//EI = BC ou DI1 = BC
				let seg_EI_corr = segment(E, I, 'green');
				let seg_DI1_corr = segment(D, I1, 'green');
				seg_EI_corr.epaisseur = 2;
				seg_DI1_corr.epaisseur = 2;
				let seg_BC_corr = segment(p.listePoints[1], p.listePoints[2], 'green');
				seg_BC_corr.epaisseur = 2;
				// angle ABC = DEI ou ABC = EDI1
				let ang_ABC = angleOriente(p.listePoints[0], p.listePoints[1], p.listePoints[2]);
				let ang_DEI = angleOriente(D, E, I);
				let ang_EDI1 = angleOriente(E, D, I1);
				// angle BCA = EID ou  BCA = DI1E
				let ang_BCA = angleOriente(p.listePoints[1], p.listePoints[2], p.listePoints[0]);
				let ang_EID = angleOriente(E, I, D);
				let ang_EI1D = angleOriente(E, I1, D);
				// angle CAB = IDE ou CAB = I1ED
				let ang_CAB = angleOriente(p.listePoints[2], p.listePoints[0], p.listePoints[1]);
				let ang_IDE = angleOriente(I, D, E);
				let ang_I1ED = angleOriente(I1, E, D);

				let codages_correction = {
					sol1: [
						// les segments						
						seg_AB_corr,
						seg_DE_corr,
						codeSegments('×', 'blue', p.listePoints[0], p.listePoints[1], D, E),
						seg_AC_corr,
						seg_DI_corr,
						codeSegments('||', 'red', p.listePoints[0], p.listePoints[2], D, I),
						seg_BC_corr,
						seg_EI_corr,
						codeSegments('O', 'green', p.listePoints[1], p.listePoints[2], I, E),
						//les angles
						arc(pointSurSegment(p.listePoints[1], p.listePoints[0], 0.8), p.listePoints[1], ang_ABC, true, 'red'),
						arc(pointSurSegment(E, D, 0.8), E, ang_DEI, true, 'red'),
						arc(pointSurSegment(p.listePoints[2], p.listePoints[1], 0.8), p.listePoints[2], ang_BCA, true, 'blue'),
						arc(pointSurSegment(I, E, 0.8), I, ang_EID, true, 'blue'),
						arc(pointSurSegment(p.listePoints[0], p.listePoints[2], 0.8), p.listePoints[0], ang_CAB, true, 'green'),
						arc(pointSurSegment(D, I, 0.8), D, ang_IDE, true, 'green')
					],
					sol2: [
						//les segments
						seg_AB_corr,
						seg_DE_corr,
						codeSegments('×', 'blue', p.listePoints[0], p.listePoints[1], D, E),
						seg_BC_corr,
						seg_DI1_corr,
						codeSegments('O', 'green', p.listePoints[1], p.listePoints[2], D, I1),
						seg_AC_corr,
						seg_EI1_corr,
						codeSegments('||', 'red', p.listePoints[0], p.listePoints[2], E, I1),
						// les angles
						arc(pointSurSegment(p.listePoints[1], p.listePoints[0], 0.8), p.listePoints[1], ang_ABC, true, 'red'),
						arc(pointSurSegment(D, E, 0.8), D, ang_EDI1, true, 'red'),
						arc(pointSurSegment(p.listePoints[2], p.listePoints[1], 0.8), p.listePoints[2], ang_BCA, true, 'blue'),
						arc(pointSurSegment(I1, E, 0.8), I1, ang_EI1D, true, 'blue'),
						arc(pointSurSegment(p.listePoints[0], p.listePoints[2], 0.8), p.listePoints[0], ang_CAB, true, 'green'),
						arc(pointSurSegment(E, I1, 0.8), E, ang_I1ED, true, 'green')
					]
				}

				// on crée un objet pour stocker les figures et les corrections
				let figures = {
					enonce: `
						Où placer le point M pour que les triangles ABC et DEM soient égaux ? 
						<br>En F ? En G? En H ? En I ?
						<br>
						${mathalea2d(
						fenetreMathalea2D,
						p,
						nom1,
						grid,
						tracePoint(D, E, I, I1, F, L),
						labelPoint(D, E, I, I1, F, L),
						sgmt_DE,
						//r,
						//s
					)}`,
					corr_solution1: `
						Les triangles $ABC$ et $DE${I.nom}$ ont les mêmes longueurs et les mêmes angles.
						<br> ${texte_en_couleur(`Donc le point ${I.nom} est un point qui convient`)}
						<br>
						${mathalea2d(
						fenetreMathalea2D,
						p,
						nom1,
						grid,
						tracePoint(D, E, I, I1, F, L),
						labelPoint(D, E, I, I1, F, L),
						sgmt_DE,
						r,
						//s,
						codages_correction.sol1
					)}`,
					corr_solution2: `
						Les triangles $ABC$ et $DE${I1.nom}$ ont les mêmes longueurs et les mêmes angles.		
						<br> ${texte_en_couleur(`Donc le point ${I1.nom} est un point qui convient`)}
						<br>
						${mathalea2d(
						fenetreMathalea2D,
						p,
						nom1,
						grid,
						tracePoint(D, E, I, I1, F, L),
						labelPoint(D, E, I, I1, F, L),
						sgmt_DE,
						//r,
						s,
						codages_correction.sol2
					)}`,
					corr_animmee_sol1: `
						Les triangles $ABC$ et $DE${I.nom}$ ont les mêmes longueurs et les mêmes angles.						
						<br> ${texte_en_couleur(`Donc le point ${I.nom} est un point qui convient`)}
						<br>						
						${mathalea2d(
						fenetreMathalea2D,
						p,
						nom1,
						grid,
						//tracePoint(D,E,I,I1,F,L),
						tracePoint(I1, F, L),
						//labelPoint(D,E,I,I1,F,L),
						labelPoint(I1, F, L),
						nommePolygone(r, 'DE' + I.nom, 0.4),
						//sgmt_DE,
						r,
						transformationAnimee.sol1,
						codages_correction.sol1
					)}`,
					corr_animmee_sol2: `
						Les triangles $ABC$ et $DE${I1.nom}$ ont les mêmes longueurs et les mêmes angles.
						<br> ${texte_en_couleur(`Donc le point ${I1.nom} est un point qui convient`)}
						<br>
						Une solution est donc le point ${I1.nom}
						<br>
						${mathalea2d(
						fenetreMathalea2D,
						p,
						nom1,
						grid,
						//tracePoint(D,E,I,I1,F,L),
						tracePoint(I, F, L),
						//labelPoint(D,E,I,I1,F,L),
						labelPoint(I, F, L),
						nommePolygone(s, 'DE' + I1.nom, 0.4),
						//sgmt_DE,
						//r,
						s,
						transformationAnimee.sol2,
						codages_correction.sol2
					)}`
				}
				//texte=mathalea2d({xmin:-3,ymin:-3,xmax:27,ymax:18,pixelsParCm:20,scale:0.5},p,nom1,grid,r,s)
				texte = `${figures.enonce}`;
				if (this.debug) {
					texte += `<br>${texte_gras(`===== Première solution ======`)}<br>${figures.corr_animmee_sol1}`;
					texte += `<br><br>${texte_gras(`===== Seconde solution ======`)}<br>${figures.corr_animmee_sol2}`;
				} else {
					texte_corr += `<br>${texte_gras(`===== Première solution ======`)}<br>${figures.corr_animmee_sol1}`;
					texte_corr += `<br><br>${texte_gras(`===== Seconde solution ======`)}<br>${figures.corr_animmee_sol2}`;
				}
				this.liste_questions[0] = texte;
				this.liste_corrections[0] = texte_corr;
				liste_de_question_to_contenu(this);
				break;

		}
	}
}

/**
 * Un nombre à 2 chiffres (non multiple de 10) + 9
 * @Auteur Rémi Angot
 * Référence 3F10
*/
function Image_antecedent_depuis_tableau_ou_fleche() {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Lectures d'images et d'antécédents depuis un tableau de valeurs";
	this.consigne = "";
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.nb_questions = 4;

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let a = randint(-20, 20);
		let b = randint(-20, 20, [a]);
		let c = randint(-20, 20, [a, b]);
		let d = randint(-20, 20, [a, b, c]);
		let e = randint(-20, 20, [a, b, c, d]);
		let f = randint(-20, 20, [a, b, c, d, e]);
		// a->b ; c->d ; e->d ; d->a ; f->c
		let ligneX = [a, c, e, d, f]
		let ligneY = [b, d, d, a, c]
		shuffle2tableaux(ligneX, ligneY) // mélange les 2 lignes de la même manière
		this.introduction = "Voici un tableau de valeurs d'une fonction $f$ : "
		this.introduction += '<br><br>'
		this.introduction += `$\\def\\arraystretch{1.5}\\begin{array}{|l|c|c|c|c|c|}
	\\hline
	x & ${ligneX[0]} & ${ligneX[1]} & ${ligneX[2]} & ${ligneX[3]} & ${ligneX[4]} \\\\
	\\hline
	f(x) & ${ligneY[0]} & ${ligneY[1]} & ${ligneY[2]} & ${ligneY[3]} & ${ligneY[4]} \\\\
	\\hline
	\\end{array}
	$
	`
		let texte = `Quelle est l'image de $${a}$ par la fonction $f$ ?`
		let texte_corr = `L'image de $${a}$ par la fonction $f$ est $${b}$, on note $f(${a})=${b}$.`
		this.liste_questions.push(texte)
		this.liste_corrections.push(texte_corr)

		texte = `Quelle est l'image de $${c}$ par la fonction $f$ ?`
		texte_corr = `L'image de $${c}$ par la fonction $f$ est $${d}$, on note $f(${c})=${d}$.`
		this.liste_questions.push(texte)
		this.liste_corrections.push(texte_corr)

		let texte3 = `Déterminer le(s) antécédent(s) de $${a}$ par la fonction $f$.`
		let texte_corr3 = `$${a}$ a un seul antécédent par la fonction $f$ qui est $${d}$, on note $f(${d})=${a}$.`

		let texte4 = `Déterminer le(s) antécédent(s) de $${d}$ par la fonction $f$.`
		let texte_corr4 = `$${d}$ a deux antécédents par la fonction $f$ qui sont $${c}$ et $${e}$, on note $f(${c})=f(${e})=${d}$.`

		if (choice([true, false])) { // Une fois sur 2 on inverse les questions 3 et 4
			this.liste_questions.push(texte3)
			this.liste_corrections.push(texte_corr3)
			this.liste_questions.push(texte4)
			this.liste_corrections.push(texte_corr4)
		} else {
			this.liste_questions.push(texte4)
			this.liste_corrections.push(texte_corr4)
			this.liste_questions.push(texte3)
			this.liste_corrections.push(texte_corr3)
		}

		texte = `Recopier et compléter : $f(${c})=\\ldots$`
		texte_corr = `$f(${c})=${d}$`
		this.liste_questions.push(texte)
		this.liste_corrections.push(texte_corr)

		texte = `Recopier et compléter : $f(\\ldots)=${c}$`
		texte_corr = `$f(${f})=${c}$`
		this.liste_questions.push(texte)
		this.liste_corrections.push(texte_corr)

		liste_de_question_to_contenu(this);
	};
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}


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
