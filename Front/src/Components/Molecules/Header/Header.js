import React from 'react';
import NavBar from '../../Atoms/NavBar/NavBar';

const Header = (props) => {
    return (
        <>
            <NavBar title="MiniGames" isConnected={false} />
        </>
    )
}

export default Header;