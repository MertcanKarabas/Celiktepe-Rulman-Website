import { Link } from "react-router-dom";
import { duyuruData } from "../assets/duyuruData";

const Vitrin = () => {
    return (
        <div className="py-8 md:py-10">
            <div className="container flex flex-col md:flex-row justify-center text-center mx-auto space-y-10 md:space-y-0 md:space-x-20">
                {duyuruData.map((duyuru, index) => {
                    return (
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={index}>
                            <Link to={``}>
                                <div className="flex flex-col font-normal text-xl justify-center items-center space-y-3">
                                    <div>
                                        <h2 className="text-pretty">
                                            {duyuru.title}
                                        </h2>
                                    </div>
                                    <div>
                                        <img
                                            src={duyuru.image}
                                            alt={duyuru.title}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </article>

                    );
                })}
            </div>
        </div>
    )
}

export default Vitrin