import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import sf_housing_data from '../assets/mocks/sf_housing_data.json'
// import sf_housing_data from '../assets/mocks/sf_housing_data_full.json'
import { API_KEY } from '../const'
import { AutoComplete } from 'antd';


const mapStyles = {
  width: '39%',
  height: '84vh'
};

const markerIcon = "https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0";

export class MapContainer extends Component {
  render() {
    return (

      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
          lat: 37.771814,
          lng: -122.4363648
        }}
      >
        {
          sf_housing_data.map((house) =>

            <Marker
              key={house.zpid ? house.zpid : house.buildingId}
              position={
                {
                  lat: house.latLong.latitude,
                  lng: house.latLong.longitude
                }}
              icon={{
                url: markerIcon
              }}
            />

          )
        }
      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);
