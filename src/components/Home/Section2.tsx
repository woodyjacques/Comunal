function Section2() {
    return (
        <section className="bg-yellow-500 text-black py-12 relative">
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
                REGIÓN METROPOLITANA
            </h2>

            <div className="absolute bottom-4 right-4 flex gap-4 flex-wrap justify-center sm:justify-end">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                        alt="LinkedIn"
                        className="w-full h-full object-contain"
                    />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://seeklogo.com/images/I/instagram-logo-E0067A1403-seeklogo.com.png"
                        alt="Instagram"
                        className="w-full h-full object-contain"
                    />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
                        alt="Facebook"
                        className="w-full h-full object-contain"
                    />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://s3-alpha.figma.com/hub/file/2729732820/69ab2bc1-7dda-4bf6-ac0b-adcb3e70b063-cover.png"
                        alt="YouTube"
                        className="w-full h-full object-contain"
                    />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                    <img
                        src="https://qwestore.com/png_images_min/10/bWhatsApp-blackb-logo-PNG-image-bBlack-3276.png"
                        alt="WhatsApp"
                        className="w-full h-full object-contain"
                    />
                </a>
            </div>
        </section>
    );
}

export default Section2;
