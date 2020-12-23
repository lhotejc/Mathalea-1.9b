import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Exercice de calcul de produit de deux fractions.
 *
 * Paramétrages possibles :
 * * 1 : Produits de nombres positifs seulement
 * * 2 : deux questions niveau 1 puis deux questions niveau 3
 * * 3 : Produits de nombres relatifs
 * * Si décomposition cochée : les nombres utilisés sont plus importants.
 * @auteur Jean-Claude Lhote
 * 4C22
 */
export default function Exercice_multiplier_fractions() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 1; // Avec ou sans relatifs
  this.titre = "Mutliplier des fractions";
  this.consigne = "Calculer et donner le résultat sous forme irréductible";
  this.spacing = 2;
  this.spacing_corr = 2;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;
  this.sup2 = false; //méthode
  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let type_de_questions_disponibles;
    liste_fractions = obtenir_liste_fractions_irreductibles();

    if (this.sup == 1) {
      type_de_questions_disponibles = [1, 2, 2, 2];
    } // 1*nombre entier,3*fraction (pas de négatifs)
    else if (this.sup == 2) {
      type_de_questions_disponibles = [2, 2, 3, 3];
    } // fractions, 2*positifs, 2*relatifs
    else {
      type_de_questions_disponibles = [3];
    }
    let nombre_de_signe_moins;
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    );
    for (
      let i = 0,
      ab,
      cd,
      a,
      b,
      c,
      d,
      p,
      aa,
      bb,
      cc,
      dd,
      signe,
      numerateur,
      denominateur,
      index,
      texte,
      texte_corr,
      type_de_questions,
      cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      ab = choice(liste_fractions);
      cd = choice(liste_fractions);
      a = ab[0];
      b = ab[1];
      c = cd[0];
      d = cd[1];
      if (this.sup2 == false) {
        // methode 1 : simplifications finale
        switch (type_de_questions) {
          case 1: // entier * fraction (tout positif)
            if (a == 1) {
              a = randint(2, 9);
            }
            if (a == c) {
              a = a + 1;
            }
            texte = `$${tex_fraction(a, 1)}\\times${tex_fraction(c, d)}=$`;
            texte_corr = `$${tex_fraction(a, 1)}\\times${tex_fraction(c, d)}$`;
            texte_corr += `$=\\dfrac{${a}}{1}\\times${tex_fraction(c, d)}$`;
            texte_corr += `$=${tex_fraction(
              a + "\\times" + c,
              "1\\times" + d
            )}$`;
            texte_corr += `$=${tex_fraction(a * c, d)}$`;
            if (pgcd(a * c, d) != 1) {
              texte_corr += `$=${tex_fraction_reduite(a * c, d)}$`;
            }
            break;

          case 2: // fraction * fraction tout positif
            p = pgcd(a * c, b * d);
            texte = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}=$`;
            texte_corr = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`;
            texte_corr += `$=${tex_fraction(
              a + "\\times" + c,
              b + "\\times" + d
            )}$`;
            texte_corr += `$=${tex_fraction(a * c, b * d)}$`;
            if (p != 1) {
              texte_corr += `$=${tex_fraction(
                (a * c) / p + "\\times\\cancel{" + p + "}",
                (b * d) / p + "\\times\\cancel{" + p + "}"
              )}$`;
              texte_corr += `$=${tex_fraction((a * c) / p, (b * d) / p)}$`;
            }
            break;

          case 3:
            a = a * randint(-1, 1, [0]);
            b = b * randint(-1, 1, [0]);
            c = c * randint(-1, 1, [0]);
            d = d * randint(-1, 1, [0]);
            nombre_de_signe_moins = (a < 0) + (b < 0) + (c < 0) + (d < 0);
            if (Math.pow(-1, nombre_de_signe_moins) == 1) {
              signe = "";
            } else {
              signe = "-";
            }

            texte = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`;
            texte_corr = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`;
            aa = abs(a);
            bb = abs(b);
            cc = abs(c);
            dd = abs(d);
            p = pgcd(aa * cc, bb * dd);
            texte_corr += `$=${signe}${tex_fraction(
              aa,
              bb
            )}\\times${tex_fraction(cc, dd)}$`;
            texte_corr += `$=${signe}${tex_fraction(
              aa + "\\times" + cc,
              bb + "\\times" + dd
            )}$`;
            if (p == 1) {
              texte_corr += `$=${signe}${tex_fraction(aa * cc, bb * dd)}$`;
            } else {
              texte_corr += `$=${signe}${tex_fraction(aa * cc, bb * dd)}$`;
              if (aa * cc != bb * dd) {
                texte_corr += `$=${signe}${tex_fraction(
                  (aa * cc) / p + "\\times\\cancel{" + p + "}",
                  (bb * dd) / p + "\\times\\cancel{" + p + "}"
                )}$`;
                texte_corr += `$=${signe}${tex_fraction(
                  (aa * cc) / p,
                  (bb * dd) / p
                )}$`;
              } else {
                texte_corr += `$=${signe}1$`;
              }
            }
            break;
        }
      } else {
        //méthode 2 : décomposition
        if (a == c) {
          a++;
        }
        aa = obtenir_liste_nombres_premiers()[randint(1, 5)];
        bb = obtenir_liste_nombres_premiers()[randint(1, 5, [aa])];
        a = a * aa;
        d = d * aa;
        b = b * bb;
        c = c * bb;

        var listea = obtenir_liste_facteurs_premiers(a);
        var listeb = obtenir_liste_facteurs_premiers(b);
        var listec = obtenir_liste_facteurs_premiers(c);
        var listed = obtenir_liste_facteurs_premiers(d);
        var listeavf, listebvf;

        switch (type_de_questions) {
          case 1: // entier * fraction (tout positif)
            texte = `$${a}\\times${tex_fraction(c, d)}=$`;
            texte_corr = `$${a}\\times${tex_fraction(c, d)}$`;
            texte_corr += `$=${tex_fraction(a + "\\times" + c, d)}$`;
            texte_corr += `$=${tex_fraction(
              decomposition_facteurs_premiers(a) +
              "\\times" +
              decomposition_facteurs_premiers(c),
              decomposition_facteurs_premiers(d)
            )}$`;
            // texte_corr += `$=${tex_fraction(decomposition_facteurs_premiers(a * c), decomposition_facteurs_premiers(d))}$`
            for (let k in listec) {
              listea.push(listec[k]);
            }
            listeb = listed;
            listeavf = [];
            listebvf = [];

            listea.forEach(function a_ajouter_dans_listeavf(element) {
              listeavf.push([element, true]);
            });
            listeb.forEach(function a_ajouter_dans_listebvf(element) {
              listebvf.push([element, true]);
            });

            for (index = 0; index < listeb.length;) {
              for (let j = 0; j <= listea.length;) {
                if (listeb[index] == listea[j]) {
                  listebvf[index] = [listeb[index], false];
                  listeavf[j] = [listea[j], false];
                  listea[j] = 1;
                  listeb[index] = 1;
                  break;
                }
                j++;
              }
              index++;
            }

            a = 1;
            b = 1;
            for (let k in listea) {
              a = a * listea[k];
            }
            for (let k in listeb) {
              b = b * listeb[k];
            }

            numerateur = "";
            denominateur = "";

            for (let j in listeavf) {
              if (listeavf[j][1] == true) {
                numerateur += listeavf[j][0] + "\\times";
              } else {
                numerateur += "\\cancel{" + listeavf[j][0] + "}\\times";
              }
            }
            numerateur = numerateur.substr(0, numerateur.length - 6);

            for (let j in listebvf) {
              if (listebvf[j][1] == true) {
                denominateur += listebvf[j][0] + "\\times";
              } else {
                denominateur += "\\cancel{" + listebvf[j][0] + "}\\times";
              }
            }
            denominateur = denominateur.substr(0, denominateur.length - 6);

            texte_corr += `$=\\dfrac{${numerateur}}{${denominateur}}$`;
            texte_corr += `$=${tex_fraction(a, b)}$`;
            break;

          case 2: // fraction * fraction tout positif
            texte = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}=$`;
            texte_corr = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`;
            texte_corr += `$=${tex_fraction(
              a + "\\times" + c,
              b + "\\times" + d
            )}$`;

            for (let k in listec) {
              listea.push(listec[k]);
            }
            for (let k in listed) {
              listeb.push(listed[k]);
            }

            listeavf = [];
            listebvf = [];

            listea.forEach(function a_ajouter_dans_listeavf(element) {
              listeavf.push([element, true]);
            });
            listeb.forEach(function a_ajouter_dans_listebvf(element) {
              listebvf.push([element, true]);
            });

            for (index = 0; index < listeb.length;) {
              for (let j = 0; j <= listea.length;) {
                if (listeb[index] == listea[j]) {
                  listebvf[index] = [listeb[index], false];
                  listeavf[j] = [listea[j], false];
                  listea[j] = 1;
                  listeb[index] = 1;
                  break;
                }
                j++;
              }
              index++;
            }

            a = 1;
            b = 1;
            for (let k in listea) {
              a = a * listea[k];
            }
            for (let k in listeb) {
              b = b * listeb[k];
            }

            numerateur = "";
            denominateur = "";

            for (let j in listeavf) {
              if (listeavf[j][1] == true) {
                numerateur += listeavf[j][0] + "\\times";
              } else {
                numerateur += "\\cancel{" + listeavf[j][0] + "}\\times";
              }
            }
            numerateur = numerateur.substr(0, numerateur.length - 6);

            for (let j in listebvf) {
              if (listebvf[j][1] == true) {
                denominateur += listebvf[j][0] + "\\times";
              } else {
                denominateur += "\\cancel{" + listebvf[j][0] + "}\\times";
              }
            }
            denominateur = denominateur.substr(0, denominateur.length - 6);

            texte_corr += `$=\\dfrac{${numerateur}}{${denominateur}}$`;
            texte_corr += `$=${tex_fraction(a, b)}$`;
            break;

          case 3:
            a = a * randint(-1, 1, [0]);
            b = b * randint(-1, 1, [0]);
            c = c * randint(-1, 1, [0]);
            d = d * randint(-1, 1, [0]);
            nombre_de_signe_moins = (a < 0) + (b < 0) + (c < 0) + (d < 0);
            if (Math.pow(-1, nombre_de_signe_moins) == 1) {
              signe = "";
            } else {
              signe = "-";
            }

            texte = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`;
            texte_corr = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`;
            aa = abs(a);
            bb = abs(b);
            cc = abs(c);
            dd = abs(d);

            texte_corr += `$=${signe}${tex_fraction(
              aa,
              bb
            )}\\times${tex_fraction(cc, dd)}$`;
            texte_corr += `$=${signe}${tex_fraction(
              aa + "\\times" + cc,
              bb + "\\times" + dd
            )}$`;

            for (let k in listec) {
              listea.push(listec[k]);
            }
            for (let k in listed) {
              listeb.push(listed[k]);
            }

            listeavf = [];
            listebvf = [];

            listea.forEach(function a_ajouter_dans_listeavf(element) {
              listeavf.push([element, true]);
            });
            listeb.forEach(function a_ajouter_dans_listebvf(element) {
              listebvf.push([element, true]);
            });

            for (index = 0; index < listeb.length;) {
              for (let j = 0; j <= listea.length;) {
                if (listeb[index] == listea[j]) {
                  listebvf[index] = [listeb[index], false];
                  listeavf[j] = [listea[j], false];
                  listea[j] = 1;
                  listeb[index] = 1;
                  break;
                }
                j++;
              }
              index++;
            }

            a = 1;
            b = 1;
            for (let k in listea) {
              a = a * listea[k];
            }
            for (let k in listeb) {
              b = b * listeb[k];
            }

            numerateur = "";
            denominateur = "";

            for (let j in listeavf) {
              if (listeavf[j][1] == true) {
                numerateur += listeavf[j][0] + "\\times";
              } else {
                numerateur += "\\cancel{" + listeavf[j][0] + "}\\times";
              }
            }
            numerateur = numerateur.substr(0, numerateur.length - 6);

            for (let j in listebvf) {
              if (listebvf[j][1] == true) {
                denominateur += listebvf[j][0] + "\\times";
              } else {
                denominateur += "\\cancel{" + listebvf[j][0] + "}\\times";
              }
            }
            denominateur = denominateur.substr(0, denominateur.length - 6);

            texte_corr += `$=${signe}\\dfrac{${numerateur}}{${denominateur}}$`;
            texte_corr += `$=${signe}${tex_fraction(a, b)}$`;
            break;
        }
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }

    liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    3,
    "1 : Fractions à numérateurs et dénominateurs positifs \n 2 : Type 1 et type 3 pour 50%/50%\n 3 : Ecritures fractionnaires à numérateur et dénominateur entiers relatifs",
  ];
  this.besoin_formulaire2_case_a_cocher = ["Avec décomposition"];
}

