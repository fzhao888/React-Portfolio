import React, { useState } from 'react'; 
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header'; 
import Footer from './Footer';


export default function PortfolioContainer() {

    const[currentPage, setCurrentPage] = useState('About');

    // checks value of currentPage, then renders the corresponding component
    const renderPage = () => {
        if( currentPage === 'About' ) {
            return <About />;
        }

        if( currentPage === 'Portfolio' ){
            return <Portfolio />;
        }

        if( currentPage === 'Contact' ) {
            return <Contact />;
        }

        if( currentPage === 'Resume' ){
            return <Resume />;
        } 
    }

    // sets current page
    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>            
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />
        </div>
    );


}