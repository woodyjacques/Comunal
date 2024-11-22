function Footer() {
    return (
        <footer className="font-quicksand bg-black text-white py-8" style={{
            backgroundImage:
                "url('https://t4.ftcdn.net/jpg/06/02/53/19/360_F_602531991_JAiIYvvEGIWYBejaZXN2JAQZp1xJWHGv.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-lg text-yellow-500 mb-4">Información empresa</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Nosotros</a></li>
                        <li><a href="#" className="hover:underline">Alianzas colaborativas</a></li>
                        <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg text-yellow-500 mb-4">Negocios, profesionales y oficios</h3>
                    <ul className="space-y-2">
                        <li><a href="/suscripcion" className="hover:underline text-yellow-500">Suscribe tu negocio aquí</a></li>
                        <li><a href="#" className="hover:underline">Acceso suscritos</a></li>
                        <li><a href="#" className="hover:underline">Políticas de privacidad</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg text-yellow-500 mb-4">Acceso a información</h3>
                    <ul className="space-y-2">
                        <li><a href="/filtro-uno" className="hover:underline">Comunas</a></li>
                        <li><a href="/filtro-dos" className="hover:underline">Categorías</a></li>
                        <li><a href="#" className="hover:underline">Información de utilidad pública</a></li>
                        <li><a href="#" className="hover:underline">Ley del consumidor</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
