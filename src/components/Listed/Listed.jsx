import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../ReadList/ReadList'
import WhiteList from '../WhiteList/WhiteList'
import { useLoaderData } from 'react-router-dom';
import { getStoredReadBook } from '../../utility/localstorage';

const Listed = () => {

    const books = useLoaderData();

    const [bookReads, setBookReads] = useState([]);

    const handleBooksFilter = filter => {
        if(filter === 'bookId'){
            const sortList = bookReads.map( name => name)
            sortList.sort();
            sortList.reverse();
            setBookReads(sortList);
        }
    }

    useEffect(() => {
        const storedReadBooks = getStoredReadBook();
        if (books.length > 0) {
            const booksRead = [];
            for (const id of storedReadBooks) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksRead.push(book)
                }
                setBookReads(booksRead);
                // setBookReads(booksRead);
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
                        <li onClick={() => handleBooksFilter('author')}><a>Author</a></li>
                        <li><a>Publishing year</a></li>
                        <li><a>Tags</a></li>
                        <li><a>Category</a></li>
                        <li><a>Total pages</a></li>
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
                    <WhiteList></WhiteList>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Listed;