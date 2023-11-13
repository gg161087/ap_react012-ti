import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { About } from './pages/About.jsx'
import { Show } from './pages/Show.jsx'

export const App = () => {    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Show/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}