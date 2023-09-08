import { Link, Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Home } from './pages/Home'
import { About } from './pages/About';

import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
// import { AboutVision } from './cmps/AboutVision';
// import { AboutTeam } from './cmps/AboutTeam'
import { MailIndex } from './pages/MailIndex';
import { MailDetails } from './pages/MailDetails';


export function App() {

    return (
        <Router>
            <section className='main-app'>
                <AppHeader />

                <main className='container'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                            {/* <Route path="/about/team" element={<AboutTeam />} />
                            <Route path="/about/vision" element={<AboutVision />} />
                        </Route> */}

                        <Route path="/mail" element={<MailIndex />} />
                        <Route path="/mail/:mailId" element={<MailDetails />} />
                    </Routes>
                </main>

                <AppFooter />
            </section>
        </Router>


    )
}
