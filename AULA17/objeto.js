let amigo = {nome: 'João',
sexo: 'M', 
peso: 85.4,
 engordar(p=0){
    console.log('Engordou')
    this.peso += p

    }
 }
 amigo.engordar(4)
 console.log(`O peso de ${amigo.nome} é ${amigo.peso} Kg`)