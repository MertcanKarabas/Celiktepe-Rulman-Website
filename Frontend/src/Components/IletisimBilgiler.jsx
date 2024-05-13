const IletisimBilgiler = ({ which_icon, baslik, text }) => {

    const getTelefonlar = (text) => {
        let telefonlar = text.split(',');
        return telefonlar.map((telefon, index) => {
            return (
                <p key={index} className="text-black dark:text-neutral-200">
                    {telefon}
                </p>
            )
        })
    }

    return (
        <div className="mb-6 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-center">
                <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary border-2 border-black">
                        {which_icon}
                    </div>
                </div>
                <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                        {baslik}
                    </p>
                    {
                        (baslik === "Telefon Numarası") ?
                            <div className="text-black dark:text-neutral-200">
                                {
                                    getTelefonlar(text)
                                }
                            </div> : 
                            (baslik === 'Mail') ? 
                            <a className="text-black dark:text-neutral-200 underline" href={`mailto:${text}`}>
                                {text}
                            </a> : 
                            <p className="text-black dark:text-neutral-200">
                                {text}
                            </p>
                    }

                </div>
            </div>
        </div>
    )
}

export default IletisimBilgiler;