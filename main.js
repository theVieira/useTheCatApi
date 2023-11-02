//Set Id
const div = document.querySelectorAll('.img')

div.forEach((element, id = 0) => {
  element.id = 'img' + id
  id++
})

//Api
const key = 'live_0wWnMe92OC21zZzBvoKUypToQuBT2oqO5qdGcvqDDksOfCVWJNca4mbxvzZRGOSN'

//https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=&${key}

document.querySelector('#search').addEventListener('click', () => apiReq())

async function apiReq() {
  const data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=&${key}`)
  .then((res => res.json())
  )

  for(let i = 0; i < 4; i++) {
    const container = document.querySelector(`#img${i}`)
    container.setAttribute('style', `background:url(${data[i].url}); background-repeat:no-repeat; background-position:center; background-size:cover`)
    console.log(data[i].url);
  }
}

function showImg(url) {
  const imgContainer = document.getElementById('1')
  imgContainer.setAttribute('style', `background:url(${url}); background-repeat:no-repeat; background-position:center`)
}