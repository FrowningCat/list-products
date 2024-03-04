import './pagination.css';
import { Link } from 'react-router-dom';

export default function Pagination({
    totalProducts,
    productsPerPage,
    currentPage,
}) {
    const totalPage = Math.ceil(totalProducts / productsPerPage);
    return (
        <div className="pagination">
            {Array.from({ length: totalPage }, (_, index) => (
                <Link
                    key={index}
                    to={`/page/${index + 1}`}
                    className="pagination__number"
                >
                    {index + 1}
                </Link>
            ))}
        </div>
    );
}
