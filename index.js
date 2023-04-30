$(document).ready(function () { 


    $("form").on("submit",function (e) {
        e.preventDefault();
        const valTarefa = $("#nome_tarefas").val();
        const novaTarefa = $("<li class></li>").text(valTarefa)
        $(novaTarefa).appendTo("ul");
    })

    $("ul").on("click", "li", function () {
        $(this).css({
            "text-decoration": "line-through"
        })
    })


})
