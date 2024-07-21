import React from "react";
import ReactDOM from "react-dom/client";

/*
*HEADER
    logo
    nav items
*BODY
    search
    RestaurantContainer
        restaurantCard
            img
            name of res, star rating, cuisine, del time
*FOOTER
    copyright
    links
    address
    contact        
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard=()=>{
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="burger-xpress" src="https://media-assets.swiggy.com/swiggy/image/upload/b50fd640f2c0ddab74d62ef8ccbaef4c" />
            <h3>Burger Xpress</h3>
            <h4>Burgers, Continental</h4>
            <h4>4.2 stars</h4>
            <h4>20-25 MINS</h4>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    ) 
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);