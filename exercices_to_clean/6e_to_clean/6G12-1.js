import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Fonction générale pour exercices de constructions de parallèles et perpendiculaires
 * références 6G11, 6G12 et 6G12-1
 * @Auteur Jean-Claude Lhote
 */
export default function Parallele_et_Perpendiculaires() {
  "use strict";
  Exercice.call(this);
  this.titre = "Tracer des parallèles et des perpendiculaires";
  this.nb_questions = 1;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 1;
  this.sup2 = 1;
  this.nouvelle_version = function (numero_de_l_exercice) {
    let type_de_questions_disponibles;
    type_de_questions_disponibles = [parseInt(this.sup)]; // Le choix 1 ou 2 ou 3 : 1=perpendiculaires, 2=parallèles, 3=des perpendiculaires et des paralèlles
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    );
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let Xmin, Xmax, Ymin, Ymax, ppc = 20, sc;

    let A,
      B,
      C,
      D,
      xE,
      E,
      F,
      CC,
      DD,
      EE,
      d,
      s1,
      s2,
      enonce,
      correction,
      dB,
      dC,
      dD,
      dE,
      g,
      lC,
      lD,
      lE,
      cB,
      cC,
      cD,
      cE,
      cF,
      cG,
      FF,
      BB,
      carreaux,
      k,
      objets_enonce = [],
      objets_correction = [],

      p;
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      objets_enonce.splice(0)
      objets_correction.splice(0)
      if (this.sup2 == 2)
        k = 0.8;
      else
        k = 0.5;
      switch (liste_type_de_questions[i]) {
        case 1:
          A = point(0, 0, "A", "above left");
          B = point(10, randint(-4, 4, [-1, 0, 1]), "B", "above right");
          d = droite(A, B);
          d.isVisible = true;
          C = point(randint(2, 3), randint(3, 4), "C", "above left");
          D = point(randint(7, 8), randint(-7, -6), "D");
          dB = droiteParPointEtPerpendiculaire(B, d);
          xE = 11;
          E = pointSurDroite(dB, 11, "E", "left");
          while (!Number.isInteger(E.y)) {
            xE++;
            E = pointSurDroite(dB, xE, "E", "left");
          }
          F = point(E.x, B.y);
          s1 = segment(B, F, "red");
          s1.epaisseur = 2;
          s1.pointilles = true;
          s2 = segment(F, E, "blue");
          s2.epaisseur = 2;
          s2.pointilles = true;
          dC = droiteParPointEtPerpendiculaire(C, d);
          dD = droiteParPointEtPerpendiculaire(D, d);
          BB = rotation(A, B, 90);
          CC = pointIntersectionDD(dC, d, "M", "below right");
          DD = pointIntersectionDD(dD, d, "N", "above left");
          lC = arrondi(longueur(CC, A) * k, 1);
          lD = arrondi(longueur(DD, A) * k, 1);
          cB = codageAngleDroit(A, B, BB);
          cC = codageAngleDroit(C, CC, B);
          cD = codageAngleDroit(D, DD, B);
          objets_correction.push(s1,
            s2,
            dC,
            dD,
            dB,
            cB,
            cC,
            cD,
            d,
            tracePoint(A, B, C, D, E, CC, DD),
            labelPoint(A, B, C, D, E, CC, DD),
            afficheCoteSegment(
              segment(A, CC),
              `${tex_nombre(lC)} cm`,
              0.5,
              "red",
              1,
              0.5,
              "red"
            ),
            afficheCoteSegment(
              segment(A, DD),
              `${tex_nombre(lD)} cm`,
              -0.5,
              "red",
              1,
              -0.5,
              "red"
            )
          );
          objets_enonce.push(
            tracePoint(A, B, C, D),
            labelPoint(A, B, C, D),
            d,
          );
          if (sortie_html) enonce = num_alpha(0) + ` Reproduire la figure ci-dessous.<br>`;
          else enonce = num_alpha(0) + ` Utiliser un crayon à papier afin de pouvoir gommer si besoin.<br>`;
          enonce +=
            num_alpha(1) +
            ` Tracer la droite perpendiculaire à $(AB)$ passant par $B$.<br>`;
          enonce +=
            num_alpha(2) +
            ` Tracer la droite perpendiculaire à $(AB)$ passant par $C$ et nommer $M$ le point d'intersection de cette droite avec la droite $(AB)$.<br>`;
          enonce +=
            num_alpha(3) +
            ` Tracer la droite perpendiculaire à $(AB)$ passant par $D$ et nommer $N$ le point d'intersection de cette droite avec la droite $(AB)$.<br>`;
          enonce +=
            num_alpha(4) +
            ` Mesurer ensuite les distances $AM$ et $AN$.<br> Pour l'auto-correction comparer ces mesures avec celles données dans la correction<br>`;
          correction = `<br>$AM \\approx ${tex_nombre(
            lC
          )}$ cm et $AN \\approx ${tex_nombre(lD)}$ cm.<br>`;
          correction += `Pour la perpendiculaire en $B$, contrôle la position du point $E$.<br>`;
          Xmin = Math.floor(Math.min(A.x, B.x, C.x, D.x, E.x, CC.x, DD.x) - 1)
          Xmax = Math.ceil(Math.max(A.x, B.x, C.x, D.x, E.x, CC.x, DD.x) + 1)
          Ymin = Math.floor(Math.min(A.y, B.y, C.y, D.y, E.y, CC.y, DD.y) - 1)
          Ymax = Math.ceil(Math.max(A.y, B.y, C.y, D.y, E.y, CC.y, DD.y) + 1)
          break;
        case 2:
          A = point(2, 0, "A", 'below left');
          B = point(12, randint(-4, 4, 0), "B");
          d = droite(A, B);
          d.isVisible = true;
          C = point(0, randint(3, 4), "C", 'above');
          D = point(randint(7, 8), randint(-7, -6), "D", 'below right');
          E = point(randint(4, 5), randint(5, 6), "E", 'below right');
          F = point(2, -3, "F", "left");

          dE = droiteParPointEtParallele(E, d);
          dC = droiteParPointEtParallele(C, d);
          dD = droiteParPointEtParallele(D, d);
          p = droite(A, F);
          p.isVisible = true;
          CC = pointIntersectionDD(dC, p, 'M', 'above left');
          DD = pointIntersectionDD(dD, p, 'N', 'above left');
          EE = pointIntersectionDD(dE, p, 'O', 'above left');
          lC = arrondi(longueur(CC, A) * k, 1);
          lD = arrondi(longueur(DD, A) * k, 1);
          lE = arrondi(longueur(EE, A) * k, 1);
          objets_correction.push(dC, dD, dE, d, p, tracePoint(A, B, C, D, E, F), labelPoint(A, B, C, D, E, F, CC, DD, EE), afficheCoteSegment(segment(A, CC), `${tex_nombre(lC)} cm`, .2, 'red', 1, 0.5, 'red'), afficheCoteSegment(segment(DD, A), `${tex_nombre(lD)} cm`, -0.2, 'green', 1, -0.5, 'green'), afficheCoteSegment(segment(A, EE), `${tex_nombre(lE)} cm`, -0.2, 'blue', 1, -0.5, 'blue'))
          objets_enonce.push(tracePoint(A, B, C, D, E, F), labelPoint(A, B, C, D, E, F), d, p);

          if (sortie_html) enonce = num_alpha(0) + ` Reproduire la figure ci-dessous.<br>`;
          else enonce = num_alpha(0) + ` Utiliser un crayon à papier afin de pouvoir gommer si besoin.<br>`;
          enonce += num_alpha(1) + ` Tracer la droite parallèle à $(AB)$ passant par $C$ et nommer $M$, le point d'intersection de cette droite avec la droite $(AF)$.<br>`;
          enonce += num_alpha(2) + ` Tracer la droite parallèle à $(AB)$ passant par $D$ et nommer $N$, le point d'intersection de cette droite avec la droite $(AF)$.<br>`;
          enonce += num_alpha(3) + ` Tracer la droite parallèle à $(AB)$ passant par $E$ et nommer $O$, le point d'intersection de cette droite avec la droite $(AF)$.<br>`;
          enonce += num_alpha(4) + ` Mesurer les distances $AM$, $AN$ et $AO$. Pour l'auto-correction, comparer ces mesures avec celles données par  l'ordinateur dans la correction.<br>`;

          correction = `<br>$AM \\approx ${tex_nombre(
            lC
          )}$ cm, $AN \\approx ${tex_nombre(
            lD
          )}$ cm et $AO \\approx${tex_nombre(
            lE
          )}$ cm.<br>`;
          Xmin = Math.floor(Math.min(A.x, B.x, C.x, D.x, E.x, F.x, EE.x, CC.x, DD.x) - 1)
          Xmax = Math.ceil(Math.max(A.x, B.x, C.x, D.x, E.x, F.x, EE.x, CC.x, DD.x) + 1)
          Ymin = Math.floor(Math.min(A.y, B.y, C.y, D.y, E.y, F.y, EE.y, CC.y, DD.y) - 1)
          Ymax = Math.ceil(Math.max(A.y, B.y, C.y, D.y, E.y, F.y, EE.y, CC.y, DD.y) + 1)
          break;
        case 3:
          A = point(0, 0, "A", "above left");
          B = point(10, randint(-4, 4, [-1, 0, 1]), "B", "above right");
          d = droite(A, B);
          d.isVisible = true;
          C = point(randint(2, 3), randint(3, 4), "C", "above left");
          D = point(randint(7, 8), randint(-7, -6), "D");
          dB = droiteParPointEtPerpendiculaire(B, d);
          xE = 11;
          E = pointSurDroite(dB, 11, "E", "left");
          while (!Number.isInteger(E.y)) {
            xE++;
            E = pointSurDroite(dB, xE, "E", "left");
          }
          F = point(E.x, B.y);
          dE = droiteParPointEtParallele(E, d);
          dD = droiteParPointEtParallele(D, d);
          dC = droiteParPointEtPerpendiculaire(C, d)
          BB = rotation(A, B, 90);
          CC = pointIntersectionDD(dC, d, "M", "below right");
          DD = pointIntersectionDD(dD, dB, "N", "above left");
          EE = pointIntersectionDD(dC, dE, 'O', 'above left');
          FF = pointIntersectionDD(dD, dC)

          lC = arrondi(longueur(CC, A) * k, 1);
          lD = arrondi(longueur(DD, A) * k, 1);
          lE = arrondi(longueur(EE, A) * k, 1);
          cB = codageAngleDroit(A, B, BB);
          cC = codageAngleDroit(C, CC, B);
          cD = codageAngleDroit(D, DD, B, 'red');
          cE = codageAngleDroit(B, E, EE, 'red')
          cF = codageAngleDroit(C, EE, E, 'red')
          cG = codageAngleDroit(C, FF, D, 'red')

          objets_correction.push(dC, dD, dB, dE, cB, cC, cD, cE, cF, cG, d, tracePoint(A, B, C, D, E, CC, DD, EE), labelPoint(A, B, C, D, E, CC, DD, EE), afficheCoteSegment(
            segment(A, CC),
            `${tex_nombre(lC)} cm`,
            0.5,
            "red",
            1,
            0.5,
            "red"
          ),
            afficheCoteSegment(
              segment(A, DD),
              `${tex_nombre(lD)} cm`,
              0,
              "blue",
              1,
              -0.5,
              "blue"
            ),
            afficheCoteSegment(
              segment(A, EE),
              `${tex_nombre(lE)} cm`,
              0,
              "green",
              1,
              -0.5,
              "green"
            ));
          objets_enonce.push(tracePoint(A, B, C, D, E), labelPoint(A, B, C, D, E), d);
          if (sortie_html) enonce = num_alpha(0) + ` Reproduire la figure ci-dessous.<br>`;
          else enonce = num_alpha(0) + ` Utiliser un crayon à papier afin de pouvoir gommer si besoin.<br>`;
          enonce += num_alpha(1) + ` Tracer la droite perpendiculaire à $(AB)$ passant par $B$.<br>`;
          enonce += num_alpha(2) + ` Tracer la droite perpendiculaire à $(AB)$ passant par $C$ et nomme $M$, le point d'intersection de cette droite avec la droite $(AB)$.<br>`
          enonce += num_alpha(3) + ` Tracer la droite parallèle à $(AB)$ passant par $D$ et nomme $N$, le point d'intersection de cette droite avec la droite $(BE)$.<br>`;
          enonce += num_alpha(4) + ` Tracer la droite parallèle à $(AB)$ passant par $E$ et nomme $O$, le point d'intersection de cette droite avec la droite $(CM)$.<br>`
          enonce += num_alpha(5) + ` Mesurer les distances $AM$, $AN$ et $AO$. Pour l'auto-correction, comparer ces mesures avec celles données par  l'ordinateur dans la correction.<br>`;

          correction = `<br>$AM \\approx ${tex_nombre(
            lC
          )}$ cm, $AN \\approx ${tex_nombre(
            lD
          )}$ cm et $AO \\approx${tex_nombre(
            lE
          )}$ cm.<br>`;
          correction += `Les angle droits en rouge se justifient par la propriété :<br> ${texte_en_couleur(`Si deux droites sont parallèles, alors toute droite perpendiculaire à l'une est aussi perpendiculaire à l'autre`, 'red')}.<br>`
          correction += `Vérifier les angles droits à l'équerre.<br>`
          Xmin = Math.floor(Math.min(A.x, B.x, C.x, D.x, E.x, F.x, EE.x, CC.x, DD.x) - 1)
          Xmax = Math.ceil(Math.max(A.x, B.x, C.x, D.x, E.x, F.x, EE.x, CC.x, DD.x) + 1)
          Ymin = Math.floor(Math.min(A.y, B.y, C.y, D.y, E.y, F.y, EE.y, CC.y, DD.y) - 1)
          Ymax = Math.ceil(Math.max(A.y, B.y, C.y, D.y, E.y, F.y, EE.y, CC.y, DD.y) + 1)

          break
      }
      if (this.sup2 < 3) g = grille(Xmin, Ymin, Xmax, Ymax, "gray", 0.7);
      else g = "";
      if (this.sup2 == 2) {
        sc = 0.8;
        carreaux = seyes(Xmin, Ymin, Xmax, Ymax);
      } else {
        sc = 0.5;
        carreaux = "";
      }
      objets_enonce.push(g, carreaux)
      objets_correction.push(g, carreaux)

      enonce += mathalea2d(
        {
          xmin: Xmin,
          ymin: Ymin,
          xmax: Xmax,
          ymax: Ymax,
          pixelsParCm: ppc,
          scale: sc,
        },
        objets_enonce
      );
      correction += mathalea2d(
        {
          xmin: Xmin,
          ymin: Ymin,
          xmax: Xmax,
          ymax: Ymax,
          pixelsParCm: ppc,
          scale: sc,
        },
        objets_correction
      );
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(enonce + "<br>");
        this.liste_corrections.push(correction + "<br>");
        i++;
      }
      cpt++;
    }

    liste_de_question_to_contenu(this);
  };
  //	this.besoin_formulaire_numerique = ['Type de questions', 3, `1 : Perpendiculaires\n 2 : Parallèles\n 3 : Mélange`]
  this.besoin_formulaire2_numerique = [
    "Type de cahier",
    3,
    `1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche`,
  ];
}


