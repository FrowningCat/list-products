import { Link } from 'react-router-dom';

export default function Items({ items }) {
    return (
        <>
            {items.length &&
                items.map((item) => {
                    return (
                        <>
                            <Link to={`/items/${item.id}`}>
                                <div
                                    className="mainBlock__listProducts__specificProduct"
                                    key={item.id}
                                >
                                    <div>
                                        <img
                                            key={item.avatar}
                                            src={item.avatar}
                                        />
                                    </div>
                                    {item.first_name}
                                </div>
                            </Link>
                        </>
                    );
                })}
        </>
    );
}
