let amigo = {nome: "Jorge",
sexo: 'M',
peso: 85, 
engordar (p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)