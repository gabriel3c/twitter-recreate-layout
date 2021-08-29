const body = document.querySelector('body')

const tweetar = document.querySelector('button')

const textarea = document.querySelector('textarea')

const feed = document.querySelector('.tweetsList')

const btnDark = document.querySelector('#darkColor')
const btnMiddle = document.querySelector('#middleColor')
const btnLight = document.querySelector('#lightColor')

btnDark.addEventListener('click', function () {
  console.log('ckicou')
  body.style.backgroundColor = '#000000'
})

btnMiddle.addEventListener('click', function () {
  console.log('ckicou')
  body.style.backgroundColor = 'rgb(21, 32, 43)'
})

btnLight.addEventListener('click', function () {
  console.log('ckicou')
  body.style.backgroundColor = '#FFFFFF'
})

function pegarTweet(event) {
  event.preventDefault()

  const textareaContent = textarea.value

  criarTweet(textareaContent)
}

tweetar.addEventListener('click', pegarTweet)

function criarTweet(tweetText) {
  //horario post
  let date = new Date()

  let hour = date.getHours()
  let minutes = date.getMinutes()

  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()

  const tweet = {
    name: 'Gabriel',
    photo: './assets/img/ProfilePhoto.jpg',
    user: '@gabriel.hart',
    text: tweetText,
    time: `${hour}:${minutes}  -  ${day}/${month}/${year}`,
  }

  listarTemplateTweet(tweet)
}

function listarTemplateTweet(tweet) {
  const { name, photo, user, text, time } = tweet

  //Criação dos elemenetos no HTML
  let li = document.createElement('li')
  li.classList.add('tweetBox')

  let img = document.createElement('img')
  img.src = photo
  img.classList.add('tweetProfileImage')

  let div = document.createElement('div')
  div.classList.add('tweetContent')

  let h2 = document.createElement('h2')
  h2.innerText = name

  let span = document.createElement('span')
  span.innerText = `${user} - ${time}`

  let p = document.createElement('p')
  p.innerText = text

  //Definir elementos filhos de dentro pra fora

  div.appendChild(h2)
  div.appendChild(span)
  div.appendChild(p)

  li.appendChild(img)
  li.appendChild(div)

  feed.appendChild(li)

  //Limpar textarea depois de tweetar
  textarea.value = ''
}
