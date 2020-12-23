import { tridictionnaire, filtreDictionnaire }  from "./outils.js" ;
export let dictionnaireDesExercices = {"4G53":{"url":"/exercices/4e/4G53.js","titre":"Calculs de volumes"},"4L20":{"url":"/exercices/4e/4L20.js","titre":"Équation du premier degré"},"4L10":{"url":"/exercices/4e/4L10.js","titre":"Utiliser la simple distributivité"},"4C21":{"url":"/exercices/4e/4C21.js","titre":"Additionner ou soustraire deux fractions"},"4C10-3":{"url":"/exercices/4e/4C10-3.js","titre":"Multiplication de deux entiers relatifs"},"4C21-1":{"url":"/exercices/4e/4C21-1.js","titre":"Additionner deux fractions"},"1E10":{"url":"/exercices/1e/1E10.js","titre":"Calcul du discriminant d'une équation du second degré"},"1E12":{"url":"/exercices/1e/1E12.js","titre":"Trouver l'équation d'une parabole"},"1E11":{"url":"/exercices/1e/1E11.js","titre":"Résoudre une équation du second degré"},"1N11":{"url":"/exercices/1e/1N11.js","titre":"Déterminer les termes d'une suite définie par récurrence"},"1N10":{"url":"/exercices/1e/1N10.js","titre":"Déterminer les termes d'une suite définie de façon explicite"},"1F10":{"url":"/exercices/1e/1F10.js","titre":"Calculs de dérivés"},"PEA11-1":{"url":"/exercices/PE/PEA11-1.js","titre":"Passer de la base 12 ou 16 à la base 10 et inversement"},"PEA11":{"url":"/exercices/PE/PEA11.js","titre":"Passer de la base 10 à une autre base et inversement"},"P004":{"url":"/exercices/Profs/P004.js","titre":"Droites graduées avec zoom"},"P007":{"url":"/exercices/Profs/P007.js","titre":"Fabriquer des pavages pour travailler les transformations"},"P003":{"url":"/exercices/Profs/P003.js","titre":"Tracer des droites graduées"},"P005":{"url":"/exercices/Profs/P005.js","titre":"Grilles décimales"},"P006":{"url":"/exercices/Profs/P006.js","titre":"Placer un nombre décimal avec des zooms successifs"},"6N20-1":{"url":"/exercices/6e/6N20-1.js","titre":"Encadrer une fraction entre deux nombres entiers"},"6N11":{"url":"/exercices/6e/6N11.js","titre":"Lire l'abscisse entière d'un point (grands nombres)"},"6D101":{"url":"/exercices/6e/6D101.js","titre":"Utiliser les heures décimales"},"6N30-1":{"url":"/exercices/6e/6N30-1.js","titre":"Lire l'abscisse décimale d'un point repéré par une fraction"},"6M30":{"url":"/exercices/6e/6M30.js","titre":"Calculs de volumes"},"CM000":{"url":"/exercices/6e/CM000.js","titre":"Additions et de soustractions"},"6N11-2":{"url":"/exercices/6e/6N11-2.js","titre":"Placer un point d'abscisse entière (grands nombres)"},"6D11":{"url":"/exercices/6e/6D11.js","titre":"Additionner des durées"},"6N30":{"url":"/exercices/6e/6N30.js","titre":"Lire l'abscisse décimale d'un point"},"6Algo10":{"url":"/exercices/6e/6Algo10.js","titre":"Programmer des déplacements"},"6N21":{"url":"/exercices/6e/6N21.js","titre":"Lire l'abscisse fractionnaire d'un point"},"6N14":{"url":"/exercices/6e/6N14.js","titre":"Représenter des fractions"},"6M20":{"url":"/exercices/6e/6M20.js","titre":"Aires de triangles"},"6G10-1":{"url":"/exercices/6e/6G10-1.js","titre":"Description et notation des droites, segments et demi-droites"},"6test2":{"url":"/exercices/6e/6test2.js","titre":"Mon test"},"6G41":{"url":"/exercices/6e/6G41.js","titre":"Compléter une représentation en perspective cavalière"},"6D12":{"url":"/exercices/6e/6D12.js","titre":"Calculer des durées ou déterminer un horaire"},"6D10":{"url":"/exercices/6e/6D10.js","titre":"Convertir des durées"},"6test1":{"url":"/exercices/6e/6test1.js","titre":"Mon test"},"6CM01":{"url":"/exercices/6e/6CM01.js","titre":"Tables de multiplications"},"6C101":{"url":"/exercices/6e/6C101.js","titre":"Tables de multiplications"},"5R22":{"url":"/exercices/5e/5R22.js","titre":"Additions et soustractions de nombres relatifs"},"5R20-3":{"url":"/exercices/5e/5R20-3.js","titre":"Additions de 5 nombres relatifs"},"5L15":{"url":"/exercices/5e/5L15.js","titre":"Tester une égalité"},"5D10":{"url":"/exercices/5e/5D10.js","titre":"Convertir des durées"},"5S14":{"url":"/exercices/5e/5S14.js","titre":"Calculer des moyennes"},"5C10":{"url":"/exercices/5e/5C10.js","titre":"Ajouter 9"},"5N14":{"url":"/exercices/5e/5N14.js","titre":"Comparer des fractions (dénominateurs multiples)"},"5N20":{"url":"/exercices/5e/5N20.js","titre":"Additionner ou soustraire deux fractions (dénominateurs multiples)"},"5A11-1":{"url":"/exercices/5e/5A11-1.js","titre":"Labyrinthe de multiples basé sur les critères de divisibilité"},"5L12":{"url":"/exercices/5e/5L12.js","titre":"Réduire une expression littérale"},"5N14-2":{"url":"/exercices/5e/5N14-2.js","titre":"Comparer quatre fractions (dénominateurs multiples) et un nombre entier"},"5S13":{"url":"/exercices/5e/5S13.js","titre":"Calculer des fréquences"},"5M20":{"url":"/exercices/5e/5M20.js","titre":"Calculs de volumes"},"5L10":{"url":"/exercices/5e/5L10.js","titre":"Écrire une expression littérale"},"5L10-2":{"url":"/exercices/5e/5L10-2.js","titre":"Traduire un programme de calcul par une expression littérale"},"5R11":{"url":"/exercices/5e/5R11.js","titre":"Lire l'abscisse relative d'un point"},"5R20":{"url":"/exercices/5e/5R20.js","titre":"Addition de deux entiers relatifs"},"5L13-2":{"url":"/exercices/5e/5L13-2.js","titre":"Substitution"},"5CM01":{"url":"/exercices/5e/5CM01.js","titre":"Tables de multiplications"},"5A13":{"url":"/exercices/5e/5A13.js","titre":"Décomposition en facteurs premiers"},"5N110":{"url":"/exercices/5e/5N110.js","titre":"Variation en pourcentages"},"5L14":{"url":"/exercices/5e/5L14.js","titre":"Calculer la valeur d'une expression littérale"},"5L13":{"url":"/exercices/5e/5L13.js","titre":"Réduire une expression de la forme $ax+bx$"},"5R22-2":{"url":"/exercices/5e/5R22-2.js","titre":"Simplifier l'écriture d'une somme de 2 relatifs et calculer"},"5R21":{"url":"/exercices/5e/5R21.js","titre":"Soustraction de deux entiers relatifs"},"5R20-2":{"url":"/exercices/5e/5R20-2.js","titre":"Addition à trou de deux entiers relatifs"},"5G31":{"url":"/exercices/5e/5G31.js","titre":"Somme des angles dans un triangle"},"5G30-1":{"url":"/exercices/5e/5G30-1.js","titre":"Déterminer des angles en utilisant les cas d'égalité"},"3F12-2":{"url":"/exercices/3e/3F12-2.js","titre":"Déterminer l'image d'un nombre par une fonction d'après sa forme algébrique"},"3A13":{"url":"/exercices/3e/3A13.js","titre":"Engrenages"},"3G10-1":{"url":"/exercices/3e/3G10-1.js","titre":"Trouver les coordonnées de l'image d'un point par une transformation du plan"},"3A11-1":{"url":"/exercices/3e/3A11-1.js","titre":"Primalité ou pas - Variante avec les critères de divisibilité par 7 et par 11"},"3P10-1":{"url":"/exercices/3e/3P10-1.js","titre":"Coefficient multiplicateur d'une variation en pourcentage"},"3A10":{"url":"/exercices/3e/3A10.js","titre":"Division Euclidienne - Diviseurs - Multiples"},"3A12":{"url":"/exercices/3e/3A12.js","titre":"Fractions irréductibles"},"3L14":{"url":"/exercices/3e/3L14.js","titre":"Résoudre une équation produit nul"},"3L13-2":{"url":"/exercices/3e/3L13-2.js","titre":"Equations du type $\\dfrac{x}{a}=\\dfrac{b}{c}$"},"3L13-2":{"url":"/exercices/3e/3L13-2.js","titre":"Déterminer une quatrième proportionnelle dans un tableau"},"3L13-2":{"url":"/exercices/3e/3L13-2.js","titre":"Equations résolvantes pour le théorème de Thalès"},"3G22":{"url":"/exercices/3e/3G22.js","titre":"Connaître les effets des agrandissements/réductions sur les aires et les volumes"},"3F12":{"url":"/exercices/3e/3F12.js","titre":"Fonctions : Calculs d'images"},"3G23":{"url":"/exercices/3e/3G23.js","titre":"Reconnaître des triangles semblables dans différentes configurations"},"3Algo1":{"url":"/exercices/3e/3Algo1.js","titre":"Instruction conditionelle"},"3G10-3":{"url":"/exercices/3e/3G10-3.js","titre":"Construire l\'image d'un point par une rotation avec cible auto-corrective"},"3S20":{"url":"/exercices/3e/3S20.js","titre":"Calculer des probabilités dans une expérience aléatoire à deux épreuves"},"3S15":{"url":"/exercices/3e/3S15.js","titre":"Calculer des étendues"},"3A11-2":{"url":"/exercices/3e/3A11-2.js","titre":"Décomposition en facteurs premiers d'un entier"},"3L11-1":{"url":"/exercices/3e/3L11-1.js","titre":"Utiliser la double distributivité"},"3F13-1":{"url":"/exercices/3e/3F13-1.js","titre":"Lecture graphique d'images et d'antécédents."},"3L12":{"url":"/exercices/3e/3L12.js","titre":"Factoriser a²-b²"},"3L10-1":{"url":"/exercices/3e/3L10-1.js","titre":"Additionner ou soustraire une expression entre parenthèses"},"3F10":{"url":"/exercices/3e/3F10.js","titre":"Lectures d'images et d'antécédents depuis un tableau de valeurs"},"3L13-1":{"url":"/exercices/3e/3L13-1.js","titre":"Équation du premier degré (utilisant la distributivité)"},"3L11":{"url":"/exercices/3e/3L11.js","titre":"Utiliser la simple distributivité"},"3G11":{"url":"/exercices/3e/3G11.js","titre":"Construire l\'image d'un point par une homothetie avec cible auto-corrective"},"3G43":{"url":"/exercices/3e/3G43.js","titre":"Calculs de volumes"},"3F12-3":{"url":"/exercices/3e/3F12-3.js","titre":"Compléter un tableau de valeurs"},"3A11":{"url":"/exercices/3e/3A11.js","titre":"Primalité ou pas"},"3P10":{"url":"/exercices/3e/3P10.js","titre":"Variations en pourcentage"},"3G12":{"url":"/exercices/3e/3G12.js","titre":"Trouver l'image d'une figure par une rotation dans un pavage"},"3L11-4":{"url":"/exercices/3e/3L11-4.js","titre":"Factoriser une expression"},"3L15":{"url":"/exercices/3e/3L15.js","titre":"Résoudre une équation du second degré"},"3F1-act":{"url":"/exercices/3e/3F1-act.js","titre":"Fonctions : Notion et vocabulaire"},"3L10":{"url":"/exercices/3e/3L10.js","titre":"Donner l'opposé d'une expression"},"3F12-4":{"url":"/exercices/3e/3F12-4.js","titre":"Lire l'image d'un nombre à partir d'un graphique"},"3F13-2":{"url":"/exercices/3e/3F13-2.js","titre":"Spécial escape game"},"3L12-1":{"url":"/exercices/3e/3L12-1.js","titre":"Développer (a-b)(a+b)"},"3L11-3":{"url":"/exercices/3e/3L11-3.js","titre":"Utiliser la distributivité (simple ou double) et réduire"},"3A11-3":{"url":"/exercices/3e/3A11-3.js","titre":"Compter/lister les diviseurs d'un entier à partir de sa décomposition en facteurs premiers."},"3G20-1":{"url":"/exercices/3e/3G20-1.js","titre":"Problèmes avec le théorème de Thalès"},"3L11-5":{"url":"/exercices/3e/3L11-5.js","titre":"Calcul mental et calcul littéral"},"3L14-1":{"url":"/exercices/3e/3L14-1.js","titre":"Résoudre une équation produit nul (niveau 2)"},"3L13":{"url":"/exercices/3e/3L13.js","titre":"Équation du premier degré"},"3F13":{"url":"/exercices/3e/3F13.js","titre":"Lire les antécédents d'un nombre à partir d'un graphique"},"3L11-2":{"url":"/exercices/3e/3L11-2.js","titre":"Réduire une expression"},"3F21":{"url":"/exercices/3e/3F21.js","titre":"Déterminer une fonction affine"},"2L11":{"url":"/exercices/2e/2L11.js","titre":"Factoriser avec les identités remarquables"},"2N20":{"url":"/exercices/2e/2N20.js","titre":"Déterminer le plus petit ensemble de nombres dans lequel le nombre proposé appartient"},"2G10":{"url":"/exercices/2e/2G10.js","titre":"Utiliser la distance entre deux points dans un repère orthonormé"},"2N10":{"url":"/exercices/2e/2N10.js","titre":"Existence d'une racine carrée"},"2N12":{"url":"/exercices/2e/2N12.js","titre":"Appliquer la double distributivité avec les racines carrées"},"2N21":{"url":"/exercices/2e/2N21.js","titre":"Déterminer la parité d'une expression"},"2N24":{"url":"/exercices/2e/2N24.js","titre":"Associer un intervalle de  $\\mathbb{R}$ à une inéquation et son schéma sur une droite graduée"},"2N25":{"url":"/exercices/2e/2N25.js","titre":"Utiliser et comprendre les symboles $\\cup $ et $\\cap $ avec les intervalles de $\\mathbb{R}$"},"2N12-1":{"url":"/exercices/2e/2N12-1.js","titre":"Développer les identités remarquables avec des racines carrées"},"2N11-1":{"url":"/exercices/2e/2N11-1.js","titre":"Simplifier une somme de racines carrées"},"2N22":{"url":"/exercices/2e/2N22.js","titre":"Utiliser la notion de valeur absolue d'une quantité"},"2N11":{"url":"/exercices/2e/2N11.js","titre":"Ecrire le nombre proposé sous la forme $a\\sqrt{b}$"},"2L10":{"url":"/exercices/2e/2L10.js","titre":"Développer avec les identités remarquables"},"2N10-1":{"url":"/exercices/2e/2N10-1.js","titre":"Connaître les propriétés calculatoires des racines carrées"},"2G11":{"url":"/exercices/2e/2G11.js","titre":"Déterminer les coordonnées milieu d’un segment dans un repère"},"2G12":{"url":"/exercices/2e/2G12.js","titre":"Déterminer la nature d'un polygone."},"2N23":{"url":"/exercices/2e/2N23.js","titre":"Résoudre une équation avec des valeurs absolues"},};

export function menuDesExercicesDisponibles(){
let liste_des_exercices_disponibles = tridictionnaire(dictionnaireDesExercices);

// Détermine le nombre d'exercices par niveaux
    let nombre_d_exercices_disponibles_c3 = 0;
    let nombre_d_exercices_disponibles_6 = 0;
    let nombre_d_exercices_disponibles_5 = 0;
    let nombre_d_exercices_disponibles_4 = 0;
    let nombre_d_exercices_disponibles_3 = 0;
    let nombre_d_exercices_disponibles_2 = 0;
    let nombre_d_exercices_disponibles_1 = 0;
    let nombre_d_exercices_disponibles_T = 0;
    let nombre_d_exercices_disponibles_CM = 0;
    let nombre_d_exercices_disponibles_prof = 0;
    let nombre_d_exercices_disponibles_PE = 0;
    let nombre_d_exercices_disponibles_beta = 0;
    for (let id in liste_des_exercices_disponibles) {
      if (id[0] == "c" && id[1] == "3") {
        nombre_d_exercices_disponibles_c3 += 1;
      }
      if (id[0] == 6) {
        nombre_d_exercices_disponibles_6 += 1;
      }
      if (id[0] == 5) {
        nombre_d_exercices_disponibles_5 += 1;
      }
      if (id[0] == 4) {
        nombre_d_exercices_disponibles_4 += 1;
      }
      if (id[0] == 3) {
        nombre_d_exercices_disponibles_3 += 1;
      }
      if (id[0] == 2) {
        nombre_d_exercices_disponibles_2 += 1;
      }
      if (id[0] == 1) {
        nombre_d_exercices_disponibles_1 += 1;
      }
      if (id[0] == "T") {
        nombre_d_exercices_disponibles_T += 1;
      }
      if (id[0] == "C") {
        nombre_d_exercices_disponibles_CM += 1;
      }
      if (id[0] == "P" && id[1] == "0") {
        nombre_d_exercices_disponibles_prof += 1;
      }
      if (id[0] == "P" && id[1] == "E") {
        nombre_d_exercices_disponibles_PE += 1;
      }
      if (id[0] == "b" && id[1] == "e") {
        nombre_d_exercices_disponibles_beta += 1;
      }
    }

    //
    let liste_html_des_exercices_c3 =[];
    let liste_html_des_exercices_6 = [];
    let liste_html_des_exercices_5 = [];
    let liste_html_des_exercices_4 = [];
    let liste_html_des_exercices_3 = [];
    let liste_html_des_exercices_2 = [];
    let liste_html_des_exercices_1 = [];
    let liste_html_des_exercices_T = [];
    let liste_html_des_exercices_CM = [];
    let liste_html_des_exercices_prof = [];
    let liste_html_des_exercices_PE = [];
    let liste_html_des_exercices_beta = [];

    // Affiche de la liste des exercices disponibles
    let liste_html_des_exercices ='<h3 class="ui block header">Exercices disponibles</h3>\n\n';

    function liste_html_des_exercices_d_un_theme(theme){
      let liste = '';
      let dictionnaire = filtreDictionnaire(liste_des_exercices_disponibles,theme);
      for (let id in dictionnaire) {
        liste +=
          `<span class="id_exercice">${id}</span> - <a class="lien_id_exercice" numero="${id}">${dictionnaire[id].titre}</a></br>\n`;
      }
      return liste;
    }

    function liste_html_des_exercices_d_un_niveau(liste_de_themes){ // liste_de_themes = [['6N1','6N1 - Numérations et fractions niveau 1'] , [' ',' '] ]
      let liste = '';
      for (let theme of liste_de_themes){
        liste += `<h3>${theme[1]}</h3>`;
        liste += liste_html_des_exercices_d_un_theme(theme[0]);
      }
      return liste;
    }

    liste_html_des_exercices_c3 = liste_html_des_exercices_d_un_niveau([
      ['c3C1','c3C1 - Calculs niveau 1'],['c3N1','c3N1 - Numération Niveau 1'],['c3N2','c3N2 - Numération Niveau 2']])
    
    liste_html_des_exercices_6 = liste_html_des_exercices_d_un_niveau([
      ['6C1','6C1 - Calculs niveau 1'],['6C2','6C2 - Calculs niveau 2'],['6C3','6C3 - Calculs niveau 3'],
      ['6D1','6D1 - Les durées'],
      ['6G1','6G1 - Géométrie niveau 1'],['6G2','6G2 - Géométrie niveau 2'],['6G3','6G3 - Géométrie niveau 3'],['6G4','6G4 - Géométrie niveau 4'],
      ['6M1','6M1 - Grandeurs et mesures niveau 1'],['6M2','6M2 - Grandeurs et mesures niveau 2'],['6M3', '6M3 - Volumes'],
      ['6N1','6N1 - Numération et fractions niveau 1'],['6N2','6N2 - Numération et fractions niveau 2'],['6N3','6N3 - Numération et fractions niveau 3'],['6N4','6N4 - Numération et fractions niveau 4'],
      ['6P1','6P1 - Proportionnalité'],['6S1','6S1 - Statistiques'],
      ['6Algo1','6A - Algorithmique']
    ])
      liste_html_des_exercices_5 = liste_html_des_exercices_d_un_niveau([
        ['5A1','5A1 - Arithmetique'],['5C1','5C1 - Calculs'],
        ['5G1','5G1 - Symétries'],['5G2','5G2 - Triangles'],['5G3','5G3 - Angles'],['5G4','5G4 - Parallélogrammes'],['5G5','5G5 - Espace'],
        ['5L1','5L1 - Calcul littéral'],
        ['5M1','5M1 - Périmètres et aires'],['5M2','5M2 - Volumes'],['5M3','5M3 - Durées'],
        ['5N1','5N1 - Numération et fractions niveau 1'],['5N2','5N2 - Calculs avec les fractions'],
        ['5P1','5P1 - Proportionnalité'],['5R1','5R1 - Relatifs niveau 1'],['5R2','5R2 - Relatifs niveau 2'],
        ['5S1','5S1 - Statistiques'],['5S2','5S2 - Probabilités']
      ])
      liste_html_des_exercices_4 = liste_html_des_exercices_d_un_niveau([
        ['4C1','4C1 - Relatifs'],['4C2','4C2 - Fractions'],['4C3','4C3 - Puissances'],
        ['4F1','4F1 - Notion de fonction'],
        ['4G1','4G1 - Translation et rotation'],['4G2','4G2 - Théorème de Pythagore'],['4G3','4G3 - Théorème de Thalès'],['4G4',"4G4 - Cosinus d'un angle"],['4G5',"4G5 - Espace"],
        ['4L1','4L1 - Calcul littéral'],['4L2','4L2 - Équation'],['4P1','4P1 - Proportionnalité'],['4S1','4S1 - Statistiques'],['4S2','4S2 - Probabilités'],
        ['4Algo1','4A1 - Algorithmique']]);
      liste_html_des_exercices_3 = liste_html_des_exercices_d_un_niveau([
        ['3A1','3A1 - Arithmetique'],
        ['3F1','3F1 - Généralités sur les fonctions'],['3F2','3F2 - Fonctions affines et linéaires'],
        ['3G1','3G1 - Homothétie et rotation'],['3G2','3G2 - Théorème de Thalès'],['3G3','3G3 - Trigonométrie'],['3G4',"3G4 - Espace"],
        ['3L1','3L1 - Calcul littéral'],['3P1','3P1 - Proportionnalité'],['3S1','3S1 - Statistiques'],['3S2','3S2 - Probabilités'],
        ['3Algo1','3Algo1 - Algorithmique premier niveau']
      ])
 /*    liste_html_des_exercices_1 = liste_html_des_exercices_d_un_niveau([
        ['1E1','1E1 -  Équations'],
        ['1N1','1N1 -  Nombres et calculs'],
        ['1F1','1F1 -  Fonctions'],
      ])
        liste_html_des_exercices_2 = liste_html_des_exercices_d_un_niveau([
          ['2G1','2G1 -  Géométrie'],
          ['2N1','2N1 -  Nombres et calculs'],
          ['1L1','1L1 -  Calcul littéral'],
        ])
  */    
    for (var id in liste_des_exercices_disponibles) {
      let exercice_tmp = id;
      
      if (id[0] == '1') {
        liste_html_des_exercices_1 +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercices[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == '2') {
        liste_html_des_exercices_2 +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercices[exercice_tmp].titre +
          "</a></br>\n";
      }   
      if (id[0] == 'T') {
        liste_html_des_exercices_T +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercices[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == "P" && id[1] == "E") {
        liste_html_des_exercices_PE +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercices[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == "C") {
        liste_html_des_exercices_CM +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercices[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == "P" && id[1] == "0") {
        liste_html_des_exercices_prof +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercices[exercice_tmp].titre +
          "</a></br>\n";
      }
      if (id[0] == "b" && id[1] == "e") {
        liste_html_des_exercices_beta +=
          '<span class="id_exercice">' +
          id +
          '</span> - <a class="lien_id_exercice" numero="' +
          id +
          '">' +
          dictionnaireDesExercices[exercice_tmp].titre +
          "</a></br>\n";
      }
    }

    // Change l'ordre des exercices suivant l'URL
    if (window.location.href.indexOf("beta") > 0) {
      liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Beta (${nombre_d_exercices_disponibles_beta})</div><div class="active content">`;
      liste_html_des_exercices += liste_html_des_exercices_beta;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `</div>`;
    } else if (window.location.href.indexOf("cm.html") > 0) {
      liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="active content">`;
      liste_html_des_exercices += liste_html_des_exercices_CM;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cours Moyen(${nombre_d_exercices_disponibles_c3})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_c3;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_6;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_5;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_4;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_3;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_2;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Première (${nombre_d_exercices_disponibles_1})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_1;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Terminale (${nombre_d_exercices_disponibles_T})</div><div class="content">`;
      liste_html_des_exercices += `</div>`;
      liste_html_des_liste_html_des_exercicesexercices += `<div class="title"><i class="dropdown icon"></i>CRPE (${nombre_d_exercices_disponibles_PE})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_PE;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `</div>`;
    } else {
      liste_html_des_exercices += `<div class="ui accordion"><div class="title"><i class="dropdown icon"></i>Cours Moyen (${nombre_d_exercices_disponibles_c3})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_c3;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_6;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_5;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_4;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_3;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_2;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Première (${nombre_d_exercices_disponibles_1})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_1;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Terminale (${nombre_d_exercices_disponibles_T})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_T;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>CRPE (${nombre_d_exercices_disponibles_PE})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_PE;
      liste_html_des_exercices += `</div>`;
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_CM;
      liste_html_des_exercices += `</div>`;
      // Ajoute les outils prof sur mathalealatex
      if (window.location.href.indexOf("mathalealatex.html") > 0) {
        liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Outils pour le professeur (${nombre_d_exercices_disponibles_prof})</div><div class="content">`;
        liste_html_des_exercices += liste_html_des_exercices_prof;
        liste_html_des_exercices += `</div>`;
      }
      liste_html_des_exercices += `</div>`;
    }

    $("#liste_des_exercices").html(liste_html_des_exercices);
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: true,
      errorColor: "#CC0000",
      strict: "warn",
      trust: false,
      });

    // Gère le clic sur un exercice de la liste
    $(".lien_id_exercice").click(function () {
      let numero = $(this).attr("numero");
      if ($("#choix_des_exercices").val() == "") {
        $("#choix_des_exercices").val($("#choix_des_exercices").val() + numero);
      } else {
        $("#choix_des_exercices").val(
          $("#choix_des_exercices").val() + "," + numero
        );
      }
      liste_des_exercices = $("#choix_des_exercices")
        .val()
        .replace(/\s/g, "")
        .replace(";", ",")
        .split(",");

      // Créé un évènement de changement de la valeur du champ pour déclencher la mise à jour
      let event = new Event('change');
      document.getElementById('choix_des_exercices').dispatchEvent(event);
      
      // Actualise KaTeX pour les titres d'exercices utilisant LaTeX
      renderMathInElement(document.body, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
        ],
        throwOnError: true,
        errorColor: "#CC0000",
        strict: "warn",
        trust: false,
      });
    });
}

