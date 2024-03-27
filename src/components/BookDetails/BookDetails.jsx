import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBook } from "../../utility/localstorage";

const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookIdInt);

    const handleReadBook = () => {

        const getStoredReadBook = () => {
            const storedReadBook = localStorage.getItem('read-book');
            if (storedReadBook) {
                return JSON.parse(storedReadBook);
            }
            return [];
        }

        const getStoredWishList = () => {
            const storedWishList = localStorage.getItem('wish-list');
            if (storedWishList) {
                return JSON.parse(storedWishList);
            }
            return [];
        }

        const saveReadBook = id => {
            const storedReadBook = getStoredReadBook();
            const exists = storedReadBook.find(bookId => bookId === id);
            if (!exists) {
                storedReadBook.push(id);
                localStorage.setItem('read-book', JSON.stringify(storedReadBook))
            }
        }

        const getData = getStoredReadBook();
        const addedData = getData.find(added => added === bookIdInt);
        
        const getWishList = getStoredWishList();
        const addedWishList = getWishList.filter(added => added === bookIdInt);
        console.log(addedWishList);

        if (!addedData) {
            saveReadBook(bookIdInt);
            // saveWishList(addedWishList);
            toast.success('Add to read successfully');
        }
        else {
            toast.error('Already Readed')
        }
    }

    const handleWishList = () => {
        const getStoredWishList = () => {
            const storedWishList = localStorage.getItem('wish-list');
            if (storedWishList) {
                return JSON.parse(storedWishList);
            }
            return [];
        }

        const saveWishList = id => {

            const storedWishList = getStoredWishList();
            const existsWishList = storedWishList.find(bookId => bookId === id);
            if (!existsWishList) {
                storedWishList.push(id);
                localStorage.setItem('wish-list', JSON.stringify(storedWishList))
            }
        }

        const getWishListData = getStoredWishList();
        const addedWishListData = getWishListData.find(added => added === bookIdInt);

        const storedReadBook = getStoredReadBook();
        const existsReadBook = storedReadBook.find(bookId => bookId === bookIdInt);

        if (!addedWishListData && !existsReadBook) {
            saveWishList(bookIdInt);
            toast.success('Add to read successfully');
        }
        else {
            toast.error('Added in read')
        }
    }

    return (
        <div className="card lg:card-side bg-base-100">
            <figure className="w-[50%]"><img className="rounded-xl" src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
            <div className="card-body w-[50%]">
                <h2 className="card-title text-4xl">{book.bookName}</h2>
                <p className="text-xl text-gray-500 font-bold">By : {book.author}</p>
                <div className="border-y-[1px]">
                    <p className="text-xl font-bold text-gray-500 py-4">{book.category}</p>
                </div>
                <p className="text-lg text-gray-500"><span className="font-bold text-black">Review : </span>{book.review}</p>
                <div className="border-b-[1px] text-xl py-8 flex gap-8">
                    <span className="font-bold">Tag</span>
                    <button className="bg-green-50 py-1 px-3 rounded-full text-[#23BE0A]">#{book.tags[0]}</button>
                    <button className="bg-green-50 py-1 px-3 rounded-full text-[#23BE0A]">#{book.tags[1]}</button>
                </div>
                <table className="text-xl">
                    <tr>
                        <td className="py-4">Number of Pages:</td>
                        <td className="py-4">{book.totalPages}</td>
                    </tr>
                    <tr>
                        <td className="py-4">Publisher:</td>
                        <td className="py-4">{book.publisher}</td>
                    </tr>
                    <tr>
                        <td className="py-4">Year of Publishing:</td>
                        <td className="py-4">{book.yearOfPublishing}</td>
                    </tr>
                    <tr>
                        <td className="py-4">Rating:</td>
                        <td className="py-4">{book.rating}</td>
                    </tr>
                </table>
                <div className="card-actions">
                    <button onClick={handleReadBook} className="btn btn-outline text-xl">Read</button>
                    <button onClick={handleWishList} className="btn bg-[#50B1C9] text-white text-xl">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;