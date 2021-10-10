import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle, signUpWithGitHub } = useFirebase();
    return (
        <div>
            <h2>Please Login </h2>
            <button onClick={signInWithGoogle}>Google Login</button>
            <br />
            <button onClick={signUpWithGitHub}>Github Login</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;