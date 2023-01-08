function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número valido')
    }else{
        let n = Number (num.value)
        let c = 1
        tab.innerHTML = ' ' //para limpar a tabela quando colocar um novo numero
        while (c <= 10){
            let item = window.document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //  no java script nao precisa!
            tab.appendChild(item)
            c++
        }
    }
}