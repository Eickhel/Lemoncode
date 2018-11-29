import * as React from 'react';
const img = require('./images/logo.png');

export const HelloComponent = () => (
  <div>
    <div className={'parent'}>
      <div className={'child'}>
        <p>Hola mundo from Parcel</p>
        <img src={img} alt='Lemoncode logo' />
      </div>
    </div>
  </div>
);
