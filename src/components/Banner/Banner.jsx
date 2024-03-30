const Banner = () => {
    return (
        <div className="rounded-3xl my-7 bg-gray-100">
            <div className="w-[85%] max-sm:w-[90%] py-12 m-auto flex max-sm:flex-col">
                <div className="w-[50%] max-sm:w-full">
                    <h1 className="text-6xl max-sm:text-5xl">Books to freshen up your bookshelf</h1>
                </div>
                <div className="w-[50%] max-sm:w-full max-sm:mt-8">
                    <img className="w-[50%] m-auto" src="https://i.ibb.co/h1hFfr0/pngwing-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;