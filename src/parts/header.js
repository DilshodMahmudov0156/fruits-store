import React from 'react';
import MyCarousel from "../components/myCarousel";

function Header({ imgs }) {
    return (
        <header>
            <MyCarousel imgs={imgs}/>
        </header>
    );
}

export default Header;