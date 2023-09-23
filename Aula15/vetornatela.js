let valores = [3, 5, 7, 1, 8, 4]
valores.sort()
console.log(valores)

/*
for (let pos=0; pos < valores.length; pos++){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
