//!------------------Take main body containers--------------*/
const body = document.getElementById("body");

//?-----------------Banner containers----------------//
const banner = document.querySelector(".banner");
const banner_title = document.querySelector(".banner-title");
const banner_overview = document.querySelector(".banner_description");
const playButton = document.querySelector(".play_button");

//?-----------------search containers----------------//
const searchİnput = document.querySelector(".input-search");
const searchButton = document.querySelector(".fa-search");
const headrowContainer = document.querySelector(".headrow-container");

//?------------------Create a sticky navbar-----------//

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

//?-------------------------api key from TMDB--------------------------*/
const api = "api_key=7b7fc4b328c6b537bb96b26a23377e89";

//?-------------------------base url of the site-------------------------*/
const base_url = "https://api.themoviedb.org/3";

//?-------------------------My url--------------------------*/
const fullUrl = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

//?-------------------------search url--------------------------*/
const searchUrl = base_url + "/search/movie?" + api;

//?-------------------------İmage url--------------------------*/
const image_url = "https://image.tmdb.org/t/p/original";

//!-----------------------request movies data-------------------------*/

const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=TURKEY&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchDocumentariesMovies: `${base_url}/discover/movie?${api}&with_genres=18`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
};

//?-------------Get movie on Top side-----------------*/

fetch(
  requests.fetchPopular || requests.fetchTrending || requests.fetchComedyMovies
)
  .then((res) => res.json())
  .then((data) => {
    //?----------Change movie when i refresh window everytime---------*/

    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];

    banner_title.innerText = setMovie.title || setMovie.name;
    banner_overview.innerText = setMovie.overview;

    banner.style.backgroundImage = `url(${image_url + setMovie.backdrop_path})`;
  });

// //?---------------- Create Movie Category Row-----------------*/

function createMovieCategory(movieCategory, movieCategoryTitle) {
  fetch(movieCategory)
    .then((res) => res.json())
    .then((data) => {
      const headrow = document.createElement("div");
      headrow.classList.add("headrow");

      const row = document.createElement("div");
      row.classList.add("row");
      headrow.appendChild(row);

      const title = document.createElement("h2");
      title.classList.add("row-title");
      title.innerText = movieCategoryTitle;

      row.appendChild(title);

      const row_posters = document.createElement("div");
      row_posters.classList.add("row-posters");

      row.appendChild(row_posters);

      data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.classList.add("row-posterLarge");
        poster.src = image_url + movie.poster_path;

        row_posters.appendChild(poster);

        poster.addEventListener("click", () => {
          banner_title.innerText = movie.title || movie.name;
          banner_overview.innerText = movie.overview;

          banner.style.backgroundImage = `url(${
            image_url + movie.backdrop_path
          })`;
        });
      });

      headrowContainer.append(headrow);
    });
}







searchButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (searchİnput.value === "") {
  } else {
    if (searchİnput.value) {
      headrowContainer.innerHTML = "";
    } else {
      // seacrhMovie(api);
    }
  }

  searchİnput.value = "";
});

createMovieCategory(requests.fetchTrending, "TREND NOW");
createMovieCategory(requests.fetchComedyMovies, "COMEDY");
createMovieCategory(requests.fetchHorrorMovies, "HORROR");
createMovieCategory(requests.fetchDocumentariesMovies, "DOCUMENTARİES");
createMovieCategory(requests.fetchActionMovies, "ACTİON");
