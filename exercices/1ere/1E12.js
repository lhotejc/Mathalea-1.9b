import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,somme_des_termes_par_signe,trie_positifs_negatifs,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction_simplifiee,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise} from "/modules/outils.js"
import {repere,courbe,mathalea2d,} from "/modules/mathalea2d.js"

// import {ObjetMathalea2D,Point,point,TracePoint,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,translation,translation2Points,rotation,homothetie,symetrieAxiale,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,afficherTempo,montrerParDiv,cacherParDiv,afficherTempo,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,} from "/modules/mathalea2d.js"


/**
 * @Auteur Jean-Claude Lhote
 * Trois type de questions proposées :
 * 1) passant par trois dont deux d'abscisses opposées et le troisième d'abscisse 0 (pour simplifier la résolution du système)
 * 2) Passant par un point et dont on connait le sommet
 * 3) connaissant les deux racines et un autre point de passage à coordonnées entières
 * référence 1E12
 */
 export default function Trouver_equation_parabole() {
    Exercice.call(this); // Héritage de la classe Exercice()
    this.titre = "Trouver l'équation d'une parabole";
    this.consigne = "Trouver l'expression de la fonction f.";
    this.nb_questions = 5;
    this.nb_cols = 2;
    this.nb_cols_corr = 2;
    this.spacing_corr = 3;
    this.sup = 4;
    this.correction_detaillee_disponible=true
  
    this.nouvelle_version = function () {
      this.liste_questions = []; // Liste de questions
      this.liste_corrections = []; // Liste de questions corrigées
      let liste_type_de_questions,type_de_questions_disponibles;
      if (this.sup<4) type_de_questions_disponibles=[parseInt(this.sup)]
      else type_de_questions_disponibles=[1,2,2,3,3]
      let f_name=[],Ymin,Yscale,Ymax
      liste_type_de_questions=combinaison_listes(type_de_questions_disponibles,this.nb_questions)
      for (let i = 0, texte, texte_corr, a, b, c, x1, x2,x3,f,r, cpt = 0;i < this.nb_questions && cpt < 50;) {
        f_name.push(lettre_minuscule_depuis_chiffre(i+6))
        texte = `Quelle est l'expression de la fonction polynomiale $\\mathscr{${f_name[i]}}$ du second degré `
        texte_corr=``
        switch (liste_type_de_questions[i]) {
            case 1 : // passe par 3 points à coordonnées entières dont -x1, 0 et x1.
            a=randint(-4,4,0)
            b=randint(-6,6,0)
            c=randint(-10,10,0)
            x1=randint(1,5)
            x2=randint(-5,5,x1)
            x3=randint(-5,5,[x1,x2])
             f = function(x) {
              return calcul(a*x**2+b*x+c)
            }
            texte+=`qui passe par les points de coordonnées $(${-x1};${f(-x1)})$, $(0;${f(0)})$ et $(${x1};${f(x1)})$ ?<br>`
            texte_corr=`Soit $\\mathscr{${f_name[i]}}(x)=ax^2+bx+c$ , l'expression de la fonction cherchée, comme $\\mathscr{${f_name[i]}}(0)=${f(0)}$ nous en déduisons que $c=${mise_en_evidence(f(0),'red')}$.<br>`
            texte_corr+=`Donc $\\mathscr{${f_name[i]}}(x)=ax^2+bx${mise_en_evidence(ecriture_algebrique(f(0)),'red')}$.<br>`
            texte_corr+=`En substituant dans cette expression les valeurs de l'énoncé, nous obtenons :<br>`
            texte_corr+=`$\\begin{cases}
            ${f(x1)}=a\\times${x1}^2+b\\times${x1}${ecriture_algebrique(f(0))}=${Algebrite.eval(ecriture_algebrique_sauf1(x1**2)+'a'+ecriture_algebrique_sauf1(x1)+'b'+ecriture_algebrique(f(0)))} \\\\
            ${f(-x1)}=a\\times(${-x1})^2+b\\times(${-x1})${ecriture_algebrique(f(0))}=${Algebrite.eval(ecriture_algebrique_sauf1(x1**2)+'a'+ecriture_algebrique_sauf1(-x1)+'b'+ecriture_algebrique(f(0)))}
         \\end{cases}$<br>`
            if (this.correction_detaillee) {
              texte_corr+=`Ce qui équivaut à <br>$\\begin{cases}
                 ${f(x1)}${ecriture_algebrique(-f(0))}=${f(x1)-f(0)}=${Algebrite.eval(ecriture_algebrique_sauf1(x1**2)+'a' + ecriture_algebrique_sauf1(x1)+'b')} \\\\
                 ${f(-x1)}${ecriture_algebrique(-f(0))}=${f(-x1)-f(0)}=${Algebrite.eval(ecriture_algebrique_sauf1(x1**2)+'a'+ecriture_algebrique_sauf1(-x1)+'b')}
               \\end{cases}$<br>`
               texte_corr+=`En ajoutant et en soustrayant les équations membre à membre, on obtient :<br>
                $\\begin{cases}
                ${f(x1)+f(-x1)-2*f(0)}=${2*x1**2}a \\\\
                ${f(x1)-f(-x1)}=${2*x1}b
             \\end{cases}$<br>`
            }
         texte_corr+=`La résolution de ce système donne $a=${mise_en_evidence(tex_nombre(a),'blue')}$ et $b=${mise_en_evidence(tex_nombre(b),'green')}$.<br>`
         texte_corr+=`D'où $\\mathscr{${f_name[i]}}(x)=${mise_en_evidence(ecriture_algebrique_sauf1(a),'blue')}x^2 ${mise_en_evidence(ecriture_algebrique_sauf1(b),'green')}x  ${mise_en_evidence(ecriture_algebrique(c),'red')}$<br>`
   
            break;
          case 2 : // Passant par le sommet (x1,y1) et par le point (x2,y2)
          a=randint(-3,3,0)
          b=randint(-3,3,0)*2*a
          c=randint(-10,10)
          x1=calcul(-b/(2*a))
          x2=randint(-5,5,x1)
          x3=randint(-5,5,[x1,x2])
  
         f = function(x) {
          return calcul(a*x**2+b*x+c)
        }
            texte+=`dont la parabole a pour sommet le point de coordonnées $(${x1};${f(x1)})$ et passe par le point de coordonnées $(${x2};${f(x2)})$ ?<br>`;
            texte_corr=`D'après les coordonnées $(${x1};${f(x1)})$ du sommet, $\\mathscr{${f_name[i]}}$ a pour forme canonique : $\\mathscr{${f_name[i]}}(x)=a(x${ecriture_algebrique(-x1)})^2${ecriture_algebrique(f(x1))}$.<br>`
    //       texte_corr+=`$=${Algebrite.eval('ax^2'+ecriture_algebrique(-2*x1)+'ax'+ecriture_algebrique(x1**2)+'a'+ecriture_algebrique(f(x1)))}$<br>`
            texte_corr+=`De plus $\\mathscr{${f_name[i]}}(${x2})=${f(x2)}$`
            if (this.correction_detaillee) {
              texte_corr+=` donc $a(${x2}${ecriture_algebrique(-x1)})^2${ecriture_algebrique(f(x1))}=${f(x2)}$ `
              texte_corr+=`soit $${Algebrite.eval(x2**2+'a'+ecriture_algebrique(-2*x1*x2)+'a'+ecriture_algebrique(x1**2)+'a'+ecriture_algebrique(f(x1)))}=${f(x2)}$.<br>`
            if (x2**2-2*x1*x2+x1**2!=1)
              texte_corr+=`On en déduit que $a=\\dfrac{${f(x2)}${ecriture_algebrique(-f(x1))}}{${(x2**2-2*x1*x2+x1**2)}}=${a}$.<br>`
            else
              texte_corr+=`On en déduit que $a=${f(x2)}${ecriture_algebrique(-f(x1))}=${a}$.<br>`
            }
            else texte_corr+=` donc $a=${a}$.<br>`
            if (this.correction_detaillee) {
              texte_corr+=`Développons la forme canonique : $\\mathscr{${f_name[i]}}(x)=
              a(x${ecriture_algebrique(-x1)})^2${ecriture_algebrique(f(x1))}=
              a(x^2${mise_en_evidence(ecriture_algebrique(-2*x1),'green')}x+${mise_en_evidence(tex_nombrec(x1**2),'red')})${mise_en_evidence(ecriture_algebrique(f(x1)),'red')}
              =${mise_en_evidence('a','blue')}x^2${mise_en_evidence(ecriture_algebrique(-2*x1)+'a','green')}x${mise_en_evidence(ecriture_algebrique_sauf1(x1**2)+'a'+ecriture_algebrique(f(x1)),'red')}$.<br>`
            }
            texte_corr+=`En remplaçant $a$ par sa valeur $${a}$ dans l'expression canonique développée $${mise_en_evidence('a','blue')}x^2${mise_en_evidence(ecriture_algebrique(-2*x1)+'a','green')}x${mise_en_evidence(ecriture_algebrique_sauf1(x1**2)+'a'+ecriture_algebrique(f(x1)),'red')}$ on obtient :<br>`
            texte_corr+=`$\\mathscr{${f_name[i]}}(x)=${mise_en_evidence(rien_si_1(a),'blue')}x^2${mise_en_evidence(ecriture_algebrique_sauf1(b),'green')}x${mise_en_evidence(ecriture_algebrique(c),'red')}$`
             break;
          case 3: // on a deux racines x1 et x2 et un troisième point (x3;f(x3))
          x1=randint(-6,-1)
          x2=randint(1,6,-x1)
          x3=randint(-5,5,[x1,x2])
          a=randint(-4,4,0)
          b=calcul(-a*(x1+x2))
          c=a*x1*x2
          f = function(x) {
            return calcul(a*x**2+b*x+c)
          }
               texte+=`qui s'annule en $x=${x1}$ et en $x=${x2}$ et dont la parabole passe par le point de coordonnées $(${x3};${f(x3)})$ ?<br>`
            texte_corr+=`Comme $${x1}$ et $${x2}$ sont les deux solutions de l'équation $\\mathscr{${f_name[i]}}(x)=0$, on peut factoriser $\\mathscr{${f_name[i]}}(x)$ :<br>`
            texte_corr+=`$\\mathscr{${f_name[i]}}(x)=a(x${ecriture_algebrique(-x1)})(x${ecriture_algebrique(-x2)})$.<br>`
            texte_corr+=`Comme $\\mathscr{${f_name[i]}}(${x3})=${f(x3)}$, on en déduit que `
            if (this.correction_detaillee) {
              texte_corr+=`$${f(x3)}=a(${x3}${ecriture_algebrique(-x1)})(${x3}${ecriture_algebrique(-x2)})$ `
              texte_corr+=`d'où $a=${f(x3)}\\div ${ecriture_parenthese_si_negatif((x3-x1)*(x3-x2))}=${a}$.<br>`
            }
            else texte_corr+=`$a=${a}$.<br>`
            texte_corr+=`On obtient ainsi $\\mathscr{${f_name[i]}}(x)=${rien_si_1(a)}(x${ecriture_algebrique(-x1)})(x${ecriture_algebrique(-x2)})$ ou en développant $\\mathscr{${f_name[i]}}(x)=${Algebrite.eval(`${ecriture_algebrique_sauf1(a)}x^2 ${ecriture_algebrique_sauf1(b)}x  ${ecriture_algebrique(c)}`)}$`
            break;
  
        }
        if (a<0) {
          Ymax=Math.ceil(f(-b/(2*a))+2)
          Ymin=Math.min(f(x1),f(x2),f(x3),f(-x1),f(0),f(-6),f(6))
        }
        else {
          Ymin=Math.floor(f(-b/(2*a))-2)
          Ymax=Math.max(f(x1),f(x2),f(x3),f(-x1),f(0),f(-6),f(6))
        }
  
        if (Ymax-Ymin<10) Yscale=2
        else Yscale =Math.max(1,calcul(Math.round(Math.ceil((Ymax-Ymin)/10)/5)*5))*2
  /*      if (Ymin>=0) Ymin=-Yscale
          else Ymin=-premierMultipleSuperieur(Yscale,-Ymin)
        if (Ymax<=0) Ymax=Yscale
           else Ymax=premierMultipleSuperieur(Yscale,Ymax)
  */    
  
        r = repere({
          xmin: -10,
          ymin: Ymin-Yscale,
          ymax: Ymax+Yscale,
          xmax: 10,
          xscale: 1,
          yscale:Yscale,
          positionLabelY:-0.8
        })
  
        svgYmin=Math.min(calcul(Ymin/Yscale),-1)
        svgYmax=Math.max(calcul(Ymax/Yscale),1)
        F = x => a*x**2+b*x+c;
        texte+=mathalea2d({xmin:-10, xmax:11,ymin:svgYmin,ymax:svgYmax+2,scale:.6},courbe(F,-10,10,'blue',1.5,r),r)
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
    this.besoin_formulaire_numerique = ['Type de questions ',4,"1 : Passant par trois points à coordonnées entières 1\n2 : Connaissant le sommet et un point de passage\n3 : Connaissant les deux racines et un point de passage\n4 : Mélange des trois type de questions"];
  }