import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


export default function App() {
    return (
        <Router >
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>

        </Router>
    )
}