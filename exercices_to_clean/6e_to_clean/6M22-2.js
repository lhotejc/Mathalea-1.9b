import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * 3 figures sont données, 1 quart de disque, un demi-disque et un 3-quarts de disque
 * * 1 : Calculer les périmètres
 * * 2 : Calculer les aires
 * * 3 : Calculer les périmètres et aires
 * Pas de version LaTeX
 * @Auteur Rémi Angot
 * Rééférence 6M22-2
 */
export default function Perimetre_aire_et_portions_de_disques(pa = 3) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.pas_de_version_LaTeX = true;
  this.titre = "Périmètres et aires de portions de cercles";
  this.consigne =
    "Calculer le périmètre et l'aire de chacune des figures suivantes";
  this.sup = pa; // 1 : périmètre, 2 : aire, 3 : périmètres et aires
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 3) : (this.spacing_corr = 2);
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.type_exercice = "MG32";
  this.taille_div_MG32 = [600, 450];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_corrections = []; // Liste de questions corrigées
    let r = randint(1, 5);
    let r2 = randint(2, 4);
    let r3 = randint(2, 4);
    let figure = randint(1, 2);
    let codeBase64 = "";
    if (this.sup == 1) {
      this.consigne = "Calculer le périmètre de chacune des figures suivantes";
    }
    if (this.sup == 2) {
      this.consigne = "Calculer l'aire de chacune des figures suivantes";
    }

    if (figure == 1) {
      codeBase64 =
        "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAIoAAACNQAAAQEAAAAAAAAAAQAAAE######AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAJyMwABNgAAAAFAGAAAAAAAAP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmb#####AAAAAQAUQ0Ryb2l0ZURpcmVjdGlvbkZpeGUA#####wEAAAAAEAAAAQABAAAAAgE#8AAAAAAAAP####8AAAABAA9DUG9pbnRMaWVEcm9pdGUA#####wEAAAAADgABVgDAAAAAAAAAAEAQAAAAAAAABQABQDxmZmZmZmYAAAAD#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAAIAAAAE#####wAAAAEAB0NNaWxpZXUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAIAAAAE#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAAAAAAAAAAAAAEAYAAAAAAAAAAAABgwAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAEx#####wAAAAEACUNMb25ndWV1cgD#####AAAAAgAAAAQAAAADAP####8BAAAAABAAAU8AAAAAAAAAAABACAAAAAAAAAMAAUBRQAAAAAAAQGQAAAAAAAAAAAACAP####8AAXIAATQAAAABQBAAAAAAAAAAAAAEAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAoA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAsAAAAM#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAANAAAADQD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAADAAEAAAAN#####wAAAAEADENBcmNEZUNlcmNsZQD#####AAAAAAABAAAACQAAAA######AAAAAUBWgAAAAAAAAAAABgD#####AAAAAAAQAAABAAEAAAAJAAAAD#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAARAAAADAD#####AAAAEgAAABAAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAEwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAATAAAABgD#####AAAAAAAQAAABAAEAAAAVAAAACf####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAAJAAAAD#####8AAAABAAtDTWVkaWF0cmljZQAAAAAXAQAAAAAQAAABAAEAAAAJAAAADwAAAAcAAAAAFwEAAAAAEAAAAQUAAAAACQAAAA8AAAAKAAAAABcBAAAAAAEAAAAZAAAAAUAwAAAAAAAAAQAAAAwAAAAAFwAAABgAAAAaAAAADQAAAAAXAQAAAAAQAAABBQABAAAAGwAAAAkBAAAAFwAAAAkAAAAP#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQEAAAAXAAAAAAEAAAAcEQAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAADIGNtAQAAAB3#####AAAAAQAOQ01hcnF1ZVNlZ21lbnQA#####wAAAP8AAgEAAAAWAAAAEwD#####AAAA#wACAQAAABEAAAACAP####8AAnIyAAE1AAAAAUAUAAAAAAAAAAAACgD#####AQAA#wABAAAACf####8AAAABAApDT3BlcmF0aW9uAAAAABQAAAAACwAAAAoAAAALAAAAIQAAAAFAAAAAAAAAAAAAAAAMAP####8AAAALAAAAIgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAAjAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACMAAAAKAP####8BAAAAAAEAAAAlAAAACwAAACEAAAAADAD#####AAAACwAAACYAAAANAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAMAAgAAACcAAAANAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAMAAQAAACcAAAAOAP####8AAAAAAAEAAAAlAAAAKQAAACgAAAAGAP####8AAAAAABAAAAEAAQAAACgAAAApAAAAEAD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAAoAAAAKQAAABEAAAAALAEAAAAAEAAAAQABAAAAKAAAACkAAAAHAAAAACwBAAAAABAAAAEFAAAAACgAAAApAAAACgAAAAAsAQAAAAABAAAALgAAAAFAMAAAAAAAAAEAAAAMAAAAACwAAAAtAAAALwAAAA0AAAAALAEAAAAAEAAAAQUAAQAAADAAAAAJAQAAACwAAAAoAAAAKQAAABIBAAAALAAAAAABAAAAMREAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAAAyAAAABwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACQAAACkAAAAPAP####8BAAAAABAAAAEAAQAAADQAAAArAAAACgD#####AQAAAAABAAAANAAAABQAAAAACwAAAAEAAAABQAAAAAAAAAAAAAAADAD#####AAAANQAAADYAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwACAAAANwAAAA0A#####wEAAAAAEAABRQAAAAAAAAAAAEAIAAAAAAAAAwABAAAANwAAAAQA#####wEAAAABEAAAAQABAAAAOQE#8AAAAAAAAAAAAAoA#####wEAAAAAAQAAADkAAAALAAAAAQAAAAAMAP####8AAAA6AAAAOwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAA8AAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAADwAAAAMAP####8AAAA1AAAAOwAAAA0A#####wEAAAAAEAABRAAAAAAAAAAAAEAIAAAAAAAAAwACAAAAPwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAAA######wAAAAEAEUNHcmFuZEFyY0RlQ2VyY2xlAP####8AAAAAAAEAAAA5AAAAPgAAAEAAAAAGAP####8AAAAAABAAAAEAAQAAAEAAAAA5AAAABgD#####AAAAAAAQAAABAAEAAAA5AAAAPgAAABMA#####wAAAP8AAgIAAABDAAAAEwD#####AAAA#wACAgAAAEQAAAAQAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAEAAAAA5AAAAEQAAAABHAQAAAAAQAAABAAEAAABAAAAAOQAAAAcAAAAARwEAAAAAEAAAAQUAAAAAQAAAADkAAAAKAAAAAEcBAAAAAAEAAABJAAAAAUAwAAAAAAAAAQAAAAwAAAAARwAAAEgAAABKAAAADQAAAABHAQAAAAAQAAABBQABAAAASwAAAAkBAAAARwAAAEAAAAA5AAAAEgEAAABHAAAAAABARgAAAAAAAAAAAAAAAAAAAAAATBEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABNAAAACP##########";

      if (this.sup == 1) {
        //si on ne demande pas les aires
        texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(
          Algebrite.eval(r / 2)
        )}\\pi+${2 * r}\\approx${tex_nombre(
          arrondi(Algebrite.eval((r / 2) * Math.PI + 2 * r), 1)
        )}$ cm<br>`;
        texte_corr += `La deuxième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2 * r2
          } cm et d'un diamètre qui ferme la figure.<br>`;
        texte_corr += `$\\mathcal{P}_2=\\dfrac{1}{2}\\times${2 * r2
          }\\times\\pi+${2 * r2}=${r2}\\pi+${2 * r2}\\approx${tex_nombre(
            arrondi(Algebrite.eval(r2 * Math.PI + 2 * r2), 1)
          )}$ cm<br>`;
        texte_corr += `La troisième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r3} cm et 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_3=\\dfrac{3}{4}\\times2\\times${r3}\\times\\pi+${r3}+${r3}=${tex_nombre(
          Algebrite.eval((6 * r3) / 4)
        )}\\pi+${2 * r3}\\approx${tex_nombre(
          arrondi(Algebrite.eval(((6 * r3) / 4) * Math.PI + 2 * r3), 1)
        )}$ cm<br>`;
      }

      if (this.sup == 2) {
        texte_corr = `La première figure est un quart de disque de rayon ${r} cm.<br>`;
        texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(
          Algebrite.eval((r * r) / 4)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r * r) / 4) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La deuxième figure est la moitié d'un disque de diamètre ${2 * r2
          } cm donc de ${r2} cm de rayon.<br>`;
        texte_corr += `$\\mathcal{A}_2=\\dfrac{1}{2}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(
          Algebrite.eval((r2 * r2) / 2)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r2 * r2) / 2) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La troisième figure est trois quarts d'un disque de rayon ${r3} cm.<br>`;
        texte_corr += `$\\mathcal{A}_3=\\dfrac{3}{4}\\times${r3}\\times${r3}\\times\\pi=${tex_nombre(
          Algebrite.eval((3 / 4) * r3 * r3)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval((3 / 4) * r3 * r3 * Math.PI), 1)
        )}~\\text{cm}^2$`;
      }

      if (this.sup == 3) {
        texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(
          Algebrite.eval(r / 2)
        )}\\pi+${2 * r}\\approx${tex_nombre(
          arrondi(Algebrite.eval((r / 2) * Math.PI + 2 * r), 1)
        )}$ cm<br>`;
        texte_corr += `La deuxième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2 * r2
          } cm et d'un diamètre qui ferme la figure.<br>`;
        texte_corr += `$\\mathcal{P}_2=\\dfrac{1}{2}\\times${2 * r2
          }\\times\\pi+${2 * r2}=${r2}\\pi+${2 * r2}\\approx${tex_nombre(
            arrondi(Algebrite.eval(r2 * Math.PI + 2 * r2), 1)
          )}$ cm<br>`;
        texte_corr += `La troisième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r3} cm et 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_3=\\dfrac{3}{4}\\times2\\times${r3}\\times\\pi+${r3}+${r3}=${tex_nombre(
          Algebrite.eval((6 * r3) / 4)
        )}\\pi+${2 * r3}\\approx${tex_nombre(
          arrondi(Algebrite.eval(((6 * r3) / 4) * Math.PI + 2 * r3), 1)
        )}$ cm<br>`;
        texte_corr += `La première figure est un quart de disque de rayon ${r} cm.<br>`;
        texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(
          Algebrite.eval((r * r) / 4)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r * r) / 4) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La deuxième figure est la moitié d'un disque de diamètre ${2 * r2
          } cm donc de ${r2} cm de rayon.<br>`;
        texte_corr += `$\\mathcal{A}_2=\\dfrac{1}{2}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(
          Algebrite.eval((r2 * r2) / 2)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r2 * r2) / 2) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La troisième figure est trois quarts d'un disque de rayon ${r3} cm.<br>`;
        texte_corr += `$\\mathcal{A}_3=\\dfrac{3}{4}\\times${r3}\\times${r3}\\times\\pi=${tex_nombre(
          Algebrite.eval((3 / 4) * r3 * r3)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval((3 / 4) * r3 * r3 * Math.PI), 1)
        )}~\\text{cm}^2$`;
      }
    } else {
      codeBase64 =
        "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAAAAAAAAQAAAGX#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAJyMwABNgAAAAFAGAAAAAAAAP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmb#####AAAAAQAUQ0Ryb2l0ZURpcmVjdGlvbkZpeGUA#####wEAAAAAEAAAAQABAAAAAgE#8AAAAAAAAP####8AAAABAA9DUG9pbnRMaWVEcm9pdGUA#####wEAAAAADgABVgDAAAAAAAAAAEAQAAAAAAAABQABQDxmZmZmZmYAAAAD#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAAIAAAAE#####wAAAAEAB0NNaWxpZXUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAIAAAAE#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAAAAAAAAAAAAAEAYAAAAAAAAAAAABgwAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAEx#####wAAAAEACUNMb25ndWV1cgD#####AAAAAgAAAAQAAAADAP####8BAAAAABAAAU8AAAAAAAAAAABACAAAAAAAAAMAAUBRQAAAAAAAQGQAAAAAAAAAAAACAP####8AAXIAATQAAAABQBAAAAAAAAAAAAAEAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAoA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAsAAAAM#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAANAAAADQD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAADAAEAAAANAAAABgD#####AAAAAAAQAAABAAEAAAAJAAAAD#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAAQ#####wAAAAEAFENJbXBsZW1lbnRhdGlvblByb3RvAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAAkAAAAP#####wAAAAEAC0NNZWRpYXRyaWNlAAAAABIBAAAAABAAAAEAAQAAAAkAAAAPAAAABwAAAAASAQAAAAAQAAABBQAAAAAJAAAADwAAAAoAAAAAEgEAAAAAAQAAABQAAAABQDAAAAAAAAABAAAADAAAAAASAAAAEwAAABUAAAANAAAAABIBAAAAABAAAAEFAAEAAAAWAAAACQEAAAASAAAACQAAAA######AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABIAAAAAAQAAABcRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAAGAAAAAIA#####wACcjIAATQAAAABQBAAAAAAAAAAAAAKAP####8BAAD#AAEAAAAJ#####wAAAAEACkNPcGVyYXRpb24AAAAAEgAAAAALAAAACgAAAAsAAAAaAAAAAUAAAAAAAAAAAAAAAAwA#####wAAAAsAAAAbAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAgAAABwAAAANAP####8BAAAAABAAAUcAAAAAAAAAAABACAAAAAAAAAMAAQAAABwAAAAKAP####8BAAAAAAEAAAAeAAAACwAAABoAAAAADAD#####AAAACwAAAB8AAAANAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAMAAgAAACAAAAANAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAMAAQAAACAAAAAGAP####8BAAAAABAAAAEAAQAAACEAAAAiAAAADwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAQAAAAIAAAAhAAAAIgAAABAAAAAAJAEAAAAAEAAAAQABAAAAIQAAACIAAAAHAAAAACQBAAAAABAAAAEFAAAAACEAAAAiAAAACgAAAAAkAQAAAAABAAAAJgAAAAFAMAAAAAAAAAEAAAAMAAAAACQAAAAlAAAAJwAAAA0AAAAAJAEAAAAAEAAAAQUAAQAAACgAAAAJAQAAACQAAAAhAAAAIgAAAAcA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAkAAAAiAAAADgD#####AQAAAAAQAAABAAEAAAArAAAAIwAAAAoA#####wEAAAAAAQAAACsAAAASAgAAAAE#+AAAAAAAAAAAAAsAAAAaAAAAAAwA#####wAAACwAAAAtAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAgAAAC4AAAANAP####8BAAAAABAAAUUAAAAAAAAAAABACAAAAAAAAAMAAQAAAC4AAAAEAP####8BAAAAARAAAAEAAQAAADABP#AAAAAAAAAAAAAKAP####8BAAAAAAEAAAAwAAAACwAAAAEAAAAADAD#####AAAAMQAAADIAAAANAP####8BAAAAABAAAUkAAAAAAAAAAABACAAAAAAAAAMAAgAAADMAAAANAP####8BAAAAABAAAUgAAAAAAAAAAABACAAAAAAAAAMAAQAAADMAAAAMAP####8AAAAsAAAAMgAAAA0A#####wEAAAAAEAABRAAAAAAAAAAAAEAIAAAAAAAAAwACAAAANgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAAA2AAAABgD#####AQAAAAAQAAABAAEAAAA3AAAAMAAAAAYA#####wAAAAAAEAAAAQABAAAAMAAAADUAAAAPAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAADcAAAAwAAAAEAAAAAA7AQAAAAAQAAABAAEAAAA3AAAAMAAAAAcAAAAAOwEAAAAAEAAAAQUAAAAANwAAADAAAAAKAAAAADsBAAAAAAEAAAA9AAAAAUAwAAAAAAAAAQAAAAwAAAAAOwAAADwAAAA+AAAADQAAAAA7AQAAAAAQAAABBQABAAAAPwAAAAkBAAAAOwAAADcAAAAwAAAAEQEAAAA7AQAAAABARgAAAAAAAAAAAAAAAAAAAAAAQBEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABBAAAADAD#####AAAAEQAAAAwAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQACAAAAQwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAABDAAAABgD#####AAAAAAAQAAABAAEAAAAwAAAANAAAAA4A#####wEAAP8AEAAAAQACAAAAHgAAACMAAAAMAP####8AAABHAAAAHwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAABIAAAADQD#####AQAAAAAQAAFGAAAAAAAAAAAAQAgAAAAAAAADAAIAAABIAAAABgD#####AAAAAAAQAAABAAEAAAAeAAAASgAAAAYA#####wAAAAAAEAAAAQABAAAAHgAAACH#####AAAAAQAMQ0FyY0RlQ2VyY2xlAP####8AAAAAAAEAAAAJAAAADwAAAEQAAAAPAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAEoAAAAeAAAAEAAAAABOAQAAAAAQAAABAAEAAABKAAAAHgAAAAcAAAAATgEAAAAAEAAAAQUAAAAASgAAAB4AAAAKAAAAAE4BAAAAAAEAAABQAAAAAUAwAAAAAAAAAQAAAAwAAAAATgAAAE8AAABRAAAADQAAAABOAQAAAAAQAAABBQABAAAAUgAAAAkBAAAATgAAAEoAAAAeAAAAEQEAAABOAAAAAADAKgAAAAAAAAAAAAAAAAAAAAAAUxEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABUAAAADwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAA1AAAANAAAABAAAAAAVgEAAAAAEAAAAQABAAAANQAAADQAAAAHAAAAAFYBAAAAABAAAAEFAAAAADUAAAA0AAAACgAAAABWAQAAAAABAAAAWAAAAAFAMAAAAAAAAAEAAAAMAAAAAFYAAABXAAAAWQAAAA0AAAAAVgEAAAAAEAAAAQUAAQAAAFoAAAAJAQAAAFYAAAA1AAAANAAAABEBAAAAVgAAAAAAAAAAAAAAAADACAAAAAAAAAAAAFsRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAAXAAAAAYA#####wAAAAAAEAAAAQABAAAACQAAAEQAAAATAP####8AAAAAAAEAAAAwAAAANP####8AAAABQGaAAAAAAAD#####AAAAAQARQ0dyYW5kQXJjRGVDZXJjbGUA#####wAAAAAAAQAAAB4AAAAh#####wAAAAFAcOAAAAAAAP####8AAAABAA5DTWFycXVlU2VnbWVudAD#####AAAA#wACAgAAAF4AAAAVAP####8AAAD#AAICAAAAEAAAABUA#####wAAAP8AAgAAAABLAAAAFQD#####AAAA#wACAAAAAEwAAAAI##########8=";
      texte_corr = `La première figure est un quart de cercle de rayon ${r} cm auquel il faut ajouter les 2 rayons qui ferment la figure.<br>`;

      if (this.sup == 1) {
        texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(
          Algebrite.eval(r / 2)
        )}\\pi+${2 * r}\\approx${tex_nombre(
          arrondi(Algebrite.eval((r / 2) * Math.PI + 2 * r), 1)
        )}$ cm<br>`;
        texte_corr += `La deuxième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r2} cm et 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_2=\\dfrac{3}{4}\\times2\\times${r2}\\times\\pi+${r2}+${r2}=${tex_nombre(
          (6 / 4) * r2
        )}\\pi+${2 * r2}\\approx${tex_nombre(
          arrondi(Algebrite.eval((6 / 4) * r2 * Math.PI + 2 * r2), 1)
        )}$ cm<br>`;
        texte_corr += `La troisième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2 * r3
          } cm et d'un diamètre qui ferme la figure.<br>`;
        texte_corr += `$\\mathcal{P}_3=\\dfrac{1}{2}\\times${2 * r3
          }\\times\\pi+${2 * r3}=${r3}\\pi+${2 * r3}\\approx${tex_nombre(
            arrondi(Algebrite.eval(r3 * Math.PI + 2 * r3), 1)
          )}$ cm<br>`;
      }

      if (this.sup == 2) {
        texte_corr = `La première figure est un quart de disque de rayon ${r} cm.<br>`;
        texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(
          Algebrite.eval((r * r) / 4)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r * r) / 4) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La deuxième figure est trois quarts d'un disque rayon ${r2} cm.<br>`;
        texte_corr += `$\\mathcal{A}_2=\\dfrac{3}{4}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(
          (3 / 4) * r2 * r2
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval((3 / 4) * r2 * r2 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La troisième figure est un demi-cercle de diamètre ${2 * r3
          } cm donc de rayon ${r3} cm.<br>`;
        texte_corr += `$\\mathcal{A}_3=\\dfrac{1}{2}\\times${r3}\\times${r3}\\times\\pi=${(r3 * r3) / 2
          }\\pi\\approx${tex_nombre(
            arrondi(Algebrite.eval(((r3 * r3) / 2) * Math.PI), 1)
          )}~\\text{cm}^2$<br>`;
      }

      if (this.sup == 3) {
        texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(
          Algebrite.eval(r / 2)
        )}\\pi+${2 * r}\\approx${tex_nombre(
          arrondi(Algebrite.eval((r / 2) * Math.PI + 2 * r), 1)
        )}$ cm<br>`;
        texte_corr += `La deuxième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r2} cm et 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_2=\\dfrac{3}{4}\\times2\\times${r2}\\times\\pi+${r2}+${r2}=${tex_nombre(
          (6 / 4) * r2
        )}\\pi+${2 * r2}\\approx${tex_nombre(
          arrondi(Algebrite.eval((6 / 4) * r2 * Math.PI + 2 * r2), 1)
        )}$ cm<br>`;
        texte_corr += `La troisième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2 * r3
          } cm et d'un diamètre qui ferme la figure.<br>`;
        texte_corr += `$\\mathcal{P}_3=\\dfrac{1}{2}\\times${2 * r3
          }\\times\\pi+${2 * r3}=${r3}\\pi+${2 * r3}\\approx${tex_nombre(
            arrondi(Algebrite.eval(r3 * Math.PI + 2 * r3), 1)
          )}$ cm<br>`;
        texte_corr += `La première figure est un quart de disque de rayon ${r} cm.<br>`;
        texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(
          Algebrite.eval((r * r) / 4)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r * r) / 4) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La deuxième figure est trois quarts d'un disque rayon ${r2} cm.<br>`;
        texte_corr += `$\\mathcal{A}_2=\\dfrac{3}{4}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(
          (3 / 4) * r2 * r2
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval((3 / 4) * r2 * r2 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La troisième figure est un demi-cercle de diamètre ${2 * r3
          } cm donc de rayon ${r3} cm.<br>`;
        texte_corr += `$\\mathcal{A}_3=\\dfrac{1}{2}\\times${r3}\\times${r3}\\times\\pi=${(r3 * r3) / 2
          }\\pi\\approx${tex_nombre(
            arrondi(Algebrite.eval(((r3 * r3) / 2) * Math.PI), 1)
          )}~\\text{cm}^2$<br>`;
      }
    }

    this.MG32codeBase64 = codeBase64;
    this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r", "${r}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r2", "${r2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r3", "${r3}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      `;

    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this);
  };

  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    3,
    "1 : Périmètres\n\
2 : Aires\n3 : Périmètres et aires",
  ];
}

