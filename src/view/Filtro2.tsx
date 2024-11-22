import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";

function Filtro1() {
    return (
        <div>
            <Header />
            <div
                className="font-quicksand bg-yellow-500 min-h-screen py-8 px-4"
                style={{
                    backgroundImage:
                        "url('https://static.vecteezy.com/system/resources/previews/001/339/645/non_2x/glowing-stylish-honeycomb-background-free-vector.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="bg-black text-white rounded-lg p-4 mb-6">
                    <p className="font-bold text-sm">
                        Suscritos: Providencia (ejemplo: los primeros/clientes por rubro y comuna)
                    </p>
                    <div className="flex items-center mt-4">
                        <input
                            type="text"
                            className="flex-grow bg-white text-black p-2 rounded-l-lg focus:outline-none"
                            placeholder="Escribe aquí..."
                        />
                        <button className="bg-white p-2 rounded-r-lg">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
                                alt="Buscar"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    
                    <div className="bg-black text-white rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <p className="font-bold">Buffet de abogados</p>
                            <p className="text-sm">Herrera y Pérez</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-sm">Acceso a ficha</p>
                            <button className="w-6 h-6 bg-white rounded-full"></button>
                            <p className="text-sm">Pinchar círculo blanco</p>
                        </div>
                    </div>

                    <div className="bg-black text-white rounded-lg p-4 flex items-center justify-between">
                        <div>
                            <p className="font-bold">Centro de mediación</p>
                            <p className="text-sm">Caputto Torres</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-sm">Acceso a ficha</p>
                            <button className="w-6 h-6 bg-white rounded-full"></button>
                            <p className="text-sm">Pinchar círculo blanco</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Filtro1;
