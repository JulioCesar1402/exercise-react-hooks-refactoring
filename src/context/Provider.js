// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = () => {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => {
    setCars({
      cars: {
        ...cars,
        [car]: side,
      },
    });
  };

  const context = {
    ...cars,
    moveCar: moveCar,
  };

  const { children } = this.props;

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
