import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/** 
 * * Trouver l'erreur dans une equation
 * * 4L15-0
 * @author Sébastien Lozano
 */
export default function Trouver_erreur_resol_eq_deg1() {
  'use strict';
  Exercice.call(this); // Héritage de la classe Exercice()
  this.debug = false;
  this.sup = 1;
  if (this.debug) {
    this.nb_questions = 5;
  } else {
    this.nb_questions = 3;
  };

  this.titre = "Trouver l'erreur dans une résolution d'équation du premier degré";
  this.consigne = "Trouver l'erreur dans les résolutions suivantes.<br>On ne demande pas de résoudre l'équation.";

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;
  sortie_html ? this.spacing = 2.5 : this.spacing = 1.5;
  sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.debug) {
      type_de_questions_disponibles = [1, 2, 3, 4, 5];
    } else {
      type_de_questions_disponibles = shuffle([choice([1, 3]), choice([2, 4]), 5]);

    };

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    //type_de_questions_disponibles=[1];			

    //let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
      //on choisit un nom pour l'inconnue
      let variables = ['x', 't', 'u', 'v', 'w', 'y', 'z'];
      let inc = variables[randint(0, variables.length - 1)];

      // on choisit les paramètres
      let a = randint(-9, 9, [-1, 0, 1]);
      let b = randint(-9, 9, [-1, 0, 1]);
      let c = randint(-9, 9, [-1, 0, 1, a, -a]);
      let d = randint(-9, 9, [-1, 0, 1]);

      // une fonction pour gérer le signe
      function signeDansEq(nb) {
        if (nb > 0) {
          return { signe: `+`, operation: `soustraire`, chgt_signe: nb };
        } else {
          return { signe: ``, operation: `ajouter`, chgt_signe: nb * (-1) };
        };
      };

      // une fonction pour gérer le genre du prénom et le pronom associé
      function genreEtPrenom() {
        let n = randint(0, 1);
        if (n == 0) {
          return { prenom: prenomM(), pronom: `il` };
        } else {
          return { prenom: prenomF(), pronom: `elle` };
        };
      };

      // deux fonctionx pour conditionner la simplification d'une fraction
      function isSimp(n, d) {
        if (fraction_simplifiee(n, d)[0] != n) {
          return true;
        } else {
          return false;
        };
      };

      function simpFrac(n, d) {
        if (isSimp(n, d)) {
          if (fraction_simplifiee(n, d)[1] == 1) {
            return `$= ${fraction_simplifiee(n, d)[0]}$`;
          } else if (fraction_simplifiee(n, d)[0] == 0) {
            return `$ = 0`;
          } else {
            return `$= \\dfrac{${fraction_simplifiee(n, d)[0]}}{${fraction_simplifiee(n, d)[1]}}$`;
          };
        } else {
          if (fraction_simplifiee(n, d)[1] == 1) {
            return `$= ${fraction_simplifiee(n, d)[0]}$`;
          } else if (fraction_simplifiee(n, d)[0] == 0) {
            return `$ = 0$`;
          } else {
            return ` `;
          };
        }
      };


      let currentGenreEtPrenom = genreEtPrenom();



      // pour les situations
      let situations = [
        {//case 1 --> ax+b=d+cx  erreur à l'étape 1 on passe cx de l'autre côté
          pronom: currentGenreEtPrenom.pronom,
          prenom: currentGenreEtPrenom.prenom,
          a: a,
          b: b,
          c: c,
          d: d,
          inc: inc,
          eq: `$${a}${inc} ${signeDansEq(b).signe} ${b} = ${d} ${signeDansEq(c).signe} ${c}${inc}$`,
          et1: `${texte_gras(`Étape 1 :`)} $${a}${inc} ${signeDansEq(c).signe} ${c}${inc} ${signeDansEq(b).signe} ${b} = ${d} $`,// l'erreur est là, on passe de l'autre côté d'où l'oubli du chgt de signe
          et2: `${texte_gras(`Étape 2 :`)} $${a}${inc} ${signeDansEq(c).signe} ${c}${inc} = ${d} ${signeDansEq(-b).signe} ${-b} $`,
          et3: `${texte_gras(`Étape 3 :`)} $${a + c}${inc} = ${d} ${signeDansEq(-b).signe} ${-b} $`,
          et4: `${texte_gras(`Étape 4 :`)} $${inc} = \\dfrac{${d} ${signeDansEq(-b).signe} ${-b}}{${a + c}} $`,
          et_fin: `${texte_gras(`Étape 5 :`)} $${inc} = \\dfrac{${d - b}}{${a + c}}$ ${simpFrac(d - b, a + c)}`,
          err: `
            L'erreur se situe à l'étape 1.
            <br>${currentGenreEtPrenom.prenom} "a fait passer" le terme $${signeDansEq(c).signe} ${c}${inc}$ "de l'autre côté"
            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.
            <br>Ici il faut ${signeDansEq(c).operation} $${signeDansEq(c).chgt_signe}${inc}$ aux deux membres.            
            `,
          eq_corr: `${texte_gras(`Équation d'origine : `)} $${a}${inc} ${signeDansEq(b).signe} ${b} = ${d} ${signeDansEq(c).signe} ${c}${inc}$`,
          eq_corr_et1: `
          ${texte_gras(`Étape 1 : `)} $${mise_en_evidence(signeDansEq(c).operation)}$ $${mise_en_evidence(signeDansEq(c).chgt_signe)}$${texte_en_couleur(`$${inc}$`)} aux deux membres. 
          <br> $${a}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)} $${signeDansEq(b).signe} ${b} = ${d} ${signeDansEq(c).signe} ${c}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)} 
          <br>${texte_gras(`Étape 2 : `)} On réduit.
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} = ${d}$
          `,// l'erreur est là, on passe de l'autre côté d'où l'oubli du chgt de signe
          eq_corr_et2: `
          ${texte_gras(`Étape 3 :`)} $${mise_en_evidence(signeDansEq(b).operation)}$ $${mise_en_evidence(signeDansEq(b).chgt_signe)}$ aux deux membres. 
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)} = ${d} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)}$
          <br>${texte_gras(`Étape 4 : `)} Réduction à nouveau.
          <br> $${a - c}${inc} = ${d - b}$
          `,
          eq_corr_et3: `
          ${texte_gras(`Étape 5 :`)} $${mise_en_evidence(`\\textbf{diviser par}`)}$ $${mise_en_evidence(a - c)}$ les deux membres.
          <br> $\\dfrac{${a - c}${inc}}{${mise_en_evidence(a - c)}} = \\dfrac{${d - b}}{${mise_en_evidence(a - c)}}$
          <br>$${inc} = \\dfrac{${d - b}}{${a - c}}$ ${simpFrac(d - b, a - c)}
          `,
        },
        {//case 2 --> ax+b=d+cx  erreur à l'étape 2 on passe b de l'autre côté
          pronom: currentGenreEtPrenom.pronom,
          prenom: currentGenreEtPrenom.prenom,
          a: a,
          b: b,
          c: c,
          d: d,
          inc: inc,
          eq: `$${a}${inc} ${signeDansEq(b).signe} ${b} = ${d} ${signeDansEq(c).signe} ${c}${inc}$`,
          et1: `${texte_gras(`Étape 1 :`)} $${a}${inc} ${signeDansEq(-c).signe} ${-c}${inc} ${signeDansEq(b).signe} ${b} = ${d}$`,
          et2: `${texte_gras(`Étape 2 :`)} $${a}${inc} ${signeDansEq(-c).signe} ${-c}${inc} = ${d} ${signeDansEq(b).signe} ${b}$`,// l'erreur est là on passe de l'autre côté
          et3: `${texte_gras(`Étape 3 :`)} $${a - c}${inc} = ${d} ${signeDansEq(b).signe} ${b}$`,
          et4: `${texte_gras(`Étape 4 :`)} $${inc} = \\dfrac{${d} ${signeDansEq(b).signe} ${b}}{${a - c}} $`,
          et_fin: `${texte_gras(`Étape 5 :`)} $${inc} = \\dfrac{${d + b}}{${a - c}}$ ${simpFrac(d + b, a - c)}`,
          err: `
            L'erreur se situe à l'étape 2.
            <br>${currentGenreEtPrenom.prenom} "a fait passer" le terme $${signeDansEq(b).signe} ${b}$ "de l'autre côté"
            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.
            <br>Ici il faut ${signeDansEq(b).operation} $${signeDansEq(b).chgt_signe}$ aux deux membres.            
            `,
          eq_corr: `${texte_gras(`Équation d'origine : `)} $${a}${inc} ${signeDansEq(b).signe} ${b} = ${d} ${signeDansEq(c).signe} ${c}${inc}$`,
          eq_corr_et1: `
          ${texte_gras(`Étape 1 :`)} $${mise_en_evidence(signeDansEq(c).operation)}$ $${mise_en_evidence(signeDansEq(c).chgt_signe)}$${texte_en_couleur(`$${inc}$`)} aux deux membres 
          <br> $${a}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)} $ ${signeDansEq(b).signe} ${b} = ${d} ${signeDansEq(c).signe} ${c}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)} 
          <br>${texte_gras(`Étape 2 : `)} On réduit.
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} = ${d}$
          `,// l'erreur est là, on passe de l'autre côté d'où l'oubli du chgt de signe
          eq_corr_et2: `
          ${texte_gras(`Étape 3 :`)} $${mise_en_evidence(signeDansEq(b).operation)}$ $${mise_en_evidence(signeDansEq(b).chgt_signe)}$ aux deux membres 
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)} = ${d} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)}$
          <br>${texte_gras(`Étape 4 : `)} Réduction à nouveau.
          <br> $${a - c}${inc} = ${d - b}$
          `,
          eq_corr_et3: `
          ${texte_gras(`Étape 5 :`)} $${mise_en_evidence(`\\textbf{diviser par}`)}$ $${mise_en_evidence(a - c)}$ les deux membres
          <br> $\\dfrac{${a - c}${inc}}{${mise_en_evidence(a - c)}} = \\dfrac{${d - b}}{${mise_en_evidence(a - c)}}$
          <br>$${inc} = \\dfrac{${d - b}}{${a - c}}$ ${simpFrac(d - b, a - c)}
          `,
        },
        {//case 3 --> ax+b=cx+d  erreur à l'étape 2 on passe cx de l'autre côté
          pronom: currentGenreEtPrenom.pronom,
          prenom: currentGenreEtPrenom.prenom,
          a: a,
          b: b,
          c: c,
          d: d,
          inc: inc,
          eq: `$${a}${inc} ${signeDansEq(b).signe} ${b} = ${c}${inc} ${signeDansEq(d).signe} ${d} $`,
          et1: `${texte_gras(`Étape 1 :`)} $${a}${inc} = ${c}${inc} ${signeDansEq(d).signe} ${d} ${signeDansEq(-b).signe} ${-b}$`,
          et2: `${texte_gras(`Étape 2 :`)} $${a}${inc} ${signeDansEq(c).signe} ${c}${inc} = ${d} ${signeDansEq(-b).signe} ${-b}$`,// l'erreur est là on passe de l'autre côté
          et3: `${texte_gras(`Étape 3 :`)} $${a + c}${inc} = ${d} ${signeDansEq(-b).signe} ${-b}$`,
          et4: `${texte_gras(`Étape 4 :`)} $${inc} = \\dfrac{${d} ${signeDansEq(-b).signe} ${-b}}{${a + c}} $`,
          et_fin: `${texte_gras(`Étape 5 :`)} $${inc} = \\dfrac{${d - b}}{${a + c}}$ ${simpFrac(d - b, a + c)}`,
          err: `
            L'erreur se situe à l'étape 2.
            <br>${currentGenreEtPrenom.prenom} "a fait passer" le terme $${signeDansEq(c).signe} ${c}${inc}$ "de l'autre côté"
            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.
            <br>Ici il faut ${signeDansEq(c).operation} $${signeDansEq(c).chgt_signe}${inc}$ aux deux membres.            
            `,
          eq_corr: `${texte_gras(`Équation d'origine : `)} $${a}${inc} ${signeDansEq(b).signe} ${b} = ${c}${inc} ${signeDansEq(d).signe} ${d} $`,
          eq_corr_et1: `
          ${texte_gras(`Étape 1 :`)} $${mise_en_evidence(signeDansEq(c).operation)}$ $${mise_en_evidence(signeDansEq(c).chgt_signe)}$${texte_en_couleur(`$${inc}$`)} aux deux membres 
          <br> $${a}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)} $${signeDansEq(b).signe} ${b} = ${d} ${signeDansEq(c).signe} ${c}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)}
          <br>${texte_gras(`Étape 2 : `)} On réduit.
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} = ${d}$
          `,// l'erreur est là, on passe de l'autre côté d'où l'oubli du chgt de signe
          eq_corr_et2: `
          ${texte_gras(`Étape 3 :`)} $${mise_en_evidence(signeDansEq(b).operation)}$ $${mise_en_evidence(signeDansEq(b).chgt_signe)}$ aux deux membres 
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)} = ${d} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)}$
          <br>${texte_gras(`Étape 4 : `)} Réduction à nouveau.
          <br> $${a - c}${inc} = ${d - b}$
          `,
          eq_corr_et3: `
          ${texte_gras(`Étape 5 :`)} $${mise_en_evidence(`\\textbf{diviser par}`)}$ $${mise_en_evidence(a - c)}$ les deux membres
          <br> $\\dfrac{${a - c}${inc}}{${mise_en_evidence(a - c)}} = \\dfrac{${d - b}}{${mise_en_evidence(a - c)}}$
          <br>$${inc} = \\dfrac{${d - b}}{${a - c}}$ ${simpFrac(d - b, a - c)}
          `,
        },
        {//case 4 --> ax+b=cx+d  erreur à l'étape 1 on passe b de l'autre côté
          pronom: currentGenreEtPrenom.pronom,
          prenom: currentGenreEtPrenom.prenom,
          a: a,
          b: b,
          c: c,
          d: d,
          inc: inc,
          eq: `$${a}${inc} ${signeDansEq(b).signe} ${b} = ${c}${inc} ${signeDansEq(d).signe} ${d} $`,
          et1: `${texte_gras(`Étape 1 :`)} $${a}${inc} = ${c}${inc} ${signeDansEq(d).signe} ${d} ${signeDansEq(b).signe} ${b}$`,// l'erreur est là on passe de l'autre côté
          et2: `${texte_gras(`Étape 2 :`)} $${a}${inc} ${signeDansEq(-c).signe} ${-c}${inc} = ${d} ${signeDansEq(b).signe} ${b}$`,
          et3: `${texte_gras(`Étape 3 :`)} $${a - c}${inc} = ${d} ${signeDansEq(b).signe} ${b}$`,
          et4: `${texte_gras(`Étape 4 :`)} $${inc} = \\dfrac{${d} ${signeDansEq(b).signe} ${b}}{${a - c}} $`,
          et_fin: `${texte_gras(`Étape 5 :`)} $${inc} = \\dfrac{${d + b}}{${a - c}}$ ${simpFrac(d + b, a - c)}`,
          err: `
            L'erreur se situe à l'étape 1.
            <br>${currentGenreEtPrenom.prenom} "a fait passer" le terme $${signeDansEq(b).signe} ${b}$ "de l'autre côté"
            or pour obtenir une équation équivalente, il s'agit d'opérer de la même manière sur les deux membres de l'équation.
            <br>Ici il faut ${signeDansEq(b).operation} $${signeDansEq(b).chgt_signe}$ aux deux membres.            
            `,
          eq_corr: `${texte_gras(`Équation d'origine : `)} $${a}${inc} ${signeDansEq(b).signe} ${b} = ${c}${inc} ${signeDansEq(d).signe} ${d} $`,
          eq_corr_et1: `
          ${texte_gras(`Étape 1 :`)} $${mise_en_evidence(signeDansEq(c).operation)}$ $${mise_en_evidence(signeDansEq(c).chgt_signe)}$${texte_en_couleur(`$${inc}$`)} aux deux membres 
          <br> $${a}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)} $${signeDansEq(b).signe} ${b} = ${d} ${signeDansEq(c).signe} ${c}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)}
          <br>${texte_gras(`Étape 2 : `)} On réduit.
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} = ${d}$
          `,// l'erreur est là, on passe de l'autre côté d'où l'oubli du chgt de signe
          eq_corr_et2: `
          ${texte_gras(`Étape 3 :`)} $${mise_en_evidence(signeDansEq(b).operation)}$ $${mise_en_evidence(signeDansEq(b).chgt_signe)}$ aux deux membres 
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)} = ${d} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)}$
          <br>${texte_gras(`Étape 4 : `)} Réduction à nouveau.
          <br> $${a - c}${inc} = ${d - b}$
          `,
          eq_corr_et3: `
          ${texte_gras(`Étape 5 :`)} $${mise_en_evidence(`\\textbf{diviser par}`)}$ $${mise_en_evidence(a - c)}$ les deux membres
          <br> $\\dfrac{${a - c}${inc}}{${mise_en_evidence(a - c)}} = \\dfrac{${d - b}}{${mise_en_evidence(a - c)}}$
          <br>$${inc} = \\dfrac{${d - b}}{${a - c}}$ ${simpFrac(d - b, a - c)}
          `,
        },
        {//case 5 --> ax+b=cx+d  erreur à l'étape 4 on soustrait au lieu de diviser
          pronom: currentGenreEtPrenom.pronom,
          prenom: currentGenreEtPrenom.prenom,
          a: a,
          b: b,
          c: c,
          d: d,
          inc: inc,
          eq: `$${a}${inc} ${signeDansEq(b).signe} ${b} = ${c}${inc} ${signeDansEq(d).signe} ${d} $`,
          et1: `${texte_gras(`Étape 1 :`)} $${a}${inc} = ${c}${inc} ${signeDansEq(d).signe} ${d} ${signeDansEq(-b).signe} ${-b}$`,
          et2: `${texte_gras(`Étape 2 :`)} $${a}${inc} ${signeDansEq(-c).signe} ${-c}${inc} = ${d} ${signeDansEq(-b).signe} ${-b}$`,
          et3: `${texte_gras(`Étape 3 :`)} $${a - c}${inc} = ${d} ${signeDansEq(-b).signe} ${-b}$`,
          et4: `${texte_gras(`Étape 4 :`)} $${inc} = ${d} ${signeDansEq(-b).signe} ${-b} - ${ecriture_parenthese_si_negatif(a - c)} $`,
          et_fin: `${texte_gras(`Étape 5 :`)} $${inc} = ${d - b - a + c}$`,
          err: `
            L'erreur se situe à l'étape 4.
            <br>${currentGenreEtPrenom.prenom} soustrait le coefficient de ${inc} au lieu de diviser par ce coefficient.
            <br>Or $${a - c}${inc}$ représente la multiplication $${a - c}\\times ${inc}$, et l'opération inverse de la multiplication c'est la division et non la soustraction.
            <br>Ici il faut diviser les deux membres par $${a - c}$.            
            `,
          eq_corr: `${texte_gras(`Équation d'origine : `)} $${a}${inc} ${signeDansEq(b).signe} ${b} = ${c}${inc} ${signeDansEq(d).signe} ${d} $`,
          eq_corr_et1: `
          ${texte_gras(`Étape 1 :`)} $${mise_en_evidence(signeDansEq(c).operation)}$ $${mise_en_evidence(signeDansEq(c).chgt_signe)}$${texte_en_couleur(`$${inc}$`)} aux deux membres 
          <br> $${a}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)} $${signeDansEq(b).signe} ${b} = ${d} ${signeDansEq(c).signe} ${c}${inc} ${mise_en_evidence(signeDansEq(-c).signe)} ${mise_en_evidence(-c)}$${texte_en_couleur(`$${inc}$`)}
          <br>${texte_gras(`Étape 2 : `)} On réduit.
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} = ${d}$
          `,// l'erreur est là, on passe de l'autre côté d'où l'oubli du chgt de signe
          eq_corr_et2: `
          ${texte_gras(`Étape 3 :`)} $${mise_en_evidence(signeDansEq(b).operation)}$ $${mise_en_evidence(signeDansEq(b).chgt_signe)}$ aux deux membres 
          <br> $${a - c}${inc} ${signeDansEq(b).signe} ${b} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)} = ${d} ${mise_en_evidence(signeDansEq(-b).signe)} ${mise_en_evidence(-b)}$
          <br>${texte_gras(`Étape 4 : `)} Réduction à nouveau.
          <br> $${a - c}${inc} = ${d - b}$
          `,
          eq_corr_et3: `
          ${texte_gras(`Étape 5 :`)} $${mise_en_evidence(`\\textbf{diviser par}`)}$ $${mise_en_evidence(a - c)}$ les deux membres
          <br> $\\dfrac{${a - c}${inc}}{${mise_en_evidence(a - c)}} = \\dfrac{${d - b}}{${mise_en_evidence(a - c)}}$
          <br>$${inc} = \\dfrac{${d - b}}{${a - c}}$ ${simpFrac(d - b, a - c)}
          `,
        },

      ];



      let enonces = [];
      for (let k = 0; k < 5; k++) {
        enonces.push({
          enonce: `
          ${situations[k].prenom} doit résoudre l'équation suivante : ${situations[k].eq}.
          <br> Voilà ce qu'${situations[k].pronom} écrit :
          <br>${situations[k].et1}
          <br>${situations[k].et2}
          <br>${situations[k].et3}
          <br>${situations[k].et4}
          <br>${situations[k].et_fin}
        `,
          question: ``,
          correction: `
        ${situations[k].err}
        <br>
        ${texte_gras(`=== Voici une proposition de résolution détaillée : ===`)}         
        <br>${situations[k].eq_corr}
        <br>${situations[k].eq_corr_et1}
        <br>${situations[k].eq_corr_et2}
        <br>${situations[k].eq_corr_et3}
        `
        });
      };

      switch (liste_type_de_questions[i]) {
        case 1:
          texte = `${enonces[0].enonce}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
            texte += `
             `
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[0].correction}`;
          };
          break;
        case 2:
          texte = `${enonces[1].enonce}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[1].correction}`;
          };
          break;
        case 3:
          texte = `${enonces[2].enonce}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[2].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[2].correction}`;
          };
          break;
        case 4:
          texte = `${enonces[3].enonce}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[3].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[3].correction}`;
          };
          break;
        case 5:
          texte = `${enonces[4].enonce}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[4].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[4].correction}`;
          };
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
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
  //this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
}

