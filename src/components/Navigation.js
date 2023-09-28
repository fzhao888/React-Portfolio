import React from 'react';

// adds our navbar
function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs"> 
            <li className="nav-item">
                <a
                //adds About nav item
                    href="#About"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>

            <li className="nav-item">
                <a
                //adds Contact nav item
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>

            <li className="nav-item">
                <a
                //adds Portfolio nav item
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>

            <li className="nav-item">
                <a
                //adds Resume nav item
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
};

export default Navigation;