import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * 5A10 - Division Euclidienne; diviseurs, multiples, critères de divisibilité
 * Exercice bilan
 * @author Sébastien Lozano
 */

export default function Liste_des_diviseurs_5e() {
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


