import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUsersVerify } from "../../redux/actions/userActions";

const Verification = () => {
    const dispatch = useDispatch();
    const [verificationCode, setVerificationCode] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleVerification();
    }
    
    const handleVerification = async () => {
        setError("");
        console.log('verificationCode:', verificationCode);
    
        try {
            const response = await dispatch(createUsersVerify({ verificationCode }));
            
            if (response && response.error) {
                setError(response.error.message);
            } else {
                navigate("/users/login");
            }
        } catch (error) {
            setError("Error en el proceso de verificación");
        }
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-2xl font-semibold">Ingrese el código de verificación que recibió en su correo electrónico</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            name="verificationCode"
                            type="text"
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            placeholder="Verification Code"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Verificar
                    </button>
                </form>
                
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Verification;
