
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
        const name=`<h2>${json.name}</h2>`
        const intelligence=`<p>${json.powerstats.intelligence}</p>`
        heroImageDiv.innerHTML=`${name}<img src="${json.image.url}" height=200 width=200/>${intelligence}`
    })

}
const getSearchSuperHero=(name)=>{
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json =>{
        const hero = json.results[0]
        console.log(hero)
       // console.log(searchInput.value)
        heroImageDiv.innerHTML=`<img src="${hero.image.url}" height=200 width=200/>`

    })
}
const randomHero =()=>{
    const numberHero= 731
    return Math.floor(Math.random() * numberHero)+1
}


buttonNewHero.onclick=()=>getSuperHero(randomHero())
searchButton.onclick=()=>getSearchSuperHero(searchInput.value)

