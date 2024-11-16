function Section1() {
    return (
        <section className="bg-yellow-500 py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="mb-8">
                    <div className="relative h-64 md:h-80">
                        <img
                            src="https://media.istockphoto.com/id/655540014/es/foto/comercial-icono-de-carro-de-teclado-de-la-computadora.jpg?s=170667a&w=0&k=20&c=6R9rKElbt5-i_l8x5D0lMBMx-GZ3YJ9ckG2SU-o2AlA="
                            alt="Teclado"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <h1 className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl font-bold text-yellow-500">
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

                    <div className="bg-cyan-400 text-black text-sm p-4 rounded-lg shadow-md max-w-md relative">
                        <span className="absolute top-2 left-2 w-10 h-10 transform rotate-[-15deg]">
                            <img src="https://ayto-reocin.com/wp-content/uploads/2021/02/alerta-logo.jpg" alt="Alerta" className="w-full h-full object-contain" />
                        </span>
                        <p className="pl-8">
                            La pestaña Rubro podría considerar falta de ortografías, sinónimos de palabras y considerar palabras con falta de ortografía, quizás mediante Inteligencia Artificial. Así como ocurre en Google.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Section1;
