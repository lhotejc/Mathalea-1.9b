import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Organiser donnees depuis texte
 * @Auteur Erwan Duplessy
 * Référence 6S11
 */

// source : http://www.ac-grenoble.fr/savoie/pedagogie/docs_pedas/ogd_c2_c3/ogd_c2_c3.pdf

export default function Organiser_donnees_depuis_texte() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Organiser des données dans un tableau";
  this.consigne = "Répondre aux questions à l'aide du texte.";
  this.nb_questions = 4;
  this.nb_questions_modifiable = false;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = false; // false -> effectif ; true -> masse
  this.sup2 = 4; // paramètre nombre de fruit
  sortie_html ? this.spacing = 2 : this.spacing = 1;
  sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1;

  this.nouvelle_version = function () {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let nbAmis = 4; // min = 2
    let nbFruits = parseInt(this.sup2); // min = 2
    let lstPrenomExo = []
    let k = 0;
    while (lstPrenomExo.length < nbAmis) {
      let p = prenom();
      if (!lstPrenomExo.includes(p)) {
        lstPrenomExo.push(p);
      }
    }

    let lstFruit = ['pomme', 'poire', 'kiwi', 'pêche', 'coing', 'melon', 'citron', 'banane', 'mangue'];
    let lstFruitExo = [];
    // Choisir les fruits : 
    for (let i = 0; i < nbFruits; i++) {
      lstFruitExo.push(choice(lstFruit, lstFruitExo));
    }
    // Choisir les quantités de fruits pour chaque prénoms : 
    let lstTabVal = []; // tableau i : amis et j : fruits
    let L = []; // tab temporaire
    for (let i = 0; i < nbAmis; i++) {
      for (let j = 0; j < nbFruits; j++) {
        if (this.sup) {
          if (randint(0, 8) > 0) {
            L.push(randint(0, 100) / 10);
          } else {
            L.push(0);
          }

        } else {
          L.push(randint(0, 10));
        }
      }
      lstTabVal.push(L);
      L = [];
    }
    // Affiche l'énoncé :
    texte = `Plusieurs amis reviennent du marché. Il s'agit de `;
    for (let i = 0; i < nbAmis - 2; i++) {
      texte += lstPrenomExo[i] + ', '
    }
    texte += lstPrenomExo[nbAmis - 2] + ' et ' + lstPrenomExo[nbAmis - 1] + '.<br>';
    let N;
    //boucle sur les phrases. 1 phrase par personne.
    for (let i = 0; i < nbAmis; i++) {
      texte += lstPrenomExo[i] + ' rapporte ';
      L = []; // ne contient que les fruits d'effectifs strictement positifs
      for (let j = 0; j < nbFruits; j++) {
        N = lstTabVal[i][j];
        if (N > 0) {
          L.push([N, lstFruitExo[j]])
        }
      }
      m = L.length
      L = shuffle(L); // mélange l'ordre des fruits
      for (let k = 0; k < m; k++) {
        if (this.sup) {
          texte += tex_nombre(L[k][0]) + ' kg de ' + L[k][1] + 's';
        } else {
          texte += tex_nombre(L[k][0]) + ' ' + L[k][1];
          if (L[k][0] > 1) { texte += 's' }
        }
        if (k < m - 2) { texte += ', ' }
        if (k == m - 2) { texte += ' et ' }
      }
      texte += '. <br>'
    }
    texte += '<br>'
    texte += num_alpha(0) + ` Remplir le tableau suivant. <br>`;

    if (this.sup) {
      texte += num_alpha(1) + ` Quel est la masse totale de fruits achetés par les amis ? <br>`;
    } else {
      texte += num_alpha(1) + ` Quel est le nombre total de fruits achetés par les amis ? <br>`;
    }
    texte += num_alpha(2) + ` Qui a rapporté le plus de fruits ? <br>`;
    texte += num_alpha(3) + ` Quel fruit a été rapporté en la plus grosse quantité ? <br><br>`;

    texte += `$\\begin{array}{|l|` + `c|`.repeat(nbFruits + 1) + `}\n`;
    texte += `\\hline\n`;
    texte += ` `;
    for (let j = 0; j < nbFruits; j++) {
      texte += ` & \\textbf{\\text{` + premiere_lettre_en_majuscule(lstFruitExo[j]) + `}}`;
    }
    texte += '& \\textbf{TOTAL}';
    texte += `\\\\\\hline\n`;
    for (let i = 0; i < nbAmis; i++) {
      texte += `\\textbf{\\text{${lstPrenomExo[i]}}}` + `& `.repeat(nbFruits) + ` & `;
      texte += `\\\\\\hline\n`;
    }
    texte += '\\textbf{TOTAL}' + '& '.repeat(nbFruits) + ` & `;
    texte += `\\\\\\hline\n`;
    texte += `\\end{array}\n$`;

    //CORRECTION
    // Question 1 :
    texte_corr = num_alpha(0) + ` Voici le tableau complet. <br>`;
    texte_corr += `$\\begin{array}{|l|` + `c|`.repeat(nbFruits + 1) + `}\n`;
    texte_corr += `\\hline\n`;
    texte_corr += ` `;
    for (let j = 0; j < nbFruits; j++) {
      texte_corr += ` & \\text{${lstFruitExo[j]}}`;
    }
    texte_corr += '& TOTAL';
    texte_corr += `\\\\\\hline\n`;
    for (let i = 0; i < nbAmis; i++) {
      texte_corr += `\\text{${lstPrenomExo[i]}}`;
      let S = 0; // pour calculer les sommes
      for (let j = 0; j < nbFruits; j++) {
        texte_corr += '& ' + tex_nombre(lstTabVal[i][j]); //valeur dans le tableau
        S += lstTabVal[i][j]; // somme d'une ligne
      }
      texte_corr += '& ' + arrondi_virgule(S);
      texte_corr += `\\\\\\hline\n`;
    }
    texte_corr += 'TOTAL';
    let S_total = 0; // somme totale de tous les fruits
    for (let j = 0; j < nbFruits; j++) {
      S = 0;
      for (let i = 0; i < nbAmis; i++) {
        S += lstTabVal[i][j]; // somme d'une colonne
      }
      //texte_corr += '& ' + Math.round(S*10)/10;
      texte_corr += '& ' + arrondi_virgule(S, 1);
      //texte_corr += '& ' + tex_nombre(S,1);
      S_total += S;
    }
    texte_corr += '& ' + arrondi_virgule(S_total);
    texte_corr += `\\\\\\hline\n`;
    texte_corr += `\\end{array}\n$`;
    texte_corr += `<br>`

    // Question 2 :
    S_total = arrondi_virgule(S_total);
    if (this.sup) {
      texte_corr += num_alpha(1) + ` La masse totale de fruits est : ${S_total} kg. <br>`;
    } else {
      texte_corr += num_alpha(1) + ` Le nombre total de fruits est : ${S_total}. <br>`;
    }

    // Question 3 :
    texte_corr += num_alpha(2) + ` On regarde la dernière colonne du tableau. `;
    let lstmax = []; //liste des prénoms solutions
    let nmax = 0; // nombre max de fruit pour une personne
    for (let i = 0; i < nbAmis; i++) {
      S = 0;
      for (let j = 0; j < nbFruits; j++) {
        S += lstTabVal[i][j]; // somme d'une ligne
      }
      if (S == nmax) {
        lstmax.push(lstPrenomExo[i]);
      }
      if (S > nmax) {
        nmax = S;
        lstmax = [lstPrenomExo[i]];
      }
    }
    nmax = arrondi_virgule(nmax, 1);
    if (lstmax.length > 1) {
      texte_corr += `Les personnes qui ont rapporté le plus de fruits sont : `;
      texte_corr += lstmax[0];
      for (let k = 1; k < lstmax.length; k++) {
        texte_corr += ` et ${lstmax[k]}`;
      }
      if (this.sup) {
        texte_corr += `. La masse maximale rapportée est de ${nmax} kg.<br>`;
      } else {
        texte_corr += `. Le nombre maximal de fruits rapporté par une personne est de ${nmax}.<br>`;
      }
    } else {
      if (this.sup) {
        texte_corr += `La personne qui a rapporté le plus de fruits est ${lstmax}. Cette masse maximale est de ${nmax} kg.<br>`;
      } else {
        texte_corr += `La personne qui a rapporté le plus de fruits est ${lstmax}. Ce nombre maximal de fruits est de ${nmax}.<br>`;
      }
    }

    // Question 4 :
    texte_corr += num_alpha(3) + ` On regarde la dernière ligne du tableau. `;
    let fmax = []; //liste des fruits apporté en quantité max
    nmax = 0; // nombre max par type de fruit 
    for (let j = 0; j < nbFruits; j++) {
      S = 0;
      for (let i = 0; i < nbAmis; i++) {
        S += lstTabVal[i][j]; // somme d'une colonne
      }
      if (S == nmax) {
        fmax.push(lstFruitExo[j])
      }
      if (S > nmax) {
        nmax = S;
        fmax = [lstFruitExo[j]];
      }
    }
    nmax = arrondi_virgule(nmax, 1);
    if (fmax.length > 1) {
      if (this.sup) {
        texte_corr += `Les fruits présents en la plus grosse quantité sont : `;
      } else {
        texte_corr += `Les fruits les plus nombreux sont : `;
      }
      texte_corr += `Les fruits les plus nombreux sont : `;
      texte_corr += `les ${fmax[0]}s`;
      for (let k = 1; k < fmax.length; k++) {
        texte_corr += ` et les ${fmax[k]}s`;
      }
      texte_corr += `. Il y en a ${nmax} de chaque sorte.<br>`;
    } else {
      if (this.sup) {
        texte_corr += `Il y a plus de ${fmax}s que d'autres fruits. Il y en a ${nmax} kg.`;
      } else {
        texte_corr += `Il y a plus de ${fmax}s que d'autres fruits. Il y en a ${nmax}.`;
      }
    }

    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this);
  }
  this.besoin_formulaire2_numerique = ['Nombre de fruits différents', 8];
  this.besoin_formulaire_case_a_cocher = ['Pour utiliser des nombres décimaux et des masses', false];
}

