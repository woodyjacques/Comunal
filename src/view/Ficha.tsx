import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";

function Ficha() {
    return (
        <div>
            <Header />
            <div
                className="font-quicksand bg-black text-white min-h-screen py-16 px-8"
                style={{
                    backgroundImage:
                        "url('https://static.vecteezy.com/system/resources/previews/001/339/645/non_2x/glowing-stylish-honeycomb-background-free-vector.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start relative">
                    
                    <div className="md:w-1/3 w-full flex flex-col items-center">
                        <img
                            src="https://fotografias.antena3.com/clipping/cmsimages01/2024/06/09/E41D8F10-4865-48FB-ADDB-00B290C1B5C3/imagen-zapatero_70.jpg?crop=1694,953,x90,y0&width=480&height=270&optimize=high&format=webply"
                            alt="Zapatería"
                            className="rounded-lg mb-8 w-full h-auto shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                        />
                        <div className="flex justify-center space-x-4 md:space-x-8 mt-8">
                            {[
                                {
                                    href: "#",
                                    src: "https://cdn-icons-png.flaticon.com/512/3955/3955027.png",
                                    alt: "Instagram",
                                },
                                {
                                    href: "#",
                                    src: "https://icons-for-free.com/iff/png/512/facebook+logo+media+network+social+icon-1320192913497992427.png",
                                    alt: "Facebook",
                                },
                                {
                                    href: "#",
                                    src: "https://cdn.iconscout.com/icon/free/png-256/free-youtube-104-432560.png?f=webp",
                                    alt: "YouTube",
                                },
                                {
                                    href: "#",
                                    src: "https://cdn.icon-icons.com/icons2/2972/PNG/512/whatsapp_logo_icon_186881.png",
                                    alt: "WhatsApp",
                                },
                            ].map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white-400 to-white-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
                                >
                                    <img
                                        src={link.src}
                                        alt={link.alt}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/3 w-full relative">
                        <div className="absolute top-0 right-0 bg-green-500 w-6 h-6 md:w-8 md:h-8 rounded-full animate-pulse"></div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
                            Zapatería Gallardo
                        </h2>
                        <p className="text-lg md:text-2xl mb-2">Dirección: Calle Futura 123</p>
                        <p className="text-lg md:text-2xl mb-2">Teléfono: +569 1234 5678</p>
                        <p className="text-lg md:text-2xl mb-6">Horario: 9:00 AM - 7:00 PM</p>
                        <h3 className="mt-8 md:mt-12 text-2xl md:text-3xl font-bold text-yellow-400">
                            Quiénes somos
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300">
                            Somos una zapatería dedicada a ofrecer calzado de calidad con diseños
                            exclusivos. Nuestro compromiso es tu comodidad y estilo.
                        </p>
                        <h3 className="mt-8 md:mt-12 text-2xl md:text-3xl font-bold text-yellow-400">
                            Servicios/Productos
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300">
                            Reparación de calzado, venta de zapatos de cuero y servicio de
                            personalización.
                        </p>
                    </div>

                    <div className="md:w-1/3 w-full flex justify-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                            alt="Mapa"
                            className="w-40 h-40 md:w-72 md:h-72 shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Ficha;
