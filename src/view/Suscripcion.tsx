function Suscription() {
    return (
        <section className="bg-black text-white py-12">
            <div className="max-w-6xl mx-auto px-4 space-y-12">

                <div className="text-yellow-500 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold">INICIO</h1>
                        <h2 className="text-lg md:text-xl">Plataforma de Negocios Comunal</h2>
                        <p className="text-sm md:text-lg">Una Gran Avenida</p>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">
                        Plan Suscripción 2024–2025
                    </h1>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <div className="bg-white rounded-t-lg px-4 py-4 max-w-sm w-full -mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-center text-black">
                            Pago único anual
                        </h2>
                    </div>
                    <div className="bg-yellow-500 text-black rounded-lg shadow-lg p-6 max-w-sm w-full">
                        <h3 className="text-lg font-bold text-center">Ficha Cliente</h3>
                        <div className="flex flex-col items-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">$$$</h1>
                            <p className="text-center text-sm">( +IVA )</p>
                        </div>
                        <hr className="my-4 border-t border-black" />
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <span className="text-lg text-green-600 mr-2">✔</span>
                                Ficha Cliente auto-administrable: ¡No pagues demás! La información de una Página Web en un solo lugar.
                            </li>
                            <li className="flex items-start">
                                <span className="text-lg text-green-600 mr-2">✔</span>
                                Crea un video de tu negocio y será compartido en todas nuestras RRSS.
                            </li>
                            <li className="flex items-start">
                                <span className="text-lg text-green-600 mr-2">✔</span>
                                Forma parte de una Comunidad virtual de Pymes: Aumenta tu visibilidad y cierre de negocio.
                            </li>
                            <li className="flex items-start">
                                <span className="text-lg text-green-600 mr-2">✔</span>
                                Accede a exclusivos cursos para suscritos en Marketing, Registro de Marca y mucho más.
                            </li>
                        </ul>
                    </div>
                    <button className="mt-4 bg-yellow-500 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-600 max-w-sm w-full">
                        Suscríbete Aquí
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col items-center h-full">
                        <div className="bg-black border border-gray-500 rounded-lg p-4 w-full h-full flex flex-col justify-between">
                            <h4 className="text-lg md:text-xl font-bold mb-4 text-center">Estadísticas e investigación</h4>
                            <p className="text-sm md:text-base text-center mb-6">
                                Un estudio realizado por ABI Research, indica que el comercio electrónico seguirá ganando protagonismo, llegando a ser hasta el 25% de las ventas de aquí al 2025.
                            </p>
                            <div className="flex items-center justify-center mt-auto">
                                <img src="https://via.placeholder.com/40" alt="Logo ABI Research" className="w-10 h-10 rounded-full mr-3" />
                                <p className="text-sm md:text-base text-center">
                                    ABI Research<br />
                                    <span className="text-gray-400">Empresa</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col items-center h-full">
                        <div className="bg-black border border-gray-500 rounded-lg p-4 w-full h-full flex flex-col justify-between">
                            <h4 className="text-lg md:text-xl font-bold mb-4 text-center">El e-commerce llegó para quedarse</h4>
                            <p className="text-sm md:text-base text-center mb-6">
                                En el Diario Financiero señala que el auge del Comercio Electrónico instó la necesidad de adaptarse a las tendencias del sector, a las nuevas herramientas y a las distintas formas de vender los productos/servicios.
                            </p>
                            <div className="flex items-center justify-center mt-auto">
                                <img src="https://via.placeholder.com/40" alt="Logo Diario Financiero" className="w-10 h-10 rounded-full mr-3" />
                                <p className="text-sm md:text-base text-center">
                                    DIARIO FINANCIERO<br />
                                    <span className="text-gray-400">Periódico</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white p-6 rounded-lg shadow-md flex flex-col items-center h-full">
                        <div className="bg-black border border-gray-500 rounded-lg p-4 w-full h-full flex flex-col justify-between">
                            <h4 className="text-lg md:text-xl font-bold mb-4 text-center">La Importancia de aparecer</h4>
                            <p className="text-sm md:text-base text-center mb-6">
                                Los representantes de la Confederación del Comercio Detallista chileno señalan la importancia de aparecer en plataformas virtuales que visibilicen el comercio local ante una inestabilidad que se acentuó a partir del COVID.
                            </p>
                            <div className="flex items-center justify-center mt-auto">
                                <img src="https://via.placeholder.com/40" alt="Logo Confedech" className="w-10 h-10 rounded-full mr-3" />
                                <p className="text-sm md:text-base text-center">
                                    CONFEDERACIÓN DEL COMERCIO<br />
                                    <span className="text-gray-400">Detallista Chileno</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Suscription;
