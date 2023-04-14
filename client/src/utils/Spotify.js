const Spotify = {
    clientId: "0ffdd015548d4b369d66245e731baf50",
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
      "user-top-read",
      "streaming"
    ]
  };
  
  export default Spotify;