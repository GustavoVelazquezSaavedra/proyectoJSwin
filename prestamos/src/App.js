import React, {Fragment, useState} from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';

function App() {
  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  return (
    <Fragment>
        <Header
          titulo="Cotizador de Prestamos"
        />
      <div className="container">
        <Formulario
            cantidad = {cantidad}
            guardarCantidad = {guardarCantidad}
            plazo = {plazo}
            guardarPlazo = {guardarPlazo}
        />
      </div>
    </Fragment>
  );
}

export default App;
