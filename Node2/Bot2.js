console.log("The Bot is starting");


var Twit = require('twit');


var T = new Twit({
  consumer_key:         'B8BGoR3XRDtHWP0Ft0H1zFf8y',
  consumer_secret:      'cqd6ZSD6O3xYGjSvshRlr1HgeqaeSBHVS3WNnrjD61o2wMZuEN',
  access_token:         '928348418501693440-YNrZvFcgkHQBRyxFtoScvfB09exKM7G',
  access_token_secret:  '40bfKyo3Bbu51D5RdBMMLNQRA0PviEhpQfrR4MUKcF3tY',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})


T.post('statuses/update', { status: '#iambot' }, function(err, data, response) {
  console.log(data)
})

