import React, { useState, useEffect } from 'react'
// import houselisting from '../assets/mocks/data'
import ListingCard from '../components/ListingCard'
import MapContainer from '../components/MapContainer'
import sf_housing_data from '../assets/mocks/sf_housing_data.json'
import HouseTable from '../components/HouseTable'
import { Link, useLocation } from 'react-router-dom'


const VIEW_HOUSE_LISTING = 'house_listing';
const VIEW_COMPARE_Table = 'house_compare_table'


export default function Listing() {

    let location = useLocation();
    let citySearched = "US";

    if (location.state !== undefined) {
      citySearched = location.state.citySearched;
    }


    let results;

    const [houseCompareTable, setHouseCompareTable] = useState([]);
    const [pageView, setPageView] = useState(VIEW_HOUSE_LISTING);
    
    const navigateTo = (viewPage) => {
      console.log(houseCompareTable);
      setPageView(viewPage);
  };


    /** listing view */
    // map house listing card
    if (sf_housing_data.length > 0) { 
      results = sf_housing_data.map ((houses) =>
       {
          if (!!houses.zpid) {
            //with zpid
            return  <ListingCard key={houses.zpid} house={houses}
            houseCompareTable={houseCompareTable} setHouseCompareTable={setHouseCompareTable}/>
          } else {
            //with buildingId
            return <ListingCard key={houses.buildingId} house={houses}
            houseCompareTable={houseCompareTable} setHouseCompareTable={setHouseCompareTable}/>
          }
       }
       
      );
    } else {
      results = (
        <div>
          <h2>Sorry!</h2>
          <h3> No listings available yet.</h3>
        </div>
      );
    }

    
    // render listing view
    const renderListing = () => (
      <div className="listings">
        <div className="listings-container" >
          <div className="listings-container-header">
            <p> Searching houses in: {citySearched}  </p>
            <button onClick={()=>navigateTo(VIEW_COMPARE_Table)}>view Copmare Table</button>
          </div>
          <div className="listings-container-content">
            {results}
          </div>
        </div>
          <div className="map-container"> 
            <MapContainer />
          </div>
      </div>
    )

    /** house compare table */
    // render compare table
    const renderCompareTable = () => (
      <div>
        <HouseTable houses={houseCompareTable}></HouseTable>
        <button onClick={()=>navigateTo(VIEW_HOUSE_LISTING)}>view Listing</button>
      </div>

    )
    

    return (
      <div>
        {
          pageView === 'house_listing' && renderListing() 
        }
        {
          pageView === 'house_compare_table' && renderCompareTable() 
        }
      </div>
    )
}
