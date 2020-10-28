import { api } from '../services/api';

const { createContext, useState } = require('react');

export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState({});
  const [title, setTitle] = useState(
    'Select a vendor to show himself products'
  );
  const [loading, setLoading] = useState(false);

  async function onSelectVendor(vendor) {
    let vendorPayload = vendor;
    try {
      setLoading(true);

      const response = await api.get(`/vendors/product?v=${vendorPayload.id}`);

      setProducts(
        response.data.map((product) => ({
          ...product,
          formatted_price: product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }),
        }))
      );
      setLoading(false);

      setTitle('Products supllied by ' + vendorPayload.name);
    } catch (error) {
      throw new Error(error);
    }
  }

  function onDeselectVendor(isMultiple = false) {
    if (isMultiple) {
      setTitle('Select only one vendor');
    } else {
      setTitle('Select a vendor to show himself products');
    }

    setSelectedVendor({});
    setProducts([]);
  }

  return (
    <ProductContext.Provider
      value={{
        loading,
        title,
        products,
        selectedVendor,
        setSelectedVendor,
        setProducts,
        setTitle,
        onDeselectVendor,
        onSelectVendor,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
