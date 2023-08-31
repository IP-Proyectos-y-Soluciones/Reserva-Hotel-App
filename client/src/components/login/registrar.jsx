import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { createUsers } from "../../redux/actions/userActions";

const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister();
    }
    
    const handleRegister = async () => {
        setError("");
        
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError('Correo electrónico no válido');
            return;
        }
    
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            setError('La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número');
            return;
        }
        
        try {
            const response = await dispatch(createUsers({ name, email, password }));
            
            if (response && response.error) {
                setError(response.error.message);
            } else {
                navigate("/verification");
            }
        } catch (error) {
            setError("Error al registrar el usuario");
        }
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-2xl font-semibold">Registrarse</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            name="name"
                            type="text"
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            name="email"
                            type="text"
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            name="password"
                            type="password"
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-red-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Registrarse
                    </button>
                </form>
                
                <p className="mt-4 text-sm text-center">
                    Ya tienes perfil?{" "}
                    <NavLink className="text-blue-500 hover:underline" to="/users/login">
                    Iniciar sesión
                    </NavLink>
                </p>
                
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Register;
