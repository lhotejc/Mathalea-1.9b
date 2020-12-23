import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Lire les coordonnées d'un point du plan avec une précision allant de l'unité à 0,25.
 * @Auteur Jean-Claude Lhote
 * Références 5R12-2 6N33
 */
export default function Reperage_point_du_plan() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer les coordonnées (relatives) d'un point";
	this.consigne = "Donner les coordonnées des points représentés";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
	this.spacing_corr = 1;
	this.sup = 1;
	this.sup2 = true;
	this.quart_de_plan = false;
	this.liste_packages = 'tkz-euclide';


	this.nouvelle_version = function (numero_de_l_exercice) { // numero_de_l_exercice est 0 pour l'exercice 1
		this.liste_questions = [];
		this.liste_corrections = [];
		let texte, texte_corr;
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées
		let liste_points = [], points = [];
		let grille, w, h, k, xmin, xmax, ymin, ymax, shiftxnom, shiftynom;
		h = Math.round(window.innerHeight * 0.7)
		w = h;
		k = Math.pow(2, parseInt(this.sup) - 1);
		let nom = [];
		grille = this.sup2;
		if (this.quart_de_plan) {
			xmin = 0; ymin = 0; xmax = 10; ymax = 10;
		}
		else {
			xmin = -5; ymin = -5; xmax = 5; ymax = 5;
		}
		let liste_abs = [], liste_ord = [];
		for (let i = calcul(xmin + 1 / k); i < calcul(xmax - (parseInt(this.sup) - 1) / k); i = calcul(i + 1 / k)) {
			liste_abs.push(i)
		}
		for (let i = calcul(ymin + 1 / k); i < calcul(ymax - (parseInt(this.sup) - 1) / k); i = calcul(i + 1 / k)) {
			liste_ord.push(i)
		}
		let X0 = false, Y0 = false;
		liste_points = creer_couples(liste_abs, liste_ord, 10 * k);
		for (let j = 0; j < 5; j++) {
			points.push(liste_points[j]);
			if (points[j][0] == 0) X0 = true;
			if (points[j][1] == 0) Y0 = true;
		}
		if (!X0) points[0][0] = 0;
		if (!Y0) points[1][1] = 0;
		points = shuffle(points);

		for (let l = 0, lettre = randint(1, 20); l < 5; l++) nom.push(lettre_depuis_chiffre(l + lettre));
		if (sortie_html) {
			let id_unique = `${Date.now()}`
			let id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
			this.consigne = `<div id="${id_du_div}" style="height: ${h}px"></div>`;
			if (!window.SVGExist) { window.SVGExist = {} } // Si SVGExist n'existe pas on le créé
			// SVGExist est un dictionnaire dans lequel on stocke les listenner sur la création des div
			window.SVGExist[id_du_div] = setInterval(function () {
				if ($(`#${id_du_div}`).length) {
					$(`#${id_du_div}`).html("");//Vide le div pour éviter les SVG en doublon
					const mon_svg = SVG().addTo(`#${id_du_div}`).viewbox(0, 0, 520, 520).size('100%', '100%')
					let AxesXY = SVG_repere(mon_svg, xmin, xmax, ymin, ymax, k, k, 500, 500, grille);
					for (let i = 0; i < 5; i++) {
						if (points[i][0] == 0 || points[i][0] == 0.25) shiftxnom = 20;
						else shiftxnom = 0;
						shiftynom = 0;
						if (points[i][1] == -0.5) shiftynom = 10;
						if (points[i][1] == -0.25) shiftynom = 20;
						SVG_tracer_point(mon_svg, calcul(20 + (points[i][0] - xmin) * 480 / (xmax - xmin)), calcul(480 - (points[i][1] - ymin) * 480 / (ymax - ymin)), nom[i], 'blue', -10 + shiftxnom, 10 + shiftynom, [true, AxesXY[0], AxesXY[1]])
					}
					clearInterval(SVGExist[id_du_div]);//Arrête le timer
				}

			}, 100); // Vérifie toutes les 100ms



		}
		else { //sortie Latex 
			texte = `\\begin{tikzpicture}`;
			texte += Latex_repere(xmin, xmax, ymin, ymax, k, k, grille);
			for (let i = 0; i < 5; i++) {
				texte += `\n\t \\tkzDefPoint(${points[i][0]},${points[i][1]}){A}`
				texte += `\n\t \\tkzDrawPoint[shape=cross out,color=blue,size=6](A)`
				texte += `\n\t \\tkzLabelPoint[above right=3pt,fill=white,fill opacity=0.7,text opacity=1,inner sep=0](A){$${nom[i]}$}`
			}
			texte += `\n\t \\end{tikzpicture}`;
			this.liste_questions.push(texte);

			texte_corr = `\\begin{tikzpicture}`;
			texte_corr += Latex_repere(xmin, xmax, ymin, ymax, k, k, grille);
			for (let i = 0; i < 5; i++) {
				texte_corr += `\n\t \\tkzDefPoint(${points[i][0]},${points[i][1]}){A}`
				texte_corr += `\n\t \\tkzDrawPoint[shape=cross out,color=blue,size=6](A)`
				texte_corr += `\n\t \\tkzLabelPoint[above right=3pt,fill=white,fill opacity=0.7,text opacity=1,inner sep=0](A){$${nom[i]}$}`
				texte_corr += `\n\t \\tkzPointShowCoord(A)`
			}
			texte_corr += `\n\t \\end{tikzpicture}`;
			this.liste_corrections.push(texte_corr);
		}

		texte = `Déterminer les coordonnées des points`;
		texte_corr = `Les coordonnées des points sont :<br>`
		for (i = 0; i < 4; i++) {
			texte += ` $${nom[i]}$,`;
			texte_corr += ` $${nom[i]}(${tex_nombre(points[i][0])};${tex_nombre(points[i][1])})$, `;
		}
		texte += ` $${nom[i]}$.`
		texte_corr += ` $${nom[i]}(${tex_nombre(points[i][0])};${tex_nombre(points[i][1])})$.`;
		this.liste_questions.push(texte)
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu_sans_numero(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté', 3, "1 : Coordonnées entières\n2 : Coordonnées 'en demis'\n3 : Coordonnées 'en quarts'"];
	this.besoin_formulaire2_case_a_cocher = ['Grille de lecture'];
}

