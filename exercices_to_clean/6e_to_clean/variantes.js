
// Référence 6C21
function Divisions_euclidiennes_niv2() {
  Divisions_euclidiennes.call(this);
  this.sup = 2;
  this.titre = "Divisions euclidiennes - Niveau 2";
}
// référence 6G24
function Transformations_6e() {
  Transformations.call(this);
  this.sup = 1;
  this.titre = `Trouver l'image d'un point par une symétrie axiale`;
  this.pas_de_version_LaTeX = true;
}
// 5G10
function Symetrie_axiale_5e() {
  Transformations.call(this);
  this.sup = 1;
  this.titre = `Trouver l'image d'un point par une symétrie axiale`;
  this.pas_de_version_LaTeX = true;
}
function Exercice_6N13() {
  this.sup = 1;
  this.titre = "Utiliser les préfixes multiplicateurs (déca à kilo)";
  Exercice_conversions.call(this);
}
// 6N24
function Exercice_6N24() {
  Exercice_conversions.call(this);
  this.sup = 3;
  this.titre =
    "Utiliser les préfixes multiplicateurs et diviseurs (milli à kilo)";
  this.correction_avec_des_fractions = true;
  this.spacing_corr = 2;
}
// Référence 6M12
function Reglages_6M12() {
  Exercice_conversions_de_longueurs.call(this);
  this.sup = 3;
  this.nb_questions = 8;
}
function Reglages_6M23() {
  Exercice_conversions_aires.call(this);
  this.sup = 3;
  this.nb_cols_corr = 1;
}
// Référence 6M10
function Reglages_6M10() {
  Exercice_perimetres_et_aires.call(this);
  this.sup = 1;
}
// Référence 6M22
function Reglages_6M22() {
  Exercice_perimetres_et_aires.call(this);
  this.sup = 2;
  this.titre = "Périmètres et aires de disques (à partir d'un texte).";
}
function Reglages_6N34() {
  Exercice_conversions.call(this);
  this.sup = 5;
  this.titre = "Conversions avec tous les préfixes de milli à tera.";
}


