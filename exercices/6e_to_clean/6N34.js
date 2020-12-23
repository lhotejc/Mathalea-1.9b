import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Lire les coordonnées d'un point du quart de plan positif avec une précision allant de l'unité à 0,25.
 * @Auteur Jean-Claude Lhote
 * référence 6N33
 */
export default function Reperage_point_du_quart_de_plan() {
  Reperage_point_du_plan.call(this);
  this.titre = "Déterminer les coordonnées (positives) d'un point";
  this.quart_de_plan = true;
}
// 3F21
function Lecture_expression_fonctions_lineaires() {
  Lecture_expression_fonctions_affines.call(this);
  this.titre = "Déterminer une fonction linéaire";
  this.lineaire = true;
}
// 3L14-1
function Resoudre_une_equation_produit_nul_niv2() {
  Resoudre_une_equation_produit_nul.call(this);
  this.titre = "Résoudre une équation produit nul (niveau 2)";
  this.sup = 2;
}
// Référence 6C21

function Divisions_euclidiennes_niv2() {
  Divisions_euclidiennes.call(this);
  this.sup = 2;
  this.titre = "Divisions euclidiennes - Niveau 2";
}
//4G40
function Exercice_Trigo_longueurs_4e() {
  Exercice_Trigo_longueurs.call(this);
  this.sup = 1;
  this.besoin_formulaire_numerique = false;
  this.titre =
    "Utiliser le cosinus pour calculer une longueur dans un triangle rectangle";
}
// 4G41
function Exercice_Trigo_angles_4e() {
  this.sup = 1;
  this.quatrieme = true;
  this.titre =
    "Utiliser le cosinus pour calculer la mesure d'un angle dans un triangle rectangle";
  Exercice_Trigo_angles.call(this);
}
// référence 6G24
function Transformations_6e() {
  Transformations.call(this);
  this.sup = 1;
  this.titre = `Trouver l'image d'un point par une symétrie axiale`;
  this.pas_de_version_LaTeX = true;
}

// 5G10
function Symetrie_axiale_5e() {
  Transformations.call(this);
  this.sup = 1;
  this.titre = `Trouver l'image d'un point par une symétrie axiale`;
  this.pas_de_version_LaTeX = true;
}
// 5G11
function Transformations_5e() {
  Transformations.call(this);
  this.sup = 2;
  this.titre = `Trouver l'image d'un point par une symétrie axiale ou centrale`;
  this.pas_de_version_LaTeX = true;
}
// 4G40
function Transformations_4e() {
  Transformations.call(this);
  this.sup = 3;
  this.titre = `Trouver l'image d'un point par une symétrie axiale ou centrale ou par une translation`;
  this.pas_de_version_LaTeX = true;
}
// 3G10-2
function Transformations_3e() {
  Transformations.call(this);
  this.sup = 4;
  this.titre = `Trouver l'image d'un point par une transformation choisie aléatoirement`;
  this.pas_de_version_LaTeX = true;
}
// Référence 6M30
function Calcul_de_volumes_6e() {
  this.sup = 1;
  this.classe = 6;
  Calcul_de_volumes.call(this);
}

// 5M20
function Calcul_de_volumes_5e() {
  this.sup = 1;
  this.classe = 5;
  Calcul_de_volumes.call(this);
}
// 4G53
function Calcul_de_volumes_4e() {
  this.sup = 1;
  this.classe = 4;
  Calcul_de_volumes.call(this);
}
// 3G43
function Calcul_de_volumes_3e() {
  this.sup = 1;
  this.classe = 3;
  Calcul_de_volumes.call(this);
}


function Exercice_6N13() {
  this.sup = 1;
  this.titre = "Utiliser les préfixes multiplicateurs (déca à kilo)";
  Exercice_conversions.call(this);
}
// 6N24
function Exercice_6N24() {
  Exercice_conversions.call(this);
  this.sup = 3;
  this.titre =
    "Utiliser les préfixes multiplicateurs et diviseurs (milli à kilo)";
  this.correction_avec_des_fractions = true;
  this.spacing_corr = 2;
}
// Référence 6M12
function Reglages_6M12() {
  Exercice_conversions_de_longueurs.call(this);
  this.sup = 3;
  this.nb_questions = 8;
}

function Reglages_6M23() {
  Exercice_conversions_aires.call(this);
  this.sup = 3;
  this.nb_cols_corr = 1;
}
// Référence 6M10
function Reglages_6M10() {
  Exercice_perimetres_et_aires.call(this);
  this.sup = 1;
}
// Référence 6M22
function Reglages_6M22() {
  Exercice_perimetres_et_aires.call(this);
  this.sup = 2;
  this.titre = "Périmètres et aires de disques (à partir d'un texte).";
}

function Reglages_6N34() {
  Exercice_conversions.call(this);
  this.sup = 5;
  this.titre = "Conversions avec tous les préfixes de milli à tera.";
}

// 4G30-1
function Thales_4eme() {
  //Dans cette version, pas de configuration papillon reservée aux 3èmes.
  Exercice_Thales.call(this);
  this.titre = "Calculer des longueurs avec la propriété de Thalès (MG32)"
  this.quatrieme = true;
  sortie_html ? this.spacing = 1.5 : this.spacing = 1;
}
// 4G31
function Reciproque_Thales_4eme() {
  Reciproque_Thales.call(this);
  this.quatrieme = true;
}

// 4G30
function Thales2D_4e(params) {
  Thales2D.call(this);
  this.besoin_formulaire_numerique = false
  this.titre = "Calculer des longueurs avec la propriété de Thalès";

}

// 3G20
function Thales2D_3e(params) {
  Thales2D.call(this);
  this.sup = 2;
}

