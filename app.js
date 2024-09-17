/**
 * Simulador de Operadores Lógicos
 * @author Saulo Gomes
 */

// atualizar automaticamente o ano no rodapé.


// lógica para quebrar a lamapada

//variaveis
let recive // variavel que armazena o valor recebido pela função 
// usada na lógica para ligar e desligar as chaves e também acender ou apagar as lampadas
let sw1 = false 
let sw2 = false 

let identify = window.location.pathname // variavel para capturar a página HTML

//variavel para identificar a quebra da lampada
let broken = false

function sw(recive) {
    // console.log(recive) // apoio da lógica (teste da função)

    // lógica das chaves

    if (recive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if (recive === 1 && sw1 === true){
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    
    } else if (recive === 2 && sw2 === false)  {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    } else if(recive === 2 && sw2 === true){
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }


    // lógica para quebrar a lamapda
    if (recive === 3) {
        //reproduzindo audio no JS
        let beep = new Audio()
        beep.src = "glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "img/broken.jpg"
        broken = true


    }
    // ATENÇÃO: No GitHube acrescentear o nome do repositório  antes da página nas estruturas abaixo EX: no lugar de and.html
    // lógica do operador and 
    if(identify === '/simulador2/and.html' && broken !== true){
        if (sw1 === true && sw2 === true){
            document.getElementById('lamp').src = "img/on.jpg"
        } else{
            document.getElementById('lamp').src = "img/off.jpg"
        }
    } 

       // lógica do operador or 
       if(identify === '/simulador2/or.html' && broken !== true){
        if (sw1 === true || sw2 === true){
            document.getElementById('lamp').src = "img/on.jpg"
        } else{
            document.getElementById('lamp').src = "img/off.jpg"
        }
    } 

      // lógica do operador not 
      if(identify === '/simulador2/not.html' && broken !== true){
        if (!sw1){ // ! Inverte o valor da chave
            document.getElementById('lamp').src = "img/on.jpg"
        } else{
            document.getElementById('lamp').src = "img/off.jpg"
        }
    } 

    
}





// Lógica para Atualizar o ano automaticamente

let ano = document.getElementById('CopyrirghtYear') // variavel criada para poder capturar o elemento id ( linha com o elemento), para mostrar ano
let anoAtual = new Date().getFullYear() // linha criada para poder usar os métodos e criação de objetos
ano.textContent = anoAtual // linha criada para poder mostrar o ano atual 
