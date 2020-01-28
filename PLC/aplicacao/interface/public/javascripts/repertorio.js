$(document).ready(function(){
    var addButton = $('.add_button') 
    var wrapper = $('.field_wrapper')
    //código adicionado depois de clicar no botão +
    var fieldHTML = '<div class="w3-row w3-section w3-panel">'
    fieldHTML += '<div class=\"w3-col w3-margin-top\" style=\"width:6%\"><i class=\"w3-xxlarge w3-center fas fa-hashtag\" style=\"color:#c0b283\"/></div><div class=\"w3-col w3-margin-top\" style=\"width:91%\"><input class=\"w3-input w3-border\" type=\'text\' name=\'tags\' placeholder=\'Palavra-Chave\'/></div>'
    fieldHTML += '<a href="javascript:void(0);" class="remove_button" style="margin-left:0%;"><span><i class="w3-large w3-right fa fa-minus-square" style="color:#373737"/></span></a></div>'
    
    $(addButton).click(function(){
        $(wrapper).append(fieldHTML)
    })
    
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault()
        $(this).parent('div').remove() //remover o código que foi adicionado, ao clicar no botão -
    })
})

$(document).ready(function(){
    var addbutton = $('.addbutton') 
    var fieldwrapper = $('.fieldwrapper')
    //código adicionado depois de clicar no botão + na edição
    var fieldHTML = '<div class="w3-row w3-section">'
    fieldHTML += '<div class=\"w3-col\" style=\"width:11%\"><i class=\"w3-xxlarge w3-center fas fa-hashtag\" style=\"color:#c0b283\"/></div><div class=\"w3-col\" style=\"width:80%\"><input class=\"w3-input w3-border\" type=\'text\' name=\'tags\' placeholder=\'Palavra-Chave\'/></div>'
    fieldHTML += '<a href="javascript:void(0);" class="removebutton" style="margin-left:0%;"><span><i class="w3-large w3-right fa fa-minus-square" style="color:#373737"/></span></a></div>'

    $(addbutton).click(function(){
        $(fieldwrapper).append(fieldHTML)
    })
    
    $(fieldwrapper).on('click', '.removebutton', function(e){
        e.preventDefault()
        $(this).parent('div').remove() //remover o código que foi adicionado, ao clicar no botão -
    })
})

