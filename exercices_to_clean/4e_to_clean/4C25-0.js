import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Problèmes additifs et de comparaion sur les rationnels
 * 4C25-0
 * @author Sébastien Lozano
 */
export default function Problemes_additifs_fractions() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.debug = false;
  this.sup = 1;
  if (this.debug) {
    this.nb_questions = 5;
  } else {
    this.nb_questions = 2;
  }
  this.titre = `Problèmes additifs et de comparaison sur les rationnels`;
  this.consigne = `Justifier vos réponses aux problèmes suivants.`;

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;
  sortie_html ? (this.spacing = 2) : (this.spacing = 1.5);
  sortie_html ? (this.spacing_corr = 3) : (this.spacing_corr = 1.15);

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.debug) {
      type_de_questions_disponibles = [1, 2, 3, 4, 5];
    } else {
      type_de_questions_disponibles = [choice([1, 2]), choice([3, 4, 5])];
    }

    //let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let liste_type_de_questions = combinaison_listes_sans_changer_ordre(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées --> à remettre comme ci dessus

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      // on aura besoin des méthodes de la classe Fraction()
      let frac = new ListeFraction();
      // on récupère les dénominateurs qui vont bien
      //let denoms_amis = frac.denominateurs_amis;
      //C'est mieux avec ceux là, l'algo trouve plus rapidement une solution avec les contraintes à ajouter dans mathsalea_outils.js quand ça sera possible.
      let denoms_amis = [
        [40, 2, 20, 4, 10, 5, 8],
        [60, 2, 30, 3, 20, 4, 15, 5, 12, 6, 10],
        [80, 2, 40, 4, 20, 5, 16, 8, 10],
      ];
      // on aura besoin de ranger tout ça !
      let frac_rangees, frac_meme_denom_rangees;

      //======================================================
      //======== 		AVEC 3 FRACTIONS			  	========
      //======================================================

      // le tableau d'objets contenant tout le necesssaire, fractions, énoncé, question ... pour les problème avec 3 fractions
      let pb_3_f = [];
      // les numérateurs et dénominateurs des 3 fractions attention les deux premières doivent être inférieures à 1/2 si on veut qu'elles soient toutes positives !
      // et on veut des fractions distinctes !
      let nt1, nt2, nt3, dt1, dt2, dt3;
      let n1, n2, n3, d1, d2, d3;
      // on choisit un tableau de dénominateurs qui vont bien
      let denoms_cool_3 = denoms_amis[randint(0, denoms_amis.length - 1)];
      while (
        nt1 == nt2 ||
        nt1 == nt3 ||
        nt2 == nt3 ||
        nt1 / dt1 >= 1 / 2 ||
        nt2 / dt2 >= 1 / 2
      ) {
        n1 = randint(1, 6);
        d1 = choice(denoms_cool_3);
        n2 = randint(2, 10, [n1]); //on évite n1 pour pouvoir retrouver le texte de la plus grande fraction
        d2 = choice(denoms_cool_3, [d1]);
        n3 = d1 * d2 - n1 * d2 - n2 * d1; //la somme des trois vaut 1 !
        d3 = d1 * d2;

        nt1 = frac.fraction_simplifiee(n1, d1)[0];
        dt1 = frac.fraction_simplifiee(n1, d1)[1];
        nt2 = frac.fraction_simplifiee(n2, d2)[0];
        dt2 = frac.fraction_simplifiee(n2, d2)[1];
        nt3 = frac.fraction_simplifiee(n3, d3)[0];
        dt3 = frac.fraction_simplifiee(n3, d3)[1];
      }

      //======================================================
      //========= indice 0 le triathlon des neiges  ==========
      //======================================================
      pb_3_f.push({
        prenoms: [prenomM()],
        fractionsSimp: [
          nt1,
          dt1,
          "VTT",
          nt2,
          dt2,
          "ski de fond",
          nt3,
          dt3,
          "pied",
        ],
        fractionsB: {
          f1: [nt1, dt1],
          cat1: "VTT",
          f2: [nt2, dt2],
          cat2: "ski de fond",
          f3: [nt3, dt3],
          cat3: "pied",
        },
        enonce: ``,
        question: `Pour quelle discipline, la distance est-elle la plus grande ?`,
        correction: ``,
      });

      // les 3 prénomns doivent être distincts
      let p1, p2, p3; // les 3 prénoms
      while (p1 == p2 || p1 == p3 || p2 == p3) {
        p1 = prenomF();
        p2 = prenomF();
        p3 = prenomF();
      }

      //======================================================
      //=========== 		indice 1 Miss Math		 ===========
      //======================================================
      pb_3_f.push({
        prenoms: [],
        fractionsSimp: [nt1, dt1, p1, nt2, dt2, p2, nt3, dt3, p3],
        fractionsB: {
          f1: [nt1, dt1],
          cat1: p1,
          f2: [nt2, dt2],
          cat2: p2,
          f3: [nt3, dt3],
          cat3: p3,
        },
        enonce: ``,
        question: `Qui a été élue ?`,
        correction: ``,
      });
      let currentDate = new Date();
      let currentAnnee = currentDate.getFullYear();

      //======================================================
      //====== énoncé indice 0 le triathlon des neiges  ======
      //======================================================
      pb_3_f[0].enonce += `Le triathlon des neiges de la vallée des loups comprend trois épreuves qui s'enchaînent : VTT, ski de fond et course à pied.`;
      pb_3_f[0].enonce += `<br>${pb_3_f[0].prenoms[0]}, un passionné de cette épreuve, s'entraîne régulièrement sur le même circuit. `;
      pb_3_f[0].enonce += `<br>À chaque entraînement, il parcourt le circuit de la façon suivante : $\\dfrac{${pb_3_f[0].fractionsB.f1[0]}}{${pb_3_f[0].fractionsB.f1[1]}}$ à ${pb_3_f[0].fractionsB.cat1}, `;
      pb_3_f[0].enonce += `$\\dfrac{${pb_3_f[0].fractionsB.f2[0]}}{${pb_3_f[0].fractionsB.f2[1]}}$ à ${pb_3_f[0].fractionsB.cat2} et le reste à ${pb_3_f[0].fractionsB.cat3}.`;

      //======================================================
      //=========== énoncé indice 1 Miss Math		 ===========
      //======================================================
      pb_3_f[1].enonce = `À l'élection de Miss Math ${currentAnnee}, ${pb_3_f[1].fractionsB.cat1} a remporté $\\dfrac{${pb_3_f[1].fractionsB.f1[0]}}{${pb_3_f[1].fractionsB.f1[1]}}$ des suffrages, `;
      pb_3_f[1].enonce += `${pb_3_f[1].fractionsB.cat2} $\\dfrac{${pb_3_f[1].fractionsB.f2[0]}}{${pb_3_f[1].fractionsB.f2[1]}}$ et `;
      pb_3_f[1].enonce += `${pb_3_f[1].fractionsB.cat3} tous les autres.`;

      //======================================================
      //=========== 		Correction Commune  	 ===========
      //======================================================
      let frac_meme_denom;
      for (let i = 0; i < 2; i++) {
        pb_3_f[
          i
        ].correction = `Il s'agit d'un problème additif. Il va être necessaire de réduire les fractions au même dénominateur pour les additionner, les soustraire ou les comparer.<br>`;

        if (!(dt1 == dt2)) {
          pb_3_f[
            i
          ].correction += `Réduisons les fractions de l'énoncé au même dénominateur :  `;
          frac_meme_denom = frac.reduceSameDenominateur(
            pb_3_f[i].fractionsB.f1[0],
            pb_3_f[i].fractionsB.f1[1],
            pb_3_f[i].fractionsB.f2[0],
            pb_3_f[i].fractionsB.f2[1],
            pb_3_f[i].fractionsB.f3[0],
            pb_3_f[i].fractionsB.f3[1]
          );
          if (frac_meme_denom[1] == dt1) {
            pb_3_f[
              i
            ].correction += `$\\dfrac{${pb_3_f[i].fractionsB.f1[0]}}{${pb_3_f[i].fractionsB.f1[1]}}$ et `;
            pb_3_f[
              i
            ].correction += `$\\dfrac{${pb_3_f[i].fractionsB.f2[0]}}{${pb_3_f[i].fractionsB.f2[1]}} = \\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}}$.<br>`;
          } else if (frac_meme_denom[1] == dt2) {
            pb_3_f[
              i
            ].correction += `$\\dfrac{${pb_3_f[i].fractionsB.f1[0]}}{${pb_3_f[i].fractionsB.f1[1]}} = \\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}$ et `;
            pb_3_f[
              i
            ].correction += `$\\dfrac{${pb_3_f[i].fractionsB.f2[0]}}{${pb_3_f[i].fractionsB.f2[1]}}$<br>`;
          } else {
            pb_3_f[
              i
            ].correction += `$\\dfrac{${pb_3_f[i].fractionsB.f1[0]}}{${pb_3_f[i].fractionsB.f1[1]}} = \\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}$ et `;
            pb_3_f[
              i
            ].correction += `$\\dfrac{${pb_3_f[i].fractionsB.f2[0]}}{${pb_3_f[i].fractionsB.f2[1]}} = \\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}}$.<br>`;
          }
        } else {
          frac_meme_denom = frac.reduceSameDenominateur(
            pb_3_f[i].fractionsB.f1[0],
            pb_3_f[i].fractionsB.f1[1],
            pb_3_f[i].fractionsB.f2[0],
            pb_3_f[i].fractionsB.f2[1],
            pb_3_f[i].fractionsB.f3[0],
            pb_3_f[i].fractionsB.f3[1]
          );
          pb_3_f[
            i
          ].correction += `Les fractions de l'énoncé ont déjà le même dénominateur.`;
        }
      }

      //======================================================
      //==== Correction indice 0 le triathlon des neiges  ====
      //======================================================
      pb_3_f[0].correction += `Calculons alors la distance à `;

      //======================================================
      //======== 		Correction indice 1 Miss Math  	========
      //======================================================
      pb_3_f[1].correction += `Calculons d'abord la fraction des suffrages remportés par `;

      //======================================================
      //=========== 		Correction Commune  	 ===========
      //======================================================
      for (let i = 0; i < 2; i++) {
        pb_3_f[i].correction += `${pb_3_f[i].fractionsB.cat3} : <br>`;
        pb_3_f[
          i
        ].correction += `$1-\\dfrac{${pb_3_f[i].fractionsB.f1[0]}}{${pb_3_f[i].fractionsB.f1[1]}}-\\dfrac{${pb_3_f[i].fractionsB.f2[0]}}{${pb_3_f[i].fractionsB.f2[1]}} = `;
        pb_3_f[
          i
        ].correction += `\\dfrac{${frac_meme_denom[1]}}{${frac_meme_denom[1]}}-\\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}-\\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}} = `;
        pb_3_f[
          i
        ].correction += `\\dfrac{${frac_meme_denom[1]}-${frac_meme_denom[0]}-${frac_meme_denom[2]}}{${frac_meme_denom[3]}} = `;
        pb_3_f[i].correction += `\\dfrac{${frac_meme_denom[1] - frac_meme_denom[0] - frac_meme_denom[2]
          }}{${frac_meme_denom[1]}}`;
        if (!(frac_meme_denom[1] == pb_3_f[0].fractionsB.f3[1])) {
          pb_3_f[
            i
          ].correction += ` = \\dfrac{${pb_3_f[i].fractionsB.f3[0]}}{${pb_3_f[i].fractionsB.f3[1]}}$`;
        } else {
          pb_3_f[i].correction += `$`;
        }
      }

      //======================================================
      //==== Conclusion indice 0 le triathlon des neiges  ====
      //======================================================
      pb_3_f[0].correction += `<br>${pb_3_f[0].prenoms[0]} fait donc $\\dfrac{${pb_3_f[0].fractionsB.f1[0]}}{${pb_3_f[0].fractionsB.f1[1]}}$ à ${pb_3_f[0].fractionsB.cat1}, `;
      pb_3_f[0].correction += `$\\dfrac{${pb_3_f[0].fractionsB.f2[0]}}{${pb_3_f[0].fractionsB.f2[1]}}$ à ${pb_3_f[0].fractionsB.cat2} et `;
      pb_3_f[0].correction += `$\\dfrac{${pb_3_f[0].fractionsB.f3[0]}}{${pb_3_f[0].fractionsB.f3[1]}}$ à ${pb_3_f[0].fractionsB.cat3}.`;

      pb_3_f[0].correction += `<br> Avec les mêmes dénominateurs pour pouvoir comparer, `;
      pb_3_f[0].correction += `${pb_3_f[0].prenoms[0]} fait donc $\\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}$ à ${pb_3_f[0].fractionsB.cat1}, `;
      pb_3_f[0].correction += `$\\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}}$ à ${pb_3_f[0].fractionsB.cat2} et `;
      pb_3_f[0].correction += `$\\dfrac{${frac_meme_denom[4]}}{${frac_meme_denom[5]}}$ à ${pb_3_f[0].fractionsB.cat3}.`;

      //let frac_rangees,frac_meme_denom_rangees;
      if (
        calcul(nt1 / dt1) == calcul(nt2 / dt2) &&
        calcul(nt1 / dt1) == calcul(nt3 / dt3)
      ) {
        pb_3_f[0].correction += `<br> ${texte_en_couleur_et_gras(
          `Les trois fractions sont équivalentes, ${pb_3_f[0].prenoms[0]} parcours donc la même distance dans les trois disciplines.`
        )}`;
      } else {
        frac_meme_denom_rangees = frac.sortFractions(
          frac_meme_denom[0],
          frac_meme_denom[1],
          frac_meme_denom[2],
          frac_meme_denom[3],
          frac_meme_denom[4],
          frac_meme_denom[5]
        );
        pb_3_f[0].correction += `<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $\\dfrac{${frac_meme_denom_rangees[0]}}{${frac_meme_denom_rangees[1]}}$, $\\dfrac{${frac_meme_denom_rangees[2]}}{${frac_meme_denom_rangees[3]}}$, $\\dfrac{${frac_meme_denom_rangees[4]}}{${frac_meme_denom_rangees[5]}}$.`;

        frac_rangees = frac.sortFractions(
          pb_3_f[0].fractionsB.f1[0],
          pb_3_f[0].fractionsB.f1[1],
          pb_3_f[0].fractionsB.f2[0],
          pb_3_f[0].fractionsB.f2[1],
          pb_3_f[0].fractionsB.f3[0],
          pb_3_f[0].fractionsB.f3[1]
        );

        pb_3_f[0].correction += `<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $\\dfrac{${frac_rangees[0]}}{${frac_rangees[1]}}$, $\\dfrac{${frac_rangees[2]}}{${frac_rangees[3]}}$, $\\dfrac{${frac_rangees[4]}}{${frac_rangees[5]}}$.`;

        pb_3_f[0].correction += `<br> ${texte_en_couleur_et_gras(
          `C'est donc à ${pb_3_f[0].fractionsSimp[
          pb_3_f[0].fractionsSimp.indexOf(frac_rangees[4]) + 2
          ]
          } que ${pb_3_f[0].prenoms[0]} fait la plus grande distance.`
        )}`;
      }

      //======================================================
      //======== 		Conclusion indice 1 Miss Math  	========
      //======================================================
      pb_3_f[1].correction += `<br>${pb_3_f[1].fractionsB.cat1} a donc remporté $\\dfrac{${pb_3_f[1].fractionsB.f1[0]}}{${pb_3_f[1].fractionsB.f1[1]}}$, `;
      pb_3_f[1].correction += `${pb_3_f[1].fractionsB.cat2} a remporté $\\dfrac{${pb_3_f[1].fractionsB.f2[0]}}{${pb_3_f[1].fractionsB.f2[1]}}$ et `;
      pb_3_f[1].correction += `${pb_3_f[1].fractionsB.cat3} $\\dfrac{${pb_3_f[1].fractionsB.f3[0]}}{${pb_3_f[1].fractionsB.f3[1]}}$.`;

      pb_3_f[1].correction += `<br> Avec les mêmes dénominateurs pour pouvoir comparer, `;
      pb_3_f[1].correction += `${pb_3_f[1].fractionsB.cat1} remporte donc $\\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}$, `;
      pb_3_f[1].correction += `${pb_3_f[1].fractionsB.cat2} $\\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}}$ et `;
      pb_3_f[1].correction += `${pb_3_f[1].fractionsB.cat3} $\\dfrac{${frac_meme_denom[4]}}{${frac_meme_denom[5]}}$.`;

      if (
        calcul(nt1 / dt1) == calcul(nt2 / dt2) &&
        calcul(nt1 / dt1) == calcul(nt3 / dt3)
      ) {
        pb_3_f[1].correction += `<br> ${texte_en_couleur_et_gras(
          `Les trois fractions sont équivalentes, les trois candidates ont donc remporté le même nombre de suffrages.`
        )}`;
      } else {
        frac_meme_denom_rangees = frac.sortFractions(
          frac_meme_denom[0],
          frac_meme_denom[1],
          frac_meme_denom[2],
          frac_meme_denom[3],
          frac_meme_denom[4],
          frac_meme_denom[5]
        );
        pb_3_f[1].correction += `<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $\\dfrac{${frac_meme_denom_rangees[0]}}{${frac_meme_denom_rangees[1]}}$, $\\dfrac{${frac_meme_denom_rangees[2]}}{${frac_meme_denom_rangees[3]}}$, $\\dfrac{${frac_meme_denom_rangees[4]}}{${frac_meme_denom_rangees[5]}}$.`;

        frac_rangees = frac.sortFractions(
          pb_3_f[1].fractionsB.f1[0],
          pb_3_f[1].fractionsB.f1[1],
          pb_3_f[1].fractionsB.f2[0],
          pb_3_f[1].fractionsB.f2[1],
          pb_3_f[1].fractionsB.f3[0],
          pb_3_f[1].fractionsB.f3[1]
        );

        pb_3_f[1].correction += `<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $\\dfrac{${frac_rangees[0]}}{${frac_rangees[1]}}$, $\\dfrac{${frac_rangees[2]}}{${frac_rangees[3]}}$, $\\dfrac{${frac_rangees[4]}}{${frac_rangees[5]}}$.`;

        pb_3_f[1].correction += `<br> ${texte_en_couleur_et_gras(
          `C'est donc ${pb_3_f[1].fractionsSimp[
          pb_3_f[1].fractionsSimp.indexOf(frac_rangees[4]) + 2
          ]
          } qui a été élue.`
        )}`;
      }

      //======================================================
      //======== 		AVEC 4 FRACTIONS			  	========
      //======================================================

      // le tableau d'objets contenant tout le necesssaire, fractions, énoncé, question ... pour les problème avec 4 fractions
      let pb_4_f = [];
      // les numérateurs et dénominateurs des 4 fractions attention les trois premières doivent être inférieures à 1/3 si on veut qu'elles soient toutes positives !
      // et on veut des fractions distinctes
      let nq1, nq2, nq3, nq4, dq1, dq2, dq3, dq4;
      let n4, d4; // en plus parce qu'il y a 4 fractions
      // on choisit un tableau de dénominateurs qui vont bien
      let denoms_cool_4 = denoms_amis[randint(2, denoms_amis.length - 1)];
      while (
        nq1 == nq2 ||
        nq1 == nq3 ||
        nq1 == nq4 ||
        nq2 == nq3 ||
        nq2 == nq4 ||
        nq3 == nq4 ||
        nq1 / dq1 >= 1 / 3 ||
        nq2 / dq2 >= 1 / 3 ||
        nq3 / dq3 >= 1 / 3
      ) {
        n1 = randint(1, 5);
        d1 = choice(denoms_cool_4);
        n2 = randint(1, 11, [n1]); //on évite n1 pour pouvoir retrouver le texte de la plus grande fraction
        d2 = choice(denoms_cool_4);
        n3 = randint(1, 17, [n1, n2]); //on évite n1 et n2 pour pouvoir retrouver le texte de la plus grande fraction
        d3 = choice(denoms_cool_4);
        n4 = d1 * d2 * d3 - n1 * d2 * d3 - n2 * d1 * d3 - n3 * d1 * d2; //la somme des quatre vaut 1 !
        d4 = d1 * d2 * d3;

        nq1 = frac.fraction_simplifiee(n1, d1)[0];
        dq1 = frac.fraction_simplifiee(n1, d1)[1];
        nq2 = frac.fraction_simplifiee(n2, d2)[0];
        dq2 = frac.fraction_simplifiee(n2, d2)[1];
        nq3 = frac.fraction_simplifiee(n3, d3)[0];
        dq3 = frac.fraction_simplifiee(n3, d3)[1];
        nq4 = frac.fraction_simplifiee(n4, d4)[0];
        dq4 = frac.fraction_simplifiee(n4, d4)[1];
      }

      //======================================================
      //=========== 		indice 0 le mandala		 ===========
      //======================================================
      pb_4_f.push({
        //
        prenoms: [prenom()],
        fractionsSimp: [
          nq1,
          dq1,
          "carmin",
          nq2,
          dq2,
          "ocre jaune",
          nq3,
          dq3,
          "turquoise",
          nq4,
          dq4,
          "pourpre",
        ],
        fractionsB: {
          f1: [nq1, dq1],
          cat1: "carmin",
          f2: [nq2, dq2],
          cat2: "ocre jaune",
          f3: [nq3, dq3],
          cat3: "turquoise",
          f4: [nq4, dq4],
          cat4: "pourpre",
        },
        enonce: ``,
        question: `Quelle est elle la couleur qui recouvre le plus de surface ?`,
        correction: ``,
      });

      //======================================================
      //===========		indice 1 le jardin	 	 ===========
      //======================================================
      pb_4_f.push({
        // indice 1 le jardin
        prenoms: [],
        fractionsSimp: [
          nq1,
          dq1,
          "la culture des légumes",
          nq2,
          dq2,
          "la culture des plantes aromatiques",
          nq3,
          dq3,
          "une serre servant aux semis",
          nq4,
          dq4,
          "la culture des fraisiers",
        ],
        fractionsB: {
          f1: [nq1, dq1],
          cat1: "la culture des légumes",
          f2: [nq2, dq2],
          cat2: "la culture des plantes aromatiques",
          f3: [nq3, dq3],
          cat3: "une serre servant aux semis",
          f4: [nq4, dq4],
          cat4: "la culture des fraisiers",
        },
        enonce: ``,
        question: `Quelle est la culture qui occupe le plus de surface ?`,
        correction: ``,
      });

      //======================================================
      //===========	indice 2 le stade		 	 ===========
      //======================================================
      pb_4_f.push({
        // indice 2 le stade
        prenoms: [],
        fractionsSimp: [
          nq1,
          dq1,
          "le pays organisateur",
          nq2,
          dq2,
          "l'ensemble des supporters des deux équipes en jeu",
          nq3,
          dq3,
          "les sponsors et officiels",
          nq4,
          dq4,
          "les places en vente libre",
        ],
        fractionsB: {
          f1: [nq1, dq1],
          cat1: "le pays organisateur",
          f2: [nq2, dq2],
          cat2: "l'ensemble des supporters des deux équipes en jeu",
          f3: [nq3, dq3],
          cat3: "les sponsors et officiels",
          f4: [nq4, dq4],
          cat4: "les places en vente libre",
        },
        enonce: ``,
        question: `Quelle est la catégorie la plus importante dans le stade ?`,
        correction: ``,
      });

      //======================================================
      //===========	énoncé indice 0 le mandala 	 ===========
      //======================================================
      pb_4_f[0].enonce = `${pb_4_f[0].prenoms[0]} colorie un mandala selon les proportions suivantes :  $\\dfrac{${pb_4_f[0].fractionsB.f1[0]}}{${pb_4_f[0].fractionsB.f1[1]}}$ en ${pb_4_f[0].fractionsB.cat1}, `;
      pb_4_f[0].enonce += `$\\dfrac{${pb_4_f[0].fractionsB.f2[0]}}{${pb_4_f[0].fractionsB.f2[1]}}$ en  ${pb_4_f[0].fractionsB.cat2}, `;
      pb_4_f[0].enonce += `$\\dfrac{${pb_4_f[0].fractionsB.f3[0]}}{${pb_4_f[0].fractionsB.f3[1]}}$ en  ${pb_4_f[0].fractionsB.cat3} et `;
      pb_4_f[0].enonce += `le reste en ${pb_4_f[0].fractionsB.cat4}.`;

      //======================================================
      //===========	énoncé indice 1 le jardin 	 ===========
      //======================================================
      pb_4_f[1].enonce = `Un jardin est aménagé selon les proportions suivantes :  $\\dfrac{${pb_4_f[1].fractionsB.f1[0]}}{${pb_4_f[1].fractionsB.f1[1]}}$ par ${pb_4_f[1].fractionsB.cat1}, `;
      pb_4_f[1].enonce += `$\\dfrac{${pb_4_f[1].fractionsB.f2[0]}}{${pb_4_f[1].fractionsB.f2[1]}}$ par  ${pb_4_f[1].fractionsB.cat2}, `;
      pb_4_f[1].enonce += `$\\dfrac{${pb_4_f[1].fractionsB.f3[0]}}{${pb_4_f[1].fractionsB.f3[1]}}$ par  ${pb_4_f[1].fractionsB.cat3} et `;
      pb_4_f[1].enonce += `le reste par ${pb_4_f[1].fractionsB.cat4}.`;

      //======================================================
      //===========	énoncé indice 2 le stade 	 ===========
      //======================================================
      pb_4_f[2].enonce = `Pour chaque match, les places du stade sont mises en vente dans les proportions suivantes :  $\\dfrac{${pb_4_f[2].fractionsB.f1[0]}}{${pb_4_f[2].fractionsB.f1[1]}}$ pour ${pb_4_f[2].fractionsB.cat1}, `;
      pb_4_f[2].enonce += `$\\dfrac{${pb_4_f[2].fractionsB.f2[0]}}{${pb_4_f[2].fractionsB.f2[1]}}$ pour  ${pb_4_f[2].fractionsB.cat2}, `;
      pb_4_f[2].enonce += `$\\dfrac{${pb_4_f[2].fractionsB.f3[0]}}{${pb_4_f[2].fractionsB.f3[1]}}$ pour  ${pb_4_f[2].fractionsB.cat3} et `;
      pb_4_f[2].enonce += `le reste pour ${pb_4_f[2].fractionsB.cat4}.`;

      //======================================================
      //=========== 		Correction Commune  	 ===========
      //======================================================

      //let frac_meme_denom;
      for (let i = 0; i < 3; i++) {
        pb_4_f[
          i
        ].correction = `Il s'agit d'un problème additif. Il va être necessaire de réduire les fractions au même dénominateur pour les additionner, les soustraire ou les comparer.<br>`;

        if (!(dq1 == dq2 && dq1 == dq3)) {
          pb_4_f[i].correction += `${!(
            dq1 == dq2 && dq1 == dq3
          )} - ${dq1} - ${dq2} - ${dq3} - Réduisons les fractions de l'énoncé au même dénominateur :  `;
          frac_meme_denom = frac.reduceSameDenominateur(
            pb_4_f[i].fractionsB.f1[0],
            pb_4_f[i].fractionsB.f1[1],
            pb_4_f[i].fractionsB.f2[0],
            pb_4_f[i].fractionsB.f2[1],
            pb_4_f[i].fractionsB.f3[0],
            pb_4_f[i].fractionsB.f3[1],
            pb_4_f[i].fractionsB.f4[0],
            pb_4_f[i].fractionsB.f4[1]
          );
          if (frac_meme_denom[1] == dq1) {
            pb_4_f[
              i
            ].correction += `$\\dfrac{${pb_4_f[i].fractionsB.f1[0]}}{${pb_4_f[i].fractionsB.f1[1]}}$, `;
          } else {
            pb_4_f[
              i
            ].correction += `$\\dfrac{${pb_4_f[i].fractionsB.f1[0]}}{${pb_4_f[i].fractionsB.f1[1]}} = \\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}$, `;
          }
          if (frac_meme_denom[1] == dq2) {
            pb_4_f[
              i
            ].correction += `$\\dfrac{${pb_4_f[i].fractionsB.f2[0]}}{${pb_4_f[i].fractionsB.f2[1]}}$ et `;
          } else {
            pb_4_f[
              i
            ].correction += `$\\dfrac{${pb_4_f[i].fractionsB.f2[0]}}{${pb_4_f[i].fractionsB.f2[1]}} = \\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}}$ et `;
          }
          if (frac_meme_denom[1] == dq3) {
            pb_4_f[
              i
            ].correction += `$\\dfrac{${pb_4_f[i].fractionsB.f3[0]}}{${pb_4_f[i].fractionsB.f3[1]}}$.<br>`;
          } else {
            pb_4_f[
              i
            ].correction += `$\\dfrac{${pb_4_f[i].fractionsB.f3[0]}}{${pb_4_f[i].fractionsB.f3[1]}} = \\dfrac{${frac_meme_denom[4]}}{${frac_meme_denom[5]}}$.<br>`;
          }
        } else {
          frac_meme_denom = frac.reduceSameDenominateur(
            pb_4_f[i].fractionsB.f1[0],
            pb_4_f[i].fractionsB.f1[1],
            pb_4_f[i].fractionsB.f2[0],
            pb_4_f[i].fractionsB.f2[1],
            pb_4_f[i].fractionsB.f3[0],
            pb_4_f[i].fractionsB.f3[1],
            pb_4_f[i].fractionsB.f4[0],
            pb_4_f[i].fractionsB.f4[1]
          );
          pb_4_f[
            i
          ].correction += `Les fractions de l'énoncé ont déjà le même dénominateur : `;
          pb_4_f[
            i
          ].correction += `$\\dfrac{${pb_4_f[i].fractionsB.f1[0]}}{${pb_4_f[i].fractionsB.f1[1]}}$, $\\dfrac{${pb_4_f[i].fractionsB.f2[0]}}{${pb_4_f[i].fractionsB.f2[1]}}$ et $\\dfrac{${pb_4_f[i].fractionsB.f3[0]}}{${pb_4_f[i].fractionsB.f3[1]}}$.<br>`;
        }
      }

      //======================================================
      //===========	Correction indice 0 le mandala==========
      //======================================================
      pb_4_f[0].correction += `Calculons alors la fraction du mandala recouverte en `;

      //======================================================
      //===========	Correction indice 1 le jardin===========
      //======================================================
      pb_4_f[1].correction += `Calculons d'abord la fraction du jardin occupée par `;

      //======================================================
      //===========	énoncé indice 2 le stade 	 ===========
      //======================================================
      pb_4_f[2].correction += `Calculons d'abord la fraction du stade occupée par `;

      //======================================================
      //=========== 		Correction Commune  	 ===========
      //======================================================
      for (let i = 0; i < 3; i++) {
        pb_4_f[i].correction += `${pb_4_f[i].fractionsB.cat3} : <br>`;
        pb_4_f[
          i
        ].correction += `$1-\\dfrac{${pb_4_f[i].fractionsB.f1[0]}}{${pb_4_f[i].fractionsB.f1[1]}}-\\dfrac{${pb_4_f[i].fractionsB.f2[0]}}{${pb_4_f[i].fractionsB.f2[1]}}-\\dfrac{${pb_4_f[i].fractionsB.f3[0]}}{${pb_4_f[i].fractionsB.f3[1]}} = `;
        pb_4_f[
          i
        ].correction += `\\dfrac{${frac_meme_denom[1]}}{${frac_meme_denom[1]}}-\\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}-\\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}}-\\dfrac{${frac_meme_denom[4]}}{${frac_meme_denom[5]}} = `;
        pb_4_f[
          i
        ].correction += `\\dfrac{${frac_meme_denom[1]}-${frac_meme_denom[0]}-${frac_meme_denom[2]}-${frac_meme_denom[4]}}{${frac_meme_denom[1]}} = `;
        pb_4_f[i].correction += `\\dfrac{${frac_meme_denom[1] -
          frac_meme_denom[0] -
          frac_meme_denom[2] -
          frac_meme_denom[4]
          }}{${frac_meme_denom[1]}}`;
        if (!(frac_meme_denom[1] == pb_4_f[0].fractionsB.f4[1])) {
          pb_4_f[
            i
          ].correction += ` = \\dfrac{${pb_4_f[i].fractionsB.f4[0]}}{${pb_4_f[i].fractionsB.f4[1]}}$`;
        } else {
          pb_4_f[i].correction += `$`;
        }
      }

      //======================================================
      //=========== Conclusion indice 0 le mandala ===========
      //======================================================

      pb_4_f[0].correction += `<br>Le mandala est donc colorié de la façon suivante : $\\dfrac{${pb_4_f[0].fractionsB.f1[0]}}{${pb_4_f[0].fractionsB.f1[1]}}$ en ${pb_4_f[0].fractionsB.cat1}, `;
      pb_4_f[0].correction += `$\\dfrac{${pb_4_f[0].fractionsB.f2[0]}}{${pb_4_f[0].fractionsB.f2[1]}}$ en ${pb_4_f[0].fractionsB.cat2}, `;
      pb_4_f[0].correction += `$\\dfrac{${pb_4_f[0].fractionsB.f3[0]}}{${pb_4_f[0].fractionsB.f3[1]}}$ en ${pb_4_f[0].fractionsB.cat3} et `;
      pb_4_f[0].correction += `$\\dfrac{${pb_4_f[0].fractionsB.f4[0]}}{${pb_4_f[0].fractionsB.f4[1]}}$ en ${pb_4_f[0].fractionsB.cat4}.`;

      pb_4_f[0].correction += `<br> Avec les mêmes dénominateurs pour pouvoir comparer, `;
      pb_4_f[0].correction += `le mandala est donc colorié de la façon suivante : $\\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}$ en ${pb_4_f[0].fractionsB.cat1}, `;
      pb_4_f[0].correction += `$\\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}}$ en ${pb_4_f[0].fractionsB.cat2}, `;
      pb_4_f[0].correction += `$\\dfrac{${frac_meme_denom[4]}}{${frac_meme_denom[5]}}$ en ${pb_4_f[0].fractionsB.cat3} et `;
      pb_4_f[0].correction += `$\\dfrac{${frac_meme_denom[6]}}{${frac_meme_denom[7]}}$ en ${pb_4_f[0].fractionsB.cat4}.`;

      //let frac_rangees,frac_meme_denom_rangees;
      if (
        calcul(nq1 / dq1) == calcul(nq2 / dq2) &&
        calcul(nq1 / dq1) == calcul(nq3 / dq3) &&
        calcul(nq1 / dq1) == calcul(nq4 / dq4)
      ) {
        pb_4_f[0].correction += `<br> ${texte_en_couleur_et_gras(
          `Les quatre fractions sont équivalentes, ${pb_4_f[0].prenoms[0]} colorie donc la même surface avec les quatre couleurs.`
        )}`;
      } else {
        frac_meme_denom_rangees = frac.sortFractions(
          frac_meme_denom[0],
          frac_meme_denom[1],
          frac_meme_denom[2],
          frac_meme_denom[3],
          frac_meme_denom[4],
          frac_meme_denom[5],
          frac_meme_denom[6],
          frac_meme_denom[7]
        );
        pb_4_f[0].correction += `<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $\\dfrac{${frac_meme_denom_rangees[0]}}{${frac_meme_denom_rangees[1]}}$, $\\dfrac{${frac_meme_denom_rangees[2]}}{${frac_meme_denom_rangees[3]}}$, $\\dfrac{${frac_meme_denom_rangees[4]}}{${frac_meme_denom_rangees[5]}}$, $\\dfrac{${frac_meme_denom_rangees[6]}}{${frac_meme_denom_rangees[7]}}$.`;

        frac_rangees = frac.sortFractions(
          pb_4_f[0].fractionsB.f1[0],
          pb_4_f[0].fractionsB.f1[1],
          pb_4_f[0].fractionsB.f2[0],
          pb_4_f[0].fractionsB.f2[1],
          pb_4_f[0].fractionsB.f3[0],
          pb_4_f[0].fractionsB.f3[1],
          pb_4_f[0].fractionsB.f4[0],
          pb_4_f[0].fractionsB.f4[1]
        );

        pb_4_f[0].correction += `<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $\\dfrac{${frac_rangees[0]}}{${frac_rangees[1]}}$, $\\dfrac{${frac_rangees[2]}}{${frac_rangees[3]}}$, $\\dfrac{${frac_rangees[4]}}{${frac_rangees[5]}}$, $\\dfrac{${frac_rangees[6]}}{${frac_rangees[7]}}$.`;

        pb_4_f[0].correction += `<br> ${texte_en_couleur_et_gras(
          `C'est donc en ${pb_4_f[0].fractionsSimp[
          pb_4_f[0].fractionsSimp.indexOf(frac_rangees[6]) + 2
          ]
          } que le mandala est le plus recouvert.`
        )}`;
      }

      //======================================================
      //=========== Conclusion indice 1 le jardin	 ===========
      //======================================================
      pb_4_f[1].correction += `<br>Le jardin est donc occupé de la façon suivante : $\\dfrac{${pb_4_f[1].fractionsB.f1[0]}}{${pb_4_f[1].fractionsB.f1[1]}}$ par ${pb_4_f[1].fractionsB.cat1}, `;
      pb_4_f[1].correction += `$\\dfrac{${pb_4_f[1].fractionsB.f2[0]}}{${pb_4_f[1].fractionsB.f2[1]}}$ par ${pb_4_f[1].fractionsB.cat2}, `;
      pb_4_f[1].correction += `$\\dfrac{${pb_4_f[1].fractionsB.f3[0]}}{${pb_4_f[1].fractionsB.f3[1]}}$ par ${pb_4_f[1].fractionsB.cat3} et `;
      pb_4_f[1].correction += `$\\dfrac{${pb_4_f[1].fractionsB.f4[0]}}{${pb_4_f[1].fractionsB.f4[1]}}$ par ${pb_4_f[1].fractionsB.cat4}.`;

      pb_4_f[1].correction += `<br> Avec les mêmes dénominateurs pour pouvoir comparer, `;
      pb_4_f[1].correction += `le jardin est donc occupé de la façon suivante : $\\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}$ par ${pb_4_f[1].fractionsB.cat1}, `;
      pb_4_f[1].correction += `$\\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}}$ par ${pb_4_f[1].fractionsB.cat2}, `;
      pb_4_f[1].correction += `$\\dfrac{${frac_meme_denom[4]}}{${frac_meme_denom[5]}}$ par ${pb_4_f[1].fractionsB.cat3} et `;
      pb_4_f[1].correction += `$\\dfrac{${frac_meme_denom[6]}}{${frac_meme_denom[7]}}$ par ${pb_4_f[1].fractionsB.cat4}.`;

      //let frac_rangees,frac_meme_denom_rangees;
      if (
        calcul(nq1 / dq1) == calcul(nq2 / dq2) &&
        calcul(nq1 / dq1) == calcul(nq3 / dq3) &&
        calcul(nq1 / dq1) == calcul(nq4 / dq4)
      ) {
        pb_4_f[1].correction += `<br> ${texte_en_couleur_et_gras(
          `Les quatre fractions sont équivalentes, la même surface du jardin est donc occupée par les quatre cultures.`
        )}`;
      } else {
        frac_meme_denom_rangees = frac.sortFractions(
          frac_meme_denom[0],
          frac_meme_denom[1],
          frac_meme_denom[2],
          frac_meme_denom[3],
          frac_meme_denom[4],
          frac_meme_denom[5],
          frac_meme_denom[6],
          frac_meme_denom[7]
        );
        pb_4_f[1].correction += `<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $\\dfrac{${frac_meme_denom_rangees[0]}}{${frac_meme_denom_rangees[1]}}$, $\\dfrac{${frac_meme_denom_rangees[2]}}{${frac_meme_denom_rangees[3]}}$, $\\dfrac{${frac_meme_denom_rangees[4]}}{${frac_meme_denom_rangees[5]}}$, $\\dfrac{${frac_meme_denom_rangees[6]}}{${frac_meme_denom_rangees[7]}}$.`;

        frac_rangees = frac.sortFractions(
          pb_4_f[1].fractionsB.f1[0],
          pb_4_f[1].fractionsB.f1[1],
          pb_4_f[1].fractionsB.f2[0],
          pb_4_f[1].fractionsB.f2[1],
          pb_4_f[1].fractionsB.f3[0],
          pb_4_f[1].fractionsB.f3[1],
          pb_4_f[1].fractionsB.f4[0],
          pb_4_f[1].fractionsB.f4[1]
        );

        pb_4_f[1].correction += `<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $\\dfrac{${frac_rangees[0]}}{${frac_rangees[1]}}$, $\\dfrac{${frac_rangees[2]}}{${frac_rangees[3]}}$, $\\dfrac{${frac_rangees[4]}}{${frac_rangees[5]}}$, $\\dfrac{${frac_rangees[6]}}{${frac_rangees[7]}}$.`;

        pb_4_f[1].correction += `<br> ${texte_en_couleur_et_gras(
          `C'est donc par ${pb_4_f[1].fractionsSimp[
          pb_4_f[1].fractionsSimp.indexOf(frac_rangees[6]) + 2
          ]
          } que le jardin est le plus occupé.`
        )}`;
      }

      //======================================================
      //=========== Conclusion indice 2 le stade	 ===========
      //======================================================
      pb_4_f[2].correction += `<br>Le stade est donc occupé de la façon suivante : $\\dfrac{${pb_4_f[2].fractionsB.f1[0]}}{${pb_4_f[2].fractionsB.f1[1]}}$ pour ${pb_4_f[2].fractionsB.cat1}, `;
      pb_4_f[2].correction += `$\\dfrac{${pb_4_f[2].fractionsB.f2[0]}}{${pb_4_f[2].fractionsB.f2[1]}}$ pour ${pb_4_f[2].fractionsB.cat2}, `;
      pb_4_f[2].correction += `$\\dfrac{${pb_4_f[2].fractionsB.f3[0]}}{${pb_4_f[2].fractionsB.f3[1]}}$ pour ${pb_4_f[2].fractionsB.cat3} et `;
      pb_4_f[2].correction += `$\\dfrac{${pb_4_f[2].fractionsB.f4[0]}}{${pb_4_f[2].fractionsB.f4[1]}}$ pour ${pb_4_f[2].fractionsB.cat4}.`;

      pb_4_f[2].correction += `<br> Avec les mêmes dénominateurs pour pouvoir comparer, `;
      pb_4_f[2].correction += `le stade est donc occupé de la façon suivante : $\\dfrac{${frac_meme_denom[0]}}{${frac_meme_denom[1]}}$ pour ${pb_4_f[2].fractionsB.cat1}, `;
      pb_4_f[2].correction += `$\\dfrac{${frac_meme_denom[2]}}{${frac_meme_denom[3]}}$ pour ${pb_4_f[2].fractionsB.cat2}, `;
      pb_4_f[2].correction += `$\\dfrac{${frac_meme_denom[4]}}{${frac_meme_denom[5]}}$ pour ${pb_4_f[2].fractionsB.cat3} et `;
      pb_4_f[2].correction += `$\\dfrac{${frac_meme_denom[6]}}{${frac_meme_denom[7]}}$ pour ${pb_4_f[2].fractionsB.cat4}.`;

      //let frac_rangees,frac_meme_denom_rangees;
      if (
        calcul(nq1 / dq1) == calcul(nq2 / dq2) &&
        calcul(nq1 / dq1) == calcul(nq3 / dq3) &&
        calcul(nq1 / dq1) == calcul(nq4 / dq4)
      ) {
        pb_4_f[2].correction += `<br> ${texte_en_couleur_et_gras(
          `Les quatre fractions sont équivalentes, chaque catégorie a donc la même importance dans le stade.`
        )}`;
      } else {
        frac_meme_denom_rangees = frac.sortFractions(
          frac_meme_denom[0],
          frac_meme_denom[1],
          frac_meme_denom[2],
          frac_meme_denom[3],
          frac_meme_denom[4],
          frac_meme_denom[5],
          frac_meme_denom[6],
          frac_meme_denom[7]
        );
        pb_4_f[2].correction += `<br>Nous pouvons alors ranger ces fractions dans l'ordre croissant : $\\dfrac{${frac_meme_denom_rangees[0]}}{${frac_meme_denom_rangees[1]}}$, $\\dfrac{${frac_meme_denom_rangees[2]}}{${frac_meme_denom_rangees[3]}}$, $\\dfrac{${frac_meme_denom_rangees[4]}}{${frac_meme_denom_rangees[5]}}$, $\\dfrac{${frac_meme_denom_rangees[6]}}{${frac_meme_denom_rangees[7]}}$.`;

        frac_rangees = frac.sortFractions(
          pb_4_f[2].fractionsB.f1[0],
          pb_4_f[2].fractionsB.f1[1],
          pb_4_f[2].fractionsB.f2[0],
          pb_4_f[2].fractionsB.f2[1],
          pb_4_f[2].fractionsB.f3[0],
          pb_4_f[2].fractionsB.f3[1],
          pb_4_f[2].fractionsB.f4[0],
          pb_4_f[2].fractionsB.f4[1]
        );

        pb_4_f[2].correction += `<br>Enfin, nous pouvons ranger les fractions de l'énoncé et la fraction calculée dans l'ordre croissant : $\\dfrac{${frac_rangees[0]}}{${frac_rangees[1]}}$, $\\dfrac{${frac_rangees[2]}}{${frac_rangees[3]}}$, $\\dfrac{${frac_rangees[4]}}{${frac_rangees[5]}}$, $\\dfrac{${frac_rangees[6]}}{${frac_rangees[7]}}$.`;

        pb_4_f[2].correction += `<br> ${texte_en_couleur_et_gras(
          `C'est donc pour ${pb_4_f[2].fractionsSimp[
          pb_4_f[2].fractionsSimp.indexOf(frac_rangees[6]) + 2
          ]
          } que le nombre de places est le plus important.`
        )}`;
      }

      switch (liste_type_de_questions[i]) {
        case 1: // Triathlon des neiges --> VTT, ski de fond, course
          texte = `${pb_3_f[0].enonce} <br> ${pb_3_f[0].question}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> ${pb_3_f[0].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${pb_3_f[0].correction}`;
          }
          break;
        case 2: //Miss Math --> Noémie, Samia, Alexia
          texte = `${pb_3_f[1].enonce} <br> ${pb_3_f[1].question}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> ${pb_3_f[1].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${pb_3_f[1].correction}`;
          }
          break;
        case 3: // Mandala --> carmin, ocre jaune, turquoise, pourpre
          texte = `${pb_4_f[0].enonce} <br> ${pb_4_f[0].question}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> ${pb_4_f[0].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${pb_4_f[0].correction}`;
          }
          break;
        case 4: // Jardin --> légumes, plantes aromatiques, semis, fraisiers
          texte = `${pb_4_f[1].enonce} <br> ${pb_4_f[1].question}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> ${pb_4_f[1].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${pb_4_f[1].correction}`;
          }
          break;
        case 5: // Stade --> pays organisatuers, supporters, sponsors, vente libre
          texte = `${pb_4_f[2].enonce} <br> ${pb_4_f[2].question}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> ${pb_4_f[2].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${pb_4_f[2].correction}`;
          }
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
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : nombre enier positif\n2 : nombre décimal positif\n3 : nombre enier positif inférieur à un\n4 : Mélange"];
}

