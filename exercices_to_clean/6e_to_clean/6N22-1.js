import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/** 
 * * Exprimer un rapport de longueurs sur un segment
 * * 6N22-1
 * @author Sébastien Lozano
 */

export default function Rapports_sur_un_segment() {
  'use strict';
  Exercice.call(this); // Héritage de la classe Exercice()
  this.beta = false;
  this.sup = 1;
  if (this.beta) {
    this.nb_questions = 2;
  } else {
    this.nb_questions = 2;
  };

  this.titre = "Rapport de deux longueurs sur un segment";
  this.consigne = `Sur tous les axes, les graduations sont régulières.`;

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;
  sortie_html ? this.spacing = 2.5 : this.spacing = 1.5;
  sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.beta) {
      type_de_questions_disponibles = [0, 1];
    } else {
      //type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);      			
      type_de_questions_disponibles = [0, 1];
    };

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    //let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
      // une fonction pour le singulier pluriel
      function sing_plur(nombre, singulier, pluriel) {
        if (nombre > 1) {
          return pluriel
        } else {
          return singulier
        };
      };

      // on choisit deux entiers pour former les fractions
      let entier_max = 9;
      let m = randint(1, entier_max);
      let n = randint(1, entier_max, m); // on évite l'autre pour éviter la fraction 1
      let params = {
        xmin: -0.4,
        ymin: -2,
        xmax: 15 * entier_max,// pour éviter un cadrage trop large
        ymax: 1,
        pixelsParCm: 20,
        scale: 1,
      }
      // on colle la figure à l'énoncé
      let y_enonce = -1.2;

      // on a parfois des figure trop petites ou trop grandes
      //
      let rayon;
      rayon = 5;
      // if (m<n) {
      //   rayon = 15
      // } else {
      //   rayon = 15/Math.ceil(m/n)
      // };

      //on choisit de façon aléatoire un triplet de noms pour les points
      let noms_choix = [['A', 'B', 'C'], ['D', 'E', 'F'], ['I', 'J', 'K'], ['L', 'M', 'N']]
      let noms = noms_choix[randint(0, noms_choix.length - 1)];

      // pour les situations, autant de situations que de cas dans le switch !
      let situations = [
        {//case 0 --> m < n
          m: Math.min(m, n),
          n: Math.max(m, n),
          rapport: `\\dfrac{${noms[0] + noms[1]}}{${noms[0] + noms[2]}}`,
          rapport_inverse: `\\dfrac{${noms[0] + noms[2]}}{${noms[0] + noms[1]}}`,
          fig: mathalea2d(
            params,
            fraction(Math.min(m, n), Math.max(m, n)).representation(0, 0, rayon, 0, 'segment', '', noms[0], noms[1], 1, noms[2]),
          ),
          segment_corr1: `\\textcolor{red}{[${noms[0] + noms[2]}]}`,
          longueur_corr1: `\\textcolor{red}{${noms[0] + noms[2]}}`,
          m_color_corr: `\\textcolor{red}{${Math.min(m, n)}}`,
          n_color_corr: `\\textcolor{blue}{${Math.max(m, n)}}`,
          fig_corr1: mathalea2d(
            params,
            fraction(Math.min(m, n), Math.max(m, n)).representation(0, y_enonce, rayon, 0, 'segment', 'red', noms[0], noms[1], 1, noms[2]),
          ),
          segment_corr2: `\\textcolor{blue}{[${noms[0] + noms[1]}]}`,
          longueur_corr2: `\\textcolor{blue}{${noms[0] + noms[1]}}`,
          fig_corr2: mathalea2d(
            params,
            fraction(Math.max(m, n), Math.min(m, n)).representation(0, y_enonce, (Math.min(m, n) / Math.max(m, n)) * rayon, 0, 'segment', 'blue', noms[0], noms[2], 1, noms[1]),
          )
        },
        {//case 1 --> m > n
          m: Math.max(m, n),
          n: Math.min(m, n),
          rapport: `\\dfrac{${noms[0] + noms[1]}}{${noms[0] + noms[2]}}`,
          rapport_inverse: `\\dfrac{${noms[0] + noms[2]}}{${noms[0] + noms[1]}}`,
          fig: mathalea2d(
            params,
            fraction(Math.max(m, n), Math.min(m, n)).representation(0, 0, 5, 0, 'segment', '', noms[0], noms[1], 1, noms[2]),
          ),
          segment_corr1: `\\textcolor{red}{[${noms[0] + noms[2]}]}`,
          longueur_corr1: `\\textcolor{red}{${noms[0] + noms[2]}}`,
          m_color_corr: `\\textcolor{red}{${Math.max(m, n)}}`,
          n_color_corr: `\\textcolor{blue}{${Math.min(m, n)}}`,
          fig_corr1: mathalea2d(
            params,
            fraction(Math.max(m, n), Math.min(m, n)).representation(0, y_enonce, 5, 0, 'segment', 'red', noms[0], noms[1], 1, noms[2]),
          ),
          segment_corr2: `\\textcolor{blue}{[${noms[0] + noms[1]}]}`,
          longueur_corr2: `\\textcolor{blue}{${noms[0] + noms[1]}}`,
          fig_corr2: mathalea2d(
            params,
            fraction(Math.min(m, n), Math.max(m, n)).representation(0, y_enonce, (Math.max(m, n) / Math.min(m, n)) * 5, 0, 'segment', 'blue', noms[0], noms[2], 1, noms[1]),
          )
        },

      ];

      let enonces = [];
      for (let k = 0; k < situations.length; k++) {
        enonces.push({
          enonce: `
          Exprimer les rapports suivants $${situations[k].rapport}$ et $${situations[k].rapport_inverse}$.
          <br>
          ${situations[k].fig}     			
					`,
          question: ``,
          correction: `
          Les graduations étant régulières, comptons le nombre de graduations pour chaque segment :<br>
          ${situations[k].fig_corr1}<br>
          Le segment $${situations[k].segment_corr1}$ compte $${situations[k].m_color_corr}$ ${sing_plur(situations[k].m, 'graduation', 'graduations')}.<br>
          ${situations[k].fig_corr2}<br>
          Le segment $${situations[k].segment_corr2}$ compte $${situations[k].n_color_corr}$ ${sing_plur(situations[k].n, 'graduation', 'graduations')}.<br><br>
          Donc $\\dfrac{${situations[k].longueur_corr2}}{${situations[k].longueur_corr1}}=\\dfrac{${situations[k].n_color_corr}}{${situations[k].m_color_corr}}$
          et $\\dfrac{${situations[k].longueur_corr1}}{${situations[k].longueur_corr2}}=\\dfrac{${situations[k].m_color_corr}}{${situations[k].n_color_corr}}$<br><br>
          $\\textbf{D'où $\\mathbf{${situations[k].rapport}=}${fraction(situations[k].n, situations[k].m).texFractionSimplifiee()}$ et $\\mathbf{${situations[k].rapport_inverse}=}${fraction(situations[k].m, situations[k].n).texFractionSimplifiee()}$}$<br>

					`
        });
      };

      // autant de case que d'elements dans le tableau des situations
      switch (liste_type_de_questions[i]) {
        case 0:
          texte = `${enonces[0].enonce}`;
          if (this.beta) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
            texte += `             `
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[0].correction}`;
          };
          break;
        case 1:
          texte = `${enonces[1].enonce}`;
          if (this.beta) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[1].correction}`;
          };
          break;
        case 2:
          texte = `${enonces[2].enonce}`;
          if (this.beta) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[2].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[2].correction}`;
          };
          break;
        case 3:
          texte = `${enonces[3].enonce}`;
          if (this.beta) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[3].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[3].correction}`;
          };
          break;
        case 4:
          texte = `${enonces[4].enonce}`;
          if (this.beta) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[4].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[4].correction}`;
          };
          break;
      };

      if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en crée une autre
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
};

