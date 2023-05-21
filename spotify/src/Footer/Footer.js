import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons'
import React from 'react'
import { Grid, Slider } from "@material-ui/core";
import "./Footer.css";

const Footer=()=> {
  return (
    <div className="footer">
        <div className="footer_left">
            <img className="footer_albumLogo" src="" alt="artist logo"/>
            <div className="footer_songInfo">
                <h4>yeah!</h4>
                <p>User</p>
            </div>
        </div>

        <div className="footer_center">
            <Shuffle className="footer_green"/>
            <SkipPrevious className="footer_icon"/>
            <PlayCircleOutline fontSize="large" className="footer_icon"/>
            <SkipNext className="footer_icon"/>
            <Repeat className="footer_green"/>
        </div>

        <div className="footer_right">
        <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
        </div>
    </div>
  )
}

export default Footer
