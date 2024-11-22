
function Section2() {
    return (
        <section className="font-quicksand bg-yellow-500 text-black py-12 relative" style={{
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/001/339/645/non_2x/glowing-stylish-honeycomb-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="flex justify-center items-center h-full">
                    <div className="overflow-hidden rounded-t-full bg-yellow-500 w-full">
                        <img
                            src="https://img.freepik.com/fotos-premium/concepto-compras-linea-paquetes-o-cajas-papel-logotipo-carrito-compras-carro-teclado-computadora-portatil-servicio-compras-web-online-ofrece-entrega-domicilio_9635-3959.jpg"
                            alt="Carrito de compras"
                            className="w-full h-64 md:h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                        <span className="bg-black text-yellow-500 py-4 px-4 sm:py-6 sm:px-8 font-bold text-center col-span-2 text-sm sm:text-lg">
                            nosotros
                        </span>
                        <span className="bg-yellow-300 border border-black py-4 px-4 sm:py-6 sm:px-8 font-bold text-center col-span-2 text-sm sm:text-lg">
                            somos
                        </span>
                        <span className="bg-yellow-300 border border-black py-4 px-4 sm:py-6 sm:px-8 font-bold text-center col-span-1 text-sm sm:text-lg">
                            el
                        </span>
                        <span className="bg-black text-yellow-500 py-4 px-4 sm:py-6 sm:px-8 font-bold text-center col-span-3 text-sm sm:text-lg">
                            shoppingencer
                        </span>
                        <span className="bg-yellow-300 border border-black py-4 px-4 sm:py-6 sm:px-8 font-bold text-center col-span-2 text-sm sm:text-lg">
                            digital
                        </span>
                        <span className="bg-black text-yellow-500 py-4 px-4 sm:py-6 sm:px-8 font-bold text-center col-span-1 text-sm sm:text-lg">
                            en
                        </span>
                        <span className="bg-black text-yellow-500 py-4 px-4 sm:py-6 sm:px-8 font-bold text-center col-span-4 text-sm sm:text-lg">
                            la
                        </span>
                    </div>
                </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-center mt-8 w-full">
                Región metropolitana
            </h2>

            <div className="absolute bottom-4 right-4 flex gap-4 flex-wrap justify-center sm:justify-end">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://files.softicons.com/download/social-media-icons/flat-gradient-social-icons-by-guilherme-lima/png/512x512/Linkedin.png"
                        alt="LinkedIn"
                        className="w-full h-full object-contain"
                    />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3955/3955027.png"
                        alt="Instagram"
                        className="w-full h-full object-contain"
                    />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://icons-for-free.com/iff/png/512/facebook+logo+media+network+social+icon-1320192913497992427.png"
                        alt="Facebook"
                        className="w-full h-full object-contain"
                    />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-104-432560.png?f=webp"
                        alt="YouTube"
                        className="w-full h-full object-contain"
                    />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://cdn.icon-icons.com/icons2/2972/PNG/512/whatsapp_logo_icon_186881.png"
                        alt="WhatsApp"
                        className="w-full h-full object-contain"
                    />
                </a>
            </div>
        </section>
    );
}

export default Section2;
