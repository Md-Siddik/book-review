import WishCard from "../WishCard/WishCard";

const WhiteList = ({wishList}) => {
    return (
        <div>
            {
                wishList.map(wish => <WishCard key={wish.bookId} wishes={wish}></WishCard>)
            }
        </div>
    );
};

export default WhiteList;