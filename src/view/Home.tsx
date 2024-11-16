import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";

function Home() {

    return (
        <div className="font-quicksand bg-yellow-500 min-h-screen font-sans text-gray-900">
            <Header />
            <Section1 />
            <Section2 />
            <Footer />
        </div>
    );
}

export default Home;
