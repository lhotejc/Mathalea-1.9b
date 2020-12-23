import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * * Calcul fractionnaire : somme d'une fraction et du produit de deux autres fractions. Paramétrages possibles :
 * 1 : Calcul avec nombres positifs sans piège de priorité
 * * 2 : Calcul avec nombres positifs avec piège
 * * 3 : Calcul avec nombres relatifs
 * @auteur Jean-Claude Lhote
 * 4C23
 */
export default function Exercice_additionner_fraction_produit() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 1; // Avec ou sans relatifs
  this.titre = "Fractions et priorités opératoires";
  this.consigne = "Calculer et donner le résultat sous forme irréductible";
  this.spacing = 2;
  this.spacing_corr = 2;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;
  this.correction_detaillee_disponible=true
  this.correction_detaillee=true

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let type_de_questions_disponibles;
    liste_fractions = obtenir_liste_fractions_irreductibles();
    liste_fractions_faciles = obtenir_liste_fractions_irreductibles_faciles();
    let nombre_de_signe_moins;
    if (this.sup == 1)  {
      type_de_questions_disponibles = [1, 2, 3, 4];
    } // fractions faciles, relatifs
    else if (this.sup == 2)  {
      type_de_questions_disponibles = [1, 2, 3, 2];
    } // 1*nombre entier,3*fraction (pas de négatifs)
    else if (this.sup == 3) {
      type_de_questions_disponibles = [3, 3, 4, 4];
    } // fractions, 2*positifs, 2*relatifs
    else {
      type_de_questions_disponibles = [4];
    }

    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    );
    for (
      let i = 0,
      ab,
      cd,
      ef,
      a,
      b,
      c,
      d,
      e,
      f,
      p,
      k1,
      k2,
      signe1,
      signe2,
      texte,
      texte_corr,
      produit=[],
      type_de_questions,
      cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      if (this.sup==1) {ab = choice(liste_fractions_faciles);cd = choice(liste_fractions_faciles);ef = choice(liste_fractions_faciles);}
      else {ab = choice(liste_fractions);cd = choice(liste_fractions);ef = choice(liste_fractions);}

      a = ab[0];
      b = ab[1];
      c = cd[0];
      d = cd[1];
      e = ef[0];
      f = ef[1];
      console.log(i,type_de_questions)
      switch (type_de_questions) {
        case 1: // sans piège fraction1 + fraction2 x fraction3 (tout positif)
          texte = `$${tex_fraction(a, b)}+${tex_fraction(c,d)}\\times${tex_fraction(e, f)}$`;

          texte_corr = `$${tex_fraction(a, b)}+${tex_fraction(c,d)}\\times${tex_fraction(e, f)}$`;
          produit=produit_de_deux_fractions(c,d,e,f)
          if (this.correction_detaillee) {
          texte_corr += `$=${tex_fraction(a, b)}+${tex_fraction(c + "\\times" + e,d + "\\times" + f)}$`;
          texte_corr += `$=${tex_fraction(a, b)}+${tex_fraction(c * e,d * f)}$`;
      }
      else {
        texte_corr += `$=${tex_fraction(a, b)}+${produit[1]}$`;
        texte_corr += `$=${tex_fraction(a, b)}+${produit[0]}$`;
      }
          // faut-il simplifier c*e/d*f
          if (!this.correction_detaillee) {
            [c,d,e,f]=produit[2]
          }
          p = pgcd(c * e, d * f);
          if (p != 1 && ppcm(b, d * f) > ppcm(b, (d * f) / p)) {
            texte_corr += `$=${tex_fraction(a, b)}+${tex_fraction((e * c) / p + "\\times\\cancel{" + p + "}",(f * d) / p + "\\times\\cancel{" + p + "}"
            )}$`;
            c = (e * c) / p;
            d = (f * d) / p;
          } else {
            c = e * c;
            d = f * d;
          }
          p = ppcm(b, d); // p = dénominateur commun
          k1 = p / b;
          k2 = p / d;
          if (k1 != 1) {
            texte_corr += `$=${tex_fraction(
              a + mise_en_evidence("\\times" + k1),
              b + mise_en_evidence("\\times" + k1)
            )}$`;
          } else { if (k2!=1){
            texte_corr += `$=${tex_fraction(a, b)}$`;
          }}
          if (k2 != 1) {
            texte_corr += `$+${tex_fraction(
              c + mise_en_evidence("\\times" + k2),
              d + mise_en_evidence("\\times" + k2)
            )}$`;
          } else { if (k1!=1) {
            texte_corr += `$+${tex_fraction(c, d)}$`;
          }}

          texte_corr += `$=${tex_fraction(a * k1, p)}+${tex_fraction(c * k2,p)}$`;
          e = a * k1 + c * k2;
          f = p;

          texte_corr += `$=${tex_fraction(e, f)}${simplification_de_fraction_avec_etapes(e, f)}$`;
  /*
          p = pgcd(e, f);
          // faut-il simplifier e/f
          if (p != 1) {
            texte_corr += `$=${tex_fraction(
              e / p + "\\times\\cancel{" + p + "}",
              f / p + "\\times\\cancel{" + p + "}"
            )}$`;
            texte_corr += `$=${tex_fraction_reduite(e / p, f / p)}$`;
          }
*/
          break;


        case 2: // sans piège fraction2 x fraction3 + fraction1  (tout positif)
        texte = `$${tex_fraction(c,d)}\\times${tex_fraction(e, f)}+${tex_fraction(a, b)}$`;
        produit=produit_de_deux_fractions(c,d,e,f)
        texte_corr = `$${tex_fraction(c,d)}\\times${tex_fraction(e, f)}+${tex_fraction(a, b)}$`;
        if (this.correction_detaillee) {
        texte_corr += `$=${tex_fraction(c + "\\times" + e,d + "\\times" + f)}+${tex_fraction(a, b)}$`;
        texte_corr += `$=${tex_fraction(c * e,d * f)}+${tex_fraction(a, b)}$`;
        }
        else {
          texte_corr += `$=${produit[1]}+${tex_fraction(a, b)}$`;
          texte_corr += `$=${produit[0]}+${tex_fraction(a, b)}$`;
        }
        // faut-il simplifier c*e/d*f
        if (!this.correction_detaillee) {
          [c,d,e,f]=produit[2]
        }
        p = pgcd(c * e, d * f);
        if (p != 1 && ppcm(b, d * f) > ppcm(b, (d * f) / p)) {
          texte_corr += `$=${tex_fraction((e * c) / p + "\\times\\cancel{" + p + "}",(f * d) / p + "\\times\\cancel{" + p + "}")}+${tex_fraction(a, b)}$`;
          c = (e * c) / p;
          d = (f * d) / p;
        } else {
          c = e * c;
          d = f * d;
        }
        p = ppcm(b, d); // p = dénominateur commun
        k1 = p / b;
        k2 = p / d;
        if (k2 != 1) {
          texte_corr += `$=${tex_fraction(
            c + mise_en_evidence("\\times" + k2),
            d + mise_en_evidence("\\times" + k2)
          )}$`;
        } else { if (k1!=1) {
          texte_corr += `$=${tex_fraction(c, d)}$`;
        }
      }

        if (k1 != 1) {
          texte_corr += `$+${tex_fraction(
            a + mise_en_evidence("\\times" + k1),
            b + mise_en_evidence("\\times" + k1)
          )}$`;
        } else {
          if (k2!=1) {
          texte_corr += `$+${tex_fraction(a, b)}$`;
          }
        }

        if (this.correction_detaillee) {
          texte_corr += `$=${tex_fraction(c * k2,p)}+${tex_fraction(a * k1, p)}$`;
        }
        e = a * k1 + c * k2;
        f = p;

        texte_corr += `$=${tex_fraction(e, f)}${simplification_de_fraction_avec_etapes(e, f)}$`;
   /*     p = pgcd(e, f);
        // faut-il simplifier e/f
        if (p != 1) {
          texte_corr += `$=${tex_fraction(
            e / p + "\\times\\cancel{" + p + "}",
            f / p + "\\times\\cancel{" + p + "}"
          )}$`;
          texte_corr += `$=${tex_fraction_reduite(e, f)}$`;
        }*/
        break;

       
        case 3: // avec piege addition non prioritaire fraction2 * fraction3 + fraction1  tout positif
          d = b;
          produit=produit_de_deux_fractions(c,d,e,f)
          texte = `$${tex_fraction(c,d)}\\times${tex_fraction(e, f)}+${tex_fraction(a, b)}$`;
          texte_corr = `$${tex_fraction(c,d)}\\times${tex_fraction(e, f)}+${tex_fraction(a, b)}$`;
          if (this.correction_detaillee){
          texte_corr += `$=${tex_fraction(c + "\\times" + e,d + "\\times" + f)}+${tex_fraction(a, b)}$`;
          texte_corr += `$=${tex_fraction(c * e,d * f)}+${tex_fraction(a, b)}$`;
          }
          else {
            texte_corr += `$=${produit[1]}+${tex_fraction(a, b)}$`;
            texte_corr += `$=${produit[0]}+${tex_fraction(a, b)}$`;
          }
          // faut-il simplifier c*e/d*f
          if (!this.correction_detaillee) {
            [c,d,e,f]=produit[2]
          }
          p = pgcd(c * e, d * f);
          if (p != 1 && ppcm(b, d * f) > ppcm(b, (d * f) / p)) {
            texte_corr += `$=${tex_fraction(
              (e * c) / p + "\\times\\cancel{" + p + "}",
              (f * d) / p + "\\times\\cancel{" + p + "}"
            )}+${tex_fraction(a, b)}$`;
            c = (e * c) / p;
            d = (f * d) / p;
          } else {
            c = e * c;
            d = f * d;
          }
          p = ppcm(b, d); //denominateur commun = p
          k1 = p / b;
          k2 = p / d;

          if (k2 != 1) {
            texte_corr += `$=${tex_fraction(
              c + "\\times" + k2,
              d + "\\times" + k2
            )}$`;
          } else { if (k1!=1) {
            texte_corr += `$=${tex_fraction(c, d)}$`;
          }}

          if (k1 != 1) {
            texte_corr += `$+${tex_fraction(
              a + mise_en_evidence("\\times" + k1),
              b + mise_en_evidence("\\times" + k1)
            )}$`;
          } else { if (k2!=1) {
            texte_corr += `$+${tex_fraction(a, b)}$`;
          }}
          if(this.correction_detaillee){
          texte_corr += `$=${tex_fraction(c * k2,d * k2)}+${tex_fraction(a * k1, b * k1)}$`;
          }
          e = a * k1 + c * k2;
          f = p;
            texte_corr += `$=${tex_fraction(e, f)}${simplification_de_fraction_avec_etapes(e, f)}$`;
   /*      p = pgcd(e, f);
          // faut-il simplifier e/f
          if (p != 1) {
            texte_corr += `$=${tex_fraction(
              e / p + "\\times\\cancel{" + p + "}",
              f / p + "\\times\\cancel{" + p + "}"
            )}$`;
            texte_corr += `$=${tex_fraction_reduite(e, f)}$`;
            
          }*/
          break;

        case 4:
          a = a * randint(-1, 1, [0]);
          b = b * randint(-1, 1, [0]);
          c = c * randint(-1, 1, [0]);
          d = d * randint(-1, 1, [0]);
          e = e * randint(-1, 1, [0]);
          f = f * randint(-1, 1, [0]);

          nombre_de_signe_moins = (c < 0) + (d < 0) + (e < 0) + (f < 0);
          if (Math.pow(-1, nombre_de_signe_moins) == 1) {
            signe2 = "+";
          } else {
            signe2 = "-";
          }
          texte = `$${tex_fraction(a, b)}+${tex_fraction(c,d)}\\times${tex_fraction(e, f)}=$`;
          texte_corr = `$${tex_fraction(a, b)}+${tex_fraction(c,d)}\\times${tex_fraction(e, f)}$`;

          c = abs(c); // gestion du signe du produit avec {signe}
          d = abs(d);
          e = abs(e);
          f = abs(f);

          if (a * b > 0) {
            //suppression des signes - superflus de la première fraction
            signe1 = "";
          } else {
            signe1 = "-";
          }

          a = abs(a);
          b = abs(b);
          produit=produit_de_deux_fractions(c,d,e,f)
          if (this.correction_detaillee) {
          texte_corr += `$=${signe1}${tex_fraction(
            a,
            b
          )}${signe2}${tex_fraction(c + "\\times" + e, d + "\\times" + f)}$`;
          texte_corr += `$=${signe1}${tex_fraction(
            a,
            b
          )}${signe2}${tex_fraction(c * e, d * f)}$`;
          }
          else {
            texte_corr += `$=${signe1}${tex_fraction(
              a,
              b
            )}${signe2}${produit[1]}$`;
            texte_corr += `$=${signe1}${tex_fraction(
              a,
              b
            )}${signe2}${produit[0]}$`;
            }
          // faut-il simplifier c*e/d*f
          if (!this.correction_detaillee) {
            [c,d,e,f]=produit[2]
          }
          p = pgcd(c * e, d * f);
          if (p != 1 && ppcm(b, d * f) > ppcm(b, (d * f) / p)) {
            texte_corr += `$=${signe1}${tex_fraction(
              a,
              b
            )}${signe2}${tex_fraction(
              (e * c) / p + "\\times\\cancel{" + p + "}",
              (f * d) / p + "\\times\\cancel{" + p + "}"
            )}$`;
            c = (e * c) / p;
            d = (f * d) / p;
          } else {
            c = e * c;
            d = f * d;
          }
          p = ppcm(d, b); // mise au même dénominateur
          if (d % b != 0 && b % d != 0) {
            // dénominateur commun = p
            k1 = p / b;
            k2 = p / d;
            texte_corr += `$=${signe1}${tex_fraction(
              a + mise_en_evidence("\\times" + k1),
              b + mise_en_evidence("\\times" + k1)
            )}${signe2}${tex_fraction(
              c + mise_en_evidence("\\times" + k2),
              d + mise_en_evidence("\\times" + k2)
            )}$`;
            texte_corr += `$=${signe1}${tex_fraction(
              a * k1,
              b * k1
            )}${signe2}${tex_fraction(c * k2, d * k2)}$`;
            texte_corr += `$=${tex_fraction(
              signe1 + a * k1 + signe2 + c * k2,
              b * k1
            )}$`;
            a = a * k1;
            c = c * k2;
            d = p;
          } else {
            if (p == d) {
              k1 = d / b; // d = dénominateur commun
              texte_corr += `$=${signe1}${tex_fraction(
                a + mise_en_evidence("\\times" + k1),
                b + mise_en_evidence("\\times" + k1)
              )}${signe2}${tex_fraction(c, d)}$`;
              texte_corr += `$=${signe1}${tex_fraction(
                a * k1,
                d
              )}${signe2}${tex_fraction(c, d)}$`;
              texte_corr += `$=${tex_fraction(
                signe1 + a * k1 + signe2 + c,
                d
              )}$`;
              a = a * k1;
            } else {
              // b=k2*d
              k2 = b / d; // b= dénominateur commun
              texte_corr += `$=${signe1}${tex_fraction(
                a,
                b
              )}${signe2}${tex_fraction(
                c + mise_en_evidence("\\times" + k2),
                d + mise_en_evidence("\\times" + k2)
              )}$`;
              texte_corr += `$=${signe1}${tex_fraction(
                a,
                b
              )}${signe2}${tex_fraction(c * k2, b)}$`;
              texte_corr += `$=${tex_fraction(
                signe1 + a + signe2 + c * k2,
                b
              )}$`;
              c = c * k2;
              d = d * k2;
            }
          }

          if (a != c) {
            e = 0;
            if (signe1 == "") {
              e = a;
            } else {
              e = -a;
            }
            if (signe2 == "+") {
              e += c;
            } else {
              e = e - c;
            }
          } else {
            if (
              (signe1 == "-" && signe2 == "+") ||
              (signe1 == "" && signe2 == "-")
            ) {
              e = 0;
            } else {
              e = 0;
              if (signe1 == "") {
                e = a + c;
              } else {
                e = -a - c;
              }
            }
          }

          texte_corr += `$=${tex_fraction_signe(e, d)}${simplification_de_fraction_avec_etapes(e, d)}$`;
/*          p = pgcd(abs(e), d);
          if (p != 1) {
            f = d / p;
            e = e / p;
            if (e > 0) {
              // fraction positive => pas de signe
              texte_corr += `$=${tex_fraction(
                e + "\\times\\cancel{" + p + "}",
                f + "\\times\\cancel{" + p + "}"
              )}$`;
              texte_corr += `$=${simplification_de_fraction_avec_etapes(e, f)}$`;
            } else {
              // numérateur négatif => signe - devant les fractions suivantes.
              texte_corr += `$=-${tex_fraction(
                -e + "\\times\\cancel{" + p + "}",
                f + "\\times\\cancel{" + p + "}"
              )}$`;
              texte_corr += `$=${simplification_de_fraction_avec_etapes(e, f)}$`;
            }
          }
*/
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
    liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté ",4,
    "1 : Fractions faciles, positives ou non\n2 : Nombres positifs sans piège de priorité\n3 : Deux calculs avec positifs et piège de priorité et deux calculs avec relatifs\n4 : Calculs avec relatifs",
  ];
}

