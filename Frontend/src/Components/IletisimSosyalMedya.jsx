import { Link } from "react-router-dom";

const IletisimSosyalMedya = ({ which_icon, link, text }) => {
    return (
        <Link to={link} target="_blank" className="mb-4 flex flex-row justify-center items-center space-x-2">
            <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary border-2 border-black">
                    {which_icon}
                </div>
            </div>
            <div className="grow">
                <p className="text-black dark:text-neutral-200">
                    {text}
                </p>
            </div>
        </Link>
    )
}

export default IletisimSosyalMedya;