const signupBtn = document.querySelector(".nav__sign-up");
const loginBtn = document.querySelector(".nav__login");

const overflow = document.querySelector(".overflow");
const modalSignUp = document.querySelector("#modal--sign-up");
const modalLogin = document.querySelector("#modal--login");

// Открыть/закрыть модальные окна
signupBtn.addEventListener("click", () => {
    openRegistration();
  });
  loginBtn.addEventListener("click", () => {
    openLogin();
  });
  
  overflow.addEventListener("click", (e) => {
    if (e.target.classList.contains("overflow") || e.target.classList.contains("modal__close")) {
      closeLogin();
      closeRegistration();
    }
  });
  
  function openRegistration() {
    overflow.style.display = "block";
    modalSignUp.style.display = "block";
  }
  function closeRegistration() {
    overflow.style.display = "none";
    modalSignUp.style.display = "none";
  }
  function openLogin() {
    overflow.style.display = "block";
    modalLogin.style.display = "block";
  }
  function closeLogin() {
    overflow.style.display = "none";
    modalLogin.style.display = "none";
  }
  