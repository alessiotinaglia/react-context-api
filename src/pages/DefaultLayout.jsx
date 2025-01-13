
import Haeder from '../components/HeaderComponent'
import Footer from '../components/FooterComponent';

import { Outlet } from 'react-router-dom';

export default function defaultLayout() {
    return (
        <>
            <Haeder/>
            <Outlet />
            <Footer/>
        </>
    )
}