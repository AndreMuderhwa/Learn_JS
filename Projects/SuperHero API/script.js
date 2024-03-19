
const SUPERHERO_TOKEN='1170413181040319'
const BASE_URL=`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const buttonNewHero=document.getElementById('buttonNewHero')
const heroImageDiv=document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput=document.getElementById('searchInput')


const getSuperHero =(id, name)=>{
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
       showHeroInfo(json)
    })

}


const showHeroInfo=(character)=>{
    const name=`<h2>${character.name}</h2>`
    const img=`<img src="${character.image.url}" height=200 width=200/>`

   const stats = Object.keys(character.powerstats).map(stat =>{
        return `<p>${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
    }).join('')
    //console.log(stats.join(''))
    heroImageDiv.innerHTML=`${name}${img}${stats}`
    
}



const getSearchSuperHero=(name)=>{
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json =>{
        const hero = json.results[0]
        console.log(hero)
       // console.log(searchInput.value)
        // heroImageDiv.innerHTML=`<img src="${hero.image.url}" height=200 width=200/>`
        showHeroInfo(hero)

    })
}
const randomHero =()=>{
    const numberHero= 731
    return Math.floor(Math.random() * numberHero)+1
}


buttonNewHero.onclick=()=>getSuperHero(randomHero())
searchButton.onclick=()=>getSearchSuperHero(searchInput.value)


 