
export default function Operation({operande1=1,operande2=2,type='addition'}){
    let code="",lmax
    let sop1=Number(operande1).toString()
    let sop2=Number(operande2).toString()
    let sresultat,lresultat,resultat
    let lop1=sop1.length
    let lop2=sop2.length

    switch (type) {
        case 'addition' : 
            resultat=operande1+operande2
            sresultat=Number(resultat).toString()
            lresultat=sresultat.length
            lmax=Math.max(lop1,lop2,lresultat)
            if (sortie_html) {
            code+=`<div id="operation" style ="position: static;"><br><hr style="display: block;
             margin-top: 1em; margin-bottom: 0.5em; width: ${(lmax+1)*10}px; position:absolute; top=45px"><br>`
            code+=`<div id="op1" style ="position:absolute; top:0px; left: ${10*(lmax+1-lop1)}px;">`
            for (let i=0;i<lop1;i++){

                code+=`<div id="op1-${i}" style ="position:absolute; left: ${i*10}px;">$${sop1[i]}$</div>`
            }
            code+=`</div>`
            code+=`<div id="op2" style ="position:absolute; top:15px;">`
            code+=`<div id="plus" style ="position:absolute;">$+$</div>`
            for (let i=0;i<lop2;i++){
                code+=`<div id="op2-${i}" style ="position:absolute; left: ${(lmax-lop2+i+1)*10}px;">$${sop2[i]}$</div>`
            }
            code+=`</div>`

            code+=`<div id="resultat" style ="position:absolute; top:40px; left: ${10*(lmax+1-lresultat)}px;">`
            for (let i=0;i<lresultat;i++){
                code+=`<div id="resultat-${i}" style ="position:absolute; left: ${i*10}px;">$${sresultat[i]}$</div>`
            }
            code+=`</div>`
            code+=`</div>`
            }
            else {
                code+= `$\\opadd{${a}}{${b}}$`
            }
        break
        case 'soustraction' : 

        break
        case 'multiplication' : 

        break
        case 'division' : 

        break
    }
    return code
} 