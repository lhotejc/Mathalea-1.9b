import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Un nombre est-il divisible par 2, 3, 5, 9 ?
 *
 *
 * @Auteur Rémi Angot
 * 6N43-2
 */
export default function Tableau_criteres_de_divisibilite() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 4; // Correspond au facteur commun
  this.titre = "Critères de divisibilité";
  this.consigne =
    "Compléter le tableau en mettant oui ou non dans chaque case.";
  this.spacing = 1;
  this.spacing_corr = 1;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let liste_des_nombres_possibles = [
      "div2",
      "div3",
      "div39",
      "div5",
      "div25",
      "div23",
      "div239",
      "div35",
      "div2359",
      "divrien",
    ];
    // divisible par 2, divisible par 3, divisible par 3 et 9...

    let liste_des_types_de_nombres = combinaison_listes(
      liste_des_nombres_possibles,
      this.nb_questions
    );
    let tableau_de_nombres = [];
    let tableau_de_nombres_avec_correction = [];
    let liste_de_facteurs = [
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
      101,
      103,
      107,
      109,
      113,
      127,
      131,
      137,
      139,
      149,
      151,
      157,
      163,
      167,
      173,
      179,
      181,
      191,
      193,
      197,
      199,
      211,
      223,
      227,
      229,
      233,
      239,
      241,
      251,
      257,
      263,
      269,
      271,
      277,
      281,
      283,
      293,
    ];
    for (let i = 0; i < this.nb_questions; i++) {
      switch (liste_des_types_de_nombres[i]) {
        case "div2":
          tableau_de_nombres[i] = 2 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} & \\text{non} \\\\`;
          break;
        case "div3":
          tableau_de_nombres[i] = 3 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} \\\\`;
          break;
        case "div39":
          tableau_de_nombres[i] = 9 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} \\\\`;
          break;
        case "div5":
          tableau_de_nombres[i] = 5 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} \\\\`;
          break;
        case "div25":
          tableau_de_nombres[i] = 10 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} \\\\`;
          break;
        case "div23":
          tableau_de_nombres[i] = 6 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} \\\\`;
          break;
        case "div239":
          tableau_de_nombres[i] = 18 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} \\\\`;
          break;
        case "div35":
          tableau_de_nombres[i] = 15 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} \\\\`;
          break;
        case "div2359":
          tableau_de_nombres[i] = 90 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} & \\text{non} \\\\`;
          break;
        case "divrien":
          tableau_de_nombres[i] = choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\text{non} & \\text{non} & \\text{non} \\\\`;
          break;
      }
    }

    if (sortie_html) {
      texte = `$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|}\n`;
    } else {
      texte = `$\\begin{array}{|l|c|c|c|c|}\n`;
    }

    texte += `\\hline\n`;
    texte += `\\text{... est divisible} & \\text{par }2 & \\text{par }3 & \\text{par }5 & \\text{par }9\\\\\n`;
    texte += `\\hline\n`;
    for (var i = 0; i < this.nb_questions; i++) {
      texte += `${tex_nombre(tableau_de_nombres[i])} & & & & \\\\\n`;
      texte += `\\hline\n`;
    }

    texte += `\\end{array}\n$`;

    if (sortie_html) {
      texte_corr = `$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|}\n`;
    } else {
      texte_corr = `$\\begin{array}{|l|c|c|c|c|}\n`;
    }
    texte_corr += `\\hline\n`;
    texte_corr += `\\text{... est divisible} & \\text{par }2 & \\text{par }3 & \\text{par }5 & \\text{par }9\\\\\n`;
    texte_corr += `\\hline\n`;
    for (var i = 0; i < this.nb_questions; i++) {
      texte_corr += tableau_de_nombres_avec_correction[i];
      texte_corr += `\\hline\n`;
    }

    texte_corr += `\\end{array}$\n`;

    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu_sans_numero(this);
  };
}

