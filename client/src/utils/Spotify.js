const Spotify = {
    clientId: "dd847ce2367845fc80ac53dea8eac929",
    redirectUrl: "http://localhost:3000/",
    apiUrl: "https://accounts.spotify.com/authorize",
    scope: [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read"
    ]
  };
  
  export default Spotify;