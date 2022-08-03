// variáveis globais
const find = document.querySelector('#find')

//Função que retorna o pokemon pesquisado

find.addEventListener('click', () => {
    let search = document.querySelector('#search').value
    let img = document.querySelector('#img')

    let url = "https://pokeapi.co/api/v2/pokemon/"+search.toLowerCase()
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            let response = JSON.parse(xhr.responseText)
            console.log(response)

            //RETORNA UM XPATH PARA A IMG NO DOM
            img.src = response.sprites.front_default
        }
    }

    xhr.open("GET", url)
    xhr.send()
})
