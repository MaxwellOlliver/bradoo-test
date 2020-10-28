import WrapContainer from './components/WrapContainer';
import { ModalProvider } from './context/ModalContext';
import { ProductProvider } from './context/ProductContext';
import { Global } from './global/globalStyles';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ProductProvider>
      <ModalProvider>
        <Global />
        <ToastContainer position="bottom-left" style={{ zIndex: 99999 }} />
        <WrapContainer />
      </ModalProvider>
    </ProductProvider>
  );
}

export default App;
