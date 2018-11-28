import * as React from 'react';
const img = require('./images/logo.png');

export const HelloComponent = () => (
  <>
    <div className={'parent'}>
      <div className={'child'}>
        <p>Hola mundo</p>
        <img src={img} alt='Lemoncode logo' />
      </div>
    </div>
  </>
);
