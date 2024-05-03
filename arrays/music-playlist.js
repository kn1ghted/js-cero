// This exercise implements the use of shift() and unshift() in arrays

// Fuction to manage a playlist
// Removes the first song and replace it with a new song
function managePlaylist(playlist,newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

// Testing the function with an initial playlist
const initialPlaylist=['I Alone','#41','Lines in the Sand']
const newSongToAdd='The patient'
console.log('Initial playlist: ',initialPlaylist)
const updatedPlaylist = managePlaylist(initialPlaylist,newSongToAdd)
console.log('New song to add: ',newSongToAdd)
console.log('Updated playlist: ',updatedPlaylist)