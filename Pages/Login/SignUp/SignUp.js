//?----------------------Get Html containers-------------------*/
const netflixContainer = document.querySelector(".netflix-container");
const netflixBanner = document.querySelector(".banner");
const netflixstoryCard_1 = document.querySelector(".netflix-story-cards");
const netflixstoryCard_2 = document.querySelector(
  ".netflix-story-cards-mobildowload"
);
const netflixstoryCard_3 = document.querySelector(".netflix-story-cards-apple");
const netflixstoryCard_4 = document.querySelector(
  ".netflix-story-cards-forKids"
);
const netflixQuetions = document.querySelector(".netflix-story-quetion-card");
const netflixFooter = document.querySelector(".netflix-story-cards-footer");
//*!------------------Create header and elemenst in this start----------------*/

const header = document.createElement("header");
header.classList.add("netflix-header");

//?---------------Netflix logo--------------**/
const divLogo = document.createElement("div");
divLogo.classList.add("logo-container");
const neftlixLogo = document.createElement("img");
neftlixLogo.classList.add("logo");
neftlixLogo.setAttribute("src", "/Image/logo.png");
divLogo.appendChild(neftlixLogo);

//?---------Sign and Language button-----------*/
const divSwitch = document.createElement("div");
divSwitch.classList.add("language-login");

const selectLanguage = document.createElement("select");
selectLanguage.classList.add("language");

let languages = ["Türkçe", "English", "Russia"];

for (var i = 0; i < languages.length; i++) {
  var option = document.createElement("option");
  option.value = languages[i];
  option.text = languages[i];
  selectLanguage.appendChild(option);
}
const loginButton = document.createElement("button");
loginButton.classList.add("login");
loginButton.innerText = "Sign In";
divSwitch.append(selectLanguage, loginButton);

//*---------------------Apend header childs---------------------*/
header.appendChild(divLogo);
header.appendChild(divSwitch);

//*!----------------Create bg img and elemenst in banner start---------------*/

//?---------------Banner Bg image--------------**/
const bannerBg = document.createElement("img");
bannerBg.classList.add("our-story-card-background");
bannerBg.setAttribute("src", "/Image/card1.jpg");

//?---------------Banner Texts--------------**/
const divBanner = document.createElement("div");
divBanner.classList.add("our-story-card-text");

const divHeading = document.createElement("div");
divHeading.classList.add("heading");

const bannerTitle = document.createElement("h1");
bannerTitle.innerText = "Sınırsız film, dizi ve çok daha fazlası.";

const bannerP1 = document.createElement("p");
bannerP1.classList.add("para-1");
bannerP1.innerText = "İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.";

const bannerP2 = document.createElement("p");
bannerP2.classList.add("para-2");
bannerP2.innerText =
  "İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.";

const bannerForm = document.createElement("form");
bannerForm.classList.add("search");

const bannerForminput = document.createElement("input");
bannerForminput.classList.add("email");
bannerForminput.setAttribute("placeholder", "E-posta adresi");
bannerForminput.setAttribute("type", "email");

const bannerFormButton = document.createElement("button");
bannerFormButton.classList.add("submit");
bannerFormButton.innerText = "Başlayın >";

//*---------------------Apend form childs---------------------*/
bannerForm.appendChild(bannerForminput);
bannerForm.appendChild(bannerFormButton);

//*---------------------Apend banner childs---------------------*/
divHeading.appendChild(bannerTitle);
divHeading.appendChild(bannerP1);
divHeading.appendChild(bannerP2);
divHeading.appendChild(bannerForm);
divBanner.append(divHeading);

//*!--------------------------Netflix story Cards-1 start--------------------------*/

//?---------------Create Card_1 Text--------------**/
const divTextCard_1 = document.createElement("div");
divTextCard_1.classList.add("netflix-story-card-text");

const card1_Title = document.createElement("h1");
card1_Title.classList.add("netflix-story-card-title");
card1_Title.innerText = "Televizyonunuzda izleyebilirsiniz.";

const card1_Subtitle = document.createElement("p");
card1_Subtitle.classList.add("netflix-story-card-subtitle");
card1_Subtitle.innerText =
  " Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.";

//*---------------------Apend text childs---------------------*/
divTextCard_1.appendChild(card1_Title);
divTextCard_1.appendChild(card1_Subtitle);

//?---------------Create Card_1 Tv and Movie Container-----------**/

const divMovieContainer_1 = document.createElement("div");
divMovieContainer_1.classList.add("netflix-story-card-img-container");

const divMovieAnimation_1 = document.createElement("div");
divMovieAnimation_1.classList.add("netflix-story-card-animation-container");

//?---------------Create Card_1 Tv image--------------**/
const tvİmage = document.createElement("img");
tvİmage.classList.add("netflix-story-card-img");
tvİmage.setAttribute("src", "/Image/tv.png");

//?---------------Create Card_1 Movie--------------**/

const divMovie_1 = document.createElement("div");
divMovie_1.classList.add("netflix-story-card-animation");

const movie_1 = document.createElement("video");
movie_1.classList.add("video-1");
movie_1.innerHTML = '<source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4">';
movie_1.muted = true;
movie_1.autoplay = true;
movie_1.playsInline = true;
movie_1.loop = true;
divMovie_1.appendChild(movie_1);

//*------------Apend divmovie and divMovieAnimation child----------*/
divMovieAnimation_1.appendChild(tvİmage);
divMovieAnimation_1.appendChild(divMovie_1);
divMovieContainer_1.appendChild(divMovieAnimation_1);

//*!--------------------------Netflix story Cards-2 start--------------------------*/

const divMobileContainer = document.createElement("div");
divMobileContainer.classList.add("netflix-story-card-img-container-mobile");

const divMobileAnimation = document.createElement("div");
divMobileAnimation.classList.add(
  "netflix-story-card-animation-container-mobile"
);

//?---------------Create Card_2 Mobile img --------------**/

const mobilePng = document.createElement("img");
mobilePng.classList.add("mobilimage");
mobilePng.src =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg";

//?----------Create Card_2 Box and Dowload Animate---------**/

const divBox = document.createElement("div");
divBox.classList.add("box");

const moviePath = document.createElement("img");
moviePath.src =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png";

const movieTitle = document.createElement("p");
movieTitle.innerHTML = " Stranger Things <br /> <a href='#'>İndiriliyor...</a>";

const dowloadicon = document.createElement("img");
dowloadicon.classList.add("dowload-icon");
dowloadicon.src =
  "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif";

//*----------------Apend divBox childs-------------*/
divBox.appendChild(moviePath);
divBox.appendChild(movieTitle);
divBox.appendChild(dowloadicon);

//?---------------Create Card_2 Texts --------------**/

const divTextCard_2 = document.createElement("div");
divTextCard_2.classList.add("netflix-story-card-text");

const card2_Title = document.createElement("h1");
card2_Title.classList.add("netflix-story-card-title");
card2_Title.innerText = "Çevrimdışı izlemek için içerikleri indirin.";

const card2_Subtitle = document.createElement("p");
card2_Subtitle.classList.add("netflix-story-card-subtitle");
card2_Subtitle.innerText =
  " En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.";

//*----------------Apend Texts childs-------------*/
divTextCard_2.appendChild(card2_Title);
divTextCard_2.appendChild(card2_Subtitle);

//*------------Apend divmobilContainer and divmobilAnimate child----------*/
divMobileAnimation.appendChild(mobilePng);
divMobileAnimation.appendChild(divBox);
divMobileContainer.appendChild(divMobileAnimation);

//*!--------------------------Netflix story Cards-3 start--------------------------*/

//?---------------Create Card_3 Texts --------------**/

const divTextCard_3 = document.createElement("div");
divTextCard_3.classList.add("netflix-story-card-text");

const card3_Title = document.createElement("h1");
card3_Title.classList.add("netflix-story-card-title");
card3_Title.innerText = "İstediğiniz her yerde izleyin.";

const card3_Subtitle = document.createElement("p");
card3_Subtitle.classList.add("netflix-story-card-subtitle");
card3_Subtitle.innerText =
  "  Ekstra ücret ödemeden telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.";

//*----------------Apend Texts childs-------------*/
divTextCard_3.appendChild(card3_Title);
divTextCard_3.appendChild(card3_Subtitle);

//?---------------Create Card_3 Tv and Movie Container-----------**/

const divMovieContainer_2 = document.createElement("div");
divMovieContainer_2.classList.add("netflix-story-card-img-container");

const divMovieAnimation_2 = document.createElement("div");
divMovieAnimation_2.classList.add("netflix-story-card-animation-container");

//?---------------Create Card_3 Tv image--------------**/
const appleTvİmage = document.createElement("img");
appleTvİmage.classList.add("netflix-story-card-img");
appleTvİmage.setAttribute("src", "/Image/Apple.png");

//?---------------Create Card_3 Movie--------------**/

const divMovie_2 = document.createElement("div");
divMovie_2.classList.add("netflix-story-cards-animation");

const movie_2 = document.createElement("video");
movie_2.classList.add("video-2");
movie_2.innerHTML =
  ' <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/>';
movie_2.muted = true;
movie_2.autoplay = true;
movie_2.playsInline = true;
movie_2.loop = true;
divMovie_2.appendChild(movie_2);

//*------------Apend divmovieContainer2 and divMovieAnimation2 child----------*/
divMovieAnimation_2.appendChild(appleTvİmage);
divMovieAnimation_2.appendChild(divMovie_2);
divMovieContainer_2.appendChild(divMovieAnimation_2);

//*!--------------------------Netflix story Cards-4 start--------------------------*/

//?---------------Create Card_4 Container-----------**/

const divMovieContainer_3 = document.createElement("div");
divMovieContainer_3.classList.add("netflix-story-card-img-container");

const divMovieAnimation_3 = document.createElement("div");
divMovieAnimation_3.classList.add("netflix-story-card-animation-container");

const card4_Png = document.createElement("img");
card4_Png.classList.add("our-story-card-img");
card4_Png.src =
  "https://occ-0-3890-3466.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABZpQ03cQAEG5HLu54H2Ag6iPklqG1BkV9l9ch1GiCxnlyY5l3TWwns7586c4Jey8K72BrTkBSPfDU_Ym9ENf9XZsnQvnws-pfVSs.png?r=8f0";

//?---------------Create Card_4 Texts --------------**/

const divTextCard_4 = document.createElement("div");
divTextCard_4.classList.add("netflix-story-card-text");

const card4_Title = document.createElement("h1");
card4_Title.classList.add("netflix-story-card-title");
card4_Title.innerText = "Çocuklarınız için profiller oluşturun.";

const card4_Subtitle = document.createElement("p");
card4_Subtitle.classList.add("netflix-story-card-subtitle");
card4_Subtitle.innerText =
  "  Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız,sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.";

//*----------------Apend Texts childs-------------*/
divTextCard_4.appendChild(card4_Title);
divTextCard_4.appendChild(card4_Subtitle);

//*------------Apend divmovieContainer3 and divMovieAnimation3 child----------*/
divMovieAnimation_3.appendChild(card4_Png);
divMovieContainer_3.appendChild(divMovieAnimation_3);

//*!--------------------------Netflix Quetions Card start--------------------------*/

const quetionTitle = document.createElement("h1");
quetionTitle.classList.add("quetion-title");
quetionTitle.innerText = "Sıkça Sorulan Sorular";

const quetionsList = document.createElement("ul");
quetionsList.classList.add("quetions-block");

function createLiitem(spanText) {
  const li = document.createElement("li");

  li.classList.add("quetions-block-item");

  li.innerHTML = spanText + '<i class="fa-solid fa-plus"></i>';

  return li;
}

function appendChildrens(parent, children) {
  children.forEach(function (child) {
    parent.appendChild(child);
  });
}

var quetions = [
  createLiitem("Netflix Nedir?"),
  createLiitem("Netflix'in maliyeti nedir?"),
  createLiitem("Nerede izleyebilirim?"),
  createLiitem("Nasıl iptal ederim?"),
  createLiitem("Netflix çocuklar için uygun mudur?"),
];

appendChildrens(quetionsList, quetions);

//?---------------Create Form-------------*/
const form = document.createElement("form");
form.classList.add("email-container");

const span = document.createElement("span");
span.textContent =
  "İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin.";

//?---------------Create divForm-------------*/
const divForm = document.createElement("div");
divForm.classList.add("form");

const Forminput = document.createElement("input");
Forminput.classList.add("email");
Forminput.setAttribute("placeholder", "E-posta adresi");
Forminput.setAttribute("type", "email");

const FormButton = document.createElement("button");
FormButton.classList.add("submit");
FormButton.innerText = "Başlayın >";

//*------------Apend divForm and form childs----------*/
divForm.appendChild(Forminput);
divForm.appendChild(FormButton);
form.append(span, divForm);



//!-------------------Apend items in main container-------------*/
netflixContainer.append(header);
netflixBanner.append(bannerBg, divBanner);
netflixstoryCard_1.append(divTextCard_1, divMovieContainer_1);
netflixstoryCard_2.append(divMobileContainer, divTextCard_2);
netflixstoryCard_3.append(divTextCard_3, divMovieContainer_2);
netflixstoryCard_4.append(divMovieContainer_3, divTextCard_4);
netflixQuetions.append(quetionTitle, quetionsList, form);



loginButton.addEventListener("click",  () => {

    window.location.href = "/Pages/Login/SignIn/SignIn.html"
})
