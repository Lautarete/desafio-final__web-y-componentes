function completeFormOperation(domElToMount) {
  mountComponentOnElement(
    domElToMount,
    `
    <div class="contact-form__container">
        <h2 class="contact-form__title">Escribime</h2>
        <form class="contact-form">
          <div class="contact-form__input-container">
            <legend class="contact-form__legend">Nombre</legend>
            <input
              name="name"
              type="text"
              class="contact-form__input"
              placeholder="Tu Nombre"
            />
          </div>
          <div class="contact-form__input-container">
            <legend class="contact-form__legend">Email</legend>
            <input
              name="email"
              type="email"
              class="contact-form__input"
              placeholder="tu@mail.com"
            />
          </div>
          <div class="contact-form__textarea-container">
            <legend class="contact-form__legend">Mensaje</legend>
            <textarea
              class="contact-form__textarea"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button class="contact-form__button">
            Enviar
            <span class="contact-form__send-img-container">
              <img src="./several/vector-send-a.svg" id="send-img-a" />
              <img src="./several/vector-send-b.svg" id="send-img-b" />
            </span>
          </button>
        </form>
      </div>
    `
  );

  function sendForm() {
    const formEL = document.querySelector(".contact-form");
    formEL.addEventListener("submit", (e) => {
      e.preventDefault();

      const userEmail = e.target.email.value;
      const userMessage = e.target.message.value;

      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: userEmail,
          message: userMessage,
        }),
      });
    });
  }
  function formButtonAnimation() {
    const formButtonEl = document.querySelector(".contact-form__button");

    formButtonEl.addEventListener("mousedown", () => {
      formButtonEl.style.backgroundColor = "rgb(0, 260,270)";
    });
    formButtonEl.addEventListener("click", () => {
      formButtonEl.style.backgroundColor = "#00adb5";
    });
    formButtonEl.addEventListener("mouseover", () => {
      formButtonEl.style.backgroundColor = "rgb(0, 89, 94 )";
    });
    formButtonEl.addEventListener("mouseleave", () => {
      formButtonEl.style.backgroundColor = "#00adb5";
    });
  }

  sendForm();
  formButtonAnimation();
}
