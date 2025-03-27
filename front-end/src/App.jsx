import { Provider } from 'react-redux'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import appStore from './utils/appStore'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <ToastContainer theme='dark'/>
      <Provider store={appStore}>
        <Navbar />
        <Outlet />
      </Provider> 
    </>
  )
}

export default App
