import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Exercice sur la notion de proportionnalité (ou pas)
 * @Auteur Jean-Claude Lhote
 * référence 6P10
 */
export default function Proportionnalite_pas_proportionnalite() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Reconnaître une situation de proportionnalité";
  this.consigne = "Répondre aux questions posées en justifiant";
  sortie_html ? this.spacing = 1.5 : this.spacing = 1.4;
  sortie_html ? this.spacing_corr = 1.5 : this.spacing_corr = 1;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;
  this.nb_cols = 1;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_index_disponibles = [0, 1, 2, 3, 4];
    let liste_index = combinaison_listes(
      liste_index_disponibles,
      this.nb_questions
    );
    let liste_choix_disponibles = [1, 2, 3, 4, 5, 6];
    let liste_choix = combinaison_listes(
      liste_choix_disponibles,
      this.nb_questions
    );
    let liste_de_lieux = [
      "dans un magasin de bricolage",
      "dans une animalerie",
      "au supermarché local",
      "à l'épicerie",
      "dans la boutique du musée",
    ];
    let liste_de_choses = [[]];
    let liste_de_prix_unit = [[]];
    let tirages = [[]];
    let index3 = [];
    let villes = ["Moscou", "Berlin", "Paris", "Bruxelles", "Rome", "Belgrade"];
    let verbes = [
      "double",
      "triple",
      "quadruple",
      "est multiplié par 5",
      "est multiplié par 6",
    ];
    liste_de_choses[0] = [
      "articles",
      "outils",
      "accessoires",
      "pièces d'outillage",
      "pinceaux",
      "ampoules",
      "tournevis",
      "spatules",
      "raccords de tuyaux",
    ];
    liste_de_choses[1] = [
      "poissons rouges",
      "canetons",
      "perruches",
      "phasmes",
      "colliers anti-puces",
      "souris",
      "lapereaux",
      "paquets de graines",
    ];
    liste_de_choses[2] = [
      "sets de tables",
      "verres",
      "assiettes",
      "os à macher",
      "dosettes de café",
      "packs de lait",
      "paquets de pâtes",
    ];
    liste_de_choses[3] = [
      "mangues",
      "ananas",
      "fruits de la passion",
      "melons",
      "paquets de madeleines de Commercy",
      "bergamottes",
      "bredeles",
      "pots de cancoillotte",
    ];
    liste_de_choses[4] = [
      "cartes",
      "livres",
      "gravures",
      "puzzles",
      "maquettes",
      "roches",
      "jeux de société",
    ];
    liste_de_prix_unit[0] = [5, 4, 1.25, 3, 0.5, 1.5, 2, 6, 4.5];
    liste_de_prix_unit[1] = [1.5, 7, 20, 2.5, 25, 2, 15, 8];
    liste_de_prix_unit[2] = [1.25, 1.5, 2, 0.5, 5, 4.5, 3];
    liste_de_prix_unit[3] = [2, 2.5, 1.25, 1.5, 4, 7, 12, 3];
    liste_de_prix_unit[4] = [0.5, 5, 7, 13.5, 10, 15, 20];

    for (
      let i = 0,
      x,
      y,
      z,
      pu,
      n,
      p,
      somme,
      prenoms,
      index1,
      index2,
      objet,
      met,
      choix,
      texte,
      texte_corr,
      cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_choix[i]) {
        case 1:
          index1 = liste_index[i];
          prenoms = [prenomF(), prenomM()];
          index2 = randint(0, liste_de_choses[index1].length - 1);
          objet = liste_de_choses[index1][index2];
          pu =
            liste_de_prix_unit[index1][index2] *
            (1 + randint(1, 2) * 0.2 * randint(-1, 1));
          y = randint(2, 5);
          somme = calcul(y * pu, 2);
          p = y * randint(2, 5);
          z = calcul(p * pu, 2);
          texte = `${prenoms[0]} achète ${liste_de_lieux[index1]} des ${objet}. `;
          texte += `Elle  repart avec ${y} ${objet} pour $${tex_prix(
            somme
          )}$€. ${prenoms[1]
            } achète quant à lui, au même endroit ${p} ${objet} pour $${tex_prix(
              z
            )}$€.<br>`;
          texte += `Le prix des ${objet} est-il proportionnel à la quantité achetée  ?<br>`;
          texte_corr = `${prenoms[0]} dépense $${mise_en_evidence(
            tex_prix(somme),
            "blue"
          )}$€.<br>`;
          texte_corr = `${prenoms[1]} a acheté  $${mise_en_evidence(
            tex_nombre(p / y)
          )}$ fois la quantité des ${objet} achetée par ${prenoms[0]
            } pour $${mise_en_evidence(
              tex_prix(somme),
              "blue"
            )}$€.<br>Il a payé $${tex_prix(z)}$€ $=${mise_en_evidence(
              tex_nombrec(p / y)
            )}\\times${mise_en_evidence(tex_prix(somme), "blue")}$€.<br>`;
          texte_corr += `A l'aide de ces données, on constate que le prix des ${objet} et leur quantité sont tous les deux multipliés par le même nombre, donc ces deux grandeurs sont proportionnelles.<br>`;
          break;
        case 2:
          index1 = liste_index[i];
          prenoms = [prenomF(), prenomM()];
          index2 = randint(0, liste_de_choses[index1].length - 1);
          objet = liste_de_choses[index1][index2];
          pu =
            liste_de_prix_unit[index1][index2] *
            (1 + randint(1, 2) * 0.2 * randint(-1, 1));
          y = randint(2, 5);
          somme = calcul(y * pu, 2);
          pu -= 0.1;
          p = y * randint(2, 5);
          z = calcul(p * pu, 2);
          texte = `${prenoms[0]} achète ${liste_de_lieux[index1]} des ${objet}. `;
          texte += `Elle a obtenu ${y} ${objet} pour $${tex_prix(somme)}$€. ${prenoms[1]
            } achète quant à lui, au même endroit ${p} ${objet} pour $${tex_prix(
              z
            )}$€.<br>`;
          texte += `Le prix des ${objet} est-il proportionnel à la quantité achetée  ?<br>`;
          texte_corr = `${prenoms[0]} dépense $${mise_en_evidence(
            tex_prix(somme),
            "blue"
          )}$€.<br>`;
          texte_corr = `${prenoms[1]} a acheté  $${mise_en_evidence(
            tex_nombrec(p / y)
          )}$ fois la quantité des ${objet} achetée par ${prenoms[0]
            } pour $${mise_en_evidence(
              tex_prix(somme),
              "blue"
            )}$€.<br>Il a payé $${tex_prix(z)}$€.<br>Mais $${mise_en_evidence(
              tex_nombrec(p / y)
            )}\\times${mise_en_evidence(tex_prix(somme), "blue")}$€ $=${tex_prix(
              calcul((p * somme) / y)
            )}$€.<br>`;
          texte_corr += `À l'aide de ces données, on constate que le prix unitaire des ${objet} n'est pas le même pour ${prenoms[0]} qui en a acheté $${y}$ que pour ${prenoms[1]} qui en a acheté ${p}, donc ces deux grandeurs ne sont pas proportionnelles.<br>`;
          break;
        case 3:
          prenoms = [prenomF(), prenomM()];
          x = randint(5, 20);
          y = randint(5, 20, x) * 100;
          x = x * 100;
          n = arrondi(calcul((x / 60) * (1 + randint(0, 2) * 0.2)), 0);
          p = arrondi(calcul((y / 60) * (1 + randint(0, 2) * 0.2)), 0);
          index1 = calcul(x / n); //vitesse fille
          index2 = calcul(y / p); //vitesse garçon

          texte = `${prenoms[0]} habite à $${tex_nombre(x)}$ m du collège. Elle met ${n} minutes pour s'y rendre depuis chez elle.<br>`;
          texte += `${prenoms[1]}, lui, habite à $${tex_nombre(y)}$ m du collège. Il met ${p} minutes pour s'y rendre depuis chez lui.<br>`;
          texte += `Le temps mis pour venir au collège est-il proportionnel à la distance du foyer au collège ?<br>`;
          texte_corr = `${prenoms[0]} parcourt chaque minute environ $${tex_nombrec(arrondi(index1, 1))}$ m.<br>`;
          texte_corr += `${prenoms[1]
            } parcourt chaque minute environ $${tex_nombrec(arrondi(index2, 1))}$ m.<br>`;
          if (index1 == index2)
            texte_corr += `Pour ces deux élèves le temps mis et la distance parcourue sont proportionnelles (si l'on compare leur vitesse moyenne)`;
          else
            texte_corr += `Pour ces deux élèves le temps mis et la distance parcourue ne sont pas proportionnelles (si l'on compare leur vitesse moyenne).<br>`;
          break;
        case 4:
          prenoms = [prenomF(), prenomM()];
          x = randint(5, 20);
          y = x + randint(25, 35);
          texte = `${prenoms[0]} vient d'avoir ${x} ans cette année. Son père ${prenoms[1]} vient de fêter  son ${y}ème anniversaire.<br>`;
          texte += `L'âge de son père est-il proportionnel à l'âge de ${prenoms[0]} ?<br>`;
          texte_corr = `Aujourd'hui la différence d'âge entre ${prenoms[0]
            } et ${prenoms[1]} est de ${y - x} ans.<br>`;
          texte_corr += `Dans ${x} années, ${prenoms[0]} aura ${2 * x
            } ans, c'est à dire le double d'aujourd'hui.<br>`;
          texte_corr += `Son père ${prenoms[1]} aura ${x + y
            } ans cette année-là.<br>Quand l'âge de ${prenoms[0]
            } double, l'âge de ${prenoms[1]} ne double pas, donc l'âge de ${prenoms[0]
            } et l'âge de son père ne sont pas propotionnels.<br>`;
          break;
        case 5:
          index1 = randint(0, 5);
          index2 = randint(0, 4);
          texte = `Une épidémie se répand dans la ville de ${villes[index1]}.<br>`;
          texte += `Le nombre de malades ${verbes[index2]} tous les ${index2 + 2
            } jours.<br>`;
          texte += `Le nombre de malades est-il proportionnel au nombre de jours passés depuis le début de l'épidémie ?<br>`;
          texte_corr = `Admettons qu'il y ait 10 malades le premier jour. Le ${1 + 2 + index2
            }ème jour il y aura $10 \\times ${index2 + 2} = ${10 * (index2 + 2)
            }$ malades.<br>`;
          texte_corr += `Entre le premier jour et le ${3 + index2
            }ème jour, le nombre de malades est multiplié par ${index2 + 2
            } mais le nombre de jours est multiplié par ${3 + index2}.<br>`;
          texte_corr += `Donc le nombre de malades n'est pas proportionnel au nombre de jours passés.<br>`;
          break;
        case 6:
          prenoms = [prenomF(), prenomM()];
          index1 = randint(0, 5);
          objet = liste_de_choses[4][index1];
          index2 = randint(0, 4);
          pu =
            liste_de_prix_unit[4][index1] *
            (1 + randint(1, 2) * 0.2 * randint(-1, 1));
          n = randint(2, 6);
          p = randint(0, 3);
          tirages[0] = [n, n * pu];
          tirages[1] = [n + 1, (n + 1) * pu];
          tirages[2] = [2 * n + 1, (2 * n + 1) * pu];
          tirages[3] = [3 * n + 3, (3 * n + 3) * pu];
          met = choice([true, false]);
          if (!met) tirages[p][1] -= 0.1;
          texte = `${prenoms[1]} relève les prix des ${objet} sur un catalogue par correspondance en fonction de la quantité saisie dans le panier<br>`;
          texte += `Il note les prix dans le tableau suivant :<br> <br>`;
          texte += `$\\def\\arraystretch{1.5}\\begin{array}{|c`; // construction du tableau des effectifs en un seul morceau
          for (let j = 0; j <= tirages.length; j++) texte += `|c`;
          texte += `|}\\hline  \\text{${objet}}`;
          for (let j = 0; j < tirages.length; j++) texte += `&${tirages[j][0]}`;
          texte += `\\\\\\hline \\text{Prix (en €})`;
          for (let j = 0; j < tirages.length; j++)
            texte += `&${tex_prix(arrondi(tirages[j][1], 2))}`;
          texte += `\\\\\\hline\\end{array}$<br> <br>`;
          texte += `Le prix des ${objet} est-il proportionnel à la quantité achetée ?<br>`;
          texte_corr = `Il faut calculer le prix unitaire des ${objet} dans chaque cas de figure :<br><br>`;
          if (met) index3 = range(3);
          else index3 = range(3, [p]);
          texte_corr += `$`;
          for (let j = 0; j < index3.length; j++) {
            texte_corr += `\\dfrac{${tex_prix(
              arrondi(tirages[index3[j]][1], 2)
            )}}{${tirages[index3[j]][0]}}=`;
          }
          texte_corr += `${tex_prix(pu)}$<br><br>`;
          if (!met) {
            texte_corr += `Mais $\\dfrac{${tex_prix(
              arrondi(tirages[p][1], 2)
            )}}{${tirages[p][0]}}=${tex_prix(
              arrondi(calcul(tirages[p][1] / tirages[p][0]), 2)
            )}$€/${objet.substring(0, objet.length - 1)}<br>`;
            texte_corr += `Le prix des ${objet} n'est pas proportionnel à leur nombre.<br>`;
          } else {
            texte_corr += `Le prix des ${objet} est bien proportionnel à leur nombre.<br>`;
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
    liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
  };
}

