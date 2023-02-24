
function carregar () {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var agora = data.getHours()
    
    msg.innerHTML = `Agora são ${agora} horas`
    
    if (agora >= 0 && agora < 12) {
        img.src = '/exercicios/ex01/img/manha.png'
        document.body.style.background = '#5CB5F0'

    } else if (agora >=12 && agora < 18) {
        img.src = '/exercicios/ex01/img/tarde.png'
        document.body.style.background = '#B27169'
    } else {
        img.src = '/exercicios/ex01/img/noite.png'
        document.body.style.background = '#1B3757'
    }

}

