import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../assets/images/room-1.jpeg'
import { useState } from 'react'

export default function ListingCard({ house, setHouseCompareTable, houseCompareTable}) {

    // const [houseTable, setHouseTable] = useState([]);
    const [houseAdded, setHouseAdded] = useState(false);

    const heartIconHandleClick = (house) =>{
        console.log("houseadd: ",houseAdded);
        if (houseAdded) {
            removeFromTable(house);
        } else {
            addToTable(house);
        }
        setHouseAdded(!houseAdded);
        console.log(houseCompareTable);
    }

    const addToTable = (house) => {
        if (houseCompareTable.includes(house)) {

        } else {
            let newHouseCompareTable = [...houseCompareTable];
            newHouseCompareTable.push(house);
            setHouseCompareTable(newHouseCompareTable);
        }
        
    }

    const removeFromTable = (house) => {
        setHouseCompareTable( houseCompareTable.filter((comparedHouses) => comparedHouses.zpid !== house.zpid ||  
        comparedHouses.buildingId !== house.buildingId));
    }

    let price = house.price;
    let imgSrc = house.imgSrc;
    let id, title, statusType, beds, baths, city, state, zip, location;

    if (!!house.zpid) {
        // with zpid
        id = house.zpid;
        title = house.hdpData.homeInfo.streetAddress;
        statusType = house.statusText;
        beds = house.beds;
        baths = house.baths;
        city = house.hdpData.homeInfo.city;
        state = house.hdpData.homeInfo.state;
        zip = house.hdpData.homeInfo.zipcode;
        location = city + " • " + state + " • " + zip;
    } else {
        // with buildingId
        id = house.buildingId;
        title = house.statusText;
        statusType = house.statusType;
        beds = house.minBeds;
        baths = house.minBaths;
        location = " ";
    }

    return (

        <div className="listing-card-container">
            {/* Listing Card Image */}
            <div className="listing-card-image-container">
                <Link to={`/housedetails/${id}`}>
                    <img src={imgSrc || defaultImg} alt="house listing"></img>
                </Link>
            </div>

            {/* Listing Card Content */}
            <div className="listing-card-content-container">
                <Link to={`/housedetails/${id}`} className="house-card-title"> {title} </Link>
                <div className="house-card-detail">
                    {/* <p>Type: {`${type}`}</p>
                    <p>Capacity: {capacity}</p>
                    <p>{`${city} • ${state} • ${zip}`}</p>
                    <p><span className="price-tag">{`$${price}`}</span> / month </p> */}
                    <p>Price: {price}</p>
                    <p>Status: {statusType}</p>
                    <p>beds: {beds}</p>
                    <p>baths: {baths}</p>
                    <p>{location}</p>
                    <i className={houseAdded === true || houseCompareTable.includes(house) ? "ionicons icon ion-ios-heart" : "ionicons icon ion-ios-heart-empty"} 
                    onClick={()=>heartIconHandleClick(house)}/>

                </div>

            </div>

        </div>
    )
}
