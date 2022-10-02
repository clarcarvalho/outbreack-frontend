import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../hooks/useAuth";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await signIn(username, password);
    } catch (error) {
      console.log("Usuário ou senha inválidos");
    }
  }

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="stylesheet" href="css/style.css"></link>
        <script src="js/jquery.min.js"></script>
        <script src="js/popper.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
      </Helmet>
      <div
        className="img js-fullheight"
        style={{
          backgroundImage: "url(images/orion-nebula-11107.jpg)",
          height: "100vh",
        }}
      >
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Bem-vindo ao Outbreak</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap p-0">
                  <h3 className="mb-4 text-center">Entrar na plataforma</h3>

                  <form
                    action="#"
                    className="signin-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        name="username"
                        id="username"
                        type="text"
                        className="form-control"
                        placeholder="Nome do usuário"
                        required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        id="password-field"
                        type="password"
                        className="form-control"
                        placeholder="Senha"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Entrar
                      </button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50">
                        <label className="checkbox-wrap checkbox-primary">
                          Lembre-se de mim
                          <input type="checkbox" checked />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="w-50 text-md-right">
                        <a
                          href="#"
                          style={{
                            color: "#fff",
                          }}
                        >
                          Esqueceu sua senha?
                        </a>
                        <a
                          href="cadastro.html"
                          className="btn-get-started"
                          data-bs-target="#staticBackdrop"
                          style={{
                            color: "#fff",
                          }}
                        >
                          Não tem uma conta? Cadastre-se aqui.
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
