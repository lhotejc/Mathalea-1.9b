import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * @Auteur Jean-Claude Lhote
 * Fonction générale pour les exercices de construction de symétriques (centrale/axiale et points/triangles)
 * références  6G24-1, 6G24-2, 5G10-1, 5G10-2, 5G11-1 et 5G11-2
 * Permet une sortie html/pdf sur petits carreaux/gros carreaux/papier blanc
 */

export default function Construire_par_Symetrie() {
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


