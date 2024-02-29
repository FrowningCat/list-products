import { useParams } from 'react-router-dom';

export default function CertainItems({ items }) {
    const { id } = useParams();
    const item = items.find((item) => item.id === parseInt(id));

    if (!item) {
        return <div>Статья не найдена</div>;
    }

    return (
        <>
            <h1>{item.id}</h1>
            <p>{item.first_name}</p>
        </>
    );
}
