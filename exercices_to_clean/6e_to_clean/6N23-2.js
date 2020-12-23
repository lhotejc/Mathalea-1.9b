import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Lire des nombres déciamux sur une portion de droite graduée
 * Une question demande la forme décimale, une autre, la partie entière plus la fraction décimale, et une troisième demande une seule fraction décimale.
 * ref 6N23-2
 * 
 * @Auteur Jean-Claude Lhote
 */
export default function Lire_abscisse_decimale_trois_formesCM() {
  Lire_abscisse_decimale_trois_formes.call(this)
  this.niveau = 'CM'
  this.sup = 1
}

function Lire_abscisse_decimale_trois_formes() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.niveau = 'sixième'
  this.titre = "Lire des abscisses décimales sous trois formes";
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

    let d1, texte = "", texte_corr = "", extremite, noms = choisit_lettres_differentes(3, 'Q')
    let x1 = 0, x2 = 0, x3 = 0, thickOff, tableau = []
    if (this.sup == 1) {
      if (this.niveau == 'CM') {
        xmin = 0
        thickOff = 0
      }
      else {
        xmin = randint(1, 15)
        thickOff = calcul(2 / (10 ** (parseInt(this.sup))))
      }
      if (xmin == 0) extremite = `|->`
      else extremite = `->`
      xmax = xmin + 9
      x1 = xmin * 10 + randint(0, 2) * 10 + randint(2, 8)
      x2 = xmin * 10 + randint(3, 5) * 10 + randint(2, 8)
      x3 = xmin * 10 + randint(6, 8) * 10 + randint(2, 8)
      x1 = calcul(x1 / 10)
      x2 = calcul(x2 / 10)
      x3 = calcul(x3 / 10)

      tableau = shuffle([x1, x2, x3])
      x1 = tableau[0]
      x2 = tableau[1]
      x3 = tableau[2]

      d1 = droiteGraduee2({
        x: 0, y: 0, Min: xmin, axePosition: 'H', Max: xmax, thickSec: true, thickTer: false, Unite: 3, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 4,
        pointListe: [[x1, `${noms[0]}`], [x2, `${noms[1]}`], [x3, `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      texte = `${num_alpha(0)} Donner l'abscisse de ${noms[0]} en écriture décimale.<br>`
      texte += `${num_alpha(1)} Donner l'abscisse de ${noms[1]} comme la somme d'un nombre entier et d'une fraction décimale.<br>`
      texte += `${num_alpha(2)} Donner l'abscisse de ${noms[2]} sous la forme d'une fraction décimale.<br>`
      texte_corr = `${num_alpha(0)} L'abscisse de ${noms[0]} est : $${tex_nombre(x1)}$.<br>`
      texte_corr += `${num_alpha(1)} L'abscisse de ${noms[1]} est : $${tex_nombre(Math.floor(x2))} + ${tex_fraction(calcul(10 * (x2 - Math.floor(x2))), 10)}$.<br>`
      texte_corr += `${num_alpha(2)} L'abscisse de ${noms[2]} est : $${tex_fraction(calcul(x3 * 10), 10)}$.`
    }
    else if (this.sup == 2) {
      if (this.niveau == 'CM') {
        xmin = 0
        thickOff = 0
      }
      else {
        xmin = randint(1, 15) - 0.1
        thickOff = calcul(2 / (10 ** (parseInt(this.sup))))
      }
      if (xmin == 0) extremite = `|->`
      else extremite = `->`
      xmax = calcul(xmin + 1.5);
      x1 = 10 + xmin * 100 + randint(1, 3) * 10 + randint(2, 8);
      x2 = 10 + xmin * 100 + randint(4, 6) * 10 + randint(2, 8);
      x3 = 10 + xmin * 100 + randint(7, 9) * 10 + randint(2, 8);

      x1 = calcul(x1 / 100);
      x2 = calcul(x2 / 100);
      x3 = calcul(x3 / 100);
      tableau = shuffle([x1, x2, x3])
      x1 = tableau[0]
      x2 = tableau[1]
      x3 = tableau[2];

      d1 = droiteGraduee2({
        x: 0, y: 0, Min: xmin, axePosition: 'H', Max: xmax, thickSec: true, thickTer: true, Unite: 20, thickOffset: thickOff,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 4,
        pointListe: [[x1, `${noms[0]}`], [x2, `${noms[1]}`], [x3, `${noms[2]}`]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })
      texte = `${num_alpha(0)} Donner l'abscisse de ${noms[0]} en écriture décimale.<br>`
      texte += `${num_alpha(1)} Donner l'abscisse de ${noms[1]} comme la somme d'un entier et d'une fraction décimale.<br>`
      texte += `${num_alpha(2)} Donner l'abscisse de ${noms[2]} sous la forme d'une fraction décimale.<br>`
      texte_corr = `${num_alpha(0)} L'abscisse de ${noms[0]} est : $${tex_nombre(x1)}$.<br>`
      texte_corr += `${num_alpha(1)} L'abscisse de ${noms[1]} est : $${tex_nombre(Math.floor(x2))} + ${tex_fraction(calcul(100 * (x2 - Math.floor(x2))), 100)}$.<br>`
      texte_corr += `${num_alpha(2)} L'abscisse de ${noms[2]} est : $${tex_fraction(calcul(x3 * 100), 100)}$.`

    }
    else if (this.sup == 3) {
      if (this.niveau == 'CM') {
        xmin = 0
        thickOff = 0
      }
      else {
        xmin = calcul(randint(0, 15) + randint(0, 9) * 0.1)
        thickOff = calcul(2 / (10 ** (parseInt(this.sup))))
      }
      if (xmin == 0) extremite = `|->`
      else extremite = `->`
      xmax = calcul(xmin + 0.15)

      x1 = xmin * 1000 + randint(1, 5) * 10 + randint(2, 8)
      x2 = xmin * 1000 + randint(6, 9) * 10 + randint(2, 8)
      x3 = xmin * 1000 + randint(11, 14) * 10 + randint(2, 8)
      x1 = calcul(x1 / 1000)
      x2 = calcul(x2 / 1000)
      x3 = calcul(x3 / 1000)

      tableau = shuffle([x1, x2, x3])
      x1 = tableau[0]
      x2 = tableau[1]
      x3 = tableau[2]
      d1 = droiteGraduee2({
        x: 0, y: 0, Min: xmin, axePosition: 'H', Max: xmax, thickSec: true, thickTer: true, Unite: 200, thickOffset: thickOff,
        thickDistance: 0.1, thickSecDist: 0.01, thickTerDist: 0.001,
        thickCouleur: 'black', axeCouleur: 'black', axeHauteur: 4,
        pointListe: [[x1, `${noms[0]}`], [x2, `${noms[1]}`], [x3, `${noms[2]}`]],
        labelListe: [[xmin + 0.09, tex_nombre(calcul(xmin + 0.09))], [xmin + 0.1, tex_nombre(calcul(xmin + 0.1))]],
        pointTaille: 6, pointOpacite: 0.8, pointCouleur: 'blue', pointStyle: '|', pointEpaisseur: 2, axeStyle: extremite
      })

      texte = `${num_alpha(0)} Donner l'abscisse de ${noms[0]} en écriture décimale.<br>`
      texte += `${num_alpha(1)} Donner l'abscisse de ${noms[1]} comme la somme d'un entier et d'une fraction décimale.<br>`
      texte += `${num_alpha(2)} Donner l'abscisse de ${noms[2]} sous la forme d'une fraction décimale.<br>`
      texte_corr = `${num_alpha(0)} L'abscisse de ${noms[0]} est : $${tex_nombre(x1)}$.<br>`
      texte_corr += `${num_alpha(1)} L'abscisse de ${noms[1]} est : $${tex_nombre(Math.floor(x2))} + ${tex_fraction(calcul(1000 * (x2 - Math.floor(x2))), 1000)}$.<br>`
      texte_corr += `${num_alpha(2)} L'abscisse de ${noms[2]} est : $${tex_fraction(calcul(x3 * 1000), 1000)}$.`

    }
    texte += mathalea2d({ xmin: -1.5, xmax: 35, ymin: -1.5, ymax: 1.5, pixelsParCm: 25, scale: 0.5 }, d1)
    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu_sans_numero(this);
  };
  this.besoin_formulaire_numerique = ['Niveau de difficulté', 3, '1 : Au dixième\n2 : Au centième\n3 : Au millième'];
}


