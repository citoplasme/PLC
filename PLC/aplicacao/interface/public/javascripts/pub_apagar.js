function removePublicacao(ident){
    console.log('Apagando a publicacao ' + ident)
    axios.delete('/publicacoes/' + ident)
        .then(response=> window.location.assign('/publicacoes'))
        .catch(error => console.log(error))
}