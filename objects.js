var playlist = {
  Migos: 'Stir Fry'
}

function updatePlaylist(playlist, artistName, songTitle) {
     playlist[artistName] =  songTitle;
     return playlist
}

function removeFromPlaylist(playlist, artisName) {
  delete playlist.artistName
  return playlist
}
