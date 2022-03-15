
var sorteados = []
var pessoas

function sortear(){
    const itens = document.getElementById("txtItens").value
    pessoas = itens.split("\n") 

    var filtrado = pessoas.filter((p) => {
        return p != ""
    })

    pessoas = filtrado

    if(pessoas.length > 1){
        var sorteado = pessoas[parseInt(Math.random() * pessoas.length)]
        document.getElementById("resultado").innerHTML = sorteado
        sorteados.push(pessoas.splice(pessoas.indexOf(sorteado),1))
        document.getElementById("listaSorteados").innerHTML += "<li>"+sorteado+"</li>"  
        
        console.log(pessoas)

        document.getElementById("txtItens").value = ""
        for (const p of pessoas) {
            if(p != '')
                document.getElementById("txtItens").value += p + `\n`
        }
    }
}

