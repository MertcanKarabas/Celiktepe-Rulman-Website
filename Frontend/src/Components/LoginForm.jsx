import { useState } from 'react';
import Logo from '../assets/Icons/Logo.png';

const LoginForm = ({ authenticate }) => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const onSubmit = () => {
        // Authenticate user
        authenticate(loginUsername, loginPassword);
    }
        
    return (
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
            <img className='p-3' src={Logo} alt='logo'/>
            <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
            <h3 className='text-xl font-semibold text-blue-400 pt-2'>Giriş Yap!</h3>
            <div className='flex flex-col items-center justify-center'>
                <input 
                    type='text'
                    onChange={(e) => setLoginUsername(e.target.value)}
                    className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-orange-400 focus:outline-none focus:ring-0' 
                    placeholder='Kullanıcı Adı'></input>
                <input 
                    type="password" 
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-orange-400 focus:outline-none focus:ring-0' 
                    placeholder='Şifre'></input>
                <button 
                    className='rounded-2xl m-2 text-white bg-blue-400 w-3/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'
                    onClick={onSubmit}
                    >
                    Giriş Yap
                </button>
            </div>
        </div>
    )
}

export default LoginForm;
