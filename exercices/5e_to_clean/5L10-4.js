import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/** 
 * * Traduire la dépendance entre deux grandeurs par un tableau de valeurs et produire une formule.
 * * 5L10-4
 * @author Sébastien Lozano
 */

export default function Tableaux_et_fonction() {
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

