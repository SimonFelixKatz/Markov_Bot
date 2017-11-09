console.log("The Bot is starting");


var Twit = require('twit');


var T = new Twit({
  consumer_key:         'B8BGoR3XRDtHWP0Ft0H1zFf8y',
  consumer_secret:      'cqd6ZSD6O3xYGjSvshRlr1HgeqaeSBHVS3WNnrjD61o2wMZuEN',
  access_token:         '928348418501693440-YNrZvFcgkHQBRyxFtoScvfB09exKM7G',
  access_token_secret:  '40bfKyo3Bbu51D5RdBMMLNQRA0PviEhpQfrR4MUKcF3tY',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

var tweets;

var params = {
	q: 'motion',
	count : 10
	}

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
	tweets = data.statuses[1,3,5].text;
	console.log(data);
	
}


const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(tweets))

app.listen(3000, () => console.log('Example app listening on port 3000!'))



/*
T.get('search/tweets', { q: 'motion design', count: 5 }, function(err, data, response) {
  console.log(data)
})

*/