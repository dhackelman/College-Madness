import React from 'react';
// import axios from 'axios';
import GoogleMapReact from 'google-map-react';

class CollegeOnAMap extends React.Component {


      render() {
        const props = {
        center: {lat:this.props.lat, lng:this.props.lng},
        zoom: 4,
      }
        return (
             <GoogleMapReact center={props.center} defaultZoom={props.zoom} >
            </GoogleMapReact>
          );
        }
    }


export default CollegeOnAMap;
