import { Provider } from 'react-redux';
import appStore from './store/store';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';


function App() {
  
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