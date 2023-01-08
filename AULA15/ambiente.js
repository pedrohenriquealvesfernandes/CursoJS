let num = [5,8,9,3] // forma para adicionar valores em uma variavel composta
//num [9] = 10  para adicionar um conteúdo(valor) em uma posição especifica
num.push(1) // tomar cuidado com a ordem
num.sort() // tomar cuidado com a ordem
console.log(num) // mostra com colchete
num.focus()//para direcionar automaticamente pra algum lugar que vc queira escrever dnv
console.log(`Tem ${num} elementos`) 
console.log(`O segundo valor do vetor é ${num[1]}`) //mostra uma posição especifica desejada
console.log(`O vetor tem ${num.length} posições`) //mostra a quantidade de elemntos
let pos = num.indexOf(5) // irá procurar se no vetor tem o valor desejado
if (pos == -1){  // caso retorne " -1 " NÃO foi encontrado o valor desejado
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}


