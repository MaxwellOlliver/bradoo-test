import React from 'react';

import { Container } from './styles';

function VendorItem(props) {
  return (
    <Container
      selected={props.selected}
      onClick={() => props.onSelect(props.vendor.id)}
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
        <span>{props.vendor.name}</span>
        <span>{props.vendor.cnpj}</span>
        <span>{props.vendor.city}</span>
      </div>
    </Container>
  );
}

export default VendorItem;
