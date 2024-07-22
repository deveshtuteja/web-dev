import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //local state var->super powerful react var
    const [listOfRes, setListOfRes] = useState(resList);
    //normal JS var
    // let listOfRes=[];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRes.filter((res) => res.info.avgRating > 4.5);
                        setListOfRes(filteredList);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRes.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                ))}
            </div>
        </div>
    );
};

export default Body;