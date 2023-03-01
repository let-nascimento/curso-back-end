var idade;
var total;
var nome;
inicio()
function inicio(){
    var nome = prompt("digite seu nome")
    var idade = Number.parseInt(prompt(`Olá ${nome}! quantos anos você têm?`))
    var total = idade * 365
    alert(`Você já viveu ${total} dias`)
}
