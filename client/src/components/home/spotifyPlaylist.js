import React from 'react';

function SpotifyPlaylist() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: '<iframe src="https://open.spotify.com/embed/playlist/4ALCAccb64brGsMMFP2ik1?utm_source=generator&theme=0" width="300" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
      }}
    />
  );
}

export default SpotifyPlaylist;
