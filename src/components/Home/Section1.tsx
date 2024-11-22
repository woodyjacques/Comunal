function Section1() {
    return (
        <section
            className="py-12 font-quicksand"
            style={{
                backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/001/339/645/non_2x/glowing-stylish-honeycomb-background-free-vector.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="mb-8">
                    <div className="relative h-64 md:h-80">
                        <img
                            src="https://img.freepik.com/fotos-premium/carrito-compras-linea-teclado_1189466-3833.jpg"
                            alt="Teclado"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl font-bold text-yellow-400">
                            Busca y Encuentra RM
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 px-4">
                    <select className="bg-white text-black text-2xl py-4 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 w-full md:w-1/2">
                        <option>Selecciona Rubro y/o Subcategoría</option>
                    </select>
                    <select className="bg-white text-black text-2xl py-4 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-600 w-full md:w-1/2">
                        <option>Selecciona Comuna</option>
                    </select>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-end gap-4 mb-6 pr-4">

                    <div className="flex items-center gap-2">
                        <button className="bg-black text-yellow-500 text-2xl font-bold py-4 px-10 rounded-lg hover:bg-gray-800 transition shadow-lg">
                            Encuentra
                        </button>
                        <span className="text-3xl text-red-600">🔍</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Section1;
