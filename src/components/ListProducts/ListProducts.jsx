import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Items from './Items/Items';
import CertainItems from './CertainItems/CertainItems';
import './listProducts.css';

export default function listProducts() {
    const [items, setItems] = useState([]);
    const [style, setStyle] = useState('mainBlock__listProducts');

    const f = async () => {
        const res = await fetch('https://reqres.in/api/users/');
        const json = await res.json();
        setItems(json.data);
    };

    useEffect(() => {
        f();
    }, []);

    function listProducts() {
        if (style !== 'mainBlock__listProducts')
            setStyle('mainBlock__listProducts');
        else setStyle('mainBlock__listProductsColumn');
    }

    return (
        <>
            {/* <Router> */}
            <div className="topBar">
                <p className="topBar__searchFeed">Search feed</p>
                <label>Choose a criteria</label>
                <select name="criteria" className="topBar__validation">
                    <option value="none">None</option>
                    <option value="price">Price</option>
                    <option value="brand">Brand</option>
                </select>
            </div>
            <div className="mainBlock">
                <div className="mainBlock__displayMode">
                    <p>Display mode</p>
                    <div className="mainBlock__displayMode__view">
                        <button
                            className="mainBlock__displayMode__view__button"
                            onClick={() => listProducts()}
                        >
                            First view
                        </button>
                        <button
                            className="mainBlock__displayMode__view__button"
                            onClick={() => listProducts()}
                        >
                            Second view
                        </button>
                    </div>
                </div>
                <div className={style}>
                    <Routes>
                        <Route
                            path="/page/:pageNumber"
                            element={<Items items={items} />}
                        ></Route>
                        <Route
                            path="/items/:id"
                            element={<CertainItems items={items} />}
                        ></Route>
                        <Route
                            path="/"
                            element={<Items items={items} />}
                        ></Route>
                    </Routes>
                </div>
            </div>
            {/* </Router> */}
        </>
    );
}
