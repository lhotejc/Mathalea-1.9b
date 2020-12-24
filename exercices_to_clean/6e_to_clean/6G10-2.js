import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Exercice du test de positionnement 5e
 * Variantes à venir...
 * @Auteur Jean-Claude Lhote
 * Référence 6G10-2
 */
export default function Utiliser_le_codage_pour_decrire_6e() {
  Utiliser_le_codage_pour_decrire.call(this)
  this.classe = 6
}
// 5G30
function Utiliser_le_codage_pour_decrire_5e() {
  Utiliser_le_codage_pour_decrire.call(this)
  this.classe = 5
}
function Utiliser_le_codage_pour_decrire() {
  "use strict"
  Exercice.call(this);
  this.titre = "Utiliser le codage pour décrire une figure";
  this.nb_questions = 1;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 1;
  this.sup2 = 1;
  this.nouvelle_version = function (numero_de_l_exercice) {
    let type_de_questions_disponibles;
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let Xmin, Xmax, Ymin, Ymax, ppc = 20, sc, nom, sommets = [], params_enonce, params_correction, objets_enonce, objets_correction
    let A, B, C, D, E, F, s1, s2, s3, s4, s5, s6, s7, s8, medAC, medBC, dBD, dBC, dAC, dAF
    if (this.classe == 6) type_de_questions_disponibles = [1, 2, 3]
    else type_de_questions_disponibles = [1, 2, 3, 4]
    let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions)
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      objets_enonce = []
      objets_correction = []
      params_enonce = {}
      params_correction = {}
      nom = creerNomDePolygone(6, "PQ")
      for (let i = 0; i < 6; i++)
        sommets.push(nom[i])
      sommets = shuffle(sommets)

      A = point(0, 0, sommets[0], 'left')
      switch (liste_type_de_questions[i]) {
        case 1:
          C = pointAdistance(A, randint(5, 7), randint(-45, 45), sommets[2], 'right')
          s2 = segment(A, C)
          B = similitude(C, A, -85, randint(5, 7) / 10, sommets[1], 'below')
          s1 = segment(A, B)
          E = pointSurSegment(A, C, longueur(A, C) / 2.2, sommets[4], 'below')
          medBC = mediatrice(C, B)
          medAC = mediatrice(A, C)
          dBC = droite(C, B)
          dBD = rotation(dBC, B, randint(-40, -20))
          dAC = droite(A, C)
          dAF = rotation(dAC, A, randint(30, 40))
          D = pointIntersectionDD(dBD, medBC, sommets[3], 'below')
          D.x += randint(-2, 2, 0) / 5
          F = pointIntersectionDD(dAF, medAC, sommets[5], 'above')
          F.x += randint(-2, 2, 0) / 5
          s5 = segment(B, D)
          s6 = segment(C, D)
          s3 = segment(A, F)
          s7 = segment(C, F)
          s8 = segment(E, F)
          s4 = segment(B, C)
          params_enonce = { xmin: Math.min(A.x - 1, B.x - 1, C.x - 1, D.x - 1, E.x - 1, F.x - 1), ymin: Math.min(A.y - 1, B.y - 1, C.y - 1, D.y - 1, E.y - 1, F.y - 1), xmax: Math.max(A.x + 1, B.x + 1, C.x + 1, D.x + 1, E.x + 1, F.x + 1), ymax: Math.max(A.y + 1, B.y + 1, C.y + 1, D.y + 1, E.y + 1, F.y + 1.5), pixelsParCm: 30, scale: 1, mainlevee: true, amplitude: 1 }
          objets_enonce.push(s1, s2, s4, s8, s7, s3, s6, s5, codageAngleDroit(B, A, C), codeSegments('//', 'black', A, F, F, C), codeSegments('|||', 'black', A, E, E, C), codeSegments('O', 'black', B, D, D, C), labelPoint(A, B, C, D, E, F), codageAngleDroit(A, E, F))
          texte = `<br>À l'aide du schéma ci-dessous, déterminer :<br>`
          texte += `- deux segments de même longueur ;<br>`
          texte += `- le milieu d'un segment ;<br>`
          texte += `- un triangle rectangle ;<br>`
          texte += `- un triangle isocèle ;<br>`
          texte_corr = `- Deux segments de même mesure : [$${sommets[0] + sommets[4]}$] et $[${sommets[4] + sommets[2]}]$ ou $[${sommets[0] + sommets[5]}]$ et $[${sommets[5] + sommets[2]}]$`
          texte_corr += ` ou $[${sommets[1] + sommets[3]}]$ et $[${sommets[3] + sommets[2]}]$.<br>`
          texte_corr += `- $${sommets[4]}$ est le milieu du segment $[${sommets[0] + sommets[2]}]$.<br>`
          texte_corr += `- $${sommets[0] + sommets[1] + sommets[2]}$ est un triangle rectangle en $${sommets[0]}$, $${sommets[0] + sommets[4] + sommets[5]}$ est un triangle rectangle en $${sommets[4]}$ et $${sommets[2] + sommets[4] + sommets[5]}$ est un triangle rectangle en $${sommets[4]}$.<br>`
          texte_corr += `- $${sommets[0] + sommets[5] + sommets[2]}$ est un triangle isocèle en $${sommets[5]}$ et $${sommets[1] + sommets[3] + sommets[2]}$ est un triangle isocèle en $${sommets[3]}$.<br>`
          break
        case 2:
          B = pointAdistance(A, randint(5, 7), randint(-45, 45), sommets[1], 'above')
          C = similitude(A, B, randint(85, 90), 0.95, sommets[2], 'below')
          D = similitude(B, A, randint(-93, -87), 1, sommets[3], 'below')
          F = similitude(B, C, -55, 0.8, sommets[5], 'right')
          E = similitude(C, D, 57, randint(85, 115) / 100, sommets[4], 'right')
          s1 = segment(D, E)
          s2 = segment(C, E)
          s4 = segment(C, F)
          s5 = segment(B, F)
          s6 = polygone(A, B, C, D)
          params_correction = { xmin: Math.min(A.x - 1, B.x - 1, C.x - 1, D.x - 1, E.x - 1, F.x - 1), ymin: Math.min(A.y - 1, B.y - 1, C.y - 1, D.y - 1, E.y - 1, F.y - 1), xmax: Math.max(A.x + 1, B.x + 1, C.x + 1, D.x + 1, E.x + 1, F.x + 1), ymax: Math.max(A.y + 1, B.y + 1, C.y + 1, D.y + 1, E.y + 1, F.y + 1), pixelsParCm: 30, scale: 1, mainlevee: true, amplitude: 1 }
          objets_correction.push(labelPoint(A, B, C, D, E, F), s1, s2, s4, s5, s6)
          objets_correction.push(codageAngleDroit(D, A, B), codageAngleDroit(A, B, C), codageAngleDroit(B, C, D), codageAngleDroit(C, D, A))
          objets_correction.push(codeSegments('||', 'black', D, E, C, E), codeSegments('O', 'black', A, B, B, C, C, D, D, A), codeSegments('|||', 'black', F, C, B, F))
          texte = `$${sommets[0] + sommets[1] + sommets[2] + sommets[3]}$ est un carré et $${sommets[3] + sommets[2] + sommets[4]}$ est un triangle équilatéral ($${sommets[4]}$ est à l'intérieur du carré $${sommets[0] + sommets[1] + sommets[2] + sommets[3]}$).<br>`
          texte += ` $${sommets[1] + sommets[2] + sommets[5]}$ est un triangle isocèle en $${sommets[5]}$ ($${sommets[5]}$ est à l'extérieur du carré $${sommets[0] + sommets[1] + sommets[2] + sommets[3]}$).<br>`
          texte += `Représenter cette configuration par un schéma à main levée et ajouter les codages nécessaires.`
          texte_corr = `Voilà ci-dessous un schéma qui pourrait convenir à la situation.<br>`
          break
        case 3:
          B = pointAdistance(A, randint(5, 7), randint(-45, 45), sommets[1], 'above')
          C = similitude(A, B, randint(85, 90), 0.5, sommets[2], 'below')
          D = similitude(B, A, randint(-93, -87), 0.53, sommets[3], 'below')
          s1 = segment(D, B)
          s2 = segment(A, C)
          E = pointIntersectionDD(droite(A, C), droite(D, B), sommets[4], 'above')
          F = affiniteOrtho(E, droite(B, C), -1.1, sommets[5], 'right')
          s3 = polygone(A, B, C, D)
          s4 = segment(B, F)
          s5 = segment(C, F)
          params_correction = { xmin: Math.min(A.x - 1, B.x - 1, C.x - 1, D.x - 1, E.x - 1, F.x - 1), ymin: Math.min(A.y - 1, B.y - 1, C.y - 1, D.y - 1, E.y - 1, F.y - 1), xmax: Math.max(A.x + 1, B.x + 1, C.x + 1, D.x + 1, E.x + 1, F.x + 1), ymax: Math.max(A.y + 1, B.y + 1, C.y + 1, D.y + 1, E.y + 1, F.y + 1), pixelsParCm: 30, scale: 1, mainlevee: true, amplitude: 1 }
          objets_correction.push(labelPoint(A, B, C, D, E, F), s1, s2, s3, s4, s5)
          objets_correction.push(codageAngleDroit(D, A, B), codageAngleDroit(A, B, C), codageAngleDroit(B, C, D), codageAngleDroit(C, D, A))
          objets_correction.push(codeSegments('||', 'black', D, E, E, B, A, E, E, C, F, C, B, F), codeSegments('O', 'black', A, B, D, C), codeSegments('/', 'black', A, D, B, C))
          texte = `$${sommets[0] + sommets[1] + sommets[2] + sommets[3]}$ est un rectangle. Ses diagonales se coupent en $${sommets[4]}$.<br>`
          texte += `$${sommets[4] + sommets[1] + sommets[5] + sommets[2]}$ est un losange.<br>`
          texte += `Représenter cette configuration par un schéma à main levée et ajouter les codages nécssaires.`
          texte_corr = `Voilà ci-dessous un schéma qui pourrait convenir à la situation.<br>`
          break
        case 4:
          B = pointAdistance(A, randint(6, 7), randint(-30, 30), sommets[1], 'above right')
          F = similitude(A, B, randint(-70, -50), randint(80, 90) / 100, sommets[5], 'left')
          D = similitude(B, A, angleOriente(A, B, F) + randint(3, 5), randint(15, 20) / 10, sommets[3], 'below')
          C = translation2Points(point(B.x + 1, B.y + 1), A, D, sommets[2], 'below right')
          E = pointIntersectionDD(droite(A, C), droite(D, B), sommets[4], 'above right')
          s3 = polygone(A, B, C, D)
          s4 = segment(B, F)
          s5 = segment(A, F)
          s1 = segment(B, D)
          s2 = segment(A, C)
          params_enonce = { xmin: Math.min(A.x - 1, B.x - 1, C.x - 1, D.x - 1, E.x - 1, F.x - 1), ymin: Math.min(A.y - 1, B.y - 1, C.y - 1, D.y - 1, E.y - 1, F.y - 1), xmax: Math.max(A.x + 1, B.x + 1, C.x + 1, D.x + 1, E.x + 1, F.x + 1), ymax: Math.max(A.y + 1, B.y + 1, C.y + 1, D.y + 1, E.y + 1, F.y + 1), pixelsParCm: 30, scale: 1, mainlevee: true, amplitude: 0.8 }
          objets_enonce.push(labelPoint(A, B, C, D, E, F), s1, s2, s3, s4, s5)
          objets_enonce.push(codeAngle(D, A, B, 2, '|', 'red', 2), codeAngle(B, C, D, 2, '|', 'red', 2), codeAngle(A, B, F, 2, '|', 'red', 2))
          objets_enonce.push(codeAngle(A, B, C, 2, '||', 'blue', 2), codeAngle(A, D, C, 2, '||', 'blue', 2))
          objets_enonce.push(codeAngle(B, A, F, 2, '///', 'green', 3), codeAngle(B, F, A, 2, '///', 'green', 3))

          objets_enonce.push(codeSegments('||', 'black', B, E, E, D), codeSegments('O', 'black', A, E, E, C))
          texte = `$${sommets[0] + sommets[1] + sommets[2] + sommets[3]}$ est un rectangle. Ses diagonales se coupent en $${sommets[4]}$.<br>`
          texte += `$${sommets[4] + sommets[1] + sommets[5] + sommets[2]}$ est un losange.<br>`
          texte = `<br>À l'aide du schéma ci-dessous, déterminer :<br>`
          texte += `- la nature du triangle $${sommets[0] + sommets[1] + sommets[5]}$ ;<br>`
          texte += `- la nature du quadrilatère $${sommets[0] + sommets[1] + sommets[2] + sommets[3]}$ ;<br>`
          texte += `- la nature de l'angle $\\widehat{${sommets[5] + sommets[1] + sommets[2]}}$ ;<br>`
          texte_corr = `Le triangle $${sommets[0] + sommets[1] + sommets[5]}$ a deux angles de même mesure, c'est donc un triangle isocèle en $${sommets[1]}$.<br>`
          texte_corr += `Le quadrilatère  $${sommets[0] + sommets[1] + sommets[2] + sommets[3]}$ a des diagonales qui se coupent en leur milieu, c'est donc un parallélogramme.<br>`
          texte_corr += `Dans un parallélogramme, les angles consécutifs sont supplémentaires (leur somme vaut 180°).<br>`
          texte_corr += ` D'après le codage, l'angle $\\widehat{${sommets[2] + sommets[1] + sommets[5]}}$ est la somme de deux angles supplémentaires. C'est donc un angle plat.<br>`


          break
      }
      if (objets_enonce.length > 0) texte += mathalea2d(params_enonce, objets_enonce)
      if (objets_correction.length > 0) texte_corr += mathalea2d(params_correction, objets_correction)
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
}
