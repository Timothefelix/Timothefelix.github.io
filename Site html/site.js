document.addEventListener('DOMContentLoaded', function(){
    let cursor=document.querySelector(".curseur")
    let cursorAvant=document.querySelector(".curseur-modif")
    document.addEventListener('mousemove',function(e){
        cursor.style.left=e.clientX+'px'
        cursor.style.top=e.clientY+'px'
        cursorAvant.style.left=e.clientX+'px'
        cursorAvant.style.top=e.clientY+'px'
    })
})
//Cette partie de JS me permet de modifier le comportement de l'élément faisant office de nouveau curseur

const btn = document.querySelector('.menu');
const sommaire = document.querySelector('nav');

btn.addEventListener('click', ()=>{
    if(sommaire.style.display == 'block'){
        sommaire.style.display = 'none';
    }
    else{
        sommaire.style.display = 'block';
    }
});
/*Le code ci-dessus me permet d'afficher ou non mon sommaire nav lorsqu'on clique sur le bouton "menu"
(cf: pagePrincipale)*/