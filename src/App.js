import './App.css';
import './css/buttons.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

import {
    Routes,
    Route,
    BrowserRouter
} from 'react-router-dom';

function App() {
    return (
        <div className="darken-bg">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={ <About />}/>
                    <Route path="/projects" element={ <Projects />}/>
                    <Route path="/contact" element={ <Contact /> }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
