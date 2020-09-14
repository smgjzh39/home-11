import React, { useState}  from 'react'
import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form";
import House from '../assets/images/house_PNG.png'

import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


export default function Home() {
    const [city, setCity] = useState('');

     const defaultCity = "San Francisco";

    // const { handleSubmit } = useForm();
    // const onSubmit = (data) => {
    //     history.push ('/Listing', )
    // }
    // const onSubmit = (data) => {
    //     return <Redirect to="/home" />
    // }
    const history = useHistory();
    //const houseSearchSubmitHanddler = () =>{
    //     history.push('/Listing', { response: 'san jose'});
    // }

    return (
        <div className="container home">
             {/** main image */}
            <div className="main-image-container"> 
                <img alt="Houses Searching" src={House} />
            </div>

            {/** main content */}
            <div className="main-text-container">
                <div>
                <h1>Find Your New Place with <span>HouseFinder!</span></h1>
                    <p>
                        Knowing the neighbor, you can look for the ideal house 
                        available across the country.  </p>
                </div>
                 {/** search bar */}
                <div className="search-container">
                    {/* <form onSubmit={houseSearchSubmitHanddler}> */}
                    <form>
                        <input type="text" placeholder="Enter a City" name="search" /> 
                        {/* <button type="submit">Search <i className="ionicons icon ion-ios-search"/></button>; */}
                        {/* <button onClick={() => history.push('/Listing', { response: {setCity("San Jose")}})}>Search <i className="ionicons icon ion-ios-search"/></button>; */}
                        <button> <Link to={{
                        pathname: "/Listing",
                        state: { citySearched : defaultCity }
                        }}><i className="ionicons icon ion-ios-search"/></Link></button>
                    </form>
                </div>
                   
                <div>
                    <Link to="/Listing"> All Houses </Link>
                </div>
            </div>
            
        </div>
    )
}
