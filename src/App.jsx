import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Header } from './partials/Header.jsx';
import { Footer } from './partials/Footer.jsx';
import { About } from './pages/About.jsx'
import { Show } from './pages/Show.jsx'

export const App = () => {    

    return (
        <BrowserRouter>
            <Header></Header>
            <main>
                <Routes>
                    <Route index element={<Show/>}></Route>
                    <Route path='about' element={<About/>}></Route>
                </Routes>
            </main>
            <Footer></Footer>
        </BrowserRouter>
    )
}