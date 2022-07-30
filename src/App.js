import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    return (
        <div className='w-full min-h-screen flex flex-col'>
            <NavBar />
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='catalogue' element={<Catalogue />} />
                <Route path='*' element={<Navigate to='/home' replace />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
