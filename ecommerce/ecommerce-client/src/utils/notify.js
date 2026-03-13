import { Bounce, toast } from "react-toastify";

export default function notify(msg, type = "default") {
  let toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  };
  if (type == "error") {
    toast.error(msg, toastConfig);
  } else {
    toast.success(msg, toastConfig);
  }
}
