import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";

function Suscription() {
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
                <div className="max-w-6xl mx-auto px-4 space-y-12">

                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 neon-text">
                            Plan suscripción 2024–2025
                        </h1>
                    </div>

                    <div className="flex flex-col items-center space-y-6">
                        <div className="bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 rounded-t-lg px-6 py-6 max-w-sm w-full text-center text-black shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                            <h2 className="text-2xl font-bold">Pago único anual</h2>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 rounded-lg shadow-lg p-6 max-w-sm w-full">
                            <h3 className="text-xl font-semibold text-center text-yellow-400 neon-text">
                                Ficha cliente
                            </h3>
                            <div className="flex flex-col items-center">
                                <h1 className="text-5xl font-bold text-center mb-2 text-yellow-400">$199</h1>
                                <p className="text-center text-sm text-gray-400">( +iva )</p>
                            </div>
                            <hr className="my-4 border-t border-gray-500" />
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start">
                                    <span className="text-lg text-green-400 mr-2">✔</span>
                                    Ficha cliente auto-administrable: ¡no pagues demás! La información de una página web en un solo lugar.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-lg text-green-400 mr-2">✔</span>
                                    Crea un video de tu negocio y será compartido en todas nuestras RRSS.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-lg text-green-400 mr-2">✔</span>
                                    Forma parte de una comunidad virtual de pymes: aumenta tu visibilidad y cierre de negocio.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-lg text-green-400 mr-2">✔</span>
                                    Accede a exclusivos cursos para suscritos en marketing, registro de marca y más.
                                </li>
                            </ul>
                        </div>
                        <a href="/suscripcion-paso-dos">
                            <button className="mt-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transform transition-all hover:scale-105">
                                Suscríbete aquí
                            </button>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Estadísticas e investigación",
                                description:
                                    "Un estudio realizado por ABI Research indica que el comercio electrónico seguirá ganando protagonismo, llegando a ser hasta el 25% de las ventas de aquí al 2025.",
                                imgSrc:
                                    "https://pbs.twimg.com/profile_images/1742199814253576193/l-1ZYXKx_200x200.jpg",
                                footer: "ABI Research",
                                footerSub: "Empresa",
                            },
                            {
                                title: "El e-commerce llegó para quedarse",
                                description:
                                    "En el Diario Financiero señalan que el auge del comercio electrónico instó la necesidad de adaptarse a las tendencias del sector, a las nuevas herramientas y a las distintas formas de vender los productos/servicios.",
                                imgSrc:
                                    "https://yt3.googleusercontent.com/kduHDcPy1PInLtn1tCcA7YNXj7AKqFrckeFRSuSEyxe2TPhNgjdLCZLNJSBQrjJFGF6K-qp_xA=s900-c-k-c0x00ffffff-no-rj",
                                footer: "Diario Financiero",
                                footerSub: "Periódico",
                            },
                            {
                                title: "La importancia de aparecer",
                                description:
                                    "Los representantes de la Confederación del Comercio Detallista chileno señalan la importancia de aparecer en plataformas virtuales que visibilicen el comercio local ante una inestabilidad que se acentuó a partir del COVID.",
                                imgSrc:
                                    "https://www.diarioconstitucional.cl/wp-content/uploads/2022/06/camara-de-comercio-detallista-y-turismo-ancud.jpg",
                                footer: "Confedech",
                                footerSub: "Detallista Chileno",
                            },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="relative bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 group-hover:opacity-40 blur-2xl rounded-lg"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <h4 className="text-lg md:text-xl font-bold mb-4 text-center text-yellow-400 uppercase">
                                        {card.title}
                                    </h4>
                                    <p className="text-sm md:text-base text-center mb-6 text-gray-300">
                                        {card.description}
                                    </p>
                                    <div className="flex items-center justify-center mt-auto">
                                        <img
                                            src={card.imgSrc}
                                            alt={`Logo ${card.footer}`}
                                            className="w-12 h-12 rounded-full border-4 border-yellow-400 shadow-md"
                                        />
                                        <div className="ml-4 text-center">
                                            <p className="text-lg text-yellow-400 font-semibold">
                                                {card.footer}
                                            </p>
                                            <span className="text-sm text-gray-400">
                                                {card.footerSub}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Suscription;
