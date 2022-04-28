//Button for Random Character
document.querySelector('button').addEventListener('click', fetchCharacter)

function fetchCharacter(){
  const num = Math.floor(Math.random() * 502) + 1 // we can use const here bc we are never re-assigning num. it will always equal that equation, ( which will give a random number every time)
  //the + 1 is to make sure the number isn't 0, and the Math.floor will round it down to an integer 
  fetch(`https://bobsburgers-api.herokuapp.com/characters/${num}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('h1').innerText = data.name
        document.querySelector('img').src = data.image
        document.querySelector('#gender').innerText = `Gender: ${data.gender}`
        document.querySelector('#occupation').innerText = `Occupation: ${data.occupation}`
        document.querySelector('#firstEpisode').innerText = `First Episode Appearance: ${data.firstEpisode}`


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

