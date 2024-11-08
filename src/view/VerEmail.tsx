
function VerEmail() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-500 font-quicksand">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-yellow-600">Verificar Cuenta / Cambiar Contraseña</h2>
                <p className="text-center text-gray-700 mb-6">Ingresa tu correo electrónico para recibir un enlace de verificación o para restablecer tu contraseña.</p>

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
                        <button
                            type="submit"
                            className="w-full bg-yellow-600 text-white font-bold py-2 rounded-lg hover:bg-yellow-700 transition"
                        >
                            Enviar Enlace
                        </button>
                    </div>

                    <div className="text-center text-sm text-gray-600">
                        Te enviaremos un enlace a tu correo electrónico para verificar tu cuenta o restablecer la contraseña.
                    </div>

                    <div className="text-center text-sm text-gray-600 mt-4">
                        ¿Recordaste tu contraseña?{' '}
                        <a href="/login" className="text-yellow-600 hover:underline">Inicia Sesión</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VerEmail;
