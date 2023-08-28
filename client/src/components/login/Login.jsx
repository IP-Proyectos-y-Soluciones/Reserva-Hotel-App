import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GoogleLogin from 'react-google-login';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setError(""); // Hata durumunu sıfırla

            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                setError("Correo electrónico no válido");
                return;
            }

            if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
                setError("La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número");
                return;
            }

            const response = await axios.post("http://localhost:3001/users/login", { email, password });
            
            if (response.data.success) {
                // Başarılı giriş durumu
                console.log("Giriş başarılı:", response.data);
                // Giriş işlemlerini burada yönetebilirsiniz
            } else {
                // Giriş başarısız durumu
                setError("Invalid email or password"); // Sunucudan gelen hata mesajını kullanabilirsiniz
            }
        } catch (error) {
            console.error("Hata:", error);
            setError("Error al iniciar sesión"); // Genel bir hata mesajı
        }
    }

    const responseGoogle = (response) => {
        console.log(response);
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
                    <br></br>
                    <br></br>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <br></br>
                    <br></br>
                    {error && <p>{error}</p>}
                    <GoogleLogin
                        clientId="Your-Google-Client-ID"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
            </div>
        </div>
    );
}

export default Login;
