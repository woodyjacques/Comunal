function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h3 className="font-bold text-lg text-yellow-500 mb-4">INFORMACION EMPRESA</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">NOSOTROS</a></li>
                        <li><a href="#" className="hover:underline">ALIANZAS COLABORATIVAS</a></li>
                        <li><a href="#" className="hover:underline">PREGUNTAS FRECUENTES</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg text-yellow-500 mb-4">NEGOCIOS, PROFESIONALES Y OFICIOS</h3>
                    <ul className="space-y-2">
                        <li><a href="suscripcion" className="hover:underline text-yellow-500">SUSCRIBE TU NEGOCIO AQUÍ</a></li>
                        <li><a href="#" className="hover:underline">ACCESO SUSCRITOS</a></li>
                        <li><a href="#" className="hover:underline">POLÍTICAS DE PRIVACIDAD</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg text-yellow-500 mb-4">ACCESO A INFORMACION</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">COMUNAS</a></li>
                        <li><a href="#" className="hover:underline">CATEGORÍAS</a></li>
                        <li><a href="#" className="hover:underline">INFORMACIÓN DE UTILIDAD PÚBLICA</a></li>
                        <li><a href="#" className="hover:underline">LEY DEL CONSUMIDOR</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
