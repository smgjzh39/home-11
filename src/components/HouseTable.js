import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import sf_housing_data from '../assets/mocks/sf_housing_data.json'
import sf_housing_data_full from '../assets/mocks/sf_housing_data_full.json'

export default function HouseTable({houses}) {
    const tableHeaders = [
        { name: "Title", field: "title", sortable: false },
        { name: "Area", field: "area", sortable: true },
        { name: "Price", field: "price", sortable: true },
        { name: "Beds", field: "beds", sortable: false },
        { name: "Baths", field: "baths", sortable: false },
        { name: "Location", field: "location", sortable: false },
        { name: "Drving Time ETA", field: "driving_time", sortable: false},
        { name: "Waling Time ETA", field: "walking_time", sortable: false}
    ];


    let tableItems = [...houses]; // set list_item as defualt table items
    console.log(tableItems);

    return (
        <table className="house_table_list">
            <thead>
                <tr>
                    {  
                        tableHeaders.map( head => (
                            <th key={head.field}>
                                {head.name}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        tableItems.map ( house => (
                        <tr key={house.zpid? house.zpid : house.buildingId}>
                            <td data-label="Title">
                            <Link to={`/housedetails/${house.zpid? house.zpid : house.buildingId}`}>
                                {house.zpid? house.hdpData.homeInfo.streetAddress : house.statusText}
                            </Link>   
                            </td>
                            <td data-label="Area">
                                {house.zpid? house.area? house.area: "N/A" : house.minArea? house.minArea : "N/A"}
                            </td>
                            <td data-label="Price">
                                {house.price}
                            </td>
                            <td data-label="Beds">
                                {house.zpid? house.beds : house.minBeds}
                            </td>
                            <td data-label="Baths">
                                {house.zpid? house.baths : house.minBaths}
                            </td>
                            <td data-label="Location">
                                {house.zpid? 
                                `${house.hdpData.homeInfo.streetAddress}, ${house.hdpData.homeInfo.city} • 
                                ${house.hdpData.homeInfo.state} • ${house.hdpData.homeInfo.zipcode}`
                                : "Geolocation: " + house.latLong.latitude+", "+house.latLong.longitude}
                            </td>
                            <td data-label="Driving_Time_ETA">
                                {house.driving}
                            </td>
                            <td data-label="Walking_Time_ETA">
                                {house.walking} 
                            </td>
                            {/* <td>
                                {
                                    getCommuteTime(house.latLong.latitude, house.latLong.longitude, "37.794279","-122.419471")
                                }
                            </td> */}
                        </tr>
                        ) )
                    }
            </tbody>
        </table>
    )
       
}
