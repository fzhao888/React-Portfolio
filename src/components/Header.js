import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
    return (
       
        <div className='header'>
            <h1> Frank Zhao </h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
};

export default Header;