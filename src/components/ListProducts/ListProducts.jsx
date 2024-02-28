import { useState } from 'react';
import { useEffect } from 'react';
import './listProducts.css';

export default function listProducts() {
    const [users, setUsers] = useState([]);

    const f = async () => {
        const res = await fetch('https://reqres.in/api/users/');
        const json = await res.json();
        setUsers(json.data);
    };

    useEffect(() => {
        f();
    }, []);

    return (
        <>
            <div className="topBar">
                <div className="topBar__searchFeed">Search feed</div>
                <div className="topBar__validation">Validation</div>
            </div>
            <div className="mainBlock">
                <div className="mainBlock__displayMode">
                    <text>Display mode</text>
                    <div className="mainBlock__displayMode__view">
                        <button>First view</button>
                        <button>Second view</button>
                    </div>
                </div>
                <div className="mainBlock__listProducts">
                    {users.length &&
                        users.map((user) => {
                            return (
                                <>
                                    <div
                                        className="mainBlock__listProducts__specificProduct"
                                        key={user.id}
                                    >
                                        <div>
                                            <img
                                                key={user.avatar}
                                                src={user.avatar}
                                            />
                                        </div>
                                        {user.first_name}
                                    </div>
                                </>
                            );
                        })}
                </div>
                <button className="mainBlock__numbering">Numbering</button>
            </div>
        </>
    );
}
