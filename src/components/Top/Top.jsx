import { useEffect, useState } from "react";
import TopRated from "../TopRated/TopRated";

const Top = () => {

    const [tops, setTops] = useState([]);

    useEffect(() => {
        fetch('../bookData.json')
        .then(res => res.json())
        .then(data => setTops(data));
    },[])
    
    const topRated = tops.filter(top => top.rating > 4.7);
    console.log(topRated)
    return (
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8">
            {
                topRated.map(top => <TopRated key={top.id} top={top}></TopRated>)
            }
        </div>
    );
};

export default Top;