import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Lire un nombre décimal jusqu'au millième graĉe à un système de zoom successifs
 * L'abscisse est à donner sous trois formes.
 * ref 6N23-3
 * Publié le 13/11/2020
 * @Auteur Jean-Claude Lhote
 */
export default function lireUneAbscisseAvecZoomCM() {
  LireUneAbscisseAvecZoom.call(this);
  this.niveau = 'CM';
  this.sup = 1;
}
function LireUneAbscisseAvecZoom() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.niveau = 'sixième'
  this.sup = 3;
  this.titre = "Lire une abscisse décimale grâce à des zooms successifs";
  this.consigne = "";
  if (sortie_html) {
    this.spacing = 2;
    this.spacing_corr = 3;
  }
  else {
    this.spacing = 1;
    this.spacing_corr = 1;
  }
  this.vspace = -1;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 1
  this.nb_questions = 1;
  this.nb_questions_modifiable = false

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let d1, d2, d3, d3Corr, d1Corr, d2Corr, texte = "", texte_corr = "", extremite, extreme, noms = choisit_lettres_differentes(5, 'QFN')
    let x1 = 0, x2 = 0, x3 = 0, objets = [], fenetre, thickOff = 0, objetsCorr = []
    if (this.sup == 1) {
      if (this.niveau == 'CM') {
        xmin = 0
        thickOff = 0
        origine = 0
        extreme = 9
        xmax = 9
      }
      else {
        xmin = randint(5, 10) - 0.2
        origine = Math.round(xmin + 0.2)
        extreme = calcul(origine + 9)
        thickOff = 0.1
        xmax = origine + 9.2
      }
      x1 = calcul(xmin + 0.2 + randint(1, 5) + randint(2, 8) / 10)
      //   xmin=calcul(Math.floor(x1)-5)
      //    xmax=calcul(Math.floor(x1)+6)
      if (xmin == 0) extremite = `|->`
      else extremite = `->`

      d1 = droiteGraduee2({
        x: 0, y: 3, Min: xmin, axePosition: 'H', Max: xmax + 0.2, thickSec: true, thickTer: false, Unite: 3, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 4, labelsPrincipaux: false,
        labelListe: [[origine, `${tex_nombre(origine)}`], [extreme, `${tex_nombre(extreme)}`]],
        pointListe: [[x1, `${noms[1]}`], [Math.floor(x1), `${noms[0]}`], [Math.floor(x1 + 1), `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      d2 = droiteGraduee2({
        x: Math.floor(x1) - xmin + 1.5, y: 0, Min: Math.floor(x1), axePosition: 'H', Max: Math.floor(x1 + 1), thickSec: true, thickTer: false, Unite: 20, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 4, labelsPrincipaux: false,
        pointListe: [[x1, `${noms[1]}`], [Math.floor(x1), `${noms[0]}`], [Math.floor(x1 + 1), `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      d1Corr = droiteGraduee2({
        x: 0, y: 3, Min: xmin, axePosition: 'H', Max: xmax + 0.2, thickSec: true, thickTer: false, Unite: 3, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 4, labelsPrincipaux: true,
        labelListe: [[origine, `${tex_nombre(origine)}`], [extreme, `${tex_nombre(extreme)}`]],
        pointListe: [[x1, `${noms[1]}`], [Math.floor(x1), `${noms[0]}`], [Math.floor(x1 + 1), `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      d2Corr = droiteGraduee2({
        x: Math.floor(x1) - xmin + 1.5, y: 0, Min: Math.floor(x1), axePosition: 'H', Max: Math.floor(x1 + 1), thickSec: true, thickTer: false, Unite: 20, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 4, labelsPrincipaux: false, labelsSecondaires: true,
        labelListe: [[Math.floor(x1), `${tex_nombre(Math.floor(x1))}`], [x1, `${tex_nombre(x1)}`], [Math.ceil(x1), `${tex_nombre(Math.ceil(x1))}`]],
        pointListe: [[x1, `${noms[1]}`], [Math.floor(x1), `${noms[0]}`], [Math.floor(x1 + 1), `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })

      pA1 = point((Math.floor(x1) - xmin) * 3, 3)
      pA2 = point(Math.floor(x1) - xmin + 1.5, 0)
      pB1 = point((Math.floor(x1) + 1 - xmin) * 3, 3)
      pB2 = point(Math.floor(x1) - xmin + 21.5, 0)
      sA = segment(pA1, pA2)
      sB = segment(pB1, pB2)
      sA.pointilles = true
      sB.pointilles = true
      objets.push(d1, d2, sA, sB)
      objetsCorr.push(d1Corr, d2Corr, sA, sB)
      fenetre = { xmin: -1.5, xmax: 35, ymin: -1, ymax: 4.5, pixelsParCm: 25, scale: 0.5 }
      texte_corr = `L'abscisse de ${noms[1]} est : $${tex_nombre(x1)}=${tex_nombre(Math.floor(x1))} + ${tex_fraction(calcul(10 * (x1 - Math.floor(x1))), 10)}=${tex_fraction(calcul(x1 * 10), 10)}$.<br>`
    }
    else if (this.sup == 2) {
      if (this.niveau == 'CM') {
        xmin = 0
        thickOff = 0
      }
      else {
        xmin = randint(1, 15) - 0.02
        thickOff = 0.01
      }

      xmax = xmin + 1.05
      x1 = calcul(xmin + 0.02 + randint(2, 8) / 10 + randint(2, 8) / 100)
      x2 = calcul(Math.floor(x1 * 10) / 10)
      x3 = calcul(x2 + 0.1)
      //      xmin=calcul(x2-0.8)
      //      xmax=calcul(xmin+1.7)
      if (xmin == 0) extremite = `|->`
      else extremite = `->`
      d1 = droiteGraduee2({
        x: 0, y: 3, Min: xmin, axePosition: 'H', Max: xmax, thickSec: true, thickTer: true, Unite: 30, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 8, thickDistance: 1, thickSecDist: 0.1, thickTerDist: 0.01, labelsPrincipaux: false,
        labelListe: [[Math.floor(x1), `${Math.floor(x1)}`], [Math.ceil(x1), `${Math.ceil(x1)}`]],
        pointListe: [[x1, `${noms[1]}`], [x2, `${noms[0]}`], [x3, `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      d2 = droiteGraduee2({
        x: (x2 - xmin) + 6, y: 0, Min: x2, axePosition: 'H', Max: x2 + .1, thickSec: true, thickTer: false, Unite: 200, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 6, thickDistance: 0.1, thickSecDist: 0.01, thickTerDist: 0.001, labelsPrincipaux: false,
        pointListe: [[x1, `${noms[1]}`], [x2, `${noms[0]}`], [x2 + 0.1, `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      d1Corr = droiteGraduee2({
        x: 0, y: 3, Min: xmin, axePosition: 'H', Max: xmax, thickSec: true, thickTer: true, Unite: 30, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 8, thickDistance: 1, thickSecDist: 0.1, thickTerDist: 0.01, labelsSecondaires: true,
        labelListe: [[Math.floor(x1), `${Math.floor(x1)}`], [Math.ceil(x1), `${Math.ceil(x1)}`]],
        pointListe: [[x1, `${noms[1]}`], [x2, `${noms[0]}`], [x3, `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      d2Corr = droiteGraduee2({
        x: (x2 - xmin) + 6, y: 0, Min: x2, axePosition: 'H', Max: x2 + .1, thickSec: true, thickTer: false, Unite: 200, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 6, thickDistance: 0.1, thickSecDist: 0.01, thickTerDist: 0.001, labelsPrincipaux: false, labelsSecondaires: true,
        labelListe: [[x2, `${tex_nombre(x2) + '0'}`], [x1, `${tex_nombre(x1)}`], [x3, `${tex_nombre(x3) + '0'}`]],
        pointListe: [[x1, `${noms[1]}`], [x2, `${noms[0]}`], [x2 + 0.1, `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })

      pA1 = point((Math.floor(x1 * 10) / 10 - xmin) * 30, 3)
      pA2 = point(x2 - xmin + 6, 0)
      pB1 = point((Math.floor(x1 * 10) / 10 + 0.1 - xmin) * 30, 3)
      pB2 = point(x3 - xmin + 26, 0)
      sA = segment(pA1, pA2)
      sB = segment(pB1, pB2)
      sA.pointilles = true
      sB.pointilles = true
      fenetre = { xmin: -1.5, xmax: 35, ymin: -1.5, ymax: 4.5, pixelsParCm: 25, scale: 0.5 }
      objets.push(d1, d2, sA, sB)
      objetsCorr.push(d1Corr, d2Corr, sA, sB)
      let partent = Math.floor(x1), pardec = calcul(x1 - partent)
      texte_corr = `L'abscisse de ${noms[1]} est : $${tex_nombre(x1)}=${tex_nombre(partent)} + ${tex_fraction(calcul(pardec * 100), 100)}=${tex_fraction(calcul(x1 * 100), 100)}$.<br>`

    }
    else if (this.sup == 3) {
      if (this.niveau == 'CM') {
        xmin = 0
        xmax = 1
        thickOff = 0
        x1 = calcul(xmin + randint(2, 8) / 10 + randint(2, 8) / 100 + randint(2, 8) * 0.001)
        x2 = troncature(x1, 1)
        x21 = troncature(x1, 2)
        x3 = calcul(x2 + 0.1)
        x31 = calcul(x21 + 0.01)
      }
      else {
        xmin = randint(1, 15)
        xmax = xmin + 1
        x1 = calcul(xmin + randint(2, 8) / 10 + randint(2, 8) / 100 + randint(2, 8) * 0.001)
        x2 = troncature(x1, 1)
        x21 = troncature(x1, 2)
        x3 = calcul(x2 + 0.1)
        x31 = calcul(x21 + 0.01)
        xmin = Math.floor(x2)
        xmax = xmin + 1
        thickOff = 0.001
      }
      if (xmin == 0) extremite = `|->`
      else extremite = `->`
      d1 = droiteGraduee2({
        x: 0, y: 6, Min: xmin, axePosition: 'H', Max: xmax, thickSec: true, thickTer: true, Unite: 30, thickDistance: 1, thickSecDist: 0.1, thickTerDist: 0.01, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 6, labelsPrincipaux: true,
        labelListe: [[xmin, `${tex_nombre(xmin)}`], [xmax, `${tex_nombre(xmax)}`]],
        pointListe: [[x1, `${noms[1]}`], [x2, `${noms[0]}`], [x3, `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 3, axeStyle: extremite
      })
      d2 = droiteGraduee2({
        x: 6.5, y: 3, Min: x2, axePosition: 'H', Max: x3, thickSec: true, thickTer: true, Unite: 200, thickSecDist: 0.01, thickTerDist: 0.001, thickDistance: 0.1, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 6, labelsPrincipaux: false,
        pointListe: [[x1, `${noms[1]}`], [x2, `${noms[0]}`], [x3, `${noms[2]}`], [x21, `${noms[3]}`], [x31, `${noms[4]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      d3 = droiteGraduee2({
        x: 6.5, y: 0, Min: x21, axePosition: 'H', Max: x31, thickSec: true, thickTer: false, Unite: 2000, thickSecDist: 0.001, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 6, labelsPrincipaux: false,
        pointListe: [[x1, `${noms[1]}`], [x21, `${noms[3]}`], [x31, `${noms[4]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      d1Corr = droiteGraduee2({
        x: 0, y: 6, Min: xmin, axePosition: 'H', Max: xmax, thickSec: true, thickTer: true, Unite: 30, thickDistance: 1, thickSecDist: 0.1, thickTerDist: 0.01, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 6, labelsPrincipaux: true, labelsSecondaires: true,
        labelListe: [[xmin, `${tex_nombre(xmin)}`], [xmax, `${tex_nombre(xmax)}`]],
        pointListe: [[x1, `${noms[1]}`], [x2, `${noms[0]}`], [x3, `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 3, axeStyle: extremite
      })
      d2Corr = droiteGraduee2({
        x: 6.5, y: 3, Min: x2, axePosition: 'H', Max: x3, thickSec: true, thickTer: true, Unite: 200, thickSecDist: 0.01, thickTerDist: 0.001, thickDistance: 0.1, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 6, labelsPrincipaux: false, labelsSecondaires: true,
        pointListe: [[x1, `${noms[1]}`], [x2, `${noms[0]}`], [x3, `${noms[2]}`], [x21, `${noms[3]}`], [x31, `${noms[4]}`]],
        labelListe: [[x2, `${tex_nombre(x2) + '0'}`], [x3, `${tex_nombre(x3) + '0'}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      d3Corr = droiteGraduee2({
        x: 6.5, y: 0, Min: x21, axePosition: 'H', Max: x31, thickSec: true, thickTer: false, Unite: 2000, thickSecDist: 0.001, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 6, labelsPrincipaux: false, labelsSecondaires: true,
        pointListe: [[x1, `${noms[1]}`], [x21, `${noms[3]}`], [x31, `${noms[4]}`]],
        labelListe: [[x21, `${tex_nombre(x21) + '0'}`], [x31, `${tex_nombre(x31) + '0'}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })

      pA1 = point((x2 - xmin) * 30, 6)
      pA2 = point(6.5, 3)
      pB1 = point((x3 - xmin) * 30, 6)
      pB2 = point(26.5, 3)
      sA = segment(pA1, pA2)
      sB = segment(pB1, pB2)
      sA.pointilles = true
      sB.pointilles = true
      pC1 = point(6.5 + (x21 - x2) * 200, 3)
      pC2 = point(6.5, 0)
      pD1 = point(6.5 + (x31 - x2) * 200, 3)
      pD2 = point(26.5, 0)
      sC = segment(pC1, pC2)
      sD = segment(pD1, pD2)
      sC.pointilles = true
      sD.pointilles = true
      fenetre = { xmin: -1.5, xmax: 35, ymin: -1.5, ymax: 7.5, pixelsParCm: 25, scale: 0.5 }
      objets.push(d1, d2, d3, sA, sB, sC, sD)
      objetsCorr.push(d1Corr, d2Corr, d3Corr, sA, sB, sC, sD)
      let partent = Math.floor(x1), pardec = calcul(x1 - partent)
      texte_corr = `L'abscisse de ${noms[1]} est : $${tex_nombre(x1)}=${tex_nombre(partent)} + ${tex_fraction(calcul(pardec * 1000), 1000)}=${tex_fraction(calcul(x1 * 1000), 1000)}$.<br>`

    }
    texte = `Donner l'abscisse de ${noms[1]} sous trois formes : en écriture décimale, comme somme d’un nombre entier et d’une fraction décimale et avec une fraction décimale.<br>`
    texte += mathalea2d(fenetre, objets)
    texte_corr += mathalea2d(fenetre, objetsCorr)
    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu_sans_numero(this);
  };
  this.besoin_formulaire_numerique = ['Niveau de difficulté', 3, '1 : Au dixième\n2 : Au centième\n3 : Au millième'];
}


