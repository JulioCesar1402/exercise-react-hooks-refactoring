// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [signal, setSignal] = useState({
    color: 'red',
  });

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({
      ...signal,
      color: signalColor,
    });
  };

  const context = {
    ...cars,
    ...signal,
    moveCar: moveCar,
    changeSignal: changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
