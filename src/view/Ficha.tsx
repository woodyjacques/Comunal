import Footer from "../components/Home/Footer";

function Ficha() {
    return (
        <div>
            <div className="bg-black text-white min-h-screen py-16 px-8">
                <div className="max-w-6xl mx-auto bg-black rounded-lg shadow-lg p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start relative">

                    <div className="md:w-1/3 w-full flex flex-col items-center">
                        <img
                            src="https://fotografias.antena3.com/clipping/cmsimages01/2024/06/09/E41D8F10-4865-48FB-ADDB-00B290C1B5C3/imagen-zapatero_70.jpg?crop=1694,953,x90,y0&width=480&height=270&optimize=high&format=webply"
                            alt="Zapatería"
                            className="rounded-lg mb-8 w-full h-auto"
                        />
                        <div className="flex justify-center space-x-4 md:space-x-8 mt-8">
                            <a href="#" className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                                <img
                                    src="https://cdn.icon-icons.com/icons2/3042/PNG/512/instagram_logo_icon_189247.png"
                                    alt="Instagram"
                                    className="w-10 h-10 md:w-12 md:h-12"
                                />
                            </a>
                            <a href="#" className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/08/11/12/32/facebook-884378_1280.png"
                                    alt="Facebook"
                                    className="w-10 h-10 md:w-12 md:h-12"
                                />
                            </a>
                            <a href="#" className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                                <img
                                    src="https://img.freepik.com/vector-premium/icono-vectorial-aplicacion-youtube-color-blanco-negro_302321-4778.jpg"
                                    alt="YouTube"
                                    className="w-10 h-10 md:w-12 md:h-12"
                                />
                            </a>
                            <a href="#" className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6RFwb4snYZ47Htz_-AEWURi4-SEAs-73-A&s"
                                    alt="WhatsApp"
                                    className="w-10 h-10 md:w-12 md:h-12"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/3 w-full relative">

                        <div className="absolute top-0 right-0 bg-green-500 w-6 h-6 md:w-8 md:h-8 rounded-full"></div>

                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Zapatería Gallardo</h2>
                        <p className="text-lg md:text-2xl mb-2">Dirección</p>
                        <p className="text-lg md:text-2xl mb-2">Teléfono</p>
                        <p className="text-lg md:text-2xl mb-6">Horario</p>

                        <h3 className="mt-8 md:mt-12 text-xl md:text-3xl font-bold">Quienes Somos</h3>
                        <p className="text-lg md:text-2xl">Descripción.........</p>

                        <h3 className="mt-8 md:mt-12 text-xl md:text-3xl font-bold">Servicios/Productos</h3>
                        <p className="text-lg md:text-2xl">Descripción.........</p>
                    </div>

                    <div className="md:w-1/3 w-full flex justify-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                            alt="Mapa"
                            className="w-40 h-40 md:w-72 md:h-72"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Ficha;
