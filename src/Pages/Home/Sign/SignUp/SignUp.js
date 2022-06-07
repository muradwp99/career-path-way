import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init'
import './SignUp.css'
import { async } from '@firebase/util';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import GoogleLogin from '../../GoogleLogIn/GoogleLogin';

const SignUp = () => {

    const [user] = useAuthState(auth);
    const [error1, setError] = useState()



    const [
        createUserWithEmailAndPassword,

        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/signin');
    }



    const handelRegister = async event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)

        if (!user) {

            setError('wrong password');
        }
        else {
            navigate('/home');
        }

    }
    return (
        <div className="signup-form">
            <h2>Please Sign Up</h2>
            <Form onSubmit={handelRegister} className='fix-from'>
                <Form.Group className="mb-3">
                    <Form.Control name='name' type="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p>{error1}</p>
                <p>Already have an account?  <Link style={{ 'color': '#86c232' }} to='/signin' className='text-decoration-none' onClick={navigateLogin} > Login</Link></p>
                <button className='sign-btn col-md-12 text-center fix-btn'>Register</button>
                <GoogleLogin></GoogleLogin>
            </Form>
        </div>
    );
};

export default SignUp;