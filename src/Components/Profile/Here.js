import React, { Component } from 'react';

export default class Map extends Component {

    // For conciseness simply included all parameters in the querystring directly
  
    constructor(props) {
      super(props);
      this.state = {
        url: `https://image.maps.api.here.com/mia/1.6/mapview?w=${window.innerWidth}&h=${window.innerHeight/3}&z=17&co=Tunisia&ci=${this.props.address}&t=5&poitxs=16&poitxc=black&poifc=yellow`,
        points: [],
      }
    }
  
    // Helper function to format list of points
  
    // getPOIList() {
    //   if (this.state.points.length > 0) {
    //     let param = '&poi=';
    //     for (var poi in this.state.points) {
    //       param += poi.latitude + ',' + poi.longitude;
    //     }
    //     return param;
    //   }
  
    //   return '';
    // }
  
    // Render method builds the URL dynamically to fetch the image from the
    // HERE Map Image API
  
    render() {
      return (
        <img

          src={ this.state.url
            + '&app_id=EsiP6dcGmnMZC2nfaGud'
            + '&app_code=8x4ubUXfg56YQt2TBHgiVg'
            //+ this.getPOIList()
            }
          alt="Todo Map"/>
      );
    }
  }
  