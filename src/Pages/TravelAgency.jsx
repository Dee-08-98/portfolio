import React from 'react';
import India from '../Components/India';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

function TravelAgency(props) {
    return (
        <>
            <India />
            <Footer />
        </>
    );
}

export default TravelAgency;