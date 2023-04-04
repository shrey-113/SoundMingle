



const clientId = "";
const redirectUrl = "http://localhost:3000/";
const apiUrl = "https://accounts.spotify.com/authorize";
const scope = [
"user-read-email",
"user-read-private",
"user-read-playback-state",
"user-modify-playback-state",
"user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-position",
"user-top-read"
];

export const handleLoginClick = () => {
window.location.href=`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`;
};
