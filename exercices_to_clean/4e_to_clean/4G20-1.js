import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Exercices sur le théorème de Pythagore avec MathALEA2D
 * @Auteur Rémi Angot
 * 4G20
 */
export default function Pythagore2D() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculer une longueur avec le théorème de Pythagore";
  this.nb_questions = 3;
  this.nb_cols = 3;
  this.nb_cols_corr = 1;
  this.type_exercice = 'Calculer'

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_type_de_questions = [];
    let liste_de_noms_de_polygones = [];
    if (this.sup == 1) {
      this.consigne = "Dans chaque cas, donner l'égalité de Pythagore."
    } else if (this.sup == 2) {
      this.consigne = "Dans chaque cas, compléter l'égalité en utilisant le théorème de Pythagore."
    } else {
      this.consigne = "Dans chaque cas, calculer la longueur manquante."
    }
    if (this.sup == 2 || this.type_exercice == 'Calculer') {
      liste_type_de_questions = combinaison_listes(['AB', 'BC', 'AC'], this.nb_questions)
    }
    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
      texte = '';
      texte_corr = '';
      let A1 = point(0, 0)
      let B1 = point(calcul(randint(22, 50) / 10), 0)
      let C1 = similitude(B1, A1, 90, calcul(randint(22, 50) / 10) / longueur(A1, B1))
      let p1 = polygone(A1, B1, C1)
      p1.isVisible = false
      let p2 = rotation(p1, A1, randint(0, 360))
      let A = p2.listePoints[0]
      let B = p2.listePoints[1]
      let C = p2.listePoints[2]
      let codage = codageAngleDroit(B, A, C)
      let xmin = Math.min(A.x, B.x, C.x) - 1
      let ymin = Math.min(A.y, B.y, C.y) - 1
      let xmax = Math.max(A.x, B.x, C.x) + 1
      let ymax = Math.max(A.y, B.y, C.y) + 1
      let nomDuPolygone = creerNomDePolygone(3, liste_de_noms_de_polygones);
      liste_de_noms_de_polygones.push(nomDuPolygone)
      let nomme = nommePolygone(p2, nomDuPolygone)
      let affAB = afficheLongueurSegment(B, A)
      let affAC = afficheLongueurSegment(A, C)
      let affBC = afficheLongueurSegment(C, B)
      let longueurAB = longueur(A, B, 1)
      let longueurAC = longueur(A, C, 1)
      let longueurBC = longueur(B, C, 1)
      let mesObjetsATracer = [codage, p2, nomme]

      if (this.type_exercice == 'Calculer' && liste_type_de_questions[i] == 'AB') {
        mesObjetsATracer.push(affAC, affBC)
      }
      if (this.type_exercice == 'Calculer' && liste_type_de_questions[i] == 'BC') {
        mesObjetsATracer.push(affAC, affAB)
      }
      if (this.type_exercice == 'Calculer' && liste_type_de_questions[i] == 'AC') {
        mesObjetsATracer.push(affAB, affBC)
      }

      if (!sortie_html) { texte = '~\\\\' }
      texte += mathalea2d({ xmin: xmin, xmax: xmax, ymin: ymin, ymax: ymax, scale: .6 }, mesObjetsATracer);
      if (this.sup == 2) {
        if (liste_type_de_questions[i] == 'AB') {
          texte += `<br>$${A.nom + B.nom}^2=\\ldots$`
        }
        if (liste_type_de_questions[i] == 'BC') {
          texte += `<br>$${B.nom + C.nom}^2=\\ldots$`
        }
        if (liste_type_de_questions[i] == 'AC') {
          texte += `<br>$${A.nom + C.nom}^2=\\ldots$`
        }
      }
      if (!sortie_html && i != this.nb_questions - 1) { texte += '\\columnbreak' } //pour la sortie LaTeX sauf la dernière question

      texte_corr = `Le triangle $${nomDuPolygone}$ est rectangle en $${A.nom}$ donc d'après le théorème de Pythagore, on a : `;
      texte_corr += `$${B.nom + C.nom}^2=${A.nom + B.nom}^2+${A.nom + C.nom}^2$`
      if (this.sup == 2) {
        if (liste_type_de_questions[i] == 'AB') {
          texte_corr += ` d'où $${A.nom + B.nom}^2=${B.nom + C.nom}^2-${A.nom + C.nom}^2$.`
        }
        if (liste_type_de_questions[i] == 'BC') {
          texte_corr += `.`
        }
        if (liste_type_de_questions[i] == 'AC') {
          texte_corr += ` d'où $${A.nom + C.nom}^2=${B.nom + C.nom}^2-${A.nom + B.nom}^2$.`
        }
      }
      if (this.type_exercice == "Calculer") {
        if (liste_type_de_questions[i] == 'AB') {
          texte_corr += ` donc $${A.nom + B.nom}^2=${B.nom + C.nom}^2-${A.nom + C.nom}^2$`
          texte_corr += `<br> $${A.nom + B.nom}^2=${tex_nombre(longueurBC)}^2-${tex_nombre(longueurAC)}^2=${tex_nombrec(longueurBC ** 2 - longueurAC ** 2)}$`
          texte_corr += `<br> $${A.nom + B.nom}=\\sqrt{${tex_nombrec(longueurBC ** 2 - longueurAC ** 2)}}$`
          if (calcul(Math.sqrt(longueurBC ** 2 - longueurAC ** 2), 1) == calcul(Math.sqrt(longueurBC ** 2 - longueurAC ** 2), 5)) {
            texte_corr += `<br> $${A.nom + B.nom}=${tex_nombre(calcul(Math.sqrt(longueurBC ** 2 - longueurAC ** 2), 1))}$ cm.`
          } else {
            texte_corr += `<br> $${A.nom + B.nom}\\approx${tex_nombre(calcul(Math.sqrt(longueurBC ** 2 - longueurAC ** 2), 1))}$ cm.`
          }
        }
        if (liste_type_de_questions[i] == 'BC') {
          texte_corr += `<br> $${B.nom + C.nom}^2=${tex_nombre(longueurAB)}^2+${tex_nombre(longueurAC)}^2=${tex_nombrec(longueurAB ** 2 + longueurAC ** 2)}$`
          texte_corr += `<br> $${B.nom + C.nom}=\\sqrt{${tex_nombrec(longueurAB ** 2 + longueurAC ** 2)}}$`
          if (calcul(Math.sqrt(longueurAB ** 2 + longueurAC ** 2), 1) == calcul(Math.sqrt(longueurAB ** 2 + longueurAC ** 2), 5)) {
            texte_corr += `<br> $${B.nom + C.nom}=${tex_nombre(calcul(Math.sqrt(longueurAB ** 2 + longueurAC ** 2), 1))}$ cm.`
          } else {
            texte_corr += `<br> $${B.nom + C.nom}\\approx${tex_nombre(calcul(Math.sqrt(longueurAB ** 2 + longueurAC ** 2), 1))}$ cm.`
          }
        }
        if (liste_type_de_questions[i] == 'AC') {
          texte_corr += ` donc $${A.nom + C.nom}^2=${B.nom + C.nom}^2-${A.nom + B.nom}^2$`
          texte_corr += `<br> $${A.nom + C.nom}^2=${tex_nombre(longueurBC)}^2-${tex_nombre(longueurAB)}^2=${tex_nombrec(longueurBC ** 2 - longueurAB ** 2)}$`
          texte_corr += `<br> $${A.nom + C.nom}=\\sqrt{${tex_nombrec(longueurBC ** 2 - longueurAB ** 2)}}$`
          if (calcul(Math.sqrt(longueurBC ** 2 - longueurAB ** 2), 1) == calcul(Math.sqrt(longueurBC ** 2 - longueurAB ** 2), 5)) {
            texte_corr += `<br> $${A.nom + C.nom}=${tex_nombre(calcul(Math.sqrt(longueurBC ** 2 - longueurAB ** 2), 1))}$ cm.`
          } else {
            texte_corr += `<br> $${A.nom + C.nom}\\approx${tex_nombre(calcul(Math.sqrt(longueurBC ** 2 - longueurAB ** 2), 1))}$ cm.`
          }
        }
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
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Donner l'égalité de Pythagore\n2 : Compléter l'égalité de Pythagore\n3 : Calculer une longueur manquante"];
}
// 4G20-1
function Egalite_Pythagore2D() {
  Pythagore2D.call(this);
  this.titre = "Donner ou compléter une égalité de Pythagore"
  this.sup = 1;
  this.type_exercice = ''
  this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, "1 : Donner l'égalité de Pythagore\n2 : Compléter l'égalité de Pythagore"];

}

