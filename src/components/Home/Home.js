import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>home is here</h2>
            <h4>user : {user.displayName}</h4>
        </div>
    );
};

export default Home;