var playlist = {
  Migos: 'Stir Fry'
}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist.assign({}, { artistName: songTitle })
}
