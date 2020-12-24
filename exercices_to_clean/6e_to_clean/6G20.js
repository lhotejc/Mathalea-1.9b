import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * @Auteur Jean-Claude Lhote
 * Placer les sommets et les égalités de longueur...
 * Référence 6G20
 */
export default function Nommer_et_coder_des_polygones() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Nommer et coder des polygones";
  this.consigne =
    "Nommer les figures en fonction de l'énoncé puis ajouter le codage.";
  this.nb_questions = 4;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 3;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let Xmin, Xmax, Ymin, Ymax, ppc, sc, g, k, carreaux
    ppc = 20
    if (sortie_html) {
      sc = 0.5
    } else {
      sc = 0.4
    }

    let params

    let liste = combinaison_listes([1, 2, 3, 4, 5, 6, 7, 8], this.nb_questions);

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      pixelsParCm = 40;
      let pol, polcode, polsom, polnom
      function choisir_polygone(n) { // n compris entre 1 et 8 (1 à 4 pour un triangle, 5 à 8 pour une quadrilatère)
        let A, B, C, D
        let nom = creerNomDePolygone(4, "PQ"), pnom, q, p, pcode, enonce
        switch (n) {
          case 1: // triangle isocèle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(0, 10) / 10, nom[1])
            C = rotation(B, A, randint(25, 80), nom[2])
            q = polygone(A, B, C)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2])
            pcode = [codeSegments('||', 'blue', A, B, A, C), codeAngle(B, C, A, 0.8, '|', 'blue', 2, 0.8, 'blue', 0.2), codeAngle(C, B, A, 0.8, '|', 'blue', 2, 0.8, 'blue', 0.2)]
            enonce = `le triangle $${nom[0] + nom[1] + nom[2]}$ est isocèle en $${nom[0]}$.<br>`
            break
          case 2: // triangle équilatéral
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(0, 10) / 10, nom[1])
            C = rotation(B, A, 60, nom[2])
            q = polygone(A, B, C)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2])
            pcode = [codeSegments('||', 'blue', A, B, A, C, B, C), codeAngle(B, C, A, 0.8, '|', 'blue', 2, 0.8, 'blue', 0.2), codeAngle(C, B, A, 0.8, '|', 'blue', 2, 0.8, 'blue', 0.2), codeAngle(C, A, B, 0.8, '|', 'blue', 2, 0.8, 'blue', 0.2)]
            enonce = `le triangle $${nom[0] + nom[1] + nom[2]}$ est équilatéral.<br>$\\phantom{et sa longueur est AB}$`
            break
          case 3: // triangle rectangle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(0, 10) / 10, nom[1])
            C = similitude(B, A, 90, randint(30, 100) / 100, nom[2])
            q = polygone(A, B, C)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2])
            pcode = codageAngleDroit(B, A, C)
            enonce = `le triangle $${nom[0] + nom[1] + nom[2]}$ est rectangle en $${nom[0]}$.<br>$\\phantom{et sa longueur est AB}$`
            break
          case 4: // triangle rectangle isocèle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(0, 10) / 10, nom[1])
            C = rotation(B, A, 90, nom[2])
            q = polygone(A, B, C)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2])
            pcode = [codeSegments('||', 'blue', A, B, A, C), codageAngleDroit(B, A, C), codeAngle(B, C, A, 0.8, '|', 'blue', 2, 0.8, 'blue', 0.2), codeAngle(C, B, A, 0.8, '|', 'blue', 2, 0.8, 'blue', 0.2)]
            enonce = `le triangle $${nom[0] + nom[1] + nom[2]}$ est rectangle et isocèle en $${nom[0]}$.`
            break
          //on choisit un quadrilatère 
          case 5: // carré
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(10, 30) / 10, nom[1])
            q = carre(A, B)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            D = p.listePoints[3]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2] + nom[3])
            pcode = [codeSegments('||', 'blue', A, B, B, C, C, D, D, A), codageAngleDroit(B, A, D), codageAngleDroit(A, B, C), codageAngleDroit(B, C, D), codageAngleDroit(A, D, C)]
            enonce = `le quadrilatère $${nom[0] + nom[1] + nom[2] + nom[3]}$ est un carré.<br>$\\phantom{et sa longueur est AB}$`
            break
          case 6: // rectangle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(10, 30) / 10, nom[1])
            C = similitude(A, B, -90, randint(30, 80) / 100, nom[2])
            D = translation(C, vecteur(B, A), nom[3])
            q = polygone(A, B, C, D)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            D = p.listePoints[3]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2] + nom[3])
            pcode = [codeSegments('||', 'blue', A, B, C, D), codeSegments('|', 'red', C, B, A, D), codageAngleDroit(B, A, C), codageAngleDroit(A, B, C), codageAngleDroit(B, C, D), codageAngleDroit(A, D, C)]
            enonce = `le quadrilatère $${nom[0] + nom[1] + nom[2] + nom[3]}$ est un rectangle et $${nom[0] + nom[1]}$ est sa longueur.`
            break
          case 7: // losange
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(10, 30) / 10, nom[1])
            C = rotation(A, B, randint(100, 150), nom[2])
            D = translation(C, vecteur(B, A), nom[3])
            q = polygone(A, B, C, D)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            D = p.listePoints[3]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2] + nom[3])
            pcode = [codeSegments('O', 'blue', A, B, B, C, C, D, D, A), codeAngle(C, D, A, 0.8, '||', 'red', 2, 0.8, 'red', 0.2), codeAngle(C, B, A, 0.8, '||', 'red', 2, 0.8, 'red', 0.2), codeAngle(B, C, D, 0.8, '|', 'blue', 2, 0.8, 'blue', 0.2), codeAngle(D, A, B, 0.8, '|', 'blue', 2, 0.8, 'blue', 0.2)]
            enonce = `le quadrilatère $${nom[0] + nom[1] + nom[2] + nom[3]}$ est un losange et [$${nom[0] + nom[2]}$] est sa plus grande diagonale.`
            break
          case 8: // trapèze rectangle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(10, 30) / 10, nom[1])
            D = similitude(B, A, 90, randint(30, 80) / 100, nom[3])
            C = translation(D, homothetie(vecteur(A, B), A, randint(30, 80) / 100), nom[2])
            q = polygone(A, B, C, D)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            D = p.listePoints[3]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2] + nom[3])
            pcode = [codageAngleDroit(B, A, D), codageAngleDroit(C, D, A)]
            enonce = `le quadrilatère $${nom[0] + nom[1] + nom[2] + nom[3]}$ est un trapèze rectangle de grande base $${nom[0] + nom[1]}$ de hauteur $${nom[0] + nom[3]}$.`
            break
        }
        return [p, nom, pcode, pnom, enonce]
      }
      [pol, polnom, polcode, polsom, texte] = choisir_polygone(liste[i]);
      if (pol.listePoints.length == 4) {
        Xmin = Math.floor(Math.min(pol.listePoints[0].x, pol.listePoints[1].x, pol.listePoints[2].x, pol.listePoints[3].x) - 1)
        Ymin = Math.floor(Math.min(pol.listePoints[0].y, pol.listePoints[1].y, pol.listePoints[2].y, pol.listePoints[3].y) - 1)
        Xmax = Math.ceil(Math.max(pol.listePoints[0].x, pol.listePoints[1].x, pol.listePoints[2].x, pol.listePoints[3].x) + 1)
        Ymax = Math.ceil(Math.max(pol.listePoints[0].y, pol.listePoints[1].y, pol.listePoints[2].y, pol.listePoints[3].y) + 1)
      }
      else {
        Xmin = Math.floor(Math.min(pol.listePoints[0].x, pol.listePoints[1].x, pol.listePoints[2].x) - 1)
        Ymin = Math.floor(Math.min(pol.listePoints[0].y, pol.listePoints[1].y, pol.listePoints[2].y) - 1)
        Xmax = Math.ceil(Math.max(pol.listePoints[0].x, pol.listePoints[1].x, pol.listePoints[2].x) + 1)
        Ymax = Math.ceil(Math.max(pol.listePoints[0].y, pol.listePoints[1].y, pol.listePoints[2].y) + 1)

      }
      params = {
        xmin: Xmin,
        ymin: Ymin,
        xmax: Xmax,
        ymax: Ymax,
        pixelsParCm: ppc,
        scale: sc,
      }
      if (this.sup < 3) g = grille(Xmin, Ymin, Xmax, Ymax, "gray", 0.7);
      else g = ''
      if (this.sup == 2) {
        k = 0.8;
        carreaux = seyes(Xmin, Ymin, Xmax, Ymax);
      } else {
        k = 0.5;
        carreaux = "";
      }

      pol.epaisseur = 2
      texte += `<br>` + mathalea2d(params, pol, polnom, g, carreaux)
      texte_corr = mathalea2d(params, pol, polnom, polcode, polsom, g, carreaux)
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
    pixelsParCm = 20
  };
  this.besoin_formulaire_numerique = [
    "Type de cahier",
    3,
    `1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche`,
  ];
}

