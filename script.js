let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando")
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    //Carnes
    let picanha = picanhaPP(duracao)
    let linguica = linguicaPP(duracao)
    let frango = frangoPP(duracao)

    //Bebidas
    let cerveja = cervejaPP(duracao)
    let refrigerante = refrigerantePP(duracao)
    let agua = aguaPP(duracao)

    //Quantidade de carne
    let qdtTotalPicanha = picanha * adultos + (picanha / 2 * criancas)
    let qdtTotalLinguica = linguica * adultos + (linguica / 2 * criancas)
    let qdtTotalFrango = frango * adultos + (frango / 2 * criancas)

    //Quantidade de bebida
    let qdtTotalCerveja = cerveja * adultos
    let qdtTotalRefri = refrigerante * adultos + (refrigerante / 2 * criancas)
    let qdtTotalAgua = agua * adultos + (agua / 2 * criancas)

    //Resultados das carnes
    resultado.innerHTML = `<br> <p><i class="fa-solid fa-drumstick-bite"></i> ${qdtTotalPicanha / 1000} Kg de Picanha</p>`
    resultado.innerHTML += `<p><i class="fa-solid fa-egg"></i> ${qdtTotalLinguica / 1000} Kg de Linguiça</p>`
    resultado.innerHTML += `<p><i class="fa-solid fa-piggy-bank"></i> ${qdtTotalFrango / 1000} Kg de Frango</p> <br>`

    //Resultados das bebidas
    resultado.innerHTML += `<p><i class="fa-solid fa-beer-mug-empty"></i> ${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p><i class="fa-solid fa-bottle-water"></i> ${Math.ceil(qdtTotalRefri / 2000)} Garrafas de Refrigerante</p>`
    resultado.innerHTML += `<p><i class="fa-solid fa-bottle-water"></i> ${Math.ceil(qdtTotalAgua / 2000)} Garrafas de Água</p> <br>`
}

//Ingredientes

function picanhaPP(duracao) {
    if (duracao >= 6) {
        return 200
    } else {
        return 300
    }
}

function linguicaPP(duracao) {
    if (duracao >= 6) {
        return 100
    } else {
        return 200
    }
}

function frangoPP(duracao) {
    if (duracao >= 6) {
        return 200
    } else {
        return 300
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2200
    } else {
        return 1400
    }
}

function refrigerantePP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}

function aguaPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}

