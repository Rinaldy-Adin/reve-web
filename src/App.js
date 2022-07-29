import logo from './logo.svg';
import './App.css';
import { Home } from 'home';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path='home' element={<Home />} />
        </Routes>
    );
}

export default App;
