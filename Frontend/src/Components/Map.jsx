const Map = () => {
    return (
        <div className="shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:h-full lg:px-6 lg:mt-12">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d187.94234096515794!2d28.789303656580902!3d41.0891542661022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDA1JzIwLjciTiAyOMKwNDcnMjEuNyJF!5e0!3m2!1sen!2str!4v1715006074380!5m2!1sen!2str"
                className="w-[350px] h-[300px] lg:w-full lg:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                
                referrerPolicy="no-referrer-when-downgrade"
                title="a">
            </iframe>
        </div>
    )
}

export default Map;