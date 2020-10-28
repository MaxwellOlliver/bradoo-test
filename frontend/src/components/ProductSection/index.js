import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { ProductContext } from '../../context/ProductContext';
import Loading from '../Loading';
import ProductItem from '../ProductItem';

import { Container } from './styles';

function ProductSection() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  function selectProduct(id) {
    if (selectedProducts.includes(id)) {
      setSelectedProducts((state) => state.filter((value) => value !== id));
    } else {
      setSelectedProducts((state) => [...state, id]);
    }
  }
  const { setProducts, products, selectedVendor, title, loading } = useContext(
    ProductContext
  );
  const { productsSetter, setItems, selectedProductsSetter } = useContext(
    ModalContext
  );

  useEffect(() => {
    console.log(products);
    setSelectedProducts([]);
  }, [selectedVendor, products]);

  useEffect(
    () =>
      setItems((state) => ({
        vendors: [...state.vendors],
        products: selectedProducts.map((value) =>
          products.find((product) => product.id === value)
        ),
      })),
    [selectedProducts, setItems, products]
  );
  useEffect(() => {
    productsSetter.current = setProducts;
    selectedProductsSetter.current = setSelectedProducts;
  }, [productsSetter, selectedProductsSetter, setProducts]);

  return (
    <Container>
      <header>
        <h3>{title}</h3>
      </header>
      <div className="labels">
        <span>Name</span>
        <span>Code</span>
        <span>Price</span>
      </div>
      <ul>
        {loading && <Loading />}
        {!products[0] && selectedVendor.id && (
          <li className="no-results">No products found.</li>
        )}
        {!products[0] && !selectedVendor.id && (
          <li className="no-results">Nothing here...</li>
        )}
        {products.map((value) => (
          <ProductItem
            selected={selectedProducts.includes(value.id)}
            key={value.id}
            product={value}
            onSelect={selectProduct}
          />
        ))}
      </ul>
    </Container>
  );
}

export default ProductSection;
