import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Calculer la fracton d'une quantité avec ou sans dessin.
 * @Auteur Jean-Claude Lhote
 * référence 6N33-0
 */
export default function Fraction_d_une_quantite() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculer la fraction d'une quantité";
  this.nb_questions = 5;
  this.consigne = "Calculer";
  sortie_html ? (this.spacing_corr = 3.5) : (this.spacing_corr = 2);
  sortie_html ? (this.spacing = 2) : (this.spacing = 2);
  this.sup = 1;
  this.sup2 = true
  this.nb_cols = 1;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let type_de_questions_disponibles
    let liste_type_de_questions = []
    if (this.sup < 5)
      type_de_questions_disponibles = [parseInt(this.sup)]
    else
      type_de_questions_disponibles = [1, 2, 3, 4]
    liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions)
    for (
      let i = 0, den, num, choix, longueur, numIrred, denIrred, k, masse, frac, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1:
          den = choice([2, 3, 4, 5, 10])
          num = randint(1, den - 1)
          frac = fraction(num, den)
          texte = `À combien de minutes correspondent $${frac.texFraction()}$ d\'heure ?<br>`
          if (this.sup2) {
            texte += `cette fraction est représentée ci dessous :<br>`
            texte += mathalea2d({ xmin: 0, ymin: 0, xmax: 15, ymax: 5 }, frac.representation(2.5, 2.5, 2, 0, 'gateau', 'blue'))
          }
          texte_corr = `Comme l\'heure est partagée en ${den} parts égales, chaque part représente $${tex_fraction(1, den)}$ d\'heure, soit $${calcul(60 / den)}$ minutes.<br>`
          texte_corr += `Ici, il y a $${tex_fraction(num, den)}$ d\'heure, ce qui représente $${num}$ fois plus, soit $${num}\\times${calcul(60 / den)}=${calcul(num * 60 / den)}$.<br>`
          texte_corr += `$${frac.texFraction()}$ d\'heure correspond donc à $${calcul(num * 60 / den)}$ minutes.`
          break
        case 2:
          den = choice([2, 3, 4, 5, 10])
          num = randint(1, 3 * den, den)
          frac = fraction(num, den)
          texte = `À combien de minutes correspondent $${frac.texFraction()}$ d\'heure ?<br>`
          if (this.sup2) {
            texte += `Cette fraction est représentée ci dessous :<br>`
            texte += mathalea2d({ xmin: 0, ymin: 0, xmax: 15, ymax: 5 }, frac.representation(2.5, 2.5, 2, 0, 'gateau', 'blue'))
          }
          texte_corr = `Comme l\'heure est partagée en ${den} parts égales, chaque part représente $${tex_fraction(1, den)}$ d\'heure, soit $${calcul(60 / den)}$ minutes.<br>`
          texte_corr += `Ici, il y a $${tex_fraction(num, den)}$ d\'heure, ce qui représente $${num}$ fois plus, soit $${num}\\times${calcul(60 / den)}=${calcul(num * 60 / den)}$.<br>`
          texte_corr += `$${frac.texFraction()}$ d\'heure correspond donc à $${calcul(num * 60 / den)}$ minutes.`
          break
        case 3:
          masse = choice([120, 180, 240, 300])
          denIrred = choice([2, 3, 4, 5, 10])
          numIrred = randint(1, denIrred - 1)
          while (pgcd(denIrred, numIrred) != 1 || calcul(denIrred / numIrred) == 2) {
            denIrred = choice([2, 3, 4, 5, 10])
            numIrred = randint(1, denIrred - 1)
          }
          frac = fraction(numIrred, denIrred)
          frac2 = frac.entierMoinsFraction(1)
          texte = `Voici une tablette de chocolat dont la masse totale est de $${masse}$ grammes. Quelqu'un en a déjà consommé les $${frac.texFractionSimplifiee()}$.<br>`
          choix = randint(1, 2)
          if (choix == 1) {
            texte += `Quelle masse de chocoloat a-t-elle été consommée ?<br>`
            texte_corr = `Comme la tablette a une masse de $${masse}$ grammes, $${tex_fraction(1, denIrred)}$ de la tablette représente une masse de $${calcul(masse / denIrred)}$ grammes.<br>`
            texte_corr += `Ici, il y a $${frac.texFractionSimplifiee()}$ de la tablette qui a été consommé, ce qui représente $${numIrred}$ fois plus, soit $${numIrred}\\times${calcul(masse / denIrred)}=${calcul(numIrred * masse / denIrred)}$.<br>`
            texte_corr += `La masse de chocolat consommée est $${calcul(numIrred * masse / denIrred)}$ grammes.`
          }
          else {
            texte += `Quelle masse de chocolat reste-t-il ?<br>`
            texte_corr = `Comme la tablette a une masse de $${masse}$ grammes, $${tex_fraction(1, denIrred)}$ de la tablette représente une masse de $${calcul(masse / denIrred)}$ grammes.<br>`
            texte_corr += `Ici, il y a $${frac.texFractionSimplifiee()}$ de la tablette qui a été consommé, ce qui représente $${numIrred}$ fois plus, soit $${numIrred}\\times${calcul(masse / denIrred)}=${calcul(numIrred * masse / denIrred)}$.<br>`
            texte_corr += `La masse de chocolat consommée est $${calcul(numIrred * masse / denIrred)}$ grammes.<br>`
            texte_corr += `Il reste donc : $${masse}-${calcul(numIrred * masse / denIrred)}=${calcul(masse - numIrred * masse / denIrred)}$ grammes de chocolat.<br>`
            texte_corr += `une autre façon de faire est d'utiliser la fraction restante : $${tex_fraction(denIrred, denIrred)}-${frac.texFractionSimplifiee()}=${tex_fraction(denIrred - numIrred, denIrred)}$.<br>`
            texte_corr += `$${tex_fraction(denIrred - numIrred, denIrred)}$ de $${masse}$ grammes c\'est $${denIrred - numIrred}$ fois $${calcul(masse / denIrred)}$ grammes.<br>`
            texte_corr += `Il reste donc : $${denIrred - numIrred}\\times${calcul(masse / denIrred)}=${(denIrred - numIrred) * masse / denIrred}$ grammes de chocolat.`

          }
          if (this.sup2) {
            texte += `La tablette de chocolat est représentée ci dessous :<br>`
            texte += mathalea2d({ xmin: -0.5, ymin: -0.5, xmax: 5, ymax: 7 }, frac2.representationIrred(0, 0, 4, 0, 'baton', 'brown'))
          }
          break
        case 4:
          den = choice([2, 3, 4, 5, 10])
          num = randint(1, den - 1)
          longueur = choice([120, 180, 240, 300])
          denIrred = choice([2, 3, 4, 5, 10])
          numIrred = randint(1, denIrred - 1)
          while (pgcd(denIrred, numIrred) != 1 || calcul(denIrred / numIrred) == 2) {
            denIrred = choice([2, 3, 4, 5, 10])
            numIrred = randint(1, denIrred - 1)
          }
          k = calcul(300 / denIrred)
          den = calcul(denIrred * k)
          num = calcul(numIrred * k)
          frac = fraction(num, den)
          texte = `Un bâton de $${tex_nombrec(longueur / 100)}$ mètre`
          if (longueur >= 200) texte += `s`
          texte += ` de longueur est coupé à $${frac.texFractionSimplifiee()}$ de sa longueur.<br>`
          texte += `Calculer la longueur de chacun des morceaux en mètres.<br>`
          if (this.sup2) {
            texte += `Ce bâton est représenté ci dessous :<br>`
            texte += mathalea2d({ xmin: -0.5, ymin: 0, xmax: 10, ymax: 2 }, frac.representationIrred(0, 1, 8, 0, 'segment', 'blue', "0", `${tex_nombre(calcul(longueur / 100))}`))
          }
          texte_corr = `$${tex_fraction(1, denIrred)}$ de $${tex_nombrec(longueur / 100)}$ représente $${tex_nombrec(longueur / 100)} \\div ${denIrred} = ${tex_nombrec(longueur / 100 / denIrred)}$.<br>`
          texte_corr += `Le premier morceau du bâton correspondant à $${frac.texFractionSimplifiee()}$ du bâton mesure : $${numIrred} \\times ${tex_nombrec(longueur / 100 / denIrred)}=${tex_nombrec(numIrred * longueur / 100 / denIrred)}$ m.<br>`
          texte_corr += `Le deuxième morceau mesure donc : $${tex_nombrec(longueur / 100)}-${tex_nombrec(numIrred * longueur / 100 / denIrred)}=${tex_nombrec(longueur / 100 - numIrred * longueur / 100 / denIrred)}$ m.`

          break
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
  this.besoin_formulaire_numerique = ["Type d\'exercices", 5, "1 : Heures & minutes (inférieur à 1h)\n2 : Heures & minutes (jusqu\'à 3h)\n3 : tablettes de chocolat\n4 : Bâton cassé\n5 : Mélange"];
  this.besoin_formulaire2_case_a_cocher = ["Avec dessin", true];
}
