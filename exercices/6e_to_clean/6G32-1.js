import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Ref 6G32-1
 * Publié le 26/10/2020
 * @Auteur Jean-Claude Lhote
 */
export default function Symetrie_axiale_conservation1() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Propriétés de conservation de la symétrie axiale";
  this.consigne = "";
  this.nb_questions = 4;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    let type_de_questions_disponibles = ["Segment", "Droite", "1/2droite", "Triangle", "Angle"];
    let points = [], traces = [], nom = [], alternance
    for (let i = 0; i < 25; i++) nom.push(lettre_depuis_chiffre(i + 1))
    let noms = shuffle(nom)

    let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions);
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    this.liste_questions.push(`${texte_gras('Dans la symétrie d\'axe (d)...')}`);
    this.liste_corrections.push(`${texte_gras('Dans la symétrie d\'axe (d)...')}`);
    // On prépare la figure...
    let axe = parseInt(this.sup)
    let d, nonchoisi, coords = [], x, y, objets_enonce = [], objets_correction = [], nomd, label_pos
    if (axe == 5) axe = randint(1, 4) //choix de l'axe et des coordonnées
    switch (axe) {
      case 1: d = droite(1, 0, 0);
        nomd = texteParPosition('(d)', 0.3, 5.6)
        label_pos = 'above left'
        for (let i = 0; i < 12; i++) {
          nonchoisi = false
          while (!nonchoisi) { // Le nouveau point est-il déjà dans la liste ?
            [x, y] = [randint(-5, 0), randint(-5, 5)]
            nonchoisi = true
            for (let j = 0; j < i; j++)
              if (coords[j][0] == x && coords[j][1] == y) nonchoisi = false
          }
          coords.push([x, y]) //on stocke les 12 points
        }
        for (let j = 0; j < 12; j++) coords.push([-coords[j][0], coords[j][1]]) // on stocke les 12 images
        break;
      case 2: d = droite(0, 1, 0);
        label_pos = 'above'
        nomd = texteParPosition('(d)', 5.6, 0.3)
        for (let i = 0; i < 12; i++) {
          nonchoisi = false
          while (!nonchoisi) { // Le nouveau point est-il déjà dans la liste ?
            [x, y] = [randint(-5, 5), randint(-5, 0)]
            nonchoisi = true
            for (let j = 0; j < i; j++)
              if (coords[j][0] == x && coords[j][1] == y) nonchoisi = false
          }
          coords.push([x, y]) //on stocke les 12 points
        }
        for (let j = 0; j < 12; j++) coords.push([coords[j][0], -coords[j][1]]) // on stocke les 12 images
        break;
      case 3: d = droite(1, -1, 0);
        label_pos = 'above'
        nomd = texteParPosition('(d)', -5.8, -5.4)
        for (let i = 0; i < 12; i++) {
          nonchoisi = false
          while (!nonchoisi) { // Le nouveau point est-il déjà dans la liste ?
            x = randint(-5, 5)
            y = randint(x, 5)
            nonchoisi = true
            for (let j = 0; j < i; j++)
              if (coords[j][0] == x && coords[j][1] == y) nonchoisi = false
          }
          coords.push([x, y]) //on stocke les 12 points
        }
        for (let j = 0; j < 12; j++) coords.push([coords[j][1], coords[j][0]]) // on stocke les 12 images
        break;
      case 4: d = droite(1, 1, 0);
        label_pos = 'above'
        nomd = texteParPosition('(d)', -5.8, 5.4)
        for (let i = 0; i < 12; i++) {
          nonchoisi = false
          while (!nonchoisi) { // Le nouveau point est-il déjà dans la liste ? Si oui, on recommence.
            x = randint(-5, 5)
            y = randint(-5, -x)
            nonchoisi = true
            for (let j = 0; j < i; j++)
              if (coords[j][0] == x && coords[j][1] == y)
                nonchoisi = false;
          }
          coords.push([x, y]) //on stocke les 12 points
        }
        for (let j = 0; j < 12; j++)
          coords.push([-coords[j][1], -coords[j][0]]); // on stocke les 12 images
        break;
    }
    for (let i = 0; i < 24; i++) {
      if (i < 12) points.push(point(coords[i][0], coords[i][1], noms[i], label_pos))
      else if (coords[i][0] == coords[i - 12][0] && coords[i][1] == coords[i - 12][1]) {
        points.push(point(coords[i][0], coords[i][1], noms[i - 12], label_pos))
        noms[i] = noms[i - 12]
      }
      else points.push(point(coords[i][0], coords[i][1], noms[i], label_pos))
      traces.push(tracePoint(points[i]));
    }
    // On rédige les questions et les réponses
    if (this.sup2 == true) alternance = 2
    else alternance = 1
    function index(i) {
      return (i + 12 * (i % alternance)) % 24
    }
    objets_enonce.length = 0
    objets_correction.lenght = 0
    for (let i = 0, texte, texte_corr, choix, cpt = 0; i < this.nb_questions && cpt < 50;) {

      switch (liste_type_de_questions[i]) {
        case "Segment":
          choix = randint(0, 10) + randint(0, 1) * 12
          texte = `Quel est le symétrique du segment $[${noms[index(choix)]}${noms[index(choix + 1)]}]$ ?`
          texte_corr = `Le symétrique du segment $[${noms[index(choix)]}${noms[index(choix + 1)]}]$ est le segment $[${noms[index(choix + 12)]}${noms[index(choix + 13)]}]$.`
          s1 = segment(points[index(choix)], points[index(choix + 1)], texcolors(i * 3 + 2))
          s2 = segment(points[index(choix + 12)], points[index(choix + 13)], texcolors(i * 3 + 2))
          s1.epaisseur = 2
          s2.epaisseur = 2
          objets_correction.push(s1, s2)
          break;
        case "Droite":
          choix = randint(0, 10) + randint(0, 1) * 12
          texte = `Quel est la symétrique de la droite $(${noms[index(choix)]}${noms[index(choix + 1)]})$ ?`
          texte_corr = `La symétrique de la droite $(${noms[index(choix)]}${noms[index(choix + 1)]})$ est la droite $(${noms[index(choix + 12)]}${noms[index(choix + 13)]})$.`
          objets_correction.push(droite(points[index(choix)], points[index(choix + 1)], "", texcolors(i * 3 + 2)))
          objets_correction.push(droite(points[index(choix + 12)], points[index(choix + 13)], "", texcolors(i * 3 + 2)))
          break;
        case "1/2droite":
          choix = randint(0, 10) + randint(0, 1) * 12
          texte = `Quel est la symétrique de la demi-droite $[${noms[index(choix)]}${noms[index(choix + 1)]})$ ?`
          texte_corr = `La symétrique de la demi-droite $[${noms[index(choix)]}${noms[index(choix + 1)]})$ est la demi-droite $[${noms[index(choix + 12)]}${noms[index(choix + 13)]})$`
          objets_correction.push(demiDroite(points[index(choix)], points[index(choix + 1)], texcolors(i * 3 + 2)))
          objets_correction.push(demiDroite(points[index(choix + 12)], points[index(choix + 13)], texcolors(i * 3 + 2)))
          break;
        case "Triangle":
          choix = randint(0, 9) + randint(0, 1) * 12
          texte = `Quel est le symétrique du triangle $${noms[index(choix)]}${noms[index(choix + 1)]}${noms[index(choix + 2)]}$ ?`
          texte_corr = `Le symétrique du triangle $${noms[index(choix)]}${noms[index(choix + 1)]}${noms[index(choix + 2)]}$ est le triangle $${noms[index(choix + 12)]}${noms[index(choix + 13)]}${noms[index(choix + 14)]}$.`
          objets_correction.push(polygone([points[index(choix)], points[index(choix + 1)], points[index(choix + 2)]], texcolors(i * 3 + 2)))
          objets_correction.push(polygone([points[index(choix + 12)], points[index(choix + 13)], points[index(choix + 14)]], texcolors(i * 3 + 2)))
          break;
        case "Angle":
          choix = randint(0, 9) + randint(0, 1) * 12
          texte = `Quel est le symétrique de l'angle $\\widehat{${noms[index(choix)]}${noms[index(choix + 1)]}${noms[index(choix + 2)]}}$ ?`
          texte_corr = `Le symétrique de l'angle $\\widehat{${noms[index(choix)]}${noms[index(choix + 1)]}${noms[index(choix + 2)]}}$ est l'angle $\\widehat{${noms[index(choix + 12)]}${noms[index(choix + 13)]}${noms[index(choix + 14)]}}$.`
          objets_correction.push(codeAngle(points[index(choix)], points[index(choix + 1)], points[index(choix + 2)], 2, '', texcolors(i * 3 + 2), 2, 0.5, texcolors(i * 3 + 2), 0.2))
          objets_correction.push(codeAngle(points[index(choix + 12)], points[index(choix + 13)], points[index(choix + 14)], 2, '', texcolors(i * 3 + 2), 2, 0.5, texcolors(i * 3 + 2), 0.2))
          objets_correction.push(segment(points[index(choix)], points[index(choix + 1)], texcolors(i * 3 + 2)))
          objets_correction.push(segment(points[index(choix + 1)], points[index(choix + 2)], texcolors(i * 3 + 2)))
          objets_correction.push(segment(points[index(choix + 12)], points[index(choix + 13)], texcolors(i * 3 + 2)))
          objets_correction.push(segment(points[index(choix + 13)], points[index(choix + 14)], texcolors(i * 3 + 2)))

          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    d.isVisible = true;
    objets_enonce.push(nomd, d);
    objets_correction.push(nomd, d);
    for (let i = 0; i < 24; i++) {
      objets_enonce.push(labelPoint(points[i]), tracePoint(points[i], 'blue'))
      objets_correction.push(labelPoint(points[i]), tracePoint(points[i], 'blue'))

    }
    this.liste_questions.push(mathalea2d({ xmin: -6, ymin: -6, xmax: 6, ymax: 6, pixelsParCm: 40, scale: 1 }, objets_enonce))
    this.liste_corrections.push(mathalea2d({ xmin: -6, ymin: -6, xmax: 6, ymax: 6, pixelsParCm: 40, scale: 1 }, objets_correction))
    liste_de_question_to_contenu_sans_numero(this);

  }
  this.besoin_formulaire_numerique = ['Type d\'axe', 5, "1 : Axe vertical\n2 : Axe horizontal\n3 : Axe oblique 1\n4 : Axe oblique 2\n5 : Axe aléatoire"];
  this.besoin_formulaire2_case_a_cocher = ["Avec des points de part et d'autre"];
}


