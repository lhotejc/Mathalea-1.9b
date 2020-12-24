import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * 5G22
 * @Auteur Jean-Claude Lhote
 * Les droites remarquables du triangle : hauteurs médiatrices....médianes et bissectrices
 */
export default function DroiteRemarquableDuTriangle() {
	Exercice.call(this); // Héritage de la classe Exercice()

	this.titre = "Déterminer la nature d'une droite remarquable"
	this.consigne = 'Définir'
	this.spacing = 2;
	this.nb_questions = 1
	this.nb_cols = 1
	this.nb_cols_corr = 1
	this.sup = 1

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let triangles = [], sommets = [[]], A = [], B = [], C = [], t = [], d = [], n = [], c = [], objets = [], A0, B0, C0, tri, G
		let type_de_questions_disponibles, liste_type_de_questions
		if (this.sup == 1) type_de_questions_disponibles = [1, 2]
		if (this.sup == 2) type_de_questions_disponibles = [3, 4]
		if (this.sup == 3) type_de_questions_disponibles = [1, 2, 3, 4]
		liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions)
		for (let i = 0, a, angle, rapport, texte, texte_corr, cpt = 0; i < this.nb_questions; i++) {// this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			triangles[i] = new Triangles();
			sommets[i] = triangles[i].getSommets(false);

			A0 = point(3, randint(1, 2))
			B0 = point(6, randint(1, 2))
			angle = choice([50, 60, 70, 75, 80, 100, 110, 120])
			rapport = randint(7, 13) / 10
			C0 = similitude(B0, A0, angle, rapport)
			tri = polygone(A0, B0, C0)
			G = centreGraviteTriangle(A0, B0, C0)
			a = randint(0, 30) * 12 - 180
			A[i] = rotation(A0, G, a, sommets[i][0], 'below left')
			B[i] = rotation(B0, G, a, sommets[i][1], 'below right')
			C[i] = rotation(C0, G, a, sommets[i][2], 'above')
			t[i] = polygone(A[i], B[i], C[i])
			n[i] = nommePolygone(t[i], `${sommets[i][0]}${sommets[i][1]}${sommets[i][2]}`)
			switch (liste_type_de_questions[i]) {
				case 1:
					d[i] = hauteurTriangle(C[i], B[i], A[i], 'blue')
					d[i].epaisseur = 1
					c[i] = codageHauteurTriangle(C[i], B[i], A[i])
					objets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]
					texte_corr = `La droite tracée est la hauteur issue de $${sommets[i][0]}$ dans le triangle ${triangles[i].getNom()}.<br>`
					texte_corr += mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i])
					break
				case 2:
					d[i] = mediatrice(A[i], B[i], true, 'blue')
					d[i].epaisseur = 1
					c[i] = codageMediatrice(A[i], B[i])
					objets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]
					texte_corr = `La droite tracée est la médiatrice du segment [$${sommets[i][0]}${sommets[i][1]}]$.<br>`
					texte_corr += mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i], constructionMediatrice(A[i], B[i], true, color = 'gray', markmilieu = '×', markrayons = '||', couleurMediatrice = 'blue', epaisseurMediatrice = 1))
					break
				case 3:
					d[i] = medianeTriangle(C[i], B[i], A[i], 'blue')
					d[i].epaisseur = 1
					c[i] = codageMedianeTriangle(C[i], B[i], A[i], color = 'black', mark = '//')
					objets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]
					texte_corr = `La droite tracée est la médiane issue de $${sommets[i][0]}$ dans le triangle ${triangles[i].getNom()}.<br>`
					texte_corr += mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i])
					break
				case 4:
					d[i] = bissectrice(A[i], B[i], C[i], 'blue')
					d[i].epaisseur = 1
					c[i] = codageBissectrice(A[i], B[i], C[i])
					objets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]
					texte_corr = `La droite tracée est la bissectrice de l'angle $\\widehat{${sommets[i][0]}${sommets[i][1]}${sommets[i][2]}}$.<br>`
					texte_corr += mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i], constructionBissectrice(A[i], B[i], C[i], detail = false, color = 'red', mark = '×', tailleLosange = 3, couleurBissectrice = 'blue', epaiseurBissectrice = 1))
					break

			}

			texte = `Quelle est la nature de la droite tracée en bleu pour le triangle ${triangles[i].getNom()} ?<br>` + mathalea2d({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i])

			if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
			}
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Type de droites', 3, "1 : Hauteurs et Médiatrices\n2 : Médianes et Bissectrices\n3 : Toutes les droites"]
}
