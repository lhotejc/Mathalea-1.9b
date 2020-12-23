import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Équation du premier degré
 * * Type 1 : x+a=b ou ax=b
 * * Type 2 : ax+b=c
 * * Type 3 : ax+b=cx+d
 * * Tous les types
 * @Auteur Rémi Angot
 * 4L20 et 3L13
 */
export default function Exercice_equation1() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Équation du premier degré";
  this.consigne = "Résoudre les équations suivantes";
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 3) : (this.spacing_corr = 2);
  this.correction_detaillee_disponible = true;
  if (!sortie_html) {
    this.correction_detaillee = false;
  }
  this.sup = true; // Avec des nombres relatifs
  this.sup2 = 4; // Choix du type d'équation
  this.nb_questions = 6;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    switch (this.sup2.toString()) {
      case "1":
        liste_type_de_questions = ["ax=b", "x+b=c"];
        break;
      case "2":
        liste_type_de_questions = ["ax+b=c"];
        break;
      case "3":
        liste_type_de_questions = ["ax+b=cx+d"];
        break;
      default:
        liste_type_de_questions = [
          "ax+b=0",
          "ax+b=c",
          "ax=b",
          "x+b=c",
          "ax+b=cx+d",
        ];
        break;
    }
    liste_type_de_questions = combinaison_listes(
      liste_type_de_questions,
      this.nb_questions
    );
    for (
      let i = 0, a, b, c, d, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      // On limite le nombre d'essais pour chercher des valeurs nouvelles
      a = randint(2, 13);
      b = randint(1, 13);
      c = randint(1, 13);
      d = randint(1, 13);
      if (this.sup) {
        a *= choice([-1, 1]);
        b *= choice([-1, 1]);
        c *= choice([-1, 1]);
        d *= choice([-1, 1]);
      }
      if (
        liste_type_de_questions[i] == "ax+b=0" ||
        liste_type_de_questions[i] == "ax+b=c"
      ) {
        if (liste_type_de_questions[i] == "ax+b=0") {
          c = 0;
        }
        if (!this.sup && c < b) {
          b = randint(1, 9);
          c = randint(b, 15); // c sera plus grand que b pour que c-b>0
        }
        texte = `$${a}x${ecriture_algebrique(b)}=${c}$`;
        texte_corr = texte + "<br>";
        if (this.correction_detaillee) {
          if (b > 0) {
            texte_corr += `On soustrait $${b}$ aux deux membres.<br>`;
          } else {
            texte_corr += `On ajoute $${-1 * b}$ aux deux membres.<br>`;
          }
        }
        texte_corr += `$${a}x${ecriture_algebrique(b)}${mise_en_evidence(
          ecriture_algebrique(-1 * b)
        )}=${c}${mise_en_evidence(ecriture_algebrique(-1 * b))}$<br>`;
        texte_corr += `$${a}x=${c - b}$<br>`;
        if (this.correction_detaillee) {
          texte_corr += `On divise les deux membres par $${a}$.<br>`;
        }
        texte_corr += `$${a}x${mise_en_evidence(
          "\\div" + ecriture_parenthese_si_negatif(a)
        )}=${c - b + mise_en_evidence("\\div" + ecriture_parenthese_si_negatif(a))
          }$<br>`;
        texte_corr += `$x=${tex_fraction(c - b, a)}$`;
        if (pgcd(abs(a), abs(c - b)) > 1 || a < 0) {
          texte_corr += `<br>$x=${tex_fraction_reduite(c - b, a)}$`;
        }
        texte_corr += `<br> La solution est $${tex_fraction_reduite(
          c - b,
          a
        )}$.`;
      }
      if (liste_type_de_questions[i] == "x+b=c") {
        if (!this.sup && c < b) {
          b = randint(-9, 9, [0]); // b peut être négatif, ça sera une équation du type x-b=c
          c = abs(randint(b, 15)); // c sera plus grand que b pour que c-b>0
        }
        texte = `$x${ecriture_algebrique(b)}=${c}$`;
        texte_corr = texte + "<br>";
        if (this.correction_detaillee) {
          if (b > 0) {
            texte_corr += `On soustrait $${b}$ aux deux membres.<br>`;
          } else {
            texte_corr += `On ajoute $${-1 * b}$ aux deux membres.<br>`;
          }
        }
        texte_corr += `$x${ecriture_algebrique(b)}${mise_en_evidence(
          ecriture_algebrique(-1 * b)
        )}=${c}${mise_en_evidence(ecriture_algebrique(-1 * b))}$<br>`;
        texte_corr += `$x=${c - b}$`;
        texte_corr += `<br> La solution est $${c - b}$.`;
      }
      if (liste_type_de_questions[i] == "ax=b") {
        texte = `$${a}x=${b}$`;
        texte_corr = texte + "<br>";
        if (this.correction_detaillee) {
          texte_corr += `On divise les deux membres par $${a}$.<br>`;
        }
        texte_corr += `$${a}x${mise_en_evidence(
          "\\div" + ecriture_parenthese_si_negatif(a)
        )}=${b + mise_en_evidence("\\div" + ecriture_parenthese_si_negatif(a))
          }$<br>`;
        texte_corr += `$x=${tex_fraction(b, a)}$`;
        if (pgcd(abs(a), abs(b)) > 1 || a < 0) {
          texte_corr += `<br>$x=${tex_fraction_reduite(b, a)}$`;
        }
        texte_corr += `<br> La solution est $${tex_fraction_reduite(b, a)}$.`;
      }
      if (liste_type_de_questions[i] == "ax+b=cx+d") {
        if (c == a) {
          c = randint(1, 13, [a]);
        } // sinon on arrive à une division par 0
        if (!this.sup && a < c) {
          c = randint(1, 9);
          a = randint(c + 1, 15); // a sera plus grand que c pour que a-c>0
        }
        if (!this.sup && d < b) {
          b = randint(1, 9);
          d = randint(b + 1, 15); // d sera plus grand que b pour que d-b>0
        }
        texte = `$${rien_si_1(a)}x${ecriture_algebrique(b)}=${rien_si_1(
          c
        )}x${ecriture_algebrique(d)}$`;
        texte_corr = texte + "<br>";
        if (this.correction_detaillee) {
          if (c > 0) {
            texte_corr += `On soustrait $${rien_si_1(
              c
            )}x$ aux deux membres.<br>`;
          } else {
            texte_corr += `On ajoute $${rien_si_1(
              -1 * c
            )}x$ aux deux membres.<br>`;
          }
        }
        texte_corr += `$${rien_si_1(a)}x${ecriture_algebrique(
          b
        )}${mise_en_evidence(
          signe(-1 * c) + rien_si_1(abs(c)) + "x"
        )}=${c}x${ecriture_algebrique(d)}${mise_en_evidence(
          signe(-1 * c) + rien_si_1(abs(c)) + "x"
        )}$<br>`;
        texte_corr += `$${rien_si_1(a - c)}x${ecriture_algebrique(
          b
        )}=${d}$<br>`;
        if (this.correction_detaillee) {
          if (b > 0) {
            texte_corr += `On soustrait $${b}$ aux deux membres.<br>`;
          } else {
            texte_corr += `On ajoute $${-1 * b}$ aux deux membres.<br>`;
          }
        }
        texte_corr += `$${rien_si_1(a - c)}x${ecriture_algebrique(
          b
        )}${mise_en_evidence(
          ecriture_algebrique(-1 * b)
        )}=${d}${mise_en_evidence(ecriture_algebrique(-1 * b))}$<br>`;
        texte_corr += `$${rien_si_1(a - c)}x=${d - b}$<br>`;

        if (this.correction_detaillee) {
          texte_corr += `On divise les deux membres par $${a - c}$.<br>`;
        }
        texte_corr += `$${rien_si_1(a - c)}x${mise_en_evidence(
          "\\div" + ecriture_parenthese_si_negatif(a - c)
        )}=${d -
          b +
          mise_en_evidence("\\div" + ecriture_parenthese_si_negatif(a - c))
          }$<br>`;
        texte_corr += `$x=${tex_fraction(d - b, a - c)}$`;
        if (pgcd(abs(d - b), abs(a - c)) > 1 || a - c < 0) {
          texte_corr += `<br>$x=${tex_fraction_reduite(d - b, a - c)}$`;
        }
        texte_corr += `<br> La solution est $${tex_fraction_reduite(
          d - b,
          a - c
        )}$.`;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte); //replace(/1x/g,'x')); //remplace 1x par x
        this.liste_corrections.push(texte_corr); //.replace(/1x/g,'x')); //remplace 1x par x
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_case_a_cocher = ["Avec des nombres relatifs"];
  this.besoin_formulaire2_numerique = [
    "Type d'équations",
    4,
    "1 : ax=b ou x+a=b ou x-a=b\n2: ax+b=c\n3: ax+b=cx+d\n4: Les 2 types précédents",
  ];
}

