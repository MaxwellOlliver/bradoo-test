import React from 'react';

import { Container } from './styles';

function ProductItem(props) {
  return (
    <Container
      selected={props.selected}
      onClick={() => props.onSelect(props.product.id)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '0 20px',
        }}
      >
        <div className="selected"></div>
        <span>{props.product.name}</span>
        <span>{props.product.code}</span>
        <span>{props.product.formatted_price}</span>
      </div>
    </Container>
  );
}

export default ProductItem;
