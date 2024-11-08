import { useState } from 'react';

interface Business {
    name: string;
    category: string;
    commune: string;
}

function Section1() {
    const [category, setCategory] = useState('');
    const [commune, setCommune] = useState('');
    const [results, setResults] = useState<Business[]>([]);

    const categories = ["Panadería", "Ferretería", "Verdulería"];
    const communes = ["Santiago", "Providencia", "Ñuñoa"];

    const handleSearch = () => {
        const businessData: Business[] = [
            { name: "Panadería Doña Rosa", category: "Panadería", commune: "Santiago" },
            { name: "Ferretería Los Pinos", category: "Ferretería", commune: "Providencia" },
            { name: "Verdulería El Huerto", category: "Verdulería", commune: "Ñuñoa" },
        ];

        const filteredResults = businessData.filter(business =>
            (category === '' || business.category === category) &&
            (commune === '' || business.commune === commune)
        );

        setResults(filteredResults);
    };

    const handleClear = () => {
        setCategory('');
        setCommune('');
        setResults([]);
    };

    return (
        <div>
            <section className="text-center py-20 bg-yellow-500">
                <h1 className="text-5xl font-bold mb-4 text-black">Busca y Encuentra en la Región Metropolitana</h1>
                <p className="text-lg text-gray-800 mb-8">La plataforma que conecta negocios locales con la comunidad</p>
                <div className="flex justify-center flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-4 py-2 rounded w-64 md:w-80 border border-gray-300"
                    >
                        <option value="">Selecciona Rubro y/o Subcategoría</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>

                    <select
                        value={commune}
                        onChange={(e) => setCommune(e.target.value)}
                        className="px-4 py-2 rounded w-64 md:w-80 border border-gray-300"
                    >
                        <option value="">Selecciona Comuna</option>
                        {communes.map((com, index) => (
                            <option key={index} value={com}>
                                {com}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={handleSearch}
                        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        Encuentra
                    </button>

                    <button
                        onClick={handleClear}
                        className="bg-gray-300 text-black px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                    >
                        Limpiar
                    </button>
                </div>

                <div className="mt-10">
                    {results.length > 0 ? (
                        <ul className="text-left space-y-4">
                            {results.map((business, index) => (
                                <li key={index} className="bg-white p-4 rounded shadow-md">
                                    <h3 className="text-2xl font-bold text-yellow-600">{business.name}</h3>
                                    <p className="text-gray-700">Categoría: {business.category}</p>
                                    <p className="text-gray-700">Comuna: {business.commune}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-lg text-gray-700">No se encontraron negocios para los filtros seleccionados.</p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Section1;
