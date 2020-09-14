import { Client, Status } from "@googlemaps/google-maps-services-js";
import { API_KEY } from "../const"
import axios from 'axios'

export async function getCommuteTime(originLat, originLng, destLat, destLng, mode = "driving") {
    // driving, walking, bicycling, transit (may not work properly due to reduced transit schedule during COVID)
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Google API requires CORS header set, this is a workaround to get it working locally.
    const API_BASE_ENDPOINT = 'https://maps.googleapis.com/maps/api/distancematrix/json?'
    const origin = originLat + ',' + originLng
    const dest = destLat + ',' + destLng
    const url = proxyurl + API_BASE_ENDPOINT + 'origins=' + origin + '&destinations=' + dest + '&mode=' + mode + '&key=' + API_KEY;

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }

    const response = await axios.get(url, { 'headers': headers })
        .then(data => {
            return data['data']['rows'][0]['elements'][0]['duration']['text'];
        })
        .catch(err => { return 'N/A' });
};
