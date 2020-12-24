import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Calcul de longueurs avec le théorème de Thalès
 * @Auteur Rémi Angot
 * Référence 4G30
*/
export default function Thales2D() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculer des longueurs avec le théorème de Thalès";
  this.consigne = "";
  this.nb_questions = 1;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 1; // Triangles imbriqués / configuration papillon / les 2
  this.vspace = -0.5; // Monter un peu l'énoncé pour gagner de la place dans la sortie PDF
  
  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_de_noms_de_polygones = []
    let premiereQuestionPapillon = randint(0, 1) // Pour alterner les configurations et savoir par laquelle on commence


    for (let i = 0, texte = '', texte_corr = '', cpt = 0; i < this.nb_questions && cpt < 50;) {
      if ((i + 1) % 3 == 0) { // Toutes les 3 questions, on repart à zéro sur les noms des polygones
        liste_de_noms_de_polygones = []
      }
      let nomDesPoints = creerNomDePolygone(5, liste_de_noms_de_polygones);
      liste_de_noms_de_polygones.push(nomDesPoints);
      let nomA = nomDesPoints[0];
      let nomB = nomDesPoints[1];
      let nomC = nomDesPoints[2];
      let nomM = nomDesPoints[3];
      let nomN = nomDesPoints[4];
      let ab = randint(5, 10);
      let ac = randint(5, 10, ab);
      let bc = randint(Math.max(ab - ac, ac - ab) + 1, ab + ac - 1, [ab, ac]); // Pas de triangle isocèle ou équilatéral
      let A = point(0, 0, nomA);
      let B = pointAdistance(A, ab, nomB);
      let ABC = triangle2points2longueurs(A, B, ac, bc);
      ABC.id = `M2D_${numero_de_l_exercice}_${i}_1`;
      let C = ABC.listePoints[2];
      C.nom = nomC;
      let k = calcul(randint(3, 8, 5) / 10);
      if (this.sup == 2) {
        k *= -1
        this.vspace = -.5; // Monter un peu l'énoncé pour gagner de la place dans la sortie PDF
      }
      if (this.sup == 3 && ((i + premiereQuestionPapillon) % 2 == 0)) {
        k *= -1
        this.vspace = -.5; // Monter un peu l'énoncé pour gagner de la place dans la sortie PDF
      }
      let M = homothetie(A, C, k);
      let N = homothetie(B, C, k);
      let MNC = polygone(M, N, C);
      MNC.id = `M2D_${numero_de_l_exercice}_${i}_2`;
      let m = pointSurSegment(M, N, -.5);
      let n = pointSurSegment(N, M, -.5);
      let marqueNomM = texteParPoint(nomM, m);
      let marqueNomN = texteParPoint(nomN, n);
      let a = pointSurSegment(A, B, -.5);
      let b = pointSurSegment(B, A, -.5);
      let marqueNomA = texteParPoint(nomA, a);
      let marqueNomB = texteParPoint(nomB, b);
      let c;
      if (k < 0) {
        if (angle(A, C, N) < angle(N, C, A)) {
          c = similitude(A, C, -angleOriente(A, C, N) / 2, 1 / longueur(A, C))
        } else {
          c = similitude(A, C, -angleOriente(N, C, A) / 2, 1 / longueur(A, C) * 0.5)
        }
      } else {
        c = similitude(A, C, -180 + angleOriente(A, C, B) / 2, 1 / longueur(A, C) * .5)
      }
      let marqueNomC = texteParPoint(nomC, c)




      if (!sortie_html) {
        texte = '\\begin{minipage}{.5\\linewidth}\n'
      } else {
        texte = ''
      }
      texte += `Sur la figure suivante, $${nomA + nomC}=${ac}~\\text{cm}$, $${nomA + nomB}=${ab}~\\text{cm}$, $${nomC + nomM}=${tex_nombrec(Math.abs(k) * ac)}~\\text{cm}$, $${nomC + nomN}=${tex_nombrec(Math.abs(k) * bc)}~\\text{cm}$ et $(${nomA + nomB})//(${nomM + nomN})$.<br>`
      texte += `Calculer $${nomM + nomN}$ et $${nomC + nomB}$.<br><br>`
      if (!sortie_html) {
        texte += '\\end{minipage}\n'
        texte += '\\begin{minipage}{.5\\linewidth}\n'
        texte += '\\centering'
      }
      texte += mathalea2d({
        xmin: Math.min(A.x, B.x, C.x, M.x, N.x) - 1.5,
        ymin: Math.min(A.y, B.y, C.y, M.y, N.y) - .8,
        xmax: Math.max(A.x, B.x, C.x, M.x, N.x) + 1.5,
        ymax: Math.max(A.y, B.y, C.y, M.y, N.y) + .8,
        scale: .5
      },

        ABC, MNC, marqueNomA, marqueNomB, marqueNomC, marqueNomM, marqueNomN
      );
      if (!sortie_html) {
        texte += '\\end{minipage}\n'
      }

      let epaisseurTriangle = (k < 0) ? 2 : 6; // En cas de configuration papillon il est inutile de changer l'épaisseur
      let bouton_aide_mathalea2d = creerBoutonMathalea2d(numero_de_l_exercice+'_'+i,
        `if (!document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').dataset.colorie == true || (document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').dataset.colorie == 'false')){
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').style.stroke = 'blue';
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_2').style.stroke = 'red';
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').style.opacity = .5;
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').style.strokeWidth = ${epaisseurTriangle};
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_2').style.opacity = 1;
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_2').style.strokeWidth = 2;
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').dataset.colorie = true;
          document.getElementById('btnMathALEA2d_${numero_de_l_exercice}_${i}').classList.add('active');
        } else {
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').style.stroke = 'black';
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_2').style.stroke = 'black';
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').style.opacity = 1;
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').style.strokeWidth = 1;
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_2').style.opacity = 1;
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_2').style.strokeWidth = 1;
          document.getElementById('M2D_${numero_de_l_exercice}_${i}_1').dataset.colorie = false;
          document.getElementById('btnMathALEA2d_${numero_de_l_exercice}_${i}').classList.remove('active');
  
        }
        `,
        'Mettre en couleur les 2 triangles');

      if (k > 0) {
        texte_corr = `Dans le triangle $${nomA + nomB + nomC}$ :
       <br> - $${nomM}\\in${"[" + nomC + nomA + "]"}$,
       <br> - $${nomN}\\in${"[" + nomC + nomB + "]"}$,
       <br> -  $(${nomA + nomB})//(${nomM + nomN})$,
       <br> donc d'après le théorème de Thalès, les triangles $${nomA + nomB + nomC}$ et $${nomM + nomN + nomC}$ ont des longueurs proportionnelles.`;
      } else {
        texte_corr = `Les droites $(${nomA + nomM})$ et $(${nomB + nomN})$ sont sécantes en $${nomC}$ et $(${nomA + nomB})//(${nomM + nomN})$ <br> donc d'après le théorème de Thalès, les triangles $${nomA + nomB + nomC}$ et $${nomM + nomN + nomC}$ ont des longueurs proportionnelles.`;
      }
      //texte_corr = `$(${nomA+nomB})//(${nomM+nomN})$, les points $${nomC}$, $${nomM}$, $${nomA}$ et $${nomC}$, $${nomN}$, $${nomB}$ sont alignés dans le même ordre  donc d'après le théorème de Thalès, les triangles $${nomA+nomB+nomC}$ et $${nomM+nomN+nomC}$ ont des longueurs proportionnelles.`;
      texte_corr += `<br><br>`
      if (sortie_html){
        texte_corr += `$\\dfrac{\\color{red}${nomC + nomM}}{\\color{blue}${nomC + nomA}}=\\dfrac{\\color{red}${nomC + nomN}}{\\color{blue}${nomC + nomB}}=\\dfrac{\\color{red}${nomM + nomN}}{\\color{blue}${nomA + nomB}}$`
      } else {
        texte_corr += `$\\dfrac{${nomC + nomM}}{${nomC + nomA}}=\\dfrac{${nomC + nomN}}{${nomC + nomB}}=\\dfrac{${nomM + nomN}}{${nomA + nomB}}$`
      }
      texte_corr += `<br><br>`
      texte_corr += `$\\dfrac{${tex_nombrec(Math.abs(k) * ac)}}{${tex_nombre(ac)}}=\\dfrac{${tex_nombrec(Math.abs(k) * bc)}}{${nomC + nomB}}=\\dfrac{${nomM + nomN}}{${tex_nombre(ab)}}$`
      texte_corr += `<br><br>`
      texte_corr += `$${nomM + nomN}=\\dfrac{${tex_nombrec(Math.abs(k) * ac)}\\times${tex_nombre(ab)}}{${tex_nombre(ac)}}=${tex_nombrec(Math.abs(k) * ab)}$ cm`
      texte_corr += `<br><br>`
      texte_corr += `$${nomC + nomB}=\\dfrac{${tex_nombrec(Math.abs(k) * bc)}\\times${tex_nombre(ac)}}{${tex_nombrec(Math.abs(k) * ac)}}=${tex_nombrec(bc)}$ cm`
      
      if (sortie_html){
        texte += `<br><div style="display: inline-block;margin-top:20px;">${bouton_aide_mathalea2d}</div>`;
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
    }
  this.besoin_formulaire_numerique = ['Configuration', 3, '1 : Triangles imbriqués\n2 : Papillon\n3 : Les deux'];
}


