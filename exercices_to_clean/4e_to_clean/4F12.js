import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Problème avec lecture de représentation graphique d'une fonction
 * @Auteur Rémi Angot
 * Référence 4F12
 */
export default function Exploiter_representation_graphique() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Problème s'appuyant sur la lecture d'une représentation graphique";
  this.consigne = "";
  this.nb_questions = 1;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.nb_questions_modifiable = false;
  this.sup = 4;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let type_de_probleme
    if (this.sup == 1) {
      type_de_probleme = "projectile"
    }
    if (this.sup == 2) {
      type_de_probleme = "velo"
    }
    if (this.sup == 3) {
      type_de_probleme = "temperature"
    }
    if (this.sup == 4) {
      type_de_probleme = choice(["temperature", "projectile", "velo"]);
    }
    let a, b, c, d, f, t1, t2, l1, l2, l3, g1, g2, r, graphique, texte1, texte2;
    switch (type_de_probleme) {
      case "projectile":
        // Parabole qui a pour zéro, 0 et 6,8 ou 10
        // Et qui a pour maximum un multiple de 5
        t1 = choice([6, 8, 10]);
        a = (1 / ((-t1 / 2) * (t1 / 2 - t1))) * choice([10, 15, 20, 25, 30]); // on divise par l'image du max et on multiplie par la valeur souhaitée
        f = (x) => calcul(-a * x * (x - t1));

        // Mettre des dixièmes de secondes à la place des secondes
        let xscale = choice([1, 0.1]);
        g1 = grille(-1, -1, t1 + 2, 8);
        g1.color = "black";
        g1.opacite = 1;
        g2 = grille(-1, -1, t1 + 2, 8, "gray", 0.2, 0.2);
        g3 = axes(0, 0, t1 + 1, 8);
        texte1 = texteParPosition("hauteur (en mètre)", 0.2, 7.3, "droite");
        l1 = labelX(0, calcul((t1 + 1) * xscale), 1, "black", -0.6, xscale);
        l2 = labelY(5, 35, 1, "black", -0.6, 5);
        graphique = courbe(f, 0, t1, "blue", 2, [1, 5]);
        texte2 = texteParPosition("temps (en s)", t1 + 0.5, 0.4, "droite");

        this.introduction =
          "On a représenté ci-dessous l’évolution de la hauteur d’un projectile lancé depuis le sol (en mètre) en fonction du temps (en seconde).";

        this.introduction +=
          "<br><br>" +
          mathalea2d(
            {
              xmin: -1,
              ymin: -1,
              xmax: t1 + 3,
              ymax: 8,
              pixelsParCm: 30,
              scale: .6,
            },
            g1,
            g2,
            g3,
            graphique,
            texte1,
            texte2,
            l1,
            l2
          );

        this.introduction +=
          "<br><br>" +
          "À l’aide de ce graphique, répondre aux questions suivantes :";

        this.liste_questions.push(
          "Au bout de combien de temps le projectile retombe-t-il au sol ?"
        );
        this.liste_corrections.push(
          `Au bout de ${tex_nombrec(
            t1 * xscale
          )} s, le projectile retombe au sol car la courbe passe par le point de coordonnées $(${tex_nombrec(
            t1 * xscale
          )}~;~0)$.`
        );

        this.liste_questions.push(
          "Quelle est la hauteur maximale atteinte par le projectile ?"
        );
        this.liste_corrections.push(
          `Le point le plus haut de la courbe a pour abscisse $${tex_nombrec(
            (t1 / 2) * xscale
          )}$ et pour ordonnée $${f(
            t1 / 2
          )}$ donc la hauteur maximale est de $${f(t1 / 2)}$ m.`
        );

        break;
      case 'velo':
        let v1 = randint(1, 4)
        let v2 = randint(1, 3, v1)
        let v3 = v1 + v2
        g1 = grille(-1, -1, 6, 8)
        g1.color = 'black'
        g1.opacite = 1
        g2 = grille(-1, -1, 6, 8, 'gray', .2, .2)
        g3 = axes(0, 0, 6, 7)
        texte1 = texteParPosition('distance (en km)', 0.2, 7.3, 'droite')
        l1 = labelX(0, 50, 1, 'black', -.6, 10)
        l2 = labelY(1, 6, 1, 'black', -.6, 1)
        texte2 = texteParPosition('temps (en min)', 6.5, 0.4, 'droite')
        let situation = randint(1, 3)
        let tempsPause
        let periodeRapide
        if (situation == 1) {
          l = polyline(point(0, 0), point(1, v1), point(2, v1 + v2), point(3, v1 + v2), point(4, 0))
          tempsPause = 20
          periodeRapide = 'de la 20e à la 30e minute'
        }
        if (situation == 2) {
          l = polyline(point(0, 0), point(1, v3), point(2, v3), point(3, v2), point(4, 0))
          tempsPause = 10
          periodeRapide = 'durant les 10 premières minutes'

        }
        if (situation == 3) {
          l = polyline(point(0, 0), point(1, v3), point(2, v2), point(3, v2), point(4, 0))
          tempsPause = 20
          periodeRapide = 'durant les 10 premières minutes'
        }
        l.epaisseur = 2
        l.color = 'blue'

        fille = prenomF()
        this.introduction = `${fille} fait du vélo avec son smartphone sur une voie-verte rectiligne qui part de chez elle. Une application lui permet de voir à quelle distance de chez elle, elle se trouve.`

        this.introduction += '<br><br>' + mathalea2d({
          xmin: -1,
          ymin: -1,
          xmax: 9,
          ymax: 8,
          pixelsParCm: 40,
        }, g1, g2, g3, l, texte1, texte2, l1, l2)

        this.introduction += '<br><br>' + 'À l’aide de ce graphique, répondre aux questions suivantes :'

        this.liste_questions.push('Pendant combien de temps a-t-elle fait du vélo ?')
        this.liste_corrections.push(`Elle a fait du vélo pendant 40 minutes.`)

        this.liste_questions.push('Quelle distance a-t-elle parcourue au total ?')
        this.liste_corrections.push(`Le point le plus loin de sa maison est à ${v3} km et ensuite elle revient chez elle, donc la distance totale est de ${2 * v3} km.`)

        this.liste_questions.push(`Que se passe-t-il après ${tempsPause} minutes de vélo ?`)
        this.liste_corrections.push(`La distance reste constante alors qu'elle est sur un chemin rectiligne. Elle a donc fait une pause.`)

        this.liste_questions.push('À quel moment a-t-elle été la plus rapide ?')
        this.liste_corrections.push(`Elle a été la plus rapide ${periodeRapide} où elle a effectué ${v3} km en 10 minutes.`)


        break;
      case "temperature":
        let hmin = randint(2, 4)
        let hmax = randint(12, 16)
        let tmin = randint(-5, 15)
        let tmax = tmin + randint(5, 12)

        r = repere({
          xmin: 0,
          ymin: tmin - 1,
          ymax: tmax + 2,
          xmax: 24,
          xscale: 2,
          legendeX: "Heure",
          legendeY: "Température (en °C)",
        });
        graphique = courbeInterpolee(
          [
            [-2, tmin + 2],
            [hmin, tmin],
            [hmax, tmax],
            [26, tmin + 2],
          ],
          "blue",
          2,
          r,
          0,
          24
        );
        this.introduction =
          "On a représenté ci-dessous l’évolution de la température sur une journée.";
        this.introduction +=
          "<br><br>" +
          mathalea2d(
            {
              xmin: -1,
              ymin: tmin - 2.5,
              xmax: 16,
              ymax: tmax + 3,
              pixelsParCm: 40,
            },
            r,
            graphique
          );

        this.introduction +=
          "<br><br>" +
          "À l’aide de ce graphique, répondre aux questions suivantes :";

        this.liste_questions.push(
          "Quelle est la température la plus froide de la journée ?"
        );
        this.liste_corrections.push(`La température la plus basse est ${tmin}°C.`)

        this.liste_questions.push(
          "Quelle est la température la plus chaude de la journée ?"
        );
        this.liste_corrections.push(`La température la plus élevée de la journée est ${tmax}°C.`)
        this.liste_questions.push(
          "À quelle heure fait-il le plus chaud ?"
        );
        this.liste_corrections.push(`C'est à ${hmax} h qu'il fait le plus chaud.`)
        this.liste_questions.push(
          "À quelle heure fait-il le plus froid ?"
        );
        this.liste_corrections.push(`C'est à ${hmin} h qu'il fait le plus froid.`)


        break;
    }

    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ['Choix du problème', 3, "1 : Projectile\n2 : Trajet à vélo\n3 : Température\n4 : Au hasard"];
}

