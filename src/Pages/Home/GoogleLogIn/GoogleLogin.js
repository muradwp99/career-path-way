import React from 'react';
import googleIcon from '../../../images/google.png'
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import './GoogleLogin.css'


const GoogleLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/home";

    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p>Error: {error?.message}</p>
            </div>
        );
    };

    if (user) {
        navigate(from, { replace: true })
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ 'height': '1px', 'background-color': '#86c232' }} className='w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px', 'background-color': '#86c232' }} className='w-50'></div>
            </div>
            <p className='text-danger'>{errorElement}</p>
            <div>
                <button style={{ border: '1px solid #ccc', 'box-shadow': '1px 2px 23px 0px darkgrey', alignItems: 'center' }} onClick={() => signInWithGoogle()}
                    className='btn w-100 d-block mx-auto my-2'>
                    <img className='googleimg' src={googleIcon} alt="" />
                    <span className='px-3'>Google sing in</span>
                </button>
            </div>
        </div >
    );
};

export default GoogleLogin;