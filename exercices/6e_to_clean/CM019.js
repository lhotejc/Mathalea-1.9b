import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * @Auteur Jean-Claude Lhote
 * @param {number} min Valeur minimum pour la solution
 * @param {number} max Valeur maximum pour la solution
 * Cette fonction produit aléatoirement un tirage de 5 nombres, une solution, un tableau contenant les calculs successifs, une chaine contenant l'expression mathador correspondante
 * @returns {array} [tirage=[a,b,c,d,e],solution (compris entre min et max),operations_successives=[string1,string2,string3,string4,string5],expression]
 * les string1 à 5 ainsi que l'expresion sont ) mettre en mode maths.
 * sert dans les exercices CM019,
 */
export default function Trouver_solution_mathador(
  min,
  max,
  A = 1,
  B = 4,
  C = 8,
  D = 3,
  E = 5
) {
  let eureka,
    a,
    b,
    c,
    d,
    e,
    tirage,
    nombres_restants,
    operations_restantes,
    expression_en_cours_f,
    expression_en_cours_d,
    op,
    part1_f,
    part2_f,
    part1_d,
    part2_d,
    operations_successives = [],
    solution;
  let liste_choix = [
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  eureka = false;
  let nb_determines = arguments.length - 2;
  while (eureka == false) {
    tirage = [];

    if (nb_determines < 1) a = parseInt(choice(liste_choix));
    else a = A;
    if (nb_determines < 2)
      b = parseInt(choice(liste_choix, [13, 14, 15, 16, 17, 18, 19, 20, a]));
    else b = B;
    if (nb_determines < 3)
      c = parseInt(
        choice(liste_choix, [12, 13, 14, 15, 16, 17, 18, 19, 20, a, b])
      );
    else c = C;
    if (nb_determines < 4)
      d = parseInt(
        choice(liste_choix, [12, 13, 14, 15, 16, 17, 18, 19, 20, b, c])
      );
    else d = D;
    if (nb_determines < 5)
      e = parseInt(choice(liste_choix, [12, 13, 14, 15, 16, 17, 18, 19, 20]));
    else e = E;
    tirage.push(a, b, c, d, e);
    nombres_restants = shuffle(tirage);
    operations_restantes = ["\\times", "+", "-", "\\div"];
    operations_restantes = shuffle(operations_restantes);
    expression_en_cours_f = [
      `${nombres_restants[0]}`,
      `${nombres_restants[1]}`,
      `${nombres_restants[2]}`,
      `${nombres_restants[3]}`,
      `${nombres_restants[4]}`,
    ];
    expression_en_cours_d = [
      `${nombres_restants[0]}`,
      `${nombres_restants[1]}`,
      `${nombres_restants[2]}`,
      `${nombres_restants[3]}`,
      `${nombres_restants[4]}`,
    ];

    while (nombres_restants.length > 1) {
      b = nombres_restants.pop();
      a = nombres_restants.pop();
      part2_f = expression_en_cours_f.pop();
      part1_f = expression_en_cours_f.pop();
      part2_d = expression_en_cours_d.pop();
      part1_d = expression_en_cours_d.pop();

      op = operations_restantes.pop();
      if (op == "\\times") {
        c = a * b;
        expression_en_cours_f.push(`${part1_f}${op}${part2_f}`);
        expression_en_cours_d.push(`${part1_d}${op}${part2_d}`);
        nombres_restants.push(c);
      } else if (op == "\\div") {
        if (a % b == 0) {
          c = a / b;
          if (part1_f[0] == "\\") {
            part1_f = part1_f.substring(6, part1_f.length);
            part1_f = part1_f.substring(0, part1_f.length - 7);
          }
          if (part2_f[0] == "\\") {
            part2_f = part2_f.substring(6, part2_f.length);
            part2_f = part2_f.substring(0, part2_f.length - 7);
          }
          expression_en_cours_f.push(`\\dfrac{${part1_f}}{${part2_f}}`);
          expression_en_cours_d.push(`${part1_d}${op}${part2_d}`);
          nombres_restants.push(c);
        } else break;
      } else if (op == "-") {
        if (a > b) {
          c = a - b;
          expression_en_cours_f.push(
            `\\left(${part1_f}${op}${part2_f}\\right)`
          );
          expression_en_cours_d.push(
            `\\left(${part1_d}${op}${part2_d}\\right)`
          );
          nombres_restants.push(c);
        } else break;
      } else if (op == "+") {
        c = a + b;
        if (part2_f.substring(0, 2) == "\\l") {
          part2_f = part2_f.substring(6, part2_f.length);
          part2_f = part2_f.substring(0, part2_f.length - 7);
        }
        expression_en_cours_f.push(`\\left(${part1_f}${op}${part2_f}\\right)`);
        if (part2_d.substring(0, 2) == "\\l") {
          part2_d = part2_d.substring(6, part2_d.length);
          part2_d = part2_d.substring(0, part2_d.length - 7);
        }
        expression_en_cours_d.push(`\\left(${part1_d}${op}${part2_d}\\right)`);
        nombres_restants.push(c);
      }
      operations_successives.push(`${a}` + op + `${b}=${c}`);
    }

    if (nombres_restants.length == 1 && operations_restantes.length == 0) {
      solution = nombres_restants[0];
      if (solution >= min && solution <= max) {
        eureka = true;
        if (
          expression_en_cours_f[0][0] == "\\" &&
          expression_en_cours_f[0][1] == `l`
        ) {
          expression_en_cours_f[0] = expression_en_cours_f[0].substring(
            6,
            expression_en_cours_f[0].length
          );
          expression_en_cours_f[0] = expression_en_cours_f[0].substring(
            0,
            expression_en_cours_f[0].length - 7
          );
        }
        if (
          expression_en_cours_d[0][0] == "\\" &&
          expression_en_cours_d[0][1] == `l`
        ) {
          expression_en_cours_d[0] = expression_en_cours_d[0].substring(
            6,
            expression_en_cours_d[0].length
          );
          expression_en_cours_d[0] = expression_en_cours_d[0].substring(
            0,
            expression_en_cours_d[0].length - 7
          );
        }
        return [
          tirage,
          solution,
          operations_successives,
          expression_en_cours_f,
          expression_en_cours_d,
        ];
      } else operations_successives = [];
    } else operations_successives = [];
  }
}
