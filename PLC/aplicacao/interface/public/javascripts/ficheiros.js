$(document).ready(function(){
    var addButton = $('.add_button') 
    var wrapper = $('.field_wrapper')
    //código adicionado depois de clicar no botão +
    var fieldHTML = '<div class="w3-row w3-section w3-panel">'
    fieldHTML += '<div class=\"w3-col w3-margin-top\" style=\"width:6%\"><i class=\"w3-xxlarge w3-center fas fa-file-text\" style=\"color:#c0b283\"/></div><div class=\"w3-col w3-margin-top\" style=\"width:91%\"><input class=\"w3-input w3-border\" type=\'file\' name=\'ficheiro\' /></div>'
    fieldHTML += '<div class=\"w3-col w3-margin-top\" style=\"width:6%\"><i class=\"w3-xxlarge w3-center fas fa-book-open\" style=\"color:#c0b283\"/></div><div class=\"w3-col w3-margin-top\" style=\"width:91%\"><input class=\"w3-input w3-border\" type=\'text\' name=\'uc\' placeholder=\'Unidade Curricular\'/></div>'
    fieldHTML += '<div class=\"w3-col w3-margin-top\" style=\"width:6%\"><i class=\"w3-xxlarge w3-center fas fa-pen\" style=\"color:#c0b283\"/></div><div class=\"w3-col w3-margin-top\" style=\"width:91%\"><select class=\"w3-select w3-border\" name=\"tipo\"><option value=\"Teste\">Teste</option><option value=\"Ficha\">Ficha</option><option value=\"Teoria\">Teoria</option><option value=\"Outro\">Outro</option></select></div>'
    fieldHTML += '<a href="javascript:void(0);" class="remove_button" style="margin-left:0%;"><span><i class="w3-large w3-right fa fa-minus-square" style="color:#373737"/></span></a></div>'
    
    $(addButton).click(function(){
        $(wrapper).append(fieldHTML)
    })
    
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault()
        $(this).parent('div').remove() //remover o código que foi adicionado, ao clicar no botão -
    })
})


