/**
 * VARIABLES
 */
const listaTweets = document.getElementById('lista-tweets');

/**
 * EVENT-LISTENERS
 */
eventListeners();

function eventListeners() {
  // Send form
  document.querySelector('#formulario').addEventListener('submit', addTweet);

  // Borrar tweet
  listaTweets.addEventListener('click', deleteTweet);

  // Contenido cargado
  document.addEventListener('DOMContentLoaded', loadTweetsLocalStorage);
}

/**
 * FUNCIONES
 */
// Add tweet
function addTweet(e) {
  e.preventDefault();
  const txtTweet = document.getElementById('tweet');
  // Leer tweet
  const tweet = txtTweet.value;
  // Botón eliminar
  const btnDelete = document.createElement('a');
  btnDelete.classList.add('borrar-tweet');
  btnDelete.textContent = 'X';

  // Crear elemento y añadir contenido a la lista
  const li = document.createElement('li');
  li.textContent = tweet; // Agregando texto del tweet
  li.appendChild(btnDelete); // Agregando btnDelete  al EL li
  listaTweets.appendChild(li); // Agregando EL li a la lista

  // Agregar al localstorage
  addTweetLocalStorage(tweet);

  txtTweet.value = ''; // Limpia textarea
  txtTweet.focus(); // Foco a textarea
}

// Borrar tweet del DOM
function deleteTweet(e) {
  e.preventDefault();
  const el = e.target;
  if (el.className === 'borrar-tweet') el.parentElement.remove();
  deleteTweetLocalStorage(el.parentElement.textContent);
}

// Add to localStorage
function addTweetLocalStorage(tweet) {
  let tweets = getTweetsLocalStorage();
  tweets.push(tweet);
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Get tweets from localStorage
function getTweetsLocalStorage() {
  const LS = localStorage.getItem('tweets');
  return (LS === null) ? [] : JSON.parse(LS);
}

// Load tweets from localStorage
function loadTweetsLocalStorage() {
  const tweetsLS = getTweetsLocalStorage();
  tweetsLS.forEach(tweet => {
    // Botón eliminar
    const btnDelete = document.createElement('a');
    btnDelete.classList.add('borrar-tweet');
    btnDelete.textContent = 'X';

    // Crear elemento y añadir contenido a la lista
    const li = document.createElement('li');
    li.textContent = tweet; // Agregando texto del tweet
    li.appendChild(btnDelete); // Agregando btnDelete  al EL li
    listaTweets.appendChild(li); // Agregando EL li a la lista
  });
}

// Delete tweet from localStorage
function deleteTweetLocalStorage(tweet) {
  let tweets, tweetDel;
  tweetDel = tweet.substring(0, tweet.length - 1);
  tweets = getTweetsLocalStorage();
  tweets.forEach((tw, index) => {
    if (tw === tweetDel) {
      tweets.splice(index, 1);
      localStorage.setItem('tweets', JSON.stringify(tweets));
    }
  });
}
