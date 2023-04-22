function buscaEndereco() {
    var nome = document.getElementById("nome").value
    var cep = document.getElementById("cep").value
    var dados = document.getElementById("dados")
    var url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            rua = data.logradouro
            bairro = data.bairro
            cidade = data.localidade
            estado =  data.uf
            pais = "Brasil"

            dados.innerHTML = `
            <h3>${nome}, ${cep}</h3>
            <p>Rua: ${rua}</p>
            <p>Bairro: ${bairro}</p>
            <p>Cidade: ${cidade}</p>
            <p>Estado: ${estado}</p>
            <p>País: ${pais}</p>
            `
        })
    }
 