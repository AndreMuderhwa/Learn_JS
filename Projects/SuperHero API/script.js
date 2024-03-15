
const SUPERHERO_TOKEN='1170413181040319'
const BASE_URL=`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const buttonNewHero=document.getElementById('buttonNewHero')
const heroImageDiv=document.getElementById('heroImage')


const getSuperHero =(id, name)=>{
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        heroImageDiv.innerHTML=`<img src="${json.image.url}" height=200 width=200/>`
    })

}

const randomHero =()=>{
    const numberHero= 731
    return Math.floor(Math.random() * numberHero)+1
}


buttonNewHero.onclick=()=>getSuperHero(randomHero())

