import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="font-quicksand bg-yellow-500 py-4 shadow-md"
            style={{
                backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/previews/001/339/645/non_2x/glowing-stylish-honeycomb-background-free-vector.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">

                <div className="text-center md:text-left">
                    <span className="block font-bold text-lg text-black">
                        Plataforma de Negocios Comunal
                    </span>
                    <span className="block text-sm text-black">Una Gran Avenida</span>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-black font-bold focus:outline-none"
                >
                    {menuOpen ? "Cerrar" : "Menú"}
                </button>

                <nav
                    className={`${menuOpen ? "block" : "hidden"
                        } md:flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0`}
                >
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <a href="/">
                            <li className="font-bold text-black">Inicio</li>
                        </a>
                        <a href="/ficha">
                            <li className="font-bold text-black">Busca tu negocio</li>
                        </a>
                        <a href="/suscripcion">
                            <li className="font-bold text-black">Suscríbete</li>
                        </a>
                        <a href="/filtro-uno">
                            <li className="font-bold text-black">Categoría/Rubros</li>
                        </a>
                        <a href="/filtro-dos">
                            <li className="font-bold text-black">Comuna</li>
                        </a>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
