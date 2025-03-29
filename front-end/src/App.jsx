import { Provider } from 'react-redux';

import appStore from './utils/appStore';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  console.log("inside app")
  return (
    <>
      <ToastContainer theme="dark" />
      
      <Provider store={appStore}>
        
        <Outlet />
      </Provider>   {/* Renders the matched child route */}
      
    </>
  );
}

export default App;