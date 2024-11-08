import { useState } from "react";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <header className="flex justify-between items-center p-6 bg-yellow-600 text-white">
                <div className="text-2xl font-extrabold">Plataforma de Negocios Comunal</div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="hover:underline">Inicio</a>
                    <a href="/login" className="hover:underline">Sesión</a>
                    <a href="#about" className="hover:underline">Nosotros</a>
                    <a href="#subscription" className="hover:underline">Suscripción</a>
                    <a href="#contact" className="hover:underline">Contacto</a>
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden bg-black px-4 py-2 rounded-lg">
                    Menu
                </button>
            </header>

            {menuOpen && (
                <nav className="bg-yellow-600 text-white md:hidden px-8 py-4">
                    <a href="#" className="block py-2 hover:bg-yellow-700">Inicio</a>
                    <a href="#about" className="block py-2 hover:bg-yellow-700">Nosotros</a>
                    <a href="#subscription" className="block py-2 hover:bg-yellow-700">Suscripción</a>
                    <a href="#contact" className="block py-2 hover:bg-yellow-700">Contacto</a>
                </nav>
            )}
        </div>
    );
}

export default Header;