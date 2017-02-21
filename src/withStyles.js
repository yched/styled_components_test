import React from 'react';
import styled from 'styled-components';

export const css = (...args) => args;

export default function withStyles(args) {
  const Wrapper = styled.div(...args);
  return Component => props => <Wrapper {...props}><Component {...props}/></Wrapper>;
}
