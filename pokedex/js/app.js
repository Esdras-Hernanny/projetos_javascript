// variáveis globais
const find = document.querySelector('#find') // Para pesquisas no input
const progressBar = document.getElementsByTagName('progress')

// variáveis para o Card Final
const pokemonWrapper = document.querySelector('#pokemon_wrapper')
const pokemonName = document.querySelector('.pokemon_name')

// variáveis que guardam o valor dos status do pokémon
const pokemonDropStatHp = document.querySelector('.pokemon_drop_stat_hp')
const pokemonDropStatAttack = document.querySelector('.pokemon_drop_stat_atk')
const pokemonDropStatDefense = document.querySelector('.pokemon_drop_stat_def')
const pokemonDropStatSpeAtk = document.querySelector('.pokemon_drop_stat_spe_atk')
const pokemonDropStatSpeDef = document.querySelector('.pokemon_drop_stat_spe_def')
const pokemonDropStatSpeed = document.querySelector('.pokemon_drop_stat_speed')

// variáveis que guardam os valores das barras de progresso
const pokemonHp = document.querySelector('#pokemonHp')
const pokemonAtk = document.querySelector('#pokemonAtk')
const pokemonDef = document.querySelector('#pokemonDef')
const pokemonSpeAtk = document.querySelector('#pokemonSpeAtk')
const pokemonSpeDef = document.querySelector('#pokemonSpeDef')
const pokemonSpeed = document.querySelector('#pokemonSpeed')

//Função que retorna o pokemon pesquisado

find.addEventListener('click', () => {
    pokemonWrapper.classList.add('animate__backInLeft')
    let search = document.querySelector('#search').value
    let img = document.querySelector('#img')

    let url = "https://pokeapi.co/api/v2/pokemon/"+search.toLowerCase()
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            let response = JSON.parse(xhr.responseText)

            //RETORNA UM XPATH PARA A IMG NO DOM
            img.src = response.sprites.other.dream_world.front_default

            //RETORNA O NOME DO POKÉMON NO FINAL CARD
            pokemonName.innerHTML = response.name
            
            //RETORNA OS STATUS DO POKÉMON NO FINAL CARD
            pokemonHp.value = response.stats[0].base_stat
            pokemonAtk.value = response.stats[1].base_stat
            pokemonDef.value = response.stats[2].base_stat
            pokemonSpeAtk.value = response.stats[3].base_stat
            pokemonSpeDef.value = response.stats[4].base_stat
            pokemonSpeed.value = response.stats[5].base_stat

            //RETORNA OS STATUS EM NÚMEROS PARA O SPAN NO FINAL CARD
            pokemonDropStatHp.innerHTML = response.stats[0].base_stat
            pokemonDropStatAttack.innerHTML = response.stats[1].base_stat
            pokemonDropStatDefense.innerHTML = response.stats[2].base_stat
            pokemonDropStatSpeAtk.innerHTML = response.stats[3].base_stat
            pokemonDropStatSpeDef.innerHTML = response.stats[4].base_stat
            pokemonDropStatSpeed.innerHTML = response.stats[5].base_stat
        }
    }
    xhr.open("GET", url)
    xhr.send()
})
