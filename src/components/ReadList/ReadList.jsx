import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localstorage";
import ReadCard from "../ReadCard/ReadCard";

const ReadList = ({bookReads}) => {
    // const books = useLoaderData();

    // const [bookReads, setBookReads] = useState([]);

    // useEffect(() => {
    //     const storedReadBooks = getStoredReadBook();
    //     if (books.length > 0) {
    //         const booksRead = [];
    //         for (const id of storedReadBooks) {
    //             const book = books.find(book => book.bookId === id);
    //             if (book) {
    //                 booksRead.push(book)
    //             }
    //             setBookReads(booksRead)
    //         }
    //     }
    // }, [])

    return (
        <div>
            {
                bookReads.map(book => <ReadCard key={book.bookId} books={book}></ReadCard>)
            }
        </div>
    );
};

export default ReadList;