import { Link } from 'react-router-dom';

export default function Pagination({
    totalProducts,
    productsPerPage,
    currentPage,
}) {
    const totalPage = Math.ceil(totalProducts / productsPerPage);
    return (
        <div>
            {Array.from({ length: totalPage }, (_, index) => (
                <Link key={index} to={`/page/${index + 1}`}>
                    {index + 1}
                </Link>
            ))}
        </div>
    );
}
