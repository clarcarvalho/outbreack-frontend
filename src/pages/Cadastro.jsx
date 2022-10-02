import { Helmet } from "react-helmet";
import { useAuth } from "../hooks/useAuth";

export function Cadastro() {
  const { register } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log({ username, email, password });

    await register(username, email, password);
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
                  <h3 className="mb-4 text-center">Não tem uma conta?</h3>
                  <form
                    className="signin-form"
                    id="form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        name="email"
                        id="Email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        name="username"
                        id="username"
                        type="text"
                        className="form-control"
                        placeholder="Nome do usuário"
                        required
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
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div className="form-group">
                      <input
                        id="password-confirm"
                        type="password"
                        className="form-control"
                        placeholder="Confirmação de senha"
                        required
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
                        Cadastrar
                      </button>
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
