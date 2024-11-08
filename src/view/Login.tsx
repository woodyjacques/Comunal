import { useState } from 'react';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-500 font-quicksand">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-yellow-600">Iniciar Sesión</h2>
                <form className="space-y-6">

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="ejemplo@correo.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="********"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 px-3 py-1 text-sm font-medium text-yellow-600 hover:text-yellow-700"
                            >
                                {showPassword ? "Ocultar" : "Ver"}
                            </button>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-600 text-white font-bold py-2 rounded-lg hover:bg-yellow-700 transition"
                        >
                            Iniciar Sesión
                        </button>
                    </div>

                    <div className="text-center text-sm text-gray-600">
                        <a href="verificacion-cuenta" className="text-yellow-600 hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>

                    <div className="text-center text-sm text-gray-600 mt-4">
                        ¿No tienes una cuenta?{' '}
                        <a href="register" className="text-yellow-600 hover:underline">Regístrate aquí</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
