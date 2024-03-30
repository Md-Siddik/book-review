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
        // localStorage.setItem('read-book', JSON.stringify(storedReadBook))
    }
}

const getWishList = () =>{
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}

const saveWishList = id =>{
    const storedWishList = getWishList();
    const exists = storedWishList.find(bookId => bookId === id);
    if(!exists){
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList))
    }
}
export {getStoredReadBook, saveReadBook, getWishList, saveWishList}