window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
    name: 'Statify Web Player',
    getOAuthToken: cb => { cb(_token); }
});

// Error handling
player.addListener('initialization_error', ({ message }) => { console.error(message); });
player.addListener('authentication_error', ({ message }) => { console.error(message); });
player.addListener('account_error', ({ message }) => { console.error(message); });
player.addListener('playback_error', ({ message }) => { console.error(message); });

// Playback status updates
player.addListener('player_state_changed', state => { 
    console.log(state); 
    // if song is paused, update position
    if (state.paused == true) {
        current_position_ms = state.position;
        music_paused = true;
        $("#control-panel").removeClass("active");  // hange icon and animation
    }
});

// Ready
player.addListener('ready', ({ device_id }) => {
    device_id_player = device_id;   // PLAYER, NEEDED IN EVENTS!
    console.log('Ready with Device ID', device_id_player);
    // Play a track using our new device ID
    //play(device_id);
    $("#spinner_").css("display", "none");  // loading spinner disable
});

// Not Ready
player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
});
// Connect to the player!
player.connect();

};