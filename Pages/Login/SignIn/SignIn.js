//*?-----------------Take main ccontainer-------------------*/

const mainContainer = document.querySelector(".wrapper");

//*!------------------------------------------------- Create header -----------------------------------------*/
const header = document.createElement("header");
header.classList.add("header");

//*?--------------Create logo---------------------**/

const logoContainer = document.createElement("div");
logoContainer.classList.add("netflix-logo");

const logoA = document.createElement("a");
logoA.href = "/Pages/Login/SignUp/SignUp.html"
const logo = document.createElement("img");
logo.src = "/Image/logo.png";

//?--------------Append Header Childs--------------*/
logoA.appendChild(logo);
logoContainer.appendChild(logoA);

header.appendChild(logoContainer);

//*!----------------------------------------------- Create Login Body ----------------------------------------*/

//?-----------Create main login Body-----------*//
const loginBody = document.createElement("section");
loginBody.classList.add("login-body");

const loginBox = document.createElement("div");
loginBox.classList.add("login-box");

const loginTitle = document.createElement("h1");
loginTitle.innerText = "Oturum Aç";

//?--------------Create main login form-------------*//

const loginForm = document.createElement("form");

//?-------------Create input login Email-------------*//
const inputWrapps_1 = document.createElement("div");
inputWrapps_1.classList.add("inputs-wrapp");

const inputEmail = document.createElement("input");
inputEmail.placeholder = "E‑posta veya telefon numarası";
inputEmail.type = "text";

inputWrapps_1.appendChild(inputEmail);

//?-----------Create input login password-------------*//
const inputWrapps_2 = document.createElement("form");
inputWrapps_2.classList.add("inputs-wrapp");

const inputPassword = document.createElement("input");
inputPassword.placeholder = "Password";
inputPassword.type = "password";

// inputPassword.setAttribute("type" , "password");
inputPassword.autocomplete = false;

inputWrapps_2.appendChild(inputPassword);

//?-----------------Create login button-----------------*//
const inputWrapps_3 = document.createElement("div");
inputWrapps_3.classList.add("inputs-wrapp");

const submitButton = document.createElement("button");
submitButton.classList.add("login-button");
submitButton.textContent = "Oturum Aç";

inputWrapps_3.appendChild(submitButton);

//?-----------Create login support Container -----------*//

const supportContainer = document.createElement("div");
supportContainer.classList.add("support");

const rememberContainer = document.createElement("div");
rememberContainer.classList.add("remember-box");

const rememberDiv = document.createElement("div");
rememberDiv.classList.add("remember");

const rememberCheckbox = document.createElement("span");
const checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.checked = true;
rememberCheckbox.appendChild(checkBox);

const rememberTitle = document.createElement("span");
rememberTitle.innerText = "Beni Hatırla";

const needHelp = document.createElement("div");
needHelp.classList.add("yardim");

const help = document.createElement("a");
help.innerText = "Yardım ister misiniz?";
help.href = "#";
needHelp.appendChild(help);
//?----------------Append Login Remember Childs----------------*/
rememberDiv.appendChild(rememberCheckbox);
rememberDiv.appendChild(rememberTitle);
rememberContainer.appendChild(rememberDiv);
supportContainer.appendChild(rememberContainer);
supportContainer.appendChild(needHelp);

//?---------------Create login body other-----------------*//

const login_other_container = document.createElement("div");
login_other_container.classList.add("login-body-other");

const signUp_Container = document.createElement("div");
signUp_Container.classList.add("login-signup-now");

const signUp_link = document.createElement("a");
signUp_link.innerText = "Şimdi kaydolun";
signUp_link.href = "/Pages/Login/SignUp/SignUp.html";

signUp_Container.textContent = "Netflix'e katılmak ister misiniz? ";
signUp_Container.appendChild(signUp_link);
login_other_container.appendChild(signUp_Container);

//?--------------Create login body recaptcha---------------*//

const login_recaptcha_container = document.createElement("div");
login_recaptcha_container.classList.add("recaptcha");

const recaptcha_p = document.createElement("p");

const recaptcha_text = document.createElement("span");
recaptcha_text.innerText =
  "Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.";

const recaptcha_button = document.createElement("button");
recaptcha_button.innerText = "Daha fazlasını öğrenin.";

recaptcha_p.appendChild(recaptcha_text);
recaptcha_p.appendChild(recaptcha_button);
login_recaptcha_container.appendChild(recaptcha_p);

//?----------------Append Login Body Childs----------------*/
loginBox.appendChild(loginTitle);
loginBox.appendChild(inputWrapps_1);
loginBox.appendChild(inputWrapps_2);
loginBox.appendChild(inputWrapps_3);
loginBox.appendChild(supportContainer);
loginBody.appendChild(loginBox);
loginBody.appendChild(login_other_container);
loginBody.appendChild(login_recaptcha_container);

//*!----------------------------------------------- Create footer ----------------------------------*/

//?-------------------Create footer Container**------------*//
const footerContainer = document.createElement("footer");
footerContainer.classList.add("netflix-story-cards-footer");

const footerDiv = document.createElement("div");
footerContainer.classList.add("footer");

const footerWrapper = document.createElement("div");
footerWrapper.classList.add("footer-wrapper");

const footerTitle = document.createElement("p");
footerTitle.classList.add("footer-top");
const footerTop_link = document.createElement("a");
footerTop_link.classList.add("footer-top-a");
footerTop_link.innerText = "0850-390-7444";

const span = document.createElement("span");
span.innerText = "numarasını arayınız";

footerTitle.textContent = `Sorularınız mı var? `;
footerTitle.appendChild(footerTop_link);
footerTitle.appendChild(span);

//?--------------------Create ul and li---------------------*//

const footerLinks = document.createElement("ul");
footerLinks.classList.add("footer-links");

function createLi(text) {
  const li = document.createElement("li");
  li.classList.add("footer-link-item");

  const a = document.createElement("a");
  a.classList.add("footer-link");

  const span = document.createElement("span");
  span.innerText = text;

  a.appendChild(span);
  li.appendChild(a);

  return li;
}

function appendChildrens(parent, children) {
  children.forEach(function (child) {
    parent.appendChild(child);
  });
}

var links = [
  createLi("SSS"),
  createLi("Yardım Merkezi"),
  createLi("Kullanım Koşulları"),
  createLi("Gizlilik"),
  createLi("Çerez Tercihleri"),
  createLi("Kurumsal Bilgiler"),
];

appendChildrens(footerLinks, links);

//?-------------Append Footer Childs----------------*/
footerWrapper.appendChild(footerTitle);
footerWrapper.appendChild(footerLinks);
footerDiv.appendChild(footerWrapper);
footerContainer.appendChild(footerDiv);

//*!----------------------------------------------- Apennd in Main Container----------------------------------*/
mainContainer.append(header);
mainContainer.append(loginBody);
mainContainer.append(footerContainer);

//*--------------------------When i click sign Button---------------------*/

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  //?-----------Take email and password in data---------*/

  fetch("/Pages/Login/Data/Users.json")
    .then((response) => {
      return response.json();
    })
    .then((veri) => {
      veri.find((user) => {
        if (user.tel || user.email === inputEmail.value) {
          if (user.password === inputPassword.value) {
            window.location.href = "/Pages/Home/Home.html";
          }
        }
      });
    });
});
