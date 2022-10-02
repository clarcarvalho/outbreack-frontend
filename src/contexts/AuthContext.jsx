import { createContext, useEffect, useState } from "react";
import { useToast } from "../hooks/useToast";
import api from "../services/api";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { notifyError, notifySuccess } = useToast();

  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api
        .get("/eu", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data.user);
        })
        .catch((error) => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  async function signIn(username, password) {
    try {
      const { data } = await api.post("/login", {
        username,
        password,
      });

      localStorage.setItem("token", data.user.id);
      setUser(data.user);
    } catch ({ response }) {
      notifyError(response.data.message);
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    setUser(null);
  }

  async function register(username, email, password) {
    try {
      const { data } = await api.post("/cadastro", {
        username,
        email,
        password,
      });

      notifySuccess(
        "Cadastro realizado com sucesso! Você será redirecionado para a página principal."
      );
      localStorage.setItem("token", data.user.id);
      setUser(data.user);
    } catch (error) {
      notifyError(
        `Erro ao realizar o cadastro. ${error.response.data.message}`
      );
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        signOut,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
