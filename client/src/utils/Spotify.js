const Spotify = {
  clientId: "74d600d3280d4b839d2c1a912087a0d5",

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
    "playlist-modify-private",
    "playlist-modify-public",
  ],
};

export default Spotify;
