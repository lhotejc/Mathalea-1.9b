import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * fork de 4P10-1 par Jean-Claude Lhote
 */

export default function Graphiques_et_proportionnalite2() {
  'use strict';
  Exercice.call(this); // Héritage de la classe Exercice()
  this.debug = false;
  this.sup = 1;
  if (this.debug) {
    this.nb_questions = 2;
  } else {
    this.nb_questions = 1;
  };

  this.titre = "Résoudre un problème de proportionnalité à l'aide d'un graphique";
  this.consigne = "";

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;
  sortie_html ? this.spacing = 1.5 : this.spacing = 1;
  //sortie_html? this.spacing_corr = 3 : this.spacing_corr = 2;

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
      // on prévoit un peu d'aléatoire pour les prix unitaires
      let pu_oranges = choice([1.2, 1.4, 1.6, 1.8]);
      let pu_baguettes = choice([0.6, 0.8, 1.2]);
      // on prévoit un tableau avec des situations
      let situations = [
        { lieu: `l'épicerie`, prenom: prenom(), articles: `oranges`, art_articles: `d'oranges`, prix_unitaire: pu_oranges, qte: `poids`, qte_max: 10, qte2: 3, unite: `kg d'`, legendeX: `poids en kg`, legendeY: `prix en €`, fig: {}, fig_corr: {} },
        { lieu: `la boulangerie`, prenom: prenom(), articles: `baguettes`, art_articles: `de baguettes`, prix_unitaire: pu_baguettes, qte: `nombre`, qte_max: 10, qte2: 3, unite: ``, legendeX: `quantité`, legendeY: `prix en €`, fig: {}, fig_corr: {} }
      ]
      // on en choisit une
      let situation = situations[randint(0, situations.length - 1)];
      let r;
      let xscale = 1;
      let yscale = choice([1,2,5]);
      // pour aléatoiriser un peu le pas sur l'axe des prix
      let stepAxeSecondaire 
      if (yscale==1) stepAxeSecondaire = choice([0.5,0.2,0.25]);
      // on finit les appels
      let mesAppels = [
        r = repere({
          xmin: 0,
          ymin: 0,
          ymax: situation.qte_max * situation.prix_unitaire + 4,
          xmax: situation.qte_max,
          xscale: xscale,
          yscale: yscale,
          legendeX: situation.legendeX,
          legendeY: situation.legendeY,
          grilleSecondaireVisible: true,
          grilleSecondaireDistance: stepAxeSecondaire,//0.2,
          positionLegendeY: [0.3, situation.qte_max * situation.prix_unitaire + 4 + 0.4]
        }),
      ];
      let f = x => calcul(situation.prix_unitaire * x);
      mesAppels.push(f, courbe(f, 0, situation.qte_max, 'black', 1.5, r));
      // on prépare l'objet figure
      let fig = mathalea2d(
        {
          xmin: -xscale,
          ymin: -yscale,
          xmax: situation.qte_max / xscale + 3,
          ymax: (situation.qte_max * situation.prix_unitaire + 4) / 2 + 1,
          pixelsParCm: 40
        },
        mesAppels
      );
      situation.fig = fig;

      // on prépare les appels supplémentaires pour la correction
      let mesAppels_corr = mesAppels;
      let A = point(situation.qte_max, 0);
      let B = point(situation.qte_max, calcul(situation.qte_max * situation.prix_unitaire / yscale));
      let s1 = segment(A, B, "red");
      s1.epaisseur = 2;
      s1.pointilles = true;
      s1.styleExtremites = `->`;
      let C = point(0, calcul(situation.qte_max * situation.prix_unitaire / yscale));
      let s2 = segment(B, C, "red");
      s2.epaisseur = 2;
      s2.pointilles = true;
      s2.styleExtremites = `->`;

      let D = point(situation.qte2, 0);
      let E = point(situation.qte2, calcul(situation.qte2 * situation.prix_unitaire / yscale));
      let s3 = segment(D, E, "blue");
      s3.epaisseur = 2;
      s3.pointilles = true;
      s3.styleExtremites = `->`;
      let F = point(0, calcul(situation.qte2 * situation.prix_unitaire / yscale));
      let s4 = segment(E, F, "blue");
      s4.epaisseur = 2;
      s4.pointilles = true;
      s4.styleExtremites = `->`;

      // on ajoute les appels pour la correction
      mesAppels_corr.push(
        s1,
        s2,
        s3,
        s4
      )

      // on prépare l'objet figure correction
      let fig_corr = mathalea2d(
        {
          xmin: -xscale,
          ymin: -yscale,
          xmax: situation.qte_max / xscale + 3,
          ymax: (situation.qte_max * situation.prix_unitaire + 4) / 2 + 1,
          pixelsParCm: 40
        },
        mesAppels_corr
      );
      situation.fig_corr = fig_corr;



      // un compteur pour les sous-questions
      let k = 0;
      let k_corr = 0;

      let enonces = [];
      enonces.push({
        enonce: `
          À ${situation.lieu}, ${situation.prenom} utilise le graphique ci-dessous pour indiquer le prix de ses ${situation.articles} en fonction du ${situation.qte} ${situation.art_articles}.
          <br>${situation.fig}
          <br> ${num_alpha(k++)} Justifier que c'est une situation de proportionnalité à l'aide du graphique.
          <br> ${num_alpha(k++)} Quel est le prix de $${situation.qte_max}$ ${situation.unite}  ${situation.articles}?
          <br> ${num_alpha(k++)} Quel est le prix de $${situation.qte2}$ ${situation.unite}  ${situation.articles}?
          `,
        //question:``,
        correction: `
        <br> ${num_alpha(k_corr++)} Ce graphique est une droite qui passe par l'origine.
        <br> ${texte_en_couleur(`C'est donc bien le graphique d'une situation de proportionnalité.`)}

        <br> ${num_alpha(k_corr++)} Par lecture graphique, en utilisant les pointillés rouges du graphe ci-dessous, ${texte_en_couleur(`$${situation.qte_max}$ ${situation.unite}  ${situation.articles} coûtent $${tex_prix(calcul(situation.qte_max * situation.prix_unitaire))}$ €.`)}
        <br> ${situation.fig_corr}
        <br> ${num_alpha(k_corr++)} Pour $${situation.qte2}$ ${situation.unite}  ${situation.articles}, la lecture graphique est moins facile, nous allons détailler deux méthodes.
        <br><br> ${texte_gras(`Première méthode par lecture graphique :`)} 
        <br> Il faut prendre en compte que chaque petit carreau représente $${tex_prix(stepAxeSecondaire*yscale)}$ € et utiliser les pointillés bleus.
        <br><br> ${texte_gras(`Seconde méthode en calculant une quatrième proportionnelle :`)}
        <br> $${situation.qte_max}$ ${situation.unite}  ${situation.articles} coûtent $${tex_prix(calcul(situation.qte_max * situation.prix_unitaire))}$ €
        donc $${situation.qte2}$ ${situation.unite}  ${situation.articles} coûtent : <br> $(${tex_prix(calcul(situation.qte_max * situation.prix_unitaire))}$ € $\\div ${situation.qte_max}$ ${situation.articles} $)\\times (${situation.qte2}$ ${situation.articles})  $= ${tex_prix(calcul(situation.qte2 * situation.prix_unitaire))}$ €
        <br><br>${texte_en_couleur(`Quelle que soit la méthode utilisée, ${situation.qte2} ${situation.unite}  ${situation.articles} coûtent $${tex_prix(calcul(situation.qte2 * situation.prix_unitaire))}$ €.`)}
        `
      })
      switch (liste_type_de_questions[i]) {
        case 1:
          texte = `${enonces[0].enonce}`;
          //texte = `${fig}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[0].correction}`;
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

