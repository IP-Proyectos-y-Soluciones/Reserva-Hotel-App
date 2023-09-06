import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div>
      <div>
        <h1>Pago realizado con exito!</h1>
      </div>
      <div>
        <Link to="/" className="hover:underline">
          <h1> Regresar a casa</h1>
        </Link>
      </div>
    </div>
  );
};

export default Success;
