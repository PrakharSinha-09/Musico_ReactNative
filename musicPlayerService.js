import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";

import {playListData} from './src/constants'

export async function setupPlayer(){
    let isSetup = false;
    try {
        await TrackPlayer.getCurrentTrack()
        isSetup = true
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup = true
    } finally{
        return isSetup;
    }
}

//adding the playlist in the TrackPlayer, because it is the starting point!
export async function addTrack(){
    await TrackPlayer.add(playListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

//adding functionalities to our music app
export async function playbackService (){
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}

//the good thing is, we can use this setup (codebase) in our any react-native app, where we need music functionality!
