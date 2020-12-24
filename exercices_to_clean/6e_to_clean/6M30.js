import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Calcul de volumes (cube et pavé droit).
 * @Auteur Jean-Claude Lhote // modifié par Mireille Gain pour y ajouter les décimaux
 * référence 6M30
 */

export default function Calcul_de_volumes() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculs de volumes";
  this.consigne = "Calculer, en détaillant, le volume des solides donnés.";
  this.nb_questions = 4;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 1;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.classe == 6) type_de_questions_disponibles = [1, 2];
    // sixième : cube et pavé droit
    else if (this.classe == 5) type_de_questions_disponibles = [1, 2, 3, 4];
    // cinquième : on ajoute les prismes et le cylindre
    else if (this.classe == 4)
      type_de_questions_disponibles = [1, 2, 3, 4, 5, 6];
    // Quatrième : on ajoute pyramides et cones
    else type_de_questions_disponibles = [1, 2, 3, 4, 5, 6, 7]; // Troisième : on ajoute les boules.
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_unites = [
      [`~\\text{m}`, `~\\text{m}^3`],
      [`~\\text{dm}`, `~\\text{dm}^3`],
      [`~\\text{cm}`, `~\\text{cm}^3`],
      [`~\\text{mm}`, `~\\text{mm}^3`],
    ];
    let partieDecimale1, partieDecimale2, partieDecimale3;
    if (this.sup2) {
      partieDecimale1 = calcul(randint(1, 9) / 10 * randint(0, 1));
      partieDecimale2 = calcul(randint(1, 9) / 10 * randint(0, 1));
      partieDecimale3 = calcul(randint(1, 9) / 10 * randint(0, 1));
    }
    else {
      partieDecimale1 = 0;
      partieDecimale2 = 0;
      partieDecimale3 = 0;
    }
    for (
      let i = 0, texte, texte_corr, L, l, h, c, r, A, j, cpt = 0;
      i < this.nb_questions && cpt < 50;
    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // cube
          c = calcul(randint(2, 10) + partieDecimale1);
          j = randint(0, 3); // pour le choix de l'unité
          texte = `Un cube de $${tex_nombre(c)} ${liste_unites[j][0]}$ d'arête.`;
          texte_corr = `$\\mathcal{V}= c^3 =c \\times c \\times c = ${tex_nombre(c)}${liste_unites[j][0]
            }\\times${tex_nombre(c)}${liste_unites[j][0]}\\times${tex_nombre(c)}${liste_unites[j][0]
            }=${tex_nombrec(c * c * c)}${liste_unites[j][1]}$`;
          break;
        case 2: // pavé droit
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            l = calcul(randint(2, 5) + partieDecimale1);
            h = calcul(randint(3, 6) + partieDecimale2);
            L = calcul(randint(6, 10) + partieDecimale3);
            texte = `Un pavé droit de $${tex_nombre(l)}${liste_unites[j][0]}$ de largeur, de $${tex_nombre(L)}${liste_unites[j][0]}$ de longueur et de $${tex_nombre(h)}${liste_unites[j][0]}$ de hauteur.`;
            texte_corr = `$\\mathcal{V}= l \\times L \\times h = ${tex_nombre(l)}${liste_unites[j][0]
              }\\times${tex_nombre(L)}${liste_unites[j][0]}\\times${tex_nombre(h)}${liste_unites[j][0]
              }=${tex_nombrec(l * L * h)}${liste_unites[j][1]}$`;
          } else {
            // avec conversion
            j = randint(1, 2); // pour le choix de l'unité  centrale
            l = calcul(randint(2, 5) + partieDecimale1);
            h = calcul(randint(3, 6) * 10 + partieDecimale2);
            L = arrondi(randint(6, 10) / 10, 1);
            texte = `Un pavé droit de $${tex_nombre(l)}${liste_unites[j][0]
              }$ de largeur, de $${tex_nombre(L)}${liste_unites[j - 1][0]
              }$ de longueur et de $${tex_nombre(h)}${liste_unites[j + 1][0]}$ de hauteur.`;
            texte_corr = `$\\mathcal{V}= l \\times L \\times h = ${tex_nombre(l)}${liste_unites[j][0]
              }\\times${tex_nombre(L)}${liste_unites[j - 1][0]}\\times${tex_nombre(h)}${liste_unites[j + 1][0]
              }=${l}${liste_unites[j][0]}\\times${tex_nombrec(L * 10)}${liste_unites[j][0]
              }\\times${tex_nombrec(h / 10)}${liste_unites[j][0]}=${tex_nombrec(
                arrondi(l * L * h)
              )}${liste_unites[j][1]}$`;
          }
          break;
        case 3: // Cylindre
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            r = randint(2, 10);
            h = randint(2, 15);
            texte = `Un cylindre de $${r}${liste_unites[j][0]
              }$ de rayon et de $${tex_nombre(h)}${liste_unites[j][0]
              }$ de hauteur.`;
            texte_corr = `$\\mathcal{V}=\\pi \\times R ^2 \\times h =\\pi\\times\\left(${r}${liste_unites[j][0]
              }\\right)^2\\times${h}${liste_unites[j][0]}=${tex_nombrec(
                r * r * h
              )}\\pi${liste_unites[j][1]}\\approx${tex_nombrec(
                arrondi(r * r * h * Math.PI, 1)
              )}${liste_unites[j][1]}$`;
          } else {
            j = randint(2, 3); // pour le choix de l'unité
            r = randint(2, 10);
            h = randint(20, 150);
            texte = `Un cylindre de $${r}${liste_unites[j][0]
              }$ de rayon et de $${tex_nombrec(h / 10)}${liste_unites[j - 1][0]
              }$ de hauteur.`;
            texte_corr = `$\\mathcal{V}=\\pi \\times R ^2 \\times h =\\pi\\times\\left(${r}${liste_unites[j][0]
              }\\right)^2\\times${tex_nombrec(h / 10)}${liste_unites[j - 1][0]
              }=\\pi\\times${r * r}${liste_unites[j][0]}^2\\times${h}${liste_unites[j][0]
              }=${tex_nombrec(r * r * h)}\\pi${liste_unites[j][1]
              }\\approx${tex_nombrec(calcul(r * r * h * Math.PI, 1))}${liste_unites[j][1]
              }$`;
          }
          break;
        case 4: // prisme droit
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            c = calcul(randint(2, 10) + partieDecimale3);
            h = randint(2, 5);
            l = randint(6, 10);
            texte = `Un prisme droit de hauteur $${l}${liste_unites[j][0]}$ et dont les bases sont des triangles de base $${tex_nombre(c)}${liste_unites[j][0]}$ et de hauteur correspondante $${h}${liste_unites[j][0]}$.`;
            texte_corr = `$\\mathcal{V}=\\mathcal{B} \\times h=\\dfrac{${tex_nombre(c)}${liste_unites[j][0]
              }\\times${tex_nombre(h)}${liste_unites[j][0]}}{2}\\times${tex_nombre(l)}${liste_unites[j][0]
              }=${tex_nombrec(arrondi(calcul((c * h * l) / 2), 1))}${liste_unites[j][1]
              }$`;
          } else {
            j = randint(1, 2); // pour le choix de l'unité
            c = calcul(randint(2, 10) + partieDecimale3);
            h = randint(30, 50);
            l = arrondi(randint(5, 15) / 10, 1);
            texte = `Un prisme droit de hauteur $${l}${liste_unites[j - 1][0]
              }$ et dont les bases sont des triangles de base $${tex_nombre(c)}${liste_unites[j][0]
              }$ et de hauteur correspondante $${h}${liste_unites[j + 1][0]}$.`;
            texte_corr = `$\\mathcal{V}=\\mathcal{B} \\times h=\\dfrac{${c}${liste_unites[j][0]
              }\\times${h}${liste_unites[j + 1][0]}}{2}\\times${tex_nombrec(l)}${liste_unites[j - 1][0]
              }=\\dfrac{${c}${liste_unites[j][0]}\\times${tex_nombrec(
                calcul(h / 10)
              )}${liste_unites[j][0]}}{2}\\times${l * 10}${liste_unites[j][0]
              }=${tex_nombrec(calcul((c * h * l) / 2))}${liste_unites[j][1]}$`;
          }
          break;
        case 5: // cone
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            r = randint(2, 10);
            h = randint(2, 15);
            texte = `Un cône de $${r}${liste_unites[j][0]
              }$ de rayon et de $${tex_nombre(h)}${liste_unites[j][0]
              }$ de hauteur.`;
            texte_corr = `$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\pi\\times\\left(${r}${liste_unites[j][0]
              }\\right)^2\\times${h}${liste_unites[j][0]}=${tex_fraction(
                r * r * h,
                3
              )}\\pi${liste_unites[j][1]}\\approx${tex_nombrec(
                arrondi((r * r * h * Math.PI) / 3)
              )}${liste_unites[j][1]}$`;
          } else {
            j = randint(2, 3); // pour le choix de l'unité
            r = randint(2, 10);
            h = randint(20, 150);
            texte = `Un cône de $${r}${liste_unites[j][0]
              }$ de rayon et de $${tex_nombrec(h / 10)}${liste_unites[j - 1][0]
              }$ de hauteur.`;
            texte_corr = `$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\pi\\times\\left(${r}${liste_unites[j][0]
              }\\right)^2\\times${tex_nombrec(calcul(h / 10))}${liste_unites[j - 1][0]
              }=\\dfrac{1}{3}\\times\\pi\\times\\left(${r}${liste_unites[j][0]
              }\\right)^2\\times${tex_nombrec(h)}${liste_unites[j][0]
              }=${tex_fraction(r * r * h, 3)}\\pi\\approx${tex_nombrec(
                calcul((r * r * h * Math.PI) / 3, 1)
              )}${liste_unites[j][1]}$`;
          }
          break;
        case 6: // pyramide
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            c = calcul(randint(2, 10) + partieDecimale2);
            h = randint(2, 5);
            l = randint(6, 10);
            texte = `Une pyramide de hauteur $${h}${liste_unites[j][0]}$ et dont la base  est un carré de $${tex_nombre(c)}${liste_unites[j][0]}$ de côté.`;
            texte_corr = `$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\left(${tex_nombre(c)}${liste_unites[j][0]}\\right)^2\\times${h}${liste_unites[j][0]}`;
            if (calcul((c * c * h) / 3, false) == arrondi((c * c * h) / 3, 1))
              texte_corr += `=${tex_nombrec(
                arrondi(calcul((c * c * h) / 3), 1)
              )}${liste_unites[j][1]}$`;
            else
              texte_corr += `\\approx${tex_nombrec(
                arrondi(calcul((c * c * h) / 3), 1)
              )}${liste_unites[j][1]}$`;
          } else {
            j = randint(1, 2); // pour le choix de l'unité
            c = calcul(randint(2, 10) + partieDecimale2);
            h = randint(30, 50);
            l = arrondi(randint(5, 15) / 10, 1);
            texte = `Une pyramide de hauteur $${tex_nombrec(h / 10)}${liste_unites[j - 1][0]
              }$ et dont la base  est un carré de $${tex_nombre(c)}${liste_unites[j][0]
              }$ et de hauteur correspondante $${h}${liste_unites[j + 1][0]}$.`;
            texte_corr = `$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\left(${tex_nombre(c)}${liste_unites[j][0]
              }\\right)^2\\times${tex_nombrec(h / 10)}${liste_unites[j - 1][0]
              }=\\dfrac{1}{3}\\times${c * c}${liste_unites[j][0]
              }^2\\times${tex_nombrec(h)}${liste_unites[j][0]}`;
            if (calcul((c * c * h) / 3, false) == arrondi((c * c * h) / 3, 1))
              texte_corr += `=${tex_nombrec(
                arrondi(calcul((c * h * c) / 3), 1)
              )}${liste_unites[j][1]}$`;
            else
              texte_corr += `\\approx${tex_nombrec(
                arrondi(calcul((c * h * c) / 3), 1)
              )}${liste_unites[j][1]}$`;
          }
          break;
        case 7: // boule
          j = randint(0, 3); // pour le choix de l'unité
          r = randint(2, 10);
          texte = `Une boule de $${r}${liste_unites[j][0]}$ de rayon.`;
          texte_corr = `$\\mathcal{V}=\\dfrac{4}{3} \\times \\pi \\times R^3=\\dfrac{4}{3}\\times\\pi\\times\\left(${r}${liste_unites[j][0]
            }\\right)^3=${tex_fraction(calcul(4 * r * r * r), 3)}\\pi${liste_unites[j][1]
            }\\approx${tex_nombrec(
              arrondi(calcul((4 * Math.PI * r * r * r) / 3), 1)
            )}${liste_unites[j][1]}$`;
          break;
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
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    2,
    "1 : Sans conversions\n2 : Avec des conversions",
  ];
  this.besoin_formulaire2_case_a_cocher = ["Avec des décimaux", false];
}


