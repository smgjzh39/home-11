import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import sf_housing_data from '../assets/mocks/sf_housing_data.json'
import sf_housing_data_full from '../assets/mocks/sf_housing_data_full.json'

import HouseTable from '../components/HouseTable'
// import { Client, Status } from "@googlemaps/google-maps-services-js";
// import { API_KEY } from "../const"
// import axios from 'axios'


export default function table() {

    return (
        // 
        <div>
            <HouseTable houses={sf_housing_data}></HouseTable>
        </div>
        )
}
