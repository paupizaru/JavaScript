/* Variables */
const listaTweets = document.getElementById('lista-tweets');

/* Event listeners */
eventListeners();

function eventListeners(){
    /* Cuando se envia el formulario */
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    /* Borrar Tweets */
    listaTweets.addEventListener('click', borrarTweet);

    /* Contenido cargado */
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

/* Funciones */
function agregarTweet(e) {
    e.preventDefault();
    
    /* Leer el valor del textarea */
    const tweet = document.getElementById('tweet').value;
    
    /* Crear boton de eliminar */
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';


    /* Crear elemento y añadirle el contenido a la lista */
    const li = document.createElement('li');
    li.innerText = tweet;

    /* Añade el boton de borrar el tweet */
    li.appendChild(botonBorrar);

    /* Añade el tweet a la lista */
    listaTweets.appendChild(li);
    
    /* Añadir a Local Storage */
    agregarTweetLocalStorage(tweet);

}

/* Elimina el tweet del DOM */
function borrarTweet(e) {
    e.preventDefault();

    if(e.target.clasName === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

/* Mostrar datos de LS en la lista */
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        /* Crear boton de eliminar */
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';


        /* Crear elemento y añadirle el contenido a la lista */
        const li = document.createElement('li');
        li.innerText = tweet;

        /* Añade el boton de borrar el tweet */
        li.appendChild(botonBorrar);

        /* Añade el tweet a la lista */
        listaTweets.appendChild(li);

    });
}

/* Agrega tweet a Local storage */
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    /* Añadir el nuevo tweet */
    tweets.push(tweet);

    /* Convertir de string a arreglo para ls */
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

/* Comprobar que haya elementos en LS, retorna un arreglo */
function obtenerTweetsLocalStorage() {
    let tweets;

    /* Revisamos los valores de local storage */
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}

/* Eliminar tweet de LS */
function borrarTweetLocalStorage(tweet) {
    let tweets;
    let tweetBorrado;

    /* Aquí se obtiene el tweet a borrar y cortado */
    tweetBorrado = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if (tweetBorrado === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}