import { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import Spiner from '../../../Spiner/Spiner';
import GoogleLogin from '../../GoogleLogIn/GoogleLogin';
import auth from '../../../../firebase.init';
import './SignIn.css'

const SignIn = () => {
    const [user1,
        loading1,
        error2
    ] = useAuthState(auth);
    const [error1, setError] = useState()
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const hendelSubmit = event => {

        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(password);

        signInWithEmailAndPassword(email, password)
        navigate('./')
    }
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading || sending) {
        return <Spiner></Spiner>

    }
    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p>Error: {error?.message}</p>
            </div>
        );
    };
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email')
        }
    }

    const nevigateRegister = event => {
        navigate('/signup');
    }
    return (
        <div className="signin-form">
            <h2 style={{ 'margin': '20px 0px', 'color': '#549100' }}>Please Sign In</h2>
            <Form onSubmit={hendelSubmit} className='fix-from'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{errorElement}</p>
                <p>New to Fitness GYM? <Link style={{ 'color': '#86c232' }} to='/signup' className='text-decoration-none' onClick={nevigateRegister} > Register Now</Link></p>
                <p>Forget Password? <button style={{ 'color': '#86c232' }} className='text-decoration-none btn btn-link' onClick={resetPassword}> Reset Password</button></p>
                <button className='sign-btn col-md-12 text-center fix-btn'>Login</button>

                <GoogleLogin></GoogleLogin>
                <ToastContainer />
            </Form>
        </div>

    );
};

export default SignIn;