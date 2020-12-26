var liste_des_exercices_disponibles = {
  "beta6G24": Test_main_levee,
  "beta4C30": Comparer_puissance10,
  "betaTESTseb": Tests_du_Seb,
  "betaSVG": AfficherSVG,
  //"betaExoZero" : Exercice_zero_mathalea2d,
  "betaExoConstruction" : Exercice_constructions_basiques,
  P001: Code_LaTeX_personnalise,
  // 'P002': LaTeX_static,
  "cours": Questions_de_cours,
  "LaTeX": Code_LaTeX_personnalise,
  // "Perso" : HTML_personnalise,
  // "TsvgjsKatex" : tests_SVGJS_KATEX,  
};

//Pour modifier les exercices lorsqu'ils sont en mode diaporama
var est_diaporama = false;

if (window.location.href.indexOf("cm.html") > 0) {
  est_diaporama = true;
}

//Efface de la liste des exercices disponibles tout ceux qui n'ont pas de version HTML
if (sortie_html) {
  var codeMG32 = "";
}

for (var i in liste_des_exercices_disponibles) {
  let exercice = new liste_des_exercices_disponibles[i]();
  if (sortie_html && exercice.pas_de_version_HMTL) {
    delete liste_des_exercices_disponibles[i];
  }
  if (!sortie_html && exercice.pas_de_version_LaTeX) {
    delete liste_des_exercices_disponibles[i];
  }
}






/**
 * Questions statiques issues d'un fichier Markdown
 *
 * Les thèmes sont des titres de niveaux 2
 *
 * suivies d'une liste qui alterne question et réponse
 * @Auteur Rémi Angot
 * Référence : cours
 */
function Questions_de_cours() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Questions de cours";
  this.consigne = "";
  this.nb_questions = 3;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.consigne_modifiable = false;
  this.sup = ""; // thème des questions
  this.sup2 = "questions_de_cours.txt"; //url des questions
  this.pas_de_version_LaTeX = true;

  this.nouvelle_version = function (numero_de_l_exercice) {
    let liste_questions = []; // Liste de questions
    let liste_corrections = []; // Liste de questions corrigées
    let dictionnaire_de_questions = {};
    let dictionnaire_de_questions_pret = false;
    let contenu_HTML = "";
    let contenu_correction_HTML = "";
    $.get(this.sup2, function (txt) {
      // Récupère le fichier txt et transforme en un dictionnaire {'id_theme':[[questions],[réponses]]}
      let tableau_par_theme = txt
        .match(/##((?=[^#]).|\n)*/g)
        .map((v) => v.trim());
      // Recherche les chaines de caractères commençant par ## et ne comportant pas d'autres #
      for (let i = 0; i < tableau_par_theme.length; i++) {
        let tableau_titre = tableau_par_theme[i].match(/##.*/g);
        let questions_et_reponses = tableau_par_theme[i]
          .match(/\*((?=[^*#]).|\n)*/g)
          .map((v) => v.trim());
        // Recherche les chaines de caractères commençant par * et ne comportant pas d'autres * ou de #
        let titre = tableau_titre[0].replace("## ", "");
        // Récupère le titre du thème sans ##
        let tableau_questions = [];
        let tableau_reponses = [];
        for (let i = 0; i < questions_et_reponses.length; i++) {
          if (i % 2 == 0) {
            //rang pair => questions
            tableau_questions[i / 2] = questions_et_reponses[i].replace(
              "* ",
              ""
            );
            // Supprime les * devant chaque questions
          } else {
            //rang impair => réponses
            tableau_reponses[(i - 1) / 2] = questions_et_reponses[i].replace(
              "* ",
              ""
            );
          }
          dictionnaire_de_questions[titre] = [
            tableau_questions,
            tableau_reponses,
          ];
        }
      }

      // Je n'utilise pas this.nb_questions ou this.sup car this n'est pas clairement défini dans cette fonction
      if (exercice[numero_de_l_exercice].sup == "") {
        exercice[numero_de_l_exercice].sup = choice(
          Object.keys(dictionnaire_de_questions)
        ); // Si on n'a pas spécifié un thème, on en prend un au hasard.
      }

      let nb_questions = exercice[numero_de_l_exercice].nb_question;
      if (dictionnaire_de_questions[exercice[numero_de_l_exercice].sup]) {
        // Si le thème existe dans le dictionnaire alors on adapte le nombre de questions
        nb_questions = Math.min(
          exercice[numero_de_l_exercice].nb_questions,
          dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][0]
            .length
        );
      }
      for (let i = 0; i < nb_questions; i++) {
        liste_questions.push(
          dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][0][i]
        );
        liste_corrections.push(
          dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][1][i]
        );
      }
      shuffle2tableaux(liste_questions, liste_corrections);
      // Mélange les questions et les réponses (sans perdre les associations)
      dictionnaire_de_questions_pret = true;
    });

    let id_unique = `${numero_de_l_exercice}_${Date.now()}`;
    if (sortie_html) {
      this.contenu = `<div id=div_exo${id_unique}></div>`;
      this.contenu_correction = `<div id=div_corr_exo${id_unique}></div>`;
    }

    if (!window.divExist) {
      window.divExist = [];
    } // Si divExist n'existe pas on le crée
    // divExist est un tableau dans lequel on stocke les listenner sur la création des div
    window.divExist[id_unique] = setInterval(function () {
      if ($(`#div_exo${id_unique}`).length && dictionnaire_de_questions_pret) {
        // Attends que le div existe et que le dictionnaire de questions soit prêt
        contenu_HTML = html_enumerate(liste_questions, this.spacing);
        contenu_correction_HTML = html_enumerate(
          liste_corrections,
          this.spacing
        );
        $(`#div_exo${id_unique}`).html(contenu_HTML); //Vide le div pour éviter les SVG en doublon
        $(`#div_corr_exo${id_unique}`).html(contenu_correction_HTML); //Vide le div pour éviter les SVG en doublon
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
        clearInterval(divExist[numero_de_l_exercice]); //Arrête le timer
      }
    }, 100); // Vérifie toutes les 100ms
  };
  this.besoin_formulaire_texte = ["Thème des questions", "De la forme 6M1"];
  this.besoin_formulaire2_texte = [
    "Liste des questions",
    "URL du fichier texte contenant les questions et réponses.",
  ];
}

/**
 * @Auteur Rémi Angot
 */
function Code_LaTeX_personnalise() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "Code LaTeX personnalisé";
  this.pas_de_version_HMTL = true;
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.beamer = false;
  this.sup = "%Votre code LaTeX";
  this.sup2 = "%Votre code LaTeX pour le corrigé";

  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_texte = [
    "Code LaTeX énoncé",
    "Par exemple : \\input{mon_fichier}",
  ]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  this.besoin_formulaire2_texte = [
    "Code LaTeX correction",
    "Par exemple : \\input{mon_fichier_corr}",
  ];
  this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.contenu = this.sup;
    this.contenu_correction = this.sup2;
  };
}

/**
 * @Auteur Rémi Angot
 */
function HTML_personnalise() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "Exercice personnalisé";
  this.pas_de_version_HMTL = false;
  this.pas_de_version_LaTeX = true;
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.beamer = false;
  this.sup = "Énoncé de l'exercice";
  this.sup2 = "Énoncé de la correction";

  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_long_texte = ["Exercice"]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  this.besoin_formulaire2_texte = ["Correction"];
  this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.contenu = this.sup;
    this.contenu_correction = this.sup2;
  };
}

// Exercices paramétrés pour correspondre au référentiel
// Référence 5P10
//function Proportionnalite_pas_proportionnalite_5e(){
//  Proportionnalite_pas_proportionnalite.call(this)
// Pas de paramètres Sup
//}


/**
 * Non Publié : base servant à faire des tutoriels vidéos
 * @Auteur Jean-Claude Lhote
 * Réf : betaExoConstruction
 * publié le 1/12/2020
 */
function Exercice_constructions_basiques() {
  "use strict"
  Exercice.call(this)
  this.titre = "Programmes de constructions (en chantier)";
  this.nb_questions = 1; // Ici le nombre de questions
  this.nb_questions_modifiable=false // Active le formulaire nombre de questions
  this.nb_cols = 1; // Le nombre de colonnes dans l'énoncé LaTeX
  this.nb_cols_corr = 1;// Le nombre de colonne pour la correction LaTeX
  this.pas_de_version_LaTeX=false // mettre à true si on ne veut pas de l'exercice dans le générateur LaTeX
  this.pas_de_version_HMTL=false // mettre à true si on ne veut pas de l'exercice en ligne
// Voir la Classe Exercice pour une liste exhaustive des propriétés disponibles.

//  this.sup = false; // A décommenter : valeur par défaut d'un premier paramètre
//  this.sup2 = false; // A décommenter : valeur par défaut d'un deuxième paramètre
//  this.sup3 = false; // A décommenter : valeur par défaut d'un troisième paramètre

// c'est ici que commence le code de l'exercice cette fonction crée une copie de l'exercice
  this.nouvelle_version = function (numero_de_l_exercice) {
  // la variable numero_de_l_exercice peut être récupérée pour permettre de différentier deux copies d'un même exo
  // Par exemple, pour être certain de ne pas avoir les mêmes noms de points en appelant 2 fois cet exo dans la même page

  this.liste_questions = [] // tableau contenant la liste des questions 
  this.liste_corrections = []
  let type_de_questions_disponibles=[1] // tableau à compléter par valeurs possibles des types de questions
  let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles, this.nb_questions)
// Ci-dessus On crée une liste aléatoire comprenant nb_questions parmi les types disponibles.
/* Un exemple ci-dessous : si la classe est 6, alors les types dispo sont 1 et 2 sinon , 1,2,3 et 4.
if (this.classe == 6) type_de_questions_disponibles = [1, 2]
    else type_de_questions_disponibles = [1, 2, 3,4]
liste_type_de_questions = combin,aison_listes(type_de_questions_disponibles, this.nb_questions)
*/
// boucle pour fabriquer les nb_questions questions en s'assurant que si il n'y a pas nb_questions différentes
// La boucle s'arrête après 50 tentatives.
    let A,B,C,D,traces1,traces2,labels1,labels2,kare,aA,aB,aC,aD
    let objets_enonce,objets_enonceml,objets_correction,params_enonce,params_enonceml,params_correction
    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
      objets_enonce = [] // on initialise le tableau des objets Mathalea2d de l'enoncé
      objets_enonceml = [] // Idem pour l'enoncé à main levée si besoin
      objets_correction = [] // Idem pour la correction

      texte = `Construire le carré $ABCD$.<br>` // Nous utilisons souvent cette variable pour construire le texte de la question.
      texte_corr = `Pour cette construction on peut utiliser la règle et l'équerre.<br>` // Idem pour le texte de la correction.
//      nom = creerNomDePolygone(3, "PQ")
// fonction permettant de choisir un nom de polygone, soit ici 3 lettres qui se suivent à l'exclusion de la séquence PQ
      switch (liste_type_de_questions[i]) { // Chaque question peut être d'un type différent, ici 4 cas sont prévus...
        case 1:
          A=point(0,0,'A','below')
          B=point(5,randint(-30,30)/10,'B','below')
          C=rotation(A,B,-90,'C','above')
          D=rotation(B,A,90,'D','above')
          traces1=tracePoint(A,B)
          labels1=labelPoint(A,B)
          traces2=tracePoint(A,B,C,D)
          labels2=labelPoint(A,B,C,D)
          kare=carre(A,B)
          kare.epaisseur=2
          aA=codageAngleDroit(B,A,D)
          aB=codageAngleDroit(A,B,C)
          aC=codageAngleDroit(B,C,D)
          aD=codageAngleDroit(C,D,A)

          objets_enonce.push (traces1,labels1) 
          objets_enonceml.push(traces2,labels2,kare,aA,aB,aC,aD)
          objets_correction.push(traces2,labels2,kare,aA,aB,aC,aD)
          //ici sont créés les texte, tex_corr, objets mathalea2d divers entrant dans le contenu de l'exercice
        break;

        case 2:

          // Idem Cas1 mais avec d'autres texte, texte_corr...
        break

        case 3:
          
        break
          
        case 4:
        
        break  
          
      }
//  objets_enonce.push () // On rempli les tableaux d'objets Mathalea2d
//  objets_enonceml.push()
//  objets_correction.push()

//paramètres de la fenêtre Mathalea2d pour l'énoncé main levée
     params_enonceml = { xmin: -5, ymin: -5, xmax: 9, ymax: 9, pixelsParCm: 20, scale: 1, mainlevee: true, amplitude: 1 }
//paramètres de la fenêtre Mathalea2d pour l'énoncé normal
      params_enonce = { xmin:-5, ymin: -5, xmax: 9, ymax: 9, pixelsParCm: 20, scale: 1, mainlevee: false}
//paramètres de la fenêtre Mathalea2d pour la correction
      params_correction = { xmin: -5, ymin: -5, xmax: 9, ymax: 9, pixelsParCm: 20, scale: 1 }
// On ajoute au texte de l'énoncé, la figure à main levée et la figure de l'enoncé.
      texte += mathalea2d(params_enonceml, objets_enonceml)+ mathalea2d(params_enonce, objets_enonce)
// On ajoute au texte de la correction, la figure de la correction
      texte_corr += mathalea2d(params_correction, objets_correction)
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on la stocke dans la liste des questions
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this); // On envoie l'exercice à la fonction de mise en page
  };
// Si les variables suivantes sont définies, elles provoquent l'affichage des formulaires des paramètres correspondants
// Il peuvent être de 3 types : _numerique, _case_a_cocher ou _texte.
// Il sont associés respectivement aux paramètres sup, sup2 et sup3.

//	this.besoin_formulaire_numerique = ['Type de questions', 3, `1 : Perpendiculaires\n 2 : Parallèles\n 3 : Mélange`]
//  this.besoin_formulaire2_numerique = ["Type de cahier",3,`1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche`];
// this.besoin_formulaire3_case_a_cocher =['figure à main levée',true]

} 

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


/** 
 * * Exo test pour quand j'en ai besoin
 * * pas de numéro
 * * Tests
 * @author Sébastien Lozano
 */

function Tests_du_Seb() {
  'use strict';
  Exercice.call(this); // Héritage de la classe Exercice()
  this.beta = true;
  this.sup = 1;
  if (this.beta) {
    this.nb_questions = 2;
  } else {
    this.nb_questions = 2;
  };

  this.titre = "Exo test pour quand j'en ai besoin";
  this.consigne = `Consigne `;

  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  //this.nb_questions_modifiable = false;
  sortie_html ? this.spacing = 2.5 : this.spacing = 1.5;
  sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.beta) {
      type_de_questions_disponibles = [0, 1];
    } else {
      //type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);      			
      type_de_questions_disponibles = [0, 1];
    };

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    //let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus		

    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {

      // pour les situations, autant de situations que de cas dans le switch !
      let situations = [
        {//case 0 -->
        },
        {//case 1 -->
        },
      ];

      let enonces = [];
      for (let k = 0; k < situations.length; k++) {
        enonces.push({
          enonce: `
          Type ${k}<br>	
          ${JSON.stringify(decomp_fact_prem_array(238))}<br>			
          ${typeof decomp_fact_prem_array(238)}<br>
          ${JSON.stringify(obtenir_liste_facteurs_premiers(238))}<br>
          ${typeof obtenir_liste_facteurs_premiers(238)}<br>
					`,
          question: ``,
          correction: `
					Correction type ${k}
					`
        });
      };

      // autant de case que d'elements dans le tableau des situations
      switch (liste_type_de_questions[i]) {
        case 0:
          texte = `${enonces[0].enonce}`;
          if (this.debug) {
            texte += `<br>`;
            texte += `<code class="b">score</code> pour ...`;
            texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
            texte += `             `
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[0].correction}`;
          };
          break;
        case 1:
          texte = `${enonces[1].enonce}`;
          if (this.beta) {
            texte += `<br>`;
            texte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;
            texte_corr = ``;
          } else {
            texte_corr = `${enonces[1].correction}`;
          };
          break;

      };

      if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);

  }
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
  //this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
};


/**
 * @Auteur Rémi Angot
 */
function LaTeX_static() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "Fichier statique";
  this.pas_de_version_HMTL = false;
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.beamer = false;
  this.sup = "Nom du fichier";

  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_texte = [
    "url du fichier",
    "nom du fichier sans l'extension",
  ]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  //this.besoin_formulaire2_texte = ['Code LaTeX correction','Par exemple : \\input{mon_fichier_corr}'];

  this.nouvelle_version = function (numero_de_l_exercice) {
    //this.contenu_correction = '%£tex/probleme_altitude_corr£'
    //this.contenu = '%£tex/probleme_altitude£'
    this.contenu = "%£" + this.sup + "£";
    this.contenu_correction = "%£" + this.sup + "_corr£";
    //liste_des_exercices_statiques.push(this.sup)
  };
}

// FIN DES EXERCICES
// Gestion des listes d'exercices

jQuery(document).ready(function () {
  // Ne se fait qu'après que le DOM soit entièrement défini

  // Trie par ordre alphabétique les exercices disponibles
  liste_des_exercices_disponibles = tridictionnaire(
    liste_des_exercices_disponibles
  );

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
  for (var id in liste_des_exercices_disponibles) {
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
  let liste_html_des_exercices_c3 = [];
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
  let liste_html_des_exercices =
    '<h3 class="ui block header">Exercices disponibles</h3>\n\n';

  function liste_html_des_exercices_d_un_theme(theme) {
    let liste = '';
    let dictionnaire = filtreDictionnaire(liste_des_exercices_disponibles, theme);
    for (let id in dictionnaire) {
      let exercice_tmp = new dictionnaire[id]();
      liste +=
        `<span class="id_exercice">${id}</span> - <a class="lien_id_exercice" numero="${id}">${exercice_tmp.titre}</a></br>\n`;
    }
    return liste;
  }

  function liste_html_des_exercices_d_un_niveau(liste_de_themes) { // liste_de_themes = [['6N1','6N1 - Numérations et fractions niveau 1'] , [' ',' '] ]
    let liste = '';
    for (let theme of liste_de_themes) {
      liste += `<h3>${theme[1]}</h3>`;
      liste += liste_html_des_exercices_d_un_theme(theme[0]);
    }
    return liste;
  }

  liste_html_des_exercices_c3 = liste_html_des_exercices_d_un_niveau([
    ['c3C1', 'c3C1 - Calculs niveau 1'], ['c3N1', 'c3N1 - Numération Niveau 1'], ['c3N2', 'c3N2 - Numération Niveau 2']])

  liste_html_des_exercices_6 = liste_html_des_exercices_d_un_niveau([
    ['6C1', '6C1 - Calculs niveau 1'], ['6C2', '6C2 - Calculs niveau 2'], ['6C3', '6C3 - Calculs niveau 3'],
    ['6D1', '6D1 - Les durées'],
    ['6G1', '6G1 - Géométrie niveau 1'], ['6G2', '6G2 - Géométrie niveau 2'], ['6G3', '6G3 - Géométrie niveau 3'], ['6G4', '6G4 - Géométrie niveau 4'],
    ['6M1', '6M1 - Grandeurs et mesures niveau 1'], ['6M2', '6M2 - Grandeurs et mesures niveau 2'], ['6M3', '6M3 - Volumes'],
    ['6N1', '6N1 - Numération et fractions niveau 1'], ['6N2', '6N2 - Numération et fractions niveau 2'], ['6N3', '6N3 - Numération et fractions niveau 3'], ['6N4', '6N4 - Numération et fractions niveau 4'],
    ['6P1', '6P1 - Proportionnalité'], ['6S1', '6S1 - Statistiques'],
    ['6Algo1', '6A - Algorithmique']
  ])
  liste_html_des_exercices_5 = liste_html_des_exercices_d_un_niveau([
    ['5A1', '5A1 - Arithmetique'], ['5C1', '5C1 - Calculs'],
    ['5G1', '5G1 - Symétries'], ['5G2', '5G2 - Triangles'], ['5G3', '5G3 - Angles'], ['5G4', '5G4 - Parallélogrammes'], ['5G5', '5G5 - Espace'],
    ['5L1', '5L1 - Calcul littéral'],
    ['5M1', '5M1 - Périmètres et aires'], ['5M2', '5M2 - Volumes'], ['5M3', '5M3 - Durées'],
    ['5N1', '5N1 - Numération et fractions niveau 1'], ['5N2', '5N2 - Calculs avec les fractions'],
    ['5P1', '5P1 - Proportionnalité'], ['5R1', '5R1 - Relatifs niveau 1'], ['5R2', '5R2 - Relatifs niveau 2'],
    ['5S1', '5S1 - Statistiques'], ['5S2', '5S2 - Probabilités']
  ])
  liste_html_des_exercices_4 = liste_html_des_exercices_d_un_niveau([
    ['4C1', '4C1 - Relatifs'], ['4C2', '4C2 - Fractions'], ['4C3', '4C3 - Puissances'],
    ['4F1', '4F1 - Notion de fonction'],
    ['4G1', '4G1 - Translation et rotation'], ['4G2', '4G2 - Théorème de Pythagore'], ['4G3', '4G3 - Théorème de Thalès'], ['4G4', "4G4 - Cosinus d'un angle"], ['4G5', "4G5 - Espace"],
    ['4L1', '4L1 - Calcul littéral'], ['4L2', '4L2 - Équation'], ['4P1', '4P1 - Proportionnalité'], ['4S1', '4S1 - Statistiques'], ['4S2', '4S2 - Probabilités'],
    ['4Algo1', '4A1 - Algorithmique']
  ])
  liste_html_des_exercices_3 = liste_html_des_exercices_d_un_niveau([
    ['3A1', '3A1 - Arithmetique'],
    ['3F1', '3F1 - Généralités sur les fonctions'], ['3F2', '3F2 - Fonctions affines et linéaires'],
    ['3G1', '3G1 - Homothétie et rotation'], ['3G2', '3G2 - Théorème de Thalès'], ['3G3', '3G3 - Trigonométrie'], ['3G4', "3G4 - Espace"],
    ['3L1', '3L1 - Calcul littéral'], ['3P1', '3P1 - Proportionnalité'], ['3S1', '3S1 - Statistiques'], ['3S2', '3S2 - Probabilités']
  ])

  for (var id in liste_des_exercices_disponibles) {
    let exercice_tmp = new liste_des_exercices_disponibles[id]();

    if (id[0] == 2) {
      liste_html_des_exercices_2 +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == 1) {
      liste_html_des_exercices_1 +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == 'T') {
      liste_html_des_exercices_T +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "P" && id[1] == "E") {
      liste_html_des_exercices_PE +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "C") {
      liste_html_des_exercices_CM +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "P" && id[1] == "0") {
      liste_html_des_exercices_prof +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "b" && id[1] == "e") {
      liste_html_des_exercices_beta +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
  }

  // Change l'ordre des exercices suivant l'URL
  if (window.location.href.indexOf("beta") > 0) {
    liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Beta (${nombre_d_exercices_disponibles_beta})</div><div class="active content">`;
    liste_html_des_exercices += liste_html_des_exercices_beta;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `</div>`;
  } else if (window.location.href.indexOf("outils") > 0) {
    liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Outils pour le professeur (${nombre_d_exercices_disponibles_prof})</div><div class="active content">`;
    liste_html_des_exercices += liste_html_des_exercices_prof;
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
    liste_html_des_exercices += liste_html_des_exercices_T;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>CRPE (${nombre_d_exercices_disponibles_PE})</div><div class="content">`;
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
    mise_a_jour_de_la_liste_d_exercice();

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
});

