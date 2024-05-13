import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { IoHomeSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import IletisimBilgiler from "../../Components/IletisimBilgiler";
import MyMap from "../../Components/Map";
import { IletisimData } from "../../assets/IletisimData";

const Iletisim = () => {
    const IletisimIconMap = new Map([
        [1, <IoHomeSharp className="h-5 w-5 lg:h-6 lg:w-6" />],
        [2, <FaPhone className="h-5 w-5 lg:h-6 lg:w-6" />],
        [3, <MdOutlineMail className="h-5 w-5 lg:h-6 lg:w-6" />],
    ]);

    return (
        <div>
            <Header />
            <div className="container my-8 lg:my-16 mx-auto md:px-6">
                <section className="">
                    <div className="flex justify-start">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-4 px-6 text-3xl font-bold">İletişim</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 mt-10 px-10">
                            <div className="flex lg:justify-center lg:ml-28 mb-4 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <p className="mb-2 font-bold dark:text-white">İletişim Bilgilerimiz</p>
                            </div>
                            <div className="flex flex-wrap">
                                {IletisimData.map((data, index) => {
                                    return (
                                        <IletisimBilgiler
                                            baslik={data.title}
                                            which_icon={IletisimIconMap.get(Number(`${data.which_icon}`))}
                                            text={data.text}
                                            key={index}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <MyMap />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Iletisim;