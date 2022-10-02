import Helmet from "react-helmet";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function handleLogin() {
    history.push("/login");
  }

  function handleRegister() {
    history.push("/registro");
  }

  return (
    <>
      <Helmet>
        <script src="/assets/vendor/aos/aos.js"></script>
        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="/assets/vendor/php-email-form/validate.js"></script>
        <script src="/assets/vendor/purecounter/purecounter.js"></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="/assets/js/main.js"></script>
      </Helmet>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div id="logo">
            <h1>
              <a href="#">Outbreak</a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Inicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Sobre
                </a>
              </li>
              <li>
                <a
                  className="btn-get-started"
                  onClick={handleRegister}
                  data-bs-target="#staticBackdrop"
                >
                  Cadastre-se
                </a>
              </li>

              <li>
                <a className="btn-get-started" onClick={handleLogin}>
                  Entrar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="hero">
        <div className="hero-container">
          <h1>Bem-vindo ao Outbreak</h1>
          <h2>Um site de narrativas que vai te levar para outro mundo</h2>
          <a
            onClick={handleLogin}
            className="btn-get-started"
            data-bs-target="#staticBackdrop"
          >
            Inicie suas Narrativas
          </a>
        </div>
      </section>
      <main id="main">
        <section id="about">
          <div className="container">
            <div className="row about-container">
              <div className="col-lg-6 content order-lg-1 order-2">
                <h2 className="title">Sobre o site</h2>
                <p>
                  O Outbreak é uma plataforma direcionada para a escrita e
                  leitura de narrativas digitais.
                </p>

                <div
                  className="col-lg-6 background order-lg-2 order-1"
                  data-aos="fade-left"
                  data-aos-delay="100"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
