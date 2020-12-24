import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/** 
 * * Ordre de grandeur d'une opération entre décimaux
 * * 6N31-2
 * @author Sébastien Lozano
 */

export default function Ordre_de_grandeur_operations_decimaux() {
  'use strict';
  Exercice.call(this); // Héritage de la classe Exercice()
  this.beta = false;
  this.sup = 1;
  if (this.beta) {
    this.nb_questions = 1;
  } else {
    this.nb_questions = 1;
  };

  this.titre = "Ordre de grandeur et opérations sur les décimaux";
  this.consigne = `Pour chaque opération proposée dans la première colonne, cocher la case correspondant à l'ordre de grandeur du résultat.`;

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;
  sortie_html ? this.spacing = 2.5 : this.spacing = 1.5;
  sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.beta) {
      type_de_questions_disponibles = [0];
    } else {
      //type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);
      type_de_questions_disponibles = shuffle([0]);

    };

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    //let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {

      let ligne_entete = ['\\text{Opération}', `\\phantom{000}` + tex_nombre('1') + `\\phantom{000}`, `\\phantom{00}` + tex_nombre('10') + `\\phantom{00}`, `\\phantom{00}` + tex_nombre('100') + `\\phantom{00}`, `\\phantom{0}` + tex_nombre('1000') + `\\phantom{0}`, tex_nombre('10000'), tex_nombre('100000')];
      let ligne_entete_corr = ['\\text{Opération}', `\\phantom{000}` + tex_nombre('1') + `\\phantom{000}`, `\\phantom{00}` + tex_nombre('10') + `\\phantom{00}`, `\\phantom{00}` + tex_nombre('100') + `\\phantom{00}`, `\\phantom{0}` + tex_nombre('1000') + `\\phantom{0}`, tex_nombre('10000'), tex_nombre('100000')];

      let m = randint(1, 9, [4, 5, 6]),
        c = randint(1, 9),
        c1 = randint(1, 9),
        c2 = randint(1, 9),
        c3 = randint(1, 9, [4, 5, 6]),
        c4 = randint(1, 4),
        d = randint(1, 9),
        d1 = randint(1, 9),
        d2 = randint(1, 9),
        d3 = randint(1, 9),
        u = randint(1, 9),
        u1 = randint(1, 9),
        u2 = randint(1, 9),
        u3 = randint(1, 9);

      let cbis, d1bis;
      do {
        cbis = randint(2, 9);
        d1bis = randint(2, 9);
      } while (cbis * d1bis > 3 && cbis * d1bis < 7);

      let div_aleatoire_ope_3 = choice([10, 100]);
      let div_aleatoire_ope_5 = choice([1, 10, 100, 1000]);
      let mult_aleatoire_ope_4 = choice([0.1, 0.01, 0.001]);

      // une fonction pour ordre de grandeur en fonction de ... opération 1
      function myOrdreOpe1(c, d) {
        if (c * d >= 60) {
          return ['', '', '', '', '', mise_en_evidence(`X`)];
        } else {
          return ['', '', '', '', mise_en_evidence(`X`), ''];
        };
      };

      // une fonction pour ordre de grandeur en fonction de ... opération 2
      function myOrdreOpe2(c1, c2) {
        if (c1 + c2 / 10 >= 600) {
          return ['', '', '', mise_en_evidence(`X`), '', ''];
        } else {
          return ['', '', mise_en_evidence(`X`), '', '', ''];
        };
      };

      // une fonction pour ordre de grandeur en fonction de ... opération 3
      function myOrdreOpe3(n) {
        if (n >= 7) {
          return ['', '', '', mise_en_evidence(`X`), '', ''];
        } else {
          return ['', '', mise_en_evidence(`X`), '', '', ''];
        };
      };

      // une fonction pour ordre de grandeur en fonction de ... opération 4
      function myOrdreOpe4(d, n) {
        let sortie;
        switch (d) {
          case 0.1:
            if (n >= 7) {
              sortie = ['', '', '', mise_en_evidence(`X`), '', ''];
            } else {
              sortie = ['', '', mise_en_evidence(`X`), '', '', ''];
            };
            break;
          case 0.01:
            if (n >= 7) {
              sortie = ['', '', mise_en_evidence(`X`), '', '', ''];
            } else {
              sortie = ['', mise_en_evidence(`X`), '', '', '', ''];
            };
            break;
          case 0.001:
            if (n >= 7) {
              sortie = ['', mise_en_evidence(`X`), '', '', '', ''];
            } else {
              sortie = [mise_en_evidence(`X`), '', '', '', '', ''];
            };
            break;
        }
        return sortie;
      };

      // une fonction pour ordre de grandeur en fonction de ... opération 5
      function myOrdreOpe5(mult) {
        let sortie;
        switch (mult) {
          case 1:
            return sortie = ['', '', '', mise_en_evidence(`X`), '', ''];
            break;
          case 10:
            return sortie = ['', '', mise_en_evidence(`X`), '', '', ''];
            break;
          case 100:
            return sortie = ['', mise_en_evidence(`X`), '', '', '', ''];
            break;
          case 1000:
            return sortie = [mise_en_evidence(`X`), '', '', '', '', ''];
            break;
        };
        return sortie;
      };

      let situations = [
        {
          operation: `${cbis * 100 + d * 10 + u * 1}\\times ${d1bis * 10 + u1 * 1}`,
          operation_corr: `${cbis * 100 + d * 10 + u * 1}\\times ${d1bis * 10 + u1 * 1} \\simeq  ${(cbis * 100)}\\times ${(d1bis * 10)} \\text{ soit } ${tex_nombre((cbis * 100) * (d1bis * 10))}`,
          operation_coche: myOrdreOpe1(cbis, d1bis),
        },
        {
          operation: `${tex_nombre((c2 * 100 + d2 * 10 + u1 * 1) / 10)}+${c1 * 100 + d1 * 10 + u1 * 1}`,
          operation_corr: `${tex_nombre((c2 * 100 + d2 * 10 + u1 * 1) / 10)}+${c1 * 100 + d1 * 10 + u1 * 1} \\simeq ${c2 * 100 / 10}+${c1 * 100} \\text{ soit } ${c2 * 100 / 10 + c1 * 100}`,
          operation_coche: myOrdreOpe2(c1 * 100, c2 * 100),
        },
        {
          operation: `${c3 * 100 + d3 * 10 + u3 * 1}-${tex_nombre((c2 * 100 + d2 * 10 + u2 * 1) / div_aleatoire_ope_3)}`,
          operation_corr: `${c3 * 100 + d3 * 10 + u3 * 1}-${tex_nombre((c2 * 100 + d2 * 10 + u2 * 1) / div_aleatoire_ope_3)} \\simeq ${c3 * 100 + d3 * 10}-${tex_nombre((c2 * 100) / div_aleatoire_ope_3)} \\text{ soit } ${c3 * 100 + d3 * 10 - (c2 * 100) / div_aleatoire_ope_3}`,
          operation_coche: myOrdreOpe3(c3),
        },
        {
          operation: `${tex_nombre(m * 1000 + c3 * 100 + d2 * 10 + u1 * 1)}\\times ${tex_nombre(mult_aleatoire_ope_4)}`,
          operation_corr: `${tex_nombre(m * 1000 + c3 * 100 + d2 * 10 + u1 * 1)}\\times ${tex_nombre(mult_aleatoire_ope_4)} \\simeq ${tex_nombre(m * 1000)}\\times ${tex_nombre(mult_aleatoire_ope_4)} \\text{ soit } ${tex_nombre(m * 1000 * mult_aleatoire_ope_4)}`,
          operation_coche: myOrdreOpe4(mult_aleatoire_ope_4, m),
        },
        {
          operation: `${tex_nombre((m * 1000 + c4 * 100 + d3 * 10 + u * 1) / div_aleatoire_ope_5)}\\div ${m}`,
          operation_corr: `${tex_nombre((m * 1000 + c4 * 100 + d3 * 10 + u * 1) / div_aleatoire_ope_5)}\\div ${m} \\simeq ${tex_nombre((m * 1000) / div_aleatoire_ope_5)}\\div ${m} \\text{ soit } ${tex_nombre((m * 1000) / div_aleatoire_ope_5 / m)}`,
          operation_coche: myOrdreOpe5(div_aleatoire_ope_5),
        },

      ];

      situations = shuffle(situations);

      let enonces = [];
      for (let k = 0; k < 1; k++) {
        enonces.push({
          enonce: `
          ${tab_C_L(ligne_entete, [situations[0].operation, situations[1].operation, situations[2].operation, situations[3].operation, situations[4].operation],
            [
              '', '', '', '', '', '',
              '', '', '', '', '', '',
              '', '', '', '', '', '',
              '', '', '', '', '', '',
              '', '', '', '', '', '',
            ]
          )}
          `,
          question: ``,
          correction: `
          Commençons par calculer un ordre de grandeur du résultat de chaque opération dans la première colonne du tableau.
          <br>
          ${tab_C_L(ligne_entete_corr, [situations[0].operation_corr, situations[1].operation_corr, situations[2].operation_corr, situations[3].operation_corr, situations[4].operation_corr,],
            [
              situations[0].operation_coche[0], situations[0].operation_coche[1], situations[0].operation_coche[2], situations[0].operation_coche[3], situations[0].operation_coche[4], situations[0].operation_coche[5],
              situations[1].operation_coche[0], situations[1].operation_coche[1], situations[1].operation_coche[2], situations[1].operation_coche[3], situations[1].operation_coche[4], situations[1].operation_coche[5],
              situations[2].operation_coche[0], situations[2].operation_coche[1], situations[2].operation_coche[2], situations[2].operation_coche[3], situations[2].operation_coche[4], situations[2].operation_coche[5],
              situations[3].operation_coche[0], situations[3].operation_coche[1], situations[3].operation_coche[2], situations[3].operation_coche[3], situations[3].operation_coche[4], situations[3].operation_coche[5],
              situations[4].operation_coche[0], situations[4].operation_coche[1], situations[4].operation_coche[2], situations[4].operation_coche[3], situations[4].operation_coche[4], situations[4].operation_coche[5],
            ]
          )}				
          `
        });
      };

      // autant de case que d'elements dans le tableau des situations
      switch (liste_type_de_questions[i]) {
        case 0:
          texte = `${enonces[0].enonce}`;
          if (this.beta) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
            texte += `             `
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[0].correction}`;
          };
          break;
      };

      if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);

  }
};
