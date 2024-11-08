
function Footer() {
    return (
        <div>
            <footer id="contact" className="bg-yellow-700 text-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-center space-x-4 mb-8">
                        <a href="#" className="hover:underline">Información de la Empresa</a>
                        <a href="#" className="hover:underline">Acceso para Suscriptores</a>
                        <a href="#" className="hover:underline">Política de Privacidad</a>
                    </div>
                    <p className="text-center text-sm mb-4">Síguenos en nuestras redes sociales:</p>
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="#" className="hover:text-yellow-300"><i className="fab fa-facebook-f"></i> Facebook</a>
                        <a href="#" className="hover:text-yellow-300"><i className="fab fa-instagram"></i> Instagram</a>
                        <a href="#" className="hover:text-yellow-300"><i className="fab fa-youtube"></i> YouTube</a>
                        <a href="#" className="hover:text-yellow-300"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                    <p className="text-center text-sm">© 2024 Plataforma de Negocios Comunal - Todos los derechos reservados</p>
                </div>
            </footer>

        </div>
    );
}

export default Footer;