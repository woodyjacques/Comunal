
function Section1() {
    return (
        <div>
            <section className="text-center py-20 bg-yellow-500">
                <h1 className="text-5xl font-bold mb-4 text-black">Busca y Encuentra en la Región Metropolitana</h1>
                <p className="text-lg text-gray-800 mb-8">La plataforma que conecta negocios locales con la comunidad</p>
                <div className="flex justify-center flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                    <input type="text" placeholder="Selecciona Rubro y/o Subcategoría" className="px-4 py-2 rounded w-64 md:w-80" />
                    <input type="text" placeholder="Selecciona Comuna" className="px-4 py-2 rounded w-64 md:w-80" />
                    <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">Encuentra</button>
                </div>
            </section>
        </div>
    );
}

export default Section1;