import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Un nombre est-il divisible par :
 *
 * * 2, 5, 10 ?
 * * 3, 9 ?
 * * 2, 3, 5, 9, 10 ?
 * * 2, 3, 5, 9, 10  et un autre nombre qui peut être 7, 13, 17, ou 19 ?
 * @Auteur Rémi Angot
 * 6N43
 */
export default function Criteres_de_divisibilite() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 4; // Correspond au facteur commun
  this.titre = "Critères de divisibilité";
  this.consigne = "Répondre aux questions suivantes en justifiant.";
  this.spacing = 2;
  this.spacing_corr = 1;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_des_exercices_disponibles;
    if (this.sup == 1) {
      liste_des_exercices_disponibles = [2, 5, 10];
    }
    if (this.sup == 2) {
      liste_des_exercices_disponibles = [3, 9];
    }
    if (this.sup == 3) {
      liste_des_exercices_disponibles = [2, 3, 5, 9, 10];
    }
    if (this.sup > 3) {
      liste_des_exercices_disponibles = [2, 3, 5, 9, 10, "autre"];
    }
    let liste_type_de_questions = combinaison_listes(
      liste_des_exercices_disponibles,
      this.nb_questions
    );
    for (
      let i = 0, fraction, n, u, texte, texte_corr, somme_string, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 2:
          u = randint(1, 2);
          n = randint(10, 999) * 10 + u;
          texte = `$${tex_nombre(n)}$ est-il divisible par $2$ ?`;
          if (u % 2 == 0) {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(n)}$ est divisible par $2$.`;
          } else {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $2$.`;
          }
          break;

        case 3:
          n = choice([randint(100, 999), randint(10000, 99999)]).toString(); // transformé en string pour avoir accès aux chiffres
          somme_string = somme_des_chiffre(n);
          texte = `$${tex_nombre(n)}$ est-il divisible par $3$ ?`;
          if (calcul(somme_string) % 3 == 0) {
            texte_corr = `$${somme_string}=${calcul(somme_string)}=3\\times${calcul(somme_string) / 3
              }$<br>`;
            texte_corr += `La somme des chiffres de $${tex_nombre(
              n
            )}$ est divisible par $3$ donc $${tex_nombre(
              n
            )}$ est divisible par $3$.`;
          } else {
            texte_corr = `$${somme_string}=${calcul(somme_string)}=3\\times${(calcul(somme_string) - (calcul(somme_string) % 3)) / 3
              }+${calcul(somme_string) % 3}$<br>`;
            texte_corr += `La somme des chiffres de $${tex_nombre(
              n
            )}$ n'est pas divisible par $3$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $3$.`;
          }
          break;

        case 9:
          n = choice([randint(100, 999), randint(10000, 99999)]).toString(); // transformé en string pour avoir accès aux chiffres
          somme_string = somme_des_chiffre(n);
          texte = `$${tex_nombre(n)}$ est-il divisible par $9$ ?`;
          if (calcul(somme_string) % 9 == 0) {
            texte_corr = `$${somme_string}=${calcul(somme_string)}=9\\times${calcul(somme_string) / 9
              }$<br>`;
            texte_corr += `La somme des chiffres de $${tex_nombre(
              n
            )}$ est divisible par $9$ donc $${tex_nombre(
              n
            )}$ est divisible par $9$.`;
          } else {
            texte_corr = `$${somme_string}=${calcul(somme_string)}=9\\times${(calcul(somme_string) - (calcul(somme_string) % 9)) / 9
              }+${calcul(somme_string) % 9}$<br>`;
            texte_corr += `La somme des chiffres de $${tex_nombre(
              n
            )}$ n'est pas divisible par $9$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $9$.`;
          }
          break;

        case 5:
          u = choice([randint(1, 9, [0, 5]), randint(1, 9, [0, 5]), 5, 0]); // 1 fois sur 2 ça sera divisible par 5
          n = randint(10, 9999) * 10 + u;
          texte = `$${tex_nombre(n)}$ est-il divisible par $5$ ?`;
          if (u % 5 == 0) {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(n)}$ est divisible par $5$.`;
          } else {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $5$.`;
          }
          break;

        case 10:
          u = choice([randint(1, 9), 0]); // 1 fois sur 2 ça sera divisible par 10
          n = randint(10, 9999) * 10 + u;
          texte = `$${tex_nombre(n)}$ est-il divisible par $10$ ?`;
          if (u == 0) {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(n)}$ est divisible par $10$.`;
          } else {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $10$.`;
          }
          break;

        case "autre":
          n = randint(100, 999);
          u = choice([7, 7, 7, 7, 13, 17, 19]);
          if (u == 7) {
            n = choice(
              [randint(10, 99) * 10 + 7],
              7 * randint(11, 99),
              randint(100, 999)
            ); //un nombre qui se termine par 7, un divisible par 7, un au hasard
          } else {
            n = choice(
              [randint(10, 99) * 100 + u],
              u * randint(11, 99),
              randint(100, 999)
            ); //un nombre qui se termine par u, un divisible par u, un au hasard
          }
          texte = `$${tex_nombre(n)}$ est-il divisible par $${u}$ ?`;
          texte_corr = `On ne connait pas de critère de divisibilité par $${u}$, on calcule donc la division euclidienne de $${tex_nombre(
            n
          )}$ par $${u}$.<br>`;
          if (n % u == 0) {
            texte_corr += `$${tex_nombre(n)}=${u}\\times${tex_nombre(
              n / u
            )}$<br>`;
            texte_corr += `Le reste de la division euclidienne est nul donc $${tex_nombre(
              n
            )}$ est divisible par $${u}$.`;
          } else {
            texte_corr += `$${tex_nombre(n)}=${u}\\times${(n - (n % u)) / u}+${n % u
              }$<br>`;
            texte_corr += `Le reste de la division euclidienne n'est pas nul donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $${u}$.`;
          }

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
    "Choix des questions",
    4,
    "1 : Critères de divisibilité par 2, 5, 10\n\
2 : Critères de divisibilité par 3,9\n3 : Critères de divisibilité par 2, 3, 5, 9, 10\n4 : Avec ou sans critère de divisibilité",
  ];
}

