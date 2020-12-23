import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
* Déterminer la valeur d'un angle dans un triangle.
*
* Correction avec détails ou pas. 9 cas différents
* * On connait 2 angles sur 3.
* * Dans un triangle rectangle, on connait un angle aigu.
* * Dans un triangle isocèle, on connait un angle à la base.
* * Dans un triangle isocèle, on connait l'angle au sommet principal.
* * Quelle est la mesure d'un angle aigu dans un triangle rectangle qui a 2 angles égaux ?
* * Dans un triangle rectangle, un angle aigu mesure le double de l'autre.
* * Dans un triangle rectangle, un angle aigu mesure le quart de l'autre.
* * Dans un triangle rectangle, un angle aigu mesure 5 fois l'autre.
* * Un triangle a 3 angles égaux.
* * Dans un triangle rectangle, un angle mesure le tiers de l'autre.
* @Auteur Jean-Claude Lhote
* Référence 5G31
*/
export default function Exercice_angles_triangles() {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1;
	this.titre = "Somme des angles dans un triangle";
	this.consigne = '';
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1.5;
	sortie_html ? this.spacing = 2 : this.spacing = 1.5;
	this.nb_questions = 5;
	this.consigne_modifiable = false;
	this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	let type_de_questions_disponibles
	let troisieme_angle = function (a1, a2) {
		if (a1 + a2 <= 180) return 180 - (a1 + a2)
		else return -1;
	}

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (this.sup == 1) type_de_questions_disponibles = [1, 2, 4, 5, 9]
		else
			if (this.sup == 2) type_de_questions_disponibles = [3, 6, 7, 8, 10, 11, 12]
			else type_de_questions_disponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		this.consigne = `Calculer l'angle demandé dans les triangles suivants :`
		let lettre1, lettre2, lettre3, s1, s2, s3
		for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
			type_de_questions = liste_type_de_questions[i];
			lettre1 = randint(1, 26)	// aleatoirisation du nom des points
			lettre2 = randint(1, 26, [lettre1])
			s1 = lettre_depuis_chiffre(lettre1)
			s2 = lettre_depuis_chiffre(lettre2)
			lettre3 = randint(1, 24, [lettre1, lettre2])
			s3 = lettre_depuis_chiffre(lettre3)
			if (this.correction_detaillee) texte_corr = `Dans un triangle, la somme des angles est égale à $180\\degree$.<br>`;
			else texte_corr = ``;
			switch (type_de_questions) {
				case 1:  // triangle quelconque 2 angles connus
					angle1 = randint(10, 40);
					angle2 = randint(20, 100);
					texte = `$${s1 + s2 + s3}$ est un triangle quelconque. L'angle $\\widehat{${s1 + s2 + s3}}$ mesure $${angle1}\\degree$ et l'angle $\\widehat{${s2 + s1 + s3}}$ mesure $${angle2}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${s2 + s3 + s1}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `$\\widehat{${s1 + s2 + s3}} + \\widehat{${s2 + s3 + s1}} + \\widehat{${s2 + s1 + s3}}=180\\degree$<br>`;
						texte_corr += `Donc $\\widehat{${s2 + s3 + s1}}=180- \\left(\\widehat{${s1 + s2 + s3}} + \\widehat{${s2 + s1 + s3}}\\right)$.<br>D'où `
					}
					texte_corr += `$\\widehat{${s2 + s3 + s1}}$= $180\\degree-\\left(${angle1}\\degree+${angle2}\\degree\\right)=180\\degree-${angle1 + angle2}\\degree=${troisieme_angle(angle1, angle2)}\\degree$.<br>`;
					texte_corr += `L'angle $\\widehat{${s2 + s3 + s1}}$ mesure $${troisieme_angle(angle1, angle2)}\\degree$.`
					break;
				case 2: // Triangle rectangle Un angle aigu connu 
					angle1 = 90;
					angle2 = randint(5, 85);
					texte = `$${s1 + s2 + s3}$ est un triangle rectangle en $${s2}$ et l'angle $\\widehat{${s2 + s1 + s3}}$ mesure $${angle2}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${s2 + s3 + s1}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `Comme l'angle $\\widehat{${s1 + s2 + s3}}$ est droit, les angles $\\widehat{${s2 + s3 + s1}}$ et $\\widehat{${s2 + s1 + s3}}$ sont complémentaires.<br>`
						texte_corr += `On a donc : $\\widehat{${s2 + s3 + s1}}+ \\widehat{${s2 + s1 + s3}}=90\\degree$<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2 + s3 + s1}}=90\\degree-${angle2}\\degree=${90 - angle2}\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s2 + s3 + s1}}$ mesure $${90 - angle2}\\degree$.`;
					break;
				case 3: // triangle isocèle, angle au sommet principal connu
					angle1 = randint(10, 170);
					angle2 = (180 - angle1) / 2;
					texte = `$${s1 + s2 + s3}$ est un triangle isocèle en $${s1}$. L'angle $\\widehat{${s2 + s1 + s3}}$ mesure $${angle1}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${s2 + s3 + s1}}$ ?`;

					if (this.correction_detaillee) {
						texte_corr += `Les angles à la base d'un triangle isocèle sont de même mesure.<br>`
						texte_corr += `D'où $\\widehat{${s1 + s2 + s3}}=\\widehat{${s2 + s3 + s1}}$.<br>`
						texte_corr += `On a donc : $\\widehat{${s2 + s1 + s3}}+2\\times  \\widehat{${s2 + s3 + s1}}=180\\degree$.<br>`;
						texte_corr += `Soit  $${angle1}\\degree+2\\times  \\widehat{${s2 + s3 + s1}}=180\\degree$.<br>`;
						texte_corr += `D'où $2\\times  \\widehat{${s2 + s3 + s1}}=180\\degree-${angle1}\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2 + s3 + s1}}=\\left(180\\degree-${angle1}\\degree\\right)\\div  2=${180 - angle1}\\degree\\div  2=${tex_nombrec((180 - angle1) / 2)}\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s2 + s3 + s1}}$ mesure $${tex_nombrec((180 - angle1) / 2)}\\degree$.`;
					break;
				case 4: // triangle isocèle, angle à la base connu
					angle2 = randint(10, 80);
					angle1 = 180 - angle2 * 2;
					texte = `$${s1 + s2 + s3}$ est un triangle isocèle en $${s1}$. L'angle $\\widehat{${s1 + s2 + s3}}$ mesure $${angle2}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${s2 + s1 + s3}}$ ?`;

					if (this.correction_detaillee) {
						texte_corr += `Les deux angles à la base d'un triangle isocèle sont égaux.<br>`;
						texte_corr += `Donc $\\widehat{${s1 + s2 + s3}}=\\widehat{${s2 + s3 + s1}}=${angle2}\\degree$.<br>D'où `
					}
					texte_corr += `$\\widehat{${s2 + s1 + s3}}=180\\degree-2\\times ${angle2}\\degree=180\\degree-${2 * angle2}\\degree=${180 - 2 * angle2}\\degree$.<br>`;
					texte_corr += `L'angle $\\widehat{${s2 + s1 + s3}}$ mesure $${180 - 2 * angle2}\\degree$.`;
					break;
				case 5:  // cas non aléatoires triangle rectangle isocèle
					angle1 = 90;
					angle2 = 45;
					texte = `$${s1 + s2 + s3}$ est un triangle rectangle en $${s2}$ et $\\widehat{${s2 + s1 + s3}}=\\widehat{${s2 + s3 + s1}}$.<br>Quelle est la mesure de l'angle $\\widehat{${s2 + s3 + s1}}$ ?`;

					if (this.correction_detaillee) {
						texte_corr += `Comme $\\widehat{${s2 + s1 + s3}}=\\widehat{${s2 + s3 + s1}}$,<br>`;
						texte_corr += `on a : $2 \\times  \\widehat{${s2 + s1 + s3}} + 90\\degree=180\\degree$.<br>D'où `;
						texte_corr += ` $2 \\times  \\widehat{${s2 + s1 + s3}}=180\\degree-90\\degree=90\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2 + s1 + s3}}=90\\degree \\div  2=45\\degree$.<br>`;
					texte_corr += `L'angle $\\widehat{${s2 + s1 + s3}}$ mesure $45\\degree$.`;

					break;
				case 6: // cas non aléatoires triangle rectangle 30,60,90
					texte = `$${s1 + s2 + s3}$ est un triangle rectangle en $${s1}$. L'angle $\\widehat{${s1 + s2 + s3}}$ mesure le double de l'angle $\\widehat{${s1 + s3 + s2}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1 + s2 + s3}}$ et $\\widehat{${s1 + s3 + s2}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `Comme $\\widehat{${s1 + s2 + s3}}=2\\times \\widehat{${s1 + s3 + s2}}$ et comme $\\widehat{${s1 + s2 + s3}}$ et $\\widehat{${s1 + s3 + s2}}$ sont complémentaires,<br>`;
						texte_corr += `on a : $2 \\times  \\widehat{${s1 + s3 + s2}} + \\widehat{${s1 + s3 + s2}}=90\\degree$.<br>D'où `;
						texte_corr += ` $3 \\times  \\widehat{${s1 + s3 + s2}}=90\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s1 + s3 + s2}}=90\\degree \\div  3=30\\degree$.<br>`;
					texte_corr += `$\\widehat{${s1 + s2 + s3}}=2\\times \\widehat{${s1 + s3 + s2}}=2\\times  30\\degree=60\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s1 + s3 + s2}}$ mesure $30\\degree$ et l'angle $\\widehat{${s1 + s2 + s3}}$ mesure $60\\degree$.`;

					break;
				case 7:// cas non aléatoires triangle rectangle 18,72,90
					texte = `$${s1 + s2 + s3}$ est un triangle rectangle en $${s1}$. L'angle $\\widehat{${s1 + s3 + s2}}$ mesure le quart de l'angle $\\widehat{${s1 + s2 + s3}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1 + s2 + s3}}$ et $\\widehat{${s1 + s3 + s2}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `Comme $\\widehat{${s1 + s2 + s3}}=\\dfrac{\\widehat{${s1 + s3 + s2}}}{4}$, on a $\\widehat{${s1 + s3 + s2}}=4\\times \\widehat{${s1 + s2 + s3}}$.<br>`;
						texte_corr += `De plus $\\widehat{${s1 + s2 + s3}}$ et $\\widehat{${s1 + s3 + s2}}$ sont complémentaires.<br>`;
						texte_corr += `D'où : $4 \\times  \\widehat{${s1 + s2 + s3}} + \\widehat{${s1 + s2 + s3}}=90\\degree$.<br>D'où `;
						texte_corr += ` $5 \\times  \\widehat{${s1 + s2 + s3}}=90\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s1 + s2 + s3}}=90\\degree \\div  5=18\\degree$.<br>`;
					texte_corr += `$\\widehat{${s1 + s3 + s2}}=4\\times \\widehat{${s1 + s2 + s3}}=4\\times  18\\degree=72\\degree$.<br>`;
					texte_corr += `L'angle $\\widehat{${s1 + s3 + s2}}$ mesure $72\\degree$ et l'angle $\\widehat{${s1 + s2 + s3}}$ mesure $18\\degree$.`;
					break;
				case 8:// cas non aléatoires triangle rectangle 15,75,90
					texte = `$${s1 + s2 + s3}$ est un triangle rectangle en $${s1}$. L'angle $\\widehat{${s1 + s2 + s3}}$ est cinq fois plus grand que l'angle $\\widehat{${s1 + s3 + s2}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1 + s2 + s3}}$ et $\\widehat{${s1 + s3 + s2}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `$\\widehat{${s1 + s2 + s3}}=5\\times \\widehat{${s1 + s3 + s2}}$ et comme $\\widehat{${s1 + s2 + s3}}$ et $\\widehat{${s1 + s3 + s2}}$ sont complémentaires,<br>`;
						texte_corr += ` on a : $5 \\times  \\widehat{${s1 + s3 + s2}} + \\widehat{${s1 + s3 + s2}}=90\\degree$.<br>D'où `;
						texte_corr += ` $6 \\times  \\widehat{${s1 + s3 + s2}}=90\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s1 + s3 + s2}}=90\\degree \\div  6=15\\degree$<br>`;
					texte_corr += `$\\widehat{${s1 + s2 + s3}}=5\\times \\widehat{${s1 + s3 + s2}}=5\\times  15\\degree=75\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s1 + s3 + s2}}$ mesure $15\\degree$ et l'angle $\\widehat{${s1 + s2 + s3}}$ mesure $75\\degree$.`;
					break;
				case 9: //cas non aléatoire triangle équilatéral
					texte = `$${s1 + s2 + s3}$ est un triangle dont les trois angles sont égaux. Quelles sont les mesures de ses angles ?`;
					if (this.correction_detaillee) {
						texte_corr += `De plus, $\\widehat{${s1 + s2 + s3}}=\\widehat{${s1 + s3 + s2}}=\\widehat{${s2 + s1 + s3}}$<br>`
						texte_corr += `D'où $3\\times \\widehat{${s1 + s2 + s3}}=180\\degree$.<br>`;
						texte_corr += `D'où : $\\widehat{${s1 + s2 + s3}}=180\\degree\\div  3=60\\degree$.<br>`;
					}
					texte_corr += `On a donc $\\widehat{${s1 + s2 + s3}}=\\widehat{${s1 + s3 + s2}}=\\widehat{${s2 + s1 + s3}}=60\\degree$.<br>`;
					texte_corr += `Le triangle $${s1 + s2 + s3}$ est un triangle équilatéral.`
					break;
				case 10: //cas non aléatoire triangle rectangle 22.5, 67.5,90
					texte = `$${s1 + s2 + s3}$ est un triangle rectangle en $${s1}$. L'angle $\\widehat{${s1 + s3 + s2}}$ mesure le tiers de l'angle $\\widehat{${s1 + s2 + s3}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1 + s2 + s3}}$ et $\\widehat{${s1 + s3 + s2}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `Comme $\\widehat{${s1 + s2 + s3}}=\\dfrac{\\widehat{${s1 + s3 + s2}}}{3}$, on a $\\widehat{${s1 + s3 + s2}}=3\\times \\widehat{${s1 + s2 + s3}}$.<br>`;
						texte_corr += `De plus $\\widehat{${s1 + s2 + s3}}$ et $\\widehat{${s1 + s3 + s2}}$ sont complémentaires.<br>`;
						texte_corr += `D'où : $3 \\times  \\widehat{${s1 + s2 + s3}} + \\widehat{${s1 + s2 + s3}}=90\\degree$.<br>D'où `;
						texte_corr += ` $4 \\times  \\widehat{${s1 + s2 + s3}}=90\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s1 + s2 + s3}}=90\\degree \\div  4=22,5\\degree$.<br>`;
					texte_corr += `$\\widehat{${s1 + s3 + s2}}=3\\times \\widehat{${s1 + s2 + s3}}=3\\times  22,5\\degree=67,5\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s1 + s3 + s2}}$ mesure $67,5\\degree$ et l'angle $\\widehat{${s1 + s2 + s3}}$ mesure $22,5\\degree$.`;
					break;
				case 11: //cas non aléatoire triangle 67.5 , 67.5 , 45.
					texte = `$${s1 + s2 + s3}$ est un triangle isocèle en $${s1}$. L'angle $\\widehat{${s2 + s1 + s3}}$ mesure les deux tiers de l'angle $\\widehat{${s1 + s2 + s3}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1 + s2 + s3}}$, $\\widehat{${s1 + s3 + s2}}$ et $\\widehat{${s2 + s1 + s3}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `Comme $\\widehat{${s2 + s1 + s3}}=\\dfrac{2\\times  \\widehat{${s1 + s3 + s2}}}{3}$, on a $\\widehat{${s1 + s3 + s2}}=\\dfrac{3\\times \\widehat{${s2 + s1 + s3}}}{2}$.<br>`;
						texte_corr += `De plus $\\widehat{${s1 + s3 + s2}}$ et $\\widehat{${s1 + s2 + s3}}$ sont égaux, alors $\\widehat{${s1 + s2 + s3}}=\\dfrac{3\\times \\widehat{${s2 + s1 + s3}}}{2}$.<br>`;
						texte_corr += `D'où : $\\dfrac{3 \\times  \\widehat{${s2 + s1 + s3}}}{2}\\times  2 + \\widehat{${s2 + s1 + s3}}=180\\degree$.<br>`;
						texte_corr += `D'où : $3 \\times  \\widehat{${s2 + s1 + s3}} + \\widehat{${s2 + s1 + s3}}=180\\degree$.<br>D'où `;
						texte_corr += ` $4 \\times  \\widehat{${s2 + s1 + s3}}=180\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2 + s1 + s3}}=180\\degree \\div  4=45\\degree$.<br>`;
					texte_corr += `$\\widehat{${s1 + s3 + s2}}=\\dfrac{3\\times \\widehat{${s2 + s1 + s3}}}{2}=\\dfrac{3\\times  45\\degree}{2}=\\dfrac{135\\degree}{2}=67,5\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s1 + s3 + s2}}$ mesure $67,5\\degree$, l'angle $\\widehat{${s1 + s2 + s3}}$ mesure $67,5\\degree$ et l'angle $\\widehat{${s2 + s1 + s3}}$ mesure $45\\degree$`;
					break;
				case 12: //cas non aléatoire triangle 72 , 72 , 36.
					texte = `$${s1 + s2 + s3}$ est un triangle isocèle en $${s1}$. L'angle $\\widehat{${s1 + s2 + s3}}$ mesure le double de l'angle $\\widehat{${s2 + s1 + s3}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1 + s2 + s3}}$, $\\widehat{${s1 + s3 + s2}}$ et $\\widehat{${s2 + s1 + s3}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `On a $\\widehat{${s1 + s2 + s3}}=2\\times  \\widehat{${s2 + s1 + s3}}$.<br>`;
						texte_corr += `De plus $\\widehat{${s1 + s3 + s2}}$ et $\\widehat{${s1 + s2 + s3}}$ sont égaux, alors $\\widehat{${s1 + s3 + s2}}=2\\times \\widehat{${s2 + s1 + s3}}$.<br>`;
						texte_corr += `D'où : $2 \\times  \\widehat{${s2 + s1 + s3}}\\times  2 + \\widehat{${s2 + s1 + s3}}=180\\degree$.<br>`;
						texte_corr += `D'où : $4 \\times  \\widehat{${s2 + s1 + s3}} + \\widehat{${s2 + s1 + s3}}=180\\degree$.<br>D'où `;
						texte_corr += ` $5 \\times  \\widehat{${s2 + s1 + s3}}=180\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2 + s1 + s3}}=180\\degree \\div  5=36\\degree$.<br>`;
					texte_corr += `$\\widehat{${s1 + s3 + s2}}=2\\times \\widehat{${s2 + s1 + s3}}=2\\times  36\\degree=72\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s1 + s3 + s2}}$ mesure $72\\degree$, l'angle $\\widehat{${s1 + s2 + s3}}$ mesure $72\\degree$ et l'angle $\\widehat{${s2 + s1 + s3}}$ mesure $36\\degree$`;
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
	this.besoin_formulaire_numerique = ['Niveau de difficuté', 3, "1 : Facile \n 2 : Difficile \n 3 : Mélange des deux niveaux"]
}

