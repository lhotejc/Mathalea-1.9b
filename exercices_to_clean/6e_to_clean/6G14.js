import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Ref 6G14
 * @Auteur Jean-Claude Lhote
 * publié le 22/11/2020
 */
export default function Proprietes_paralleles_perpendiculaires() {
  "use strict";
  Exercice.call(this);
  this.titre = "Utiliser les propriétés des droites perpendiculaires";
  this.nb_questions = 3;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 4;
  this.sup2 = 1;
  this.correction_detaillee_disponible = true;
  this.correction_detaillee = false;
  this.nouvelle_version = function (numero_de_l_exercice) {
    let type_de_questions_disponibles, questions_par_niveau = [];
    questions_par_niveau.push(range(3))
    questions_par_niveau.push(rangeMinMax(9, 15))
    questions_par_niveau.push(rangeMinMax(19, 31, 20))

    if (this.sup < 4) type_de_questions_disponibles = questions_par_niveau[parseInt(this.sup) - 1]
    else type_de_questions_disponibles = questions_par_niveau[0].concat(questions_par_niveau[1].concat(questions_par_niveau[2]))

    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    );
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let droites = [], code, raisonnement, numDroites = [], phrases = [], textetemp
    let d = [], P = [], objets = [], num1, num2, couleurd = [], droiteP, PP, Inter
    let droitecolor = function (num) {
      let couleurs
      sortie_html ? couleurs = ['red', 'blue', 'green', 'black', 'magenta', 'orange'] : couleurs = ['black', 'black', 'black', 'black', 'black', 'black'];
      return couleurs[num]
    }
    if (sortie_html) {
      num1 = `<tspan dy="5" style="font-size:70%">`
      num2 = `</tspan><tspan dy="-5">)</tspan>`
    }
    else {
      num1 = `_`
      num2 = `)`
    }
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      texte = ""
      texte_corr = ""
      phrases.length = 0;
      droites.length = 0;
      objets.length = 0;
      d.length = 0;
      P.length = 0;
      couleurd.length = 0
      numDroites = shuffle([1, 2, 3, 4, 5]);
      raisonnement = liste_type_de_questions[i]

      switch (raisonnement) {
        case 0: // si 1//2 et 2//3 alors 1//3
          code = [[1, 2, 1], [2, 3, 1]];
          break;
        case 1: // si 1//2 et 2T3 alors 1T3
          code = [[1, 2, 1], [2, 3, -1]]
          break;
        case 2: // si 1T2 et 2T3 alors 1//3
          code = [[1, 2, -1], [2, 3, -1]]
          break;
        case 3: // si 1T2 et 2//3 alors 1T3
          code = [[1, 2, -1], [2, 3, 1]]
          break;
        case 8: // Si 1//2 et 2//3 et 3//4 alors 1//4
          code = [[1, 2, 1], [2, 3, 1], [3, 4, 1]];
          break;
        case 9: // Si 1//2 et 2//3 et 3T4 alors 1T4
          code = [[1, 2, 1], [2, 3, 1], [3, 4, -1]];
          break;
        case 10: // Si 1//2 et 2T3 et 3//4 alors 1T4
          code = [[1, 2, 1], [2, 3, 1], [3, 4, 1]];
          break;
        case 11: // Si 1//2 et 2T3 et 3T4 alors 1//4
          code = [[1, 2, 1], [2, 3, -1], [3, 4, -1]];
          break;
        case 12: // Si 1T2 et 2//3 et 3//4 alors 1T4
          code = [[1, 2, -1], [2, 3, 1], [3, 4, 1]];
          break;
        case 13: // Si 1T2 et 2//3 et 3T4 alors 1//4
          code = [[1, 2, -1], [2, 3, 1], [3, 4, -1]];
          break;
        case 14: // Si 1T2 et 2T3 et 3//4 alors 1//4
          code = [[1, 2, -1], [2, 3, -1], [3, 4, 1]];
          break;
        case 15: // Si 1T2 et 2T3 et 3T4 alors 1T4
          code = [[1, 2, -1], [2, 3, -1], [3, 4, -1]];
          break;
        case 16: // Si 1//2 et 2//3 et 3//4 et 4//5 alors 1//5
          code = [[1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1]];
          break;
        case 17: // Si 1//2 et 2//3 et 3T4 et 4//5 alors 1T5
          code = [[1, 2, 1], [2, 3, 1], [3, 4, -1], [4, 5, 1]];
          break;
        case 18: // Si 1//2 et 2T3 et 3//4 et 4//5 alors 1T5
          code = [[1, 2, 1], [2, 3, -1], [3, 4, 1], [4, 5, 1]];
          break;
        case 19: // Si 1//2 et 2T3 et 3T4 et 4//5 alors 1//5
          code = [[1, 2, 1], [2, 3, -1], [3, 4, -1], [4, 5, 1]];
          break;
        case 20: // Si 1T2 et 2//3 et 3//4 et 4//5 alors 1T5
          code = [[1, 2, -1], [2, 3, 1], [3, 4, 1], [4, 5, 1]];
          break;
        case 21: // Si 1T2 et 2//3 et 3T4 et 4//5 alors 1//5
          code = [[1, 2, -1], [2, 3, 1], [3, 4, -1], [4, 5, 1]];
          break;
        case 22: // Si 1T2 et 2T3 et 3//4 et 4//5 alors 1//5
          code = [[1, 2, -1], [2, 3, -1], [3, 4, 1], [4, 5, 1]];
          break;
        case 23: // Si 1T2 et 2T3 et 3T4 et 4//5 alors 1T5
          code = [[1, 2, -1], [2, 3, -1], [3, 4, -1], [4, 5, 1]];
          break;
        case 24: // Si 1//2 et 2//3 et 3//4 et 4T5 alors 1T5
          code = [[1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, -1]];
          break;
        case 25: // Si 1//2 et 2//3 et 3T4 et 4T5 alors 1//5
          code = [[1, 2, 1], [2, 3, 1], [3, 4, -1], [4, 5, -1]];
          break;
        case 26: // Si 1//2 et 2T3 et 3//4 et 4T5 alors 1//5
          code = [[1, 2, 1], [2, 3, -1], [3, 4, 1], [4, 5, -1]];
          break;
        case 27: // Si 1//2 et 2T3 et 3T4 et 4T5 alors 1T5
          code = [[1, 2, 1], [2, 3, -1], [3, 4, -1], [4, 5, -1]];
          break;
        case 28: // Si 1T2 et 2//3 et 3//4 et 4T5 alors 1//5
          code = [[1, 2, -1], [2, 3, 1], [3, 4, 1], [4, 5, -1]];
          break;
        case 29: // Si 1T2 et 2//3 et 3T4 et 4T5 alors 1T5
          code = [[1, 2, -1], [2, 3, 1], [3, 4, -1], [4, 5, -1]];
          break;
        case 30: // Si 1T2 et 2T3 et 3//4 et 4T5 alors 1T5
          code = [[1, 2, -1], [2, 3, -1], [3, 4, 1], [4, 5, -1]];
          break;
        case 31: // Si 1T2 et 2T3 et 3T4 et 4T5 alors 1//5
          code = [[1, 2, -1], [2, 3, -1], [3, 4, -1], [4, 5, -1]];
          break;

      }

      // enoncé mélangé
      texte += `On sait que `
      couleurd.push(randint(0, 5))
      for (let j = 0; j < code.length; j++) {
        textetemp = `$(d_${numDroites[code[j][0] - 1]})`;
        if (code[j][2] == 1) {
          textetemp += `//`
          couleurd.push(couleurd[j])
        }
        else {
          textetemp += `\\perp`
          couleurd.push((couleurd[j] + 1) % 6)
        }
        textetemp += `(d_${numDroites[code[j][1] - 1]})$`
        phrases.push(textetemp)
      }
      //phrases=shuffle(phrases)
      for (let j = 0; j < code.length - 1; j++) {
        texte += phrases[j]
        if (j != code.length - 2) texte += `, `
        else texte += ` et `
      }
      texte += phrases[code.length - 1]
      texte += `.<br>Que peut-on dire de $(d_${numDroites[code[0][0] - 1]})$ et $(d_${numDroites[code[code.length - 1][1] - 1]})$ ?`

      //construction de la figure

      P.push(point(0, 0))
      droiteP = droiteParPointEtPente(P[0], randint(-1, 1, 0) / 10, `(d${num1}${numDroites[code[0][0] - 1]}${num2}`, droitecolor(couleurd[0]))
      droiteP.epaisseur = 2
      droite.pointilles = false
      d.push(droiteP)
      objets.push(d[0])
      for (let x = 0; x < code.length; x++) {
        if (code[x][2] == 1) {
          P.push(point((x + 1) * 2, (x + 1) * 2))
          droiteP = droiteParPointEtParallele(P[x + 1], d[x], `(d${num1}${numDroites[code[x][1] - 1]}${num2}`, droitecolor(couleurd[x + 1]))
          droiteP.epaisseur = 2
          droiteP.pointilles = d[x].pointilles
          d.push(droiteP)
        }
        else {
          P.push(point((x + 1) * 2, (x + 1) * 2))
          droiteP = droiteParPointEtPerpendiculaire(P[x + 1], d[x], `(d${num1}${numDroites[code[x][1] - 1]}${num2}`, droitecolor(couleurd[x + 1]))
          droiteP.epaisseur = 2
          droiteP.pointilles = x % 3 + 1
          Inter = pointIntersectionDD(d[x], droiteP)
          PP = rotation(P[x + 1], Inter, 90)
          d.push(droiteP)
          objets.push(codageAngleDroit(PP, Inter, P[x + 1], 'black', 0.6))
        }
        objets.push(d[x + 1])
      }
      for (let i = 0; i < code.length; i++) { // on ajoute les angles droits

      }
      // correction raisonnement ordonné
      fenetreMathalea2d = [-2, -2, 15, 10]
      texte_corr = `À partir de l\'énoncé, on peut réaliser le schéma suivant (il en existe une infinité)<br> Les droites données parallèles dans l'énoncé sont de même couleur/style.<br>`
      texte_corr += mathalea2d({ xmin: -2, xmax: 15, ymin: -2, ymax: 10, pixelsParCm: 20, scale: 0.3, mainlevee: false, amplitude: 0.3 }, objets) + `<br>`
      for (let j = 0; j < code.length - 1; j++) {
        if (this.correction_detaillee) texte_corr += `On sait que : `
        else texte_corr += `Comme `
        texte_corr += `$(d_${numDroites[code[j][0] - 1]})`;
        if (code[j][2] == 1) texte_corr += `//`
        else texte_corr += `\\perp`
        texte_corr += `(d_${numDroites[code[j][1] - 1]})$ et `
        texte_corr += `$(d_${numDroites[code[j + 1][0] - 1]})`;
        if (code[j + 1][2] == 1) texte_corr += `//`
        else texte_corr += `\\perp`
        texte_corr += `(d_${numDroites[code[j + 1][1] - 1]})$`
        // quelle propriété ?
        if (code[j][2] * code[j + 1][2] == -1) { // Une parallèle et une perpendiculaire
          if (this.correction_detaillee) texte_corr += `.<br> Or «Si deux droites sont parallèles alors toute droite perpendiculaire à l'une est aussi perpendiculaire à l'autre».<br>Donc`
          else texte_corr += `, on en déduit que `
          texte_corr += ` $(d_${numDroites[code[0][0] - 1]})\\perp(d_${numDroites[code[j + 1][1] - 1]})$.<br>`
          code[j + 1][0] = code[j][0]
          code[j + 1][2] = -1
        }
        else if (code[j][2] > 0) { // deux parallèles
          if (this.correction_detaillee) texte_corr += `.<br> Or «Si deux droites sont parallèles à une même droite alors elles sont parallèles entre elles».<br>Donc`
          else texte_corr += `, on en déduit que `
          texte_corr += ` $(d_${numDroites[code[0][0] - 1]})//(d_${numDroites[code[j + 1][1] - 1]})$.<br>`
          code[j + 1][0] = code[j][0]
          code[j + 1][2] = 1

        }
        else { //deux perpendiculaires
          if (this.correction_detaillee) texte_corr += `.<br> Or «Si deux droites sont perpendiculaires à une même droite alors elles sont parallèles entre elles».<br>Donc`
          else texte_corr += `, on en déduit que `
          texte_corr += ` $(d_${numDroites[code[0][0] - 1]})//(d_${numDroites[code[j + 1][1] - 1]})$.<br>`
          code[j + 1][0] = code[j][0]
          code[j + 1][2] = 1

        }


      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte + "<br>");
        this.liste_corrections.push(texte_corr + "<br>");
        i++;
      }
      cpt++;
    }

    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ['Nombre d\'étapes de raisonnement :', 4, `1 : 1 étape\n 2 : 2 étapes\n 3 : 3 étapes\n4 : Mélange aléatoire`]
  // this.besoin_formulaire2_case_a_cocher = [
  //  "Avec figure ? ",false];
}

