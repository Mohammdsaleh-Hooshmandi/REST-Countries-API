import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const params = useParams();
    console.log(params);

    return <h1>DetailPage</h1>
};

export default DetailPage;