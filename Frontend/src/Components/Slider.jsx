import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { SliderData } from '../assets/SliderData';
import { Link } from 'react-router-dom';

const Slider = () => {
    const properties = {
        prevArrow: <button className='w-[30px] border-2 m-[10px] bg-red-400 border-red-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>,
        nextArrow: <button className='w-[30px] border-2 m-[10px] bg-red-400 border-red-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>
    };
    return (
        <div className='max-w-7xl mx-auto py-10 border-b-2'>
            <Slide {...properties}>
                {SliderData.map((slideItem, index) => (
                    <div key={index} className='flex items-center justify-center'>
                        {slideItem.type === 'image' ? (
                            <Link to={slideItem.url}>
                                <div className='flex items-center justify-center h-[350px] md:h-[700px]'>
                                    <img src={slideItem.image} alt='' className='object-fill' />
                                </div>
                            </Link>
                        ) : slideItem.type === 'video' ? (
                            <div className='flex items-center justify-center h-[350px] md:h-[700px] md:w-[700px]'>
                                <video controls className='object-fill'>
                                    <source src={slideItem.video} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : null}
                    </div>
                ))}

            </Slide>
        </div>
    )
}

export default Slider;