let num = [2, 6, 7, 9]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}

