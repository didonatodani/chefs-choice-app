import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Toast.css"

function Toast() {

  return (
    <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
  );
}

export default Toast