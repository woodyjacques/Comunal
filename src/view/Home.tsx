import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";

function Home() {

    return (
        <div className="font-quicksand bg-yellow-500 min-h-screen font-sans text-gray-900">
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer/>
        </div>
    );
}

export default Home;
