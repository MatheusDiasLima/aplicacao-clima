let chave = "3d8904a97d7c6f86cad30971e2f7777e"

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".tempo-cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".condicao-clima").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric"
    ).then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao() {
    let cidade = document.querySelector(".barra-pesquisa").value

    buscarCidade(cidade)
}