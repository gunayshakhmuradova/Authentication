import React from 'react';
import '../styles/pages/Home.css';

const Home = ({ users }) => {
    return (
        <div className='home'>
            Welcome <span>{users?.email}</span>
        </div>
    );
}

export default Home;
