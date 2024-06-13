import './App.css';
import React from 'react';
import Header from './components/Header';
import Siderbar from './components/Siderbar';
import Footer from './components/Footer';
import Formulario from './components/Formulario';

function App() {
    return (
        <div className="App">
            <Header />
            <div className='menu'>
                <Siderbar />
            </div>
            <div className='centro'>
                <Formulario/>
            </div>
            <Footer />
        </div>
    );
}

export default App;

