import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../ReadList/ReadList'
import WhiteList from '../WhiteList/WhiteList'
import { useLoaderData } from 'react-router-dom';
import { getStoredReadBook, getWishList } from '../../utility/localstorage';

const Listed = () => {

    const books = useLoaderData();

    const [bookReads, setBookReads] = useState([]);
    const [wishList, setWishList] = useState([]);
    let listSort = [];
    let wishListSort = [];

    const handleBooksFilter = filter => {
        if (filter === 'bookId') {
            const sortList = bookReads.map(name => name)
            sortList.sort();
            sortList.reverse();
            setBookReads(sortList);

            
            const sortWishList = wishList.map(name => name)
            sortWishList.sort();
            sortWishList.reverse();
            setWishList(sortWishList);
        }
        else if (filter === 'pages') {
            const sortedPages = bookReads.map(number => number.totalPages);
            const sortedWishList = wishList.map(number => number.totalPages);
            sortedPages.sort();
            sortedPages.reverse();
            sortedWishList.sort();
            sortedWishList.reverse();
            const sortList = bookReads.map(number => number);
            const sortWishList = wishList.map(number => number);

            for (const singlePages of sortedPages) {
                for (const objPages of sortList) {
                    if (singlePages === objPages.totalPages) {
                        listSort.push(objPages);
                        setBookReads(listSort);
                    }
                }
            }

            for (const singlePages of sortedWishList) {
                for (const objPages of sortWishList) {
                    if (singlePages === objPages.totalPages) {
                        wishListSort.push(objPages);
                        setWishList(wishListSort);
                    }
                }
            }
        }

        else if (filter === 'year'){
            const sortYear = bookReads.map(year => year.yearOfPublishing);
            sortYear.sort();
            sortYear.reverse();
            
            const sortObj = bookReads.map(year => year);
            
            for(const sortedYear of sortYear){
                for(const sortedObj of sortObj){
                    if(sortedYear === sortedObj.yearOfPublishing){
                        listSort.push(sortedObj)
                        setBookReads(listSort)
                    }
                }
            }

            const sortedWishList = wishList.map(number => number.yearOfPublishing);
            sortedWishList.sort();
            sortedWishList.reverse();
            const sortWishList = wishList.map(number => number);
            for (const singlePages of sortedWishList) {
                for (const objPages of sortWishList) {
                    if (singlePages === objPages.yearOfPublishing) {
                        wishListSort.push(objPages);
                        setWishList(wishListSort);
                    }
                }
            }
        }

        else if (filter === 'rating'){
            const sortRating = bookReads.map(rating => rating.rating);
            console.log(sortRating)
            sortRating.sort();
            sortRating.reverse();
            
            const sortObj = bookReads.map(rating => rating);
            
            for(const sortedRating of sortRating){
                for(const sortedObj of sortObj){
                    if(sortedRating === sortedObj.rating){
                        listSort.push(sortedObj)
                        setBookReads(listSort)
                    }
                }
            }

            const sortedWishList = wishList.map(number => number.rating);
            sortedWishList.sort();
            sortedWishList.reverse();
            const sortWishList = wishList.map(number => number);
            for (const singlePages of sortedWishList) {
                for (const objPages of sortWishList) {
                    if (singlePages === objPages.rating) {
                        wishListSort.push(objPages);
                        setWishList(wishListSort);
                    }
                }
            }
        }
    }

    useEffect(() => {
        const storedReadBooks = getStoredReadBook();
        const storedWishList = getWishList();
        if (books.length > 0) {
            const booksRead = [];
            const wishesList = [];
            for (const id of storedReadBooks) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksRead.push(book)
                }
                setBookReads(booksRead);
            }
            for (const id of storedWishList) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    wishesList.push(book)
                }
                setWishList(wishesList);
            }
        }
    }, [books])

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <div className='text-center py-8'>
                <h1 className='text-3xl font-bold py-8 bg-[#13131310] rounded-xl'>Books</h1>

                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white text-lg my-8">Sort By <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBooksFilter('bookId')}><a>Id</a></li>
                        <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleBooksFilter('pages')}><a>Number of pages</a></li>
                        <li onClick={() => handleBooksFilter('year')}><a>Publishing year</a></li>
                    </ul>
                </details>
            </div>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="text-xl">
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadList bookReads={bookReads}></ReadList>
                </TabPanel>

                <TabPanel>
                    <WhiteList wishList={wishList}></WhiteList>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Listed;