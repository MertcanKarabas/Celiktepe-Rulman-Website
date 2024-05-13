import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { kurumsalData } from "../../assets/KurumsalData/kurumsalData";
import logo from "../../assets/Icons/Logo.png";
const Hakkimizda = () => {
    return (
        <div>
            <Header />
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="lg:mt-16 sm:mt-12  flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                    <div className="w-full xl:w-5/12 lg:w-6/12">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mb-4">Hakkımızda</h2>
                        {kurumsalData.map((yazi, index) => {
                            return (
                                <div key={index}>
                                    <p className="font-normal text-base leading-6 text-gray-600 mt-4 mb-4">{yazi.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="lg:flex items-center w-full lg:w-1/2 ">
                        <img className="lg:block w-full" src={logo} alt="people discussing on board" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hakkimizda;