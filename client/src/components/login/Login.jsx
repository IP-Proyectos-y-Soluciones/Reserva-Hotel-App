import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../../redux/actions/userActions";

const Login = ({ setIsLoggedIn }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin();
    }
   //handle login
    const handleLogin = async () => {
        setError("");

        try {
            const response = await dispatch(loginUser({ email, password }));
        
            if (response && response.error) {
                setError(response.error.message);
            } else {
                    navigate("/");
                    setIsLoggedIn(true);
            }
        } catch (error) {
            setError("Error al registrar el usuario");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-2xl font-semibold">Login</h1>
                <form onSubmit={handleSubmit}>
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
                        Login
                    </button>
                    <p className="mt-4 text-sm text-center">
                        No tienes perfil?{" "}
                        <NavLink className="text-blue-500 hover:underline" to="/registrar">
                            Registrarse
                        </NavLink>
                    </p>
                    <br />
                    <br />
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;