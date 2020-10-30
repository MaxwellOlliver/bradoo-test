import { createContext, useRef, useState } from 'react';

export const ModalContext = createContext({});

export function ModalProvider({ children }) {
  const [context, setContext] = useState('vendors');
  const [modal, setModal] = useState(null);
  const [items, setItems] = useState({
    products: [],
    vendors: [],
  });

  const vendorsSetter = useRef(null);
  const selectedVendorsSetter = useRef(null);
  const productsSetter = useRef(null);
  const selectedProductsSetter = useRef(null);

  function showDeleteModal() {
    setModal('delete');
  }

  function hideModal() {
    setModal(null);
  }

  function showCreateModal() {
    setModal('create');
  }

  function showEditModal() {
    setModal('edit');
  }

  function showEditProductModal() {
    setModal('editProduct');
  }

  function showCreateProductModal() {
    setModal('createProduct');
  }

  return (
    <ModalContext.Provider
      value={{
        items,
        setItems,
        showDeleteModal,
        showCreateModal,
        showEditModal,
        showEditProductModal,
        showCreateProductModal,
        hideModal,
        setContext,
        context,
        modal,
        vendorsSetter,
        selectedVendorsSetter,
        productsSetter,
        selectedProductsSetter,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
