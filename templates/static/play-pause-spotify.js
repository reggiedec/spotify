// Play a specified track on the Web Playback SDK's device ID

function playSong(_device_id, uri, position) {
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/play?device_id=" + _device_id,
        type: "PUT",
        data: '{"uris": ["' + uri + '"], "position_ms" : ' + position + '}',
        //data: '{"uris": ["spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"]}',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + _token);
        },
        success: function(data) {
            console.log(data)
        },
        error: function(err) {
            console.log(err)
            alert("Something went wrong :( Try again!")
        }
    });
}

function pauseSong(_device_id) {    // position in script.js listener
     $.ajax({
        url: "https://api.spotify.com/v1/me/player/pause?device_id=" + _device_id,
        type: "PUT",
        //data: '{"uris": ["spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"]}',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + _token);
        },
        success: function(data) {
            console.log(data)
        },
        error: function(err) {
            console.log(err)
        }
    })
}

function getSongsByArtist(_id) {
    return $.ajax({
        url: "https://api.spotify.com/v1/artists/" + _id + "/top-tracks?country=AT",
        type: "GET",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + _token);
        }
    });
}