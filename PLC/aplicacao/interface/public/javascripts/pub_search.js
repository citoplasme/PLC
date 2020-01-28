$(() => {
    $("#tagButton").click( e => {
        var tag = $("#tagPesq").val()
        $("#tagPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:5004/publicacoes?tag=" + tag,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:5004/publicacoes?tag=" + tag
            },
            error: e => console.log('Erro na pesquisa das publicacoes por tag: ' + e)
        })
    })
})