let n2 = prompt('Insira sua velocidade')

let multa = ((n2-80)*5)
if (n2>80){
    alert(`Atenção! Você está acima de 80km/h. A sua multa é de R$ ${multa}` )
} else{
    alert('Você não foi multado')
}
