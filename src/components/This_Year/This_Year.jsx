import { useEffect, useState } from "react";
import TopRated from "../TopRated/TopRated";

const This_Year = () => {
    const [tops, setTops] = useState([]);

    useEffect(() => {
        fetch('../../../public/bookData.json')
        .then(res => res.json())
        .then(data => setTops(data));
    },[])
    
    const topRated = tops.filter(top => top.totalPages > 300);
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                topRated.map(top => <TopRated key={top.id} top={top}></TopRated>)
            }
        </div>
    );
};

export default This_Year;