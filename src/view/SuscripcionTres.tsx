function SuscriptionTres() {
    return (
        <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
            <div className="absolute top-8 left-8 flex flex-col items-start">
                <h1 className="text-yellow-500 text-lg font-bold">INICIO</h1>
            </div>

            <div className="max-w-6xl px-4 w-full">

                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">Paso 3 y listo!</h1>
                </div>

                <div className="bg-yellow-500 rounded-t-lg px-4 py-3 text-center max-w-3xl w-full mx-auto -mb-2 text-black">
                    <h2 className="text-xl font-bold">ELIGE TU MEDIO DE PAGO</h2>
                    <p className="text-sm font-bold">Suscripción de 1 año<br />Plataforma de Negocio Comunal</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 text-black max-w-3xl w-full mx-auto">
                    <div className="text-center space-y-12">

                        <div className="flex flex-col items-center">
                            <p className="font-bold text-xl mb-4">Cuenta Corriente 1 hasta 3 cuotas precio contado</p>
                            <img
                                src="https://img.freepik.com/vector-premium/mano-paga-tarjeta-credito-traves-terminal-ilustracion-vectorial_515174-260.jpg"
                                alt="Pago con tarjeta"
                                className="w-24 h-24 mb-4"
                            />
                            <p className="font-bold text-lg">Cuenta UGA</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="font-bold text-xl mb-4">Paga con Cta Vista<br />$105.000 (+IVA) sin interés</p>
                            <img
                                src="https://images.vexels.com/content/263264/preview/money-business-bank-icon-31bb05.png"
                                alt="Pago banco"
                                className="w-24 h-24 mb-4"
                            />
                            <p className="font-bold text-lg">Cuenta UGA</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SuscriptionTres;
