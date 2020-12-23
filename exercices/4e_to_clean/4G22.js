import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Problèmes utilisant le théorème de Pythagore ou sa réciproque et des propriétés des quadrilatères particuliers.
 *
 * * Dans un losange, on connait la longueur du côté et une diagonale, il faut calculer l'autre.
 * * Dans un rectangle on connait la longueur et une diagonale, il faut calculer la largeur.
 * * Dans un rectangle on connait la longueur et la largeur, il faut calculer la diagonale.
 * * Est-ce qu'un parallélogramme est un losange ? On peut démontrer que les diagonales sont perpendiculaires ou pas.
 * * Est-ce qu'un parallélogramme est un rectangle ? On peut démontrer qu'il possède un angle droit ou pas .
 * @Auteur Rémi Angot
 * 4G22
 */
export default function Problemes_Pythagore() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Problèmes utilisant le théorème de Pythagore";
  this.consigne = "";
  this.nb_questions = 2;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 1;
  sortie_html ? (this.spacing_corr = 2) : (this.spacing_corr = 1.5);

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let type_de_questions_disponibles;
    if (this.nb_questions >= 5) {
      type_de_questions_disponibles = [
        "losange",
        "rectangle_diagonale_connue",
        "rectangle_diagonale_a_trouver",
        "parallelogramme_est_losange",
        "parallelogramme_n_est_pas_losange",
        "parallelogramme_est_rectangle",
        "parallelogramme_n_est_pas_rectangle",
      ];
    } else {
      type_de_questions_disponibles = [
        "losange",
        "rectangle_diagonale_connue",
        "rectangle_diagonale_a_trouver",
        choice(["parallelogramme_est_losange", "parallelogramme_n_est_pas_losange",]),
        choice(["parallelogramme_est_rectangle",
          "parallelogramme_n_est_pas_rectangle",])
      ];
    }
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    );
    let liste_triplets_pythagoriciens = [
      [3, 4, 5],
      [5, 12, 13],
      [6, 8, 10],
      [7, 24, 25],
      [8, 15, 17],
      [9, 12, 15],
      [9, 40, 41],
      [10, 24, 26],
      [11, 60, 61],
      [12, 16, 20],
      [12, 35, 37],
      [13, 84, 85],
      [14, 48, 50],
      [15, 20, 25],
      [15, 36, 39],
      [16, 30, 34],
      [16, 63, 65],
      [18, 24, 30],
      [18, 80, 82],
      [20, 21, 29],
      [20, 48, 52],
      [21, 28, 35],
      [21, 72, 75],
      [24, 32, 40],
      [24, 45, 51],
      [24, 70, 74],
      [25, 60, 65],
      [27, 36, 45],
      [28, 45, 53],
      [28, 96, 100],
      [30, 40, 50],
      [30, 72, 78],
      [32, 60, 68],
      [33, 44, 55],
      [33, 56, 65],
      [35, 84, 91],
      [36, 48, 60],
      [36, 77, 85],
      [39, 52, 65],
      [39, 80, 89],
      [40, 42, 58],
      [40, 75, 85],
      [42, 56, 70],
      [45, 60, 75],
      [48, 55, 73],
      [48, 64, 80],
      [51, 68, 85],
      [54, 72, 90],
      [57, 76, 95],
      [60, 63, 87],
      [60, 80, 100],
      [65, 72, 97],
    ];
    let liste_noms_quadrilateres = ["L", "M", "N", "O"]; // pour que le O ne soit pas une des 4 lettres
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      let nom_quadrilatere = creerNomDePolygone(4, liste_noms_quadrilateres);
      liste_noms_quadrilateres.push(nom_quadrilatere);
      let A = nom_quadrilatere[0];
      let B = nom_quadrilatere[1];
      let C = nom_quadrilatere[2];
      let D = nom_quadrilatere[3];
      let O = `O`;
      let triplet = choice(liste_triplets_pythagoriciens);
      enleve_element(liste_triplets_pythagoriciens, triplet); // Supprime le triplet pour les prochaines questions
      let a = triplet[0];
      let b = triplet[1];
      let c = triplet[2];
      if (
        liste_type_de_questions[i] == "parallelogramme_n_est_pas_losange" ||
        liste_type_de_questions[i] == "parallelogramme_n_est_pas_rectangle"
      ) {
        c += randint(-3, 3, [0]); // on change la valeur de c
        while (a ** 2 + b ** 2 == c ** 2) {
          // si par hasard (est-ce possible ?) on retombe sur un triplet pythagoricien on change les valeurs
          c += randint(-3, 3, [0]); // on change la valeur de c
          b += randint(-3, 3, [0]); // on change la valeur de b
        }
      }
      if (a > 9 && choice([true, true, true, false])) {
        //le plus souvent on utilise des décimaux
        a = calcul(a / 10);
        b = calcul(b / 10);
        c = calcul(c / 10);
      }

      switch (liste_type_de_questions[i]) {
        case "losange":
          texte = `$${nom_quadrilatere}$ est un losange de centre $O$ tel que $${A + B
            }=${tex_nombre(c)}$ cm et $${A + C}=${tex_nombre(2 * a)}$ cm.<br>`;
          texte += `Calculer $${D + B}$.`;

          if (sortie_html) {
            texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><g id=""/><g/><g id=""/><g id=""/><g/><g id=""/><g id=""/><g id="mtg32svg#6"/><text x="185.5" y="32.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><text x="220.5" y="134.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><line x1="190.5" y1="43.44" x2="216.5" y2="129.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="144.54431444308477" y="133.14525664249953" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="190.5" y1="43.44" x2="163.54431444308477" y2="129.14525664249953" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="183.54431444308474" y="234.14525664249953" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><line x1="216.5" y1="129.44" x2="189.54431444308474" y2="215.14525664249953" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="189.54431444308474" y1="215.14525664249953" x2="163.54431444308477" y2="129.14525664249953" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><g  id=""><line x1="208.86483613904568" y1="86.9074753482156" x2="199.2927218660596" y2="89.80137036097884" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="207.7072781339404" y1="83.07862963902116" x2="198.13516386095432" y2="85.9725246517844" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><g  id=""><line x1="207.19175809011574" y1="175.70062312711323" x2="197.652449829911" y2="172.70035681946817" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="208.39186461317377" y1="171.88489982303136" x2="198.85255635296903" y2="168.8846335153863" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><g  id=""><line x1="171.1794783040391" y1="171.67778129428393" x2="180.75159257702518" y2="168.78388628152072" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="172.33703630914437" y1="175.50662700347834" x2="181.90915058213045" y2="172.61273199071513" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><g  id=""><line x1="181.19175809011574" y1="89.70062312711323" x2="171.652449829911" y2="86.7003568194682" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="182.39186461317377" y1="85.88489982303133" x2="172.85255635296903" y2="82.8846335153863" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><text x="176.02215722154236" y="144.29262832124977" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text><g  id=""><line x1="198.79500694133887" y1="129.34145667941502" x2="198.84383529950412" y2="120.56860695961849" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(255,0,0);"/><line x1="190.0709855797076" y1="120.51977860145324" x2="198.84383529950412" y2="120.56860695961849" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(255,0,0);"/></g><line x1="190.5" y1="43.44" x2="190.02215722154236" y2="129.29262832124977" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="190.02215722154236" y1="129.29262832124977" x2="189.54431444308474" y2="215.14525664249953" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="190.02215722154236" y1="129.29262832124977" x2="163.54431444308477" y2="129.14525664249953" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="190.02215722154236" y1="129.29262832124977" x2="216.5" y2="129.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g  id=""><line x1="193.7768798113023" y1="89.9214712483418" x2="186.74527741024002" y2="82.81115707290796" style="stroke-width:1;stroke:rgb(255,0,0);" /><line x1="186.70592152305426" y1="89.88211536115601" x2="193.81623569848807" y2="82.85051296009375" style="stroke-width:1;stroke:rgb(255,0,0);" /></g><g  id=""><line x1="193.2990370328447" y1="175.77409956959156" x2="186.2674346317824" y2="168.66378539415774" style="stroke-width:1;stroke:rgb(255,0,0);" /><line x1="186.22807874459664" y1="175.7347436824058" x2="193.33839292003046" y2="168.7031412813435" style="stroke-width:1;stroke:rgb(255,0,0);" /></g><g  id=""><line x1="176.75540701760488" y1="134.21886503698207" x2="176.81106464702222" y2="124.21901992676723" style="stroke-width:1;stroke:rgb(255,0,0);" /></g><g  id=""><line x1="203.28890742547983" y1="124.36639160551746" x2="203.2332497960625" y2="134.3662367157323" style="stroke-width:1;stroke:rgb(255,0,0);" /></g></svg></p>`;
          } else {
            texte_corr = ``;
          }
          texte_corr += `$${nom_quadrilatere}$ est un losange donc ses diagonales se coupent en leur milieu : $${A + O
            }=${A + C}\\div2=${tex_nombre(2 * a)}\\div2=${tex_nombre(
              a
            )}$ cm.<br>`;
          texte_corr += `On sait que les diagonales d'un losange se coupent perpendiculairement donc $${A + O + C
            }$ est un triangle rectangle en $O$.<br>`;
          texte_corr += `D'après le théorème de Pythagore, on a : $${A + O}^2+${O + B
            }^2=${A + B}^2$.<br>`;
          texte_corr += `Donc $${O + B}^2=${A + B}^2-${A + O}^2=${tex_nombre(
            c
          )}^2-${tex_nombre(a)}^2=${tex_nombrec(b ** 2)}$.<br>`;
          texte_corr += `On a alors $${O + B}=\\sqrt{${tex_nombrec(
            b ** 2
          )}}=${tex_nombre(b)}$ cm.<br>`;
          texte_corr += `Finalement comme $O$ est aussi le milieu de $[${D + B
            }]$ : $${D + B}=2\\times ${O + B}=2\\times${tex_nombre(
              b
            )}=${tex_nombrec(2 * b)}$ cm.`;
          break;

        case "rectangle_diagonale_connue":
          texte = `$${nom_quadrilatere}$ est un rectangle tel que $${A + B
            }=${tex_nombre(a)}$ cm et $${A + C}=${tex_nombre(c)}$ cm.<br>`;
          texte += `Calculer $${B + C}$.`;
          if (sortie_html) {
            texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><g id=""/><g/><g id=""/><g id=""/><g/><g id=""/><g id=""/><g id=""/><text x="113.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="276.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><g id=""/><g id=""/><text x="276.5" y="138.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><text x="111.5" y="141.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><polygon points="126.500,53.440 272.500,53.440 272.500,124.440 126.500,124.440 " style="stroke-width:1;stroke:rgb(0,0,0);fill:none"  id=""/><g  id=""><line x1="142.5" y1="53.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="126.5" y1="69.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="272.5" y1="69.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="256.5" y1="53.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="256.5" y1="124.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="272.5" y1="108.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="126.5" y1="108.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="142.5" y1="124.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><line x1="126.5" y1="53.44" x2="272.5" y2="124.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/></svg></svg></p>`;
          } else {
            texte_corr = ``;
          }
          texte_corr += `$${nom_quadrilatere}$ est un rectangle donc il possède 4 angles droits et $${A + B + C
            }$ est un triangle rectangle en $${B}$.<br>`;
          texte_corr += `D'après le théorème de Pythagore, on a : $${A + B}^2+${B + C
            }^2=${A + C}^2$.<br>`;
          texte_corr += `Donc $${B + C}^2=${A + C}^2-${A + B}^2=${tex_nombre(
            c
          )}^2-${tex_nombre(a)}^2=${tex_nombre(b ** 2)}$.<br>`;
          texte_corr += `Finalement, $${B + C}=\\sqrt{${tex_nombrec(
            b ** 2
          )}}=${tex_nombre(b)}$ cm.`;
          break;

        case "rectangle_diagonale_a_trouver":
          texte = `$${nom_quadrilatere}$ est un rectangle tel que $${A + B
            }=${tex_nombre(a)}$ cm et $${B + C}=${tex_nombre(b)}$ cm.<br>`;
          texte += `Calculer $${A + C}$.`;
          if (sortie_html) {
            texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><g id=""/><g/><g id=""/><g id=""/><g/><g id=""/><g id=""/><g id=""/><text x="113.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="276.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><g id=""/><g id=""/><text x="276.5" y="138.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><text x="111.5" y="141.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><polygon points="126.500,53.440 272.500,53.440 272.500,124.440 126.500,124.440 " style="stroke-width:1;stroke:rgb(0,0,0);fill:none"  id=""/><g  id=""><line x1="142.5" y1="53.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="126.5" y1="69.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="272.5" y1="69.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="256.5" y1="53.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="256.5" y1="124.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="272.5" y1="108.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="126.5" y1="108.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="142.5" y1="124.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><line x1="126.5" y1="53.44" x2="272.5" y2="124.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/></svg></svg></p>`;
          } else {
            texte_corr = ``;
          }
          texte_corr += `$${nom_quadrilatere}$ est un rectangle donc il possède 4 angles droits et $${A + B + C
            }$ est un triangle rectangle en $${B}$.<br>`;
          texte_corr += `D'après le théorème de Pythagore, on a : $${A + C}^2=${A + B
            }^2+${B + C}^2=${tex_nombrec(a)}^2+${tex_nombrec(b)}^2=${tex_nombrec(
              c ** 2
            )}$.<br>`;
          texte_corr += `Finalement, $${A + C}=\\sqrt{${tex_nombrec(
            c ** 2
          )}}=${tex_nombre(c)}$ cm.`;
          break;

        case "parallelogramme_est_losange":
          texte = `$${nom_quadrilatere}$ est un parallélogramme de centre $O$ tel que $${A + O
            }=${tex_nombre(a)}$ cm, $${A + B}=${tex_nombre(c)}$ cm et $${B + O
            }=${tex_nombre(b)}$ cm.<br>`;
          texte += `$${nom_quadrilatere}$ est-il un losange ?`;
          if (sortie_html) {
            texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`;
          } else {
            texte_corr = ``;
          }
          texte_corr += `Dans le triangle $${A + O + B
            }$, le plus grand côté est $[${A + B}]$.<br>`;
          texte_corr += `$${A + B}^2=${tex_nombre(c)}^2=${tex_nombrec(
            c ** 2
          )}$<br>`;
          texte_corr += `$${A + O}^2+${O + B}^2=${tex_nombre(a)}^2+${tex_nombre(
            b
          )}^2=${tex_nombrec(a ** 2 + b ** 2)}$<br>`;
          texte_corr += `On constate que $${A + B}^2=${A + O}^2+${O + B
            }^2$, l'égalité de Pythagore est vérifiée donc $${A + O + B
            }$ est rectangle en $O$.<br>`;
          texte_corr += `Finalement, comme $${nom_quadrilatere}$ est un parallélogramme qui a ses diagonales perpendiculaires alors c'est aussi un losange.`;
          break;

        case "parallelogramme_n_est_pas_losange":
          texte = `$${nom_quadrilatere}$ est un parallélogramme de centre $O$ tel que $${A + O
            }=${tex_nombre(a)}$ cm, $${A + B}=${tex_nombre(c)}$ cm et $${B + O
            }=${tex_nombre(b)}$ cm.<br>`;
          texte += `$${nom_quadrilatere}$ est-il un losange ?`;
          if (sortie_html) {
            texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`;
          } else {
            texte_corr = ``;
          }
          texte_corr += `Dans le triangle $${A + O + B
            }$, le plus grand côté est $[${A + B}]$.<br>`;
          texte_corr += `$${A + B}^2=${tex_nombre(c)}^2=${tex_nombrec(
            c ** 2
          )}$<br>`;
          texte_corr += `$${A + O}^2+${O + B}^2=${tex_nombre(a)}^2+${tex_nombre(
            b
          )}^2=${tex_nombrec(a ** 2 + b ** 2)}$<br>`;
          texte_corr += `On constate que $${A + B}^2\\not=${A + O}^2+${O + B
            }^2$, l'égalité de Pythagore n'est pas vérifiée donc $${A + O + B
            }$ n'est pas un triangle rectangle.<br>`;
          texte_corr += `Si $${nom_quadrilatere}$ était un losange alors ses diagonales devraient être perpendiculaires et $${A + O + B
            }$ devrait être un triangle rectangle.<br>`;
          texte_corr += `Finalement comme $${A + O + B
            }$ n'est pas un triangle rectangle, $${nom_quadrilatere}$ n'est pas un losange.`;
          break;

        case "parallelogramme_est_rectangle":
          texte = `$${nom_quadrilatere}$ est un parallélogramme de centre $O$ tel que $${A + B
            }=${tex_nombre(a)}$ cm, $${A + C}=${tex_nombre(c)}$ cm et $${B + C
            }=${tex_nombre(b)}$ cm.<br>`;
          texte += `$${nom_quadrilatere}$ est-il un rectangle ?`;
          if (sortie_html) {
            texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`;
          } else {
            texte_corr = ``;
          }
          texte_corr += `Dans le triangle $${A + B + C
            }$, le plus grand côté est $[${A + C}]$.<br>`;
          texte_corr += `$${A + C}^2=${tex_nombre(c)}^2=${tex_nombrec(
            c ** 2
          )}$<br>`;
          texte_corr += `$${A + B}^2+${B + C}^2=${tex_nombre(a)}^2+${tex_nombre(
            b
          )}^2=${tex_nombrec(a ** 2 + b ** 2)}$<br>`;
          texte_corr += `On constate que $${A + C}^2=${A + B}^2+${B + C
            }^2$, l'égalité de Pythagore est vérifiée donc $${A + B + C
            }$ est rectangle en $${B}$.<br>`;
          texte_corr += `Finalement, comme $${nom_quadrilatere}$ est un parallélogramme qui a un angle droit en $${B}$ alors c'est aussi un rectangle.`;
          break;

        case "parallelogramme_n_est_pas_rectangle":
          texte = `$${nom_quadrilatere}$ est un parallélogramme de centre $O$ tel que $${A + B
            }=${tex_nombre(a)}$ cm, $${A + C}=${tex_nombre(c)}$ cm et $${B + C
            }=${tex_nombre(b)}$ cm.<br>`;
          texte += `$${nom_quadrilatere}$ est-il un rectangle ?`;
          if (sortie_html) {
            texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`;
          } else {
            texte_corr = ``;
          }
          texte_corr += `Dans le triangle $${A + B + C
            }$, le plus grand côté est $[${A + C}]$.<br>`;
          texte_corr += `$${A + C}^2=${tex_nombre(c)}^2=${tex_nombrec(
            c ** 2
          )}$<br>`;
          texte_corr += `$${A + B}^2+${B + C}^2=${tex_nombre(a)}^2+${tex_nombre(
            b
          )}^2=${tex_nombrec(a ** 2 + b ** 2)}$<br>`;
          texte_corr += `On constate que $${A + C}^2\\not=${A + B}^2+${B + C
            }^2$, l'égalité de Pythagore n'est pas vérifiée donc $${A + B + C
            }$ n'est pas rectangle en $${B}$.<br>`;
          texte_corr += `Finalement, comme $${nom_quadrilatere}$ n'a pas d'angle droit en $${B}$ ce n'est pas un rectangle.`;
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
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

