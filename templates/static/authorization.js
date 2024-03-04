const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = 'd0784d5f02e246259aa3c1a2a984cab5';
const scopes = [ 'user-top-read', 'user-follow-read', 'user-read-recently-played', 'streaming' ];
const redirectUri = 'https://burli.biz/statify/analytics';
window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
/* Redirect URL:
https://burli.biz/statify/analytics/#access_token=...&token_type=...
*/
const hash = window.location.hash
   .substring(1)
   .split('&')
   .reduce(function(initial, item) {
        if (item) {
            var parts = item.split('=');
            initial[parts[0]]=decodeURIComponent(parts[1]);
        }
           return initial;
    }, {});
window.location.hash = '';
_token = hash.access_token;  // store token in variable
if (! _token) {  
    window.location = url_landing;  // redirect to landing page
} else { 
  // user logged in, fetch data etc. ...
}
// In authorization.js
$(document).ready(function() {
    $('#spotify-login-btn').on('click', function() {
        // Make an AJAX request to the Flask endpoint '/authorize'
        $.ajax({
            url: '/authorize',
            type: 'GET',
            success: function(response) {
                // Handle success, if needed
            },
            error: function(err) {
                // Handle error, if needed
            }
        });
    });
});