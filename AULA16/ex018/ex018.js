let num  = window.document.querySelector('input#txtn1')
let lista = window.document.querySelector('select#agrupamento')
let res = window.document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML=' '
    }else {
        window.alert(`Valor invalido, ou a encontrado na lista`)
    }

    num.value = ''// deixar a caixa de texto, numero etc.. vazia
    num.focus()
   
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Nenhum valor inserido')
    }else{
        let tot = (valores.length)
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos]> maior){ // para descobrir qual número é maior
                maior = valores[pos]
            }
            if(valores[pos] < menor){ //para descobrir qual número é menor
                menor = valores[pos]
            }


        }
        média = soma/tot
        res.innerHTML = ' '
        res.innerHTML += `<p>Tem ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior número é ${maior}</p>`
        res.innerHTML += `<p> O menor número é ${menor}</p>`
        res.innerHTML += `<p> A soma de todos os números é ${soma}</p>`
        res.innerHTML += `<p> A média é ${média}`
        
    }
    

} 