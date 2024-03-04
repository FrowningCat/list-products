import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination';

export default function Items({ items }) {
    const { pageNumber } = useParams();
    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    const productsPerPage = 3;
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = items.slice(
        startIndex,
        startIndex + productsPerPage
    );
    return (
        <>
            {currentProducts.length &&
                currentProducts.map((item) => {
                    return (
                        <>
                            <Link to={`/items/${item.id}`}>
                                <div
                                    className="mainBlock__listProducts__specificProduct"
                                    key={item.id}
                                >
                                    <div>
                                        <img
                                            className="mainBlock__listProducts__specificProduct__img"
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
            <Pagination
                totalProducts={items.length}
                productsPerPage={productsPerPage}
                currentPage={currentPage}
            />
        </>
    );
}
