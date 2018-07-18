const api_key = 'GET-A-KEY'
// http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=u2&api_key=da56d0513f34a376aa6d2f9830c0405b&format=json&limit=5
function albumRow(album) {
  const result = `<div class="row m-t-1">
    <div class="col-xs-12">
      <img src="${album.image[2]['#text']}" class='pull-left m-r-1'>
      <h2>${album.name}</h2>
      <p>${album.artist.name}</p>
    </div>
  </div>`
  return result;
}
const form  = document.getElementById("search");
form.addEventListener("submit", event => {
  event.preventDefault();
  const artist = document.getElementById("artist").value;
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${api_key}&format=json&limit=5`
  const container = document.getElementById("albums-container");
  container.innerHTML = ""
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.topalbums);
      data.topalbums.album.forEach(album => {
      container.insertAdjacentHTML("beforeend", albumRow(album));
      })
    });
})
