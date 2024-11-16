function SuscriptionDos() {
    return (
        <section className="bg-black text-white py-12">
            <div className="max-w-6xl mx-auto px-4 space-y-12">

                <div className="text-yellow-500 flex flex-col">
                    <h1 className="text-2xl font-bold">INICIO</h1>
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-20">Paso 2 de 3!</h1>
            </div>

            <div className="bg-white rounded-t-lg px-4 py-4 text-center max-w-3xl mx-auto -mb-2">
                <h2 className="text-2xl font-bold text-black">Información de Suscripción</h2>
            </div>

            <div className="bg-yellow-500 text-black rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
                <div className="text-lg space-y-8 text-center">

                    {/* Representante de la Suscripción */}
                    <div>
                        <h3 className="font-bold text-xl">Representante de la Suscripción</h3>
                        <p className="text-lg">Primer Nombre y ambos apellidos</p>
                        <p className="text-lg">Número Celular de Contacto</p>
                    </div>

                    {/* Datos de Facturación Empresa */}
                    <div>
                        <h3 className="font-bold text-xl">Datos de Facturación Empresa</h3>
                        <p className="text-lg">Razón Social (Nombre Empresa)</p>
                        <p className="text-lg">Dirección de la Empresa</p>
                        <p className="text-lg">RUT Empresa</p>
                    </div>

                    {/* Datos de Figuración en la Plataforma */}
                    <div>
                        <h3 className="font-bold text-xl">Datos de Figuración en la Plataforma</h3>
                        <p className="text-lg">Rubro</p>
                        <p className="text-lg">Nombre Negocio (Aparecerá)</p>
                        <p className="text-lg">Reseña Negocio (Quiénes son)</p>
                        <p className="text-lg">Servicios/Productos Ofrecidos</p>
                        <p className="text-lg">5 Preguntas/Respuestas Frecuentes</p>
                        <p className="text-lg">Geolocalización (Latitud-Longitud)</p>
                        <p className="text-lg">Link Whatsapp, Instagram, Web, otros</p>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-black text-yellow-500 font-bold text-lg py-4 px-16 rounded-full hover:bg-gray-800">
                        Siguiente
                    </button>
                </div>
            </div>

        </section>
    );
}

export default SuscriptionDos;
