import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,somme_des_termes_par_signe,trie_positifs_negatifs,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Placer un point d'abscisse décimale
 * @Auteur Jean-Claude Lhote et Rémi Angot
 * référence : 6N30-2
 */
export default function Placer_points_sur_axe() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Placer un point d'abscisse décimale";
  this.consigne = " Placer trois points sur un axe gradué.";
  this.nb_questions = 5;
  this.nb_questions_modifiable = true;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.sup = 1;
  this.type_exercice = "SVGJS";
  this.liste_packages = "tkz-euclide";

  this.nouvelle_version = function (numero_de_l_exercice) {
    // numero_de_l_exercice est 0 pour l'exercice 1
    let type_de_questions;
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = ""; // Liste de questions
    this.contenu_correction = ""; // Liste de questions corrigées
    if (this.sup == 4)
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);
    else
      type_de_questions = combinaison_listes(
        [parseInt(this.sup)],
        this.nb_questions
      );

    this.contenu = html_consigne(this.consigne);
    for (
      let i = 0,
      abs0,
      abs1,
      abs2,
      abs3,
      l1,
      l2,
      l3,
      x1,
      x2,
      x3,
      x11,
      x22,
      x33,
      pas1,
      pas2,
      id_unique,
      texte,
      texte_corr;
      i < this.nb_questions;
      i++
    ) {
      l1 = lettre_depuis_chiffre(i * 3 + 1);
      l2 = lettre_depuis_chiffre(i * 3 + 2);
      l3 = lettre_depuis_chiffre(i * 3 + 3);

      switch (type_de_questions[i]) {
        case 1: // Placer un point sur un axe (1 décimale)
          abs0 = randint(0, 9);
          pas1 = 1;
          pas2 = 10;
          break;

        case 2: // Placer un point sur un axe (2 décimales)
          abs0 = randint(0, 90) / 10;
          pas1 = 10;
          pas2 = 10;
          break;

        case 3: // Placer un point sur un axe (3 décimales)
          abs0 = randint(0, 990) / 100;
          pas1 = 100;
          pas2 = 10;
          break;
      }
      x1 = randint(0, 2);
      x2 = randint(3, 4);
      x3 = randint(5, 6);
      x11 = randint(1, 9);
      x22 = randint(1, 9);
      x33 = randint(1, 3);
      abs1 = arrondi(
        abs0 + x1 / pas1 + x11 / pas1 / pas2,
        type_de_questions[i]
      ); // le type de questions est égal au nombre de décimales.
      abs2 = arrondi(
        abs0 + x2 / pas1 + x22 / pas1 / pas2,
        type_de_questions[i]
      );
      abs3 = arrondi(
        abs0 + x3 / pas1 + x33 / pas1 / pas2,
        type_de_questions[i]
      );

      if (sortie_html) {
        texte_corr = "";
        this.contenu += `<h3>Placer les points : ${l1}(${tex_nombrec(
          abs1
        )}), ${l2}(${tex_nombrec(abs2)}), ${l3}(${tex_nombrec(abs3)})</h3>`;
        id_unique = `${i}_${Date.now()}`;
        this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg_corr${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
      } else {
        //sortie Latex
        texte = `{\\small Placer les points : $${l1}$(${tex_nombrec(
          abs1
        )}), $${l2}$(${tex_nombrec(abs2)}), $${l3}$(${tex_nombrec(abs3)})}<br>`;
        texte += Latex_reperage_sur_un_axe(
          2.4,
          abs0,
          pas1,
          pas2,
          [],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        texte_corr = `{\\small Les points $${l1}$(${tex_nombrec(
          abs1
        )}), $${l2}$(${tex_nombrec(abs2)}), $${l3}$(${tex_nombrec(
          abs3
        )}) sont placés ci dessus}<br>`;
        texte_corr += Latex_reperage_sur_un_axe(
          2.4,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );

        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
      }
    }
    if (!sortie_html) liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : Un chiffre après la virgule\n2 : Deux chiffres après la virgule \n3 : Trois chiffres après la virgule\n4 : Mélange",
  ];
}









