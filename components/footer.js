function mountFooter(domElToMount) {
  mountComponentOnElement(
    domElToMount,
    `
<footer class="footer">
        <img src="./several/logo.png" alt="" class="logo" />
        <div class="footer__page-links-container">
          <ul class="footer__ul">
            <div class="footer__link-container">
              <a href="./index.html" class="footer__a-page-link">
                <div class="footer__logo-container">
                  <img
                    class="footer__vector-logo"
                    src="./several/vector-home-a.svg"
                    alt=""
                  />
                  <img
                    id="vector-home-b"
                    class="footer__vector-logo"
                    src="./several/vector-home-b.svg"
                    alt=""
                  />
                </div>
                Home</a
              >
            </div>
            <div class="footer__link-container">
              <a href="./services.html" class="footer__a-page-link">
                <div class="footer__logo-container">
                  <img
                    id="vector-services-a"
                    class="footer__vector-logo"
                    src="./several/vector-services-a.svg"
                    alt=""
                  />
                  <img
                    id="vector-services-b"
                    class="footer__vector-logo"
                    src="./several/vector-services-b.svg"
                    alt=""
                  />
                </div>
                Servicios</a
              >
            </div>
            <div class="footer__link-container">
              <a href="./contact.html" class="footer__a-page-link"
                ><div class="footer__logo-container">
                  <img
                    class="footer__vector-logo"
                    src="./several/vector-contact.svg"
                    alt=""
                  />
                </div>
                Contacto</a
              >
            </div>
          </ul>
        </div>
        <div class="footer__socialmedia-container">
          <div class="footer__socialmedia-logo">
            <a
              id="footer__linkedin-link"
              href=""
              class="footer__socialmedia-link"
            >
              <img
                id="vector-linkedin-a"
                src="./several/vector-linkedin-a.svg"
                alt=""
              />
              <img
                id="vector-linkedin-c"
                src="./several/vector-linkedin-c.svg"
                alt=""
              />
              <img
                id="vector-linkedin-b"
                src="./several/vector-linkedin-b.svg"
                alt=""
              />
            </a>
          </div>
          <div class="footer__socialmedia-logo">
            <a href="" class="footer__socialmedia-link">
              <img src="./several/vector-github.svg" alt="" />
            </a>
          </div>
          <div class="footer__socialmedia-logo">
            <a href="" class="footer__socialmedia-link">
              <img src="./several/vector-twiter.svg" alt="" />
            </a>
          </div>
        </div>
      </footer>
`
  );
}
