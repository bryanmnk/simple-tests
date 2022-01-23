import { toast, cssTransition } from "react-toastify";

export const toastComponent = (message) => {
  toast.error(message, {
    transition: bounce,
    autoClose: 2000,
    hideProgressBar: true,
    className: "toast__error",
  });
};

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});
