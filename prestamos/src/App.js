import React, {Fragment} from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';

function App() {
  return (
    <Fragment>
        <Header
          titulo="Cotizador de Prestamos"
        />
      <div className="container">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
