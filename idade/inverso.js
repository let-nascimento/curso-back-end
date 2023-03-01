var inserir

exec()
function exec(){
    var inserir = prompt('insira valor em bololeano ou um número')
    if(typeof inserir == "number"){
        alert(`o inverso de ${inserir} é -${inserir}`)
    }if(typeof inserir == "boolean"){

    }if(typeof inserir == "string"){
        alert(`${inserir} é uma string`)
    }
}