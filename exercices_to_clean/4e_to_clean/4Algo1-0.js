import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/** 
 * * Dessiner selon un programme scratch
 * * 4Algo1-0
 * @author Sébastien Lozano
 */
export default function Tracer_avec_scratch() {
  'use strict';
  Exercice.call(this); // Héritage de la classe Exercice()
  this.debug = false;
  this.sup = 1;
  if (this.debug) {
    this.nb_questions = 1;
  } else {
    this.nb_questions = 1;
  };

  this.titre = "Dessiner avec scratch";
  //this.consigne = "Dessiner la figure qui va être tracée avec le script fourni.";
  this.consigne = "Laquelle des 4 figures ci-dessous va être tracée avec le script fourni ?";

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;
  //sortie_html? this.spacing = 3 : this.spacing = 2; 
  //sortie_html? this.spacing_corr = 3 : this.spacing_corr = 2;

  this.liste_packages = "scratch3";

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.debug) {
      type_de_questions_disponibles = [1];
    } else {
      type_de_questions_disponibles = [1];
    };

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    //type_de_questions_disponibles=[1];			

    //let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
      // une fonction pour gérer la sortie HTML/LaTeX
      // code est un string contenant le code svg ou tikz
      function scratchblocks_Tikz(code_svg, code_tikz) {
        if (sortie_html) {
          return code_svg;
        } else {
          return code_tikz;
        };
      };

      // une fonction pour dire le nom du polygone
      function myPolyName(n) {
        let sortie = {
          name: ``,
          nameParSommets: ``,
          nb_pas: ``
        };
        switch (n) {
          case 2:
            sortie.name = `segment`;
            sortie.nameParSommets = `AB`;
            sortie.nb_pas = 400;
          case 3:
            sortie.name = `triangle équilatéral`;
            sortie.nameParSommets = `ABC`;
            sortie.nb_pas = 400;
            break;
          case 4:
            sortie.name = `carré`;
            sortie.nameParSommets = `ABCD`;
            sortie.nb_pas = 400;
            break;
          case 5:
            sortie.name = `pentagone régulier`;
            sortie.nameParSommets = `ABCDE`;
            sortie.nb_pas = 300;
            break;
          case 6:
            sortie.name = `hexagone régulier`;
            sortie.nameParSommets = `ABCDEF`;
            sortie.nb_pas = 250;
            break;
          case 7:
            sortie.name = `heptagone régulier`;
            sortie.nameParSommets = `ABCDEFG`;
            sortie.nb_pas = 200;
            break;
          case 8:
            sortie.name = `octogone régulier`;
            sortie.nameParSommets = `ABCDEFGH`;
            sortie.nb_pas = 200;
            break;
          case 9:
            sortie.name = `ennéagone régulier`;
            sortie.nameParSommets = `ABCDEFGHI`;
            sortie.nb_pas = 200;
            break;

        }
        return sortie;
      }


      // on définit le nombre de côtés du polygone régulier
      let n = randint(3, 8, [7]);

      let situations = [
        {//polygones réguliers
          nb_cotes: n,
          nom: myPolyName(n).name,
          code_svg: `
          <pre class='blocks'>
          quand le drapeau vert pressé
          stylo en position d'écriture
          répéter (${n}) fois
            avancer de (${myPolyName(n).nb_pas}) pas
            tourner droite de ((360)/(${n})) degrés
          fin                  
          </pre>          
          `,
          code_tikz: `
          \\begin{scratch}
            \\blockinit{quand \\greenflag est cliqué}
            \\blockpen{stylo en position d’écriture}
            \\blockrepeat{répéter \\ovalnum{${n}} fois}
              {
                \\blockmove{avancer de \\ovalnum{${myPolyName(n).nb_pas}}}
                \\blockmove{tourner \\turnright{} de \\ovaloperator{\\ovalnum{360}/\\ovalnum{${n}}} degrés}
              }
          \\end{scratch}
          `,
          fig: ``,
          fig_corr: ``,
        },
      ];
      // on prépare la fenetre mathalea2d
      let fenetreMathalea2D = { xmin: -4, ymin: -10, xmax: 30, ymax: 2, pixelsParCm: 20, scale: 0.5 }
      //    if (sortie_html) {
      pixelsParCm = 100;
      unitesLutinParCm = 100;
      // } else {
      //   pixelsParCm = 200;
      //   unitesLutinParCm = 200;  
      // }
      // on prépare un tableau avec l'abscisse de démarrage du lutin pour tracer le figures
      // ce tableau permettra de placer aléatoirement la bonne figure et de la refaire en rouge ?
      let tab_abs_dem_lutin2;
      if (n == 6) {
        tab_abs_dem_lutin2 = [0, 3 * myPolyName(n).nb_pas, 6 * myPolyName(n).nb_pas, 9 * myPolyName(n).nb_pas]
      } else if (n == 8) {
        tab_abs_dem_lutin2 = [0, 4 * myPolyName(n).nb_pas, 8 * myPolyName(n).nb_pas, 12 * myPolyName(n).nb_pas]
      } else {
        tab_abs_dem_lutin2 = [0, 2 * myPolyName(n).nb_pas, 4 * myPolyName(n).nb_pas, 6 * myPolyName(n).nb_pas]
      };
      // on mélange tout ça !
      tab_abs_dem_lutin2 = shuffle(tab_abs_dem_lutin2);
      // Les figures de l'énoncé         
      // le lutin2  trace le cadre en pointillés
      let lutin2 = creerLutin();
      lutin2.color = "black";
      lutin2.pointilles = true;
      allerA(fenetreMathalea2D.xmin * pixelsParCm, fenetreMathalea2D.ymax * pixelsParCm, lutin2);
      baisseCrayon(lutin2);
      allerA(fenetreMathalea2D.xmax * pixelsParCm, fenetreMathalea2D.ymax * pixelsParCm, lutin2);
      allerA(fenetreMathalea2D.xmax * pixelsParCm, fenetreMathalea2D.ymin * pixelsParCm, lutin2);
      allerA(fenetreMathalea2D.xmin * pixelsParCm, fenetreMathalea2D.ymin * pixelsParCm, lutin2);
      allerA(fenetreMathalea2D.xmin * pixelsParCm, fenetreMathalea2D.ymax * pixelsParCm, lutin2);
      leveCrayon(lutin2);
      //le lutin2 fait la bonne figure
      lutin2.pointilles = false;
      lutin2.color = "blue";
      allerA(tab_abs_dem_lutin2[0], 0, lutin2);
      baisseCrayon(lutin2);
      for (let k = 1; k < n + 1; k++) {
        avance(myPolyName(n).nb_pas, lutin2);
        tournerD(calcul(360 / n), lutin2);
      };
      // le lutin2 fait un polygone régulier avec un côté de plus 
      leveCrayon(lutin2);
      allerA(tab_abs_dem_lutin2[1], 0, lutin2);
      baisseCrayon(lutin2);
      for (let k = 1; k < n + 1 + 1; k++) {
        avance(myPolyName(n + 1).nb_pas, lutin2);
        tournerD(calcul(360 / (n + 1)), lutin2);
      };

      // le lutin2 fait un polygone régulier avec un côté de moins 
      leveCrayon(lutin2);
      allerA(tab_abs_dem_lutin2[2], 0, lutin2);
      baisseCrayon(lutin2);
      for (let k = 1; k < n; k++) {
        avance(myPolyName(n - 1).nb_pas, lutin2);
        tournerD(calcul(360 / (n - 1)), lutin2);
      };

      // le lutin2 fait une figure ouverte à n côtés
      leveCrayon(lutin2);
      allerA(tab_abs_dem_lutin2[3], 0, lutin2);
      baisseCrayon(lutin2);
      for (let k = 1; k < n + 1; k++) {
        avance(myPolyName(n).nb_pas, lutin2);
        tournerD(calcul((360 / n) - 10), lutin2);
      };
      allerA(tab_abs_dem_lutin2[3], 0, lutin2);

      let mesAppels_enonce = [
        lutin2,
      ]
      situations[0].fig = mathalea2d(
        fenetreMathalea2D,
        mesAppels_enonce
      );

      // les figures de la correction
      // le lutin3  trace le cadre
      let lutin3 = creerLutin();
      lutin3.color = "black";
      lutin3.pointilles = true;
      allerA(fenetreMathalea2D.xmin * pixelsParCm, fenetreMathalea2D.ymax * pixelsParCm, lutin3);
      baisseCrayon(lutin3);
      allerA(fenetreMathalea2D.xmax * pixelsParCm, fenetreMathalea2D.ymax * pixelsParCm, lutin3);
      allerA(fenetreMathalea2D.xmax * pixelsParCm, fenetreMathalea2D.ymin * pixelsParCm, lutin3);
      allerA(fenetreMathalea2D.xmin * pixelsParCm, fenetreMathalea2D.ymin * pixelsParCm, lutin3);
      allerA(fenetreMathalea2D.xmin * pixelsParCm, fenetreMathalea2D.ymax * pixelsParCm, lutin3);
      leveCrayon(lutin3);
      // le lutin3 fait la bonne figure      
      lutin3.pointilles = false;
      lutin3.color = "green"
      allerA(tab_abs_dem_lutin2[0], 0, lutin3);
      baisseCrayon(lutin3);
      for (let k = 1; k < n + 1; k++) {
        avance(myPolyName(n).nb_pas, lutin3);
        tournerD(calcul(360 / n), lutin3);
      };
      // le lutin3 fait un polygone régulier avec un côté de plus 
      lutin3.color = "red";
      leveCrayon(lutin3);
      allerA(tab_abs_dem_lutin2[1], 0, lutin3);
      baisseCrayon(lutin3);
      for (let k = 1; k < n + 1 + 1; k++) {
        avance(myPolyName(n + 1).nb_pas, lutin3);
        tournerD(calcul(360 / (n + 1)), lutin3);
      };

      // le lutin3 fait un polygone régulier avec un côté de moins 
      leveCrayon(lutin3);
      allerA(tab_abs_dem_lutin2[2], 0, lutin3);
      baisseCrayon(lutin3);
      for (let k = 1; k < n; k++) {
        avance(myPolyName(n - 1).nb_pas, lutin3);
        tournerD(calcul(360 / (n - 1)), lutin3);
      };

      // le lutin3 fait une figure ouverte à n côtés
      leveCrayon(lutin3);
      allerA(tab_abs_dem_lutin2[3], 0, lutin3);
      baisseCrayon(lutin3);
      for (let k = 1; k < n + 1; k++) {
        avance(myPolyName(n).nb_pas, lutin3);
        tournerD(calcul((360 / n) - 10), lutin3);
      };
      allerA(tab_abs_dem_lutin2[3], 0, lutin3);

      let mesAppels_corr = [
        lutin3,
      ]
      situations[0].fig_corr = mathalea2d(
        fenetreMathalea2D,
        mesAppels_corr
      );


      let enonces = [];
      enonces.push({
        enonce: `
        ${scratchblocks_Tikz(situations[0].code_svg, situations[0].code_tikz)}
        <br> 
        ${situations[0].fig}
        `,
        question: ``,
        correction: `
        <br> Les figures rouges sont erronées.
        <br> La figure tracée par le programme a ${situations[0].nb_cotes} côtés de même longueur et ${situations[0].nb_cotes} angles de même mesure, c'est un ${situations[0].nom}.
        <br>${texte_en_couleur(`La bonne figure est donc la figure verte.`)}
        <br><br>
        ${situations[0].fig_corr}
        `
      });
      enonces.push({
        enonce: `énoncé type 2`,
        question: ``,
        correction: `${texte_en_couleur(`correction type2`)}`
      });

      switch (liste_type_de_questions[i]) {
        case 1:
          texte = `${enonces[0].enonce}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[0].correction}`;
          };
          break;
        case 2:
          texte = `${enonces[1].enonce}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[1].correction}`;
          };
          break;
      }


      if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);

  }
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
  //this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
}

