var send_tweet = function(params, confirmation_function) {

    
    var oauth = new TitaniumOAuth('MZqQKKYS9jJsaHDgwX97w','68na5a03K0pUTcyjFHp0PKAbg3TkJtOCaVauSyKmZA');
    
    // var params = [['status', tweet]];
        
    Ti.API.info(params)
    var options = {
        method: 'POST',
        action: 'https://api.twitter.com/1/statuses/update.json',
        parameters: params
    };

    oauth.requestToken(function() {
        oauth.request(options, function(data) {
            Ti.API.info(data);
            confirmation_function.call();
        });
    });
    
}