import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,randint,choice,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique} from "/modules/outils.js"


/**
* Compléter une addition à trou entre 2 nombres relatifs.
*
* * On peut paramétrer la distance à zéro maximale des deux termes (par défaut égale à 20)
* * On peut choisir d'avoir une écriture simplifiée  (par défaut ce n'est pas le cas)
* @Auteur Rémi Angot
* 5R20-2
*/
export default function Exercice_additions_relatifs_a_trou(max = 20) {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Addition à trou de deux entiers relatifs";
	this.consigne = 'Compléter';
	this.spacing = 2;

	this.nouvelle_version = function () {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, k, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1, this.sup);
			b = randint(1, this.sup);
			k = choice([[-1, -1], [-1, 1], [1, -1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs
			a = a * k[0];
			b = b * k[1];
			if (this.sup2) {
				texte = '$ ' + a + ' + ' + '\\ldots\\ldots\\ldots' + ' = ' + (a + b) + ' $';
				texte_corr = '$ ' + a + ecriture_algebrique(b) + ' = ' + (a + b) + ' $';
			} else {
				texte = '$ ' + ecriture_nombre_relatif(a) + ' + ' + '\\ldots\\ldots\\ldots' + ' = ' + ecriture_nombre_relatif(a + b) + ' $';
				texte_corr = '$ ' + ecriture_nombre_relatifc(a) + ' + ' + ecriture_nombre_relatifc(b) + ' = ' + ecriture_nombre_relatifc(a + b) + ' $';
			}

			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	};
	this.besoin_formulaire_numerique = ['Valeur maximale', 99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];
}
