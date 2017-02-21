import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import withStyles, { css } from './withStyles';

const styles = css`
  .container {
    padding: 4em;
    background: papayawhip;
    
    .title {
      font-size: 1.5em;
      text-align: center;
      color: ${props => (props.counter % 2) ? 'palevioletred' : 'red'};
    }
  }`;

function App({ counter, incrementCounter }) {
  return (
    <section className="container" onClick={incrementCounter}>
      <h2 className="title">Count : {counter}</h2>
    </section>
  );
}

export default compose(
  withState('counter', 'setCounter', 0),
  withHandlers({
    incrementCounter: ({ setCounter }) => () => setCounter(n => n + 1)
  }),
  withStyles(styles),
)(App);
