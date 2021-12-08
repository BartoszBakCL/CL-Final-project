import React from 'react';
import {initializeApp} from "firebase/app";
import { useRef , useState , useEffect} from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCuK5cNzv_wDeVqdcVhkdV-1y7rYUYZPyk",
    authDomain: "cl-final-project-b381f.firebaseapp.com",
    projectId: "cl-final-project-b381f",
    storageBucket: "cl-final-project-b381f.appspot.com",
    messagingSenderId: "634623111264",
    appId: "1:634623111264:web:e998e37de04e01c2cb1305"
};
// init firebase app
initializeApp(firebaseConfig)
const auth = getAuth();

function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
    return signOut(auth);
}


function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}

const Auth = () => {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        setLoading(true);
         try {
        await signup(emailRef.current.value, passwordRef.current.value);
         } catch {
         alert("Ble!");
         }
        setLoading(false);
    }

    async function handleLogin() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    return (
        <section className="login__container">
            <div className="container">
            <div className="login__header">Currently logged in as: { currentUser?.email } </div>
            {/*{setLoading === true ? <span>Currently logged in as: { currentUser?.email } </span> : null}*/}

            <div className="login__field">
                <input className="login__input" ref={emailRef} placeholder="Email" />
                <input className="login__input" ref={passwordRef} type="password" placeholder="Password" />
            </div>

            <button className="login__btn" disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
            <button className="login__btn" disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
            <button className="login__btn" disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
            </div>
        </section>
    );
};

export default Auth;