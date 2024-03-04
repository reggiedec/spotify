/* 
Three different Time Ranges available: long_term (all time), short_term (4 weeks), medium_term (6 months)
Testing: https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/
_token from Authorization
*/


getTopTracks("medium_term").done(function(data) {
    tracks_mediumterm = fill_track_array(data);
})

function getTopArtists(timeRange) {
    return $.ajax({
        url: "https://api.spotify.com/v1/me/top/artists?time_range=" + timeRange,
        type: "GET",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + _token);
        }
    });
}

function getTopTracks(timeRange) {
    return $.ajax({
        url: "https://api.spotify.com/v1/me/top/tracks?time_range=" + timeRange,
        type: "GET",
        dataType: "json",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + _token);
        }
    });
}