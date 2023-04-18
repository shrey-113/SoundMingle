const Spotify = {
  clientId: "ce3fcc2b03484ccf91343d2a8495e49a",

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
    "streaming",
  ],
};

export default Spotify;
