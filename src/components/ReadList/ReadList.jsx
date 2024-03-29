import ReadCard from "../ReadCard/ReadCard";

const ReadList = ({bookReads}) => {

    return (
        <div>
            {
                bookReads.map(book => <ReadCard key={book.bookId} books={book}></ReadCard>)
            }
        </div>
    );
};

export default ReadList;