const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

function aviso(){
    window.location.assign("sevicos.html")
}

function contato(){
    window.location.assign("contatos.html")
}

function abreredessociais(){
    redes.style.display='block'
}

function fecharredes(){
    redes.style.display='none'
}