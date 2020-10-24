import React, {Fragment, useState} from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import Mensaje from './component/Mensaje';
import Resultado from './component/Resultados';

function App() {
  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);


  let componente;
  if(total === 0){
    componente=<Mensaje />
  }else{
    componente=<Resultado />
  }
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
            total={total}
            guardarTotal={guardarTotal}
        />
        <div className="mensajes">
          {componente}
        </div>
        
      </div>
    </Fragment>
  );
}

export default App;
