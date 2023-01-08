var agora = new Date() //
var hora = agora.getHours() 

console.log(`Agora são ${hora} horas!`)
if (hora >= 7 ){
    console.log('Bom dia')
}else if (hora >= 12){
    console.log('Boa tarde')
}else if (hora >= 18){
    console.log('Boa noite')
}else if (hora >= 1){
    console.log('Boa madrugada')
}