import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/** 
 * * Justifier qu'un tableau est un tableau de proportionnalité ou non
 * * 5P10
 * @author Sébastien Lozano
 */

export default function Tableaux_et_proportionnalite() {
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

