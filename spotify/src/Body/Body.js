import React from 'react';
import "./Body.css";
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import { useDataLayerValue } from '../DataLayer';
import Header from '../Header/Header'
import SongRow from '../SongRow/SongRow';

const Body=({spotify})=> {

    const[{discover_weekly}, dispatch]=useDataLayerValue();
  return (
    <div className="body">
        <Header spotify={spotify}/>

        <div className="body_info">
            <img src={discover_weekly?.images[0].url} alt="Daily mix logo"/>
            <div className="body_infoText">
                <strong>PLAYLIST</strong>
                <h2>Daily Mix 1</h2>
                <p>{discover_weekly?.description}</p>
            </div>
        </div>

        <div className="body_songs">
            <div className="body_icons">
                <PlayCircleFilled className="body_shuffle"/>
                <Favorite/>
                <MoreHoriz/>
            </div>

            {discover_weekly?.tracks.items.map(item=>(
                <SongRow track={item.track}/>
            ))}
        </div>
      
    </div>
  )
}

export default Body
