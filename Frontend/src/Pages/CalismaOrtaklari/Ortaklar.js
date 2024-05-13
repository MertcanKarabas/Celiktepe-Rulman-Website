import { OrtakData } from "../../assets/OrtaklarData"

const Ortaklar = () => {
    return (
        <div className="container my-8 lg:my-16 mx-auto md:px-6">
            <section>
                <div className="container flex flex-col md:flex-row justify-center text-center mx-auto space-y-10 md:space-y-0 md:space-x-20">
                    {OrtakData.map((ortak, index) => {
                        return (
                            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <div>
                                    <div className="flex flex-col font-normal text-xl justify-center items-center text-center space-y-3">
                                        <div>
                                            <h2 className="text-pretty">
                                                {ortak.title}
                                            </h2>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <img
                                                src={ortak.image}
                                                alt={ortak.title}
                                                className="w-40 md:w-60 "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </section>
        </div>
    )
}

export default Ortaklar