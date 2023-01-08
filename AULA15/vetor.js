let valores = [8,1,7,4,9]
valores.sort()
 //console.log(valores)
 
 /* console.log(valores[0])
    console.log(valores[1])
    console.log(valores[2])
    console.log(valores[3])
    console.log(valores[4]) 

// DUAS FORMAS DE ESCREVER ABAIXO    

for(let pos = 0; pos < valores.length; pos++){ // Usando o FOR até mostrar todos os elementos
    console.log(`O valor da posição ${pos} é ${valores[pos]}`)
}    */


for(let pos in valores){ // Usando o FOR até mostrar todos os elementos
    console.log(`O valor da posição ${pos} é ${valores[pos]}`)
}


