import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * @auteur Jean-Claude Lhote
 * 4G20MG32
 */
export default function Exercice_Pythagore() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculer une longueur avec l'égalité de Pythagore (MG32)";
  this.consigne = "";
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 1; // 1 calcul de l'hypoténuse 2 calcul d'un côté de l'angle droit
  sortie_html ? (this.spacing_corr = 2.5) : (this.spacing_corr = 1.5);
  this.liste_packages = "tkz-euclide";

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.type_exercice = "MG32";
    this.taille_div_MG32 = [700, 500];
    this.liste_questions = [];
    this.liste_corrections = []; // Liste de questions corrigées
    let lettre0 = randint(11, 25); // aleatoirisation du nom des points
    let s0 = lettre_depuis_chiffre(lettre0);
    lettre1 = randint(11, 25, [lettre0]);
    let s1 = lettre_depuis_chiffre(lettre1);
    lettre2 = randint(11, 25, [lettre0, lettre1]);
    let s2 = lettre_depuis_chiffre(lettre2);
    let type_de_questions;
    if (this.sup == 1) {
      type_de_questions = 1; //calcul de l'hypoténuse
    }
    if (this.sup == 2) {
      type_de_questions = 2; //calcul d'un côté de l'angle droit
    }
    if (this.sup == 3) {
      type_de_questions = randint(1, 2); //un des deux calculs
    }
    if (this.sup == 4) {
      type_de_questions = randint(3, 4);
    }
    let nom_du_triangle = choice([
      s0 + s1 + s2,
      s0 + s2 + s1,
      s1 + s0 + s2,
      s1 + s2 + s0,
      s2 + s0 + s1,
      s2 + s1 + s0,
    ]);
    let k1 = Math.round((Math.random() * 3 + 3) * 10) / 10;
    let k2 = Math.round((Math.random() * 3 + 2) * 10) / 10;
    let alpha1 = Math.random() * Math.PI - Math.PI / 2;
    let alpha1deg = Math.round((alpha1 * 180) / Math.PI);
    let x1 = k1; // coordonnées des deux sommets du triangle
    let y2 = k2;
    let s01 = arrondi_virgule(k1, 1); // mise en texte avec 1 chiffres après la virgule pour énoncé
    let s02 = arrondi_virgule(k2, 1);

    let carre01 = Math.round(k1 * k1 * 100) / 100;
    let carre02 = Math.round(k2 * k2 * 100) / 100;
    let dist12 = Math.sqrt(carre01 + carre02); //calcul de l'hypoténuse
    dist12 = Math.round(dist12 * 10) / 10; // On ne garde qu'une approximation au dixième pour l'exercice
    let s12 = arrondi_virgule(dist12, 1);
    let carre12 = Math.round(dist12 * dist12 * 100) / 100;

    let scarre01 = arrondi_virgule(carre01, 2); // carremn = distance entre (xm;ym) et (xn;yn) au carré avec 2 décimales
    let scarre02 = arrondi_virgule(carre02, 2); // scarremn = chaine de caractère avec 2 décimales après une virgule.
    let scarre12 = arrondi_virgule(carre12, 2);
    if (sortie_html) {
      let codeBase64;
      if (alpha1deg < 0) {
        codeBase64 =
          "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAACtAAAAQEAAAAAAAAAAQAAACH#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMA7AAAAAAAAwCAAAAAAAAAFAAFAcLFHrhR64UBneFHrhR64#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAMtOTD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBWgAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAAAFgABWgDAFAAAAAAAAEAAAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AQAAAAAWAAFGAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAAOAAAADwAAAAEAAAAAAAAAAAAAABMA#####wEAAAAAFgABRAAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAADgAAABD#####AAAAAQAJQ1JvdGF0aW9uAP####8AAAASAAAADgAAABEAAAAPAP####8AAAAAABYAAUIAQCoAAAAAAADALgAAAAAAAAcAAAAAEwAAABUAAAAPAP####8AAAAAABYAAUMAQBAAAAAAAADAOwAAAAAAAAcAAAAAFAAAABX#####AAAAAQAJQ1BvbHlnb25lAP####8AAAAAAAIAAAAEAAAAEgAAABYAAAAXAAAAEv####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAA#wAEAAAAAUAwAAAAAAAAAAAAFgAAABIAAAAX#####wAAAAEACENTZWdtZW50AP####8BAAD#ABAAAAEABAAAABcAAAAW#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAh8ij1wo9cUBHYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFQXBwQkMAAAAAAAEAAAAaAP####8AAAABABFDTWFjcm9EaXNwYXJpdGlvbgD#####AP8AAAH#####EECKaKPXCj1xQEphR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZNYXNxQkMAAAAAAAEAAAAa#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQI1oo9cKPXFASuFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAABAAAAGQD#####AAAA#wH#####EECIIKPXCj1xQFqwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApNYXNxQW5nZHJ0AAAAAAABAAAAGQAAABgA#####wAAAP8B#####xBAjAij1wo9cUBa8KPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQXBwQW5nRHJ0AAAAAAABAAAAGQD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAAP8B#####xBAWMUeuFHrhUB4fCj1wo9cAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALaHlwb3TDqW51c2UAAAAAAAsAAAAeAAAAGwAAAB0AAAAfAAAAHAAAAB0AAAAeAAAAGwAAAB0AAAAcAAAAHwAAAA7##########w==";
      } else {
        codeBase64 =
          "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAACtAAAAQEAAAAAAAAAAQAAACH#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMAUAAAAAAAAQBQAAAAAAAAFAAFAbFo9cKPXBkB0BhR64Ueu#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAI5MAAAAAFAVoAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABYAAVoAwBQAAAAAAABAAAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABIA#####wEAAAAAFgABRgAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAAA8AAAABAAAAAAAAAAAAAAASAP####8BAAAAABYAAUQAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAA4AAAAQ#####wAAAAEACUNSb3RhdGlvbgD#####AAAAEgAAAA4AAAARAAAADwD#####AAAAAAAWAAFCAEAqAAAAAAAAwDgAAAAAAAAHAAAAABMAAAAVAAAADwD#####AAAAAAAWAAFDAMA3AAAAAAAAwEAAAAAAAAAHAAAAABQAAAAV#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABIAAAAWAAAAFwAAABL#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAP8ABAAAAAFAMAAAAAAAAAAAABYAAAASAAAAF#####8AAAABAAhDU2VnbWVudAD#####AQAA#wAQAAABAAQAAAAXAAAAFv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8A#wAAAf####8QQIfIo9cKPXFAR2FHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABUFwcEJDAAAAAAABAAAAGgD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wAAAP8B#####xBAimij1wo9cUBKYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGTWFzcUJDAAAAAAABAAAAGv####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECNaKPXCj1xQErhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAQAAABgA#####wAAAP8B#####xBAh#Cj1wo9cUBbcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKTWFzcUFuZ0RydAAAAAAAAQAAABkAAAAXAP####8AAAD#Af####8QQIw4o9cKPXFAXPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACUFwcEFuZ0RydAAAAAAAAQAAABkA#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8AAAD#Af####8QQFjFHrhR64VAeHwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAC2h5cG90w6ludXNlAAAAAAALAAAAHgAAABsAAAAdAAAAHwAAABwAAAAdAAAAHgAAABsAAAAdAAAAHwAAABwAAAAO##########8=";
      }

      if (type_de_questions == 1) {

        // calcul direct de l'hypoténuse
        texte = `Dans la figure ci-dessous, le triangle $${nom_du_triangle}$ est rectangle en $${s0}$, $${s0 + s1
          }=${s01}$ cm, $${s0 + s2}=${s02}$ cm.`;
        texte += `<br>Le point $${s0}$ peut être déplacé.<br>`;
        texte += `Calculer $${s1 + s2}$.`;
        texte_corr = `Dans le triangle $${nom_du_triangle}$ rectangle en $${s0}$, d&rsquo;après le théorème de Pythagore, on a : $${s1 + s2
          }^2 = ${s0 + s1}^2~+~${s0 + s2}^2.$<br>`;
        texte_corr +=
          "D&rsquo;où " +
          `$${s1 + s2
          }^2~=~${s01}^2~+~${s02}^2~=~${scarre01}~+~${scarre02}~=~${arrondi_virgule(
            carre02 + carre01,
            2
          )}.$` +
          "<br>";
        texte_corr +=
          "Soit " +
          `$${s1 + s2}~=~\\sqrt{${arrondi_virgule(
            carre02 + carre01,
            2
          )}}~\\approx${s12}$` +
          " cm.";
      }
      if (type_de_questions == 2) {
        // Calcul d'un côté de l'angle droit
        texte = `Dans la figure ci-dessous, le triangle $${nom_du_triangle}$ est rectangle en $${s0}$, $${s0 + s1
          }=${s01}$ cm, $${s1 + s2}=${s12}$ cm.<br>`;
        texte += `Calculer $${s0 + s2}$.`;
        texte_corr = `Dans le triangle $${nom_du_triangle}$ rectangle en $${s0}$, d&rsquo;après le théorème de Pythagore, on a : $${s1 + s2
          }^2 = ${s0 + s1}^2~+~${s0 + s2}^2.$<br>`;
        texte_corr +=
          "D&rsquo;où " +
          `$${s0 + s2}^2~=~${s1 + s2}^2~-~${s0 + s1
          }^2 = ${s12}^2~-~${s01}^2~=~${scarre12}~-~${scarre01}~=~${arrondi_virgule(
            carre12 - carre01,
            2
          )}.$` +
          "<br>";
        texte_corr +=
          "Soit " +
          `$${s0 + s2}~=~\\sqrt{${arrondi_virgule(
            carre12 - carre01,
            2
          )}}~\\approx${s02}$` +
          " cm.";
      }
      if (type_de_questions < 3) {
        this.type_exercice = "MG32";
        this.MG32codeBase64 = codeBase64;
        this.MG32code_pour_modifier_la_figure = `
				mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x2", "${y2}");
		        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x1", "${x1}");
				mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "alphadeg", "${alpha1deg}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","A","${s0}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","B","${s1}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","C","${s2}");
				mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        	mtg32App.display("MG32svg${numero_de_l_exercice}");
				`;
        texte += `<br>$\\footnotesize{\\textit{Le point \\thickspace ${s0} peut être déplacé (si la figure est tronquée).}}$<br>`;
      } else {
        this.type_exercice = "";
      }
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
      if (type_de_questions < 3) {
        liste_de_question_to_contenu(this);
      } else {
        liste_de_question_to_contenu_sans_numero(this);
      }
    } else {
      if (type_de_questions < 3) {
        texte =
          "\\begin{minipage}{.7 \\linewidth} 	\\vspace{0cm} Sur la figure ci-contre (qui n'est pas en vraie grandeur), on a  : \\begin{itemize}";
        texte +=
          "\n\t\\item Le côté " +
          `$[${s0 + s1}]$` +
          " est perpendiculaire au côté " +
          `$[${s0 + s2}]~;$`;
        if (type_de_questions == 1) {
          //niveau 1 : Calcul de l'hypoténuse

          // enoncé  niveau 1

          texte +=
            "\n\t\\item " + `$${s0 + s1 + " = " + s01 + "~\\text{cm}~;"}$`;
          texte +=
            "\n\t\\item " + `$${s0 + s2 + " = " + s02 + "~\\text{cm}~;"}$`;
          texte +=
            "\\end{itemize} \\bigskip\n\t  Calculer " +
            `$${s1 + s2}$` +
            " à 0,1 près. \\end{minipage}";
        } else {
          // niveau 2 : Calcul d'un côté de l'angle droit
          // enoncé  niveau 2

          texte +=
            "\n\t\\item " + `$${s1 + s2 + " = " + s12 + "~\\text{cm}~;"}$`;
          texte +=
            "\n\t\\item " + `$${s0 + s1 + " = " + s01 + "~\\text{cm}~;"}$`;
          texte +=
            "\\end{itemize} \\bigskip  Calculer " +
            `$${s0 + s2}$` +
            " à 0,1 près. \\end{minipage}";
        }
        texte += "\\begin{minipage}{0.3 \\linewidth}";
        // dessin de la figure
        let scale = 0.7 * 6 / Math.max(x1, y2)
        texte += `\n \\begin{tikzpicture}[scale=${scale}]`; // Balise début de figure
        texte +=
          "\n\t \\tkzDefPoints{0/0/" + s0 + "," + x1 + "/0/B,0/" + y2 + "/C}"; // créer les points du triangle initial
        // Définit les points M et N par homothétie de centre C et de rapport 0,3<k<0,8
        texte +=
          "\n\t \\tkzDefPointBy[rotation= center " +
          s0 +
          " angle " +
          alpha1deg +
          "](B) \\tkzGetPoint{" +
          s1 +
          "}"; // transformer le premier point par rotation
        texte +=
          "\n\t \\tkzDefPointBy[rotation= center " +
          s0 +
          " angle " +
          alpha1deg +
          "](C) \\tkzGetPoint{" +
          s2 +
          "}"; // transformer le deuxième point par rotation
        texte += "\n\t \\tkzDrawPolygon(" + s0 + "," + s1 + "," + s2 + ")"; // Trace le triangle
        // marquer l'angle droit
        texte +=
          "\n\t \\tkzDefPointBy[homothety=center " +
          s0 +
          " ratio 0.1](" +
          s1 +
          ")" +
          "\\tkzGetPoint{B}";
        texte +=
          "\n\t \\tkzDefPointBy[rotation= center " +
          s0 +
          " angle 90](B) \\tkzGetPoint{C}";
        texte +=
          "\n\t \\tkzDefPointBy[homothety=center " +
          s0 +
          " ratio 0.1414](" +
          s1 +
          ")" +
          "\\tkzGetPoint{A}";
        texte +=
          "\n\t \\tkzDefPointBy[rotation= center " +
          s0 +
          " angle 45](A) \\tkzGetPoint{A}";
        texte += "\n\t \\tkzDrawPolygon(" + s0 + ",B,A,C)"; // Trace la marque d'angle droit

        if (alpha1deg > 0) {
          // rotation "angle droit dessous"
          texte += "\n\t \\tkzLabelPoints[below](" + s0 + ")"; //nomme les points
          texte += "\n\t \\tkzLabelPoints[right](" + s1 + ")";
          texte += "\n\t \\tkzLabelPoints[left](" + s2 + ")";
        } else {
          // rotation "angle droit dessus" position du nom inversée
          texte += "\n\t \\tkzLabelPoints[above](" + s0 + ")"; //nomme les points
          texte += "\n\t \\tkzLabelPoints[left](" + s1 + ")";
          texte += "\n\t \\tkzLabelPoints[right](" + s2 + ")";
        }
        texte += "\n \\end{tikzpicture}"; // Balise de fin de figure
        texte += "\\end{minipage}";
      } else {
        texte =
          "\\begin{minipage}{.5 \\linewidth} 	\\vspace{0cm} Dans le triangle " +
          `${nom_du_triangle}` +
          " rectangle en " +
          `${s0}` +
          " : \\begin{itemize}";
        // texte += '\n\t\\item Le côté ' + `$[${s0 + s1}]$` + ' est perpendiculaire au côté ' + `$[${s0 + s2}]~;$`
        if (type_de_questions == 1) {
          //niveau 1 : Calcul de l'hypoténuse

          // enoncé  niveau 1

          texte +=
            "\n\t\\item " + `$${s0 + s1 + " = " + s01 + "~\\text{cm}~;"}$`;
          texte +=
            "\n\t\\item " + `$${s0 + s2 + " = " + s02 + "~\\text{cm}~;"}$`;
          texte +=
            "\\end{itemize} \\bigskip\n\t  Calculer " +
            `$${s1 + s2}$` +
            " à 0,1 près. \\end{minipage}";
        } else {
          // niveau 2 : Calcul d'un côté de l'angle droit
          // enoncé  niveau 2

          texte +=
            "\n\t\\item " + `$${s1 + s2 + " = " + s12 + "~\\text{cm}~;"}$`;
          texte +=
            "\n\t\\item " + `$${s0 + s1 + " = " + s01 + "~\\text{cm}~;"}$`;
          texte +=
            "\\end{itemize} \\bigskip  Calculer " +
            `$${s0 + s2}$` +
            " à 0,1 près. \\end{minipage}";
        }
      }
      this.liste_questions.push(texte); // on envoie la question
      // correction
      if (type_de_questions == 2 || type_de_questions == 4) {
        //niveau 2 : Calcul d'un côté de l'angle droit
        texte_corr =
          "Le triangle " +
          `$${nom_du_triangle}$` +
          " est rectangle en " +
          `$${s0}.$` +
          "<br>\n D'après le théorème de Pythagore, on a :~" +
          `$${s1 + s2}^2 = ${s0 + s1}^2~+~${s0 + s2}^2.$`;
        texte_corr +=
          "<br>\n D'où " +
          `$${s0 + s2}^2~=~${s1 + s2}^2~-~${s0 + s1
          }^2 = ${s12}^2~-~${s01}^2~=~${scarre12}~-~${scarre01}~=~${arrondi_virgule(
            carre12 - carre01,
            2
          )}.$`;
        texte_corr +=
          "<br>\n Soit " +
          `$${s0 + s2}~=~\\sqrt{${arrondi_virgule(
            carre12 - carre01,
            2
          )}}~`;
        if (s02 == calcul(Math.sqrt(s12 ** 2 - s01 ** 2))) texte_corr += `=${s02}~\\text{cm}.$`
        else texte += `\\approx${s02}~\\text{cm}.$`;
      } else {
        texte_corr =
          "Le triangle " +
          `$${nom_du_triangle}$` +
          " est rectangle en " +
          `$${s0}.$` +
          "<br>\n D'après le théorème de Pythagore, on a " +
          `$${s1 + s2}^2 = ${s0 + s1}^2~+~${s0 + s2}^2.$`;
        texte_corr +=
          "<br>\n D'où " +
          `$${s1 + s2
          }^2~=~${s01}^2~+~${s02}^2~=~${scarre01}~+~${scarre02}~=~${arrondi_virgule(
            carre02 + carre01,
            2
          )}.$`;
        texte_corr +=
          "<br>\n Soit " +
          `$${s1 + s2}~=~\\sqrt{${arrondi_virgule(
            carre02 + carre01,
            2
          )}}~`;
        if (s12 == calcul(Math.sqrt(s01 ** 2 + s02 ** 2))) texte_corr += `=${s12}~\\text{cm}.$`
        else texte += `\\approx${s12}~\\text{cm}.$`;
      }

      this.liste_corrections.push(texte_corr);

      liste_de_question_to_contenu_sans_numero(this);

      // }end for
    }
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : Calcul de l'hypoténuse \n 2 : Calcul d'un côté de l'angle droit\n 3 : Calcul d'un côté quelconque\n 4 : Sans la figure",
  ];
}

