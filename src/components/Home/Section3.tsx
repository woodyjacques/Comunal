
function Section3() {
    return (
        <div>
            <section className="py-20 bg-yellow-500">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-8 text-black">¿Por qué elegir nuestra plataforma?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-yellow-200 p-8 rounded-lg shadow-md">
                            <h4 className="text-2xl font-semibold mb-4">Visibilidad Local</h4>
                            <p>Aumenta la visibilidad de tu negocio en la comunidad local, atrayendo más clientes de la región.</p>
                        </div>
                        <div className="bg-yellow-200 p-8 rounded-lg shadow-md">
                            <h4 className="text-2xl font-semibold mb-4">Autogestión</h4>
                            <p>Administra tu perfil, actualiza información y mantén tu negocio activo con facilidad.</p>
                        </div>
                        <div className="bg-yellow-200 p-8 rounded-lg shadow-md">
                            <h4 className="text-2xl font-semibold mb-4">Conexión Directa</h4>
                            <p>Conecta directamente con clientes interesados en tus productos o servicios.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section3;