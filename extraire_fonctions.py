import re

fichier=open('./modules/outils.js','r')
 
mesFonctions = ""
for line in fichier:
    fn= re.findall("function\s([a-zA-Z0-9\_]*)",line)
    #On recherche tout ce qui commence par `function (`
    for fns in fn:
        if len(fns) >1:
            mesFonctions += fns +','
print(mesFonctions)