import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"
import { useStateProvider } from "../../utils/StateProvider";

export default function Player(props) {
  const [play, setPlay] = useState(false)
  const [{ token }] = useStateProvider();
  // const trackUri="spotify:track:11dFghVXANMlKmJXsNCbNl"  //the selected song uri should come here
  const trackUri=`${props.TrackUri}`

  // console.log(trackUri)
  useEffect(() => setPlay(true), [trackUri])

  if (!token) return null
  return (
    <SpotifyPlayer
      token={token}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}