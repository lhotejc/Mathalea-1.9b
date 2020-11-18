function afficheExercice(id){
    import(`./${id}.js`)
      .then((module) => {
        let monExercice = new module.default; // Récupère la fonction exporté par défaut du module
        monExercice.nouvelle_version()
        document.getElementById('divExercice').innerHTML=monExercice.contenu
      });
}

document.getElementById('button1').onclick = function(){
    afficheExercice('6C10')
}

document.getElementById('button2').onclick = function(){
    afficheExercice('6CM01')
}

