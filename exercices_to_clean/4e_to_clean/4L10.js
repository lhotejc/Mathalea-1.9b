import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Développer en utilisant la distributivité simple
 *
 * * La lettre peut être x, y, z, t, a, b ou c
 * * 3 fois sur 6 c'est une distributivité simple :  k(ax+b)
 * * 1 fois sur 6 c'est une distributivité simple : (ax+b)×k
 * * 1 fois sur 6, la variable est en facteur : kx(ax+b)
 * * 1 fois sur 6 il faut ensuite réduire : k(ax+b)+c
 *
 * Niveau de difficulté :
 * * 1 : Multiplication par un facteur positif
 * * 2: Multiplication par un facteur relatif
 * @Auteur Rémi Angot
 * 4L10 et 3L11
 */
export default function Exercice_developper(difficulte = 1) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = difficulte;
  this.titre = "Utiliser la simple distributivité";
  this.consigne = "Développer.";
  this.spacing = 1;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let lettre = ["x", "y", "z", "t", "a", "b", "c"];
    let type_de_questions_disponibles = [
      "simple",
      "simple",
      "simple2",
      "x_en_facteur",
      "developper_et_reduire",
    ];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      let k = randint(2, 11);
      if (this.sup > 1) {
        // si difficulté 2, k peut être négatif
        k = k * choice([-1, 1]);
      }
      let a = randint(1, 9);
      let b = randint(1, 9) * choice([-1, 1]);
      let inconnue = choice(lettre);
      switch (type_de_questions) {
        case "simple":
          if (a == 1) {
            // ne pas écrire 1x
            texte = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}(${inconnue}${ecriture_algebrique(b)})$`;
          } else {
            texte = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}(${a}${inconnue}${ecriture_algebrique(b)})$`;
          }

          if (a == 1) {
            // ne pas écrire 1x
            texte_corr = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}(${inconnue}${ecriture_algebrique(b)})=${k}
						\\times ${inconnue}+${ecriture_parenthese_si_negatif(
              k
            )}\\times${ecriture_parenthese_si_negatif(b)}=${k * a
              }${inconnue}${ecriture_algebrique(k * b)}$`;
          } else {
            texte_corr = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}(${a}${inconnue}${ecriture_algebrique(b)})=${k}
						\\times ${a}${inconnue}+${ecriture_parenthese_si_negatif(
              k
            )}\\times${ecriture_parenthese_si_negatif(b)}=${k * a
              }${inconnue}${ecriture_algebrique(k * b)}$`;
          }
          break;
        case "simple2":
          if (a == 1) {
            // ne pas écrire 1x
            texte = `$${lettre_depuis_chiffre(
              i + 1
            )}=(${inconnue}${ecriture_algebrique(
              b
            )})\\times${ecriture_parenthese_si_negatif(k)}$`;
          } else {
            texte = `$${lettre_depuis_chiffre(
              i + 1
            )}=(${a}${inconnue}${ecriture_algebrique(
              b
            )})\\times${ecriture_parenthese_si_negatif(k)}$`;
          }

          if (a == 1) {
            // ne pas écrire 1x
            texte_corr = `$${lettre_depuis_chiffre(
              i + 1
            )}=(${inconnue}${ecriture_algebrique(
              b
            )})\\times${ecriture_parenthese_si_negatif(k)}=${k}
						\\times ${inconnue}+${ecriture_parenthese_si_negatif(
              k
            )}\\times${ecriture_parenthese_si_negatif(b)}=${k * a
              }${inconnue}${ecriture_algebrique(k * b)}$`;
          } else {
            texte_corr = `$${lettre_depuis_chiffre(
              i + 1
            )}=(${a}${inconnue}${ecriture_algebrique(
              b
            )})\\times${ecriture_parenthese_si_negatif(k)}=${k}
						\\times ${a}${inconnue}+${ecriture_parenthese_si_negatif(
              k
            )}\\times${ecriture_parenthese_si_negatif(b)}=${k * a
              }${inconnue}${ecriture_algebrique(k * b)}$`;
          }
          break;
        case "x_en_facteur":
          if (a == 1) {
            // ne pas écrire 1x
            texte = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}${inconnue}(${inconnue}${ecriture_algebrique(b)})$`;
          } else {
            texte = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}${inconnue}(${a}${inconnue}${ecriture_algebrique(b)})$`;
          }

          if (a == 1) {
            // ne pas écrire 1x
            texte_corr = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}${inconnue}(${inconnue}${ecriture_algebrique(
              b
            )})=${k}${inconnue}\\times ${inconnue} ${signe(
              k * b
            )}${k}${inconnue}\\times ${abs(b)}=${k * a
              }${inconnue}^2${ecriture_algebrique(k * b)}${inconnue}$`;
          } else {
            if (k > 0) {
              texte_corr = `$${lettre_depuis_chiffre(
                i + 1
              )}=${k}${inconnue}(${a}${inconnue}${ecriture_algebrique(
                b
              )})=${k}${inconnue}\\times ${a}${inconnue} + ${k}${inconnue}\\times ${ecriture_parenthese_si_negatif(
                b
              )}=${k * a}${inconnue}^2${ecriture_algebrique(
                k * b
              )}${inconnue}$`;
            } else {
              texte_corr = `$${lettre_depuis_chiffre(
                i + 1
              )}=${k}${inconnue}(${a}${inconnue}${ecriture_algebrique(
                b
              )})=${k}${inconnue}\\times ${a}${inconnue} + (${k}${inconnue})\\times ${ecriture_parenthese_si_negatif(
                b
              )}=${k * a}${inconnue}^2${ecriture_algebrique(
                k * b
              )}${inconnue}$`;
            }
          }
          break;
        case "developper_et_reduire":
          let c = randint(2, 9);
          if (a == 1) {
            // ne pas écrire 1x
            texte = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}(${inconnue}${ecriture_algebrique(b)})+${c}$`;
          } else {
            texte = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}(${a}${inconnue}${ecriture_algebrique(b)})+${c}$`;
          }

          if (a == 1) {
            // ne pas écrire 1x
            texte_corr = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}(${inconnue}${ecriture_algebrique(
              b
            )})+${c}=${k}\\times ${inconnue}+${ecriture_parenthese_si_negatif(
              k
            )}\\times${ecriture_parenthese_si_negatif(b)}+${c}
						=${k * a}${inconnue}${ecriture_algebrique(k * b)}+${c}=${k * a
              }${inconnue}${ecriture_algebrique(k * b + c)}$`;
          } else {
            texte_corr = `$${lettre_depuis_chiffre(
              i + 1
            )}=${k}(${a}${inconnue}${ecriture_algebrique(
              b
            )})+${c}=${k}\\times${ecriture_parenthese_si_moins(
              a + inconnue
            )}+${ecriture_parenthese_si_negatif(
              k
            )}\\times${ecriture_parenthese_si_negatif(b)}+${c}
						=${k * a}${inconnue}${ecriture_algebrique(k * b)}+${c}=${k * a
              }${inconnue}${ecriture_algebrique(k * b + c)}$`;
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
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    2,
    "1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif",
  ];
}


