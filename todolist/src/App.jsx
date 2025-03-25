import "./styles/home.scss";
import "./styles/create.scss";

import { } from 'react'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Home />

    </div>
  )
}

export default App
