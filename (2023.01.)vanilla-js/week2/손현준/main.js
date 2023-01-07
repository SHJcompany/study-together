const h4 = document.querySelector(".SHJ-component__title");
const h5 = document.querySelector(".SHJ-component__text2")

function handleTitleMouseEnter() {
    h4.innerText = "환영합니다.";
}

function handleMouseLeave() {
    h4.innerText = "SHJCompany";
}

h4.addEventListener("mouseenter", handleTitleMouseEnter);
h4.addEventListener("mouseleave", handleMouseLeave);

function handleTitleClick() {
    if(h5.className = "SHJ-component__text2"){
        h5.className = "";
    } else {
        h5.className = "SHJ-component__text2"
    };
}

h5.addEventListener("click", handleTitleClick);

const loginForm = document.querySelector(".SHJ-login-form");
const loginInput = document.querySelector(".SHJ-login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
    // const username = loginInput.value;
    // console.log(username);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick)

handleLinkClick()

