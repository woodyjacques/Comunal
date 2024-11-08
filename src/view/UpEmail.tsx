import { useState } from 'react';

function UpEmail() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-500 font-quicksand">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-yellow-600">Actualizar Contraseña</h2>
                <p className="text-center text-gray-700 mb-6">Ingresa tu nueva contraseña para actualizarla.</p>

                <form className="space-y-6">
                    {/* Nueva Contraseña */}
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="newPassword"
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

                    {/* Confirmar Nueva Contraseña */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar Nueva Contraseña</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                placeholder="********"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 px-3 py-1 text-sm font-medium text-yellow-600 hover:text-yellow-700"
                            >
                                {showConfirmPassword ? "Ocultar" : "Ver"}
                            </button>
                        </div>
                    </div>

                    {/* Nota de Seguridad */}
                    <div className="text-sm text-gray-600">
                        Asegúrate de que tu contraseña tenga al menos 8 caracteres y contenga una combinación de letras, números y caracteres especiales.
                    </div>

                    {/* Botón para Actualizar Contraseña */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-600 text-white font-bold py-2 rounded-lg hover:bg-yellow-700 transition"
                        >
                            Actualizar Contraseña
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpEmail;
