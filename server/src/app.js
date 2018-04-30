const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/ibee', { promiseLibrary: require('bluebird') })
.then(() =>  console.log('Connected!'))
.catch((err) => console.error(err));

 	  /* ==============================================================//
	 //																 //
   //						   RESTful API                          //
  //															   //
 /* ============================================================ */
var authAPI = require('../api/users');
var packagesAPI = require('../api/packages');
var subscriptionsAPI = require('../api/subscriptions');
var walletsAPI = require('../api/wallets');
var livesAPI = require('../api/lives');

app.use('/api/packages' , packagesAPI);
app.use('/api/subscriptions' ,subscriptionsAPI);
app.use('/api/auth' , authAPI);
app.use('/api/wallets', walletsAPI);
app.use('/api/lives' , livesAPI);

var port = process.env.PORT || 8081;
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(port);
io.on('connection', function (socket) {
	console.log('Server connected socket');
});
