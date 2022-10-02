import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastContext = createContext({
  notifyError: () => {},
  notifySuccess: () => {},
});

export function ToastProvider({ children }) {
  const notifyError = (message) => {
    toast.error(message);
  };

  const notifySuccess = (message) => {
    toast.success(message);
  };

  return (
    <ToastContext.Provider value={{ notifyError, notifySuccess }}>
      {children}
      <ToastContainer theme="colored" />
    </ToastContext.Provider>
  );
}
