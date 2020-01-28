$(() => {
    $("#tipoButton").click( e => {
        var tipo = $("#tipoPesq").val()
        $("#tipoPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:5004/eventos?tipo=" + tipo,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:5004/eventos?tipo=" + tipo
            },
            error: e => console.log('Erro na pesquisa dos eventos por tipo: ' + e)
        })
    })
})