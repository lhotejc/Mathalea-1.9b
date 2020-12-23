import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Plusieurs type de calcul avec des entiers.
 *
 * Sans parenthèses :
 * * a+b*c
 * * a+b÷c
 * * a/b*c
 * * a*b÷c
 * * a*b+c
 * * a-b+c
 * * a+b+c*d
 * * a*b+c*d
 * * a*b*c+d
 * * a*b-c÷d
 * * a*b+c÷d
 *
 * Avec parenthèses :
 * * a*(b-c)
 * * (a-b)*c
 * * (a-b)÷c
 * * a÷(b+c)
 * * (a-b)÷c
 * * a*(b-c)*d
 * * a*b*(c-d)
 * * a*(b-c*d)
 * * (a+b*c)÷d
 * * a*(b-c*d)
 * * a*b÷(c+d)
 * * a*(b÷c+d)
 * * a-(b+c)
 * * (a+b+c)*d
 * @Auteur Rémi Angot
 * 4C11
 */
export default function Priorites_et_relatifs() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculs utilisant les priorités opératoires";
  this.consigne = "Calculer";
  this.nb_questions = 5;
  this.nb_cols = 2;
  this.nb_cols_corr = 1;
  this.sup = 3;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (this.sup == 1) {
      liste_questions_disponibles = range1(11);
    } else if (this.sup == 2) {
      liste_questions_disponibles = range1(20, range1(11));
    } else {
      liste_questions_disponibles = range1(20);
    }
    let liste_type_de_questions = combinaison_listes(
      liste_questions_disponibles,
      this.nb_questions
    );
    for (
      let i = 0, texte, texte_corr, a, b, c, d, signes, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: //a+b*c
          a = randint(2, 11) * choice([-1, 1]);
          b = randint(2, 11) * choice([-1, 1]);
          c = randint(2, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0) {
            a = randint(2, 11) * choice([-1, 1]);
            b = randint(2, 11) * choice([-1, 1]);
            c = randint(2, 11) * choice([-1, 1]);
          }
          texte = `$${a}${ecriture_algebrique(b)}\\times${ecriture_parenthese_si_negatif(c)}$`;
          texte_corr = `$${a}${mise_en_evidence('~' + ecriture_algebrique(b) + "\\times" + ecriture_parenthese_si_negatif(c))}=${a}${ecriture_algebrique(b * c)
            }=${a + b * c}$`;
          break;
        case 2: //a+b/c
          a = randint(2, 11) * choice([-1, 1]);
          c = randint(2, 11) * choice([-1, 1]);
          b = c * randint(2, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0) {
            a = randint(2, 11) * choice([-1, 1]);
            c = randint(2, 11) * choice([-1, 1]);
            b = c * randint(2, 11) * choice([-1, 1]);
          }
          texte = `$${a}${ecriture_algebrique(b)}\\div${ecriture_parenthese_si_negatif(c)}$`;
          texte_corr = `$${a}${mise_en_evidence('~' + ecriture_algebrique(b) + "\\div" + ecriture_parenthese_si_negatif(c))}=${a}${ecriture_algebrique(b / c)
            }=${a + b / c}$`;
          break;
        case 3: //a/b*c
          b = randint(2, 11) * choice([-1, 1]);
          c = randint(2, 11) * choice([-1, 1]);
          a = b * randint(2, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0) {
            b = randint(2, 11) * choice([-1, 1]);
            c = randint(2, 11) * choice([-1, 1]);
            a = b * randint(2, 11) * choice([-1, 1]);
          }
          texte = `$${a}\\div${ecriture_parenthese_si_negatif(b)}\\times${ecriture_parenthese_si_negatif(c)}$`;
          texte_corr = `$${mise_en_evidence(a + "\\div" + ecriture_parenthese_si_negatif(b))}\\times${ecriture_parenthese_si_negatif(c)}=${a / b
            }\\times${ecriture_parenthese_si_negatif(c)}=${(a / b) * c}$`;
          break;
        case 4: // a*b/c
          if (choice([true, false])) {
            //a est un multiple de c
            c = randint(2, 6) * choice([-1, 1]);
            a = c * randint(2, 5) * choice([-1, 1]);
            b = randint(2, 6) * choice([-1, 1]);
            while (a > 0 && b > 0 && c > 0) {
              c = randint(2, 6) * choice([-1, 1]);
              a = c * randint(2, 5) * choice([-1, 1]);
              b = randint(2, 6) * choice([-1, 1]);
            }
          } else {
            // b est un multiple de c
            c = randint(2, 6) * choice([-1, 1]);
            b = c * randint(2, 5) * choice([-1, 1]);
            a = randint(2, 6) * choice([-1, 1]);
            while (a > 0 && b > 0 && c > 0) {
              c = randint(2, 6) * choice([-1, 1]);
              b = c * randint(2, 5) * choice([-1, 1]);
              a = randint(2, 6) * choice([-1, 1]);
            }
          }
          texte = `$${a}\\times${ecriture_parenthese_si_negatif(b)}\\div${ecriture_parenthese_si_negatif(c)}$`;
          texte_corr = `$${mise_en_evidence(a + "\\times" + ecriture_parenthese_si_negatif(b))}\\div${ecriture_parenthese_si_negatif(c)}=${a * b
            }\\div${ecriture_parenthese_si_negatif(c)}=${(a * b) / c}$`;
          break;
        case 5: //a*b+c
          a = randint(2, 11) * choice([-1, 1]);
          b = randint(2, 11) * choice([-1, 1]);
          c = randint(2, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0) {
            a = randint(2, 11) * choice([-1, 1]);
            b = randint(2, 11) * choice([-1, 1]);
            c = randint(2, 11) * choice([-1, 1]);
          }
          texte = `$${a}\\times${ecriture_parenthese_si_negatif(b)}${ecriture_algebrique(c)}$`;
          texte_corr = `$${mise_en_evidence(a + "\\times" + ecriture_parenthese_si_negatif(b))}${ecriture_algebrique(c)}=${a * b
            }${ecriture_algebrique(c)}=${a * b + c}$`;
          break;
        case 6: //a-b+c
          a = randint(2, 11) * choice([-1, 1]);
          b = randint(2, 11) * choice([-1, 1]);
          c = randint(2, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0) {
            a = randint(2, 11) * choice([-1, 1]);
            b = randint(2, 11) * choice([-1, 1]);
            c = randint(2, 11) * choice([-1, 1]);
          }
          texte = `$${a}-(${ecriture_algebrique(b)})${ecriture_algebrique(c)}$`;
          texte_corr = `$${a}${mise_en_evidence(ecriture_algebrique(-b))}${ecriture_algebrique(c)}=${a - b}${ecriture_algebrique(c)}=${a - b + c
            }$`;
          break;
        case 7: //a+b+c*d
          a = randint(2, 20) * choice([-1, 1]);
          b = randint(2, 20) * choice([-1, 1]);
          c = randint(2, 11) * choice([-1, 1]);
          d = randint(2, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0 && d > 0) {
            a = randint(2, 20) * choice([-1, 1]);
            b = randint(2, 20) * choice([-1, 1]);
            c = randint(2, 11) * choice([-1, 1]);
            d = randint(2, 11) * choice([-1, 1]);
          }
          texte = `$${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}\\times${ecriture_parenthese_si_negatif(d)}$`;
          texte_corr = `$${a}${ecriture_algebrique(b)}${mise_en_evidence(
            ecriture_algebrique(c) + "\\times" + ecriture_parenthese_si_negatif(d)
          )}=${a}${ecriture_algebrique(b)}${ecriture_algebrique(c * d)}=${a + b + c * d}$`;
          break;
        case 8: //a*b+c*d
          a = randint(2, 11) * choice([-1, 1]);
          b = randint(2, 11) * choice([-1, 1]);
          c = randint(2, 11) * choice([-1, 1]);
          d = randint(2, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0 && d > 0) {
            a = randint(2, 20) * choice([-1, 1]);
            b = randint(2, 20) * choice([-1, 1]);
            c = randint(2, 11) * choice([-1, 1]);
            d = randint(2, 11) * choice([-1, 1]);
          }
          texte = `$${a}\\times${ecriture_parenthese_si_negatif(b)}${ecriture_algebrique(c)}\\times${ecriture_parenthese_si_negatif(d)}$`;
          texte_corr = `$${a + mise_en_evidence("\\times") + ecriture_parenthese_si_negatif(b)
            }${ecriture_algebrique(c) + mise_en_evidence("\\times") + ecriture_parenthese_si_negatif(d)}=${a * b}${ecriture_algebrique(c * d)}=${a * b + c * d
            }$`;
          break;
        case 9:  //a*b*c+d
          a = randint(2, 5) * choice([-1, 1]);
          b = randint(2, 5) * choice([-1, 1]);
          c = randint(2, 5) * choice([-1, 1]);
          d = randint(2, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0 && d > 0) {
            a = randint(2, 5) * choice([-1, 1]);
            b = randint(2, 5) * choice([-1, 1]);
            c = randint(2, 5) * choice([-1, 1]);
            d = randint(2, 11) * choice([-1, 1]);
          }
          texte = `$${a}\\times${ecriture_parenthese_si_negatif(b)}\\times${ecriture_parenthese_si_negatif(c)}${ecriture_algebrique(d)}$`;
          texte_corr = `$${mise_en_evidence(
            a + "\\times" + ecriture_parenthese_si_negatif(b)
          )}\\times${ecriture_parenthese_si_negatif(c)}${ecriture_algebrique(d)}=${mise_en_evidence(a * b + "\\times" + ecriture_parenthese_si_negatif(c))}${ecriture_algebrique(d)}
          =${a * b * c}${ecriture_algebrique(d)}
          =${a * b * c + d}$`;
          break;
        case 10:
          a = randint(2, 11) * choice([-1, 1]);
          b = randint(2, 11) * choice([-1, 1]);
          d = randint(2, 11) * choice([-1, 1]);
          c = d * randint(2, 8) * choice([-1, 1]);
          texte = `$${a}\\times${ecriture_parenthese_si_negatif(b)}${ecriture_algebrique(c)}\\div${ecriture_parenthese_si_negatif(d)}$`;
          texte_corr = `$${a + mise_en_evidence("\\times") + ecriture_parenthese_si_negatif(b)
            + ecriture_algebrique(c) + mise_en_evidence("\\div") + ecriture_parenthese_si_negatif(d)}=${a * b}${ecriture_algebrique(c / d)}=${a * b + c / d
            }$`;
          break;
        case 11: // a*(b+c)
          a = randint(2, 11) * choice([-1, 1]);
          b = randint(1, 11) * choice([-1, 1]);
          c = randint(1, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0) {
            a = randint(2, 11) * choice([-1, 1]);
            b = randint(1, 11) * choice([-1, 1]);
            c = randint(1, 11) * choice([-1, 1]);
          }
          texte = `$${a}\\times(${b}${ecriture_algebrique(c)})$`;
          texte_corr = `$${a}\\times(${mise_en_evidence(b + ecriture_algebrique(c))})=${a}\\times${ecriture_parenthese_si_negatif(b + c)}=${a * (b + c)}$`;
          break;
        case 12: // (a+b)*c
          a = randint(1, 11) * choice([-1, 1]);
          b = randint(1, 11) * choice([-1, 1]);
          c = randint(2, 11) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0) {
            a = randint(1, 11) * choice([-1, 1]);
            b = randint(1, 11) * choice([-1, 1]);
            c = randint(2, 11) * choice([-1, 1]);
          }
          texte = `$(${a}${ecriture_algebrique(b)})\\times${ecriture_parenthese_si_negatif(c)}$`;
          texte_corr = `$(${mise_en_evidence(a + ecriture_algebrique(b))})\\times${ecriture_parenthese_si_negatif(c)}=${a + b}\\times${ecriture_parenthese_si_negatif(c)}=${(a + b) * c}$`;
          break;
        case 13: // (a+b)/c
          c = randint(2, 11) * choice([-1, 1]);
          b = randint(11, 39) * choice([-1, 1]);
          a = c * randint(2, 9) * [choice([-1, 1])] - b;
          while (a > 0 && b > 0 && c > 0) {
            c = randint(2, 11) * choice([-1, 1]);
            b = randint(11, 39) * choice([-1, 1]);
            a = c * randint(2, 9) * [choice([-1, 1])] - b;
          }
          texte = `$(${a}${ecriture_algebrique(b)})\\div${ecriture_parenthese_si_negatif(c)}$`;
          texte_corr = `$(${mise_en_evidence(a + ecriture_algebrique(b))})\\div${ecriture_parenthese_si_negatif(c)}=${a + b
            }\\div${ecriture_parenthese_si_negatif(c)}=${(a + b) / c}$`;
          break;
        case 14: // a/(b+c)
          b = randint(-5, 5, [-1, 0, 1])
          c = randint(-6, 6, [-1, 0, 1, -b])
          a = (b + c) * randint(2, 9) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0) {
            b = randint(-5, 5, [-1, 0, 1])
            c = randint(-6, 6, [-1, 0, 1, -b])
            a = (b + c) * randint(2, 9) * choice([-1, 1]);
          }
          texte = `$${a}\\div(${b}${ecriture_algebrique(c)})$`;
          texte_corr = `$${a}\\div(${mise_en_evidence(b + ecriture_algebrique(c))})=${a}\\div${ecriture_parenthese_si_negatif(b + c)}=${a / (b + c)}$`;
          break;
        case 15: // a(b+c)*d
          c = randint(11, 39) * choice([-1, 1]);
          b = randint(2, 5) * choice([-1, 1]) - c;
          a = randint(2, 5) * choice([-1, 1]);
          d = randint(2, 5) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0 && d > 0) {
            c = randint(11, 39) * choice([-1, 1]);
            b = (randint(2, 5) - c) * choice([-1, 1]);
            a = randint(2, 5) * choice([-1, 1]);
            d = randint(2, 5) * choice([-1, 1]);
          }
          texte = `$${a}\\times(${b}${ecriture_algebrique(c)})\\times${ecriture_parenthese_si_negatif(d)}$`;
          texte_corr = `$${a}\\times(${mise_en_evidence(b + ecriture_algebrique(c))})\\times${ecriture_parenthese_si_negatif(d)}=${a}\\times${ecriture_parenthese_si_negatif(b + c)}\\times${ecriture_parenthese_si_negatif(d)}=${a * (b + c) * d}$`;
          break;
        case 16: //a*b*(c+d)
          d = randint(11, 39) * choice([-1, 1]);
          c = randint(2, 5) * choice([-1, 1]) - d;
          a = randint(2, 5) * choice([-1, 1]);
          b = randint(2, 5) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0 && d > 0) {
            d = randint(11, 39) * choice([-1, 1]);
            c = randint(2, 5) * choice([-1, 1]) - d;
            a = randint(2, 5) * choice([-1, 1]);
            b = randint(2, 5) * choice([-1, 1]);
          }
          texte = `$${a}\\times${ecriture_parenthese_si_negatif(b)}\\times(${c}${ecriture_algebrique(d)})$`;
          texte_corr = `$${a}\\times${ecriture_parenthese_si_negatif(b)}\\times(${mise_en_evidence(
            c + ecriture_algebrique(d))})=${a}\\times${ecriture_parenthese_si_negatif(b)}\\times${ecriture_parenthese_si_negatif(c + d)}=${a * b * (c + d)}$`;
          break;
        case 17: // a*(b/c+d)
          a = randint(2, 11) * choice([-1, 1]);
          c = randint(2, 11) * choice([-1, 1]);
          b = c * randint(2, 5) * choice([-1, 1]);
          d = randint(2, 6) * choice([-1, 1]);
          texte = `$${a}\\times(${b}\\div${ecriture_parenthese_si_negatif(c)}${ecriture_algebrique(d)})$`;
          texte_corr = `$${a}\\times(${mise_en_evidence(
            b + `\\div` + ecriture_parenthese_si_negatif(c)
          )}${ecriture_algebrique(d)})=${a}\\times(${mise_en_evidence(
            b / c + ecriture_algebrique(d)
          )})=${a}\\times${ecriture_parenthese_si_negatif(b / c + d)}=${a * (b / c + d)}$`;
          break;
        case 18: //a*b/(c+d)
          a = randint(2, 11);
          b = randint(2, 11);
          while (liste_des_diviseurs(a * b).length < 5) {
            a = randint(2, 11);
            b = randint(2, 11);
          }
          let liste = liste_des_diviseurs(a * b);
          if (liste.length > 2) {
            liste.pop(); //on supprime le plus grand diviseur qui est le produit
            enleve_element(liste, a); //on supprime a
            enleve_element(liste, b); //on supprime b

          }
          let somme = choice(liste, [1]) * choice([-1, 1]); // la somme doit être un diviseur différent de 1
          c = randint(-30, 30, [0]);
          d = somme - c;

          while (a > 0 && b > 0 && c > 0 && d > 0) {
            a *= choice([-1, 1]);
            b *= choice([-1, 1]);
          }
          texte = `$${a}\\times${ecriture_parenthese_si_negatif(b)}\\div(${c}${ecriture_algebrique(d)})$`;
          texte_corr = `$${a}\\times${ecriture_parenthese_si_negatif(b)}\\div(${mise_en_evidence(
            c + ecriture_algebrique(d))})=${mise_en_evidence(a + "\\times" + ecriture_parenthese_si_negatif(b))}\\div${ecriture_parenthese_si_negatif(c + d)}=${a * b
            }\\div${ecriture_parenthese_si_negatif(c + d)}=${(a * b) / (c + d)}$`;
          break;
        case 19: // a-(b+c)
          a = randint(1, 9) * choice([-1, 1]);
          b = randint(1, 9) * choice([-1, 1]);
          c = randint(1, 9) * choice([-1, 1]);
          while (a > 0 && b > 0 && c > 0) {
            a = randint(1, 9) * choice([-1, 1]);
            b = randint(1, 9) * choice([-1, 1]);
            c = randint(1, 9) * choice([-1, 1]);
          }
          texte = `$${a}-(${b}${ecriture_algebrique(c)})$`;
          texte_corr = `$${a}-(${mise_en_evidence(b + ecriture_algebrique(c))})=${a}-(${ecriture_algebrique(b + c)})=${a + ecriture_algebrique(-b - c)}=${a - b - c}$`;
          break;
        case 20: // (a+b+c)*d
          a = randint(1, 9) * choice([-1, 1]);
          b = randint(1, 9) * choice([-1, 1]);
          c = randint(1, 9) * choice([-1, 1]);
          d = randint(2, 5) * choice([-1, 1])
          while (a > 0 && b > 0 && c > 0) {
            a = randint(1, 9) * choice([-1, 1]);
            b = randint(1, 9) * choice([-1, 1]);
            c = randint(1, 9) * choice([-1, 1]);
          }
          texte = `$(${a + ecriture_algebrique(b) + ecriture_algebrique(c)})\\times${ecriture_parenthese_si_negatif(d)}$`;
          texte_corr = `$(${mise_en_evidence(a + ecriture_algebrique(b) + ecriture_algebrique(c))})\\times${ecriture_parenthese_si_negatif(d)}=${a + b + c}\\times${ecriture_parenthese_si_negatif(d)}=${(a + b + c) * d} $`;
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
    "Type de calculs",
    3,
    "1 : Sans opérations entre parenthèses\n2: Avec des opérations entre parenthèses\n3: Avec ou sans opérations entre parenthèses",
  ];
}

