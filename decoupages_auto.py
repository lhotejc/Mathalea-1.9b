#!/usr/bin/python3
#-*- coding: utf8 -*-

import os
import re # Pour la gestion des expressions régulières
from collections import namedtuple # pour les tuples nommés

# Récupèrer toutes les références des exos dans include/mathalea_exercices.js dans un tableau
def getAllRefsClean():
    # Ouvrir le fichier
    allRefs = open('./include/mathalea_exercices.js','r')
    # Garder la partie du fichier avec les rérérences
    part = allRefs.readlines()[2:374] 
    # Tableau pour les références néttoyées
    allRefsClean = []    
    temp = []   
    # Suprimmer une partie des lignes
    for elt in part:        
        temp.append(elt.rstrip(',\n'))
    # Garder la référence qui se trouve entre les " "
    for elt in temp:
        allRefsClean.append(re.search('(\".+\")',elt).group().strip('\"'))
    # Fermer le fichier        
    allRefs.close()    
    return allRefsClean

# Récupérer seulement certaines références dans un tableau
# On passe un tableau en entrée
# CM,c3,6, 5, 4, 3, 2, 1,PE, P0 
def getAllRefsCleanNiv(niveaux):
    sortie = []
    # toutes les ref
    allRefsClean = getAllRefsClean()
    for ref in allRefsClean:
        #print(ref[0])
        for niv in niveaux:
            #print(niv)
            if ref[0] == niv or (ref[0]==niv[0] and ref[1]==niv[1]):
                sortie.append(ref)
    return sortie

# Récupérer toutes les ref des exos déjà traités pour un niveau dans un tableau
# On passe une chaine 1e,2e,3e,4e,5e,6e,PE,Profs,...
def getAllRefsAlreadyClean(niveau):
    path = './exercices/'+niveau
    allRefsAlreadyClean = []
    # Récupérer les noms des fichiers déjà présents dans le dossier
    if os.path.exists(path):
        allRefsAlready = os.listdir(path)
        # Nettoyer les chaines de .js
        for elt in allRefsAlready:
            allRefsAlreadyClean.append(elt.replace(".js",""))
    return allRefsAlreadyClean

# Récupérer le code d'un exercice pour un niveau dans une chaine
# On passe le numero de la ligne du début du scan, le chemin vers le fichier,
# le niveau et le nom du dossier contenant déjà la fichiers traités
# On renvoie le code et le numero de la ligne avant le second /**
# et la ref de l'exo s'il na pas était traité sinon chaine vide
# Dans un tableau
def getCodeEx(debut_du_scan,path_to_file,niv,nivAlready):    
    file = open(path_to_file,"r")
    content = file.readlines()[debut_du_scan:]
    compteur = 0
    tab=[]
    for line in content:
        compteur+=1
        if (len(tab)==2):            
            break
        if "/**" in line:
            tab.append(compteur)
    code = content[tab[0]-1:tab[1]-1]
    file.close()
    # On va récupérer la ref du code
    # on récupére toutes ref restant à traiter
    allRefsLeftClean = []
    allRefsAlreadyClean = getAllRefsAlreadyClean(nivAlready)
    allRefsCleanNiv = getAllRefsCleanNiv(niv)
    for ref in allRefsCleanNiv:
        if ref not in allRefsAlreadyClean:
            allRefsLeftClean.append(ref)
    # Initialiser reference à -1 pour pouvoir savoir si un axo est déjà traité ou non            
    reference = -1
    for elt in code:              
        for ref in allRefsLeftClean:            
            if elt.count(ref) == 1:
                reference = ref

    return [code,tab[1]-1,reference]
    # print(code)
    # print(tab)
        
if __name__ == '__main__':
    #print(getAllRefClean())
    #print(getAllRefCleanNiv(['6']))
    #print(getAllRefsAlreadyClean('Profs'))
    # deb = 0
    # print(getCodeEx(deb,"./include/mathalea_exercices.js"))
    # print("=======================================================================")
    # print("=======================================================================")
    # debsuiv=getCodeEx(deb,"./include/mathalea_exercices.js")[1]
    # print(getCodeEx(debsuiv,"./include/mathalea_exercices.js"))
    # print("=======================================================================")
    # print("=======================================================================")
    # debsuivsuiv=getCodeEx(deb,"./include/mathalea_exercices.js")[1]+getCodeEx(debsuiv,"./include/mathalea_exercices.js")[1]
    # print(getCodeEx(debsuivsuiv,"./include/mathalea_exercices.js"))
    print(getCodeEx(0,"./include/mathalea_exercices.js",['6'],'6e'))    
    #print(getCodeEx(710,"./include/mathalea_exercices.js",['6'],'6e'))    

    