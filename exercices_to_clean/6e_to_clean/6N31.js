import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Comparer deux nombres décimaux
 *
 * Les types de comparaisons sont :
 * * ab ? ba
 * * aa,bb ? aa,cc
 * * a,b  a,cc avec b>c
 * * 0,ab 0,ba
 * * 0,a0b 0,b0a
 * * a,b a,b0
 * * 0,0ab 0,0a0b
 * * a,bb  a,ccc avec b>c
 * * a+1,bb  a,cccc avec cccc>bb
 *
 * aa, bb, cc correspondent à des nombres à 2 chiffres (ces 2 chiffres pouvant être distincts)
 * @Auteur Rémi Angot
 * 6N31
 */
export default function Comparer_decimaux() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Comparer des nombres décimaux";
  this.consigne = "Compléter avec le signe < , > ou =.";
  this.nb_questions = 8;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [
      choice([1, 4, 5]),
      2,
      2,
      3,
      6,
      7,
      8,
      9,
    ]; // une seule question du type inversion de chiffres (1,4,5)
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      let x,
        y,
        a,
        b,
        c,
        d,
        zero_inutile = false;

      switch (liste_type_de_questions[i]) {
        case 1: // ab ba
          a = randint(1, 9);
          b = randint(1, 9, a);
          x = a * 10 + b;
          y = b * 10 + a;
          break;
        case 2: // aa,bb aa,cc
          a = randint(1, 99);
          b = randint(11, 99);
          c = randint(11, 99);
          x = calcul(a + b / 100);
          y = calcul(a + c / 100);
          break;
        case 3: // a,b  a,cc avec b>c
          a = randint(1, 99);
          b = randint(1, 8);
          c = randint(1, b * 10);
          x = calcul(a + b / 10);
          y = calcul(a + c / 100);
          break;
        case 4: // 0,ab 0,ba
          a = randint(1, 9);
          b = randint(1, 9, a);
          x = calcul((a * 10 + b) / 100);
          y = calcul((b * 10 + a) / 100);
          break;
        case 5: // 0,a0b 0,b0a
          a = randint(1, 9);
          b = randint(1, 9, a);
          x = calcul((a * 100 + b) / 1000);
          y = calcul((b * 100 + a) / 1000);
          break;
        case 6: // a,b a,b0
          a = randint(11, 999);
          while (a % 10 == 0) {
            // pas de nombre divisible par 10
            a = randint(11, 999);
          }
          x = calcul(a / 10);
          y = x;
          zero_inutile = true;
          break;
        case 7: // 0,0ab 0,0a0b
          a = randint(1, 9);
          b = randint(1, 9);
          x = calcul(a / 100 + b / 1000);
          y = calcul(a / 100 + b / 10000);
          break;
        case 8: // a,bb  a,ccc avec b>c
          a = randint(11, 99);
          b = randint(11, 99);
          c = randint(100, b * 10);
          x = calcul(a + b / 100);
          y = calcul(a + c / 1000);
          if (randint(1, 2) == 1) {
            [x, y] = [y, x];
          }
          break;
        case 9: // a+1,bb  a,cccc avec cccc>bb
          a = randint(11, 98);
          b = randint(11, 99);
          c = randint(b * 100, 10000);
          x = calcul(a + 1 + b / 100);
          y = calcul(a + c / 10000);
          if (randint(1, 2) == 1) {
            [x, y] = [y, x];
          }
          break;
      }

      texte = `${tex_nombre(x)}\\ldots\\ldots${tex_nombre(y)}`;
      if (parseFloat(x) > parseFloat(y)) {
        texte_corr = `${tex_nombre(x)} > ${tex_nombre(y)}`;
      } else if (parseFloat(x) < parseFloat(y)) {
        texte_corr = `${tex_nombre(x)} < ${tex_nombre(y)}`;
      } else {
        texte_corr = `${tex_nombre(x)} = ${tex_nombre(y)}`;
      }

      if (zero_inutile) {
        if (randint(1, 2) == 1) {
          texte = `${tex_prix(x)}\\ldots\\ldots${tex_nombre(y)}`;
          if (parseFloat(x) > parseFloat(y)) {
            texte_corr = `${tex_prix(x)} > ${tex_nombre(y)}`;
          } else if (parseFloat(x) < parseFloat(y)) {
            texte_corr = `${tex_prix(x)} < ${tex_nombre(y)}`;
          } else {
            texte_corr = `${tex_prix(x)} = ${tex_nombre(y)}`;
          }
        } else {
          texte = `${tex_nombre(x)}\\ldots\\ldots${tex_prix(y)}`;
          if (parseFloat(x) > parseFloat(y)) {
            texte_corr = `${tex_nombre(x)} > ${tex_prix(y)}`;
          } else if (parseFloat(x) < parseFloat(y)) {
            texte_corr = `${tex_nombre(x)} < ${tex_prix(y)}`;
          } else {
            texte_corr = `${tex_nombre(x)} = ${tex_prix(y)}`;
          }
        }
      }

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

