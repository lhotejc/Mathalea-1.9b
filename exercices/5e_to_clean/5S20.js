import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Placer un événement sur une échelle de probabilités.
 * @Auteur Erwan Duplessy
 * Référence 5S20
 */

// Source : https://pedagogie.ac-guadeloupe.fr/sites/default/files/File/flouvet/ra16_c4_math_probabilite_flash_pdf_69131.pdf

export default function Placer_probabilites() {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Placer un événement sur une échelle de probabilités";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	sortie_html ? this.spacing = 2 : this.spacing = 1;
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1;
	this.sup = true;
	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées		
		let lstEvenenementA = []; // liste des évènements disponibles : p == 0 ou p == 1
		let lstEvenenementB = []; // liste des évènements disponibles : p < 0.5
		let lstEvenenementC = []; // liste des évènements disponibles : p = 0.5
		let lstEvenenementD = []; // liste des évènements disponibles : p > 0.5
		nbEvenement = 4; // nombre d'évènements dans l'énoncé
		texte = "";
		// liste de vocabulaire. Le nombre donne la position sur l'axe.
		lstEchelle = [['Impossible', 0],
		['Improbable', calcul(1 / 6)],
		['Peu probable', calcul(2 / 6)],
		['Une chance sur deux', calcul(3 / 6)],
		['Probable', calcul(4 / 6)],
		['Très probable', calcul(5 / 6)],
		['Certain', 1]];

		// Evenements impossibles :
		lstEvenenementA.push([`L’équipe de France de rugby va remporter le prochain match international de football`, 0]);
		animal = choice(["un dragon", "l'abominable homme des neiges", "un chat-garou", "un dahu", "un hippocampéléphantocamélos", "une licorne", "le Minotaure"]);
		lstEvenenementA.push([`Rencontrer ${animal} en sortant du collège`, 0]);
		lstEvenenementA.push([`Le point M, placé à 4 cm de A, est sur le cercle de centre A et de rayon 7 cm`, 0]);
		lstEvenenementA.push([`Le point M, placé à 4 cm de A, est dans le disque de centre A et de rayon 3 cm`, 0]);
		lstEvenenementA.push([`En France, on peut trouver des vaches espagnoles qui parlent anglais`, 0]);
		lstEvenenementA.push([`Aux USA, on peut trouver des pierres qui roulent et qui amassent de la mousse`, 0]);
		// Evenements improbables :
		lstEvenenementB.push([`Gagner le gros lot au loto`, 0.05]);
		lstEvenenementB.push([`Avoir de la neige à Nice en juillet`, 0.05]);
		carte = choice(["un As", "un Roi", "une Dame", "un Valet", "un 10", "un 9", "un 8", "un 7", "un 6", "un 5", "un 4", "un 3", "un 2"]);
		lstEvenenementB.push([`Obtenir ${carte} en prenant une carte au hasard dans un jeu de 52 cartes`, 0.08]);
		// Evenements peu probables :
		lstEvenenementB.push([`Choisir une balle rouge dans un sac contenant une balle rouge et trois balles vertes`, 0.25]);
		// Evenements Une chance sur deux :
		lstEvenenementC.push([`Obtenir ` + choice([`pile`, `face`]) + ` quand on lance une pièce d’un euro`, 0.5]);
		lstEvenenementC.push([`Obtenir une carte ` + choice([`rouge`, `noire`]) + ` dans un jeu de 52 cartes`, 0.5]);
		// Evenements probables :
		lstEvenenementD.push([`La première voiture que je verrai en sortant du collège sera de marque française`, 0.6]);
		// Evenements très probables :
		lstEvenenementD.push([`Le prochain président de la République Française aura plus de 40 ans`, 0.9]);
		// Evenements certains :
		lstEvenenementA.push([`Le prochain oiseau que je verrai aura des ailes`, 1]);
		lstEvenenementA.push([`Le point M, placé à 4 cm de A, est sur le cercle de centre A et de rayon 4 cm`, 1]);
		lstEvenenementA.push([`Le point M, placé à 4 cm de A, est dans le disque de centre A et de rayon 5 cm`, 1]);
		// Evenement divers : 
		let m = choice([4, 6, 8, 10, 12, 20, 24, 30, 48, 60, 100]); //nombre de faces du dé
		let n = randint(1, m); //nombre à obtenir
		lstEvenenementB.push([`Obtenir ${n} avec un dé à ${m} faces`, 1 / m]);
		if ((m - n + 1) / m < 0.5) {
			lstEvenenementB.push([`Obtenir un nombre supérieur ou égal à ${n} avec un dé à ${m} faces`, (m - n + 1) / m]);
		} else {
			lstEvenenementD.push([`Obtenir un nombre supérieur ou égal à ${n} avec un dé à ${m} faces`, (m - n + 1) / m]);
		}
		if (n / m < 0.5) {
			lstEvenenementB.push([`Obtenir un nombre inférieur ou égal à ${n} avec un dé à ${m} faces`, n / m]);
		} else {
			lstEvenenementD.push([`Obtenir un nombre inférieur ou égal à ${n} avec un dé à ${m} faces`, n / m]);
		}

		// choix des évènements :
		let lstEvenenementExo = [];
		lstEvenenementExo.push(choice(lstEvenenementA, lstEvenenementExo)); // p == 0 ou p == 1
		lstEvenenementExo.push(choice(lstEvenenementB, lstEvenenementExo)); // p < 0.5
		lstEvenenementExo.push(choice(lstEvenenementC, lstEvenenementExo)); // p = 0.5 
		lstEvenenementExo.push(choice(lstEvenenementD, lstEvenenementExo));	// p > 0.5
		lstEvenenementExo = shuffle(lstEvenenementExo);

		// Texte de l'énoncé :
		texte += `Placer la lettre correspondant à chaque évènement sur l'axe des probabilités ci-dessous.<br>`
		for (let i = 0; i < nbEvenement; i++) {
			texte += String.fromCharCode(65 + i) + ` : ` + lstEvenenementExo[i][0] + `.<br>`;
		}
		// Création des objets pour dessiner :
		let L = 10; // longueur du segment

		let lstObjet = []; // tous les objets qui seront dessinés
		let h = 0.25; // hauteur trait
		lstObjet.push(segment(0, 0, L, 0)); // axe
		lstObjet.push(segment(0, -h, 0, h)); // trait gauche
		lstObjet.push(segment(L, -h, L, h)); // trait central
		lstObjet.push(segment(L / 2, -h, L / 2, h)); // trait droit
		let angle = 60; //inclinaison du texte légende
		let y = -0.5;
		if (this.sup) {
			for (let j = 0; j < lstEchelle.length; j++) {
				lstObjet.push(texteParPosition(lstEchelle[j][0], L * lstEchelle[j][1], y, angle, 'black', 1, 'gauche'));
			}
		}
		else {
			lstObjet.push(fractionParPosition({ x: L / 2, y: -1, fraction: fraction(1, 2), couleur: 'black' })); // fraction 1/2 
			lstObjet.push(texteParPosition("0", 0, y - 0.25, 0, 'black', 1, 'middle')); // abscisse 0
			lstObjet.push(texteParPosition("1", L, y - 0.25, 0, 'black', 1, 'middle')); // abscisse 1
		}

		if (sortie_html) {
			texte += `<p style="display:block">`;
		} else {
			texte += `\\begin{center}`;
		}
		let miny = -2;
		if (this.sup) {
			miny = -4;
		}

		texte += mathalea2d({ xmin: -1, xmax: L + 3, ymin: miny, ymax: 1, pixelsParCm: 40, scale: 1 }, lstObjet);
		if (sortie_html) {
			texte += `</p>`;
		} else {
			texte += `\\end{center}`;
		}

		// CORRECTION :
		texte_corr = ` `;
		ylst = [0, 0, 0, 0, 0, 0, 0]; //ordonnées des textes réponses
		angle = 0; // inclinaison du texte réponse
		let p = 0; // probabilité de l'événement
		let parrondi = 0; // arrondi de la proba au sixième près
		for (let i = 0; i < nbEvenement; i++) {
			p = lstEvenenementExo[i][1];
			parrondi = Math.round(calcul(6 * p)); // échelle arrondie entre 0 et 7 pour éviter la superposition des textes réponses
			ylst[parrondi] += 0.5; // on augmente l'ordonnée si elle est déjà utilisée
			let txtSolution = String.fromCharCode(65 + i); //code 65 correspond à 'A'
			lstObjet.push(texteParPosition(txtSolution, calcul(L * p), ylst[parrondi], 0, 'black', 1, 'middle'))
			lstObjet.push(tracePoint(point(calcul(L * p), 0), 'blue'))
		}
		for (let i = 0; i < nbEvenement; i++) {
			p = lstEvenenementExo[i][1];
			if (p == 0) { parrondi = 0 }
			else if (p < 0.25) { parrondi = 1 }
			else if (p < 0.5) { parrondi = 2 }
			else if (p == 0.5) { parrondi = 3 }
			else if (p < 0.75) { parrondi = 4 }
			else if (p < 1) { parrondi = 5 }
			else if (p == 1) { parrondi = 6 };
			texte_corr += String.fromCharCode(65 + i) + ` : ` + lstEvenenementExo[i][0] + `. ` + texte_en_couleur_et_gras(lstEchelle[parrondi][0]) + `.<br>`;
		}
		if (sortie_html) {
			texte_corr += `<p style="display:block">`;
		} else {
			texte_corr += `\\begin{center}`;
		}
		texte_corr += mathalea2d({ xmin: -1, xmax: L + 3, ymin: miny, ymax: 2, pixelsParCm: 40, scale: 1 }, lstObjet);
		if (sortie_html) {
			texte_corr += `</p>`;
		} else {
			texte_corr += `\\end{center}`;
		}
		this.liste_questions.push(texte);
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque question.
	}
	this.besoin_formulaire_case_a_cocher = [`Changer le type d'axe`];
};

