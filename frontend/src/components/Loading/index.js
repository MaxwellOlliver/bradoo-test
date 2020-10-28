import React from 'react';
import { Container } from './styles';

import loaderSvg from '../../assets/oval.svg';

function Loading(props) {
  return (
    <Container style={props.style}>
      <img src={loaderSvg} alt="loader" />
    </Container>
  );
}

export default Loading;
