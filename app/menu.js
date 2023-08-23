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

/*Msg*/

function msgEnviar(){
  
    var msg = document.getElementById('tMsg').value
    var nome = document.getElementById('nNome').value
    var tele = document.getElementById('tTelefone').value
    var email = document.getElementById('tMail').value
  
    if(msg =='' || nome =='' || tele == '' || email == ''){
      alert('FALTA DADOS')
    } else{
      var my_text = `Mensagem do usuario Gage %0A %0A  ${msg} %0A %0A Nome: ${nome} %0A %0A Telefone: ${tele} %0A %0A Email: ${email}`
  
    var token = "5101167923:AAHY984g_xsMRbz-m2Bvyz-N_lAgWXBVhwE";
    var chat_id = -1001247274051
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
  
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  
    alert('Mensagem enviada!')
    }
  }