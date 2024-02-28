import { Route, Routes } from 'react-router-dom';
import ListProducts from './components/ListProducts/ListProducts';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<ListProducts />} />
        </Routes>
    );
}
