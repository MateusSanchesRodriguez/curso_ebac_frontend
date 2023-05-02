$(document).ready(function () {
    $("#cpf").mask("000.000.000-00");
    $("#telefone").mask("(00) 0000-0000")
    $("#cep").mask("00000-000")

    $("form").validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira nome completo",
            endereço: "Por favor, insira endereço completo",
        },
        errorClass: "invalid",

    })   
})