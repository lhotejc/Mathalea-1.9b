import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
* Effectuer l'addition ou la soustraction de deux fractions dont un dénominateur est un multiple de l'autre.
*
* Le résultat de la soustraction sera toujours positif.
*
* Le coefficient est paramétrable, par défaut il est inférieur à 11.
*
* On peut paramétrer de n'avoir que des soustractions.
* @Auteur Rémi Angot
* 5N20
*/
export default function Exercice_additionner_ou_soustraire_des_fractions_5e(max = 11) {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max; // Correspond au facteur commun
	this.sup2 = false // Si true alors il n'y aura que des soustractions
	this.titre = "Additionner ou soustraire deux fractions (dénominateurs multiples)"
	this.consigne = "Calculer et donner le résultat sous la forme d'une fraction simplifiée"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;
	this.sup2 = 3;

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_type_de_questions;
		if (this.sup2 == 1) {
			liste_type_de_questions = combinaison_listes(['+'], this.nb_questions);
		}
		if (this.sup2 == 2) {
			liste_type_de_questions = combinaison_listes(['-'], this.nb_questions);
		}
		if (this.sup2 == 3) {
			liste_type_de_questions = combinaison_listes(['+', '-'], this.nb_questions);
		}
		for (let i = 0, a, b, c, d, texte, texte_corr, cpt = 0; i < this.nb_questions; i++) {
			// les numérateurs
			a = randint(1, 9);
			// les dénominateurs
			b = randint(2, 9, a);
			while (b == a) {
				b = randint(2, 9); // pas de fraction avec numérateur et dénominateur égaux
			}
			k = randint(2, this.sup);
			d = b * k
			if (liste_type_de_questions[i] == '-') {
				c = choice([randint(1, b * k), randint(b * k, 9 * k)])
			} else {
				c = randint(1, 19, d)
			}
			if (liste_type_de_questions[i] == '+') { //une addition
				let ordre_des_fractions = randint(1, 2)
				if (ordre_des_fractions == 1) {
					texte = `$${tex_fraction(a, b)}+${tex_fraction(c, d)}=$`;
				} else {
					texte = `$${tex_fraction(c, d)}+${tex_fraction(a, b)}=$`;
				}
				if (ordre_des_fractions == 1) {
					texte_corr = `$${tex_fraction(a, b)}+${tex_fraction(c, d)}=${tex_fraction(a + mise_en_evidence('\\times ' + k), b + mise_en_evidence('\\times ' + k))}+${tex_fraction(c, d)}`
					texte_corr += `=${tex_fraction(a * k, b * k)}+${tex_fraction(c, d)}=${tex_fraction(a * k + `+` + c, d)}=${tex_fraction(a * k + c, d)}$`;
				} else {
					texte_corr = `$${tex_fraction(c, d)}+${tex_fraction(a, b)}=${tex_fraction(c, d)}+${tex_fraction(a + mise_en_evidence('\\times ' + k), b + mise_en_evidence('\\times ' + k))}`
					texte_corr += `=${tex_fraction(c, d)}+${tex_fraction(a * k, b * k)}=${tex_fraction(c + '+' + a * k, d)}=${tex_fraction(a * k + c, d)}$`;
				}
				// Est-ce que le résultat est simplifiable ?
				let s = pgcd(a * k + c, d);
				if (s != 1) {
					texte_corr += `$=${tex_fraction(Algebrite.eval((a * k + c) / s) + mise_en_evidence('\\times ' + s), Algebrite.eval(d / s) + mise_en_evidence('\\times ' + s))}=${tex_fraction(Algebrite.eval((a * k + c) / s), Algebrite.eval(d / s))}$`
				}
			} else { //une soustraction
				if ((a / b) > (c / d)) {
					texte = `$${tex_fraction(a, b)}-${tex_fraction(c, d)}=$`;
				} else {
					texte = texte = `$${tex_fraction(c, d)}-${tex_fraction(a, b)}=$`;
				}
				if ((a / b) > (c / d)) {
					texte_corr = `$${tex_fraction(a, b)}-${tex_fraction(c, d)}=${tex_fraction(a + mise_en_evidence('\\times ' + k), b + mise_en_evidence('\\times ' + k))}-${tex_fraction(c, d)}`
					texte_corr += `=${tex_fraction(a * k, b * k)}-${tex_fraction(c, d)}=${tex_fraction(a * k + `-` + c, d)}=${tex_fraction(a * k - c, d)}$`;
				} else {
					texte_corr = `$${tex_fraction(c, d)}-${tex_fraction(a, b)}=${tex_fraction(c, d)}-${tex_fraction(a + mise_en_evidence('\\times ' + k), b + mise_en_evidence('\\times ' + k))}`
					texte_corr += `=${tex_fraction(c, d)}-${tex_fraction(a * k, b * k)}=${tex_fraction(c + '-' + a * k, d)}=${tex_fraction(c - a * k, d)}$`;
				}
				// Est-ce que le résultat est simplifiable ?
				let s = pgcd(a * k - c, d);
				if (abs(a * k - c) % d == 0) { //si la fraction peut-être un nombre entier
					texte_corr += `$=${Algebrite.eval((abs(a * k - c)) / d)}$`
				} else if (s != 1) {
					texte_corr += `$=${tex_fraction(Algebrite.eval((abs(a * k - c)) / s) + mise_en_evidence('\\times ' + s), Algebrite.eval(d / s) + mise_en_evidence('\\times ' + s))}=${tex_fraction(Algebrite.eval((abs(a * k - c)) / s), Algebrite.eval(d / s))}$`
				}
			}

			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du coefficient multiplicateur', 99999];
	this.besoin_formulaire2_numerique = ['Types de calculs ', 3, '1 : Additions\n2 : Soustractions\n3 : Additions et soustractions'];
}


