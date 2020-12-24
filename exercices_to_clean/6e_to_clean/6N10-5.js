import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * @Auteur Jean-Claude Lhote
 * Publié le 9/12/2020
 * Ref 6N10-5
 * Sortir du labyrinthe en utilisant la numération décimale.
 */
export default function Exercice_labyrinthe_numeration() {
  "use strict"
  Exercice.call(this)
  this.titre = "Labyrinthe de numération décimale";
  this.consigne=""
  this.niveau = '6e'
  this.nb_questions = 1;
  this.nb_questions_modifiable = false
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.pas_de_version_LaTeX = false
  this.pas_de_version_HMTL = false
  this.sup = 3;

  //this.consigne=`Trouve la sortie en ne passant que par les cases contenant un nombre divisible par $${parseInt(this.sup)}$.`

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_corrections=[]
    this.liste_questions=[]

    let params, texte, texte_corr, trouve
    let laby = labyrinthe()
    laby.niveau = parseInt(this.sup) // Le niveau (de 1 à 6=mélange) définit le nombre d'étapes
    laby.chemin = laby.choisitChemin(laby.niveau) // On choisi un chemin
    laby.murs2d = laby.construitMurs(laby.chemin) // On construit le labyrinthe
    laby.chemin2d = laby.traceChemin(laby.chemin) // On trace le chemin solution
    let monchemin = laby.chemin
    let positions=['unités','dixièmes','centièmes','millièmes','dizaines','centaines','unités de mille','dix-millièmes','dizaines de mille']
    let chiffre,hasard
    let listeNombresOK = [], index = 0,rangMax,rang
    if (this.niveau = 'CM') {
      rangMax=5
    }
    else {
      if (!this.sup) {
        rangMax=6
      }
      else {
        rangMax=8
      }
    }
    rang=randint(0,rangMax)
    chiffre=randint(0,9)
    texte = `${texte_en_couleur_et_gras(`Trouve la sortie en ne passant que par les cases contenant un nombre dont le chiffre des ${positions[rang]} est un `,'black')}$${mise_en_evidence(chiffre,'black')}$.<br>`
    texte_corr = `${texte_en_couleur_et_gras(`Voici le chemin en marron et la sortie était la numéro $${2 - monchemin[monchemin.length - 1][1] + 1}$.`, 'black')}<br>`
    // Zone de construction du tableau de nombres : Si ils sont sur monchemin et seulement si, ils doivent vérifier la consigne
    let Dm,Um,C,D,U,d,c,m,dm,nombretemp
    for (let i = 0; i <= 30; i++) {
      if (rangMax>7){
      if (positions[rang]!='dizaines de mille') {
        Dm=randint (0,9,chiffre)
      }
      else {
        Dm=chiffre
      }}
      else {
        Dm=0
      }
      if (positions[rang]!='unités de mille') {
        if (rangMax>5){
        Um=randint (0,9,chiffre)
      }
      else {
        Um=chiffre
      }}
      else {
        Um=0
      }

      if (positions[rang]!='centaines') {
        C=randint (0,9,chiffre)
      }
      else {
        C=chiffre
      }
      if (positions[rang]!='dizaines') {
        D=randint (0,9,chiffre)
      }
      else {
        D=chiffre
      }
      if (positions[rang]!='unités') {
        U=randint (0,9,chiffre)
      }
      else {
        U=chiffre
      }
      if (positions[rang]!='dixièmes') {
        d=randint (0,9,chiffre)
      }
      else {
        d=chiffre
      }
      if (positions[rang]!='centièmes') {
        c=randint (0,9,chiffre)
      }
      else {
        c=chiffre
      }
      if (positions[rang]!='millièmes') {
        m=randint (0,9,chiffre)
      }
      else {
        m=chiffre
      }
      if (rangMax>6){
      if (positions[rang]!='dix-millièmes') {
  
        dm=randint (0,9,chiffre)
      }
      else {
        dm=chiffre
      }}
      else {
        dm=0
      }
      if (i>12) {
        hasard=randint(0,rangMax,rang) //on met le chiffre au hasard à un autre endroit du nombre
        switch (hasard){
          case 8: 
          if (rangMax>7) {Dm=chiffre}
          else {
            Dm=0
            if (rang!=0) {
              U=chiffre
            }
            else {
              d=chiffre
            }
          }
          break
          case 6: Um=chiffre
          break
          case 5: C=chiffre
          break
          case 4: D=chiffre
          break
          case 0: U=chiffre
          break
          case 1: d=chiffre
          break
          case 2: c=chiffre
          break
          case 3: m=chiffre
          break
          case 7:
            if (rangMax>6) {dm=chiffre}
            else {
              dm=0
              if (rang!=1) {
                d=chiffre
              }
              else {
                c=chiffre
              }
            }
          break
        }
        hasard=randint(0,9,chiffre)
        switch (rang){ // On met autre chose au rang choisi 
          case 8: Dm=hasard
          break
          case 6: Um=hasard
          break
          case 5: C=hasard
          break
          case 4: D=hasard
          break
          case 0: U=hasard
          break
          case 1: d=hasard
          break
          case 2: c=hasard
          break
          case 3: m=hasard
          break
          case 7: dm=hasard
          break
        }
      }
      nombretemp=tex_nombrec2(`${Dm}*10000+${Um}*1000+${C}*100+${D}*10+${U}+${d}*0.1+${c}*0.01+${m}*0.001+${dm}*0.0001`,8)
      listeNombresOK.push(nombretemp)
    }
    for (let a=1;a<7;a++) {
      laby.nombres.push([0,0,0])
    }
    for (let a = 1; a < 7; a++) {
      for (let b = 0; b < 3; b++) {
        trouve = false
        for (let k = 0; k < monchemin.length; k++){
          if (monchemin[k][0] == a && monchemin[k][1] == b) trouve = true
        }
        if (!trouve) {
          laby.nombres[a - 1][b] = listeNombresOK[index+13]
        }
        else {
          laby.nombres[a - 1][b] = listeNombresOK[index]
          index++
        }
      }
    } // Le tableau de nombre étant fait, on place les objets nombres.
    laby.nombres2d = laby.placeNombres(laby.nombres,0.7)
    params = { xmin: -4, ymin: 0, xmax: 22, ymax: 11, pixelsParCm: 20, scale: 0.7 }
    texte += mathalea2d(params, laby.murs2d, laby.nombres2d)
    texte_corr += mathalea2d(params, laby.murs2d, laby.nombres2d, laby.chemin2d)
    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this)
  }
//this.besoin_formulaire_case_a_cocher = ["Avec des dizaines de mille et des dix-millièmes"]
//  this.besoin_formulaire2_numerique = ["Critère de divisibilité supplémentaire ",6,'1 : Aucun\n2 : Par 2\n3 : Par 3\n4 : Par 4\n5 : Par 5\n6 : Par 9'];
 this.besoin_formulaire_numerique = ['Niveau de rapidité', 6, '1 : Escargot\n 2 : Tortue\n 3 : Lièvre\n 4 : Antilope\n 5 : Guépard\n 6 : Au hasard']
} // Fin de l'exercice.

function Test_main_levee() {
  "use strict";
  Exercice.call(this);

  this.titre = "Test de main levée";
  this.nb_questions = 1;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = true;
  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []
    this.liste_corrections = []
    let A = point(0, 0)
    let B = point(5, 0)
    let D = point(5, -5)
    let C = point(1, 5)
    let a = codeAngle(B, A, C, 1, '', 'green')
    let s1 = segment(B, A, 'red')
    let s2 = segment(A, C, 'red')
    let s3 = segment(B, D, 'red')
    let b = codeAngle(A, B, D, 0.8, '', 'blue')
    let texte = mathalea2d({ xmin: -1, ymin: -6, xmax: 6, ymax: 6, pixelsParCm: 20, scale: 3, mainlevee: this.sup, amplitude: 1 }, a, s1, s2, s3, b)
    pixelsParCm = 20
    let texte_corr = ""
    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this)
  }
  this.besoin_formulaire_case_a_cocher = ["main levee"];
}

