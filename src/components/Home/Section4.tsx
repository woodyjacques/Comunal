
function Section4() {
    return (
        <div>
            <section id="subscription" className="bg-yellow-700 py-20 text-center">
                <h3 className="text-4xl font-bold mb-10 text-white">Plan de Suscripción 2024-2025</h3>
                <div className="bg-white text-yellow-400 p-10 rounded-lg inline-block shadow-lg">
                    <h4 className="text-2xl font-bold mb-4">Ficha Cliente</h4>
                    <p className="text-4xl font-bold mb-2">$105.000</p>
                    <span className="text-black">(+IVA) Pago único anual</span>
                    <ul className="text-left mt-6 mb-8 space-y-2 text-black">
                        <li>✔ Ficha auto-administrable</li>
                        <li>✔ Publicación en el catálogo de la plataforma</li>
                        <li>✔ Acceso a nuestra comunidad virtual</li>
                        <li>✔ Estadísticas y reportes</li>
                    </ul>
                    <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition">Suscríbete Aquí</button>
                </div>
            </section>
        </div>
    );
}

export default Section4;