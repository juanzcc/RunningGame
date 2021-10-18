
var character = document.getElementById("character") // pegando o id no html
var block = document.getElementById("block") 


function jump() { //funçao para o character pular 
    character.style.backgroundImage = "url('img/jump.png')" //muda a sprite para a de pulo
    if(character.classList != "animate") { //para que não possa spammar o pulo
        character.classList.add("animate") //adicionando a animação de pulo    
    }
    setTimeout(function(){
        character.classList.remove("animate") //tirando a animação para poder usar denovo
        character.style.backgroundImage = "url('img/idle.png')" 
    }, 500) //para que possa pular denovo depois de 500ms
}

//para verificar se morreu no jogo
var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")) //para verificar a posição atual do character
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")) //verificar a posição atual do block
    if(blockLeft <35 && blockLeft>0 && characterTop>=130){ //caso sejam atendidas as condiçõs o block e o character se chocaram
        block.style.animation = "none" //para tirar a animação do block
        block.style.display = "none"
        alert("Você Perdeu")
        document.location.reload(true);
    }
    
}, 10)
