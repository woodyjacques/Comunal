
function Section5() {
    return (
        <div>
            <section className="bg-yellow-500 py-20 text-center">
                <h3 className="text-3xl font-bold mb-10 text-black">Proceso de Suscripción</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold mb-4">Paso 1</h4>
                        <p>Selecciona tu rubro y completa la información de tu negocio.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold mb-4">Paso 2</h4>
                        <p>Completa los datos de facturación y elige tu plan.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h4 className="text-2xl font-bold mb-4">Paso 3</h4>
                        <p>Elige tu método de pago y completa la suscripción.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section5;