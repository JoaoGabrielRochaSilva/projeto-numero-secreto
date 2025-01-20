var bot = document.getElementsByClassName('botao')[0]
var res = document.getElementsByClassName('resultado')[0]
bot.addEventListener('click', iniciou)

function iniciou() {
   alert('Bem-vindo ao jogo do Número Secreto')
   var numeroSecreto = Math.trunc(Math.random() * 100)
   var tentativas = 1
   console.log(numeroSecreto)

   //verifica se é um número entre 1 e 100
   function EumNumero(n) {
    if (n >= 0 && n <= 100) {
        return true
    } else {
        return false
    }
   }     

    for ( tentativas ; numeroDigitado != numeroSecreto ; tentativas++ ) {
        var numeroDigitado = prompt('Digite um número entre 1 e 100:')

        //verifica se o usuário digitou algo errado
        if (!EumNumero(Number(numeroDigitado)) || numeroDigitado.length == 0) {
            if (numeroDigitado.length == 0) {
                alert('Por Favor digite um número!!!')
            } else {
                alert('Por Favor digite um número entre 1 e 100!!!')
            }
        //verifica se o usuário acertou o número
        } else {
            numeroDigitado = Number(numeroDigitado)
            if (numeroDigitado < numeroSecreto) {
                alert(`O número secreto é maior que ${numeroDigitado}`)
            } else if (numeroDigitado > numeroSecreto) {
                alert(`O número secreto é menor que ${numeroDigitado}`)
            } else if (numeroDigitado == numeroSecreto) {
            alert(`Parabens você acertou o Número Secreto que é ${numeroSecreto}`)
            res.innerHTML = ('<h2>Você acertou !!!</h2>')
            let intem1 = document.createElement('p')
            let intem2 = document.createElement('p')
            let intem3 = document.createElement('p')
            let plural = ''
            tentativas == 1? plural = 'tentativa' : plural = 'tentativas'

            intem1.innerHTML = (`<strong>-</strong>O <strong>número secreto é ${numeroSecreto}</strong>`)
            intem2.innerHTML = (`<strong>-</strong>Você acertou o número secreto com <strong>${tentativas} ${plural}</strong>`)
            intem3.innerHTML = ('<strong>-Clique no botão para jogar novamente</strong>')

            res.appendChild(intem1)
            res.appendChild(intem2)
            res.appendChild(intem3)
            } 
        } 
    }
}