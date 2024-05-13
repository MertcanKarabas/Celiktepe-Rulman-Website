import { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { BiLogoWhatsapp } from 'react-icons/bi'

const ToTop = () => {
    const [fix, setFix] = useState(false);
    function setFixed() {
        (window.scrollY >= 200) ? setFix(true) : setFix(false);
    }

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    window.addEventListener("scroll", setFixed);
    return (
        <div className='z-50'>
            <a href="https://wa.me/905376228463?text=Merhaba,%20bir%20ürün%20hakkında%20bilgi%20almak%20istiyorum." className="" target='_blank' rel="noreferrer">
                <BiLogoWhatsapp className='fixed left-8 bottom-8 bg-green-400 rounded-full p-2 shadow-lg text-5xl hover:mb-1 hover:bg-green-700 transition duration-500' />
            </a>
            <button className={fix ? 'block  transition duration-700' : 'hidden'} onClick={goTop}>
                <AiOutlineArrowUp className='fixed right-8 bottom-8 bg-orange-400 rounded-full p-2 text-5xl hover:bg-orange-700 hover:mb-1 transition duration-500' />
            </button>
        </div>

    )
}

export default ToTop