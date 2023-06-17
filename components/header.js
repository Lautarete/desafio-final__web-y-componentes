function completeHeaderOperation(domElToMount) {
  function mountHeader(domElToMount) {
    mountComponentOnElement(
      domElToMount,
      `
    <header class="header">
    <a href="./index.html">
    <img src="./several/logo.png" alt="" class="logo" />
    </a>
          
        <button class="header__button">
          <div class="header__rc"></div>
          <div class="header__rc"></div>
          <div class="header__rc"></div>
        </button>
        <div class="header__options-window">
          <button class="header__options-window-button">
            <img
              class="header__options-window-vector"
              src="./several/vector-close.svg"
              alt=""
            />
          </button>
          <ul class="header__options-window-ul">
            <a href="./portfolio.html" class="header__options-window-link">Portfolio</a>
            <a href="./services.html" class="header__options-window-link">Servicios</a>
            <a href="./contact.html" class="header__options-window-link">Contacto</a>
          </ul>
        </div>
      </header>
    `
    );
  }

  function showOptionsWindow() {
    const showWindowButtonEl = document.querySelector(".header__button");
    const optionsWindowEl = document.querySelector(".header__options-window");

    showWindowButtonEl.addEventListener("click", (e) => {
      optionsWindowEl.style.display = "block";
    });
  }

  function closeOptionsWindow() {
    const closeWindowButtonEl = document.querySelector(
      ".header__options-window-button"
    );
    const optionsWindowEl = document.querySelector(".header__options-window");

    closeWindowButtonEl.addEventListener("click", (e) => {
      optionsWindowEl.style.display = "";
    });
  }

  mountHeader(domElToMount);
  showOptionsWindow();
  closeOptionsWindow();
}
