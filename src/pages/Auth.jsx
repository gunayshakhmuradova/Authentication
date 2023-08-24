import React , { useState } from 'react';
import '../styles/pages/Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';


const provider = new GoogleAuthProvider();
const Auth = () => {
    const [signUp, setSignUp] = useState(true);
    const [authData, setAuthData] = useState({
        email   : '',
        password : ''
    })

    const onChange = (e) => {
        setAuthData({
            ...authData,
            [e.target.name] : e.target.value
        })
    }
    const authFunc = async() => {
        if (signUp) {
            try {
             const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data.user;
                if(user) {
                    window.location = '/home';
                }
        
        } catch(error) {
            toast.error (error.message);
        } 
        }else {
            try {
                    const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
                    const user = data.user;
                    if(user) {
                        window.location = '/dashboard';
                    }
            }catch(error) {
                toast.error (error.message);
            }
            } 
        }

        const googleLogin = async () => {
            try {
                const data = await signInWithPopup(auth, provider);
                const credential = GoogleAuthProvider.credentialFromResult(data);
                const token = credential.accessToken;
                const user = data.user;
                if(user) {
                    window.location = '/dashboard';
                }
            }catch(error) {
                const credential = GoogleAuthProvider.credentialFromError(error);
                toast.error (credential);
            }
        }
    return (
        <div className='auth'>
            <div className='auth-container'>
                <h2> {signUp ? 'Register' : 'Login'}</h2>
                <input name='email' value={authData.email} onChange={onChange} type="email" placeholder='Email'/>
                <input name='password' value={authData.password} onChange={onChange} type="password" placeholder='Password'/>
                
                <div onClick={googleLogin} className='auth-container-google'> <FontAwesomeIcon icon="fa-brands fa-google" beat /> Sign with Google</div>
                <p onClick={() => setSignUp(!signUp)}>{signUp ?'Have you logged in before?' : 'Have you registered before?'}</p>
                <div  onClick={authFunc} className='auth-container-button'>{signUp ? 'Register' : 'Login'}</div>
            </div>
        </div>
    );
}

export default Auth;