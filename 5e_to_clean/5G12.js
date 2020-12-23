import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,liste_de_choses_a_imprimer,liste_de_question_to_contenu_sans_numero,liste_de_question_to_contenu_sans_numero_et_sans_consigne,deuxColonnes,egal,superieur,inferieur,superieurouegal,inferieurouegal,estentier,quotientier,carreParfait,ecrireNombre2D,ecrireAdditionPosee,decimal,creer_couples,randint,strRandom,enleve_element,enleve_element_bis,enleve_element_No,enleve_element_No_bis,choice,range,rangeMinMax,range1,compare_fractions,compare_nombres,numTrie,shuffle,shuffle2tableaux,tridictionnaire,filtreDictionnaire,combinaison_listes,combinaison_listes_sans_changer_ordre,rien_si_1,exposant,ecriture_nombre_relatif,ecriture_nombre_relatifc,ecriture_algebrique,ecriture_algebrique_sauf1,ecriture_algebriquec,ecriture_parenthese_si_negatif,ecriture_parenthese_si_moins,valeur_base,produit_matrice_vecteur_3x3,produit_matrice_matrice_3x3,changement_de_base_ortho_tri,changement_de_base_tri_ortho,image_point_par_transformation,signe,unSiPositifMoinsUnSinon,somme_des_chiffre,arrondi,troncature,abs,arrondi_virgule,pgcd,fraction_simplifiee,tex_fraction_reduite,produit_de_deux_fractions,simplification_de_fraction_avec_etapes,produits_en_croix,quatrieme_proportionnelle,reduire_ax_plus_b,obtenir_liste_facteurs_premiers,factorisation,extraire_racine_carree,tex_racine_carree,calcul,nombreDecimal,tex_nombrec,tex_nombrecoul,trie_positifs_negatifs,somme_des_termes_par_signe,creerNomDePolygone,possedeUnCaractereInterdit,choisit_nombres_entre_m_et_n,choisit_lettres_differentes,cesar,codeCesar,lettre_depuis_chiffre,lettre_minuscule_depuis_chiffre,minToHoraire,minToHour,prenomF,prenomM,prenom,tirer_les_des,liste_de_notes,jours_par_mois,un_mois_de_temperature,nom_du_mois,tex_enumerate,tex_enumerate_sans_numero,tex_paragraphe,tex_introduction,html_enumerate,enumerate,html_paragraphe,html_ligne,tex_multicols,html_consigne,tex_consigne,tex_nombre,tex_nombre2,tex_nombrec2,sp,nombre_avec_espace,string_nombre,mise_en_evidence,texte_en_couleur,texte_en_couleur_et_gras,couleurAleatoire,arcenciel,texcolors,texte_gras,href,tex_prix,premiere_lettre_en_majuscule,nombre_de_chiffres_dans_la_partie_decimale,tex_fraction_signe,tex_fraction_parentheses,obtenir_liste_fractions_irreductibles,obtenir_liste_fractions_irreductibles_faciles,obtenir_liste_nombres_premiers,decomposition_facteurs_premiers,liste_des_diviseurs,tex_fraction,printlatex,tex_texte,itemize,MG32_modifie_figure,MG32_modifie_toutes_les_figures,MG32_ajouter_figure,MG32_tracer_toutes_les_figures,verifie_div_MG32,SVG_Axe_vertical,SVG_Axe_horizontal,SVG_grille,SVG_graduation,SVG_label,SVG_fraction,SVG_tracer_point,SVG_tracer_flecheH,SVG_tracer_flecheV,SVG_tracer_droite_flecheV,SVG_tracer_droite_flecheH,SVG_Tracer_droite,Latex_Tracer_droite,SVG_repere,Latex_repere,SVG_reperage_sur_un_axe,Latex_reperage_sur_un_axe,tex_graphique,MatriceCarree,matriceCarree,resol_sys_lineaire_2x2,resol_sys_lineaire_3x3,crible_polynome_entier,cherche_min_max_f,cherche_polynome_deg3_a_extrema_fixes,simpExp,puissance,ecriturePuissance,simpNotPuissance,eclatePuissance,puissanceEnProduit,reorganiseProduitPuissance,creer_modal,creerBoutonMathalea2d,modal_texte_court,modal_youtube,modal_texte_long,modal_url,modal_pdf,modal_video,modal_image,liste_diviseurs,tikz_machine_maths,tikz_machine_diag,katex_Popup,katex_Popuptest,sansAccent,katex_Popup2,katex_Popup2,num_alpha,SVG_fleche_machine_maths,SVG_chemin,SVG_machine_diag_3F1_act_mono,my_svg_font,SVG_machine_maths,tex_cadre_par_orange,SVG_machine_diag_3F12,machine_maths_video,detect_safari_chrome_browser,premierMultipleSuperieur,premierMultipleInferieur,liste_nb_premiers_strict_jusqua,crible_eratosthene_n,premiers_entre_bornes,texte_ou_pas,tab_C_L,warn_message,info_message,lampe_message,SVG_engrenages,decomp_fact_prem_array,Triangles,getNom,getCotes,getLongueurs,getLongueursValeurs,getAngles,getAnglesValeurs,getSommets,getPerimetre,isTrueTriangleLongueurs,isPlatTriangleLongueurs,isTrueTriangleAngles,isPlatTriangleAngles,isQuelconque,Relatif,getSigneNumber,getSigneString,getSigneProduitNumber,getSigneProduitString,getCardNegatifs,orth_facteurs_n,setRegleSigneProduit,setRegleSigneQuotient,ListeFraction,sortFractions,ppcm,reduceSameDenominateur,fraction,Fraction,nombreEnLettres,partieEntiereEnLettres,telechargeFichier,intro_LaTeX,intro_LaTeX_coop,preambule_personnalise,scratchTraductionFr} from "/modules/outils.js"
import {ObjetMathalea2D,Point,point,TracePoint,tracePoint,TracePointSurDroite,tracePointSurDroite,milieu,pointSurSegment,pointSurCercle,pointSurDroite,pointIntersectionDD,pointAdistance,LabelPoint,labelPoint,barycentre,Droite,droite,droiteParPointEtVecteur,droiteParPointEtParallele,droiteParPointEtPerpendiculaire,droiteHorizontaleParPoint,droiteVerticaleParPoint,droiteParPointEtPente,mediatrice,CodageMediatrice,codageMediatrice,CodageMilieu,codageMilieu,ConstructionMediatrice,constructionMediatrice,bissectrice,CodageBissectrice,codageBissectrice,ConstructionBissectrice,constructionBissectrice,Polyline,polyline,Vecteur,vecteur,Segment,segment,segmentAvecExtremites,demiDroite,demiDroiteAvecExtremite,Polygone,polygone,polygoneAvecNom,polygoneRegulier,polygoneRegulierIndirect,carre,carreIndirect,CodageCarre,codageCarre,polygoneRegulierParCentreEtRayon,triangle2points2longueurs,triangle2points2angles,triangle2points1angle1longueur,triangle2points1angle1longueurOppose,NommePolygone,nommePolygone,deplaceLabel,aireTriangle,Cercle,cercle,pointIntersectionLC,pointIntersectionCC,CercleCentrePoint,cercleCentrePoint,Arc,arc,ArcPointPointAngle,arcPointPointAngle,traceCompas,CourbeDeBezier,courbeDeBezier,SegmentMainLevee,segmentMainLevee,CercleMainLevee,cercleMainLevee,DroiteMainLevee,droiteMainLevee,PolygoneMainLevee,polygoneMainLevee,ArcMainLevee,arcMainLevee,dansLaCibleCarree,dansLaCibleRonde,CibleCarree,cibleCarree,CibleRonde,cibleRonde,translation,translation2Points,rotation,homothetie,symetrieAxiale,distancePointDroite,projectionOrtho,affiniteOrtho,similitude,TranslationAnimee,translationAnimee,RotationAnimee,rotationAnimee,HomothetieAnimee,homothetieAnimee,SymetrieAnimee,symetrieAnimee,AffiniteOrthoAnimee,affiniteOrthoAnimee,montrerParDiv,cacherParDiv,afficherTempo,afficherTempoId,afficherUnParUn,medianeTriangle,centreGraviteTriangle,hauteurTriangle,CodageHauteurTriangle,codageHauteurTriangle,CodageMedianeTriangle,codageMedianeTriangle,orthoCentre,centreCercleCirconscrit,CodageAngleDroit,codageAngleDroit,AfficheLongueurSegment,afficheLongueurSegment,TexteSurSegment,texteSurSegment,AfficheMesureAngle,afficheMesureAngle,AfficheCoteSegment,afficheCoteSegment,CodeSegment,codeSegment,CodeSegments,codeSegments,CodeAngle,codeAngle,DroiteGraduee,droiteGraduee,DroiteGraduee2,droiteGraduee2,Axes,axes,LabelX,labelX,LabelY,labelY,Grille,grille,GrilleHorizontale,grilleHorizontale,GrilleVerticale,grilleVerticale,Seyes,seyes,Repere,repere,Repere2,repere2,pointDansRepere,TraceGraphiqueCartesien,traceGraphiqueCartesien,TraceBarre,traceBarre,TraceBarreHorizontale,traceBarreHorizontale,LectureImage,lectureImage,LectureAntecedent,lectureAntecedent,Courbe,courbe,Courbe2,courbe2,CourbeInterpolee,courbeInterpolee,GraphiqueInterpole,graphiqueInterpole,imageInterpolee,antecedentInterpole,AntecedentParDichotomie,CrochetD,crochetD,CrochetG,crochetG,intervalle,TexteParPoint,texteParPoint,texteParPosition,LatexParPoint,latexParPoint,latexParCoordonnees,FractionParPosition,fractionParPosition,Print2d,print2d,longueur,norme,angle,angleOriente,angleradian,ObjetLutin,creerLutin,avance,baisseCrayon,leveCrayon,orienter,tournerG,tournerD,allerA,mettrexA,mettreyA,ajouterAx,ajouterAy,AfficherCrayon,afficherCrayon,TranslationInstrument,translationInstrument,deplaceInstrument,codeSvg,codeTikz,mathalea2d,Labyrinthe,labyrinthe,Pavage,pavage} from "/modules/2d.js"
/**
 * Publié le 14/12/2020
 * Trouver l'image par symétrie centrale d'une figure dans un pavage
 * Version Latex & Html grâce à Mathalea2d
 * @Auteur Jean-Claude Lhote
 * Ref 5G12
 */
export default function Pavage_et_demi_tour2d() {
	"use strict";
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre =
	  "Trouver l\'image d'une figure par une symétrie centrale dans un pavage";
	this.consigne = "";
	this.nb_questions = 3;
	this.nb_questions_modifiable = true;
	this.correction_detaillee_disponible=true
	this.correction_detaillee=true
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1; // 1 pour des pavages modestes, 2 pour des plus grand.
	this.sup2=false // On cache les barycentres par défaut.
	this.sup3=7;
	sortie_html ? (this.spacing_corr = 2.5) : (this.spacing_corr = 1.5);
	this.nouvelle_version = function (numero_de_l_exercice) {
	  let videcouples=function(tableau){
		for (let k=0;k<tableau.length;k++){
		  for (let j=k+1;j<tableau.length;j++){
			if (tableau[k][1]==tableau[j][0]) {
			  tableau.splice(j,1)
			}
		  }
		}
		return tableau
	  }
	  let compare2polys=function(poly1,poly2){
		if (comparenbsommets(poly1,poly2)) {
		  if (comparesommets(poly1,poly2)) 
			return true
		  else
			return false
		}
		else 
		  return false 
		}
		let comparenbsommets = function(poly1,poly2){
		  if (poly1.listePoints.length==poly2.listePoints.length){
			return true
		  }
		  else return false
		}
		
		let compare2sommets=function(sommet1,sommet2){
		  if (egal(sommet1.x,sommet2.x,0.1)&&egal(sommet1.y,sommet2.y,0.1)) {
			return true
		  }
		  else return false
		}
		let comparesommets = function(poly1,poly2){
		  let trouve=false,trouves=0
		  if (comparenbsommets(poly1,poly2))
		  for (let P of poly1.listePoints) {
			for (let M of poly2.listePoints) {
			  if (compare2sommets(M,P)) {
				trouve=true
			  }
			  if (trouve) break
			}
			if (trouve) {
			  trouves++
			  trouve=false
			}
			else {
			  trouves-=100
			}
			if (trouves<0)
			break
		  }
		  if (trouves==poly1.listePoints.length)
			return true
		  else return false
		}
	  
	  let demitour = function (pavage, A, numero) { // retourne le numero du polygone symétrique ou -1 si il n'existe pas
		let poly=pavage.polygones[numero-1]
		let pol
		let result=-1
		let sympoly=rotation(poly,A,180)
		for (let k= 0;k<pavage.polygones.length;k++) {
		  pol=pavage.polygones[k]
		  if (compare2polys(sympoly,pol)) {
			return k+1
		  }
		}
		return result
	  } 
  
	  let objets=[],objets_correction=[],P1,P2,P3,G1,G2,t
	  let codes=['/','//','///','o','w','X','U','*']
	  let taillePavage=parseInt(this.sup)
	  if (taillePavage<1||taillePavage>2) {
		taillePavage=1
	  }
	  if (this.nb_questions>5) {
		taillePavage=2
	  }
	  this.liste_corrections = []
	  this.liste_questions = []
	  let Nx,Ny,index1,index2,A,B,d,image,couples=[],tailles=[],monpavage,fenetre
	  let texte = "", texte_corr = "", type_de_pavage = parseInt(this.sup)
	  let nombreTentatives,nombrePavageTestes=1
	  if (this.sup3==8) {
		type_de_pavage =  randint(1,7)
	  }
	  else {
		type_de_pavage=parseInt(this.sup3)
	  }
	  while (couples.length<this.nb_questions&&nombrePavageTestes<6){
		nombreTentatives=0
	  monpavage = pavage() // On crée l'objet Pavage qui va s'appeler monpavage
	  tailles = [[[3, 2], [3, 2], [2, 2], [2, 2], [2, 2], [2, 2],[3,2]], [[4, 3], [4, 3], [3, 3], [3, 3], [3, 3], [3, 2],[5,3]]]
	  Nx = tailles[taillePavage-1][type_de_pavage-1][0]
	  Ny = tailles[taillePavage-1][type_de_pavage-1][1]
	  monpavage.construit(type_de_pavage, Nx, Ny, 3) // On initialise toutes les propriétés de l'objet.
	  fenetre=monpavage.fenetre
	  fenetreMathalea2d=[fenetre.xmin,fenetre.ymin,fenetre.xmax,fenetre.ymax]
	  while (couples.length<this.nb_questions+2&&nombreTentatives<3) { // On cherche d pour avoir suffisamment de couples
	  couples=[] // On vide la liste des couples pour une nouvelle recherche
	  
	  index1=randint(Math.floor(monpavage.nb_polygones/3),Math.ceil(monpavage.nb_polygones*2/3)) // On choisit 1 point dans un des polygones
	  if (choice([true,false])) { 
		  A=monpavage.polygones[index1].listePoints[randint(0,monpavage.polygones[index1].listePoints.length-1)] // On choisit un sommet
	  }
	  else {
		A=monpavage.barycentres[index1] // Ou on choisit un barycentre
	  }
	  while (A.x-5<fenetre.xmin||A.x+5>fenetre.xmax||A.y-5<fenetre.ymin||A.y+5>fenetre.ymax){
		index1=randint(Math.floor(monpavage.nb_polygones/3),Math.ceil(monpavage.nb_polygones*2/3)) // On choisit 1 point dans un des polygones
		if (choice([true,false])) { 
			A=monpavage.polygones[index1].listePoints[randint(0,monpavage.polygones[index1].listePoints.length-1)] // On choisit un sommet
		}
		else {
		  A=monpavage.barycentres[index1] // Ou on choisit un barycentre
		}
	  }
			  A.nom='A'
			  A.positionLabel='above left'
		  d=tracePoint(A) // la trace du centre de symétrie sera rouge et grosse
		  B=labelPoint(A)
	  d.epaisseur=3
	  d.taille=4
	  d.color='red'
	  for (let i=1;i<= monpavage.nb_polygones; i++){ //on crée une liste des couples (antécédents, images)
		image=demitour(monpavage,A,i)
		if (image!=-1){ // si l'image du polygone i existe, on ajoute le couple à la liste
		  couples.push([i,image])
		}
	  }
	  couples=videcouples(couples) //supprime tous les couples en double (x,y)=(y,x)
	  nombreTentatives++ 
	  }
	  if (couples.length<this.nb_questions){
		if (this.sup3==7) {
			type_de_pavage=(type_de_pavage+1)%5+1
		  }
	  nombrePavageTestes++
	  }
	}
	if (couples.length<this.nb_questions){
	  console.log('trop de questions, augmentez la taille du pavage')
	  return
	}
  
	  objets.push(d) // le centre est OK on pousse sa trace
	  objets.push(B) // et son label
	  couples=shuffle(couples) // on mélange les couples
	  for (let i = 0; i < monpavage.nb_polygones; i++) {
		objets.push(texteParPosition(nombre_avec_espace(i + 1), monpavage.barycentres[i].x + 0.5, monpavage.barycentres[i].y, 'milieu', 'gray', 1, 0, true))
	  }
	  if (this.sup2) { // Doit-on montrer les centres des figures ?
		for (let i = 0; i < monpavage.nb_polygones; i++) {
		  objets.push(monpavage.tracesCentres[i])
		}
	  }
	  for (let i = 0; i < monpavage.nb_polygones; i++) { // il faut afficher tous les polygones du pavage
		objets.push(monpavage.polygones[i])
	  }
	  texte = mathalea2d(fenetre, objets) // monpavage.fenetre est calibrée pour faire entrer le pavage dans une feuille A4
	  texte+=`<br>`
	  for (let i=0;i<this.nb_questions;i++){
		texte+=`Quel est l'image de la figure $${couples[i][0]}$ dans la symétrie de centre $A$ ?<br>`
		texte_corr+=`L'image de la figure $${couples[i][0]}$ dans la symétrie de centre $A$ est la figure ${couples[i][1]}<br>`
		if (this.correction_detaillee){
			t=this.nb_questions*3;
			G1=monpavage.barycentres[couples[i][0]-1]
			G2=monpavage.barycentres[couples[i][1]-1]
			P1=monpavage.polygones[couples[i][0]-1]
			P1.color=texcolors(i)
			P1.couleurDeRemplissage=texcolors(i)
			P1.opaciteDeRemplissage=0.5
			P1.epaisseur=2
			P2=monpavage.polygones[couples[i][1]-1]
			P2.color=texcolors(i)
			P2.couleurDeRemplissage=texcolors(i)
			P2.opaciteDeRemplissage=0.5
			P2.epaisseur=2
			P3=rotationAnimee(P1,A,180,`begin="${i*3}s;${i*3+t}s;${i*3+t*2}s" end="${i*3+2}s;${i*3+t+2}s;${i*3+t*2+2}s" dur="2s" repeatCount="indefinite" repeatDur="${9*this.nb_questions}s" id="poly-${i}-anim"`)
			P3.color=texcolors(i)
			P3.epaisseur=2
			objets_correction.push(tracePoint(G1,G2),segment(G1,G2,texcolors(i)),codageMilieu(G1,G2,texcolors(i),codes[i],false),P1,P2,P3)
		  }
	}
    if (this.correction_detaillee){
      texte_corr+=mathalea2d(fenetre, objets,objets_correction)
    }
	  this.liste_questions.push(texte);
	  this.liste_corrections.push(texte_corr);
	  liste_de_question_to_contenu(this)
	}
	this.besoin_formulaire_numerique = ['Taille du pavage (la grande est automatique au-delà de 5 questions)', 2, '1 : Taille modeste\n 2 : Grande taille'];
	this.besoin_formulaire2_case_a_cocher=["Montrer les centres"]
	this.besoin_formulaire3_numerique=['Choix du pavage',8,'1 : Pavage de triangles équilatéraux\n2 : Pavage de carrés\n3 : Pavage d\'hexagones réguliers\n4 : Pavage 3².4.3.4\n5 : Pavage 8².4\n 6 : Pavage de losanges (hexagonal d\'écolier)\n7 : Pavage 6.3.6.3\n8 : Un des sept pavages au hasard']
}

