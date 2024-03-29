import { Link } from "react-router-dom";

const TopRated = ({top}) => {
    const { bookId, image, bookName, author, rating, category, tags } = top;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 border-[1px] border-solid">
                <figure className="px-6 pt-6 h-[400px]">
                    <img src={image} alt="Shoes" className="rounded-xl h-full" />
                </figure>
                <div className="card-body items-center text-center font-bold">
                    <div className="w-full flex gap-14 text-xl text-[#23BE0A]">
                        <span>{tags[0]}</span>
                        <span>{tags[1]}</span>
                    </div>
                    <div className="w-full border-b-[3px] border-dashed text-left mb-4">
                        <h2 className="card-title text-3xl py-4">{bookName}</h2>
                        <p className="text-xl pb-4">{author}</p>
                    </div>
                    <div className="card-actions w-full text-xl flex justify-between">
                        <span>{category}</span>
                        <div className="flex gap-2">
                            <span>{rating}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TopRated;