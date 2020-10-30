import { useContext } from 'react';
import { FiEdit3, FiPlus, FiTrash } from 'react-icons/fi';
import { ModalContext } from '../../context/ModalContext';
import Modal from '../Modal';
import ProductSection from '../ProductSection';
import VendorSection from '../VendorSection';
import { Container } from './styles';
import { toast } from 'react-toastify';

function WrapContainer() {
  const {
    showDeleteModal,
    showCreateModal,
    showEditModal,
    showEditProductModal,
    showCreateProductModal,
    setContext,
    items,
  } = useContext(ModalContext);

  return (
    <>
      <Modal />
      <Container>
        <aside>
          <button
            onClick={() => {
              showCreateModal();
            }}
          >
            <FiPlus size={20} color="#fff" />
            <span>Add</span>
          </button>
          <button
            onClick={() => {
              if (items.vendors.length === 0) {
                return toast.error('You must select a vendor.');
              } else if (items.vendors.length > 1) {
                return toast.error('Select only one vendor.');
              }
              setContext('vendors');
              showEditModal();
            }}
          >
            <FiEdit3 size={20} color="#fff" />
            <span>Edit</span>
          </button>
          <button
            onClick={() => {
              if (items.vendors.length === 0) {
                return toast.error('You must select a vendor.');
              }
              setContext('vendors');
              showDeleteModal();
            }}
          >
            <FiTrash size={20} color="#fff" />
            <span>Delete</span>
          </button>
        </aside>
        <VendorSection />
        <ProductSection />
        <div className="products-actions">
          <button
            onClick={() => {
              if (items.vendors.length === 0) {
                return toast.error('You must select a vendor.');
              } else if (items.vendors.length > 1) {
                return toast.error('Select only one vendor.');
              }
              setContext('products');
              showCreateProductModal();
            }}
          >
            <FiPlus size={20} color="#fff" />
            <span>Create product</span>
          </button>
          <button
            onClick={() => {
              if (items.products.length === 0) {
                return toast.error('You must select a product.');
              } else if (items.products.length > 1) {
                return toast.error('Select only one product.');
              }
              setContext('products');
              showEditProductModal();
            }}
          >
            <FiEdit3 size={20} color="#fff" />
            <span>Edit product</span>
          </button>
          <button
            onClick={() => {
              setContext('products');
              showDeleteModal();
            }}
          >
            <FiTrash size={20} color="#fff" />
            <span>Delete product</span>
          </button>
        </div>
      </Container>
    </>
  );
}

export default WrapContainer;
