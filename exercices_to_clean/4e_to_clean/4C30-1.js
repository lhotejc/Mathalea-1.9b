import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Encadrer par des puissances de 10
 * 4C30-1
 * @author Sébastien Lozano
 */
export default function Puissances_encadrement() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 4;
  this.nb_questions = 6;
  this.titre = `Encadrer avec des puissances de 10`;

  this.consigne = `Encadrer les nombres suivants par deux puissances de 10 d'exposants consécutifs.`;

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.sup = Number(this.sup); // attention le formulaire renvoie un string, on a besoin d'un number pour le switch !

    switch (this.sup) {
      case 1: // nombre enier positif
        type_de_questions_disponibles = [1, 2, 3, 4, 5, 6];
        //this.nb_questions = type_de_questions_disponibles.length;
        //this.nb_questions = 3;
        break;
      case 2: // nombre décimal positif
        type_de_questions_disponibles = [7, 8, 9, 10];
        //this.nb_questions = type_de_questions_disponibles.length;
        //this.nb_questions = 3;
        break;
      case 3: // nombre décimal positif inférieur à 1
        type_de_questions_disponibles = [11, 12, 13, 14];
        //this.nb_questions = type_de_questions_disponibles.length;
        //this.nb_questions = 3;
        break;
      case 4: // Mélange
        type_de_questions_disponibles = [
          choice([1, 2, 3]),
          choice([4, 5, 6]),
          choice([7, 8]),
          choice([9, 10]),
          choice([11, 12]),
          choice([13, 14]),
        ];
        //this.nb_questions = type_de_questions_disponibles.length;
        break;
    }

    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    // let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      // nombre entier positif, entre 1 et 10, puis 10 et 100 puis ....100 000 et 1 000 000
      let ent_pos = [];
      for (let i = 0; i < 6; i++) {
        ent_pos.push({
          val: `$${tex_nombre(calcul(randint(10 ** i + 1, 10 ** (i + 1))))}$`,
          puissance_inf: `$10^{${i}}$`,
          puissance_sup: `$10^{${i + 1}}$`,
          puissance_inf_num: `$${tex_nombre(calcul(10 ** i))}$`,
          puissance_sup_num: `$${tex_nombre(calcul(10 ** (i + 1)))}$`,
        });
      }

      // nombre décimal positif 1 et 10 000 avec 1,2,3 puis 4 décimales
      let dec_pos = [];
      for (let i = 0; i < 4; i++) {
        dec_pos.push({
          val: `$${tex_nombre(calcul(randint(10000, 100000) / 10 ** (4 - i)))}$`,
          puissance_inf: `$10^{${i}}$`,
          puissance_sup: `$10^{${i + 1}}$`,
          puissance_inf_num: `$${tex_nombre(calcul(10 ** i))}$`,
          puissance_sup_num: `$${tex_nombre(calcul(10 ** (i + 1)))}$`,
        });
      }
      // nombre décimal positif inférieur à 1, entre 0,1 et 1 puis entre 0,01 et 0,1 puis 0,001 et 0,0001
      let dec_pos_inf_un = [];
      for (let i = 0; i < 4; i++) {
        dec_pos_inf_un.push({
          val: `$${tex_nombre(calcul(randint(10 ** (4 - i - 1) + 1, 10 ** (4 - i)) / 10000))}$`,
          puissance_inf: `$10^{${-(i + 1)}}$`,
          puissance_sup: `$10^{${-i}}$`,
          puissance_inf_num: `$${tex_nombre(calcul(10 ** -(i + 1)))}$`,
          puissance_sup_num: `$${tex_nombre(calcul(10 ** -i))}$`,
        });
      }

      switch (liste_type_de_questions[i]) {
        case 1: // nombre enier positif
          texte = `${ent_pos[0].val}`;
          texte_corr = `${ent_pos[0].puissance_inf} $\\leqslant$ ${ent_pos[0].val} $\\leqslant$ ${ent_pos[0].puissance_sup}`;
          texte_corr += ` car ${ent_pos[0].puissance_inf} = ${ent_pos[0].puissance_inf_num} et ${ent_pos[0].puissance_sup} = ${ent_pos[0].puissance_sup_num}`;
          break;
        case 2: // nombre enier positif
          texte = `${ent_pos[1].val}`;
          texte_corr = `${ent_pos[1].puissance_inf} $\\leqslant$ ${ent_pos[1].val} $\\leqslant$ ${ent_pos[1].puissance_sup}`;
          texte_corr += ` car ${ent_pos[1].puissance_inf} = ${ent_pos[1].puissance_inf_num} et ${ent_pos[1].puissance_sup} = ${ent_pos[1].puissance_sup_num}`;
          break;
        case 3: // nombre enier positif
          texte = `${ent_pos[2].val}`;
          texte_corr = `${ent_pos[2].puissance_inf} $\\leqslant$ ${ent_pos[2].val} $\\leqslant$ ${ent_pos[2].puissance_sup}`;
          texte_corr += ` car ${ent_pos[2].puissance_inf} = ${ent_pos[2].puissance_inf_num} et ${ent_pos[2].puissance_sup} = ${ent_pos[2].puissance_sup_num}`;
          break;
        case 4: // nombre enier positif
          texte = `${ent_pos[3].val}`;
          texte_corr = `${ent_pos[3].puissance_inf} $\\leqslant$ ${ent_pos[3].val} $\\leqslant$ ${ent_pos[3].puissance_sup}`;
          texte_corr += ` car ${ent_pos[3].puissance_inf} = ${ent_pos[3].puissance_inf_num} et ${ent_pos[3].puissance_sup} = ${ent_pos[3].puissance_sup_num}`;
          break;
        case 5: // nombre enier positif
          texte = `${ent_pos[4].val}`;
          texte_corr = `${ent_pos[4].puissance_inf} $\\leqslant$ ${ent_pos[4].val} $\\leqslant$ ${ent_pos[4].puissance_sup}`;
          texte_corr += ` car ${ent_pos[4].puissance_inf} = ${ent_pos[4].puissance_inf_num} et ${ent_pos[4].puissance_sup} = ${ent_pos[4].puissance_sup_num}`;
          break;
        case 6: // nombre enier positif
          texte = `${ent_pos[5].val}`;
          texte_corr = `${ent_pos[5].puissance_inf} $\\leqslant$ ${ent_pos[5].val} $\\leqslant$ ${ent_pos[5].puissance_sup}`;
          texte_corr += ` car ${ent_pos[5].puissance_inf} = ${ent_pos[5].puissance_inf_num} et ${ent_pos[5].puissance_sup} = ${ent_pos[5].puissance_sup_num}`;
          break;
        case 7: // nombre décimal positif
          texte = `${dec_pos[0].val}`;
          texte_corr = `${dec_pos[0].puissance_inf} $\\leqslant$ ${dec_pos[0].val} $\\leqslant$ ${dec_pos[0].puissance_sup}`;
          texte_corr += ` car ${dec_pos[0].puissance_inf} = ${dec_pos[0].puissance_inf_num} et ${dec_pos[0].puissance_sup} = ${dec_pos[0].puissance_sup_num}`;
          break;
        case 8: // nombre décimal positif
          texte = `${dec_pos[1].val}`;
          texte_corr = `${dec_pos[1].puissance_inf} $\\leqslant$ ${dec_pos[1].val} $\\leqslant$ ${dec_pos[1].puissance_sup}`;
          texte_corr += ` car ${dec_pos[1].puissance_inf} = ${dec_pos[1].puissance_inf_num} et ${dec_pos[1].puissance_sup} = ${dec_pos[1].puissance_sup_num}`;
          break;
        case 9: // nombre décimal positif
          texte = `${dec_pos[2].val}`;
          texte_corr = `${dec_pos[2].puissance_inf} $\\leqslant$ ${dec_pos[2].val} $\\leqslant$ ${dec_pos[2].puissance_sup}`;
          texte_corr += ` car ${dec_pos[2].puissance_inf} = ${dec_pos[2].puissance_inf_num} et ${dec_pos[2].puissance_sup} = ${dec_pos[2].puissance_sup_num}`;
          break;
        case 10: // nombre décimal positif
          texte = `${dec_pos[3].val}`;
          texte_corr = `${dec_pos[3].puissance_inf} $\\leqslant$ ${dec_pos[3].val} $\\leqslant$ ${dec_pos[3].puissance_sup}`;
          texte_corr += ` car ${dec_pos[3].puissance_inf} = ${dec_pos[3].puissance_inf_num} et ${dec_pos[3].puissance_sup} = ${dec_pos[3].puissance_sup_num}`;
          break;
        case 11: // nombre décimal positif inferieur à 1
          texte = `${dec_pos_inf_un[0].val}`;
          texte_corr = `${dec_pos_inf_un[0].puissance_inf} $\\leqslant$ ${dec_pos_inf_un[0].val} $\\leqslant$ ${dec_pos_inf_un[0].puissance_sup}`;
          texte_corr += ` car ${dec_pos_inf_un[0].puissance_inf} = ${dec_pos_inf_un[0].puissance_inf_num} et ${dec_pos_inf_un[0].puissance_sup} = ${dec_pos_inf_un[0].puissance_sup_num}`;
          break;
        case 12: // nombre décimal positif inferieur à 1
          texte = `${dec_pos_inf_un[1].val}`;
          texte_corr = `${dec_pos_inf_un[1].puissance_inf} $\\leqslant$ ${dec_pos_inf_un[1].val} $\\leqslant$ ${dec_pos_inf_un[1].puissance_sup}`;
          texte_corr += ` car ${dec_pos_inf_un[1].puissance_inf} = ${dec_pos_inf_un[1].puissance_inf_num} et ${dec_pos_inf_un[1].puissance_sup} = ${dec_pos_inf_un[1].puissance_sup_num}`;
          break;
        case 13: // nombre décimal positif inferieur à 1
          texte = `${dec_pos_inf_un[2].val}`;
          texte_corr = `${dec_pos_inf_un[2].puissance_inf} $\\leqslant$ ${dec_pos_inf_un[2].val} $\\leqslant$ ${dec_pos_inf_un[2].puissance_sup}`;
          texte_corr += ` car ${dec_pos_inf_un[2].puissance_inf} = ${dec_pos_inf_un[2].puissance_inf_num} et ${dec_pos_inf_un[2].puissance_sup} = ${dec_pos_inf_un[2].puissance_sup_num}`;
          break;
        case 14: // nombre décimal positif inferieur à 1
          texte = `${dec_pos_inf_un[3].val}`;
          texte_corr = `${dec_pos_inf_un[3].puissance_inf} $\\leqslant$ ${dec_pos_inf_un[3].val} $\\leqslant$ ${dec_pos_inf_un[3].puissance_sup}`;
          texte_corr += ` car ${dec_pos_inf_un[3].puissance_inf} = ${dec_pos_inf_un[3].puissance_inf_num} et ${dec_pos_inf_un[3].puissance_sup} = ${dec_pos_inf_un[3].puissance_sup_num}`;
          break;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : nombre entier positif\n2 : nombre décimal positif\n3 : nombre entier positif inférieur à un\n4 : Mélange",
  ];
}
