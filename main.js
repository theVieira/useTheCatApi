//Api
const key = 'live_0wWnMe92OC21zZzBvoKUypToQuBT2oqO5qdGcvqDDksOfCVWJNca4mbxvzZRGOSN'
//https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=&${key}

async function apiReq() {
  const data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=&${key}`)
  .then((res => res.json())
  )

  showImg(data)
}

function showImg(data) {
  for(let i = 0; i < 4; i++) {
    const container = document.querySelector(`#img${i}`)
    container.setAttribute('style', `background:url(${data[i].url}); background-repeat:no-repeat; background-position:center; background-size:cover`)
    console.log(data[i].url);
  }
}

document.querySelector('#search').addEventListener('click', () => apiReq())