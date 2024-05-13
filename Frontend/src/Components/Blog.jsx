import { Link } from "react-router-dom";
import { oneCikanUrunler } from "../assets/oneCikanUrunler";

const Blog = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Öne Çıkan Ürünler</h2>
                </div>
                <div className="grid gap-8 lg:grid-cols-4">
                        {oneCikanUrunler.map((urun, index) => {
                            return (
                                <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={index}>
                                    {/*<Link to={`/projelerimiz/${yazi.id}`}>
                                        <img className="mb-2 w-full" src={yazi.image} alt={yazi.title}></img>
                                    </Link>*/}
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to={``}>{urun.urun_ad}</Link></h2>
                                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{urun.urun_aciklama}</p>
                                </article>
                            )
                        })}
                    </div>
            </div>
        </section>
    )
}

export default Blog;