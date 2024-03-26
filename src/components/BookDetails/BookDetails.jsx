import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    console.log(id, jobs);
    return (
        <div>
            <h1>Book details of:</h1>
        </div>
    );
};

export default BookDetails;