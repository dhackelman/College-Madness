import React from 'react';
// import axios from 'axios';
import GoogleMapReact from 'google-map-react';

class Marker extends React.Component {


      render() {
            let {
          map, google, position, mapCenter, icon, label, draggable
        } = this.props;
        if (!google) {
          return null
        }

        let pos = position || mapCenter;
        if (!(pos instanceof google.maps.LatLng)) {
          position = new google.maps.LatLng(pos.lat, pos.lng);
        }

        const pref = {
          map: map,
          position: position,
          icon: icon,
          label: label,
          draggable: draggable
        };
        this.marker = new google.maps.Marker(pref);

        evtNames.forEach(e => {
          this.marker.addListener(e, this.handleEvent(e));
        });

        this.markerPromise.resolve(this.marker);
      }
        return (
             <Marker>

             </Marker>
          );
        }
    }


export default Marker;
