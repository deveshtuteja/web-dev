import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    //local state var->super powerful react var
    const [listOfRes, setListOfRes] = useState([]);
    const[filteredRes, setFilteredRes]=useState([]);
    const [searchText, setSearchText] = useState("");
    console.log("body rendered");

    //normal JS var
    // let listOfRes=[];
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4738044&lng=77.01067610000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Optional Chaining
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    //Conditional Rendering
    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        console.log(searchText);
                        const filRes = listOfRes.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRes(filRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filtList =listOfRes.filter((res) => res.info.avgRating > 4.5);
                        setFilteredRes(filtList);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRes.map((restaurant) => (
                    <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard resData={restaurant.info} /> </Link>     
                ))}
            </div>
        </div>
    );
};

export default Body;