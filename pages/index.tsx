import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../utils/api';

const HomePage: React.FC = () => {
    const [characters, setCharacters] =useState < Character[]>([]);

    useEffect (() => {
        fetchCharacters().then((data) => {
            setCharacters(data);
        });
    }, []);
    return (
        <div>
            <h1>Welcome to the Harry Potter App</h1>
            {/* Render the list of characters */}
        </div>
    );
};

export default HomePage;