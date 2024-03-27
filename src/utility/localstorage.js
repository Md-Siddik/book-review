const getStoredReadBook = () =>{
    const storedReadBook = localStorage.getItem('read-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBook = id =>{
    const storedReadBook = getStoredReadBook();
    const exists = storedReadBook.find(bookId => bookId === id);
    if(!exists){
        storedReadBook.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedReadBook))
    }
}
export {getStoredReadBook, saveReadBook}