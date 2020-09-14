import React from 'react'
import {
    useParams,
} from "react-router-dom";
import sf_housing_data from '../assets/mocks/sf_housing_data.json'
import defaultImg from '../assets/images/room-1.jpeg'


export default function HouseDetails() {

    let houseCardId = useParams();
    // let num = props.match.params.id;
    console.log(houseCardId);

     const house = sf_housing_data.find(house => 
        (house.zpid === houseCardId.id || house.buildingId === houseCardId.id)
        );

    if (house === undefined) {
        console.log("Undefined");
    } 

    let price = house.price;
    let imgSrc = house.imgSrc;
    let latitude = house.latLong.latitude;
    let longtitude = house.latLong.longitude;
    let default_description =  "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.";

    let id, title, statusType, beds, baths, area, streetAddress, city, state, zip, location;
    
    let description = default_description; 
    if (!!house.zpid) {
        // with zpid
        // id = house.zpid;
        // title = house.hdpData.homeInfo.streetAddress;
        // statusType = house.statusText;
        beds = house.beds;
        baths = house.baths;
        area = house.area;
        
        streetAddress = house.hdpData.homeInfo.streetAddress;
        city = house.hdpData.homeInfo.city;
        state = house.hdpData.homeInfo.state;
        zip = house.hdpData.homeInfo.zipcode;
        location = city + " • " + state + " • " + zip;
    } else {
        // with buildingId
        // id = house.buildingId;
        // title = house.statusText;
        // statusType = house.statusType;
        beds = house.minBeds;
        baths = house.minBaths;
        area = house.minArea;

        location = " ";
    }

    if (area != null) {
        area = area + "sqrt";
    } else {
        area = "n/a"
    }

    return (
        <div>
            <section className= "house-details-container">
                
                {/* <div className="house-details-images-container">{images.map((image, index) =>
                    <img key={index} src={image.fields.file.url} alt={title} />)}</div> */}
                <div className="house-details-images-container">
                    <img src={imgSrc} alt="house listing"></img>
                    <img src={imgSrc} alt="house listing"></img>
                    <img src={imgSrc} alt="house listing"></img>
                </div>
                
                <div className="house-details-content-container">

                        <article className="description">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="information">
                            <h3>Info</h3>
                            <p>Type: type</p>
                            <p>Price : {price}</p>
                            <p>Size : {area}</p>
                            <p>Beds : {beds}</p>
                            <p>Baths : {baths}</p>
                            <p>Geolocation: {latitude}, {longtitude}</p>
                            <p>{streetAddress}<br/>{location}</p>
                        </article>

                </div>
            </section>


        </div>
    )
}
