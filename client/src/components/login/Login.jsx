import { useState } from "react";


const Login = () => {

    const [name, setName]= useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState(false);

    const HandlerSubmit = (e) => {
        e.preventDefault()
    }

    
    return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-2xl font-semibold">Login</h1>
                <form onSubmit={HandlerSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-red-500"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;