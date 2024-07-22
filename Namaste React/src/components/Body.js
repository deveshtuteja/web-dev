import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    //local state var->super powerful react var
    const [listOfRes, setListOfRes] = useState([]);
    //normal JS var
    // let listOfRes=[];
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4738044&lng=77.01067610000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        //Optional Chaining
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    //Conditional Rendering
    if(listOfRes.length===0){
        return <Shimmer />
    }

    return listOfRes===0 ? <Shimmer /> : (
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