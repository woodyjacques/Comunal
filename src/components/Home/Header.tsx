function Header() {
    return (
        <header className="bg-yellow-500 py-4 shadow-md">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                    <span className="block font-bold text-lg text-black">Plataforma de Negocios Comunal</span>
                    <span className="block text-sm text-black">Una Gran Avenida</span>
                </div>
                <nav>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <li className="font-bold text-black text-center md:text-left">INICIO</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
