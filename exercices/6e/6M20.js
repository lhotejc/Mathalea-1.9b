import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,randint,shuffle,tex_nombre} from "/modules/outils.js"


/**
 * Calculer l'aire de 3 triangles dont une hauteur est tracée.
 *
 * Une figure dynamique est disponible sur laquelle on peut déplacer le pied de la hauteur.
 *
 * Il n'existe pas de version LaTeX de cet exercice.
 * @Auteur Rémi Angot
 * Référence 6M20
 */
export default function Aire_de_triangles() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.pas_de_version_LaTeX = true;
  this.titre = "Aires de triangles";
  this.consigne =
    "Calculer l'aire des 3 triangles suivants (vous pouvez déplacer certains points).";
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 3) : (this.spacing_corr = 2);
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.type_exercice = "MG32";
  this.taille_div_MG32 = [500, 450];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_corrections = []; // Liste de questions corrigées
    let tableau_des_cotes = shuffle([3, 4, 5, 6, 7]); //pour s'assurer que les 3 côtés sont différents
    let c1 = tableau_des_cotes[0];
    let c2 = tableau_des_cotes[1];
    let c3 = tableau_des_cotes[2];
    let tableau_des_hauteurs = shuffle([3, 4, 5, 6]); //pour s'assurer que les 3 hauteurs sont différents
    let h1 = tableau_des_hauteurs[0];
    let h2 = tableau_des_hauteurs[1];
    let h3 = tableau_des_hauteurs[2];

    let codeBase64 = "";
    if (randint(1, 2) == 1) {
      codeBase64 =
        "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAABAAAABgAQTG9uZ3VldXJPcmllbnRlZQArIzE6IExlIHByZW1pZXIgcG9pbnQKIzI6IExlIGRldXhpw6htZSBwb2ludAAAAAIAAAADAAAAAAn#####AAAAAQARQ0VsZW1lbnRHZW5lcmlxdWUAAUEAAAAA#####wAAAAAAAUIAAAAA##########8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AAAAAAEQAAABAAEAAAAAAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAAC#####wAAAAEACENTZWdtZW50Af####8AAAAAABAAAAEAAQAAAAAAAAAB#####wAAAAIAE0NNZXN1cmVBbmdsZU9yaWVudGUA#####wAEYW5nJwAAAAMAAAAAAAAAAf####8AAAABAAlDTG9uZ3VldXIB#####wAAAAAAAAAB#####wAAAAEAB0NNaWxpZXUA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAAAAAAB#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQH#####AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAABxAAAAAAAAEAAAAC#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAUAAAAAAgAAAAYAAAABAAAAuP####8AAAABAApDQ2FsY0NvbnN0AP####8AAnBpABYzLjE0MTU5MjY1MzU4OTc5MzIzODQ2#####wAAAAEACkNDb25zdGFudGVACSH7VEQtGP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmYAAAABAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAAAAAACAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUA8ZmZmZmZmAAAAAgAAAAMA#####wEAAAAAEAAAAQABAAAAAQAAAAMAAAAGAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAoAAAAAAAAAAAABMQAAAAUA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmgxAAE0AAAACkAQAAAAAAAAAAAADQD#####AAJjMgABNQAAAApAFAAAAAAAAAAAAA0A#####wACaDIAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmMzAAE1AAAACkAUAAAAAAAAAAAADQD#####AAJoMwABNAAAAApAEAAAAAAAAAAAAAsA#####wAAAAAAEAABQQDAKgAAAAAAAD#wAAAAAAAAAwABQDwAAAAAAABAYSAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAIAAAADv####8AAAACAAlDQ2VyY2xlT1IAAAAADwEAAAAAAQAAAA4AAAAIAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA8AAAAAABAAAUIAwBgAAAAAAABAFAAAAAAAAAMAAUAXmRub7wU+AAAAEAAAAAMBAAAADwAAAAAAEAAAAQABAAAADgAAABEAAAACAP####8AAAAAABAAAUgAwCYAAAAAAABAFAAAAAAAAAMAAT#nUJEwLKgdAAAAEv####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAABMAAAASAAAADwD#####AQAAAAABAAAAEwAAAAgAAAAJAP####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAUAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAFgAAABMA#####wAAAAAAEAABQwC#8AAAAAAAAMA7AAAAAAAAAwACAAAAFgAAAAMA#####wAAAAAAEAAAAQABAAAADgAAABgAAAADAP####8AAAAAABAAAAEAAQAAABgAAAARAAAAAwD#####AAAAAAAQAAABAQEAAAATAAAAGAAAAAsA#####wAAAAAAEAABRADAJgAAAAAAAMA7AAAAAAAAAwABQHpQAAAAAABATYAAAAAAAAAAAA4A#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAAAQAAAAIAAAACAAAACgAAABwAAAAPAAAAAB0BAAAAAAEAAAAcAAAACAAAAAoAAAAAEAEAAAAdAAAAAAAQAAFFAMAyAAAAAAAAwDAAAAAAAAADAAFADDWm90SREAAAAB4AAAADAQAAAB0AAAAAABAAAAEAAQAAABwAAAAfAAAAAgD#####AAAAAAAQAAFHAMAkAAAAAAAAQBAAAAAAAAADAAE#5pq7A1eUfwAAACAAAAARAP####8BAAAAABAAAAEAAQAAACEAAAAgAAAADwD#####AQAAAAABAAAAIQAAAAgAAAALAAAAABIA#####wAAACIAAAAjAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACQAAAATAP####8AAAAAABAAAUYAwBAAAAAAAABAIAAAAAAAAAMAAgAAACQAAAADAP####8AAAAAABAAAAEAAQAAABwAAAAmAAAAAwD#####AAAAAAAQAAABAAEAAAAmAAAAHwAAAAMA#####wAAAAAAEAAAAQEBAAAAIQAAACYAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAABMAAAAY#####wAAAAEAC0NNZWRpYXRyaWNlAAAAACoBAAAAAA0AAAEAAQAAABMAAAAYAAAABgAAAAAqAQAAAAANAAABBQAAAAATAAAAGAAAAA8AAAAAKgEAAAAAAQAAACwAAAAKQDAAAAAAAAABAAAAEgAAAAAqAAAAKwAAAC0AAAATAAAAACoBAAAAAA0AAAEFAAEAAAAuAAAABQEAAAAqAAAAEwAAABgAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACEAAAAmAAAAFAAAAAAxAQAAAAANAAABAAEAAAAhAAAAJgAAAAYAAAAAMQEAAAAADQAAAQUAAAAAIQAAACYAAAAPAAAAADEBAAAAAAEAAAAzAAAACkAwAAAAAAAAAQAAABIAAAAAMQAAADIAAAA0AAAAEwAAAAAxAQAAAAANAAABBQABAAAANQAAAAUBAAAAMQAAACEAAAAmAAAACwD#####AAAAAAAQAAFNAMAoAAAAAAAAQBAAAAAAAAADAAFAS4AAAAAAAEBywAAAAAAAAAAADgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAOAAAAA8AAAAAOQEAAAAAAQAAADgAAAAIAAAADAAAAAAQAQAAADkAAAAAABAAAU4AwCIAAAAAAABACAAAAAAAAAMAAUAXx81SzkwjAAAAOgAAAAMBAAAAOQAAAAAAEAAAAQABAAAAOAAAADv#####AAAAAQAJQ0Ryb2l0ZUFCAP####8BAAAAABAAAAEAAQAAADgAAAA7AAAAAgD#####AAAAAAAQAAFJAAAAAAAAAAAAQAgAAAAAAAADAAE#99qox0vglgAAAD0AAAARAP####8BAAAAABAAAAEAAQAAAD4AAAA9AAAADwD#####AQAAAAABAAAAPgAAAAgAAAANAAAAABIA#####wAAAD8AAABAAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAAEEAAAATAP####8AAAAAABAAAU8AwAgAAAAAAADAPAAAAAAAAAMAAgAAAEEAAAADAP####8AAAAAABAAAAEAAQAAADsAAABDAAAAAwD#####AAAAAAAQAAABAAEAAABDAAAAOAAAAAMA#####wAAAAAAEAAAAQEBAAAAOwAAAD4AAAADAP####8AAAAAABAAAAEBAQAAAD4AAABD#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAAAAAEAAAABQDAAAAAAAAAAAABDAAAAPgAAADsAAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAYAAAAEwAAAA4AAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAmAAAAIQAAABwAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAD4AAABDAAAAFAAAAABLAQAAAAANAAABAAEAAAA+AAAAQwAAAAYAAAAASwEAAAAADQAAAQUAAAAAPgAAAEMAAAAPAAAAAEsBAAAAAAEAAABNAAAACkAwAAAAAAAAAQAAABIAAAAASwAAAEwAAABOAAAAEwAAAABLAQAAAAANAAABBQABAAAATwAAAAUBAAAASwAAAD4AAABDAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEwAAABgAAAABAAAAAFIAAAAAARAAAAEAAQAAABMBP#AAAAAAAAAAAAACAAAAAFIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFMAAAADAQAAAFIAAAAAABAAAAEBAQAAABMAAAAYAAAABAAAAABSAARhbmcnAAAAVAAAABMAAAAYAAAABQEAAABSAAAAEwAAABgAAAAGAAAAAFIAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAGAAAAAcBAAAAUgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAFgQAAAAAAABAAAAAgAAAAgAAABWAAAAAyBjbQIAAABXAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAIQAAACYAAAABAAAAAFoAAAAAARAAAAEAAQAAACEBP#AAAAAAAAAAAAACAAAAAFoAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFsAAAADAQAAAFoAAAAAABAAAAEBAQAAACEAAAAmAAAABAAAAABaAARhbmcnAAAAXAAAACEAAAAmAAAABQEAAABaAAAAIQAAACYAAAAGAAAAAFoAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAhAAAAJgAAAAcBAAAAWgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAGAQAAAAAAABAAAAAgAAAAgAAABeAAAAAyBjbQIAAABfAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAAAwAAAAIAAAACAAAAOwAAAEMAAAABAAAAAGIAAAAAARAAAAEAAQAAADsBP#AAAAAAAAAAAAACAAAAAGIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAGMAAAADAQAAAGIAAAAAABAAAAEAAQAAADsAAABDAAAABAAAAABiAARhbmcnAAAAZAAAADsAAABDAAAABQEAAABiAAAAOwAAAEMAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA+AAAAQwAAAAEAAAAAaAAAAAABEAAAAQABAAAAPgE#8AAAAAAAAAAAAAIAAAAAaAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAaQAAAAMBAAAAaAAAAAAAEAAAAQEBAAAAPgAAAEMAAAAEAAAAAGgABGFuZycAAABqAAAAPgAAAEMAAAAFAQAAAGgAAAA+AAAAQwAAAAYAAAAAaAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAD4AAABDAAAABwEAAABoAAAAAABAMAAAAAAAAEAQAAAAAAAAAAAAbhAAAAAAAAEAAAACAAAACAAAAGwAAAADIGNtAgAAAG0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAOAAAAEQAAAAEAAAAAcAAAAAABEAAAAQABAAAADgE#8AAAAAAAAAAAAAIAAAAAcAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAcQAAAAMBAAAAcAAAAAAAEAAAAQABAAAADgAAABEAAAAEAAAAAHAABGFuZycAAAByAAAADgAAABEAAAAFAQAAAHAAAAAOAAAAEQAAAAYAAAAAcAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAARAAAABwEAAABwAAAAAADAJAAAAAAAAEAyAAAAAAAAAAAAdhAAAAAAAAEAAAACAAAACAAAAHQAAAADIGNtAgAAAHUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAfAAAAHAAAAAEAAAAAeAAAAAABEAAAAQABAAAAHwE#8AAAAAAAAAAAAAIAAAAAeAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAeQAAAAMBAAAAeAAAAAAAEAAAAQABAAAAHwAAABwAAAAEAAAAAHgABGFuZycAAAB6AAAAHwAAABwAAAAFAQAAAHgAAAAfAAAAHAAAAAYAAAAAeAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAAAcAAAABwEAAAB4AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAfhAAAAAAAAEAAAACAAAACAAAAHwAAAADIGNtAgAAAH0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA4AAAAOwAAAAEAAAAAgAAAAAABEAAAAQABAAAAOAE#8AAAAAAAAAAAAAIAAAAAgAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAgQAAAAMBAAAAgAAAAAAAEAAAAQABAAAAOAAAADsAAAAEAAAAAIAABGFuZycAAACCAAAAOAAAADsAAAAFAQAAAIAAAAA4AAAAOwAAAAYAAAAAgAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADgAAAA7AAAABwEAAACAAAAAAADAJAAAAAAAAEAyAAAAAAAAAAAAhhAAAAAAAAEAAAACAAAACAAAAIQAAAADIGNtAgAAAIUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAOAAAAGAAAAAEAAAAAiAAAAAABEAAAAQABAAAADgE#8AAAAAAAAAAAAAIAAAAAiAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAiQAAAAMBAAAAiAAAAAAAEAAAAQABAAAADgAAABgAAAAEAAAAAIgABGFuZycAAACKAAAADgAAABgAAAAFAQAAAIgAAAAOAAAAGAAAAAYAAAAAiAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAAYAAAABwEAAACIAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAjhAAAAAAAAEAAAACAAAACAAAAIwAAAADIGNtAQAAAI0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAARAAAAGAAAAAEAAAAAkAAAAAABEAAAAQABAAAAEQE#8AAAAAAAAAAAAAIAAAAAkAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAkQAAAAMBAAAAkAAAAAAAEAAAAQABAAAAEQAAABgAAAAEAAAAAJAABGFuZycAAACSAAAAEQAAABgAAAAFAQAAAJAAAAARAAAAGAAAAAYAAAAAkAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABEAAAAYAAAABwEAAACQAAAAAABAMQAAAAAAAD#wAAAAAAAAAAAAlhAAAAAAAAEAAAACAAAACAAAAJQAAAADIGNtAQAAAJUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAfAAAAJgAAAAEAAAAAmAAAAAABEAAAAQABAAAAHwE#8AAAAAAAAAAAAAIAAAAAmAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAmQAAAAMBAAAAmAAAAAAAEAAAAQABAAAAHwAAACYAAAAEAAAAAJgABGFuZycAAACaAAAAHwAAACYAAAAFAQAAAJgAAAAfAAAAJgAAAAYAAAAAmAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAAAmAAAABwEAAACYAAAAAADAMAAAAAAAAEAqAAAAAAAAAAAAnhAAAAAAAAEAAAACAAAACAAAAJwAAAADIGNtAQAAAJ0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAmAAAAHAAAAAEAAAAAoAAAAAABEAAAAQABAAAAJgE#8AAAAAAAAAAAAAIAAAAAoAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAoQAAAAMBAAAAoAAAAAAAEAAAAQABAAAAJgAAABwAAAAEAAAAAKAABGFuZycAAACiAAAAJgAAABwAAAAFAQAAAKAAAAAmAAAAHAAAAAYAAAAAoAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAcAAAABwEAAACgAAAAAABAMQAAAAAAAEAUAAAAAAAAAAAAphAAAAAAAAEAAAACAAAACAAAAKQAAAADIGNtAQAAAKUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA4AAAAQwAAAAEAAAAAqAAAAAABEAAAAQABAAAAOAE#8AAAAAAAAAAAAAIAAAAAqAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAqQAAAAMBAAAAqAAAAAAAEAAAAQABAAAAOAAAAEMAAAAEAAAAAKgABGFuZycAAACqAAAAOAAAAEMAAAAFAQAAAKgAAAA4AAAAQwAAAAYAAAAAqAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADgAAABDAAAABwEAAACoAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAArhAAAAAAAAEAAAACAAAACAAAAKwAAAADIGNtAQAAAK0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA7AAAAQwAAAAEAAAAAsAAAAAABEAAAAQABAAAAOwE#8AAAAAAAAAAAAAIAAAAAsAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAsQAAAAMBAAAAsAAAAAAAEAAAAQABAAAAOwAAAEMAAAAEAAAAALAABGFuZycAAACyAAAAOwAAAEMAAAAFAQAAALAAAAA7AAAAQwAAAAYAAAAAsAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADsAAABDAAAABwEAAACwAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAthAAAAAAAAEAAAACAAAACAAAALQAAAADIGNtAQAAALUAAAAH##########8=";
    } else {
      codeBase64 =
        "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAABAAAABgAQTG9uZ3VldXJPcmllbnRlZQArIzE6IExlIHByZW1pZXIgcG9pbnQKIzI6IExlIGRldXhpw6htZSBwb2ludAAAAAIAAAADAAAAAAn#####AAAAAQARQ0VsZW1lbnRHZW5lcmlxdWUAAUEAAAAA#####wAAAAAAAUIAAAAA##########8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AAAAAAEQAAABAAEAAAAAAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAAC#####wAAAAEACENTZWdtZW50Af####8AAAAAABAAAAEAAQAAAAAAAAAB#####wAAAAIAE0NNZXN1cmVBbmdsZU9yaWVudGUA#####wAEYW5nJwAAAAMAAAAAAAAAAf####8AAAABAAlDTG9uZ3VldXIB#####wAAAAAAAAAB#####wAAAAEAB0NNaWxpZXUA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAAAAAAB#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQH#####AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAABxAAAAAAAAEAAAAC#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAUAAAAAAgAAAAYAAAABAAAAw#####8AAAABAApDQ2FsY0NvbnN0AP####8AAnBpABYzLjE0MTU5MjY1MzU4OTc5MzIzODQ2#####wAAAAEACkNDb25zdGFudGVACSH7VEQtGP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmYAAAABAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAAAAAACAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUA8ZmZmZmZmAAAAAgAAAAMA#####wEAAAAAEAAAAQABAAAAAQAAAAMAAAAGAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAoAAAAAAAAAAAABMQAAAAUA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmgxAAE0AAAACkAQAAAAAAAAAAAADQD#####AAJjMgABNQAAAApAFAAAAAAAAAAAAA0A#####wACaDIAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmMzAAE1AAAACkAUAAAAAAAAAAAADQD#####AAJoMwABNAAAAApAEAAAAAAAAAAAAAsA#####wAAAAAAEAABQQDAMgAAAAAAAMAwAAAAAAAAAwABQFDAAAAAAABAQoAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAIAAAADv####8AAAACAAlDQ2VyY2xlT1IAAAAADwEAAAAAAQAAAA4AAAAIAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA8AAAAAABAAAUIAwDMAAAAAAADACAAAAAAAAAMAAUAS60sQO3OGAAAAEAAAAAMBAAAADwAAAAAAEAAAAQABAAAADgAAABEAAAACAP####8AAAAAABAAAUgAP#AAAAAAAAA#8AAAAAAAAAMAAT#ouymi+6YKAAAAEv####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAABMAAAASAAAADwD#####AQAAAAABAAAAEwAAAAgAAAAJAP####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAUAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAFgAAABMA#####wAAAAAAEAABQwBAIAAAAAAAAMAoAAAAAAAAAwACAAAAFgAAAAMA#####wAAAAAAEAAAAQABAAAADgAAABgAAAADAP####8AAAAAABAAAAEAAQAAABgAAAARAAAAAwD#####AAAAAAAQAAABAQEAAAATAAAAGAAAAAsA#####wAAAAAAEAABRABAEAAAAAAAAAAAAAAAAAAAAwABQH0QAAAAAABAZGAAAAAAAAAAAA4A#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAAAQAAAAIAAAACAAAACgAAABwAAAAPAAAAAB0BAAAAAAEAAAAcAAAACAAAAAoAAAAAEAEAAAAdAAAAAAAQAAFFAMAyAAAAAAAAwDAAAAAAAAADAAFAA5gUsW2nVQAAAB4AAAADAQAAAB0AAAAAABAAAAEAAQAAABwAAAAfAAAAAgD#####AAAAAAAQAAFHAMA3AAAAAAAAwCIAAAAAAAADAAE#5pq7A1eUfwAAACAAAAARAP####8BAAAAABAAAAEAAQAAACEAAAAgAAAADwD#####AQAAAAABAAAAIQAAAAgAAAALAAAAABIA#####wAAACIAAAAjAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACQAAAATAP####8AAAAAABAAAUYAwDIAAAAAAAC#8AAAAAAAAAMAAgAAACQAAAADAP####8AAAAAABAAAAEAAQAAABwAAAAmAAAAAwD#####AAAAAAAQAAABAAEAAAAmAAAAHwAAAAMA#####wAAAAAAEAAAAQEBAAAAIQAAACYAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAABMAAAAY#####wAAAAEAC0NNZWRpYXRyaWNlAAAAACoBAAAAAA0AAAEAAQAAABMAAAAYAAAABgAAAAAqAQAAAAANAAABBQAAAAATAAAAGAAAAA8AAAAAKgEAAAAAAQAAACwAAAAKQDAAAAAAAAABAAAAEgAAAAAqAAAAKwAAAC0AAAATAAAAACoBAAAAAA0AAAEFAAEAAAAuAAAABQEAAAAqAAAAEwAAABgAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACEAAAAmAAAAFAAAAAAxAQAAAAANAAABAAEAAAAhAAAAJgAAAAYAAAAAMQEAAAAADQAAAQUAAAAAIQAAACYAAAAPAAAAADEBAAAAAAEAAAAzAAAACkAwAAAAAAAAAQAAABIAAAAAMQAAADIAAAA0AAAAEwAAAAAxAQAAAAANAAABBQABAAAANQAAAAUBAAAAMQAAACEAAAAmAAAACwD#####AAAAAAAQAAFNAMAgAAAAAAAAwD0AAAAAAAADAAFAdBAAAAAAAEBwcAAAAAAAAAAADgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAOAAAAA8AAAAAOQEAAAAAAQAAADgAAAAIAAAADAAAAAAQAQAAADkAAAAAABAAAU4AwBwAAAAAAADAOgAAAAAAAAMAAUAJOHyA#SdXAAAAOgAAAAMBAAAAOQAAAAAAEAAAAQABAAAAOAAAADv#####AAAAAQAJQ0Ryb2l0ZUFCAP####8BAAAAABAAAAEAAQAAADgAAAA7AAAAAgD#####AAAAAAAQAAFJAMAIAAAAAAAAwDwAAAAAAAADAAE#99qox0vglgAAAD0AAAARAP####8BAAAAABAAAAEAAQAAAD4AAAA9AAAADwD#####AQAAAAABAAAAPgAAAAgAAAANAAAAABIA#####wAAAD8AAABAAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAAEEAAAATAP####8AAAAAABAAAU8AwBwAAAAAAABAHAAAAAAAAAMAAgAAAEEAAAADAP####8AAAAAABAAAAEAAQAAADsAAABDAAAAAwD#####AAAAAAAQAAABAAEAAABDAAAAOAAAAAMA#####wAAAAAAEAAAAQEBAAAAOwAAAD4AAAADAP####8AAAAAABAAAAEBAQAAAD4AAABD#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAAAAAEAAAABQDAAAAAAAAAAAABDAAAAPgAAADsAAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAYAAAAEwAAAA4AAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAmAAAAIQAAABwAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAD4AAABDAAAAFAAAAABLAQAAAAANAAABAAEAAAA+AAAAQwAAAAYAAAAASwEAAAAADQAAAQUAAAAAPgAAAEMAAAAPAAAAAEsBAAAAAAEAAABNAAAACkAwAAAAAAAAAQAAABIAAAAASwAAAEwAAABOAAAAEwAAAABLAQAAAAANAAABBQABAAAATwAAAAUBAAAASwAAAD4AAABDAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEwAAABgAAAABAAAAAFIAAAAAARAAAAEAAQAAABMBP#AAAAAAAAAAAAACAAAAAFIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFMAAAADAQAAAFIAAAAAABAAAAEBAQAAABMAAAAYAAAABAAAAABSAARhbmcnAAAAVAAAABMAAAAYAAAABQEAAABSAAAAEwAAABgAAAAGAAAAAFIAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAGAAAAAcBAAAAUgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAFgQAAAAAAABAAAAAgAAAAgAAABWAAAAAyBjbQIAAABXAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAAAwAAAAIAAAACAAAAIQAAACYAAAABAAAAAFoAAAAAARAAAAEAAQAAACEBP#AAAAAAAAAAAAACAAAAAFoAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFsAAAADAQAAAFoAAAAAABAAAAEBAQAAACEAAAAmAAAABAAAAABaAARhbmcnAAAAXAAAACEAAAAmAAAABQEAAABaAAAAIQAAACYAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAADAAAAAgAAAAIAAAA7AAAAQwAAAAEAAAAAYAAAAAABEAAAAQABAAAAOwE#8AAAAAAAAAAAAAIAAAAAYAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAYQAAAAMBAAAAYAAAAAAAEAAAAQABAAAAOwAAAEMAAAAEAAAAAGAABGFuZycAAABiAAAAOwAAAEMAAAAFAQAAAGAAAAA7AAAAQwAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAD4AAABDAAAAAQAAAABmAAAAAAEQAAABAAEAAAA+AT#wAAAAAAAAAAAAAgAAAABmAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABnAAAAAwEAAABmAAAAAAAQAAABAQEAAAA+AAAAQwAAAAQAAAAAZgAEYW5nJwAAAGgAAAA+AAAAQwAAAAUBAAAAZgAAAD4AAABDAAAABgAAAABmAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAPgAAAEMAAAAHAQAAAGYAAAAAAMAyAAAAAAAAwAgAAAAAAAAAAABsEAAAAAAAAQAAAAIAAAAIAAAAagAAAAMgY20CAAAAawAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAA4AAAARAAAAAQAAAABuAAAAAAEQAAABAAEAAAAOAT#wAAAAAAAAAAAAAgAAAABuAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABvAAAAAwEAAABuAAAAAAAQAAABAAEAAAAOAAAAEQAAAAQAAAAAbgAEYW5nJwAAAHAAAAAOAAAAEQAAAAUBAAAAbgAAAA4AAAARAAAABgAAAABuAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADgAAABEAAAAHAQAAAG4AAAAAAMA2AAAAAAAAQDQAAAAAAAAAAAB0EAAAAAAAAQAAAAIAAAAIAAAAcgAAAAMgY20CAAAAcwAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAB8AAAAcAAAAAQAAAAB2AAAAAAEQAAABAAEAAAAfAT#wAAAAAAAAAAAAAgAAAAB2AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAB3AAAAAwEAAAB2AAAAAAAQAAABAAEAAAAfAAAAHAAAAAQAAAAAdgAEYW5nJwAAAHgAAAAfAAAAHAAAAAUBAAAAdgAAAB8AAAAcAAAABgAAAAB2AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHwAAABwAAAAHAQAAAHYAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAAB8EAAAAAAAAQAAAAIAAAAIAAAAegAAAAMgY20CAAAAewAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAMAAAACAAAAAgAAADgAAAA7AAAAAQAAAAB+AAAAAAEQAAABAAEAAAA4AT#wAAAAAAAAAAAAAgAAAAB+AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAB#AAAAAwEAAAB+AAAAAAAQAAABAAEAAAA4AAAAOwAAAAQAAAAAfgAEYW5nJwAAAIAAAAA4AAAAOwAAAAUBAAAAfgAAADgAAAA7AAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAOwAAADgAAAABAAAAAIQAAAAAARAAAAEAAQAAADsBP#AAAAAAAAAAAAACAAAAAIQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAIUAAAADAQAAAIQAAAAAABAAAAEAAQAAADsAAAA4AAAABAAAAACEAARhbmcnAAAAhgAAADsAAAA4AAAABQEAAACEAAAAOwAAADgAAAAGAAAAAIQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA7AAAAOAAAAAcBAAAAhAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAIoQAAAAAAABAAAAAgAAAAgAAACIAAAAAyBjbQIAAACJAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEQAAABgAAAABAAAAAIwAAAAAARAAAAEAAQAAABEBP#AAAAAAAAAAAAACAAAAAIwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAI0AAAADAQAAAIwAAAAAABAAAAEAAQAAABEAAAAYAAAABAAAAACMAARhbmcnAAAAjgAAABEAAAAYAAAABQEAAACMAAAAEQAAABgAAAAGAAAAAIwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAGAAAAAcBAAAAjAAAAAAAQBQAAAAAAABAMwAAAAAAAAAAAJIQAAAAAAABAAAAAgAAAAgAAACQAAAAAyBjbQEAAACRAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAADgAAABgAAAABAAAAAJQAAAAAARAAAAEAAQAAAA4BP#AAAAAAAAAAAAACAAAAAJQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJUAAAADAQAAAJQAAAAAABAAAAEAAQAAAA4AAAAYAAAABAAAAACUAARhbmcnAAAAlgAAAA4AAAAYAAAABQEAAACUAAAADgAAABgAAAAGAAAAAJQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAOAAAAGAAAAAcBAAAAlAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAJoQAAAAAAABAAAAAgAAAAgAAACYAAAAAyBjbQEAAACZAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAJgAAAB8AAAABAAAAAJwAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAJwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJ0AAAADAQAAAJwAAAAAABAAAAEAAQAAACYAAAAfAAAABAAAAACcAARhbmcnAAAAngAAACYAAAAfAAAABQEAAACcAAAAJgAAAB8AAAAGAAAAAJwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAHwAAAAcBAAAAnAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAKIQAAAAAAABAAAAAgAAAAgAAACgAAAAAyBjbQEAAAChAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAJgAAABwAAAABAAAAAKQAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAKQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAKUAAAADAQAAAKQAAAAAABAAAAEAAQAAACYAAAAcAAAABAAAAACkAARhbmcnAAAApgAAACYAAAAcAAAABQEAAACkAAAAJgAAABwAAAAGAAAAAKQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAHAAAAAcBAAAApAAAAAAAQAgAAAAAAABAMwAAAAAAAAAAAKoQAAAAAAABAAAAAgAAAAgAAACoAAAAAyBjbQEAAACpAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAIAAAACAAAAJgAAACEAAAABAAAAAKwAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAKwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAK0AAAAEAAAAAKwABGFuZycAAACuAAAAJgAAACEAAAAFAQAAAKwAAAAmAAAAIQAAAAYAAAAArAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAhAAAABwEAAACsAAAAAABALgAAAAAAAEAmAAAAAAAAAAAAsRAAAAAAAAEAAAACAAAACAAAAK8AAAADIGNtAQAAALAAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAABDAAAAOwAAAAEAAAAAswAAAAABEAAAAQABAAAAQwE#8AAAAAAAAAAAAAIAAAAAswAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAtAAAAAMBAAAAswAAAAAAEAAAAQABAAAAQwAAADsAAAAEAAAAALMABGFuZycAAAC1AAAAQwAAADsAAAAFAQAAALMAAABDAAAAOwAAAAYAAAAAswAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEMAAAA7AAAABwEAAACzAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAuRAAAAAAAAEAAAACAAAACAAAALcAAAADIGNtAQAAALgAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAABDAAAAOAAAAAEAAAAAuwAAAAABEAAAAQABAAAAQwE#8AAAAAAAAAAAAAIAAAAAuwAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAvAAAAAMBAAAAuwAAAAAAEAAAAQABAAAAQwAAADgAAAAEAAAAALsABGFuZycAAAC9AAAAQwAAADgAAAAFAQAAALsAAABDAAAAOAAAAAYAAAAAuwAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEMAAAA4AAAABwEAAAC7AAAAAABAKAAAAAAAAEAsAAAAAAAAAAAAwRAAAAAAAAEAAAACAAAACAAAAL8AAAADIGNtAQAAAMAAAAAH##########8=";
    }
    let texte_corr = `$\\mathcal{A}_{ABC}=\\dfrac{1}{2}\\times AB\\times HC=\\dfrac{1}{2}\\times${c1}~\\text{cm}\\times ${h1}~\\text{cm}=${tex_nombre(
      Algebrite.eval((c1 * h1) / 2)
    )}~\\text{cm}^2$`;
    texte_corr += "<br>";
    texte_corr += `$\\mathcal{A}_{DEF}=\\dfrac{1}{2}\\times DE\\times GF=\\dfrac{1}{2}\\times${c2}~\\text{cm}\\times ${h2}~\\text{cm}=${tex_nombre(
      Algebrite.eval((c2 * h2) / 2)
    )}~\\text{cm}^2$`;
    texte_corr += "<br>";
    texte_corr += `$\\mathcal{A}_{ABC}=\\dfrac{1}{2}\\times MN\\times IO=\\dfrac{1}{2}\\times${c3}~\\text{cm}\\times ${h3}~\\text{cm}=${tex_nombre(
      Algebrite.eval((c3 * h3) / 2)
    )}~\\text{cm}^2$`;

    this.MG32codeBase64 = codeBase64;
    this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c1", "${c1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c2", "${c2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c3", "${c3}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h1", "${h1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h2", "${h2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h3", "${h3}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      `;

    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this);
  };
}
