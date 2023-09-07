import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center py-2">
      <div className="font-bold text-6xl py-2">
        <p>¡Pago realizado con exito!</p>
      </div>
      <div className="bg-[#B99768] py-2 rounded-md w-36 text-center">
        <Link to="/" className="hover:underline font-medium text-white">
          <h1> Regresar a casa</h1>
        </Link>
      </div>
    </div>
  );
};

export default Success;
