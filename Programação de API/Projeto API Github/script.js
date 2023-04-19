function busca(){
    var nomePerfil = document.getElementById('nomePerfil').value
    var infoPerfil = document.getElementById('infoPerfil')
    var url = `https://api.github.com/users/${nomePerfil}`

    fetch(url)
    //usando arrow functions
    .then (res => res.json())
    .then(data => {
        avatar = data.avatar_url;
        nome = data.name;
        usuario = data.login;
        seguidores = data.followers;
        seguindo = data.following;
        repos = data.repos;
    
        infoPerfil.innerHTML = `
        <h1>${usuario}</h1>
        <img style="margin: 30px; border-radius: 100px; height: 200px; width: 200px" src='${avatar}' >
        <p>Nome: ${nome}</p>
        <p>Seguidores: ${seguidores}</p>
        <p>Seguindo: ${seguindo}</p>
        `
    });

}