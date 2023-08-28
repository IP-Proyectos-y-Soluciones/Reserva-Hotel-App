import React,{ useState } from "react";
import { useDispatch } from "react-redux";
//import { updatedUser } from "../../redux/features/userSlice";
import GoogleLogin from 'react-google-login';
import { loginUser } from "../../redux/actions/userActions";


const Login = () => {
    
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }
    const handleLogin = async () => {
        
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
            const response = dispatch(loginUser({ email, password }));
            console.log()
            if (response && response.error) {
                setError(response.error.message);
            }
        }             
        catch(error){
        setError("Error al registrar el usuario");
    };
    // localStorage.setItem("user", JSON.stringify(user));
     //   dispatch(updatedUser(user))
}
     const responseGoogle=(response)=>{
     console.log(response);
    }

    
    return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-2xl font-semibold">Login</h1>
                <form onSubmit={HandleSubmit}>
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
                    <br></br>
                    <br></br>
                    {error && <p>{error}</p>}
                    <GoogleLogin
                    clientId="287795968171-f9l08gai1j18gh3j6ek425kbnmla0kum.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
    />
                </form>

            </div>
        </div>
    )
}

export default Login;