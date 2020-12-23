import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Déterminer des angles en utilisant les cas d'égalités : opposés par le sommet, alternes-internes, correspondants...
 * ref 5G30-1 
 * publié le 14/11/2020
 * @Auteur Jean-Claude Lhote Inspiré d'exercices du manuel sésamath.
 */
export default function Egalite_d_angles() {
	"use strict"
	Exercice.call(this);
	this.sup = 1;
	this.nb_questions = 1;
	if (sortie_html) {
		this.spacing = 2;
		this.spacing_corr = 3;
	}
	else {
		this.spacing = 2;
		this.spacing_corr = 2;
	}
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.titre = "Déterminer des angles en utilisant les cas d'égalité";
	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []
		this.liste_corrections = []
		this.consigne="Cet exercice est inspiré d'un exercice du manuel sésamath 5e"
		let figure = [], choix;
		let fig1 = function () { //retourne le tableau d'objets, la série de questions et la série de réponses 
			let A, B, C, D, E, a, ac, ce, c, AE, BD, CA, CE, c1, c2, c3, c4, c5, m1, m2, l1, objets = [], enonce, correction, params;
			let noms = choisit_lettres_differentes(5, 'Q', true), gras;
			sortie_html ? gras = "#f15929" : gras = `black`;
			A = point(0, 0, noms[0], 'above left');
			a = randint(45, 85);
			ac = randint(8, 10)
			ce = randint(7, 10, ac)
			C = similitude(rotation(point(1, 0), A, randint(-45, 45)), A, a, ac, noms[2], 'left')
			c = randint(45, 70)
			E = similitude(A, C, c, ce / ac, noms[4], 'above right');
			CA = droite(C, A)
			CE = droite(C, E)
			AE = droite(A, E, '', 'grey')
			AE.epaisseur = 2
			B = pointSurSegment(A, C, randint(3, ac - 4), noms[1], 'above left')
			BD = droiteParPointEtParallele(B, AE, '', 'grey')
			BD.epaisseur = 2
			D = pointIntersectionDD(BD, CE, noms[3], 'above right')
			m1 = codeAngle(E, A, C, 1, '', 'black', 2, 1, 'black', 0.1, true)
			m2 = codeAngle(A, C, E, 1, '', 'black', 2, 1, 'black', 0.1, true)
			l1 = labelPoint(A, B, C, D, E)
			c1 = codeAngle(D, B, A, 1, '', 'blue', 2, 1, 'blue')
			c2 = codeAngle(B, D, E, 1, '', 'orange', 2, 1, 'orange')
			c3 = codeAngle(D, E, A, 1, '', 'green', 2, 1, 'green')
			c4 = codeAngle(D, B, C, 1, '', 'pink', 2, 1, 'pink')
			c5 = codeAngle(C, D, B, 1, '', 'red', 2, 1, 'red')
			objets.push(CA, CE, AE, BD, m1, m2, c1, c2, c3, c4, c5, l1)
			a = Math.round(angle(E, A, C))
			enonce = `Dans la figure ci-dessous,  les droites $(${noms[0]}${noms[4]})$ et $(${noms[1]}${noms[3]})$ sont parallèles.<br>`
			enonce += `On veut déterminer la mesure des angles du quadrilatère $${noms[0]}${noms[1]}${noms[3]}${noms[4]}$ (toutes les réponses doivent être justifiées).<br>`
			enonce += `${num_alpha(0)} Déterminer la mesure de l'angle $\\widehat{${noms[3]}${noms[1]}${noms[2]}}$.<br>`
			enonce += `${num_alpha(1)} En déduire la mesure de l'angle $\\widehat{${noms[0]}${noms[1]}${noms[3]}}$.<br>`
			enonce += `${num_alpha(2)} En utilisant la question ${num_alpha(0)}, déterminer la mesure de l'angle $\\widehat{${noms[1]}${noms[3]}${noms[2]}}$.<br>`
			enonce += `${num_alpha(3)} En déduire la mesure de l'angle $\\widehat{${noms[1]}${noms[3]}${noms[4]}}$.<br>`
			enonce += `${num_alpha(4)} En utilisant la question ${num_alpha(2)} déterminer la mesure de l'angle $\\widehat{${noms[3]}${noms[4]}${noms[0]}}$.<br>`
			enonce += `${num_alpha(5)} Vérifier la conjecture suivante : « La somme des angles d'un quadrilatère vaut 360°.»<br>`
			correction = `${num_alpha(0)} Comme les droites $(${noms[0]}${noms[4]})$ et $(${noms[1]}${noms[3]})$ sont parallèles, les angles correspondants $\\widehat{${noms[4]}${noms[0]}${noms[1]}}$ et $\\widehat{${noms[3]}${noms[1]}${noms[2]}}$ sont égaux, donc $\\widehat{${noms[3]}${noms[1]}${noms[2]}}$ mesure $${a}\\degree$.<br>`
			correction += `${num_alpha(1)} Les angles $\\widehat{${noms[0]}${noms[1]}${noms[3]}}$ et $\\widehat{${noms[3]}${noms[1]}${noms[2]}}$ sont adjacents supplémentaires, donc $\\widehat{${noms[0]}${noms[1]}${noms[3]}}$ mesure $180\\degree-${a}\\degree=${mise_en_evidence(180 - a, gras)}\\degree$.<br>`
			correction += `${num_alpha(2)} Dans un triangle, la somme des angles vaut $180\\degree$ donc $\\widehat{${noms[1]}${noms[3]}${noms[2]}}=180\\degree-\\widehat{${noms[3]}${noms[1]}${noms[2]}}-\\widehat{${noms[1]}${noms[2]}${noms[3]}}=180\\degree-${a}\\degree-${c}\\degree=${180 - a - c}\\degree$.<br>`
			correction += `${num_alpha(3)} Les angles $\\widehat{${noms[1]}${noms[3]}${noms[2]}}$ et $\\widehat{${noms[1]}${noms[3]}${noms[4]}}$ sont adjacents supplémentaires, donc $\\widehat{${noms[1]}${noms[3]}${noms[4]}}$ mesure $180\\degree-${180 - a - c}\\degree=${mise_en_evidence(a + c, gras)}\\degree$.<br>`
			correction += `${num_alpha(4)} Comme les droites $(${noms[0]}${noms[4]})$ et $(${noms[1]}${noms[3]})$ sont parallèles, les angles correspondants $\\widehat{${noms[1]}${noms[3]}${noms[2]}}$ et $\\widehat{${noms[3]}${noms[4]}${noms[0]}}$ sont égaux, donc $\\widehat{${noms[3]}${noms[4]}${noms[0]}}$ mesure $${mise_en_evidence(180 - a - c, gras)}\\degree$.<br>`
			correction += `${num_alpha(5)} La somme des angles du quadrilatère vaut donc : $${a}\\degree+${mise_en_evidence(180 - a, gras)}\\degree+${mise_en_evidence(a + c, gras)}\\degree+${mise_en_evidence(180 - a - c, gras)}\\degree=180\\degree+180\\degree=360\\degree$.<br>`
			correction += `$\\phantom{f}$ La conjecture est finalement vraie.`
			params = { xmin: Math.min(A.x - 8, C.x - 8, E.x - 8), ymin: Math.min(A.y - 1, E.y - 1, C.y - 1), xmax: Math.max(E.x + 2, A.x + 2, C.x + 2), ymax: Math.max(C.y + 2, A.y + 2, E.y + 2), scale: 0.7 }

			return [objets, params, enonce, correction]
		}
		let fig2 = function () { //retourne le tableau d'objets, la série de questions et la série de réponses 
			let A, B, C, D, E, a, ac, ab, cd, ad, c, d, AB, BE, CA, CE, cA, cD, cE, c3, c4, c5, c6, l1, objets = [], enonce, correction, params;
			let noms = choisit_lettres_differentes(5, 'Q', true);
			A = point(0, 0, noms[0], 'above left');
			B = rotation(point(randint(8, 10), randint(1, 3)), A, randint(-40, 40), noms[1], 'right')
			ab = longueur(A, B)
			ac = randint(6, 8)
			a = randint(40, 60);
			C = similitude(B, A, a, ac / ab, noms[2], 'above left')
			CA = droite(C, A)
			AB = droite(A, B)
			D = pointSurSegment(A, B, ab / 2 + randint(-1, 1, 0) / 10, noms[3], 'below')
			CE = droite(C, D)
			cd = longueur(C, D)
			ad = longueur(A, D)
			E = pointSurSegment(C, D, cd * ab / ad, noms[4], 'below right')
			BE = droite(B, E)
			c = arrondi(angle(A, C, D), 0)
			d = arrondi(angle(C, D, B), 0)
			cA = codeAngle(D, A, C, 1, '', 'black', 2, 1, 'black', 0.2, true)
			cD = codeAngle(C, D, B, 1, '', 'red', 2, 1, 'red', 0.2, true)
			cE = codeAngle(D, E, B, 1, '', 'blue', 2, 1, 'blue', 0.2, true)
			c4 = codeAngle(A, C, D, 1, '', 'green', 2, 1, 'green', 0.2)
			c5 = codeAngle(B, D, E, 1, '', 'orange', 2, 1, 'orange', 0.2)
			c6 = codeAngle(E, B, D, 1, '', 'pink', 2, 1, 'pink', 0.2)
			c3 = codeAngle(A, D, C, 1, '', 'grey', 2, 1, 'grey', 0.2)
			l1 = labelPoint(A, B, C, D, E)
			objets.push(CA, AB, CE, BE, cA, cD, cE, c3, c4, c5, c6, l1)
			enonce = `La figure n'est pas en vraie grandeur. Toutes les réponses devront être justifiées.<br>`
			enonce += `${num_alpha(0)} Déterminer la mesure de l'angle $\\widehat{${noms[0]}${noms[3]}${noms[2]}}$.<br>`
			enonce += `${num_alpha(1)} En déduire la mesure de l'angle $\\widehat{${noms[3]}${noms[2]}${noms[0]}}$.<br>`
			enonce += `${num_alpha(2)} Déterminer si les droites $(${noms[0]}${noms[2]})$ et $(${noms[4]}${noms[1]})$ sont parallèles.<br>`
			enonce += `${num_alpha(3)} Si on considère que les segments $[${noms[0]}${noms[2]}]$ et $[${noms[4]}${noms[1]}]$ sont de même longueur, Déterminer la nature du quadrilatère $${noms[0]}${noms[2]}${noms[1]}${noms[4]}$.<br>`
			correction = `${num_alpha(0)} Les angles $\\widehat{${noms[0]}${noms[3]}${noms[2]}}$ et $\\widehat{${noms[2]}${noms[3]}${noms[1]}}$ sont adjacents supplémentaires, donc $\\widehat{${noms[0]}${noms[3]}${noms[2]}}$ mesure $180\\degree-${d}\\degree=${180 - d}\\degree$.<br>`
			correction += `${num_alpha(1)} Dans un triangle, la somme des angles vaut $180\\degree$ donc $\\widehat{${noms[0]}${noms[2]}${noms[3]}}=180-\\widehat{${noms[3]}${noms[0]}${noms[2]}}-\\widehat{${noms[0]}${noms[3]}${noms[2]}}=180\\degree-${a}\\degree-${180 - d}\\degree=${- a + d}\\degree$.<br>`
			correction += `${num_alpha(2)} Pour les droites $(${noms[0]}${noms[2]})$ et $(${noms[4]}${noms[1]})$ coupées par la sécante $(${noms[2]}${noms[4]})$ les angles $\\widehat{${noms[0]}${noms[2]}${noms[3]}}$ et $\\widehat{${noms[1]}${noms[4]}${noms[3]}}$ sont des angles alternes-internes.<br>`
			correction += `$\\phantom{c/}$ Or si des angles alternes-internes sont égaux, cela signifie que les droites coupées par la sécante sont parallèles.<br>`
			correction += `$\\phantom{c/}$ Les droites $(${noms[0]}${noms[2]})$ et $(${noms[4]}${noms[1]})$ sont donc parallèles.<br>`
			correction += `${num_alpha(3)} Les droites $(${noms[0]}${noms[2]})$ et $(${noms[4]}${noms[1]})$ sont parallèles et les segments $[${noms[0]}${noms[2]}]$ et $[${noms[4]}${noms[1]}]$ sont de même longueur.<br>`
			correction += `$\\phantom{c/}$ Or, un quadrilatère qui possède des côtés opposés parallèles et de même longueur est un parallèlogramme.<br>`
			correction += `$\\phantom{c/}$ Donc $${noms[0]}${noms[2]}${noms[1]}${noms[4]}$ est un parallèlogramme et $${noms[3]}$ est son centre.`
			params = { xmin: Math.min(A.x, B.x, C.x, D.x, E.x) - 1, ymin: Math.min(A.y, B.y, C.y, D.y, E.y) - 1, xmax: Math.max(A.x, B.x, C.x, D.x, E.x) + 2, ymax: Math.max(A.y, B.y, C.y, D.y, E.y) + 2 }

			return [objets, params, enonce, correction]
		}
		if (this.sup == 3) choix = randint(1, 2)
		else choix = parseInt(this.sup)
		switch (choix) {
			case 1:
				figure = fig1()
				figure[2] += mathalea2d(figure[1], figure[0])
				break;
			case 2:
				figure = fig2()
				console.log(figure[0])
				figure[2] += mathalea2d(figure[1], figure[0])
				break;
		}
		this.liste_questions.push(figure[2]);
		this.liste_corrections.push(figure[3]);
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Numéro de figure', 3, '1 : Le trapèze\n2: Le papillon\n3: Au hasard']
}

