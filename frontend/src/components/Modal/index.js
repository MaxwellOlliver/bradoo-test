import { useContext, useState } from 'react';

import { DeleteContainer, CreateContainer } from './styles';
import deletingAnimation from '../../assets/delete.gif';
import colorAnimation from '../../assets/color.gif';
import { api } from '../../services/api';
import { ModalContext } from '../../context/ModalContext';
import { FiX } from 'react-icons/fi';
import { validate } from '../../utils/validateCnpj';
import { toast } from 'react-toastify';

const charKeys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

function Modal(props) {
  const {
    context,
    items,
    hideModal,
    vendorsSetter,
    selectedVendorsSetter,
    productsSetter,
    selectedProductsSetter,
    setItems,
    modal,
  } = useContext(ModalContext);

  function CreateModal() {
    const [vendorName, setVendorName] = useState('');
    const [vendorCnpj, setVendorCnpj] = useState('');
    const [vendorCity, setVendorCity] = useState('');
    const [productName, setProductName] = useState('');
    const [productCode, setProductCode] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [addedProducts, setAddedProducts] = useState([]);
    const [cnpjIsValid, setCnpjIsValid] = useState(true);
    const [loading, setLoading] = useState(false);

    function handleAddProduct(e) {
      e.preventDefault();
      const product = {
        pId: addedProducts[addedProducts.length - 1]
          ? addedProducts[addedProducts.length - 1].pId + 1
          : 1,
        name: productName,
        code: productCode,
        price: Number(productPrice),
        formatted_price: Number(productPrice).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      };

      setAddedProducts((state) => [...state, product]);

      setProductName('');
      setProductCode('');
      setProductPrice('');
    }

    function handleDeleteProduct(id) {
      setAddedProducts((state) => state.filter((value) => value.pId !== id));
    }

    function cnpjMask(event) {
      if (!charKeys.includes(event.charCode || event.wich)) {
        event.preventDefault();
        return;
      }

      const value = event.target.value;

      if (value.length === 2) {
        event.target.value += '.';
      } else if (value.length === 6) {
        event.target.value += '.';
      } else if (value.length === 10) {
        event.target.value += '/';
      } else if (value.length === 15) {
        event.target.value += '-';
      }
    }

    async function handleSubmit(e) {
      e.preventDefault();
      if (!validate(vendorCnpj)) {
        return toast.error('Invalid CNPJ');
      }
      if (
        vendorName &&
        vendorCnpj &&
        cnpjIsValid &&
        vendorCity &&
        addedProducts[0]
      ) {
        const vendor = {
          name: vendorName,
          cnpj: vendorCnpj,
          city: vendorCity,
          products: addedProducts,
        };

        try {
          setLoading(true);
          const response = await api.post('/vendors', vendor);

          vendorsSetter.current((state) => [...state, response.data]);
          setLoading(false);
          hideModal();
        } catch (error) {
          toast.error('Internal error.');
        }
      } else {
        toast.error('Fill in all fields.');
      }
    }

    return (
      <CreateContainer cnpjIsValid={cnpjIsValid}>
        {loading ? (
          <div className="animation">
            <img src={colorAnimation} alt="color" />
          </div>
        ) : (
          <>
            <form>
              <h3>Vendor Info</h3>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={(e) => setVendorName(e.target.value)}
              />
              <input
                type="text"
                name="cnpj"
                id="cnpj"
                placeholder="CNPJ"
                onKeyPress={cnpjMask}
                onChange={(event) => setVendorCnpj(event.target.value)}
                onBlur={() => {
                  if (!validate(vendorCnpj)) {
                    setCnpjIsValid(false);
                    toast.error('Invalid CNPJ');
                  }
                }}
                maxLength={18}
              />
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                onChange={(e) => setVendorCity(e.target.value)}
              />

              <div className="sub-form">
                <h3>Vendor's Products</h3>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  placeholder="Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <input
                  type="text"
                  name="code"
                  id="code"
                  placeholder="Code"
                  value={productCode}
                  onChange={(e) => setProductCode(e.target.value)}
                />
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
                <button onClick={handleAddProduct}>Add</button>
              </div>
              <div className="row">
                <button type="submit" onClick={handleSubmit}>
                  Create
                </button>
                <button
                  id="back"
                  onClick={(e) => {
                    e.preventDefault();
                    hideModal();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
            <div className="products-list">
              <h3>Added Products</h3>
              <div className="labels">
                <span>Name</span>
                <span>Code</span>
                <span>Price</span>
              </div>
              <ul>
                {!addedProducts[0] && (
                  <span className="no-products">No products added</span>
                )}
                {addedProducts.map((product) => (
                  <li key={product.pId}>
                    <span>{product.name}</span>
                    <span>{product.code}</span>
                    <span>{product.formatted_price}</span>
                    <FiX
                      size={14}
                      color="#333"
                      onClick={() => handleDeleteProduct(product.pId)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </CreateContainer>
    );
  }

  function DeleteModal() {
    const [isDeleting, setIsDeleting] = useState(false);

    async function deleteItems() {
      if (items[context] && items[context][0]) {
        setIsDeleting(true);

        try {
          await Promise.all(
            items[context].map(
              async (value) =>
                await api.delete(
                  context === 'vendors'
                    ? `/vendors/${value.id}`
                    : `/vendors/product/${value.id}`
                )
            )
          );
        } catch (error) {
          toast.error('Internal error.');
        }

        setIsDeleting(false);

        if (context === 'vendors') {
          vendorsSetter.current((state) =>
            state.filter(
              (value) => !items[context].map((v) => v.id).includes(value.id)
            )
          );

          selectedVendorsSetter.current([]);
        } else {
          productsSetter.current((state) =>
            state.filter(
              (value) => !items[context].map((v) => v.id).includes(value.id)
            )
          );
        }

        selectedProductsSetter.current([]);
        setItems(
          context === 'vendors'
            ? (state) => ({
                products: [],
                vendors: [],
              })
            : (state) => ({
                products: [],
                vendors: [...state.vendors],
              })
        );
        hideModal();
      }
    }

    return (
      <DeleteContainer>
        <div className="modal-window">
          {!isDeleting ? (
            <>
              <span>
                {items[context].length} {context} will be deleted. Are you sure?
              </span>

              <div className="row">
                <button onClick={deleteItems}>Yes</button>
                <button className="focused" onClick={hideModal}>
                  No
                </button>
              </div>
            </>
          ) : (
            <img src={deletingAnimation} alt="" />
          )}
        </div>
      </DeleteContainer>
    );
  }

  function EditModal() {
    const [vendorName, setVendorName] = useState(items.vendors[0].name);
    const [vendorCnpj, setVendorCnpj] = useState(items.vendors[0].cnpj);
    const [vendorCity, setVendorCity] = useState(items.vendors[0].city);
    const [cnpjIsValid, setCnpjIsValid] = useState(true);

    function cnpjMask(event) {
      if (!charKeys.includes(event.charCode || event.wich)) {
        event.preventDefault();
        return;
      }

      const value = event.target.value;

      if (value.length === 2) {
        event.target.value += '.';
      } else if (value.length === 6) {
        event.target.value += '.';
      } else if (value.length === 10) {
        event.target.value += '/';
      } else if (value.length === 15) {
        event.target.value += '-';
      }
    }

    async function handleEdit(e) {
      e.preventDefault();

      if (!validate(vendorCnpj)) {
        return toast.error('Invalid CNPJ');
      }
      if (vendorName && vendorCity) {
        try {
          await api.put(`/vendors/${items.vendors[0].id}`, {
            name: vendorName,
            cnpj: vendorCnpj,
            city: vendorCity,
          });

          vendorsSetter.current((state) => [
            ...state.filter((v) => v.id !== items.vendors[0].id),
            {
              id: items.vendors[0].id,
              name: vendorName,
              cnpj: vendorCnpj,
              city: vendorCity,
            },
          ]);
          hideModal();
        } catch (error) {}
      } else {
        toast.error('Internal error.');
      }
    }

    return (
      <CreateContainer cnpjIsValid={cnpjIsValid}>
        <form action="" style={{ alignSelf: 'center' }}>
          <h3>Vendor Info</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
          />
          <input
            type="text"
            name="cnpj"
            id="cnpj"
            placeholder="CNPJ"
            value={vendorCnpj}
            onKeyPress={cnpjMask}
            onChange={(event) => setVendorCnpj(event.target.value)}
            onBlur={() => setCnpjIsValid(validate(vendorCnpj))}
            maxLength={18}
          />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            value={vendorCity}
            onChange={(e) => setVendorCity(e.target.value)}
          />

          <div className="row">
            <button type="submit" onClick={handleEdit}>
              Edit
            </button>
            <button
              id="back"
              onClick={(e) => {
                e.preventDefault();
                hideModal();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </CreateContainer>
    );
  }

  function EditProductModal() {
    const [productName, setProductName] = useState(items.products[0].name);
    const [productCode, setProductCode] = useState(items.products[0].code);
    const [productPrice, setProductPrice] = useState(items.products[0].price);

    async function handleEdit(e) {
      e.preventDefault();
      if (productName && productCode && productPrice) {
        try {
          await api.put(`/vendors/product/${items.products[0].id}`, {
            vendor_id: items.vendors[0].id,
            name: productName,
            code: productCode,
            price: productPrice,
          });

          productsSetter.current((state) => [
            ...state.filter((v) => v.id !== items.products[0].id),
            {
              id: items.products[0].id,
              name: productName,
              code: productCode,
              price: productPrice,
              formatted_price: Number(productPrice).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }),
            },
          ]);
          hideModal();
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.error('Fill in all fields, please.');
      }
    }

    return (
      <CreateContainer>
        <form style={{ alignSelf: 'center' }}>
          <h3>Product Info</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="text"
            name="code"
            id="code"
            placeholder="Code"
            value={productCode}
            onChange={(event) => setProductCode(event.target.value)}
          />
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />

          <div className="row">
            <button type="submit" onClick={handleEdit}>
              Edit
            </button>
            <button
              id="back"
              onClick={(e) => {
                e.preventDefault();
                hideModal();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </CreateContainer>
    );
  }

  return modal === 'delete' ? (
    <DeleteModal />
  ) : modal === 'create' ? (
    <CreateModal />
  ) : modal === 'edit' ? (
    <EditModal />
  ) : modal === 'editProduct' ? (
    <EditProductModal />
  ) : null;
}

export default Modal;
