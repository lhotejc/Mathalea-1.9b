import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Justifier la non primalité réinvestissement des critères de divisibilité
 * Nombres à 3 ou 4 chiffres, un multiple de 2, de 3, de 5, de 7, de 9, de 10, sous forme d'un produit de deux nombres premiers inférieurs à 30
 * et un nombre premier inferieur à 529 
 * 5A12-1
 * @author Sébastien Lozano
 */
export default function Premier_ou_pas_5e() {
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

