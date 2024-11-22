import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";

function SuscriptionTres() {
    return (
        <div>
            <Header/>
            <section
                className="font-quicksand bg-black text-white min-h-screen flex flex-col items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://t4.ftcdn.net/jpg/06/02/53/19/360_F_602531991_JAiIYvvEGIWYBejaZXN2JAQZp1xJWHGv.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute top-8 left-8 flex flex-col items-start">
                    <h1 className="text-yellow-400 text-lg font-bold neon-text">Inicio</h1>
                </div>

                <div className="max-w-6xl px-4 w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 neon-text">
                            Paso 3 ¡y listo!
                        </h1>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 rounded-t-lg px-6 py-4 text-center max-w-3xl w-full mx-auto -mb-2 shadow-lg">
                        <h2 className="text-xl font-bold text-black">Elige tu medio de pago</h2>
                        <p className="text-sm font-bold text-black">
                            Suscripción de 1 año<br />Plataforma de Negocio Comunal
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg p-8 text-gray-100 max-w-3xl w-full mx-auto">
                        <div className="text-center space-y-12">
                            <div className="flex flex-col items-center">
                                <p className="font-bold text-xl mb-4 text-yellow-400">
                                    Cuenta corriente 1 hasta 3 cuotas precio contado
                                </p>
                                <img
                                    src="https://img.freepik.com/vector-premium/mano-paga-tarjeta-credito-traves-terminal-ilustracion-vectorial_515174-260.jpg"
                                    alt="Pago con tarjeta"
                                    className="w-24 h-24 mb-4 border-4 border-yellow-400 shadow-md rounded-full"
                                />
                                <p className="font-bold text-lg text-gray-300">Cuenta UGA</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <p className="font-bold text-xl mb-4 text-yellow-400">
                                    Paga con cuenta vista<br />$105.000 (+IVA) sin interés
                                </p>
                                <img
                                    src="https://images.vexels.com/content/263264/preview/money-business-bank-icon-31bb05.png"
                                    alt="Pago banco"
                                    className="w-24 h-24 mb-4 border-4 border-yellow-400 shadow-md rounded-full"
                                />
                                <p className="font-bold text-lg text-gray-300">Cuenta UGA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SuscriptionTres;
