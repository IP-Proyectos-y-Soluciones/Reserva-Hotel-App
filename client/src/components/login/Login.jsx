
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../../redux/actions/userActions";
import GoogleLogin from "react-google-login";



const Login = ({ setIsLoggedIn }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const clientID = "954982957712-gr3dpedcnotb0r1l3pqp0bj5ovnl6ftt.apps.googleusercontent.com"

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin();
  };

  const onGoogleLoginSuccess = async (response) => {
    const profile = response.profileObj;
    setEmail(profile.email);
    setPassword("enginI123");
  
    try {
      await handleGoogle();
    } catch (error) {
      setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    }
  };
  
  const handleGoogle = async () => {
    setError("");
   
     await dispatch(loginUser({ email, password }));        
        navigate("/");
        setIsLoggedIn(true);
  };

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
  };


  

  const onGoogleLoginFailure = (error) => {
    console.error("FUE UN ERROR CON GOOGLE: ", error);
  };

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

    
        <GoogleLogin
          clientId={clientID}
          buttonText="LOGIN CON GOOGLE"
          onSuccess={onGoogleLoginSuccess}
          onFailure={onGoogleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Login;