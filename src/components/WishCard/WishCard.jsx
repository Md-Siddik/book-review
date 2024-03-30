const WishCard = ({wishes}) => {
    
    const { image, bookName, author, tags, publisher, totalPages, yearOfPublishing, category, rating } = wishes;

    return (
        <div className="card lg:card-side bg-base-100 border-2 mt-6">
            <figure className="w-1/4 max-sm:w-full p-6"><img className="rounded-2xl w-[200px]" src={image} alt="Album" /></figure>
            <div className="card-body text-lg">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <p>By : {author}</p>
                <div className="flex max-sm:flex-col gap-8">
                    <span className="font-bold">Tag</span>
                    <button className="bg-green-50 py-1 px-3 rounded-full text-[#23BE0A]">#{tags[0]}</button>
                    <button className="bg-green-50 py-1 px-3 rounded-full text-[#23BE0A]">#{tags[1]}</button>
                    <span className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Year of Publishing: {yearOfPublishing}
                    </span>
                </div>
                <div className="border-b-[1px] flex max-sm:flex-col gap-10 pb-4">
                    <span className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>

                        Publisher: {publisher}
                    </span>
                    <span className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        Page: {totalPages}
                    </span>
                </div>
                <div className="card-actions">
                    <button className="btn rounded-full px-6 text-lg bg-[#328EFF25] text-[#328EFF]">Category: {category}</button>
                    <button className="btn rounded-full px-6 text-lg bg-[#FFAC3325] text-[#FFAC33]">Rating: {rating}</button>
                    <button className="btn rounded-full px-6 text-lg bg-[#23BE0A] text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default WishCard;