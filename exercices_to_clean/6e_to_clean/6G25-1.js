import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Pavages et symétrie axiale.
 * Pas de version LaTeX
 * @Auteur Jean-Claude Lhote
 * Publié en 02/2020
 * référence 6G25-1
 */
export default function Pavages_et_reflexion() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Trouver l'image d'une figure par une symétrie axiale dans un pavage triangulaire (sortie Latex Impossible)";
  this.pas_de_version_LaTeX = true;
  this.consigne = "";
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  // this.sup = 1; // 1 pour les 6ème, 2 pour les 5èmes, 3 pour les 4èmes, et 4 pour les 3èmes.
  sortie_html ? (this.spacing_corr = 2.5) : (this.spacing_corr = 1.5);
  this.liste_packages = "tkz-euclide";
  this.nouvelle_version = function (numero_de_l_exercice) {
    this.type_exercice = "MG32";
    this.MG32editable = false;
    this.taille_div_MG32 = [700, 700];
    this.MG32codeBase64 =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAIP#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAEQAAFPAAAAAAAAAAAAQAgAAAAAAAAFAAFATMAAAAAAAEBTYUeuFHri#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAARAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQF6AAAAAAAAAAAAC#####wAAAAEAB0NDYWxjdWwA#####wAEem9vbQABOAAAAAFAIAAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAAAf####8AAAABAApDT3BlcmF0aW9uAwAAAAE#8AAAAAAAAAAAAAcBAAAAAUA0AAAAAAAA#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAT#####AAAAAQALQ1BvaW50SW1hZ2UA#####wEAAAABEAABSQAAAAAAAAAAAEAIAAAAAAAABQAAAAADAAAABf####8AAAABAAlDUm90YXRpb24A#####wAAAAH#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBOAAAAAAAAAAAACQD#####AQAAAAEQAAFKAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAYAAAAH#####wAAAAIAB0NSZXBlcmUA#####wDm5uYAAQAAAAEAAAAGAAAACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAAAAAAUA#####wACeEIAATYAAAABQBgAAAAAAAAAAAAFAP####8AAnlCAAEwAAAAAQAAAAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAABEAABQgAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAAAoAAAAIAAAACwAAAAUA#####wACeEMAATAAAAABAAAAAAAAAAAAAAAFAP####8AAnlDAAE2AAAAAUAYAAAAAAAAAAAADQD#####AQAAAAEQAAFDAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAADQAAAAgAAAAOAAAABQD#####AAN4TTEAAjQwAAAAAUBEAAAAAAAAAAAABQD#####AAN5TTEAATAAAAABAAAAAAAAAAAAAAANAP####8BAAAAABAAAk0xAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAAEAAAAAgAAAARAAAADQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAP####8AAAABAAxDVHJhbnNsYXRpb24A#####wAAABMAAAABAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAEgAAABQAAAAOAP####8AAAABAAAAFQAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAAAWAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAABYAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAAFv####8AAAABAAlDUG9seWdvbmUA#####wAAfwAAAQAAAAQAAAAXAAAAGAAAABkAAAAX#####wAAAAEAEENTdXJmYWNlUG9seWdvbmUA#####wAAfwAAAAAFAAAAGgAAAAUA#####wACbngAATcAAAABQBwAAAAAAAAAAAAFAP####8AAm55AAE3AAAAAUAcAAAAAAAAAAAADAD#####AObm5gABAAAAAQAAAAwAAAAPAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAAAAAADQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAAgAAAAcAAAACAAAAB3#####AAAAAQAHQ01pbGlldQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAB8AAAAFAP####8AA3hOMwABOAAAAAFAIAAAAAAAAAAAAAUA#####wADeU4zAAEyAAAAAUAAAAAAAAAAAAAABQD#####AAN4TTMAATQAAAABQBAAAAAAAAAAAAAFAP####8AA3lNMwACMTAAAAABQCQAAAAAAAAAAAANAP####8BAAD#ABAAAk4zAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAAIQAAAAgAAAAiAAAADQD#####AQAA#wAQAAJNMwAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAACMAAAAIAAAAJP####8AAAABAAtDTWVkaWF0cmljZQD#####AAAA#wAQAAABAAIAAAAlAAAAJgAAAAUA#####wADeE4yAAEwAAAAAQAAAAAAAAAAAAAABQD#####AAN5TjIAATYAAAABQBgAAAAAAAAAAAAFAP####8AA3lNMgABNgAAAAFAGAAAAAAAAAAAAAUA#####wADeE0yAAEwAAAAAQAAAAAAAAAAAAAADQD#####AQB#AAAQAAJOMgAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAACgAAAAIAAAAKQAAAA0A#####wEAfwAAEAACTTIAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAArAAAACAAAACoAAAAFAP####8AA3hOMQACNDIAAAABQEUAAAAAAAAAAAAFAP####8AA3lOMQABMgAAAAFAAAAAAAAAAAAAAA0A#####wEAAAAAEAACTjEAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAAuAAAACAAAAC8AAAASAP####8AAH8AARAABChkMSkBAAI#7MzMzMzMzQAAADAAAAAS#####wAAAAEAEUNQb2ludFBhckFic2Npc3NlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAADAAAAAcBAAAACAAAABwAAAABP#AAAAAAAAD#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQABAAAAAQAAADIAAAATAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAADwAAAAcBAAAACAAAAB0AAAABP#AAAAAAAAAAAAAEAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAAAAAAAAAAAAzAAAADgD#####AAAAAQAAADQAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA1AAAANgAAABQA#####wEAAAAAEAAAAQABAAAANQAAADcAAAAEAP####8BAAAAARAAAVUAAAAAAAAAAABACAAAAAAAAAUAAT#Q3iTV#EVNAAAAOP####8AAAACAA1DTWVzdXJlQWZmaXhlAP####8AAXoAAAAeAAAAOf####8AAAABAA1DRm9uY0NvbXBsZXhlAP####8AA251bQASMipyZSh6KSsyKm54KmltKHopAAAABwAAAAAHAgAAAAFAAAAAAAAAAP####8AAAACAAlDRm9uY3Rpb25M#####wAAAAIAEUNWYXJpYWJsZUZvcm1lbGxlAAAAAAAAAAcCAAAABwIAAAABQAAAAAAAAAD#####AAAAAQAXQ1Jlc3VsdGF0VmFsZXVyQ29tcGxleGUAAAAcAAAAF00AAAAYAAAAAAABegAAAA8A#####wH#AP8AAQAAAAQAAAABAAAADAAAAA8AAAAB#####wAAAAIACENNZXN1cmVZAP####8AAnlVAAAACQAAADn#####AAAAAgAIQ01lc3VyZVgA#####wACeFUAAAAJAAAAOQAAAA4A#####wAAAAEAAAA5AAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAD8AAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAMAAAAPwAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA8AAAA#AAAADwD#####AQAAAAABAAAABAAAAEAAAABBAAAAQgAAAED#####AAAAAgASQ0xpZXVPYmpldFBhclB0TGllAP####8AAAAAAAAAQwAAAAgAAAAdAAAAOQAAAAYAAAA5AAAAPwAAAEAAAABBAAAAQgAAAEMAAAAcAP####8AAAAAAAAARAAAAAgAAAAcAAAANQAAAAoAAAA1AAAANwAAADgAAAA5AAAAPwAAAEAAAABBAAAAQgAAAEMAAABEAAAACgD#####AAAADAAAAAFATgAAAAAAAAAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAABGAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAEYAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAARgAAAA8A#####wH#AP8ABAAAAAQAAABHAAAASAAAAEkAAABHAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARwAAAD8AAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABIAAAAPwAAAAkA#####wEAAAAAEAABQQAAAAAAAAAAAEAIAAAAAAAABQAAAABJAAAAPwAAAA8A#####wEAAAAAAQAAAAQAAABLAAAATAAAAE0AAABLAAAAHAD#####AQAAAAAAAE4AAAAIAAAAHQAAADkAAAAGAAAAOQAAAD8AAABLAAAATAAAAE0AAABOAAAAHAD#####AAAAAAAAAE8AAAAIAAAAHAAAADUAAAAKAAAANQAAADcAAAA4AAAAOQAAAD8AAABLAAAATAAAAE0AAABOAAAATwAAABMA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADkAAABNAAAAAT#VVUdaMaS+AAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAOQAAAE0AAAABP+VVR1oxpL4AAAAFAP####8AA3hVJwAbaW50KHhVKjEwMDAwMDArMC41KS8xMDAwMDAwAAAABwMAAAAXAgAAAAcAAAAABwIAAAAIAAAAPgAAAAFBLoSAAAAAAAAAAAE#4AAAAAAAAAAAAAFBLoSAAAAAAAAAAAUA#####wADeVUnABtpbnQoeVUqMTAwMDAwMCswLjUpLzEwMDAwMDAAAAAHAwAAABcCAAAABwAAAAAHAgAAAAgAAAA9AAAAAUEuhIAAAAAAAAAAAT#gAAAAAAAAAAAAAUEuhIAAAAAA#####wAAAAEAD0NDYWxjdWxDb21wbGV4ZQD#####AAJ6VQAJeFUnK2kqeVUnAAAABwAAAAAZAAAAUwAAAAcC#####wAAAAEAC0NDb25zdGFudGVpAAAAGQAAAFQAAAAdAP####8ABG51bVUABm51bSh6Kf####8AAAABABZDQXBwZWxGb25jdGlvbkNvbXBsZXhlAAAAOwAAABkAAAA6#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQD#####AQAAAADAMQAAAAAAAMAkAAAAAAAAAAAAURAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABWAAAAHQD#####AAVudW1VMQAGbnVtVSsxAAAABwAAAAAZAAAAVgAAAAE#8AAAAAAAAAAAACAA#####wEAAAAAwC4AAAAAAADAIAAAAAAAAAAAAFIQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAACAAAAWAAAABwA#####wAAAAAAAABXAAAACAAAAB0AAAA5AAAABwAAADkAAAA6AAAAPwAAAE0AAABRAAAAVgAAAFcAAAAcAP####8AAAAAAAAAWgAAAAgAAAAcAAAANQAAAAsAAAA1AAAANwAAADgAAAA5AAAAOgAAAD8AAABNAAAAUQAAAFYAAABXAAAAWgAAABwA#####wAAAAAAAABZAAAACAAAAB0AAAA5AAAACAAAADkAAAA6AAAAPwAAAE0AAABSAAAAVgAAAFgAAABZAAAAHAD#####AAAAAAAAAFwAAAAIAAAAHAAAADUAAAAMAAAANQAAADcAAAA4AAAAOQAAADoAAAA#AAAATQAAAFIAAABWAAAAWAAAAFkAAABcAAAACQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALQAAABQAAAAOAP####8AAAABAAAAXgAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAABfAAAACQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAF8AAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAAXwAAAA8A#####wD#AAAAAgAAAAQAAABgAAAAYQAAAGIAAABgAAAAEAD#####AP8AAAAAAAUAAABjAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAJgAAABQAAAAOAP####8AAAABAAAAZQAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAABmAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAGYAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAAZgAAAAkA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAUAAAADgD#####AAAAAQAAABMAAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAawAAAA4A#####wAAAGwAAAAmAAAACQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARwAAAG0AAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABIAAAAbQAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEkAAABtAAAADwD#####AAAA#wABAAAABAAAAG4AAABvAAAAcAAAAG4AAAAQAP####8AAAD#AAAABQAAAHEAAAAOAP####8AAAABAAAADwAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADQAAABzAAAAFAD#####AAAAAAAQAAABAAEAAAB0AAAAH#####8AAAABABBDSW50RHJvaXRlRHJvaXRlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAxAAAAM#####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAfwAAQDUAAAAAAADARQAAAAAAAQAAAHYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgxKSkAAAAUAP####8AAAD#ABAAAAEAAQAAAAEAAAA0AAAAIQD#####AQAA#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAeAAAACcAAAAiAP####8AAAD#AMBAAAAAAAAAwAgAAAAAAAAAAAB5EAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMykpAAAAIQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMQAAAHUAAAAiAP####8AAH8AAMBEgAAAAAAAP#AAAAAAAAAAAAB7EAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMSkpAAAAEQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALQAAACz#####AAAAAQAJQ0Ryb2l0ZU9tAP####8A#wAAABAAAAEAAgAAAAkAAAB9AAAAAT#wAAAAAAAAAAAAIQD#####AP8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAfgAAADMAAAAiAP####8A#wAAAMA1AAAAAAAAwEKAAAAAAAAAAAB#EAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMikpAAAAIQD#####AP8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAfgAAAHUAAAAiAP####8A#wAAAMAUAAAAAAAAQCYAAAAAAAAAAACBEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMikp################";
    this.MG32codeBase64corr =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAMz#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAEQAAFPAAAAAAAAAAAAQAgAAAAAAAAFAAFATMAAAAAAAEBTYUeuFHri#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAARAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQF6AAAAAAAAAAAAC#####wAAAAEAB0NDYWxjdWwA#####wAEem9vbQABOAAAAAFAIAAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAAAf####8AAAABAApDT3BlcmF0aW9uAwAAAAE#8AAAAAAAAAAAAAcBAAAAAUA0AAAAAAAA#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAT#####AAAAAQALQ1BvaW50SW1hZ2UA#####wEAAAABEAABSQAAAAAAAAAAAEAIAAAAAAAABQAAAAADAAAABf####8AAAABAAlDUm90YXRpb24A#####wAAAAH#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBOAAAAAAAAAAAACQD#####AQAAAAEQAAFKAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAYAAAAH#####wAAAAIAB0NSZXBlcmUA#####wDm5uYAAQAAAAEAAAAGAAAACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAAAAAAUA#####wACeEIAATYAAAABQBgAAAAAAAAAAAAFAP####8AAnlCAAEwAAAAAQAAAAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAABEAABQgAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAAAoAAAAIAAAACwAAAAUA#####wACeEMAATAAAAABAAAAAAAAAAAAAAAFAP####8AAnlDAAE2AAAAAUAYAAAAAAAAAAAADQD#####AQAAAAEQAAFDAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAADQAAAAgAAAAOAAAABQD#####AAN4TTEAATgAAAABQCAAAAAAAAAAAAAFAP####8AA3lNMQABMgAAAAFAAAAAAAAAAAAAAA0A#####wEAAAAAEAACTTEAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAAQAAAACAAAABEAAAANAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAA#####wAAAAEADENUcmFuc2xhdGlvbgD#####AAAAEwAAAAEAAAAJAP####8BAAAAABAAAVcAAAAAAAAAAABACAAAAAAAAAUAAAAAEgAAABQAAAAOAP####8AAAABAAAAFQAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAAAWAAAACQD#####AQAAAAAQAAFYAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAwAAAAWAAAACQD#####AQAAAAAQAAFZAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA8AAAAW#####wAAAAEACUNQb2x5Z29uZQD#####AQB#AAABAAAABAAAABcAAAAYAAAAGQAAABf#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AQB#AAAAAAUAAAAaAAAABQD#####AAJueAABNwAAAAFAHAAAAAAAAAAAAAUA#####wACbnkAATcAAAABQBwAAAAAAAAAAAAMAP####8A5ubmAAEAAAABAAAADAAAAA8AAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAAAAAANAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAACAAAABwAAAAIAAAAHf####8AAAABAAdDTWlsaWV1AP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAHwAAAAUA#####wADeE4zAAIyNgAAAAFAOgAAAAAAAAAAAAUA#####wADeU4zAAEyAAAAAUAAAAAAAAAAAAAABQD#####AAN4TTMAAjE2AAAAAUAwAAAAAAAAAAAABQD#####AAN5TTMAAjIyAAAAAUA2AAAAAAAAAAAADQD#####AQAA#wAQAAJOMwAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAACEAAAAIAAAAIgAAAA0A#####wEAAP8AEAACTTMAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAAjAAAACAAAACT#####AAAAAQALQ01lZGlhdHJpY2UA#####wEAAP8AEAAAAQACAAAAJQAAACYAAAAFAP####8AA3hOMgACMTQAAAABQCwAAAAAAAAAAAAFAP####8AA3lOMgABMgAAAAFAAAAAAAAAAAAAAAUA#####wADeU0yAAIxNAAAAAFALAAAAAAAAAAAAAUA#####wADeE0yAAEyAAAAAUAAAAAAAAAAAAAADQD#####AQB#AAAQAAJOMgAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAACgAAAAIAAAAKQAAAA0A#####wEAfwAAEAACTTIAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAArAAAACAAAACoAAAAFAP####8AA3hOMQACMTYAAAABQDAAAAAAAAAAAAAFAP####8AA3lOMQACMTAAAAABQCQAAAAAAAAAAAANAP####8BAAAAABAAAk4xAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAALgAAAAgAAAAvAAAAEgD#####AQB#AAEQAAQoZDEpAQACP+zMzMzMzM0AAAAwAAAAEv####8AAAABABFDUG9pbnRQYXJBYnNjaXNzZQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAAwAAAAHAQAAAAgAAAAcAAAAAT#wAAAAAAAA#####wAAAAEACENTZWdtZW50AP####8AAAAAABAAAAEAAQAAAAEAAAAyAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAA8AAAAHAQAAAAgAAAAdAAAAAT#wAAAAAAAAAAAABAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAAAAAAAAAAAMwAAAA4A#####wAAAAEAAAA0AAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANQAAADYAAAAUAP####8BAAAAABAAAAEAAQAAADUAAAA3AAAABAD#####AQAAAAEQAAFVAAAAAAAAAAAAQAgAAAAAAAAFAAE#0N4k1fxFTQAAADj#####AAAAAgANQ01lc3VyZUFmZml4ZQD#####AAF6AAAAHgAAADn#####AAAAAQANQ0ZvbmNDb21wbGV4ZQD#####AANudW0AEjIqcmUoeikrMipueCppbSh6KQAAAAcAAAAABwIAAAABQAAAAAAAAAD#####AAAAAgAJQ0ZvbmN0aW9uTP####8AAAACABFDVmFyaWFibGVGb3JtZWxsZQAAAAAAAAAHAgAAAAcCAAAAAUAAAAAAAAAA#####wAAAAEAF0NSZXN1bHRhdFZhbGV1ckNvbXBsZXhlAAAAHAAAABdNAAAAGAAAAAAAAXoAAAAPAP####8B#wD#AAEAAAAEAAAAAQAAAAwAAAAPAAAAAf####8AAAACAAhDTWVzdXJlWQD#####AAJ5VQAAAAkAAAA5#####wAAAAIACENNZXN1cmVYAP####8AAnhVAAAACQAAADkAAAAOAP####8AAAABAAAAOQAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAAA#AAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAD8AAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAAPwAAAA8A#####wEAAAAAAQAAAAQAAABAAAAAQQAAAEIAAABA#####wAAAAIAEkNMaWV1T2JqZXRQYXJQdExpZQD#####AAAAAAAAAEMAAAAIAAAAHQAAADkAAAAGAAAAOQAAAD8AAABAAAAAQQAAAEIAAABDAAAAHAD#####AAAAAAAAAEQAAAAIAAAAHAAAADUAAAAKAAAANQAAADcAAAA4AAAAOQAAAD8AAABAAAAAQQAAAEIAAABDAAAARAAAAAoA#####wAAAAwAAAABQE4AAAAAAAAAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAARgAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAwAAABGAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADwAAAEYAAAAPAP####8B#wD#AAQAAAAEAAAARwAAAEgAAABJAAAARwAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEcAAAA#AAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASAAAAD8AAAAJAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAAAASQAAAD8AAAAPAP####8BAAAAAAEAAAAEAAAASwAAAEwAAABNAAAASwAAABwA#####wEAAAAAAABOAAAACAAAAB0AAAA5AAAABgAAADkAAAA#AAAASwAAAEwAAABNAAAATgAAABwA#####wAAAAAAAABPAAAACAAAABwAAAA1AAAACgAAADUAAAA3AAAAOAAAADkAAAA#AAAASwAAAEwAAABNAAAATgAAAE8AAAATAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA5AAAATQAAAAE#1VVHWjGkvgAAABMA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADkAAABNAAAAAT#lVUdaMaS+AAAABQD#####AAN4VScAG2ludCh4VSoxMDAwMDAwKzAuNSkvMTAwMDAwMAAAAAcDAAAAFwIAAAAHAAAAAAcCAAAACAAAAD4AAAABQS6EgAAAAAAAAAABP+AAAAAAAAAAAAABQS6EgAAAAAAAAAAFAP####8AA3lVJwAbaW50KHlVKjEwMDAwMDArMC41KS8xMDAwMDAwAAAABwMAAAAXAgAAAAcAAAAABwIAAAAIAAAAPQAAAAFBLoSAAAAAAAAAAAE#4AAAAAAAAAAAAAFBLoSAAAAAAP####8AAAABAA9DQ2FsY3VsQ29tcGxleGUA#####wACelUACXhVJytpKnlVJwAAAAcAAAAAGQAAAFMAAAAHAv####8AAAABAAtDQ29uc3RhbnRlaQAAABkAAABUAAAAHQD#####AARudW1VAAZudW0oein#####AAAAAQAWQ0FwcGVsRm9uY3Rpb25Db21wbGV4ZQAAADsAAAAZAAAAOv####8AAAABAA9DVmFsZXVyQWZmaWNoZWUA#####wEAAAAAwDEAAAAAAADAJAAAAAAAAAAAAFEQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAACAAAAVgAAAB0A#####wAFbnVtVTEABm51bVUrMQAAAAcAAAAAGQAAAFYAAAABP#AAAAAAAAAAAAAgAP####8BAAAAAMAuAAAAAAAAwCAAAAAAAAAAAABSEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAFgAAAAcAP####8AAAAAAAAAVwAAAAgAAAAdAAAAOQAAAAcAAAA5AAAAOgAAAD8AAABNAAAAUQAAAFYAAABXAAAAHAD#####AAAAAAAAAFoAAAAIAAAAHAAAADUAAAALAAAANQAAADcAAAA4AAAAOQAAADoAAAA#AAAATQAAAFEAAABWAAAAVwAAAFoAAAAcAP####8AAAAAAAAAWQAAAAgAAAAdAAAAOQAAAAgAAAA5AAAAOgAAAD8AAABNAAAAUgAAAFYAAABYAAAAWQAAABwA#####wAAAAAAAABcAAAACAAAABwAAAA1AAAADAAAADUAAAA3AAAAOAAAADkAAAA6AAAAPwAAAE0AAABSAAAAVgAAAFgAAABZAAAAXAAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAC0AAAAUAAAADgD#####AAAAAQAAAF4AAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAXwAAAAkA#####wH#AP8AEAABUQAAAAAAAAAAAEAIAAAAAAAABQAAAAAMAAAAXwAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA8AAABfAAAADwD#####Af8AAAACAAAABAAAAGAAAABhAAAAYgAAAGAAAAAQAP####8B#wAAAAAABQAAAGMAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAFAAAAA4A#####wAAAAEAAABlAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAGYAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAMAAAAZgAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA8AAABmAAAACQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAJgAAABQAAAAOAP####8AAAABAAAAEwAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABMAAABrAAAADgD#####AAAAbAAAACYAAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABHAAAAbQAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEgAAABtAAAACQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASQAAAG0AAAAPAP####8BAAD#AAEAAAAEAAAAbgAAAG8AAABwAAAAbgAAABAA#####wEAAP8AAAAFAAAAcQAAAA4A#####wAAAAEAAAAPAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANAAAAHMAAAAUAP####8AAAAAABAAAAEAAQAAAHQAAAAf#####wAAAAEAEENJbnREcm9pdGVEcm9pdGUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADEAAAAz#####wAAAAIADENDb21tZW50YWlyZQD#####AQB#AABANQAAAAAAAMBFAAAAAAABAAAAdhAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAgoZCNMKDEpKQAAABQA#####wAAAP8AEAAAAQABAAAAAQAAADQAAAAhAP####8BAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAB4AAAAJwAAACIA#####wEAAP8AwEAAAAAAAADACAAAAAAAAAAAAHkQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgzKSkAAAAhAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAxAAAAdQAAACIA#####wAAfwAAwESAAAAAAAA#8AAAAAAAAAAAAHsQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgxKSkAAAARAP####8BAH8AABAAAkgyAAAAAAAAAAAAQAgAAAAAAAAFAAAAAC0AAAAs#####wAAAAEACUNEcm9pdGVPbQD#####Af8AAAAQAAABAAIAAAAJAAAAfQAAAAE#8AAAAAAAAAAAACEA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAH4AAAAzAAAAIgD#####Af8AAADANQAAAAAAAMBCgAAAAAAAAAAAfxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAgoZCNMKDIpKQAAACEA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAH4AAAB1AAAAIgD#####Af8AAADAFAAAAAAAAEAmAAAAAAAAAAAAgRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAgoZCNMKDIpKQAAABEA#####wEAfwAAEAACSDEAAAAAAAAAAABACAAAAAAAAAUAAAAAEgAAADAAAAAUAP####8BAH8AABAAAAEAAgAAABIAAAAwAAAABAD#####AQB#AAEQAANNJzEAAAAAAAAAAABACAAAAAAAAAUAAT#YiIhSPtDkAAAAhP####8AAAABAAlDTG9uZ3VldXIA#####wAAAAEAAAAM#####wAAAAIAD0NNZXN1cmVBYnNjaXNzZQD#####AAJrMQAAAIMAAAASAAAAhQAAAAYA#####wAAAIMAAAAIAAAAhwAAAAkA#####wEAfwAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAAAAFQAAAIj#####AAAAAQANQ1BvaW50UHJvamV0ZQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAGAAAADEAAAAGAP####8AAACKAAAACAAAAIcAAAAJAP####8BAH8AABAAAlgnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABgAAACLAAAAJgD#####AQB#AAAQAAJZJwAAAAAAAAAAAEAIAAAAAAAABQAAAAAZAAAAMQAAAAYA#####wAAAI0AAAAIAAAAhwAAAAkA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAACOAAAADwD#####AQB#AAACAAAABAAAAIkAAACMAAAAjwAAAIkAAAAQAP####8BAH8AAAAABQAAAJD#####AAAAAQAPQ1N5bWV0cmllQXhpYWxlAP####8AAAAxAAAACQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAFwAAAJIAAAAJAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAYAAAAkgAAAAkA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAACSAAAADwD#####AQB#AAACAAAABAAAAJMAAACUAAAAlQAAAJMAAAAQAP####8BAH8AAAAABQAAAJb#####AAAAAgAXQ01hY3JvQW5pbWF0aW9uUG9pbnRMaWUA#####wAAfwAB#####wpAi1QAAAAAAEA#hR64UeuGAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFYW5pbTEAAAAAAAAUAAAAZAAAADwAAACFAAEA#####wAAAAEAEUNNYWNyb0Rpc3Bhcml0aW9uAP####8AAH8AAf####8KQIs8AAAAAABAT8KPXCj1wwIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTEAAAAAAAgAAACRAAAAkAAAABsAAAAaAAAAMQAAAHcAAACXAAAAlv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8AAH8AAf####8KQItEAAAAAABAV+FHrhR64gIAAAAAAAAAAAAAAAABAAAAAAAAAAAACWFwcGFyYWl0MQAAAAAACAAAAJEAAACQAAAAGwAAABoAAAAxAAAAdwAAAJcAAACWAP####8AAAABAAtDTWFjcm9QYXVzZQD#####AAB#AAH#####EECN1AAAAAAAQEJCj1wo9cMCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAf####8AAAABABFDTWFjcm9TdWl0ZU1hY3JvcwD#####AAB#AAH#####EEBTYAAAAAAAQCMKPXCj1wwCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAxDb3JyZWN0aW9uIGEAAAAAAAQAAACaAAAAmAAAAJkAAACbAAAAFAD#####AQB#AAAQAAABAAIAAAAtAAAALAAAAAQA#####wEAfwAAEAADTScyAAAAAAAAAAAAQAgAAAAAAAAFAAE#089zR#b9RQAAAJ0AAAAlAP####8AAmsyAAAAfQAAAC0AAACeAAAAJgD#####AAB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYAAAAH4AAAAGAP####8AAACgAAAACAAAAJ8AAAAJAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABgAAAAoQAAACYA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGIAAAB+AAAABgD#####AAAAowAAAAgAAACfAAAACQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYgAAAKQAAAAJAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABhAAAApAAAAA8A#####wH#AAAAAgAAAAQAAACiAAAApQAAAKYAAACiAAAAEAD#####Af8AAAAAAAUAAACnAAAAKAD#####AP8AAAH#####CkCLlAAAAAAAQGKQo9cKPXECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVhbmltMgAAAAAAABQAAABkAAAAPAAAAJ4AAQAAAAAnAP####8AAAB+AAAACQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYAAAAKoAAAAJAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABhAAAAqgAAAAkA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGIAAACqAAAADwD#####Af8AAAACAAAABAAAAKsAAACsAAAArQAAAKsAAAAQAP####8B#wAAAAAABQAAAK4AAAApAP####8A#wAAAf####8KQIu0AAAAAABAZpCj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTIAAAAAAAkAAABkAAAAYwAAAKgAAACnAAAArwAAAK4AAAB+AAAAggAAAIAAAAAqAP####8A#wAAAf####8KQIvMAAAAAABAahCj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAACWFwcGFyYWl0MgAAAAAACQAAAGQAAABjAAAAqAAAAKcAAACvAAAArgAAAH4AAACCAAAAgAAAAAAsAP####8A#wAAAf####8QQGhwAAAAAABAIwo9cKPXDAIAAAAAAAAAAAAAAAABAAAAAAAAAAAADENvcnJlY3Rpb24gYgAAAAAABAAAALEAAACpAAAAsAAAAJsAAAARAP####8B#wAAABAAAkgzAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAlAAAAFAD#####Af8AAAAQAAABAAIAAAAmAAAAJQAAAAQA#####wH#AAAAEAADTSczAAAAAAAAAAAAQAgAAAAAAAAFAAE#0spidDyBMgAAALQAAAAlAP####8AAmszAAAAswAAACYAAAC1AAAAJgD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAbgAAACcAAAAmAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABwAAAAJwAAAAYA#####wAAALcAAAAIAAAAtgAAAAkA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAG4AAAC5AAAABgD#####AAAAuAAAAAgAAAC2AAAACQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAcAAAALsAAAAGAP####8AAACzAAAACAAAALYAAAAJAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABvAAAAvQAAAA8A#####wEAAP8AAgAAAAQAAAC6AAAAvgAAALwAAAC6AAAAJwD#####AAAAJwAAAAkA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAG4AAADAAAAACQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAbwAAAMAAAAAJAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABwAAAAwAAAAA8A#####wEAAP8AAgAAAAQAAADBAAAAwgAAAMMAAADBAAAAEAD#####AQAA#wAAAAUAAADEAAAAEAD#####AQAA#wAAAAUAAAC#AAAAKAD#####AAAA#wH#####CkCL9AAAAAAAQHAoUeuFHrgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVhbmltMwAAAAAAABQAAABkAAAAPAAAALUAAQAAAAApAP####8AAAD#Af####8KQIwEAAAAAABAcjhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTMAAAAAAAgAAAByAAAAcQAAAMYAAAC#AAAAxQAAAMQAAAAnAAAAegAAACoA#####wAAAP8B#####wpAjAwAAAAAAEB0CFHrhR64AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJYXBwYXJhaXQzAAAAAAAIAAAAcgAAAHEAAADGAAAAvwAAAMUAAADEAAAAJwAAAHoAAAAALAD#####AAAA#wH#####EEBzWAAAAAAAQCUKPXCj1wwCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAxDb3JyZWN0aW9uIGMAAAAAAAQAAADJAAAAxwAAAJsAAADIAAAALAD#####AAAA#wH#####EECMdAAAAAAAQHb4UeuFHrgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApDb3JyZWN0aW9uAAAAAAADAAAAnAAAALIAAADKAAAAhv##########";
    this.liste_questions = [];
    this.liste_corrections = []; // Liste de questions corrigées

    let texte = ``,
      texte_corr = ``;
    let tabfigA = [],
      tabfigB = [];
    let nx = 7,
      ny = 7,
      xB = 6,
      yB = 0,
      xC = 0,
      yC = 6,
      zoom = 8;
    let xM1, yM1, xN1, yN1, xM2, yM2, xN2, yN2, xM3, yM3, xN3, yN3;
    let trouver = false,
      indexa,
      numa,
      anum,
      indexaxe1,
      xmil1,
      ymil1,
      indexb,
      numb,
      bnum,
      indexaxe2,
      xmil2,
      ymil2,
      indexc,
      numc,
      cnum,
      indexaxe3,
      xmil3,
      ymil3;
    let point = [0, 0, 0];

    for (let y = 0; y < ny; y++) {
      // On initialise les tableaux avec les coordonnées des points de référence (A,B,C et D) de chaque translaté et son numéro dans le pavage.
      for (let x = 0; x < nx; x++) {
        tabfigA.push([2 + x * 6, 2 + y * 6, 2 * x + 2 * y * nx]);
        tabfigB.push([4 + x * 6, 4 + y * 6, 2 * x + 2 * y * nx + 1]);
      }
    }

    // Première question : une figure dans tabfigA, une symétrie par rapport à une droite parallèle à y=-x, l'image est dans tabfigB	 !
    // L'axe de symétrie est la médiatrice du segment d'extrémités les centres de gravités des figures A et B.

    indexa = randint(0, nx * ny - 1);
    numa = tabfigA[indexa][2];
    indexaxe1 = randint(0, nx * ny - 1); // l'index aléatoire dans le tableau des centres de gravité des figA sert à choisir un point de passage pour l'axe (xG-2,yG-2).
    //on calcule les coordonnées du milieu de [BC] on ajoute aux coordonnées du milieu de [BC] celles du vecteur BB'. (j'aurais pu réduire mais cela aurait rendu le calcul plus opaque)
    xmil1 = tabfigA[indexaxe1][0] - 2;
    ymil1 = tabfigA[indexaxe1][1] - 2;
    point = [tabfigA[indexa][0], tabfigA[indexa][1]];
    point = image_point_par_transformation(2, point, [xmil1, ymil1]);

    trouver = false;
    while (trouver == false) {
      for (let j = 0; j < nx * ny; j++) {
        if (point[0] == tabfigB[j][0] && point[1] == tabfigB[j][1]) {
          trouver = true;
          anum = tabfigB[j][2];
          break;
        }
      }
      if (trouver == false) {
        indexa = randint(0, nx * ny - 1);
        numa = tabfigA[indexa][2];
        indexaxe1 = randint(0, nx * ny - 1);
        xmil1 = tabfigA[indexaxe1][0] - 2;
        ymil1 = tabfigA[indexaxe1][1] - 2;
        point = [tabfigA[indexa][0], tabfigA[indexa][1]];
        point = image_point_par_transformation(2, point, [xmil1, ymil1]);
      }
    }
    xM1 = tabfigA[indexa][0];
    yM1 = tabfigA[indexa][1];
    xN1 = point[0];
    yN1 = point[1];

    texte = `Le point O peut être déplacé pour recadrer éventuellement le pavage.<br>`;
    texte +=
      num_alpha(0) +
      texte_en_couleur_et_gras(
        ` Quel est le numéro de la figure symétrique de la figure ${numa} dans la symétrie par rapport à la droite $(d_1)$ ?<br>`,
        `green`
      );
    texte_corr =
      num_alpha(0) +
      texte_en_couleur_et_gras(
        ` La figure symétrique de la figure ${numa} dans la symétrie par rapport à la droite $(d_1)$ porte le numéro ${anum}.<br>`,
        `green`
      );
    // Deuxième question : une figure dans tabfigA, une symétrie par rapport à une parallèle à y=x ql'image est une figure dans tabfigA
    // On tracera la médiatrice du segment d'extrémité les 2 centres de gravités symétriques.
    indexb = randint(0, nx * ny - 1);
    numb = tabfigA[indexb][2];
    indexaxe2 = randint(0, nx * ny - 1, [indexb]); // l'index aléatoire dans le tableau des centres de gravité des figA sert à choisir un point de passage pour l'axe (xG-2,yG-2).
    xmil2 = tabfigA[indexaxe2][0] - 2;
    ymil2 = tabfigA[indexaxe2][1] - 2;
    point = image_point_par_transformation(
      1,
      [tabfigA[indexb][0], tabfigA[indexb][1]],
      [xmil2, ymil2]
    );
    trouver = false;
    while (trouver == false) {
      for (let j = 0; j < nx * ny; j++) {
        if (point[0] == tabfigA[j][0] && point[1] == tabfigA[j][1]) {
          trouver = true;
          bnum = tabfigA[j][2];
          break;
        }
      }
      if (trouver == false) {
        indexb = randint(0, nx * ny - 1);
        numb = tabfigA[indexb][2];
        indexaxe2 = randint(0, nx * ny - 1);
        xmil2 = tabfigA[indexaxe2][0] - 2;
        ymil2 = tabfigA[indexaxe2][1] - 2;
        point = image_point_par_transformation(
          1,
          [tabfigA[indexb][0], tabfigA[indexb][1]],
          [xmil2, ymil2]
        );
      }
    }
    xM2 = tabfigA[indexb][0];
    yM2 = tabfigA[indexb][1];
    xN2 = point[0];
    yN2 = point[1];

    texte +=
      num_alpha(1) +
      texte_en_couleur_et_gras(
        ` Quel est le numéro de la figure symétrique de la figure ${numb} dans la symétrie par rapport à la droite $(d_2)$ ?<br>`,
        `red`
      );
    texte_corr +=
      num_alpha(1) +
      texte_en_couleur_et_gras(
        ` La figure symétrique de la figure ${numb} dans la symétrie par rapport à la droite $(2)$ porte le numéro ${bnum}.<br>`,
        `red`
      );

    // troisième question : une figure dans tabfigB, une symétrie par rapport à une parallèle à y=0, l'image est dans tabfigA
    indexc = 3; //randint(0,nx*ny-1)
    numc = tabfigB[indexc][2];
    indexaxe3 = 14; //randint(0,nx*ny-1) // l'index aléatoire dans le tableau des centres de gravité des figA sert à choisir un point de passage pour l'axe (xG-2,yG-2).
    xmil3 = tabfigA[indexaxe3][0] - 2;
    ymil3 = tabfigA[indexaxe3][1] - 2;
    point = [tabfigB[indexc][0], tabfigB[indexc][1]];
    point = changement_de_base_ortho_tri(
      image_point_par_transformation(
        3,
        changement_de_base_tri_ortho(point),
        changement_de_base_tri_ortho([xmil3, ymil3])
      )
    );
    point[0] = arrondi(point[0], 1); // Les coordonnées sont censées être entières mais les calculs JS laissent toujours de cent-milliardièmes indésirables.
    point[1] = arrondi(point[1], 1);
    trouver = false;
    while (trouver == false) {
      for (let j = 0; j < nx * ny; j++) {
        if (point[0] == tabfigA[j][0] && point[1] == tabfigA[j][1]) {
          trouver = true;
          cnum = tabfigA[j][2];
          break;
        }
      }
      if (trouver == false) {
        indexc = randint(0, nx * ny - 1);
        numc = tabfigB[indexc][2];
        indexaxe3 = randint(0, nx * ny - 1);
        xmil3 = tabfigA[indexaxe3][0] - 2;
        ymil3 = tabfigA[indexaxe3][1] - 2;
        point = [tabfigA[indexa][0], tabfigA[indexa][1]];
        point = changement_de_base_ortho_tri(
          image_point_par_transformation(
            3,
            changement_de_base_tri_ortho(point),
            [xmil3, ymil3]
          )
        );
        point[0] = arrondi(point[0], 1);
        point[1] = arrondi(point[1], 1);
      }
    }

    xM3 = tabfigB[indexc][0];
    yM3 = tabfigB[indexc][1];
    xN3 = point[0];
    yN3 = point[1];

    texte +=
      num_alpha(2) +
      texte_en_couleur_et_gras(
        ` Quel est le numéro de la figure symétrique de la figure ${numc} dans la symétrie par rapport à la droite $(d_3)$ ?<br>`,
        `blue`
      );
    texte_corr +=
      num_alpha(2) +
      texte_en_couleur_et_gras(
        ` La figure symétrique de la figure ${numc} dans la symétrie par rapport à la droite $(d_3)$ porte le numéro ${cnum}.<br>`,
        `blue`
      );

    if (sortie_html) {
      this.MG32code_pour_modifier_la_figure = `
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xB", "${xB}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yB", "${yB}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xC", "${xC}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yC", "${yC}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xM1", "${xM1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yM1", "${yM1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xN1", "${xN1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yN1", "${yN1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xM2", "${xM2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yM2", "${yM2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xN2", "${xN2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yN2", "${yN2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xM3", "${xM3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yM3", "${yM3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xN3", "${xN3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yN3", "${yN3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "nx", "${nx}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "ny", "${ny}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "zoom", "${zoom}");

			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xB", "${xB}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yB", "${yB}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xC", "${xC}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yC", "${yC}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xM1", "${xM1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yM1", "${yM1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xN1", "${xN1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yN1", "${yN1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xM2", "${xM2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yM2", "${yM2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xN2", "${xN2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yN2", "${yN2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xM3", "${xM3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yM3", "${yM3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xN3", "${xN3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yN3", "${yN3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "nx", "${nx}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "ny", "${ny}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "nx", "${nx}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "ny", "${ny}");	
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "zoom", "${zoom}");

			mtg32App.calculate("MG32svg${numero_de_l_exercice}");
			mtg32App.display("MG32svg${numero_de_l_exercice}");
			mtg32App.calculate("MG32svgcorr${numero_de_l_exercice}");
			mtg32App.executeMacro("MG32svgcorr${numero_de_l_exercice}","Correction")
			mtg32App.display("MG32svgcorr${numero_de_l_exercice}");
			`;

      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
      liste_de_question_to_contenu_sans_numero(this);
    } else {
      texte = ``;
      texte_cor = ``;
      this.liste_questions.push(texte); // on envoie la question
      this.liste_corrections.push(texte_corr);
      liste_de_question_to_contenu_sans_numero(this);
    }
  };
  // this.besoin_formulaire_numerique = ['Transformations',5, '1 : Symétries axiales\n 2 : Symétries centrales\n 3 : Rotations\n 4 : Translations\n 5 : Homothéties\n'];
}
