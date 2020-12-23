import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Produire une forme littérale en introduisant une lettre pour désigner une valeur inconnue
 * * 6P11-1
 * @author Sébastien Lozano
 */
export default function Proportionnalite_par_linearite_bis() {
  'use strict';
  Exercice.call(this); // Héritage de la classe Exercice()
  this.beta = false;
  this.sup = 1;
  if (this.beta) {
    this.nb_questions = 3;
  } else {
    this.nb_questions = 1;
  };

  this.titre = "Résoudre un problème relevant de la proportionnalité avec les propriétés de linéarité.";
  this.consigne = "";
  sortie_html ? this.spacing = 1.5 : this.spacing = 1;

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;
  //sortie_html? this.spacing = 3 : this.spacing = 2; 
  //sortie_html? this.spacing_corr = 3 : this.spacing_corr = 2;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.beta) {
      type_de_questions_disponibles = [1];
    } else {
      type_de_questions_disponibles = [1];
    };

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    type_de_questions_disponibles = [1];
    let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    //let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus

    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {

      // une fonction pour gérer le pluriel 
      function pluriel(n, obj) {
        if (n > 1) {
          return obj.achat_plur
        } else {
          return obj.achat_sing
        };
      };

      // une fonction pour gérer la chaine de sortie et supprimer le coeff 1 !
      function sliceUn(n) {
        if (n == 1) {
          return ``;
        } else {
          return `${n}`;
        };
      };

      //une fonction pour calculer la différence positive entre deux entiers
      function diffInt(n, p) {
        if (n > p) {
          return calcul(n - p);
        } else if (n < p) {
          return calcul(p - n);
        } else {
          return 0;
        }
      };

      // un compteur pour les sous-questions
      let k = 0;
      let k_corr = 0;
      // on crée un tableau d'objets pour les situations possibles
      let n1, n2, n3, n4, n_max;
      do {
        n1 = randint(1, 9);
        n2 = randint(1, 9, [n1]);
        n3 = n1 + n2;
        n4 = diffInt(n1, n2);
        n_max = randint(10, 19, [n3]);
      } while (n4 == 1);
      //n1 sera toujours le plus grand sinon on intervertit les deux
      let temp;
      if (n1 < n2) {
        temp = n1;
        n1 = n2;
        n2 = temp;
      };
      let situations = [
        { lieu: `la boulangerie "Au bon pain"`, achat_sing: `pain au chocolat`, achat_plur: `pains au chocolat`, prenom1: prenom(), prenom2: prenom(), prenom3: prenom(), prenom4: prenom(), prenom_max: prenom(), n1: n1, n2: n2, n3: n3, n4: n4, n_max: n_max, pu: 0.9 }
      ]
      let enonces = [];
      let situation = situations[randint(0, situations.length - 1)];

      enonces.push({
        enonce: `
          Dans ${situation.lieu}, ${situation.prenom1} achète $${situation.n1}$ ${pluriel(situation.n1, situation)} et paie $${tex_prix(situation.pu * situation.n1)}$ €.
          <br>${situation.prenom2} achète $${situation.n2}$ ${pluriel(situation.n2, situation)} et paie $${tex_prix(situation.pu * situation.n2)}$ €.
          <br>
          <br>${num_alpha(k++)} Combien paiera ${situation.prenom3} pour $${situation.n3}$ ${pluriel(situation.n3, situation)} ?
          <br>${num_alpha(k++)} Combien paiera ${situation.prenom4} pour $${situation.n4}$ ${pluriel(situation.n4, situation)} ?
          <br>${num_alpha(k++)} Quel est le nombre maximum de ${situation.achat_plur} que ${situation.prenom_max} peut acheter avec $${tex_prix(situation.pu * situation.n_max)}$ € ?
          `,
        question: ``,
        correction: `
        C'est une situation de proportionnalité. Nous pouvons donc utiliser les propriétés de linéarité de la proportionnalité.
        <br>C'est ce que nous allons faire pour les deux premières questions.
        <br>
        <br>${num_alpha(k_corr++)} Pour $${situation.n1}$ ${pluriel(situation.n1, situation)}, on paie $${tex_prix(situation.pu * situation.n1)}$ €.
        <br> Pour $${situation.n2}$ ${pluriel(situation.n2, situation)}, on paie $${tex_prix(situation.pu * situation.n2)}$ €.
        <br> Donc pour $${situation.n1}+${situation.n2}$ ${pluriel(situation.n3, situation)}, on paie $${tex_prix(situation.pu * situation.n1)}$ € + $${tex_prix(situation.pu * situation.n2)}$ €.
        <br> ${texte_en_couleur(`${situation.prenom3} paiera donc $${tex_prix(situation.pu * situation.n3)}$ € pour $${situation.n3}$ ${pluriel(situation.n3, situation)}.`)}
        <br>
        <br>${num_alpha(k_corr++)} Pour $${situation.n1}$ ${pluriel(situation.n1, situation)}, on paie $${tex_prix(situation.pu * situation.n1)}$ €.
        <br> Pour $${situation.n2}$ ${pluriel(situation.n2, situation)}, on paie $${tex_prix(situation.pu * situation.n2)}$ €.
        <br> Donc pour $${situation.n1}-${situation.n2}$ ${pluriel(situation.n4, situation)}, on paie $${tex_prix(situation.pu * situation.n1)}$ € - $${tex_prix(situation.pu * situation.n2)}$ €.
        <br> ${texte_en_couleur(`${situation.prenom4} paiera donc $${tex_prix(situation.pu * situation.n4)}$ € pour $${situation.n4}$ ${pluriel(situation.n4, situation)}.`)}
        <br>
        <br>${num_alpha(k_corr++)} On peut utiliser l'une ou l'autre des informations de l'énoncé pour répondre en revenant à l'unité.
        <br> Par exemple pour $${situation.n1}$ ${pluriel(situation.n1, situation)}, on paie $${tex_prix(situation.pu * situation.n1)}$ €.
        <br> Donc $1$ ${situation.achat_sing} coûte $${tex_prix(situation.pu * situation.n1)}\\div ${situation.n1} = ${tex_prix(situation.pu)}$ €.
        <br> Pour $${tex_prix(situation.pu * situation.n_max)}$ € nous aurons donc $${tex_prix(situation.pu * situation.n_max)}\\div ${tex_prix(situation.pu)}$ € $= ${situation.n_max}$ ${pluriel(situation.n_max, situation)}.
        <br> ${texte_en_couleur(`Avec $${tex_prix(situation.pu * situation.n_max)}$ €, ${situation.prenom_max} pourra donc acheter $${situation.n_max}$ ${pluriel(situation.n_max, situation)}.`)}
        `
      })
      switch (liste_type_de_questions[i]) {
        case 1:
          texte = `${enonces[0].enonce}`;
          if (this.beta) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[0].correction}`;
          };
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  }
}


