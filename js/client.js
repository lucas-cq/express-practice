'use strict'
const getMovie = function(){
// This is the code that fetches the API

fetch(`https://ghibliapi.herokuapp.com/films/`)
  .then(function(response){
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  }) 
// If the API is successfully found, this will output the data into HTML
  .then(function(data){
    const ghibliElement = document.querySelector('.random-ghibli');
    const randomMovie = function(){
    const movie = Math.floor(Math.random() * 21); // This Selects a random movie from the list of arrays
    ghibliElement.innerHTML = `
    <article>
    <h2>${data[movie].title}</h2>
    <a href="${data[movie].image}"><img src="${data[movie].image}" alt="${data[movie].title}" width="400" height="600"></a>
      <p><strong>Original Title<br></strong> ${data[movie].original_title}</p>
      <p><strong>Released<br></strong> ${data[movie].release_date}</p>
      <p><strong>Description<br></strong> ${data[movie].description}</p>
      <p><strong>Tomatometer<br></strong> ${data[movie].rt_score}%</p>
      <p><strong>Director<br></strong> ${data[movie].director}</p>
      <p><strong>Producer<br></strong> ${data[movie].producer}</p>
    </article>
    `};
    randomMovie(); // Runs the random function
    console.log(data); // Logs the data
  })
  // If the API is not found, this will display an error to the user
  .catch(function(err){
    console.log(err);
    const ghibliElement = document.querySelector('.random-ghibli')
    ghibliElement.innerHTML = `<h2>Error, Page Not Found</h2>`
  });
}
// This listens for a click on the button, then fecthes another random movie.
document.querySelector('.new-movie').addEventListener('click', getMovie);
