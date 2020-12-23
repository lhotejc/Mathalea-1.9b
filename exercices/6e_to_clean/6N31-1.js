import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/** 
 * * Encadrer_puis_arrondir_une_valeur
 * * 6N31-3
 * @author Mireille Gain, s'inspirant de 6N31-1 de Sébastien Lozano
 */

export default function Arrondir_une_valeur() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Arrondir une valeur";
  this.consigne = "Encadrer chaque nombre à l'unité, puis au dixième, puis au centième.<br>Dans chaque cas, mettre ensuite en évidence son arrondi.";
  this.nb_questions = 3;
  this.nb_cols = 3;
  this.nb_cols_corr = 1;
  this.sup = 1;
  this.sup2 = false;

  sortie_html ? (this.spacing_corr = 2.5) : (this.spacing_corr = 3.5);

  this.nouvelle_version = function () {
    this.liste_questions = [];
    this.liste_corrections = [];
    let m, c, d, u, di, ci, mi, me, ce, de, n, den, num, nb, rac;

    for (let i = 0, texte = "", texte_corr = "", cpt = 0; i < this.nb_questions && cpt < 50;) {
      if (this.sup == 1) {
        m = randint(0, 9);
        c = randint(0, 9);
        d = randint(0, 9);
        u = randint(0, 9);
        di = randint(1, 9);
        ci = randint(1, 9);
        mi = randint(1, 9, 5);
        me = randint(0, 1);
        ce = randint(0, 1);
        de = randint(0, 1);
        n = me * m * 1000 + ce * c * 100 + de * d * 10 + u * 1 + calcul(di * 0.1 + ci * 0.01 + mi * 0.001);
        nb = tex_nombre(n);
      } else if (this.sup == 2) {
        den = choice([7, 9, 11, 13]);
        num = randint(1, 50, [7, 9, 11, 13, 14, 18, 21, 22, 26, 27, 28, 33, 35, 36, 39, 42, 44, 45, 49]);
        n = num / den;
        nb = tex_fraction(num, den);
        di = troncature(n - troncature(n, 0), 1);
        ci = troncature(n - troncature(n, 1), 2);
        mi = troncature(n - troncature(n, 2), 3);
      } else if (this.sup == 3) {
        rac = randint(3, 99, [4, 9, 16, 25, 36, 49, 64, 81]);
        n = Math.sqrt(rac);
        nb = `\\sqrt{${rac}}`;
        di = troncature(n - troncature(n, 0), 1);
        ci = troncature(n - troncature(n, 1), 2);
        mi = troncature(n - troncature(n, 2), 3);
      }

      texte = `$${nb}$`;
      if (this.sup2) {
        if (this.sup == 1) texte += ``;
        else if (this.sup == 2) texte += `$\\phantom{1234567}$[Quand on écrit sur la calculatrice $${num}\\div ${den}$, elle affiche : $${tex_nombre(n)}$.]`;
        else if (this.sup == 3) texte += `$\\phantom{1234567}$[Quand on écrit sur la calculatrice $${nb}$, elle affiche : $${tex_nombre(n)}$.]`;
      }
      texte_corr = "Encadrement et arrondi à l'unité : ";
      if (di < 5) {
        texte_corr += `$\\phantom{1234567}${mise_en_evidence(tex_nombre(troncature(n, 0)))} < ${nb} < ${tex_nombre(troncature(n + 1, 0))}$`;
      } else {
        texte_corr += `$\\phantom{1234567}${tex_nombre(troncature(n, 0))} < ${nb} < ${mise_en_evidence(tex_nombre(troncature(n + 1, 0)))}$`;
      }

      texte_corr += "<br>Encadrement et arrondi au dixième : ";
      if (ci < 5) {
        texte_corr += `$\\phantom{123}${mise_en_evidence(tex_nombre(troncature(n, 1)))} < ${nb} < ${tex_nombre(troncature(n + 0.1, 1))}$`;
      } else {
        texte_corr += `$\\phantom{123}${tex_nombre(troncature(n, 1))} < ${nb} < ${mise_en_evidence(tex_nombre(troncature(n + 0.1, 1)))}$`;
      }

      texte_corr += "<br>Encadrement et arrondi au centième : $~$";
      if (mi < 5) {
        texte_corr += `$${mise_en_evidence(tex_nombre(troncature(n, 2)))} < ${nb} < ${tex_nombre(troncature(n + 0.01, 2))}$`;
      } else {
        texte_corr += `$${tex_nombre(troncature(n, 2))} < ${nb} < ${mise_en_evidence(tex_nombre(troncature(n + 0.01, 2)))}$`;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte); // Sinon on enregistre la question dans liste_questions
        this.liste_corrections.push(texte_corr); // On fait pareil pour la correction
        i++; // On passe à la question suivante
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ['Type de nombre', 2, `1 : Nombre décimal\n 2 : Fraction`];
  this.besoin_formulaire2_case_a_cocher = ["Affichage de la valeur donnée à la calculatrice", false];
}

function Arrondir_une_valeur_6e() {
  Arrondir_une_valeur.call(this);
  this.sup = 1;
}

function Arrondir_une_valeur_5e() {
  Arrondir_une_valeur.call(this);
  this.sup = 2;
  this.besoin_formulaire_numerique = ['Type de nombre', 2, `1 : Nombre décimal\n 2 : Fraction`];
}

function Arrondir_une_valeur_4e() {
  this.sup = 3;
  Arrondir_une_valeur.call(this);
  this.besoin_formulaire_numerique = ['Type de nombre', 3, `1 : Nombre décimal\n 2 : Fraction\n 3 : Racine carrée`];
}
