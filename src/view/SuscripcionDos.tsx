import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";

function SuscriptionDos() {
    return (
        <div>
            <Header/>
            <section
                className="font-quicksand bg-black text-white py-12"
                style={{
                    backgroundImage:
                        "url('https://t4.ftcdn.net/jpg/06/02/53/19/360_F_602531991_JAiIYvvEGIWYBejaZXN2JAQZp1xJWHGv.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-20 neon-text">
                        Paso 2 de 3!
                    </h1>
                </div>

                <div className="bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 rounded-t-lg px-6 py-6 text-center max-w-3xl mx-auto -mb-2 shadow-xl">
                    <h2 className="text-2xl font-bold text-black">Información de Suscripción</h2>
                </div>

                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
                    <div className="text-lg space-y-8 text-center">
                        <div>
                            <h3 className="font-bold text-xl text-yellow-400">Representante de la Suscripción</h3>
                            <p className="text-lg text-gray-300">Primer Nombre y ambos apellidos</p>
                            <p className="text-lg text-gray-300">Número Celular de Contacto</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-yellow-400">Datos de Facturación Empresa</h3>
                            <p className="text-lg text-gray-300">Razón Social (Nombre Empresa)</p>
                            <p className="text-lg text-gray-300">Dirección de la Empresa</p>
                            <p className="text-lg text-gray-300">RUT Empresa</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-yellow-400">Datos de Figuración en la Plataforma</h3>
                            <p className="text-lg text-gray-300">Rubro</p>
                            <p className="text-lg text-gray-300">Nombre Negocio (Aparecerá)</p>
                            <p className="text-lg text-gray-300">Reseña Negocio (Quiénes son)</p>
                            <p className="text-lg text-gray-300">Servicios/Productos Ofrecidos</p>
                            <p className="text-lg text-gray-300">5 Preguntas/Respuestas Frecuentes</p>
                            <p className="text-lg text-gray-300">Geolocalización (Latitud-Longitud)</p>
                            <p className="text-lg text-gray-300">Link Whatsapp, Instagram, Web, otros</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <a href="/suscripcion-paso-tres">
                            <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-lg py-4 px-16 rounded-full shadow-lg hover:shadow-2xl transform transition-all hover:scale-105">
                                Siguiente
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SuscriptionDos;
