import React from 'react';
import {Link} from 'react-router';
import YouTube from 'react-youtube';

class CollegePrograms extends React.Component {



    render() {

      console.log('hre', this.props.school.video_url);
      const opts = {
        height: '290',
        width: '440',
        playerVars: {
          autoplay: 1
        }
      };
      let site = this.props.school.url;
      let yt = this.props.school.video_url;
      let videoId = yt.split("v=")[1].substring(0, 11)
        return (
                <div className="college__basics">
                  <h2>{this.props.school.school_name}</h2>
                  <h3>Watch a short informational video</h3>
                  <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={this._onReady}
                  />
                <Link to={site} target="_blank" alt={this.props.school.name}>Learn More @ {this.props.school.url}</Link>

              </div>
        );
    }
}

export default CollegePrograms;
