const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault() //evita que a página recarregue, assim conseguindo continuar as ações

    // Pegando os valores entregues ao usuário
    const peso = document.getElementById('weight').value
    const altura = document.getElementById('height').value

    const IMC = (peso / (altura * altura)).toFixed(2) //deixando apenas duas casas decimais

    const value = document.getElementById('value') 
    let descript = '' //variavel vazia para colocar a descrição dependendo da necessidade

    value.classList.add('attention') // deixando todos vermelhos ao adicionar essa class

    document.getElementById('infos').classList.remove('hidden') //Mostrando a div do resultado ao remover a classe
    document.getElementById('reset').classList.remove('hidden') //Mostra o botão de reset (limpar a página)

    if (IMC < 18.5) {
        descript = 'Cuidado! Você está abaixo do peso ideal!'
    } else if (IMC > 18.5 && IMC<= 25) {
        descript = ' Você está no peso ideal!'
        value.classList.remove('attention')
        value.classList.add('normal') //deixando verde
    } else if (IMC> 25 && IMC <30) {
        descript = 'Cuidado! Você está com sobrepeso!'
    } else if (IMC > 30 && IMC <35) {
        descript = 'Cuidado! Você está com obesidade moderada!'
    } else if (IMC > 35 && IMC <40) {
        descript = 'Cuidado! Você está com obesidade severa!'
    } else {
        descript = 'Cuidado! Você está com obesidade morbida!'
    }

    value.textContent = IMC
    document.getElementById('description').textContent = descript
})

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('infos').classList.add('hidden') //Escondendo a div do resultado ao remover a classe
    document.getElementById('reset').classList.add('hidden') //Escondendo o botão de reset
    // Resetando os valores dos inputs manualmente
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
})
