import React from 'react';
// import axios from 'axios';
import GoogleMapReact from 'google-map-react';
// import Marker from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'transparent', background: 'transparent',
    height: 30, width: 30, top: -10, left: -60,
  }}>
    <img src={require('../../styles/images/bball-placeholder.png')} alt={"basketball"}/>
    {text}
  </div>
);
const AnyReactComponent2 = ({ text }) => (
  <div style={{
    position: 'relative', color: 'black', background: 'yellow',
    height: 10, width: 10, top: -10, left: -60,
  }}>
    {text}
  </div>
);


class CollegeOnAMap extends React.Component {


      render() {
        const props = {
        center: {lat:this.props.lat, lng:this.props.lng},
        zoom: 5
      }


        return (
          <GoogleMapReact center={props.center} defaultZoom={props.zoom} >
            <AnyReactComponent
               lat={this.props.lat}
               lng={this.props.lng}
               text={''}
             />
           <AnyReactComponent2
                lat={ 35.994034}
                lng={-78.898621}
                text={'D'}
              />
         </GoogleMapReact>
          );
        }
    }


export default CollegeOnAMap;
