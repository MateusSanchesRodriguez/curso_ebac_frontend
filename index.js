// colocar no github exercicio_html_js_validacao

const numeroB = document.getElementById("numeroB")
const numeroA = document.getElementById("numeroA")
const form = document.getElementById("form")


numeroB.addEventListener('keyup', function (e) {
    if (e.target.value <= numeroA.value) {
        numeroB.classList.add("error")
        document.getElementById("msg_error").style.display = "block";
    } else {
        numeroB.classList.remove("error")
        document.getElementById("msg_error").style.display = "none";
    }
})

numeroA.addEventListener('keyup', function (e) {
    console.log(e.target.value)
    if (e.target.value < numeroB.value) {
        numeroB.classList.remove("error")
        document.getElementById("msg_error").style.display = "none";
    } else if(numeroB.value != "") {
        numeroB.classList.add("error")
        document.getElementById("msg_error").style.display = "block";
    }
})


function validaNumB(numeroA,numeroB) {
    if (numeroB > numeroA) {
        return true
    }else {
        return false
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (validaNumB(numeroA.value,numeroB.value)) {
        document.getElementById("msg_sucesso").style.display = "block";
        console.log("teste")
    } else {
        
    }

})