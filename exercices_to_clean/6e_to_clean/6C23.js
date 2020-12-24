import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Reconnaitre un quadrilatère particulier à partir de ses propriétés
 * @Auteur Rémi Angot
 * Référence 6G33
*/
export default function Reconnaitre_quadrilatere_particulier() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Reconnaitre un quadrilatère particulier à partir de ses propriétés";
  this.consigne = "";
  this.nb_questions = 3;
  this.nb_questions_modifiable = false;
  this.nb_cols = 2; // Nombre de colonnes pour la sortie LaTeX
  this.nb_cols_corr = 2; // Nombre de colonnes dans la correction pour la sortie LaTeX
  this.correction_detaillee_disponible = true;
  sortie_html ? this.correction_detaillee = true : this.correction_detaillee = false

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let liste_de_questions = shuffle([choice(['losange1','losange2']),choice(['rectangle1','rectangle2']),choice(['carre1','carre2','carre3'])])
    for (let i = 0, texte, texte_corr,cpt = 0; i < this.nb_questions && cpt < 50;)
     {
      texte = '';
      texte_corr = '';
      let A,B,C,D,O,ABCD,codage,codage1,codage2,codage3,codage4,sAC,sBD,sOA,sOB,sOC,sOD,marquesDemiDiagonales,marquesDemiDiagonales1,marquesDemiDiagonales2;
      switch (liste_de_questions[i]) {
          case 'losange1':
              texte = "Quelle est la nature d'un quadrilatère ayant 4 côtés de même longueur ?";
              A = point(0, 0);
              B = point(2, 3);
              C = point(0, 6);
              D = point(-2, 3);
              O = point(0, 3);
              ABCD = polygone(A, B, C, D);
              //codage = codageAngleDroit(C, O, B);
              marquesCotes = codeSegments("||", "blue", A, B, B, C, C, D, D, A);
              // sAC = segment(A, C);
              // sBD = segment(B, D);
              // sOA = segment(O, A);
              // sOB = segment(O, B);
              // sOC = segment(O, C);
              // sOD = segment(O, D);
              // sAC.pointilles = true;
              // sBD.pointilles = true;
              // marquesDemiDiagonales = codeSegments("|", "blue", O, A, O, B, O, C, O, D);
              if (this.correction_detaillee) {texte_corr = mathalea2d({xmin:-3,xmax:3,ymin:-1,ymax:7},ABCD,marquesCotes)+"<br>"}
              texte_corr += "C'est un losange."
              break;
          case 'losange2':
              texte = "Quelle est la nature d'un quadrilatère ayant ses diagonales perpendiculaires et sécantes en leur milieu ?";
              A = point(0, 0);
              B = point(2, 3);
              C = point(0, 6);
              D = point(-2, 3);
              O = point(0, 3);
              ABCD = polygone(A, B, C, D);
              codage = codageAngleDroit(C, O, B);
              //marquesCotes = codeSegments("||", "blue", A, B, B, C, C, D, D, A);
              sAC = segment(A, C);
              sBD = segment(B, D);
              sOA = segment(O, A);
              sOB = segment(O, B);
              sOC = segment(O, C);
              sOD = segment(O, D);
              sAC.pointilles = true;
              sBD.pointilles = true;
              marquesDemiDiagonales1 = codeSegments("|", "blue", O, A, O, C);
              marquesDemiDiagonales2 = codeSegments("|||", "blue", O, B, O, D);
              if (this.correction_detaillee) {texte_corr = mathalea2d({xmin:-3,xmax:3,ymin:-1,ymax:7},ABCD,codage,sAC,sBD,marquesDemiDiagonales1,marquesDemiDiagonales2)+"<br>"}
              texte_corr += "C'est un losange."
              break;
          case 'rectangle1':
              texte = "Quelle est la nature d'un quadrilatère ayant 3 angles droits ?";
              A = point(0, 0);
              B = point(5, 0);
              C = point(5, 3);
              D = point(0, 3);
              O = point(2.5, 1.5);
              ABCD = polygone(A, B, C, D);
              codage1 = codageAngleDroit(A,B,C);
              codage2 = codageAngleDroit(B,C,D);
              codage3 = codageAngleDroit(C,D,A);
              //marquesCotes = codeSegments("||", "blue", A, B, B, C, C, D, D, A);
              // sAC = segment(A, C);
              // sBD = segment(B, D);
              // sOA = segment(O, A);
              // sOB = segment(O, B);
              // sOC = segment(O, C);
              // sOD = segment(O, D);
              // sAC.pointilles = true;
              // sBD.pointilles = true;
              // marquesDemiDiagonales = codeSegments("||", "blue", O, A, O, B, O, C, O, D);
              if (this.correction_detaillee) {texte_corr = mathalea2d({xmin:-1,xmax:6,ymin:-1,ymax:4},ABCD,codage1,codage2,codage3)+"<br>"}
              texte_corr += "C'est un rectangle."
              break;
          case 'rectangle2':
              texte = "Quelle est la nature d'un quadrilatère ayant ses diagonales de même longueur et sécantes en leur milieu ?";
              A = point(0, 0);
              B = point(5, 0);
              C = point(5, 3);
              D = point(0, 3);
              O = point(2.5, 1.5);
              ABCD = polygone(A, B, C, D);
              // codage1 = codageAngleDroit(A,B,C);
              // codage2 = codageAngleDroit(B,C,D);
              // codage3 = codageAngleDroit(C,D,A);
              //marquesCotes = codeSegments("||", "blue", A, B, B, C, C, D, D, A);
              sAC = segment(A, C);
              sBD = segment(B, D);
              // sOA = segment(O, A);
              // sOB = segment(O, B);
              // sOC = segment(O, C);
              // sOD = segment(O, D);
              // sAC.pointilles = true;
              // sBD.pointilles = true;
              marquesDemiDiagonales = codeSegments("||", "blue", O, A, O, B, O, C, O, D);
              if (this.correction_detaillee) {texte_corr = mathalea2d({xmin:-1,xmax:6,ymin:-1,ymax:4},ABCD,marquesDemiDiagonales,sAC,sBD)+"<br>"}
              texte_corr += "C'est un rectangle."
              break;
          case 'carre1':
              texte = "Quelle est la nature d'un quadrilatère ayant ses 4 côtés de même longueur et 4 angles droits ?";
              A = point(0, 0);
              B = point(3, 0);
              C = point(3, 3);
              D = point(0, 3);
              O = point(1.5, 1.5);
              ABCD = polygone(A, B, C, D);
              codage1 = codageAngleDroit(A,B,C);
              codage2 = codageAngleDroit(B,C,D);
              codage3 = codageAngleDroit(C,D,A);
              codage4 = codageAngleDroit(D,A,B);
              marquesCotes = codeSegments("||", "blue", A, B, B, C, C, D, D, A);
              // sAC = segment(A, C);
              // sBD = segment(B, D);
              // sOA = segment(O, A);
              // sOB = segment(O, B);
              // sOC = segment(O, C);
              // sOD = segment(O, D);
              // sAC.pointilles = true;
              // sBD.pointilles = true;
              // marquesDemiDiagonales = codeSegments("||", "blue", O, A, O, B, O, C, O, D);
              if (this.correction_detaillee) {texte_corr = mathalea2d({xmin:-1,xmax:4,ymin:-1,ymax:4},ABCD,codage1,codage2,codage3,marquesCotes)+"<br>"}
              texte_corr += "C'est un carré."
              break;
          case 'carre2':
              texte = "Quelle est la nature d'un quadrilatère ayant ses ses diagonales perpendiculaires, de même longueur et sécantes en leur milieu ?";
              A = point(0, 0);
              B = point(3, 0);
              C = point(3, 3);
              D = point(0, 3);
              O = point(1.5, 1.5);
              ABCD = polygone(A, B, C, D);
              codage = codageAngleDroit(C,O,D);
              // codage2 = codageAngleDroit(B,C,D);
              // codage3 = codageAngleDroit(C,D,A);
              // codage4 = codageAngleDroit(D,A,B);
              // marquesCotes = codeSegments("||", "blue", A, B, B, C, C, D, D, A);
              sAC = segment(A, C);
              sBD = segment(B, D);
              sOA = segment(O, A);
              sOB = segment(O, B);
              sOC = segment(O, C);
              sOD = segment(O, D);
              sAC.pointilles = true;
              sBD.pointilles = true;
              marquesDemiDiagonales = codeSegments("||", "blue", O, A, O, B, O, C, O, D);
              if (this.correction_detaillee) {texte_corr = mathalea2d({xmin:-1,xmax:4,ymin:-1,ymax:4},ABCD,codage,marquesDemiDiagonales,sAC,sBD)+"<br>"}
              texte_corr += "C'est un carré."
              break;
          case 'carre3':
              texte = "Quelle est la nature d'un quadrilatère ayant ses 4 côtés de même longueur et un angle droit ?";
              A = point(0, 0);
              B = point(3, 0);
              C = point(3, 3);
              D = point(0, 3);
              O = point(1.5, 1.5);
              ABCD = polygone(A, B, C, D);
              codage = codageAngleDroit(A,B,C);
              // codage2 = codageAngleDroit(B,C,D);
              // codage3 = codageAngleDroit(C,D,A);
              // codage4 = codageAngleDroit(D,A,B);
              marquesCotes = codeSegments("||", "blue", A, B, B, C, C, D, D, A);
              // sAC = segment(A, C);
              // sBD = segment(B, D);
              // sOA = segment(O, A);
              // sOB = segment(O, B);
              // sOC = segment(O, C);
              // sOD = segment(O, D);
              // sAC.pointilles = true;
              // sBD.pointilles = true;
              // marquesDemiDiagonales = codeSegments("||", "blue", O, A, O, B, O, C, O, D);
              if (this.correction_detaillee) {texte_corr = mathalea2d({xmin:-1,xmax:4,ymin:-1,ymax:4},ABCD,codage,marquesCotes)+"<br>"}
              texte_corr += "C'est un carré."
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
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : ....\n2 : .....,\n3 : .....];
}


// Exercices paramétrés pour correspondre au référentiel
// Référence 5P10
//function Proportionnalite_pas_proportionnalite_5e(){
//  Proportionnalite_pas_proportionnalite.call(this)
// Pas de paramètres Sup
//}

// Référence 6C23
function Exercice_additionner_des_fractions_6e() {
  Exercice_additionner_ou_soustraire_des_fractions_5e.call(this);
  this.sup2 = 1;
  this.level = 6;
  this.titre = "Additionner des fractions de même dénominateur";
  this.besoin_formulaire_numerique2 = false;
}
