import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('../../../public/bookData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Books</h1>
            <h1 className="py-8">Books number: {books.length}</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;