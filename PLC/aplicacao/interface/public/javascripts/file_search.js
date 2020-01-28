$(() => {
    $("#ucButton").click( e => {
        var uc = $("#ucPesq").val()
        $("#ucPesq").val('')
        $.ajax({
            type: "GET",
            url: "http://localhost:5004/ficheiros?uc=" + uc,
            success: result => {
                console.log(result)
                window.location.href="http://localhost:5004/ficheiros?uc=" + uc
            },
            error: e => console.log('Erro na pesquisa dos ficheiros por UC: ' + e)
        })
    })
})